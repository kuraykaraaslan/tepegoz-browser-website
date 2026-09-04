#!/usr/bin/env node
/**
 * Recomputes — and, in `--check` mode, verifies — every `describes` stamp in
 * `modules/marketing/content/**`.
 *
 *   node scripts/media-restamp.mjs            restamp, printing every pairing
 *   node scripts/media-restamp.mjs --check    fail if any stamp is stale, write nothing
 *
 * ── What a stamp is, and what it is for ──────────────────────────────────────
 * A content block names its image by ledger key and carries eight hex characters
 * beside its alt text:
 *
 *     asset: 'browser-chrome',
 *     describes: '789617d6',
 *     alt: 'The Tepegöz window: tab strip, address bar, …',
 *
 * Those eight characters are the first eight of `sha256(assetSha256 + "\n" + alt)`
 * — a hash of the **pair**, not of the bytes alone. `describes()` in
 * `modules/marketing/media/types.ts` is the authoritative definition and carries
 * the full argument; the short version is that hashing only the bytes caught
 * "the file behind this key was replaced" but not "this copy was repointed at a
 * different key", and the second is a one-word edit that puts a screenshot of one
 * screen under the alt text of another.
 *
 * ── Why this script exists at all ────────────────────────────────────────────
 * Two reasons, and the second is the important one.
 *
 *   1. Timing. Stamps used to be enforced only by `assertDescribes()` in
 *      `modules/marketing/content/index.ts`, which runs when the content modules
 *      evaluate — that is, inside `next build`. So the gate was silent during
 *      `npm run check`: silent in exactly the minutes a human is reading a diff.
 *      `--check` runs in `npm run check` and reports by file and line.
 *
 *   2. Restamping has to be a *review*. A check that can be silenced by pasting
 *      the correct value across is worse than no check, because it launders the
 *      defect it exists to catch. Under a bytes-only stamp, the value that
 *      silenced it was sitting in `manifest.generated.ts` — the first eight
 *      characters of the row's `sha256` — so anyone could copy it over without
 *      ever loading the image. Hashing the alt in means no correct stamp for a
 *      new pairing is written down anywhere; it has to be computed, and this
 *      script is the only thing that computes it. So this script prints, for
 *      every stamp it touches, the asset key, the file that key resolves to, its
 *      dimensions, and the alt text in full — because the point is not to
 *      produce eight characters, it is to put an image and a sentence about it in
 *      front of a person.
 *
 *      That is a nudge, not a proof. This script cannot look at a picture and it
 *      cannot make anyone else look at one. What it can do is guarantee that
 *      nobody gets a passing stamp without the pairing having been printed.
 *
 * ── Why it reads the source as text ──────────────────────────────────────────
 * Like `content-check.mjs`, this never imports a TypeScript module: it has to run
 * before a build, on a machine with no build, and it must not be breakable by
 * one. That means a small scanner (below) rather than a parser. The scanner
 * understands comments, the three string-literal forms and brace nesting, which
 * is everything these data files use — and it refuses loudly on anything it does
 * not understand rather than guessing, because a stamp computed over a
 * mis-decoded string is a false green.
 *
 * ── The poster pairing ───────────────────────────────────────────────────────
 * `poster: { asset, describes }` has no `alt` of its own. It inherits the
 * recording's, because that is the text it is rendered under: someone who never
 * presses play meets the poster's pixels and the recording's sentence. So a
 * poster's stamp binds the *poster's bytes* to the *recording's alt*, and the
 * general rule this script implements — an object with no `alt` borrows the
 * nearest enclosing one — produces exactly that. It is stated on the output as
 * `[inherited …]` so nobody has to infer it.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

import { parseCommittedManifest, readCommittedManifest, root } from './media-manifest.mjs';

const CONTENT_DIR = join(root, 'modules', 'marketing', 'content');

/**
 * Must equal `STAMP_LENGTH` in `modules/marketing/media/types.ts`.
 *
 * There are two implementations of the stamp because `tsconfig.json` sets
 * `allowJs: false` and these scripts are `.mjs`, so neither side can import the
 * other. They cannot drift in silence: `npm run build` runs this script's
 * `--check` (inside `npm run check`) and then evaluates every content module
 * through `assertDescribes()` (inside `next build`). Two verifiers, the same
 * eight stamps, one command — a formula that diverged would red the very next
 * build, which is the only guarantee worth having here.
 */
