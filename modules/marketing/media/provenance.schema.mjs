/**
 * Runtime validation for `provenance.json`, the one file in this ledger a human
 * edits by hand.
 *
 * The repo rule is `safeParse` at every trust boundary. A JSON file a person
 * types into is one: a typo'd key, a date written `23/08/2026`, or a `note`
 * accidentally left as `""` all reach the generator as data it would otherwise
 * copy straight into a committed manifest. So it is parsed, not trusted.
 *
 * ── Why this is a `.mjs` next to `types.ts` rather than inside it ─────────────
 * The brief for this ledger asked for the schema to live in `types.ts`. It does
 * not, and the reason is mechanical rather than stylistic: `media-check.mjs` runs
 * inside `npm run check`, which protects the Vercel build, and a plain Node ESM
 * script cannot import a `.ts` module without Node's type-stripping — which is
 * on by default only from Node 22.18 / 24, and this repo does not pin the Node
 * version Vercel gives it. A verifier that fails because the build image shipped
 * Node 22.11 would be failing for a reason that has nothing to do with media,
 * which is the one thing a gate must never do. So the schema is authored in
 * runtime-loadable form here, and `types.ts` carries the compile-time half.
 *
 * The two halves cannot silently drift, because the generator writes what comes
 * out of THIS schema into `manifest.generated.ts`, which `tsc` then checks
 * against `SourceStamp` in `types.ts`. A field renamed or dropped on one side
 * fails `npm run typecheck` on the other. (The gap that survives: an *optional*
 * field added here and never emitted would not be caught. Every field below is
 * required for that reason, among others.)
 */

import { z } from 'zod';

/**
 * Ledger keys are slugs derived from the filename — `agent-demo`,
 * `command-palette`. Constrained so a key cannot be a path, a URL, or a filename
 * with an extension still attached; those all still "work" as object keys and
 * would each produce a differently-shaped ledger.
 */
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Field order for emission. Object key order is meaningful here only because the
 * generated file must be byte-identical across runs, and `JSON.stringify` follows
 * insertion order.
 */
export const STAMP_FIELDS = ['capturedAt', 'browserCommit', 'appVersion', 'tool', 'note'];

/** What an asset with no editorial record looks like. Not an error — a question. */
export const EMPTY_STAMP = Object.freeze({
  capturedAt: null,
  browserCommit: null,
  appVersion: null,
  tool: null,
  note: null,
});

/**
 * Every field is required and explicitly nullable, rather than optional.
 *
 * `null` and "absent" would both mean "not recorded", and having two spellings of
 * one meaning is how a ledger stops being comparable to itself. Writing the null
 * out also puts the question in front of whoever opens the file.
 */
export const sourceStampSchema = z.strictObject({
  // ISO calendar date. Deliberately not `z.iso.datetime()`: a capture is dated to
  // the day it was taken, and a fabricated hour-and-minute would be the same class
  // of invention this ledger exists to prevent.
  capturedAt: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'capturedAt must be an ISO date, YYYY-MM-DD')
    .nullable(),
  // Git short sha, 7–40 lowercase hex. Long enough to identify a commit, and the
  // pattern rejects the two things people actually paste here instead: a branch
  // name and a full commit URL.
  browserCommit: z
    .string()
    .regex(/^[0-9a-f]{7,40}$/, 'browserCommit must be a git sha (7–40 hex chars)')
    .nullable(),
  appVersion: z.string().min(1).nullable(),
  tool: z.string().min(1).nullable(),
  // `min(1)` on purpose: an empty string is a note nobody wrote, and it should be
  // spelled `null` so it reads as absent rather than as blank.
  note: z.string().min(1).nullable(),
});

/** The whole file: ledger key → stamp. */
export const provenanceFileSchema = z.record(
  z.string().regex(SLUG_RE, 'provenance keys must be slugs, e.g. "agent-demo"'),
  sourceStampSchema
);

/**
 * Parse `provenance.json` text.
 *
 * @param {string} text Raw file contents.
 * @param {string} where Path, for error messages that name the file.
 * @returns {{ ok: true, value: Record<string, typeof EMPTY_STAMP> } | { ok: false, problems: string[] }}
 */
export function parseProvenance(text, where) {
  let json;
  try {
    json = JSON.parse(text);
  } catch (error) {
    return { ok: false, problems: [`${where}: not valid JSON — ${error.message}`] };
  }

  const result = provenanceFileSchema.safeParse(json);
  if (!result.success) {
    return {
      ok: false,
      problems: result.error.issues.map(
        (issue) => `${where}: ${issue.path.join('.') || '(root)'} — ${issue.message}`
      ),
    };
  }
  return { ok: true, value: result.data };
}
