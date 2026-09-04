#!/usr/bin/env node
/**
 * Reports which pages have drifted from the documents they were transcribed from.
 *
 *   node scripts/sources-check.mjs [browserRoot]
 *   node scripts/sources-check.mjs [browserRoot] --write
 *   node scripts/sources-check.mjs [browserRoot] --write --only roadmap,releases
 *   TEPEGOZ_BROWSER_ROOT=... node scripts/sources-check.mjs
 *
 * ── Why a checksum and not a converter ───────────────────────────────────────
 * Page copy is authored in `tepegoz-browser/docs/website/*.md` and transcribed
 * by hand into `modules/marketing/content/<locale>/*.ts`. The obvious fix — a
 * markdown-to-`Block` converter — is *forbidden* here, and the reason is in the
 * source documents themselves: they are saturated with `[BUILD NOTE]` and
 * `[CLAIM]` blocks that are instructions to the person building the page, not
 * copy. `home.md` literally instructs "do not substitute a mockup". A converter
 * either publishes that sentence as body copy or strips it, and a stripped
 * instruction leaves a hole that reads as finished writing. Both outcomes are
 * worse than the transcription being manual.
 *
 * So the transcription stays manual and this script covers the failure mode
 * manual transcription actually has: the source moves on and nobody notices.
 * Each content module records the sha256 of the document it was written
 * against; this recomputes it and names every page where the two no longer
 * agree. It does not know *what* changed — a human re-reads the document. That
 * is the point: this tool reports a fact, it does not make an editorial call.
 *
 * ── Why it can never red the Vercel build ───────────────────────────────────
 * It needs a second checkout, which Vercel does not have (it clones this repo
 * alone). A missing checkout is therefore a *skip*, with exit 0, in every case
 * — including a path typed wrongly on the command line, which is reported
 * loudly but still exits 0. A dev-machine tool that can fail a production
 * deploy is a dev-machine tool that gets removed from `check` the first time it
 * does, and then it protects nothing.
 *
 * ── What counts as a failure ────────────────────────────────────────────────
 *   drift        a stamp that no longer matches  → exit 1
 *   missing      a stamped source that is gone   → exit 1
 *   unstamped    no stamp at all                 → listed, exit unaffected
 *
 * The last line is deliberate. A stamped page *claims* it was reconciled
 * against a specific version of its source; when that claim stops being true it
 * is a lie and it fails. An unstamped page claims nothing, so it cannot lie —
 * it is merely unfinished, and 17 unfinished pages should not stop a run that
 * exists to surface the one page that broke.
 */

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const CONTENT_ROOT = join(root, 'modules', 'marketing', 'content');

/** The file that proves a directory is the tepegoz-browser checkout, not just a directory. */
const CHECKOUT_MARKER = join('docs', 'website', 'README.md');

/**
 * `Source: tepegoz-browser/<path>.md`, in a header comment.
 *
 * The existing files already carry this line — it was documentation before it
 * was machine-readable, and it stays readable prose. This extends the
 * convention rather than replacing it, so no page has two places that name its
 * source and no reviewer has to remember which one is authoritative.
 *
 * Group 1 is the line's indentation and group 2 the document path; the match
 * runs to end of line so `restamp()` can insert a whole line after it rather
 * than splitting the trailing `(status: ready)` onto the stamp. It stops before
 * a `\r`, not just before the `\n`: swallowing the carriage return would leave
 * a lone CR behind the inserted line and turn a CRLF file into a mixed one.
 */
/*
 * `.md` OR `.json`: the mechanism was built for transcribed prose, but a
 * generated data module can be built from structured data just as well, and a
 * recorded agent run is exactly that (`modules/marketing/traces/`). Widening the
 * extension is what keeps such a module *stamped* — without it `readProvenance`
 * returns null, the module counts as "unstamped", and the drift check that is
 * the whole point of this file silently does not apply to it.
 */
const SOURCE_RE = /^([^\S\n]*)(?:\/\*\*|\*)?[^\S\n]*Source:[^\S\n]*tepegoz-browser\/(\S+\.(?:md|json))[^\r\n]*/m;