const STAMP_LENGTH = 8;

/** The stamp for one (asset bytes, alt text) pairing. See `describes()`. */
export function stampFor(sha256, alt) {
  return createHash('sha256')
    .update(`${sha256}\n${alt}`, 'utf8')
    .digest('hex')
    .slice(0, STAMP_LENGTH);
}

/* -------------------------------------------------------------------------- */
/* A very small TypeScript scanner                                            */
/* -------------------------------------------------------------------------- */

/** Escapes a string literal can carry that decode to a single character. */
const SIMPLE_ESCAPE = {
  n: '\n',
  t: '\t',
  r: '\r',
  b: '\b',
  f: '\f',
  v: '\v',
  '0': '\0',
  '\\': '\\',
  "'": "'",
  '"': '"',
  '`': '`',
  '\n': '', // a line continuation
};

class ScanError extends Error {}

/**
 * Decode a string literal's body to the runtime string it denotes.
 *
 * Anything it does not recognise throws. That is deliberate and it is the whole
 * safety argument for scanning rather than parsing: a decoder that shrugged at an
 * escape it did not know would hash a string the compiler never produces, and the
 * stamp would then be green while meaning nothing.
 */
function decodeLiteral(body, where) {
  let out = '';
  for (let i = 0; i < body.length; i += 1) {
    const c = body[i];
    if (c !== '\\') {
      out += c;
      continue;
    }
    const next = body[i + 1];
    if (next === undefined) throw new ScanError(`${where}: string literal ends in a backslash.`);
    if (next === 'u' || next === 'x') {
      const hex =
        next === 'x'
          ? { text: body.slice(i + 2, i + 4), width: 2 }
          : body[i + 2] === '{'
            ? { text: body.slice(i + 3, body.indexOf('}', i + 3)), width: null }
            : { text: body.slice(i + 2, i + 6), width: 4 };
      if (!/^[0-9a-fA-F]+$/.test(hex.text)) {
        throw new ScanError(`${where}: malformed \\${next} escape in a string literal.`);
      }
      out += String.fromCodePoint(Number.parseInt(hex.text, 16));
      i += next === 'x' ? 3 : hex.width === null ? hex.text.length + 3 : 5;
      continue;
    }
    const simple = SIMPLE_ESCAPE[next];
    if (simple === undefined) {
      throw new ScanError(
        `${where}: unsupported escape \\${next} in a string literal. ` +
          'This scanner refuses escapes it cannot decode rather than guessing, ' +
          'because a stamp computed over a mis-decoded string is a false green. ' +
          'Teach decodeLiteral() about it in scripts/media-restamp.mjs.'
      );
    }
    out += simple;
    i += 1;
  }
  return out;
}

/**
 * Split a source file into a brace-safe "code" mask and its string literals.
 *
 * `code` is the source with every comment and every string literal (quotes
 * included) replaced by spaces of the same length, so offsets still line up with
 * the original. That is what makes brace counting and `field:` matching safe:
 * these files are full of braces and apostrophes inside prose and comments —
 * `MEDIA['agent-demo']`, `{ src, alt, caption }`, "the site's rules" — and every
 * one of them would otherwise be read as syntax.
 */
