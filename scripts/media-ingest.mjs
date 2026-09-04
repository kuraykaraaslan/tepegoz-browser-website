#!/usr/bin/env node
/**
 * Receives captures from a local `tepegoz-browser` checkout into this site.
 *
 *   node scripts/media-ingest.mjs                                  dry run, default root
 *   node scripts/media-ingest.mjs ../tepegoz-browser               dry run, explicit root
 *   TEPEGOZ_BROWSER_ROOT=/path/to/tepegoz-browser node scripts/media-ingest.mjs
 *   node scripts/media-ingest.mjs --only agent-run --apply         copy those, write the ledger
 *   node scripts/media-ingest.mjs --only extensions --apply --force  overwrite different bytes
 *
 * The argument convention is `scripts/kui-sync.mjs`'s: a positional path, else an
 * environment variable. Unlike that script this one also has a default — the
 * sibling checkout — because the two repos are cloned side by side and typing the
 * path every time is how a step gets skipped.
 *
 * ── Why a dry run is the default ──────────────────────────────────────────────
 * The capture directories are scratch space on a developer's machine, and this
 * project has already been burned by what turns up in one: an OS-level screen
 * grab that was supposed to photograph the app photographed the OPERATOR'S OWN
 * browser instead — their tabs, their profile avatar — because Windows would not
 * bring the right window to the front. That grab has since been removed from the
 * capture scripts (there is a standing rule in both of them now), but the lesson
 * generalises: nothing in `.shots/` or `.recording/` has been looked at by a
 * human yet, and this script must never be the thing that publishes it. So it
 * prints what it would take, and takes nothing without `--apply`.
 *
 * ── Why there is an alias map ─────────────────────────────────────────────────
 * The site names an asset for what it shows; the capture script names it for the
 * order it was shot in. The two schemes have already diverged once, by hand, on
 * the first import: `01-newtab.png` was committed here as `browser-chrome.png`,
 * because that is what the picture is of. With no memory of that rename this
 * script would derive `newtab` from the next real capture run and mint a SECOND
 * ledger row for the same shot — the site would then carry two rows, one live and
 * one orphaned, and the live one would quietly go stale because nothing was ever
 * overwriting it again. `ALIASES` below is that memory.
 *
 * ── What it does not do ───────────────────────────────────────────────────────
 * It does not write alt text. It cannot: alt is a claim about what an image
 * conveys, it has to be written by someone who looked at the image, and it lives
 * with the page copy in `modules/marketing/content/<locale>/`. What this script
 * does is put the bytes and their measurements where the site can reach them, and
 * then tell the human exactly which copy now needs re-reading.
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { execFileSync } from 'node:child_process';

import { measureSafe } from './lib/measure.mjs';
import {
  PROVENANCE_PATH,
  buildLedger,
  renderManifest,
  root,
  writeManifest,
} from './media-manifest.mjs';
import { SLUG_RE, STAMP_FIELDS } from '../modules/marketing/media/provenance.schema.mjs';

/**
 * The capture directories, as the capture scripts actually name them.
 *
 * Both are `argv[2] ?? <default>` in `tepegoz-browser/scripts/*.mjs` and both are
 * gitignored over there — the bytes live here, in `public/`, because Vercel clones
 * only this repo and nothing the production build needs may live in the other one.
 */
const SOURCES = [
  {
    dir: '.shots',
    tool: 'tepegoz-browser/scripts/screenshots.mjs',
    // `screenshots.mjs` writes `NN-name.png` so the run reads in order. The number
    // is a sequence, not part of the asset's identity, and the five stills already
    // live on the site under the un-numbered name.
    stripOrdinal: true,
    warning: null,
  },
  {
    dir: '.recording',
    tool: 'tepegoz-browser/scripts/record-agent.mjs',
    stripOrdinal: false,
    warning:
      'record-agent.mjs output is under a publication ban. It drives the command\n' +
      '  palette\'s `Do` mode, which has no commands to dispatch, so the recording shows\n' +
      '  the application sitting there — not the agent working. Do not caption one of\n' +
      '  these as an agent run. (The ban is documented in that script\'s own header.)',
  },
];