/** `@sourceSha256 <8 hex> (<yyyy-mm-dd>)` — the date is a hint, the hash is the claim. */
const STAMP_RE = /@sourceSha256\s+([0-9a-f]{8})(?:\s*\((\d{4}-\d{2}-\d{2})\))?/;

/**
 * How much of a module is "the header".
 *
 * Scanning the whole file would let a `Source:` inside a quoted string — a
 * sentence of copy about the docs folder, say — be mistaken for a stamp. The
 * header is everything before the first top-level `export`, which is where
 * every one of these files puts its provenance comment today.
 */
function headerOf(text) {
  const firstExport = text.search(/^export /m);
  return firstExport === -1 ? text : text.slice(0, firstExport);
}

/**
 * The hash of a source document.
 *
 * Deliberately **not** `sha256sum <file>`: CRLF is normalised away and a BOM is
 * stripped first, so the same document hashes identically from a Windows
 * checkout and a Linux one. This repo is CRLF and the product repo pins LF via
 * `.gitattributes`; without normalising, every stamp written on one platform
 * would read as drift on the other and the tool would be noise within a week.
 *
 * Eight hex characters are stored, matching the media ledger's `describes`
 * stamp. It is a tripwire over a couple of dozen curated files, not a security
 * boundary — its only job is to stop matching when the document changes.
 *
 * @param {string} absPath
 * @returns {string} the full 64-character digest; callers keep the first 8
 */
