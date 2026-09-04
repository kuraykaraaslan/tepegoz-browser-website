#!/usr/bin/env node
/**
 * Generates `modules/marketing/content/en/known-issues.generated.ts` from the
 * table in `tepegoz-browser/docs/known-issues.md`.
 *
 *   node scripts/known-issues-sync.mjs [browserRoot]
 *   node scripts/known-issues-sync.mjs [browserRoot] --check
 *   TEPEGOZ_BROWSER_ROOT=... node scripts/known-issues-sync.mjs
 *
 * ── Why this one document and not the other nineteen ────────────────────────
 * There is no markdown-to-`Block` converter in this repo and there is not going
 * to be one: `docs/website/*.md` is written *for the person building the page*
 * and is full of `[BUILD NOTE]` instructions that a converter would either
 * publish as body copy or silently strip. `sources-check.mjs` handles those by
 * checksum instead.
 *
 * `docs/known-issues.md` is different in kind. It is not prose with a table in
 * it — it is a table, with named columns, whose whole content is a list of
 * facts. That is a machine-readable structure, so it can be generated from,
 * and it *should* be: a known-issues list that is transcribed by hand is a
 * known-issues list that quietly stops matching the product, which is the one
 * failure that would make publishing it worse than not publishing it.
 *
 * ── Refuse, do not strip ────────────────────────────────────────────────────
 * If a cell carries an editorial marker (`[BUILD NOTE]`, `[CLAIM]`, anything in
 * that shape) or an unfilled `{{PLACEHOLDER}}`, this exits 1 and names the row.
 * It does not remove the marker and emit the rest. A stripped instruction leaves
 * a hole in a sentence that still *reads* as finished copy, so nobody ever
 * notices it is missing — which is strictly worse than a build that stops and
 * says so.
 *
 * The same principle covers the header row: if the columns are not exactly what
 * this script expects, it exits 1 saying the source changed. It never guesses a
 * column mapping. Guessing wrong here would publish a severity as a workaround.
 *
 * ── Determinism ─────────────────────────────────────────────────────────────
 * The output carries no run timestamp and no hostname; the only date in it is
 * the source document's last commit date. Two runs over the same source produce
 * a byte-identical file, which is what makes `--check` meaningful and keeps the
 * generated file out of unrelated diffs.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { lastModified, resolveBrowserRoot, root, sourceSha256, stampText } from './sources-check.mjs';

/**
 * The document, relative to the product checkout, and the columns it must have.
 *
 * The header is matched as a whole row, not by index and not by line number, so
 * inserting a paragraph above the table or another table below it changes
 * nothing. Renaming a column stops the run.
 */
const SOURCE_REL = 'docs/known-issues.md';
const EXPECTED_HEAD = ['Issue', 'Severity', 'Status / Workaround'];

const OUT_PATH = join(root, 'modules', 'marketing', 'content', 'en', 'known-issues.generated.ts');

/**
 * Editorial markers, generalised.
 *
 * `[BUILD NOTE]` and `[CLAIM]` are the two in use, but the rule is about the
 * shape — a bracketed shout is an instruction to a builder — so `[TODO]`,
 * `[FIXME]` and whatever gets invented next are refused too. The negative
 * lookahead spares markdown links, whose label is also bracketed but is always
 * followed by `(`.
 */
const MARKER_RE = /\[[A-Z][A-Z0-9 _-]{2,}\](?!\()/;
const PLACEHOLDER_RE = /\{\{[A-Z0-9_]+\}\}/;

/** Any inline markdown link in a cell. */
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * The repository the site links into, read from the one file that defines it.
 *
 * `content-check.mjs` already reads `libs/config/site.ts` by regex for the same
 * reason: a generated file must not carry a second copy of a constant that has
 * an owner. Importing it is not an option — this is a plain Node script and
 * that file is TypeScript with `@/` path aliases.
 */
function siteRepo() {
  const config = readFileSync(join(root, 'libs', 'config', 'site.ts'), 'utf8');
  const match = /const SITE_REPO = '([^']+)'/.exec(config);
  if (!match?.[1]) {
    console.error(
      '✗ Could not read SITE_REPO from libs/config/site.ts.\n\n' +
        '  Relative links in the source table are rewritten to that repository, so\n' +
        '  without it this script would emit links that 404 on the site.\n'
    );
    process.exit(1);
  }
  return match[1];
}

