#!/usr/bin/env node
/**
 * Regenerates `modules/marketing/media/manifest.generated.ts` from the actual
 * bytes in `public/screenshots/` and `public/media/`.
 *
 *   node scripts/media-manifest.mjs            rewrite the manifest
 *   node scripts/media-manifest.mjs --check    fail if the committed one is stale
 *
 * Every measured field comes from `scripts/lib/measure.mjs`, which reads the file
 * format itself — no ffmpeg, no subprocess, nothing that would stop this from
 * running on Vercel. The editorial half comes from `provenance.json`, validated
 * with zod on the way in.
 *
 * This file is also a small library: `media-check.mjs` and `media-ingest.mjs`
 * import the scanning, rendering and parsing helpers below rather than
 * reimplementing them, so there is exactly one definition of "what the ledger
 * covers" and one of "how it is spelled".
 *
 * ── Determinism is a requirement, not a nicety ────────────────────────────────
 * The output carries no timestamp, no hostname and no run counter, and keys are
 * sorted. Two runs on the same bytes must produce a byte-identical file, because
 * `--check` compares text and a generated file that churns turns every unrelated
 * PR into a merge conflict.
 */

import { readFileSync, readdirSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { measureSafe } from './lib/measure.mjs';
import {
  EMPTY_STAMP,
  SLUG_RE,
  STAMP_FIELDS,
  parseProvenance,
} from '../modules/marketing/media/provenance.schema.mjs';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export const MANIFEST_PATH = join(root, 'modules', 'marketing', 'media', 'manifest.generated.ts');
export const PROVENANCE_PATH = join(root, 'modules', 'marketing', 'media', 'provenance.json');

/**
 * The two directories the ledger covers, and the URL each maps to.
 *
 * `screenshots/` is not renamed or folded into `media/` even though the split is
 * by authorship rather than by kind: six of its files are live public URLs, and
 * moving a published image to earn tidier directory names is a cost paid by
 * everyone who ever linked one.
 */
export const MEDIA_DIRS = [
  { dir: 'screenshots', urlPrefix: '/screenshots' },
  { dir: 'media', urlPrefix: '/media' },
];

/** Files in those directories that are not assets (`.gitkeep`, editor droppings). */
function isIgnored(name) {
  return name.startsWith('.');
}

/**
 * Everything the ledger should describe, found on disk.
 *
 * @returns {{ found: { key: string, dir: string, file: string, absPath: string, src: string }[], problems: string[] }}
 */
export function scanMediaFiles() {
  const found = [];
  const problems = [];
  const seen = new Map();

  for (const { dir, urlPrefix } of MEDIA_DIRS) {
    const absDir = join(root, 'public', dir);
    if (!existsSync(absDir)) continue;

    for (const file of readdirSync(absDir).sort()) {
      if (isIgnored(file)) continue;
      const absPath = join(absDir, file);
      if (!statSync(absPath).isFile()) continue;

      const key = basename(file, extname(file));
      if (!SLUG_RE.test(key)) {
        problems.push(
          `public/${dir}/${file}: "${key}" is not a usable ledger key. ` +
            'Rename the file to a lowercase slug (letters, digits, single hyphens), ' +
            'e.g. `agent-demo.gif` — the key is how content files refer to it.'
        );
        continue;
      }

      // Two directories, one key namespace: `screenshots/demo.png` and
      // `media/demo.webm` would silently overwrite each other in the object
      // literal, and which one survived would depend on directory order.
      const previous = seen.get(key);
      if (previous) {
        problems.push(
          `Duplicate ledger key "${key}": public/${previous} and public/${dir}/${file}. ` +
            'Rename one — a key names an asset, not a file path.'
        );
        continue;
      }
      seen.set(key, `${dir}/${file}`);

      found.push({ key, dir, file, absPath, src: `${urlPrefix}/${file}` });
    }
  }

  return { found, problems };
}

/** Read and validate `provenance.json`. Absent is legal; malformed is not. */
export function readProvenance() {
  if (!existsSync(PROVENANCE_PATH)) return { ok: true, value: {} };
  return parseProvenance(
    readFileSync(PROVENANCE_PATH, 'utf8'),
    'modules/marketing/media/provenance.json'
  );
}

/** Emit a stamp with its fields in a fixed order, so the output is stable. */
function orderStamp(stamp) {
  const ordered = {};
  for (const field of STAMP_FIELDS) ordered[field] = stamp[field] ?? null;
  return ordered;
}

/**
 * Measure everything and merge in provenance.
 *
 * Returns `ledger: null` whenever there is any problem at all, so no caller can
 * accidentally write a partial manifest: a ledger missing the one asset that
 * failed to parse is worse than no ledger, because it looks complete.
 *
 * @returns {{ ledger: Record<string, object> | null, problems: string[] }}
 */
export function buildLedger() {
  const { found, problems } = scanMediaFiles();

  const provenance = readProvenance();
  if (!provenance.ok) return { ledger: null, problems: [...problems, ...provenance.problems] };

  const stamps = provenance.value;
  const keys = new Set(found.map((entry) => entry.key));

  // A stamp with no file means the asset was deleted and its record left behind.
  // Refusing here rather than dropping it silently keeps provenance.json readable
  // as a list of what the site ships, which is the only reason to keep it by hand.
  for (const key of Object.keys(stamps).sort()) {
    if (!keys.has(key)) {
      problems.push(
        `provenance.json has "${key}" but no such file exists in ` +
          `${MEDIA_DIRS.map((d) => `public/${d.dir}/`).join(' or ')}. ` +
          'Remove the entry, or restore the asset.'
      );
    }
  }

  const ledger = {};
  for (const entry of [...found].sort((a, b) => (a.key < b.key ? -1 : 1))) {
    const measured = measureSafe(entry.absPath);
    if ('error' in measured) {
      problems.push(`public/${entry.dir}/${entry.file}: ${measured.error}`);
      continue;
    }

    // The caller-owned null-dimension policy (see `types.ts`): an asset whose
    // intrinsic size cannot be read cannot reserve its own layout space, and "no
    // layout shift on the hero" is a site-wide rule. Refuse it by name rather
    // than emit a null that every consumer would then have to defend against.
    if (measured.width === null || measured.height === null) {
      problems.push(
        `public/${entry.dir}/${entry.file}: no intrinsic dimensions ` +
          '(an SVG with neither width/height nor a viewBox). Add a viewBox, or do not ' +
          'ship it through the ledger — pages reserve space from these numbers.'
      );
      continue;
    }

    ledger[entry.key] = {
      src: entry.src,
      kind: measured.kind,
      mime: measured.mime,
      width: measured.width,
      height: measured.height,
      bytes: measured.bytes,
      sha256: measured.sha256,
      animated: measured.animated,
      frames: measured.frames,
      durationMs: measured.durationMs,
      provenance: orderStamp(stamps[entry.key] ?? EMPTY_STAMP),
    };
  }

  return { ledger: problems.length > 0 ? null : ledger, problems };
}

/**
 * Render the TypeScript file.
 *
 * The object literal is emitted as strict JSON — quoted keys, no trailing commas
 * — for two reasons. It makes the output trivially deterministic, and it lets
 * `media-check.mjs` read the committed manifest back with `JSON.parse` instead of
 * parsing TypeScript. A hand-edit that breaks JSON compatibility therefore fails
 * loudly at the verifier, which is exactly the intended fate of a hand-edit.
 */
export function renderManifest(ledger) {
  return `/**
 * MACHINE-GENERATED — do not edit by hand. Your changes will be overwritten.
 *
 *   node scripts/media-manifest.mjs
 *
 * Every number here is measured from the file's bytes; the \`provenance\` field is
 * merged from \`provenance.json\`, which IS hand-maintained. Editing a dimension
 * here does not change an image — it only makes the ledger wrong, and
 * \`node scripts/media-check.mjs\` will say so.
 *
 * Content files (\`modules/marketing/content/<locale>/\`) own \`alt\` and \`caption\`
 * and bind to a row here through the first eight characters of its \`sha256\`
 * (\`describes()\` in ./types). That binding is what forces a human to re-read alt
 * text when the bytes underneath it are swapped.
 */

import type { MediaAsset } from './types';

export const MEDIA = ${JSON.stringify(ledger, null, 2)} as const satisfies Record<string, MediaAsset>;

/** Every asset the site ships. */
export type MediaKey = keyof typeof MEDIA;

/**
 * Narrowing by \`kind\` through the ledger's own literal types, so the two key
 * unions cannot drift from the assets: dropping a WebM into \`public/media/\`
 * widens \`MotionKey\` the moment the manifest is regenerated, with nothing to
 * update by hand.
 */
type KeysOfKind<K extends MediaAsset['kind']> = {
  [P in MediaKey]: (typeof MEDIA)[P]['kind'] extends K ? P : never;
}[MediaKey];

/** Rendered as an \`<img>\` — including an animated GIF, which is still an \`<img>\`. */
export type ImageKey = KeysOfKind<'image'>;

/** Rendered as \`<video controls>\`. Never a third-party player: the CSP is \`default-src 'self'\`. */
export type MotionKey = KeysOfKind<'motion'>;
`;
}

/**
 * Read the committed manifest back as data.
 *
 * @param {string} text
 * @returns {{ ok: true, value: Record<string, object> } | { ok: false, problems: string[] }}
 */
export function parseCommittedManifest(text) {
  // Git is configured `core.autocrlf=true` on the machine this was written on, so
  // a file committed with LF arrives on disk with CRLF. Normalise before doing
  // anything textual, or the checks fail on Windows and pass on CI.
  const source = text.replace(/\r\n/g, '\n');
  const open = source.indexOf('export const MEDIA = {');
  const close = source.indexOf('\n} as const satisfies');
  if (open === -1 || close === -1 || close < open) {
    return {
      ok: false,
      problems: [
        'modules/marketing/media/manifest.generated.ts: cannot find the generated ' +
          '`export const MEDIA = { … } as const satisfies` block. It has been hand-edited ' +
          'or truncated. Regenerate it: node scripts/media-manifest.mjs',
      ],
    };
  }

  const body = source.slice(open + 'export const MEDIA = '.length, close + 2);
  try {
    return { ok: true, value: JSON.parse(body) };
  } catch (error) {
    return {
      ok: false,
      problems: [
        'modules/marketing/media/manifest.generated.ts: the MEDIA object is no longer ' +
          `plain JSON (${error.message}). It is generated; do not edit it by hand. ` +
          'Regenerate it: node scripts/media-manifest.mjs',
      ],
    };
  }
}

/** Normalised text of the committed manifest, or `null` if there isn't one. */
export function readCommittedManifest() {
  if (!existsSync(MANIFEST_PATH)) return null;
  return readFileSync(MANIFEST_PATH, 'utf8').replace(/\r\n/g, '\n');
}

/** Write the manifest. Always LF — the repo has no `.gitattributes` to fix it up. */
export function writeManifest(text) {
  writeFileSync(MANIFEST_PATH, text, 'utf8');
}

/** Name the fields that differ between two ledgers, so `--check` reads like a diff. */
function describeStaleness(committed, fresh) {
  const lines = [];
  const keys = [...new Set([...Object.keys(committed), ...Object.keys(fresh)])].sort();
  for (const key of keys) {
    const before = committed[key];
    const after = fresh[key];
    if (!before) {
      lines.push(`  + ${key} — on disk, missing from the manifest`);
      continue;
    }
    if (!after) {
      lines.push(`  - ${key} — in the manifest, no longer on disk`);
      continue;
    }
    for (const field of Object.keys(after)) {
      const a = JSON.stringify(before[field]);
      const b = JSON.stringify(after[field]);
      if (a !== b) lines.push(`  ~ ${key}.${field}: ${a} → ${b}`);
    }
  }
  return lines;
}

function main() {
  const check = process.argv.includes('--check');

  const { ledger, problems } = buildLedger();
  if (problems.length > 0 || ledger === null) {
    console.error(`✗ ${problems.length} problem(s) building the media ledger:\n`);
    for (const problem of problems) console.error(`  ${problem}`);
    console.error('');
    process.exit(1);
  }

  const fresh = renderManifest(ledger);
  const committed = readCommittedManifest();

  if (!check) {
    writeManifest(fresh);
    console.log(
      `✓ modules/marketing/media/manifest.generated.ts — ${Object.keys(ledger).length} asset(s)` +
        (committed === fresh ? ' (unchanged)' : '')
    );
    return;
  }

  if (committed === null) {
    console.error(
      '✗ modules/marketing/media/manifest.generated.ts does not exist.\n\n' +
        '  Generate it: node scripts/media-manifest.mjs\n'
    );
    process.exit(1);
  }

  if (committed !== fresh) {
    const parsed = parseCommittedManifest(committed);
    console.error('✗ modules/marketing/media/manifest.generated.ts is stale.\n');
    if (parsed.ok) {
      const lines = describeStaleness(parsed.value, ledger);
      for (const line of lines.length > 0
        ? lines
        : ['  (the ledger matches; the surrounding file does not)']) {
        console.error(line);
      }
    } else {
      for (const problem of parsed.problems) console.error(`  ${problem}`);
    }
    console.error('\n  Regenerate it: node scripts/media-manifest.mjs\n');
    process.exit(1);
  }

  console.log(`✓ media manifest is up to date (${Object.keys(ledger).length} asset(s)).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