export function sourceSha256(absPath) {
  const text = readFileSync(absPath, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
  return createHash('sha256').update(text, 'utf8').digest('hex');
}

/** The stamp as it is written into a header comment. */
export function stampText(digest, date) {
  return `@sourceSha256 ${digest.slice(0, 8)} (${date})`;
}

/**
 * When the source last changed, as a date a human can act on.
 *
 * Git is asked first because a fresh clone's mtimes are all checkout time,
 * which would report every document as changed today. It degrades to mtime
 * rather than failing: a missing git, or a checkout that is not a repo, should
 * cost the report a date, not the whole run. Note the date lags an uncommitted
 * local edit — the hash is what decides drift, the date only tells you where to
 * look.
 */
export function lastModified(browserRoot, relPath) {
  const git = spawnSync('git', ['log', '-1', '--format=%cs', '--', relPath], {
    cwd: browserRoot,
    encoding: 'utf8',
  });
  const committed = git.status === 0 ? git.stdout.trim() : '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(committed)) return committed;

  try {
    return statSync(join(browserRoot, relPath)).mtime.toISOString().slice(0, 10);
  } catch {
    return 'unknown';
  }
}

/**
 * Resolve the product checkout the same way every other cross-repo script here
 * does — `argv[2] ?? env ?? ../tepegoz-browser` — so nobody has to remember a
 * per-script convention. `media-ingest.mjs` and `kui-sync.mjs` read the same way.
 *
 * @returns {{ path: string, explicit: boolean, ok: boolean }}
 */
export function resolveBrowserRoot(pathArg) {
  const explicit = pathArg !== undefined || process.env.TEPEGOZ_BROWSER_ROOT !== undefined;
  const path =
    pathArg ?? process.env.TEPEGOZ_BROWSER_ROOT ?? join(root, '..', 'tepegoz-browser');
  return { path, explicit, ok: existsSync(join(path, CHECKOUT_MARKER)) };
}

/** Every content module, in a stable order, across every locale folder. */
function contentModules() {
  const files = [];
  if (!existsSync(CONTENT_ROOT)) return files;

  for (const locale of readdirSync(CONTENT_ROOT).sort()) {
    const dir = join(CONTENT_ROOT, locale);
    if (!statSync(dir).isDirectory()) continue;
    for (const file of readdirSync(dir).sort()) {
      if (!file.endsWith('.ts')) continue;
      files.push({ absPath: join(dir, file), where: relative(root, join(dir, file)).replace(/\\/g, '/') });
    }
  }
  return files;
}

/**
 * Read one module's provenance.
 *
 * @returns {null | { where: string, absPath: string, generated: boolean,
 *                    sourceRel: string, stamped: string | null, stampedOn: string | null }}
 *          `null` for a module that names no source (`index.ts`, and any page
 *          that was never transcribed from a document).
 */
export function readProvenance(absPath, where) {
  const text = readFileSync(absPath, 'utf8');
  const header = headerOf(text);

  const source = SOURCE_RE.exec(header);
  if (!source?.[2]) return null;

  const stamp = STAMP_RE.exec(header);
  return {
    where,
    absPath,
    // A generated module is restamped by re-running its generator, never by
    // `--write` here: restamping it by hand would assert that the emitted rows
    // match a document they were not built from.
    generated: where.endsWith('.generated.ts'),
    sourceRel: source[2],
    stamped: stamp?.[1] ?? null,
    stampedOn: stamp?.[2] ?? null,
  };
}

/**
 * Write (or replace) the stamp in a module's header, preserving its line
 * endings. This tree is CRLF with no `.gitattributes`; rewriting a file to LF
 * to insert one line would put the whole file in the diff and bury the change.
 */
export function restamp(absPath, stamp) {
  const text = readFileSync(absPath, 'utf8');
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const header = headerOf(text);

  if (STAMP_RE.test(header)) {
    return writeFileSync(absPath, text.replace(STAMP_RE, stamp), 'utf8');
  }

  const source = SOURCE_RE.exec(header);
  if (!source) throw new Error(`no Source: line in ${absPath}`);

  const line = source[0];
  const start = source.index ?? 0;
  const lineEnd = start + line.length;
  const indent = source[1] ?? '';

  // A one-line header (`/** Source: … */`) takes the stamp inline, just before
  // its terminator. A block comment takes a whole new line under the source
  // line, carrying that line's own ` * ` prefix so the comment stays square.
  if (line.includes('*/')) {
    const stamped = line.replace(/\s*\*\/\s*$/, ` ${stamp} */`);
    return writeFileSync(absPath, text.slice(0, start) + stamped + text.slice(lineEnd), 'utf8');
  }

  return writeFileSync(
    absPath,
    `${text.slice(0, lineEnd)}${eol}${indent}* ${stamp}${text.slice(lineEnd)}`,
    'utf8'
  );
}

function main() {
  const argv = process.argv.slice(2);
  const write = argv.includes('--write');

  // `--only a,b` restricts `--write` to named modules (by basename, no `.ts`).
  // Reconciling a page is a one-page act, and stamping the other nineteen at the
  // same time would assert nineteen readings that did not happen. Written the
  // same way `media-ingest.mjs` spells its `--only`, space form included.
  const onlyRaw =
    argv.find((arg) => arg.startsWith('--only='))?.slice('--only='.length) ??
    (argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : undefined);
  const only =
    onlyRaw === undefined
      ? null
      : new Set(onlyRaw.split(',').map((part) => part.trim()).filter(Boolean));

  const unknown = argv.filter(
    (arg) => arg.startsWith('--') && arg !== '--write' && arg !== '--only' && !arg.startsWith('--only=')
  );
  if (unknown.length > 0) {
    console.error(
      `✗ Unknown flag(s): ${unknown.join(', ')}\n\n` +
        '  Usage: node scripts/sources-check.mjs [browserRoot] [--write] [--only a,b]\n'
    );
    process.exit(1);
  }

  // `--only` in its space form ate a positional; don't mistake it for a path.
  const positional = argv.filter(
    (arg) => !arg.startsWith('--') && (onlyRaw === undefined || arg !== onlyRaw)
  );
  const browser = resolveBrowserRoot(positional[0]);

  if (!browser.ok) {
    console.log(
      (browser.explicit
        ? `- ${browser.path} has no ${CHECKOUT_MARKER.replace(/\\/g, '/')} — that is not a tepegoz-browser checkout.\n`
        : `- No tepegoz-browser checkout at ${browser.path}.\n`) +
        '  Skipping the source-drift check. It needs the product repo, which the\n' +
        '  deploy environment does not have, so it skips rather than fails.\n' +
        '  Pass the checkout path, or set TEPEGOZ_BROWSER_ROOT, to run it.'
    );
    process.exit(0);
  }

  const drifted = [];
  const missing = [];
  const unstamped = [];
  const stamped = [];

  for (const { absPath, where } of contentModules()) {
    const provenance = readProvenance(absPath, where);
    if (provenance === null) continue;

    const sourceAbs = join(browser.path, provenance.sourceRel);
    if (!existsSync(sourceAbs)) {
      missing.push(provenance);
      continue;
    }

    const actual = sourceSha256(sourceAbs).slice(0, 8);
    const changedOn = lastModified(browser.path, provenance.sourceRel);
    const record = { ...provenance, actual, changedOn };

    if (provenance.stamped === null) unstamped.push(record);
    else if (provenance.stamped !== actual) drifted.push(record);
    else stamped.push(record);
  }

  // ── --write ────────────────────────────────────────────────────────────────
  if (write) {
    const named = (record) =>
      only === null || only.has(record.where.replace(/^.*\//, '').replace(/\.ts$/, ''));
    const candidates = [...unstamped, ...drifted].filter(named);

    if (only !== null) {
      const matched = new Set(
        candidates.map((r) => r.where.replace(/^.*\//, '').replace(/\.ts$/, ''))
      );
      const unmatched = [...only].filter((name) => !matched.has(name));
      if (unmatched.length > 0) {
        console.error(
          `✗ --only named ${unmatched.join(', ')}, which ${unmatched.length === 1 ? 'is' : 'are'} ` +
            'not awaiting a stamp (already in sync, not a content module, or misspelled).\n'
        );
        process.exit(1);
      }
    }

    const writable = candidates.filter((r) => !r.generated);
    for (const record of writable) {
      restamp(record.absPath, stampText(record.actual, record.changedOn));
      console.log(`  stamped ${record.where} → ${record.actual} (${record.changedOn})`);
    }

    for (const record of candidates.filter((r) => r.generated)) {
      console.log(
        `  skipped ${record.where} — generated; re-run its generator instead of stamping it`
      );
    }

    console.log(
      `\n✓ ${writable.length} module(s) stamped.\n\n` +
        '  A stamp asserts that a human read the source against the page. If you ran\n' +
        '  this to clear a drift report without re-reading, the stamp is now false and\n' +
        '  the next real drift will look like it was already reviewed.\n'
    );
    return;
  }

  // ── Report ─────────────────────────────────────────────────────────────────
  console.log(`Sources: ${browser.path}\n`);

  for (const record of missing) {
    console.error(
      `✗ ${record.where}\n` +
        `    names ${record.sourceRel}, which does not exist in the checkout.\n` +
        '    Either the document was renamed and this header is stale, or the page\n' +
        '    lost its source. A human has to decide which.\n'
    );
  }

  for (const record of drifted) {
    console.error(
      `✗ ${record.where}\n` +
        `    source   ${record.sourceRel}  (last changed ${record.changedOn})\n` +
        `    stamped  ${record.stamped}${record.stampedOn ? ` (${record.stampedOn})` : ''}\n` +
        `    now      ${record.actual}\n` +
        (record.generated
          ? '    → generated: re-run its generator, do not restamp it by hand.\n'
          : '    → re-read the document against the page, reconcile the copy, then:\n' +
            '      node scripts/sources-check.mjs <browserRoot> --write\n')
    );
  }

  if (unstamped.length > 0) {
    console.log(
      `${unstamped.length} module(s) carry no stamp yet — not a failure, they claim nothing:\n`
    );
    for (const record of unstamped) {
      console.log(
        `    ${record.where}  ←  ${record.sourceRel}  ${record.actual} (${record.changedOn})`
      );
    }
    console.log('');
  }

  if (drifted.length + missing.length > 0) {
    console.error(
      `✗ ${drifted.length} page(s) drifted, ${missing.length} source(s) missing, ` +
        `${stamped.length} in sync.\n`
    );
    process.exit(1);
  }

  console.log(
    `✓ ${stamped.length} stamped page(s) match their source` +
      (unstamped.length > 0 ? `; ${unstamped.length} still unstamped.` : '.')
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