/**
 * Split one markdown table row into cells.
 *
 * Splits on unescaped pipes only, so a cell containing `\|` survives, and drops
 * the leading and trailing pipe that delimit the row rather than separate cells.
 */
function splitRow(line) {
  const inner = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return inner.split(/(?<!\\)\|/).map((cell) => cell.replace(/\\\|/g, '|').trim());
}

/** True for the `| --- | --- |` line under a header row. */
function isDelimiter(line) {
  return /^\|[\s:|-]+\|$/.test(line.trim()) && line.includes('-');
}

/**
 * Rewrite a cell's links so they work on a static marketing site.
 *
 * Two transformations, both narrow and both reported to the operator:
 *
 *   1. A relative link (`data-and-backup.md`) resolves against the source
 *      document's own directory and becomes a GitHub blob URL. It cannot stay
 *      relative — this site does not host the product repo's docs, so the link
 *      would render as an internal route to a page that does not exist.
 *   2. A label that is entirely one code span (`` [`x.md`](y) ``) loses the
 *      backticks. `RichText` matches the whole link token first and never looks
 *      inside the label, so leaving them would print literal backticks in the
 *      middle of a table cell. Unwrapping changes typography, not the claim.
 *
 * Anything else — a repo-absolute `/path` link, a bare `#anchor` into the source
 * document — is refused rather than guessed at.
 *
 * @returns {{ text: string, notes: string[], problems: string[] }}
 */
