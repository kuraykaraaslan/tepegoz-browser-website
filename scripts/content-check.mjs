#!/usr/bin/env node
/**
 * Validates the page content against the rules in
 * `tepegoz-browser/docs/website/README.md`, so a copy edit cannot quietly break
 * one of them.
 *
 * Checks:
 *   1. Meta descriptions are ≤ 155 characters (the README's stated limit).
 *   2. Every internal link resolves to a route the site actually builds —
 *      second-wave pages (`/extensions`, `/turkey`, …) are not live yet, and a
 *      dead link on a page arguing for honesty is a bad look.
 *   3. `[BUILD NOTE]` and `[CLAIM]` markers never reach rendered copy. Build
 *      notes are instructions, not content; the README says they must not be
 *      rendered.
 *   4. `draft-legal` pages still carry placeholders (a reminder they are
 *      unreviewed), and `ready` pages carry none.
 *   5. A `needs-assets` page renders an honest, visible gap — and a `ready` page
 *      renders none. This one was a habit rather than a check until now, and
 *      four of the seven `needs-assets` pages were owing assets in silence.
 *
 *   npm run content:check
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = join(root, 'modules', 'marketing', 'content');

/**
 * Every locale directory under `content/`, discovered rather than listed.
 *
 * This used to check `content/en/` alone, which was true of the repository at
 * the time and stopped being true the moment `content/tr/` landed: half the
 * site's rendered copy was suddenly outside every rule this file enforces. A
 * translated meta description is longer than its English source often enough
 * that the 155-character limit is a real constraint rather than a formality —
 * five of the first twenty Turkish pages were over it — and a `draft-legal`
 * page whose `{{PLACEHOLDER}}` tokens got translated into Turkish would read as
 * finished writing to exactly the reader least able to tell.
 *
 * Discovered, not enumerated, because a hardcoded `['en', 'tr']` is a third
 * place a new locale has to be registered and the one nobody would remember —
 * and its failure is silent, which is the kind this script exists to prevent.
 */
const locales = readdirSync(contentRoot).filter((entry) =>
  statSync(join(contentRoot, entry)).isDirectory()
);

const MAX_DESCRIPTION = 155;

/** Routes this site builds, read from the single source that defines them. */
const siteConfig = readFileSync(join(root, 'libs', 'config', 'site.ts'), 'utf8');
const routes = new Set(
  [...siteConfig.matchAll(/^\s{2}\w+:\s*'(\/[^']*)'/gm)].map(([, r]) => r)
);
routes.add('/');

/**
 * The gallery blocks in one content file, as `{ expected, items }` counts.
 *
 * Regex over source text, like everything else here — this script deliberately
 * never imports a TypeScript module, so it can run before a build and cannot be
 * broken by one. A block is sliced from its own `kind:` to the next one, which
 * holds because every block in these files opens with `kind: '…'` and nothing
 * else in the content model uses that key. Inside the slice, one `asset:` is one
 * delivered item; `expected` is what the surrounding copy promises.
 */