/**
 * Renames that have already happened: capture-script file → ledger key.
 *
 * Written the way a human reads it — the path the capture script actually
 * produces, extension and ordinal and all — so that adding an entry means
 * copying a filename out of a capture run rather than reproducing this script's
 * key-derivation rules in your head. The directory is part of the key because
 * the two sources derive keys differently (`.shots` drops the leading ordinal,
 * `.recording` does not), so `01-newtab.png` alone would be ambiguous about
 * which rule to apply.
 *
 * An alias asserts IDENTITY, not preference: it says these bytes are a new
 * version of that existing asset. So an aliased source updates the existing row
 * in place, which means it overwrites bytes an existing `describes` stamp in the
 * page copy points at — and that is precisely what the `DIFFERS` → `--force`
 * guard below exists to stop happening by accident. Aliasing does not weaken the
 * guard; it makes the guard fire on the right key instead of quietly sidestepping
 * it by minting a fresh one.
 *
 * Keep this list SHORT. Every entry is a divergence between what the capture
 * script calls a shot and what the site calls it, and the cheaper fix is almost
 * always to rename the shot in `tepegoz-browser/scripts/screenshots.mjs` so the
 * two agree at the source.
 */
const ALIASES = {
  // Imported by hand in 1a90893. `01-newtab` is the app's new-tab page, but the
  // shot is on the site as evidence of the window chrome — the tab strip, the
  // omnibox, the bookmarks bar — so it was published under the name of what it
  // shows. The alt text for it lives in modules/marketing/content/en/ and is
  // bound to that row's sha256, which is why re-importing it is a `--force` job.
  '.shots/01-newtab.png': 'browser-chrome',
};

/**
 * Derive the ledger key a source file would get with no alias applied.
 *
 * One definition, used both to normalise `ALIASES` at load and to key each
 * candidate during the survey — if these two ever drifted, an alias would simply
 * stop matching, silently, which is the failure mode the map exists to prevent.
 */
function captureKeyFor(source, file) {
  const stem = basename(file, extname(file));
  return source.stripOrdinal ? stem.replace(/^\d+-/, '') : stem;
}

/**
 * `ALIASES`, normalised to the same `<dir>/<derived key>` shape the survey
 * computes, and validated: this map is hand-edited, and a typo in it would
 * otherwise present as an alias that just never fires.
 */
const ALIAS_BY_SOURCE = new Map();
for (const [from, to] of Object.entries(ALIASES)) {
  const slash = from.indexOf('/');
  const source = SOURCES.find((candidate) => candidate.dir === from.slice(0, slash));
  if (slash === -1 || source === undefined) {
    console.error(
      `✗ ALIASES: "${from}" does not start with a known capture directory ` +
        `(${SOURCES.map((s) => s.dir).join(', ')}). Write the path the capture script produces, ` +
        'e.g. ".shots/01-newtab.png".\n'
    );
    process.exit(1);
  }
  if (!SLUG_RE.test(to)) {
    console.error(`✗ ALIASES: "${to}" is not a usable ledger key — it must be a lowercase slug.\n`);
    process.exit(1);
  }
  const normalised = `${source.dir}/${captureKeyFor(source, from.slice(slash + 1))}`;
  const existing = ALIAS_BY_SOURCE.get(normalised);
  if (existing !== undefined) {
    console.error(
      `✗ ALIASES: two entries both resolve to "${normalised}" (→ ${existing.to} and → ${to}). ` +
        'One capture file cannot be two assets; delete one.\n'
    );
    process.exit(1);
  }
  ALIAS_BY_SOURCE.set(normalised, { from, to });
}

// ── Arguments ────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const flags = new Set(argv.filter((arg) => arg.startsWith('--') && !arg.includes('=')));
const valued = new Map(
  argv.filter((arg) => arg.startsWith('--') && arg.includes('=')).map((arg) => {
    const at = arg.indexOf('=');
    return [arg.slice(0, at), arg.slice(at + 1)];
  })
);
const positional = argv.filter((arg) => !arg.startsWith('--'));

const apply = flags.has('--apply');
const force = flags.has('--force');

// `--only a,b` and `--only=a,b` both work; the space form is what people type.
const onlyRaw =
  valued.get('--only') ??
  (flags.has('--only') ? argv[argv.indexOf('--only') + 1] : undefined);
const only =
  onlyRaw === undefined
    ? null
    : new Set(
        onlyRaw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
      );
// `--only` consumed a positional when written with a space; don't read it as a path.
const pathArgs = positional.filter((arg) => onlyRaw === undefined || !onlyRaw.split(',').includes(arg));

const unknown = [...flags].filter((flag) => !['--apply', '--force', '--only'].includes(flag));
if (unknown.length > 0) {
  console.error(`✗ Unknown flag(s): ${unknown.join(', ')}\n\n  Usage: node scripts/media-ingest.mjs [browserRoot] [--only a,b] [--apply] [--force]\n`);
  process.exit(1);
}