function scanSource(source, where) {
  const chars = [...source];
  const strings = [];
  const ranges = [];
  const stack = [];
  const depth = new Int32Array(source.length + 1);

  const blank = (from, to) => {
    for (let k = from; k < to; k += 1) if (chars[k] !== '\n') chars[k] = ' ';
  };

  let i = 0;
  while (i < source.length) {
    const c = source[i];

    if (c === '/' && source[i + 1] === '/') {
      const end = source.indexOf('\n', i);
      const stop = end === -1 ? source.length : end;
      blank(i, stop);
      i = stop;
      continue;
    }
    if (c === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      const stop = end === -1 ? source.length : end + 2;
      blank(i, stop);
      i = stop;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') {
      let j = i + 1;
      while (j < source.length) {
        if (source[j] === '\\') {
          j += 2;
          continue;
        }
        if (source[j] === c) break;
        if (c === '`' && source[j] === '$' && source[j + 1] === '{') {
          throw new ScanError(
            `${where}: a template literal with a \${…} expression. ` +
              'This scanner does not evaluate expressions; the content files do not ' +
              'use them, and a stamp over a guessed value would be a false green.'
          );
        }
        j += 1;
      }
      if (j >= source.length) throw new ScanError(`${where}: unterminated string literal.`);
      strings.push({
        start: i,
        end: j + 1,
        quote: c,
        body: source.slice(i + 1, j),
      });
      blank(i, j + 1);
      i = j + 1;
      continue;
    }

    i += 1;
  }

  const code = chars.join('');
  for (let k = 0; k < code.length; k += 1) {
    depth[k] = stack.length;
    if (code[k] === '{') {
      stack.push(k);
    } else if (code[k] === '}') {
      const open = stack.pop();
      if (open !== undefined) ranges.push({ start: open, end: k });
    }
  }
  depth[code.length] = stack.length;

  return { source, code, strings, ranges, depth, where };
}

/** The innermost `{ … }` that strictly contains `index`, or `null`. */
function innermostAround(ctx, index) {
  let best = null;
  for (const range of ctx.ranges) {
    if (range.start < index && index < range.end) {
      if (best === null || range.start > best.start) best = range;
    }
  }
  return best;
}

/** The string literal that immediately follows `pos`, or `null`. */
function stringAfter(ctx, pos) {
  for (const token of ctx.strings) {
    if (token.start < pos) continue;
    return /^\s*$/.test(ctx.code.slice(pos, token.start)) ? token : null;
  }
  return null;
}

/**
 * The value of `name:` declared directly on `object` — not on a nested one.
 *
 * The depth test is what keeps a motion block's own `asset` from being read out
 * of the `poster: { asset }` nested inside it.
 */
function fieldOf(ctx, object, name) {
  const want = ctx.depth[object.start] + 1;
  const re = new RegExp(`\\b${name}\\s*:`, 'g');
  re.lastIndex = object.start + 1;
  let match;
  while ((match = re.exec(ctx.code)) !== null) {
    if (match.index > object.end) return null;
    if (ctx.depth[match.index] !== want) continue;
    const token = stringAfter(ctx, re.lastIndex);
    if (token !== null) return { token, at: match.index };
  }
  return null;
}

/** 1-based line number of a byte offset. */
function lineAt(source, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) if (source[i] === '\n') line += 1;
  return line;
}

/* -------------------------------------------------------------------------- */
/* Finding the stamps                                                         */
/* -------------------------------------------------------------------------- */

/** A human-readable name for the block a stamp sits in. */
function labelFor(ctx, object) {
  const own = fieldOf(ctx, object, 'kind');
  if (own !== null) return own.token.body;

  const parent = innermostAround(ctx, object.start);
  const parentKind = parent === null ? null : fieldOf(ctx, parent, 'kind')?.token.body;

  // A named sub-object: `poster: { … }` inside a motion block.
  const before = ctx.code.slice(Math.max(0, object.start - 80), object.start);
  const named = /([A-Za-z_$][\w$]*)\s*:\s*$/.exec(before);
  if (named !== null) return parentKind === null ? named[1] : `${parentKind} ${named[1]}`;

  // An anonymous element of an array: one of a gallery's `items`.
  if (parentKind === 'gallery') return 'gallery item';
  return parentKind === null ? 'media' : `${parentKind} item`;
}

/**
 * Every `describes: '…'` in one file, with the pairing it stands for.
 *
 * A `describes` with no `asset` beside it is reported rather than skipped: it
 * would be an unbound stamp, which is a stamp that can never fail, which is the
 * one thing worse than a wrong one.
 */