function galleryCounts(source) {
  const found = [];
  for (const match of source.matchAll(/kind:\s*'gallery'/g)) {
    const rest = source.slice(match.index + match[0].length);
    const nextBlock = rest.search(/kind:\s*'/);
    const region = nextBlock === -1 ? rest : rest.slice(0, nextBlock);
    const expected = /expected:\s*(\d+)/.exec(region);
    found.push({
      expected: expected === null ? null : Number(expected[1]),
      items: [...region.matchAll(/\basset:\s*'/g)].length,
    });
  }
  return found;
}

const problems = [];

/*
 * Every page module in every locale, as `<locale>/<file>` paths.
 *
 * Flattened into one list rather than nested loops so the body below — which is
 * the part anyone reads — stays at the indentation it was written at, and so a
 * new check cannot be added inside the wrong loop.
 *
 * A `*.generated.ts` module is data, not a page: it has no meta description to
 * measure, no status to reconcile and no links to resolve, so every check below
 * would either misfire on it or measure nothing. Its editorial-marker discipline
 * is enforced harder and earlier anyway — the generator refuses to emit a row
 * carrying a marker at all, rather than stripping one and leaving a hole that
 * reads as finished writing.
 */
const pages = locales.flatMap((locale) =>
  readdirSync(join(contentRoot, locale))
    .filter(
      (file) => file.endsWith('.ts') && file !== 'index.ts' && !file.endsWith('.generated.ts')
    )
    .map((file) => `${locale}/${file}`)
);

for (const page of pages) {
  const source = readFileSync(join(contentRoot, page), 'utf8');
  const where = `modules/marketing/content/${page}`;

  // 1. Meta description length.
  const description = /description:\s*\n?\s*'((?:[^'\\]|\\.)*)'/.exec(source);
  if (!description) {
    problems.push(`${where}: no description found`);
  } else if (description[1].length > MAX_DESCRIPTION) {
    problems.push(
      `${where}: description is ${description[1].length} chars (max ${MAX_DESCRIPTION})`
    );
  }

  // 2. Internal links resolve. Only markdown-style links in copy — `href:`
  //    fields are checked by TypeScript against ROUTES already.
  for (const [, label, href] of source.matchAll(/\[([^\]]+)\]\((\/[^)$]*)\)/g)) {
    const path = href.split('#')[0].replace(/\/$/, '') || '/';
    if (!routes.has(path)) {
      problems.push(`${where}: link "${label}" → ${href} is not a built route`);
    }
  }

  // 3. Editorial markers must never render.
  for (const marker of ['[BUILD NOTE]', '[CLAIM]']) {
    // Allowed inside a /** comment */, forbidden inside a quoted string.
    for (const [, quoted] of source.matchAll(/'((?:[^'\\]|\\.)*)'/g)) {
      if (quoted.includes(marker)) {
        problems.push(`${where}: ${marker} appears in rendered copy`);
        break;
      }
    }
  }

  // 4. Placeholder discipline.
  const status = /status:\s*'([^']+)'/.exec(source)?.[1];
  const placeholders = [...source.matchAll(/\{\{[A-Z0-9_]+\}\}/g)].length;
  if (status !== 'draft-legal' && placeholders > 0) {
    problems.push(`${where}: status "${status}" but has ${placeholders} unfilled placeholder(s)`);
  }
  if (status === 'draft-legal' && placeholders === 0) {
    problems.push(`${where}: draft-legal with no placeholders — is it ready to promote?`);
  }

  // 5. The honesty rule: a page that owes an asset has to say so *on the page*.
  //
  //    `status: 'needs-assets'` alone does not, and cannot: `StatusBanner`
  //    renders it in development only, so to a visitor it is invisible. The rule
  //    the README actually states is editorial — an honest labelled gap, and
  //    never a mockup standing in for one — and it was enforced by nothing but
  //    care. Care is exactly what a rushed edit spends first: four of the seven
  //    `needs-assets` pages were owing assets in complete silence, which is the
  //    failure mode the editorial rule exists to prevent.
  //
  //    A gap is one of two shapes. An `assetPlaceholder` is the all-or-nothing
  //    one. A `gallery` with fewer items than its `expected` is the partial one,
  //    and it matters because "four of the nine extension panels" is a state the
  //    page will be in for months; a grid that quietly ends after the fourth
  //    tile looks finished.
  const gaps = galleryCounts(source).filter(
    (gallery) => gallery.expected !== null && gallery.items < gallery.expected
  );
  const hasPlaceholder = /kind:\s*'assetPlaceholder'/.test(source);

  if (status === 'needs-assets' && !hasPlaceholder && gaps.length === 0) {
    problems.push(
      `${where}: status "needs-assets" but the page renders no gap. ` +
        'Add an assetPlaceholder (or a gallery with `expected`) naming the asset that is ' +
        'actually owed, or — if it owes nothing — promote it to status "ready".'
    );
  }
  // The converse. A `ready` page with a pending slot is claiming both that it
  // owes nothing and that it owes something; one of the two is wrong, and which
  // one is not this script's call to make.
  if (status === 'ready' && hasPlaceholder) {
    problems.push(
      `${where}: status "ready" but the page renders an assetPlaceholder. ` +
        'Either the asset arrived and the slot should go, or the page is not ready.'
    );
  }
}

if (problems.length > 0) {
  console.error(`✗ ${problems.length} content problem(s):\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('');
  process.exit(1);
}

console.log('✓ Content checks passed.');
