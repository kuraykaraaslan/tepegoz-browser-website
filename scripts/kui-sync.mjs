#!/usr/bin/env node
/**
 * Refreshes the vendored KUI React bundle from a local checkout.
 *
 * KUI is not on npm and its upstream repo gitignores `dist/` with no `prepare`
 * script, so the build output is committed here (see vendor/kui-react/README.md).
 * This script replaces it from a checkout you have already built.
 *
 *   KUIREACT_ROOT=/home/kuray/kui-react npm run kui:sync
 *   npm run kui:sync -- //wsl.localhost/Ubuntu/home/kuray/kui-react
 *
 * It does not run the upstream build — do that first:
 *   cd <checkout> && npm run build:lib
 */

import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const vendor = join(root, 'vendor', 'kui-react');

const source = resolve(process.argv[2] ?? process.env.KUIREACT_ROOT ?? '');
if (!source || source === resolve('')) {
  console.error('Pass the kui-react checkout path, or set KUIREACT_ROOT.');
  process.exit(1);
}

for (const required of ['dist', 'styles', 'package.json']) {
  if (!existsSync(join(source, required))) {
    console.error(
      `✗ ${join(source, required)} is missing.` +
        (required === 'dist' ? ' Run `npm run build:lib` in the checkout first.' : '')
    );
    process.exit(1);
  }
}

const upstreamVersion = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8')).version;

for (const dir of ['dist', 'styles']) {
  rmSync(join(vendor, dir), { recursive: true, force: true });
  cpSync(join(source, dir), join(vendor, dir), { recursive: true });
  console.log(`  copied ${dir}/`);
}

// Keep the vendored manifest's version honest without touching its exports map,
// which is intentionally trimmed relative to upstream.
const manifestPath = join(vendor, 'package.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const previous = manifest.version;
manifest.version = upstreamVersion;
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(
  `\n✓ Vendored KUI ${previous} → ${upstreamVersion} from ${source}\n\n` +
    '  Next: npm run kui:check   (a new bare import may need installing)\n' +
    '        npm run build\n' +
    '  Then update the "Vendored on" date in vendor/kui-react/README.md.\n'
);