function rewriteLinks(cell, sourceRel, repo) {
  const sourceDir = sourceRel.slice(0, sourceRel.lastIndexOf('/'));
  const notes = [];
  const problems = [];

  const text = cell.replace(LINK_RE, (whole, rawLabel, href) => {
    const label = /^`(.+)`$/.exec(rawLabel)?.[1] ?? rawLabel;
    if (label !== rawLabel) notes.push(`unwrapped code span in link label: ${rawLabel}`);

    if (/^https?:\/\//.test(href) || href.startsWith('mailto:')) return `[${label}](${href})`;

    if (href.startsWith('#') || href.startsWith('/')) {
      problems.push(
        `link "${rawLabel}" → ${href} cannot be resolved: an anchor into the source ` +
          'document, or a repo-absolute path, has no meaning on this site'
      );
      return whole;
    }

    // Resolve `../x/y.md` against the document's directory, in POSIX terms —
    // this is a URL path, not a filesystem path, so `node:path` is wrong here.
    const segments = [];
    for (const segment of `${sourceDir}/${href}`.split('/')) {
      if (segment === '' || segment === '.') continue;
      if (segment === '..') segments.pop();
      else segments.push(segment);
    }
    const url = `${repo}/blob/main/${segments.join('/')}`;
    notes.push(`rewrote ${href} → ${url}`);
    return `[${label}](${url})`;
  });

  return { text, notes, problems };
}

/**
 * Parse the table out of the source document.
 *
 * @returns {{ rows: { issue: string, severity: string, workaround: string }[],
 *             notes: string[], problems: string[] }}
 */
export function parseKnownIssues(markdown, sourceRel, repo) {
  const lines = markdown.replace(/^﻿/, '').replace(/\r\n/g, '\n').split('\n');
  const problems = [];
  const notes = [];

  const headerIndexes = lines
    .map((line, i) => ({ line, i }))
    .filter(({ line }) => line.trim().startsWith('|'))
    .filter(({ line }) => {
      const cells = splitRow(line);
      return (
        cells.length === EXPECTED_HEAD.length &&
        cells.every((cell, c) => cell === EXPECTED_HEAD[c])
      );
    })
    .map(({ i }) => i);

  if (headerIndexes.length !== 1) {
    return {
      rows: [],
      notes,
      problems: [
        headerIndexes.length === 0
          ? `no table with the header | ${EXPECTED_HEAD.join(' | ')} | — the source changed, ` +
            'and a human has to decide what the new columns mean. This script does not guess ' +
            'a column mapping.'
          : `${headerIndexes.length} tables share the header | ${EXPECTED_HEAD.join(' | ')} | — ` +
            'ambiguous, so nothing was generated.',
      ],
    };
  }

  const start = headerIndexes[0] ?? 0;
  if (!isDelimiter(lines[start + 1] ?? '')) {
    return {
      rows: [],
      notes,
      problems: [`the header row at line ${start + 1} is not followed by a | --- | delimiter row`],
    };
  }

  const rows = [];
  for (let i = start + 2; i < lines.length; i += 1) {
    const line = lines[i] ?? '';
    if (!line.trim().startsWith('|')) break;

    const cells = splitRow(line);
    const at = `row ${rows.length + 1} (line ${i + 1})`;

    if (cells.length !== EXPECTED_HEAD.length) {
      problems.push(`${at}: ${cells.length} cells, expected ${EXPECTED_HEAD.length}`);
      continue;
    }

    const cleaned = [];
    let rejected = false;
    for (const [c, cell] of cells.entries()) {
      const column = EXPECTED_HEAD[c];
      if (MARKER_RE.test(cell)) {
        problems.push(
          `${at}, "${column}": carries an editorial marker ${MARKER_RE.exec(cell)?.[0]} — ` +
            'that is an instruction, not copy. Resolve it in the source document; it will ' +
            'not be stripped here.'
        );
        rejected = true;
        continue;
      }
      if (PLACEHOLDER_RE.test(cell)) {
        problems.push(
          `${at}, "${column}": carries an unfilled placeholder ` +
            `${PLACEHOLDER_RE.exec(cell)?.[0]} — fill it in the source document.`
        );
        rejected = true;
        continue;
      }
      if (cell === '') {
        problems.push(`${at}, "${column}": empty cell`);
        rejected = true;
        continue;
      }

      const rewritten = rewriteLinks(cell, sourceRel, repo);
      problems.push(...rewritten.problems.map((p) => `${at}, "${column}": ${p}`));
      notes.push(...rewritten.notes.map((n) => `${at}, "${column}": ${n}`));
      if (rewritten.problems.length > 0) rejected = true;
      cleaned.push(rewritten.text);
    }

    if (!rejected) {
      rows.push({ issue: cleaned[0] ?? '', severity: cleaned[1] ?? '', workaround: cleaned[2] ?? '' });
    }
  }

  if (rows.length === 0 && problems.length === 0) {
    problems.push('the table has a header but no rows');
  }

  return { rows, notes, problems };
}

/**
 * Render the TypeScript module.
 *
 * The rows are emitted as strict JSON — quoted keys, no trailing commas — for
 * the same two reasons `manifest.generated.ts` is: the output is trivially
 * deterministic, and a future reader can `JSON.parse` the literal instead of
 * parsing TypeScript. `as const satisfies` keeps the literal types exact while
 * still failing the build if a row loses a field.
 */
export function renderKnownIssues({ rows, sourceRel, digest, changedOn }) {
  return `/**
 * MACHINE-GENERATED — do not edit by hand. Your changes will be overwritten.
 *
 *   node scripts/known-issues-sync.mjs <tepegoz-browser checkout>
 *
 * Source: tepegoz-browser/${sourceRel}
 * ${stampText(digest, changedOn)}
 *
 * The product repository's known-issues table, verbatim apart from two link
 * rewrites the generator reports as it makes them (relative doc links become
 * GitHub blob URLs; a link label that is entirely a code span loses its
 * backticks, because \`RichText\` cannot render formatting inside a label).
 *
 * Nothing here is editorial. Severity and workaround wording are the product
 * repo's, not the marketing site's, and that is the point: the page's argument
 * is that its claims are checkable, and a defect list rewritten for the website
 * is not the defect list. Copy that *frames* this table — the section heading,
 * the lede, the link to the full document — lives in \`roadmap.ts\`, where it
 * translates with the page.
 *
 * English only. These are engineering statements written in English upstream;
 * a Turkish \`content/tr/\` would need a translated table, which is a human call
 * and not something this generator can make.
 *
 * Staleness is reported by \`node scripts/sources-check.mjs <checkout>\`, which
 * reads the stamp above. Do not hand-edit that stamp — re-run this script.
 */

/** One row of the table. Cell text is inline rich text — bold, code spans, links. */
export type KnownIssue = {
  readonly issue: string;
  readonly severity: string;
  readonly workaround: string;
};

/** The column headings, spelled as the source document spells them. */
export const KNOWN_ISSUES_HEAD = [${EXPECTED_HEAD.map((h) => `'${h}'`).join(', ')}] as const;

export const KNOWN_ISSUES = ${JSON.stringify(rows, null, 2)} as const satisfies readonly KnownIssue[];

/** Field order for a table row, so the columns cannot drift from the headings. */
export const KNOWN_ISSUE_COLUMNS = ['issue', 'severity', 'workaround'] as const satisfies readonly (keyof KnownIssue)[];
`;
}

function main() {
  const argv = process.argv.slice(2);
  const check = argv.includes('--check');
  const unknown = argv.filter((arg) => arg.startsWith('--') && arg !== '--check');
  if (unknown.length > 0) {
    console.error(
      `✗ Unknown flag(s): ${unknown.join(', ')}\n\n` +
        '  Usage: node scripts/known-issues-sync.mjs [browserRoot] [--check]\n'
    );
    process.exit(1);
  }

  const browser = resolveBrowserRoot(argv.find((arg) => !arg.startsWith('--')));
  const sourceAbs = join(browser.path, SOURCE_REL);

  // Unlike `sources-check.mjs`, this one *fails* on a missing checkout. It is a
  // generator, not a gate: it never runs on Vercel, and a human who asked for a
  // regeneration that silently did not happen is worse off than one who is told.
  if (!existsSync(sourceAbs)) {
    console.error(
      `✗ ${sourceAbs} is missing — that does not look like a tepegoz-browser checkout.\n\n` +
        '  Pass the checkout path, or set TEPEGOZ_BROWSER_ROOT.\n'
    );
    process.exit(1);
  }

  const repo = siteRepo();
  const markdown = readFileSync(sourceAbs, 'utf8');
  const { rows, notes, problems } = parseKnownIssues(markdown, SOURCE_REL, repo);

  if (problems.length > 0) {
    console.error(`✗ ${problems.length} problem(s) in ${SOURCE_REL}:\n`);
    for (const problem of problems) console.error(`  ${problem}`);
    console.error('\n  Nothing was written. Fix the source document and run again.\n');
    process.exit(1);
  }

  const fresh = renderKnownIssues({
    rows,
    sourceRel: SOURCE_REL,
    digest: sourceSha256(sourceAbs),
    changedOn: lastModified(browser.path, SOURCE_REL),
  });
  const committed = existsSync(OUT_PATH)
    ? readFileSync(OUT_PATH, 'utf8').replace(/\r\n/g, '\n')
    : null;

  if (check) {
    if (committed !== fresh) {
      console.error(
        '✗ modules/marketing/content/en/known-issues.generated.ts is ' +
          `${committed === null ? 'missing' : 'stale'}.\n\n` +
          `  Regenerate it: node scripts/known-issues-sync.mjs ${browser.path}\n`
      );
      process.exit(1);
    }
    console.log(`✓ known-issues.generated.ts is up to date (${rows.length} row(s)).`);
    return;
  }

  writeFileSync(OUT_PATH, fresh, 'utf8');

  for (const note of notes) console.log(`  ${note}`);
  console.log(
    `${notes.length > 0 ? '\n' : ''}✓ modules/marketing/content/en/known-issues.generated.ts — ` +
      `${rows.length} row(s)${committed === fresh ? ' (unchanged)' : ''}`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
