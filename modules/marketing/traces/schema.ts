import { z } from 'zod';

/**
 * The boundary parser for a recorded agent run.
 *
 * This is the third provenance mechanism on the site, and it exists because the
 * other two cannot hold a run:
 *
 *   - The **media ledger** owns bytes rendered as pixels. `measure()` recognises
 *     PNG/GIF/JPEG/SVG/WebM and throws by name on anything else, and
 *     `MediaAsset.width`/`height` are non-nullable because a page must reserve
 *     layout for a picture. A JSON document has no intrinsic size and is not a
 *     picture, so it is not a ledger asset.
 *   - **Source stamps** own hand-transcribed copy, checked against a markdown
 *     document in the product repo. A trace is not transcribed by a human and
 *     must never be edited by one.
 *
 * So a trace is a **generated data module**, exactly like
 * `content/en/known-issues.generated.ts`: structured facts emitted from the
 * product repo as committed TypeScript, carrying a `Source:` + `@sourceSha256`
 * header, verified against the product repo by `sources-check.mjs` when a
 * checkout is present and against this schema by `trace-check.mjs` when it is
 * not.
 *
 * ## Why the fields are not named `asset` and `describes`
 *
 * `scripts/media-restamp.mjs` scans *every* content `.ts` for a `describes:`
 * field and then demands an `asset:` sibling that resolves in the media ledger.
 * A block that reused those two names would fail `npm run check` on its first
 * commit with an error about a missing ledger key, which is a confusing way to
 * learn that a trace is not an image. The trace is addressed by `trace:` and
 * carries no stamp; its integrity is the generated module's `@sourceSha256`.
 *
 * ## Why there are no `node:` imports here
 *
 * The parsed output of this module is rendered by a client island. A value
 * import that reaches a `node:`-importing module from a client component is a
 * bundler failure, so this file stays pure zod.
 */

/**
 * The event kinds a published trace may contain.
 *
 * `paused`, `resumed` and `steered` are deliberately absent. The product marks
 * them ephemeral run-control signals that are never journaled, so a trace
 * containing one did not come from the journal and should not be trusted as a
 * record of what happened.
 */
export const TRACE_EVENT_KINDS = [
  'plan',
  'decision',
  'step_start',
  'step_ok',
  'step_error',
  'awaiting_approval',
  'input_action',
  'handoff',
  'tab_spawn',
  'grant',
  'done',
  'error',
] as const;

export type TraceEventKind = (typeof TRACE_EVENT_KINDS)[number];

/**
 * One event, in the product's own words.
 *
 * `message` and `detail` are the strings the agent runtime emitted, carried
 * verbatim. They are NOT copy: they never pass through the locale rewriter and
 * they are never edited for the page. That is the whole claim the replay makes,
 * and editing one would quietly turn a record into a script.
 *
 * `atMs` is measured from the start of the run, not from the start of the video
 * — `recordingStartsAtMs` on the document is what lines the two up.
 */
export const TraceEventSchema = z.object({
  kind: z.enum(TRACE_EVENT_KINDS),
  atMs: z.number().int().nonnegative(),
  message: z.string().min(1).max(4000),
  detail: z.string().max(8000).optional(),
});
export type TraceEvent = z.infer<typeof TraceEventSchema>;

/** One planned step, with the reason the planner gave for it. */
export const TracePlanStepSchema = z.object({
  id: z.string().min(1).max(64),
  tool: z.string().min(1).max(120),
  rationale: z.string().min(1).max(2000),
});
export type TracePlanStep = z.infer<typeof TracePlanStepSchema>;

/** The plan as it was shown to the person who had to approve it, before anything ran. */
export const TracePlanSchema = z.object({
  atMs: z.number().int().nonnegative(),
  goal: z.string().min(1).max(2000),
  steps: z.array(TracePlanStepSchema).min(1).max(40),
});
export type TracePlan = z.infer<typeof TracePlanSchema>;

/**
 * A gate the security kernel raised before a tool call.
 *
 * `argsPreview` is already truncated to 200 characters by the product, in the
 * privileged process, before it ever reaches a renderer. The replay says so
 * rather than presenting it as the whole argument.
 */
export const TraceApprovalSchema = z.object({
  atMs: z.number().int().nonnegative(),
  toolName: z.string().min(1).max(120),
  reason: z.string().min(1).max(200),
  riskTier: z.string().min(1).max(60).nullable(),
  argsPreview: z.string().max(400),
});
export type TraceApproval = z.infer<typeof TraceApprovalSchema>;

/**
 * A gate answered by the capture harness rather than by a person.
 *
 * Required, not optional, and never empty-by-default: there was no human at the
 * keyboard during the capture, and a replay that let a viewer assume otherwise
 * would be claiming a person reviewed something nobody reviewed.
 */
export const TraceHarnessAnswerSchema = z.object({
  kind: z.enum(['plan', 'tool']),
  button: z.string().min(1).max(60),
  atMs: z.number().int().nonnegative(),
});
export type TraceHarnessAnswer = z.infer<typeof TraceHarnessAnswerSchema>;

/**
 * A whole recorded run.
 *
 * `terminal` carries the real outcome including `timeout`, because a harness
 * that gave up is a fact about the run and the site does not get to publish only
 * the runs that finished.
 */
export const TraceDocumentSchema = z.object({
  traceVersion: z.literal(1),
  /** Which script produced this, so a reader can go and re-run it. */
  capturedBy: z.string().min(1).max(200),
  /** ISO date of the capture. Runs age, and a two-year-old run should look two years old. */
  capturedOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  /** The model provider that drove the run. A demo is not honest without it. */
  provider: z.string().min(1).max(60),
  /** The autonomy level in force, which is what decides whether gates fire at all. */
  autonomy: z.string().min(1).max(40),
  startUrl: z.string().url().max(2000),
  task: z.string().min(1).max(2000),
  terminal: z.enum(['done', 'error', 'timeout']),
  durationMs: z.number().int().nonnegative(),
  /** ms from the run's t0 to the video's first frame; null when there is no video. */
  recordingStartsAtMs: z.number().int().nullable(),
  plans: z.array(TracePlanSchema).max(8),
  events: z.array(TraceEventSchema).min(1).max(2000),
  approvals: z.array(TraceApprovalSchema).max(64),
  answeredByHarness: z.array(TraceHarnessAnswerSchema).max(64),
});
export type TraceDocument = z.infer<typeof TraceDocumentSchema>;

/**
 * Parse a trace, refusing rather than repairing.
 *
 * A trace that does not validate is not trimmed to fit — it is rejected, because
 * the failure mode this guards against is a malformed export being silently
 * reshaped into something publishable.
 */
export function parseTrace(value: unknown, label: string): TraceDocument {
  const parsed = TraceDocumentSchema.safeParse(value);
  if (!parsed.success) {
    throw new Error(`trace "${label}" is not a valid run: ${parsed.error.issues
      .slice(0, 5)
      .map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`)
      .join('; ')}`);
  }
  return parsed.data;
}