function stampsIn(relPath, source) {
  const ctx = scanSource(source, relPath);
  const found = [];
  const problems = [];

  const re = /\bdescribes\s*:/g;
  let match;
  while ((match = re.exec(ctx.code)) !== null) {
    const stampToken = stringAfter(ctx, re.lastIndex);
    if (stampToken === null) continue; // `import { describes as … }`, `value.describes`

    const object = innermostAround(ctx, match.index);
    const at = `${relPath}:${lineAt(source, match.index)}`;
    if (object === null) {
      problems.push(`${at}: a \`describes\` stamp outside any object literal.`);
      continue;
    }

    const asset = fieldOf(ctx, object, 'asset');
    if (asset === null) {
      problems.push(
        `${at}: a \`describes\` stamp with no \`asset\` beside it. ` +
          'A stamp that names no asset is bound to nothing and can never fail; ' +
          'give the block an `asset` key or delete the stamp.'
      );
      continue;
    }

    // An object with no `alt` of its own borrows the nearest enclosing one. That
    // is the poster rule, stated generally: a poster is rendered under the
    // recording's alt text, so the pairing a reader meets is (poster bytes,
    // recording alt) and that is what the stamp has to cover.
    let altOwner = object;
    let alt = fieldOf(ctx, object, 'alt');
    let inherited = null;
    while (alt === null) {
      const parent = innermostAround(ctx, altOwner.start);
      if (parent === null) break;
      altOwner = parent;
      alt = fieldOf(ctx, parent, 'alt');
      if (alt !== null) inherited = labelFor(ctx, parent);
    }
    if (alt === null) {
      problems.push(
        `${at}: a \`describes\` stamp with no \`alt\` anywhere around it. ` +
          'The stamp binds bytes to alt text; with no alt text there is nothing to bind.'
      );
      continue;
    }

    let altValue;
    let stampValue;
    try {
      altValue = decodeLiteral(alt.token.body, at);
      stampValue = decodeLiteral(stampToken.body, at);
    } catch (error) {
      problems.push(error instanceof ScanError ? error.message : String(error));
      continue;
    }

    found.push({
      file: relPath,
      line: lineAt(source, match.index),
      label: labelFor(ctx, object),
      assetKey: decodeLiteral(asset.token.body, at),
      alt: altValue,
      inherited: inherited === null ? null : `inherited from the ${inherited} above it`,
      stamp: stampValue,
      quote: stampToken.quote,
      start: stampToken.start,
      end: stampToken.end,
    });
  }

  return { found, problems };
}

/** Every `.ts` file under `modules/marketing/content/`, deepest paths included. */
function contentFiles(dir = CONTENT_DIR) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    const abs = join(dir, name);
    if (statSync(abs).isDirectory()) {
      out.push(...contentFiles(abs));
    } else if (name.endsWith('.ts')) {
      out.push(abs);
    }
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Reporting                                                                  */
/* -------------------------------------------------------------------------- */

/** Wrap alt text so a long sentence stays readable in a terminal. */
function wrap(text, indent, width = 88) {
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line === '') line = word;
    else if (`${line} ${word}`.length + indent.length <= width) line += ` ${word}`;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line !== '') lines.push(line);
  return lines.map((l) => indent + l).join('\n');
}

/** The block a human is meant to read before accepting a stamp. */
function report(stamp, entry, expected) {
  const size = `${entry.width}x${entry.height}`;
  const kb = `${Math.round(entry.bytes / 1024)} KB`;
  const motion = entry.animated ? 'animated' : 'still';
  const state =
    stamp.stamp === expected
      ? `${stamp.stamp}  — up to date`
      : `${stamp.stamp} → ${expected}`;

  return [
    `  ${String(stamp.line).padStart(4)}  ${stamp.label}  →  ${stamp.assetKey}`,
    `        src    public${entry.src}   ${size}, ${motion}, ${kb}`,
    `        stamp  ${state}`,
    `        alt${stamp.inherited === null ? '' : `    [${stamp.inherited}]`}`,
    wrap(stamp.alt, '          '),
    '',
  ].join('\n');
}

/* -------------------------------------------------------------------------- */

