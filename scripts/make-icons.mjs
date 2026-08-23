// Regenerates public/favicon.ico and public/apple-touch-icon.png from
// public/favicon.svg. The outputs are committed, so this only needs running
// when the mark changes.
//
// Requires a one-off `npm i --no-save puppeteer-core` and a local Chrome — it is
// not a build dependency, and keeping it out of package.json keeps the Vercel
// install lean.
//
//   npm i --no-save puppeteer-core && npm run icons
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg', 'utf8');
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: 'new',
  args: ['--force-device-scale-factor=1'],
});

const sizes = [16, 32, 48];
const pngs = [];
for (const s of sizes) {
  const page = await browser.newPage();
  await page.setViewport({ width: s, height: s, deviceScaleFactor: 1 });
  await page.setContent(
    `<html><body style="margin:0">${svg.replace('<svg', `<svg width="${s}" height="${s}"`)}</body></html>`
  );
  pngs.push({ size: s, buf: await page.screenshot({ omitBackground: true, type: 'png' }) });
  await page.close();
}

// Also emit a 180px apple-touch-icon on an opaque brand field.
const page = await browser.newPage();
await page.setViewport({ width: 180, height: 180, deviceScaleFactor: 1 });
await page.setContent(
  `<html><body style="margin:0;width:180px;height:180px;background:#0C2135;display:flex;align-items:center;justify-content:center">
     ${svg.replace('<svg', '<svg width="150" height="150"')}
   </body></html>`
);
writeFileSync('public/apple-touch-icon.png', await page.screenshot({ type: 'png' }));
await browser.close();

// ICO container: 6-byte header + 16-byte directory entry per image + payloads.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);            // reserved
header.writeUInt16LE(1, 2);            // type: icon
header.writeUInt16LE(pngs.length, 4);  // image count

let offset = 6 + 16 * pngs.length;
const entries = [];
for (const { size, buf } of pngs) {
  const e = Buffer.alloc(16);
  e.writeUInt8(size === 256 ? 0 : size, 0); // width
  e.writeUInt8(size === 256 ? 0 : size, 1); // height
  e.writeUInt8(0, 2);                       // palette
  e.writeUInt8(0, 3);                       // reserved
  e.writeUInt16LE(1, 4);                    // colour planes
  e.writeUInt16LE(32, 6);                   // bits per pixel
  e.writeUInt32LE(buf.length, 8);
  e.writeUInt32LE(offset, 12);
  entries.push(e);
  offset += buf.length;
}

writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...pngs.map((p) => p.buf)]));
console.log('wrote public/favicon.ico and public/apple-touch-icon.png');
