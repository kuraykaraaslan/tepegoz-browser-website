/**
 * Extracts the English source dictionary from `t('marketing.key', 'English')`
 * calls, writing `modules/marketing/dictionaries/en.json`.
 *
 * Ported from next-boilerplate's `scripts/i18n/extract.mjs`, and the rule it
 * exists to enforce is carried over unchanged: **the inline fallback IS the
 * English source**. English is never hand-written into the dictionary, because a
 * string that lives in two places drifts in one of them, and the one nobody
 * reads is the one that goes stale.
 *
 * Two deviations from upstream, both because this repo is not laid out in
 * modules:
 *
 *   - It walks `app/`, `components/` and `libs/` rather than `modules/<id>/`.
 *     There is one module here — the marketing site — and its UI does not live
 *     under a module directory.
 *   - It therefore hardcodes the `marketing.` key prefix instead of deriving one
 *     per module. Keys not carrying it are ignored, exactly as upstream ignores
 *     keys not prefixed with the owning module id.
 *
 *   node scripts/i18n/extract.mjs           # write en.json
 *   node scripts/i18n/extract.mjs --check   # verify it, exit 1 on drift
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const root = join(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '..');
const SCAN = ['app', 'components', 'libs'];
const MODULE_ID = 'marketing';
const OUT = join(root, 'modules', 'marketing', 'dictionaries', 'en.json');
const CHECK = process.argv.includes('--check');

/*
 * `t('key', 'default')` — the default is a single string literal. Each side
 * matches its own quote style independently so a double-quoted default may
 * contain an unescaped apostrophe, and vice versa. Upstream's regex, verbatim.
 */
const T_RE = /\bt\(\s*(?:'((?:[^'\\]|\\.)*?)'|"((?:[^"\\]|\\.)*?)")\s*,\s*(?:'((?:[^'\\]|\\.)*?)'|"((?:[^"\\]|\\.)*?)")/g;
const unquote = (s) => s.replace(/\\(['"\\])/g, '$1');

/*
 * Comments are stripped before scanning.
 *
 * Without this the extractor reads its OWN documentation: a docblock that shows
 * the pattern as `t('marketing.area.slug', 'English default')` becomes a real
 * dictionary entry, and the first run of this script duly wrote one. A key that
 * no call site renders is a key a translator is asked to translate for nothing.
 *
 * Block comments go first, then line comments — and the `//` case skips a `:`
 * immediately before, so a URL inside a string literal survives.
 */
function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
}

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === 'dictionaries') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(e.name) && !/\.test\./.test(e.name)) acc.push(p);
  }
  return acc;
}

const found = {};
const seenIn = {};
for (const dir of SCAN) {
  for (const file of walk(join(root, dir))) {
    const src = stripComments(readFileSync(file, 'utf8'));
    let m;
    while ((m = T_RE.exec(src))) {
      const key = m[1] ?? m[2];
      if (!key.startsWith(`${MODULE_ID}.`)) continue;
      const value = unquote(m[3] ?? m[4]);
      const where = relative(root, file).replace(/\\/g, '/');
      // The same key with two different English sources is a real defect: one of
      // the two call sites is going to render a string nobody translated.
      if (found[key] !== undefined && found[key] !== value) {
        console.error(`✗ ${key} has two different English sources:`);
        console.error(`    ${seenIn[key]}: ${JSON.stringify(found[key])}`);
        console.error(`    ${where}: ${JSON.stringify(value)}`);
        process.exit(1);
      }
      found[key] = value;
      seenIn[key] = where;
    }
  }
}

const keys = Object.keys(found).sort();
const sorted = {};
for (const k of keys) sorted[k] = found[k];
const body = `${JSON.stringify(sorted, null, 2)}\n`;

if (CHECK) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8').replace(/\r\n/g, '\n') : '';
  if (current !== body) {
    console.error('✗ modules/marketing/dictionaries/en.json is out of date with the t() calls in the code.');
    console.error('  Run: node scripts/i18n/extract.mjs');
    process.exit(1);
  }
  console.log(`✓ en.json matches ${keys.length} t() call site(s).`);
  process.exit(0);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, body, 'utf8');
console.log(`${MODULE_ID}: ${keys.length} keys → modules/marketing/dictionaries/en.json`);