const browserRoot =
  pathArgs[0] ?? process.env.TEPEGOZ_BROWSER_ROOT ?? join(root, '..', 'tepegoz-browser');

for (const required of ['scripts/screenshots.mjs', 'scripts/record-agent.mjs']) {
  if (!existsSync(join(browserRoot, required))) {
    console.error(
      `✗ ${join(browserRoot, required)} is missing — that does not look like a tepegoz-browser checkout.\n\n` +
        '  Pass the checkout path, or set TEPEGOZ_BROWSER_ROOT.\n'
    );
    process.exit(1);
  }
}

// ── Provenance the checkout can tell us ──────────────────────────────────────
/** Run git in the browser checkout. Returns `null` rather than throwing: a missing
 *  git, or a checkout that is not a repo, degrades provenance to nulls — which is
 *  the honest answer — instead of failing an ingest. */
function git(...args) {
  try {
    return execFileSync('git', ['-C', browserRoot, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

const browserCommit = git('rev-parse', '--short', 'HEAD');
const browserDirty = git('status', '--porcelain');

let appVersion = null;
try {
  appVersion = JSON.parse(readFileSync(join(browserRoot, 'package.json'), 'utf8')).version ?? null;
} catch {
  appVersion = null;
}

/** `YYYY-MM-DD` in local time. `toISOString()` would be UTC, which silently dates
 *  an evening capture to the next day for anyone east of Greenwich — including the
 *  machine this pipeline runs on. */
function isoDate(date) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

// ── Survey ───────────────────────────────────────────────────────────────────
const candidates = [];
const missingDirs = [];

for (const source of SOURCES) {
  const absDir = join(browserRoot, source.dir);
  if (!existsSync(absDir)) {
    missingDirs.push(source.dir);
    continue;
  }

  for (const file of readdirSync(absDir).sort()) {
    const absPath = join(absDir, file);
    if (file.startsWith('.') || !statSync(absPath).isFile()) continue;

    const measured = measureSafe(absPath);
    const captureKey = captureKeyFor(source, file);
    // An alias renames the asset, not the file: everything downstream — the
    // destination path, the existing-bytes comparison, the provenance row — keys
    // off the ledger name, so an aliased capture lands on the row it is a new
    // version of instead of beside it.
    const alias = ALIAS_BY_SOURCE.get(`${source.dir}/${captureKey}`) ?? null;
    const key = alias === null ? captureKey : alias.to;

    const candidate = {
      source,
      file,
      absPath,
      captureKey,
      alias,
      key,
      measured,
      status: null,
      reason: null,
      dest: null,
      destRel: null,
    };

    if ('error' in measured) {
      candidate.status = 'REFUSED';
      candidate.reason = measured.error;
      candidates.push(candidate);
      continue;
    }
    if (!SLUG_RE.test(key)) {
      candidate.status = 'REFUSED';
      candidate.reason = `"${key}" is not a usable ledger key — rename the capture to a lowercase slug.`;
      candidates.push(candidate);
      continue;
    }

    // Stills go where the site's stills already are (six live public URLs, not to
    // be moved); motion goes to the new directory. That is the whole rule.
    const destDir = measured.kind === 'motion' ? 'media' : 'screenshots';
    candidate.dest = join(root, 'public', destDir, `${key}${extname(file)}`);
    candidate.destRel = `public/${destDir}/${key}${extname(file)}`;

    // `--only` accepts either name for an aliased capture. The ledger key is the
    // right answer, but somebody working from a capture listing has the other one
    // in front of them, and refusing it would look like the file was not found.
    const wanted =
      only === null || only.has(key) || (alias !== null && only.has(candidate.captureKey));

    if (!wanted) {
      candidate.status = 'skipped';
      candidate.reason = 'not in --only';
    } else if (!existsSync(candidate.dest)) {
      candidate.status = 'NEW';
    } else {
      const there = measureSafe(candidate.dest);
      if (!('error' in there) && there.sha256 === measured.sha256) {
        candidate.status = 'same';
        candidate.reason = 'identical bytes already committed';
      } else {
        candidate.status = 'DIFFERS';
        candidate.reason =
          'a different file already lives there — overwriting invalidates every ' +
          '`describes` stamp pointing at it';
      }
    }

    candidates.push(candidate);
  }
}

// Aliasing is the one thing here that can make two different capture files claim
// one ledger row — `.shots/01-newtab.png` aliased to `browser-chrome` alongside a
// `.shots/browser-chrome.png` someone added later, say. Whichever was copied last
// would win, and the survey above would have reported both as fine. Refuse the
// whole ambiguity instead of resolving it by directory-listing order.
const contenders = new Map();
for (const candidate of candidates) {
  if (candidate.status === 'REFUSED' || candidate.status === 'skipped') continue;
  const group = contenders.get(candidate.key);
  if (group === undefined) contenders.set(candidate.key, [candidate]);
  else group.push(candidate);
}
for (const [key, group] of contenders) {
  if (group.length < 2) continue;
  const listed = group.map((c) => `${c.source.dir}/${c.file}`).join(', ');
  for (const candidate of group) {
    candidate.status = 'REFUSED';
    candidate.reason =
      `${group.length} capture files claim the ledger key "${key}" (${listed}) — ` +
      'one of them via ALIASES. A key names one asset; rename a capture or drop an alias.';
  }
}

// ── Report the survey ────────────────────────────────────────────────────────
console.log(`\n  Browser checkout: ${browserRoot}`);
console.log(`  Commit:           ${browserCommit ?? '(unknown — not a git checkout?)'}`);
console.log(`  App version:      ${appVersion ?? '(unknown)'}`);
if (browserDirty) {
  console.log(
    '\n  ! The browser working tree is dirty, so the commit above does not identify\n' +
      '    the bytes these captures were produced from. The provenance recorded will\n' +
      '    name a commit the app was NOT exactly built from. Commit first, or accept\n' +
      '    that the stamp is approximate.'
  );
}
for (const dir of missingDirs) {
  console.log(`  (no ${dir}/ in the checkout — nothing to receive from it)`);
}

if (candidates.length === 0) {
  console.log(
    '\n✓ No captures found.\n\n' +
      `  Produce some first, in ${browserRoot}:\n` +
      '    node scripts/screenshots.mjs      → .shots/NN-name.png\n' +
      '    node scripts/record-agent.mjs     → .recording/agent-run.webm, agent-final.png\n'
  );
  process.exit(0);
}

const pad = {
  file: Math.max(...candidates.map((c) => `${c.source.dir}/${c.file}`.length), 6),
  dest: Math.max(...candidates.map((c) => (c.destRel ?? '—').length), 11),
};

console.log(`\n  ${apply ? 'Ingesting' : 'DRY RUN — nothing is written'}:\n`);
console.log(
  `  ${'SOURCE'.padEnd(pad.file)}  ${'DESTINATION'.padEnd(pad.dest)}  ${'SIZE'.padStart(9)}  ${'BYTES'.padStart(9)}  STATUS`
);
for (const candidate of candidates) {
  const measured = candidate.measured;
  const size = 'error' in measured ? '—' : `${measured.width}x${measured.height}`;
  const bytes = 'error' in measured ? '—' : String(measured.bytes);
  console.log(
    `  ${`${candidate.source.dir}/${candidate.file}`.padEnd(pad.file)}  ` +
      `${(candidate.destRel ?? '—').padEnd(pad.dest)}  ${size.padStart(9)}  ${bytes.padStart(9)}  ${candidate.status}`
  );
  if (candidate.reason) console.log(`  ${' '.repeat(pad.file)}  → ${candidate.reason}`);
  // Say the rename out loud on every aliased row, whatever its status. A silent
  // redirect from `newtab` to `browser-chrome` is exactly the kind of helpfulness
  // that gets discovered months later, in a diff nobody expected.
  if (candidate.alias !== null) {
    console.log(
      `  ${' '.repeat(pad.file)}  → alias: the capture script calls this \`${candidate.captureKey}\`; ` +
        `the ledger calls it \`${candidate.key}\`. Updating that row, not minting a new one.`
    );
    if (candidate.status === 'DIFFERS') {
      console.log(
        `  ${' '.repeat(pad.file)}     Taking it replaces the bytes the \`${candidate.key}\` ` +
          'alt text was written against — that alt text must be re-read.'
      );
    }
  }
}

for (const source of SOURCES) {
  const hits = candidates.filter((c) => c.source === source && c.status !== 'skipped');
  if (source.warning && hits.length > 0) console.log(`\n  ! ${source.warning}`);
}

const takeable = candidates.filter((c) => c.status === 'NEW' || (c.status === 'DIFFERS' && force));
const blocked = candidates.filter((c) => c.status === 'DIFFERS' && !force);

if (blocked.length > 0) {
  console.log(
    `\n  ${blocked.length} file(s) would overwrite different bytes and were NOT taken.\n` +
      '  Re-run with --force only after deciding that the copy describing the old\n' +
      '  bytes is going to be re-read: `node scripts/media-check.mjs` will not catch\n' +
      '  stale alt text, only a human re-reading it will.'
  );
}

if (!apply) {
  console.log(
    `\n  Would copy ${takeable.length} file(s). Re-run with --apply to write them.\n`
  );
  process.exit(0);
}

// ── Apply ────────────────────────────────────────────────────────────────────
if (takeable.length === 0) {
  console.log('\n✓ Nothing to copy.\n');
  process.exit(0);
}

const stamps = existsSync(PROVENANCE_PATH)
  ? JSON.parse(readFileSync(PROVENANCE_PATH, 'utf8'))
  : {};

/** Keys whose hand-written `note` was carried over a machine rewrite of the rest. */
const keptNotes = [];

for (const candidate of takeable) {
  mkdirSync(join(candidate.dest, '..'), { recursive: true });
  copyFileSync(candidate.absPath, candidate.dest);
  console.log(`  copied ${candidate.destRel}`);

  // Machine-knowable provenance is overwritten; the human `note` survives, because
  // it is the one field this script cannot regenerate and the one most likely to
  // carry the reason the asset exists at all.
  const previous = stamps[candidate.key] ?? {};
  if (typeof previous.note === 'string' && previous.note.length > 0) keptNotes.push(candidate.key);
  stamps[candidate.key] = {
    capturedAt: isoDate(statSync(candidate.absPath).mtime),
    browserCommit: browserCommit,
    appVersion,
    tool: candidate.source.tool,
    note: previous.note ?? null,
  };
}

// Rewrite provenance.json with keys and fields in a stable order — it is
// hand-edited, and a file that reshuffles itself on every ingest is a file nobody
// can review.
const orderedStamps = {};
for (const key of Object.keys(stamps).sort()) {
  const stamp = stamps[key];
  const ordered = {};
  for (const field of STAMP_FIELDS) ordered[field] = stamp[field] ?? null;
  orderedStamps[key] = ordered;
}
writeFileSync(PROVENANCE_PATH, `${JSON.stringify(orderedStamps, null, 2)}\n`, 'utf8');
console.log('  updated modules/marketing/media/provenance.json');

const { ledger, problems } = buildLedger();
if (problems.length > 0 || ledger === null) {
  console.error(`\n✗ The files were copied, but the ledger could not be rebuilt:\n`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('\n  Fix the above and run: node scripts/media-manifest.mjs\n');
  process.exit(1);
}
writeManifest(renderManifest(ledger));
console.log(`  regenerated modules/marketing/media/manifest.generated.ts (${Object.keys(ledger).length} assets)`);

// ── What the human has to do next ────────────────────────────────────────────
console.log(`\n✓ Received ${takeable.length} file(s).\n`);
console.log('  The bytes are in. The claims about them are not — that part cannot be');
console.log('  automated, because alt text is a claim about what an image conveys and');
console.log('  only someone who has looked at it can write one. For each asset below,');
console.log('  open the page copy in modules/marketing/content/en/, write `alt` and');
console.log('  `caption` against what you actually see, and stamp `describes`:\n');
for (const candidate of takeable) {
  const row = ledger[candidate.key];
  console.log(
    `    ${candidate.key.padEnd(pad.file)}  describes: '${row.sha256.slice(0, 8)}'  (${row.width}x${row.height}, ${row.src})`
  );
}

// A retained `note` is the other claim this run may have just falsified, and it
// is easy to miss because nothing about it changed in the diff. The concrete case
// this repo already has: five stamps whose note says the tool was ATTRIBUTED BY
// INFERENCE, written that way precisely because no run had ever recorded one. The
// moment this script ingests one of those assets it writes a real `tool` — and
// the note now argues, at length, against a field that is finally a record. The
// prose has to be re-read; only a human can tell which sentences died.
if (keptNotes.length > 0) {
  console.log(
    `\n  ${keptNotes.length} of those kept a hand-written \`note\` from before this run:\n`
  );
  for (const key of keptNotes) console.log(`    ${key}`);
  console.log(
    '\n  This script preserves notes because it cannot write them, not because it\n' +
      '  has checked that they still hold. A note reasoning about provenance the run\n' +
      '  just recorded for real — an inferred tool, an approximate date — is now\n' +
      '  arguing with the fields beside it. Re-read them in\n' +
      '  modules/marketing/media/provenance.json.'
  );
}

console.log('\n  Then: node scripts/media-check.mjs\n');
