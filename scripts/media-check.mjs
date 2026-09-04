#!/usr/bin/env node
/**
 * Verifies that the committed media ledger describes the committed bytes.
 *
 *   node scripts/media-check.mjs
 *
 * This is the half of the pipeline that runs where nothing else is available:
 * no `tepegoz-browser` checkout, no ffmpeg, no network, no GUI. It reads files
 * out of `public/` and a generated TypeScript file out of `modules/`, and that is
 * all it needs — which is what lets it sit in `npm run check` and stand between a
 * bad manifest and a production deploy.
 *
 * What it refuses:
 *
 *   a. A manifest row whose numbers do not match the file. Every measured field
 *      is re-derived from the bytes, not just the dimensions: `bytes` and
 *      `sha256` are what make the `describes` stamp in the content files mean
 *      anything, and a stale one of those silently unbinds alt text from the
 *      image it is a claim about.
 *   b. An orphan file — something sitting in `public/screenshots/` or
 *      `public/media/` with no ledger row. No page can reference it through the
 *      ledger, nothing measures it, and it is usually either dead weight or an
 *      asset someone dropped in and forgot to wire up.
 *   c. A row with no file: a live 404 on whatever page renders it.
 *   d. A malformed `provenance.json`, or a stamp for an asset that does not
 *      exist. Provenance is hand-edited, so it is parsed at its boundary rather
 *      than trusted.
 *
 * Every failure is reported, not just the first: fixing a batch of assets should
 * take one run, not one run per file.
 *
 * It does NOT re-render the manifest and compare text — that is
 * `node scripts/media-manifest.mjs --check`, which is stricter (it also catches
 * formatting and header drift) but has to be able to write the file. Both are
 * cheap; run both.
 */

import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { measureSafe } from './lib/measure.mjs';
import {
  MEDIA_DIRS,
  parseCommittedManifest,
  readCommittedManifest,
  readProvenance,
  root,
  scanMediaFiles,
} from './media-manifest.mjs';

/** Fields that are derived from the bytes, and therefore checkable against them. */
const MEASURED_FIELDS = [
  'kind',
  'mime',
  'width',
  'height',
  'bytes',
  'sha256',
  'animated',
  'frames',
  'durationMs',
];

const problems = [];
const rows = [];

/** Resolve a ledger `src` to a path under `public/`, refusing anything that escapes it. */
function resolveSrc(src) {
  if (typeof src !== 'string' || !src.startsWith('/') || src.includes('..')) return null;
  return join(root, 'public', ...src.slice(1).split('/'));
}

// ── The ledger itself ────────────────────────────────────────────────────────
const committed = readCommittedManifest();
if (committed === null) {
  console.error(
    '✗ modules/marketing/media/manifest.generated.ts does not exist.\n\n' +
      '  Generate it: node scripts/media-manifest.mjs\n'
  );
  process.exit(1);
}

const parsed = parseCommittedManifest(committed);
if (!parsed.ok) {
  for (const problem of parsed.problems) console.error(`✗ ${problem}`);
  console.error('');
  process.exit(1);
}
const ledger = parsed.value;

// ── (a) and (c): every row against its file ──────────────────────────────────
for (const key of Object.keys(ledger).sort()) {
  const entry = ledger[key];
  const absPath = resolveSrc(entry.src);

  if (absPath === null) {
    problems.push(`${key}: src ${JSON.stringify(entry.src)} is not a rooted path under public/.`);
    continue;
  }
  if (!existsSync(absPath) || !statSync(absPath).isFile()) {
    problems.push(
      `${key}: the manifest describes ${entry.src}, but public${entry.src} does not exist. ` +
        'Whatever page renders it is serving a 404.'
    );
    continue;
  }

  const measured = measureSafe(absPath);
  if ('error' in measured) {
    problems.push(`${key}: ${measured.error}`);
    continue;
  }

  const mismatches = MEASURED_FIELDS.filter(
    (field) => JSON.stringify(entry[field]) !== JSON.stringify(measured[field])
  );
  if (mismatches.length > 0) {
    problems.push(
      `${key}: the manifest does not describe public${entry.src} —\n` +
        mismatches
          .map(
            (field) =>
              `      ${field}: manifest ${JSON.stringify(entry[field])}, ` +
              `file ${JSON.stringify(measured[field])}`
          )
          .join('\n') +
        '\n      Regenerate: node scripts/media-manifest.mjs — then RE-READ the alt text in ' +
        'modules/marketing/content/ and restamp `describes`, because the bytes changed ' +
        'under copy that describes them.'
    );
    continue;
  }

  rows.push({ key, entry });
}

// ── (b): files with no row ───────────────────────────────────────────────────
const scan = scanMediaFiles();
problems.push(...scan.problems);
for (const file of scan.found) {
  if (!(file.key in ledger)) {
    problems.push(
      `public/${file.dir}/${file.file}: no manifest entry. ` +
        'Nothing can reference it through the ledger and nothing is checking it. ' +
        'Regenerate: node scripts/media-manifest.mjs — or delete the file.'
    );
  }
}

// ── (d): provenance ──────────────────────────────────────────────────────────
const provenance = readProvenance();
if (!provenance.ok) {
  problems.push(...provenance.problems);
} else {
  for (const key of Object.keys(provenance.value).sort()) {
    if (!(key in ledger)) {
      problems.push(
        `provenance.json: "${key}" has no manifest entry. ` +
          'The asset it records is gone; remove the stamp, or restore the file.'
      );
      continue;
    }
    // The generated file carries a copy of the stamp so pages can read provenance
    // without a second import. A copy that has drifted from its source means the
    // manifest was hand-edited, or was generated before provenance.json changed.
    const inManifest = JSON.stringify(ledger[key].provenance);
    const inSource = JSON.stringify({
      capturedAt: null,
      browserCommit: null,
      appVersion: null,
      tool: null,
      note: null,
      ...provenance.value[key],
    });
    if (inManifest !== inSource) {
      problems.push(
        `${key}: the provenance in the manifest differs from provenance.json.\n` +
          `      manifest: ${inManifest}\n` +
          `      source:   ${inSource}\n` +
          '      Regenerate: node scripts/media-manifest.mjs'
      );
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
if (problems.length > 0) {
  console.error(`✗ ${problems.length} media problem(s):\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('');
  process.exit(1);
}

const width = Math.max(...rows.map((row) => row.key.length), 3);
console.log(`✓ ${rows.length} media asset(s) — the manifest matches the bytes.\n`);
for (const { key, entry } of rows) {
  const size = `${entry.width}x${entry.height}`;
  const kb = `${Math.round(entry.bytes / 1024)} KB`;
  const motion = entry.animated
    ? `animated${entry.frames === null ? '' : `, ${entry.frames} frames`}${
        entry.durationMs === null ? '' : `, ${(entry.durationMs / 1000).toFixed(2)}s`
      }`
    : 'still';
  console.log(
    `  ${key.padEnd(width)}  ${entry.src.padEnd(34)}  ${size.padStart(9)}  ${kb.padStart(7)}  ${motion}`
  );
}
console.log(
  `\n  Covered: ${MEDIA_DIRS.map((d) => `public/${d.dir}/`).join(', ')}\n`
);