function main() {
  const check = process.argv.includes('--check');

  const committed = readCommittedManifest();
  if (committed === null) {
    console.error(
      '✗ modules/marketing/media/manifest.generated.ts does not exist, so there is ' +
        'nothing to stamp against.\n\n  Generate it: node scripts/media-manifest.mjs\n'
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

  const problems = [];
  const stale = [];
  const files = [];

  for (const abs of contentFiles()) {
    const relPath = relative(root, abs).split('\\').join('/');
    // Git is configured `core.autocrlf=true` on the machine this was written on,
    // so a file committed with LF arrives on disk with CRLF. Offsets are computed
    // over the normalised text and the file is written back normalised, which is
    // what every other generated/rewritten file in this repo already does.
    const source = readFileSync(abs, 'utf8').replace(/\r\n/g, '\n');
    if (!/\bdescribes\s*:\s*['"`]/.test(source)) continue;

    let result;
    try {
      result = stampsIn(relPath, source);
    } catch (error) {
      problems.push(error instanceof ScanError ? error.message : `${relPath}: ${String(error)}`);
      continue;
    }
    problems.push(...result.problems);
    if (result.found.length === 0) continue;

    const rows = [];
    for (const stamp of result.found) {
      const entry = ledger[stamp.assetKey];
      if (entry === undefined) {
        problems.push(
          `${stamp.file}:${stamp.line}: asset "${stamp.assetKey}" is not in the media ledger. ` +
            'Nothing can be stamped against a key with no row. Either the key is ' +
            'misspelled, or the file was never ingested — see `npm run media:ingest`.'
        );
        continue;
      }
      const expected = stampFor(entry.sha256, stamp.alt);
      rows.push({ stamp, entry, expected });
      if (stamp.stamp !== expected) stale.push({ ...stamp, expected });
    }
    files.push({ abs, relPath, source, rows });
  }

  if (problems.length > 0) {
    console.error(`✗ ${problems.length} stamp problem(s):\n`);
    for (const problem of problems) console.error(`  ${problem}`);
    console.error('');
    process.exit(1);
  }

  const total = files.reduce((n, file) => n + file.rows.length, 0);

  // ── --check: report, change nothing ───────────────────────────────────────
  if (check) {
    if (stale.length === 0) {
      console.log(`✓ ${total} media stamp(s) in ${files.length} file(s) match their pairings.`);
      return;
    }
    console.error(
      `✗ ${stale.length} of ${total} media stamp(s) no longer match the ` +
        '(image bytes, alt text) pairing they stand for:\n'
    );
    for (const file of files) {
      const bad = file.rows.filter((row) => row.stamp.stamp !== row.expected);
      if (bad.length === 0) continue;
      console.error(`${file.relPath}`);
      for (const row of bad) console.error(report(row.stamp, row.entry, row.expected));
    }
    console.error(
      [
        '  A stamp covers the asset bytes AND the alt text together, so each of',
        '  these is one of three things: the file behind that key changed, the',
        '  block was repointed at a different key, or the alt text was edited.',
        '',
        '  Open each `src` above, look at it, and read its `alt` back against what',
        '  you see. Rewrite the alt if it no longer describes the image. Only then:',
        '',
        '      npm run media:restamp',
        '',
      ].join('\n')
    );
    process.exit(1);
  }

  // ── restamp: print every pairing, then write ──────────────────────────────
  console.log(
    [
      `Restamping ${total} media stamp(s) in ${files.length} file(s).`,
      '',
      'Every pairing below is printed in full on purpose. A stamp is not a checksum,',
      'it is an author saying "I looked at this image and this sentence is true of it".',
      'This script can compute the eight characters; it cannot look at a picture. Read',
      'each alt against the file at its `src` before you commit the diff it writes.',
      '',
    ].join('\n')
  );

  let rewritten = 0;
  for (const file of files) {
    console.log(file.relPath);
    for (const row of file.rows) console.log(report(row.stamp, row.entry, row.expected));

    const changed = file.rows.filter((row) => row.stamp.stamp !== row.expected);
    if (changed.length === 0) continue;

    // Replace from the end of the file backwards, so earlier offsets stay valid.
    let next = file.source;
    for (const row of [...changed].sort((a, b) => b.stamp.start - a.stamp.start)) {
      next =
        next.slice(0, row.stamp.start) +
        row.stamp.quote +
        row.expected +
        row.stamp.quote +
        next.slice(row.stamp.end);
    }
    writeFileSync(file.abs, next, 'utf8');
    rewritten += changed.length;
  }

  console.log(
    rewritten === 0
      ? `✓ ${total} stamp(s) already matched — nothing written.`
      : `✓ rewrote ${rewritten} of ${total} stamp(s). Now go and read them.`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
