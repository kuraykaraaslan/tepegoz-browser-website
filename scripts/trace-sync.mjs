/**
 * Receives a recorded agent run from the product repo and emits it as a
 * committed TypeScript module.
 *
 * This is the third provenance mechanism on the site, and the README says which
 * artefact belongs to which. The short version:
 *
 *   media ledger      bytes rendered as pixels, measured from the file
 *   source stamps     prose a human transcribed, checked against a .md
 *   generated modules structured facts emitted from the product repo   ← this
 *
 * It is modelled on `known-issues-sync.mjs` deliberately, down to reusing that
 * file's cross-repo helpers, because a second mechanism that behaved differently
 * from the first would double the number of things a reviewer has to know.
 *
 * ## Why the run is committed as TypeScript and not fetched from `public/`
 *
 * A same-origin `fetch('/traces/x.json')` would in fact be *allowed* — the CSP's
 * `connect-src 'self'` permits it — so CSP is not the reason, and claiming it
 * was would be the kind of tidy false explanation this repo keeps catching.
 *
 * The reasons are that nothing checks `public/`: the media ledger's scan is
 * confined to its own directories, so a JSON dropped there could go stale,
 * malformed, or un-sanitised with no gate objecting. And a page whose entire
 * argument is honesty must not render an empty timeline because a request
 * failed. Committed TypeScript is verified by `trace-check.mjs` on every build,
 * inlines at a few KB, and cannot fail to arrive.
 *
 * ## What this refuses
 *
 * Everything the product's `publish-trace.mjs` refuses, re-checked here rather
 * than trusted, because the two repos are separate and this one is the last gate
 * before a run reaches a page. It never repairs: a trace that does not validate
 * stops the run and is reported, because a record trimmed to fit is not a record.
 *
 *   node scripts/trace-sync.mjs <tepegoz-browser checkout> [--only <slug>]
 */
import { existsSync, readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { lastModified, resolveBrowserRoot, root, sourceSha256, stampText } from './sources-check.mjs';

const SOURCE_DIR_REL = 'docs/website/runs';
const OUT_DIR = join(root, 'modules', 'marketing', 'traces');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
/* `resolveBrowserRoot` returns `{ path, explicit, ok }`, not a string — the same
   shape `known-issues-sync.mjs` destructures. Unlike `sources-check.mjs`, a
   missing checkout FAILS here: this is a generator, not a gate, and a human who
   asked for a regeneration that silently did not happen is worse off than one
   who is told. */
const browser = resolveBrowserRoot(args.find((a) => !a.startsWith('--')));
const browserRoot = browser.path;

const srcDir = join(browserRoot, SOURCE_DIR_REL);
if (!existsSync(srcDir)) {
  console.error(`${srcDir} does not exist — publish a run first (product repo: node scripts/publish-trace.mjs).`);
  process.exit(1);
}

/**
 * The event kinds a published run may contain.
 *
 * Kept in step with `modules/marketing/traces/schema.ts` BY HAND, and that is a
 * real duplication rather than a tolerable one: `tsconfig` sets `allowJs: false`,
 * so the `.mjs` and `.ts` halves of this repo cannot import each other. The same
 * split already exists between `media/types.ts` and `provenance.schema.mjs`. What
 * keeps the two honest is that both run over the same files in every build — a
 * guarantee, but not the same thing as one definition.
 *
 * `paused`, `resumed` and `steered` are absent on purpose: the product marks them
 * ephemeral and never journals them, so a trace containing one did not come from
 * the journal.
 */
const KINDS = new Set([
  'plan', 'decision', 'step_start', 'step_ok', 'step_error', 'awaiting_approval',
  'input_action', 'handoff', 'tab_spawn', 'grant', 'done', 'error',
]);

const MAX_FIELD = 8000;

function validate(doc, where) {
  const bad = [];
  const str = (v, f, max) => {
    if (typeof v !== 'string' || !v.length) bad.push(`${f} is not a non-empty string`);
    else if (v.length > max) bad.push(`${f} is ${v.length} chars (max ${max})`);
  };
  const int = (v, f) => {
    if (!Number.isInteger(v) || v < 0) bad.push(`${f} is not a non-negative integer`);
  };

  if (doc.traceVersion !== 1) bad.push(`traceVersion is ${doc.traceVersion}, expected 1`);
  str(doc.capturedBy, 'capturedBy', 200);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(doc.capturedOn ?? '')) bad.push('capturedOn is not yyyy-mm-dd');
  str(doc.provider, 'provider', 60);
  str(doc.autonomy, 'autonomy', 40);
  str(doc.startUrl, 'startUrl', 2000);
  str(doc.task, 'task', 2000);
  if (!['done', 'error', 'timeout'].includes(doc.terminal)) bad.push(`terminal is ${doc.terminal}`);
  int(doc.durationMs, 'durationMs');
  if (doc.recordingStartsAtMs !== null) int(doc.recordingStartsAtMs, 'recordingStartsAtMs');

  if (!Array.isArray(doc.events) || !doc.events.length) bad.push('events is empty');
  for (const [i, e] of (doc.events ?? []).entries()) {
    if (!KINDS.has(e.kind)) bad.push(`events[${i}].kind "${e.kind}" is not a journalled kind`);
    int(e.atMs, `events[${i}].atMs`);
    str(e.message, `events[${i}].message`, 4000);
    if (e.detail !== undefined) str(e.detail, `events[${i}].detail`, MAX_FIELD);
  }
  for (const [i, p] of (doc.plans ?? []).entries()) {
    str(p.goal, `plans[${i}].goal`, 2000);
    if (!Array.isArray(p.steps) || !p.steps.length) bad.push(`plans[${i}].steps is empty`);
    for (const [k, s] of (p.steps ?? []).entries()) {
      str(s.tool, `plans[${i}].steps[${k}].tool`, 120);
      str(s.rationale, `plans[${i}].steps[${k}].rationale`, 2000);
    }
  }
  for (const [i, a] of (doc.approvals ?? []).entries()) {
    str(a.toolName, `approvals[${i}].toolName`, 120);
    str(a.reason, `approvals[${i}].reason`, 200);
  }

  /* An identifier that means nothing off the machine that produced it. The
     product's publisher strips these; this checks rather than assumes, because
     a hand-edited trace is exactly the case the two-repo split exists to catch. */
  const rawText = JSON.stringify(doc);
  for (const leak of ['runId', 'groupId', 'planId', 'approvalId']) {
    if (rawText.includes(`"${leak}"`)) bad.push(`${leak} was not stripped by the publisher`);
  }

  if (bad.length) {
    console.error(`refusing ${where}:`);
    for (const b of bad) console.error('  -', b);
    process.exit(1);
  }
}

