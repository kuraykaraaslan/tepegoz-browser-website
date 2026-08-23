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
 *
 *   npm run content:check
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'modules', 'marketing', 'content', 'en');

const MAX_DESCRIPTION = 155;

/** Routes this site builds, read from the single source that defines them. */
const siteConfig = readFileSync(join(root, 'libs', 'config', 'site.ts'), 'utf8');
const routes = new Set(
  [...siteConfig.matchAll(/^\s{2}\w+:\s*'(\/[^']*)'/gm)].map(([, r]) => r)
);
routes.add('/');

const problems = [];

for (const file of readdirSync(contentDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const source = readFileSync(join(contentDir, file), 'utf8');
  const where = `modules/marketing/content/en/${file}`;

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
}

if (problems.length > 0) {
  console.error(`✗ ${problems.length} content problem(s):\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('');
  process.exit(1);
}

console.log('✓ Content checks passed.');
