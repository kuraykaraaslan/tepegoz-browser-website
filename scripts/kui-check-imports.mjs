#!/usr/bin/env node
/**
 * Verifies that every bare module the vendored KUI bundle imports is installed.
 *
 * KUI is consumed as a prebuilt bundle (see vendor/kui-react/README.md), and it
 * imports packages this site never knowingly uses — `leaflet` and
 * `react-leaflet` reach us only because `MapView` shares an entrypoint with the
 * components we do render. The bundler must still resolve them, so a KUI
 * refresh that adds one more of these breaks `next build` with a stack trace
 * pointing into minified vendor code.
 *
 * Running this first turns that into one clear line naming the package.
 *
 *   npm run kui:check
 */

import { readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'vendor', 'kui-react', 'dist');
const require = createRequire(join(root, 'package.json'));

/** Matches `from "pkg"` and `import("pkg")` where pkg is not a relative path. */
const BARE = /(?:from\s*|import\s*\(\s*)["']([^."'][^"']*)["']/g;

/** `@scope/name/sub` → `@scope/name`; `pkg/sub` → `pkg`. */
function packageName(specifier) {
  const parts = specifier.split('/');
  return specifier.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
}

const specifiers = new Set();
for (const file of readdirSync(distDir)) {
  if (!file.endsWith('.mjs') && !file.endsWith('.js')) continue;
  const source = readFileSync(join(distDir, file), 'utf8');
  for (const [, specifier] of source.matchAll(BARE)) {
    // Node built-ins and Next's own subpaths are always available.
    if (specifier.startsWith('node:') || specifier.startsWith('next/')) continue;
    specifiers.add(packageName(specifier));
  }
}

const sorted = [...specifiers].sort();
const missing = sorted.filter((name) => {
  try {
    require.resolve(`${name}/package.json`);
    return false;
  } catch {
    try {
      require.resolve(name);
      return false;
    } catch {
      return true;
    }
  }
});

console.log(`Bare imports in the vendored KUI bundle (${sorted.length}):`);
for (const name of sorted) {
  console.log(`  ${missing.includes(name) ? '✗' : '✓'} ${name}`);
}

if (missing.length > 0) {
  console.error(
    `\n✗ ${missing.length} package(s) the bundle imports are not installed:\n` +
      missing.map((n) => `    ${n}`).join('\n') +
      `\n\n  Install them as dependencies, even if this site never renders the` +
      `\n  component that uses them — the bundler resolves every import it can` +
      `\n  reach, including lazy ones.\n`
  );
  process.exit(1);
}

console.log('\n✓ All resolvable.');