const files = readdirSync(srcDir)
  .filter((f) => f.endsWith('.trace.json'))
  .filter((f) => !only || f === `${only}.trace.json`);

if (!files.length) {
  console.error(only ? `no ${only}.trace.json in ${srcDir}` : `no *.trace.json in ${srcDir}`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
const written = [];

for (const file of files) {
  const slug = file.replace(/\.trace\.json$/, '');
  const constName = slug.toUpperCase().replace(/-/g, '_');
  const abs = join(srcDir, file);
  const sourceRel = `${SOURCE_DIR_REL}/${file}`;
  const doc = JSON.parse(readFileSync(abs, 'utf8'));
  validate(doc, sourceRel);

  const digest = sourceSha256(abs);
  const changedOn = lastModified(browserRoot, sourceRel);

  const body = `/**
 * MACHINE-GENERATED — do not edit by hand. Your changes will be overwritten.
 *
 *   node scripts/trace-sync.mjs <tepegoz-browser checkout> --only ${slug}
 *
 * Source: tepegoz-browser/${sourceRel}
 * ${stampText(digest, changedOn)}
 *
 * One recorded agent run, exactly as the product's own event stream reported it.
 *
 * Nothing here is editorial. \`message\` and \`detail\` are the strings the agent
 * runtime emitted; they are not copy, they never pass through the locale
 * rewriter, and no step was removed because it was unflattering. The run failed
 * a step at least once in every capture kept so far, and that step is in here.
 *
 * English only, and not because Turkish is an afterthought: these are product
 * strings emitted in English by the runtime. A translated trace would be a
 * translation of evidence, which is no longer evidence. The copy AROUND the
 * replay translates; the record does not.
 *
 * Verified two ways: \`sources-check.mjs\` compares the stamp above against the
 * product repo when a checkout is present, and \`trace-check.mjs\` re-validates
 * the shape below with no checkout at all, which is the only one Vercel can run.
 */
import type { TraceDocument } from './schema';

export const ${constName} = ${JSON.stringify(doc, null, 2)} as const satisfies TraceDocument;
`;

  const outPath = join(OUT_DIR, `${slug}.generated.ts`);
  writeFileSync(outPath, body, 'utf8');
  written.push({ slug, constName, outPath, doc });
  const kinds = {};
  for (const e of doc.events) kinds[e.kind] = (kinds[e.kind] ?? 0) + 1;
  console.log(`✓ ${slug}  ${doc.events.length} events ${JSON.stringify(kinds)}  → ${outPath}`);
}

console.log(`\n${written.length} run(s) synced. Register them in modules/marketing/traces/index.ts:`);
for (const w of written) {
  console.log(`  import { ${w.constName} } from './${w.slug}.generated';   //  key: '${w.slug}'`);
}
