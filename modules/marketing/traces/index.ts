import { parseTrace, type TraceDocument } from './schema';
import { REDDIT_ELECTRON_MEMORY } from './reddit-electron-memory.generated';

/**
 * Every recorded run the site ships.
 *
 * One line per run, hand-written on purpose: syncing a trace and *publishing* it
 * are separate decisions, and a generator that also registered its output would
 * make the second one happen by accident. `trace-sync.mjs` prints the line to
 * paste here and stops.
 *
 * The key union derives from this object rather than being maintained beside it,
 * so a block naming a run that does not exist is a compile error, not a blank
 * panel — the same device `MEDIA` uses for image keys.
 */
const RAW = {
  'reddit-electron-memory': REDDIT_ELECTRON_MEMORY,
} as const;

export type TraceKey = keyof typeof RAW;

/**
 * The parsed runs.
 *
 * Parsed HERE, once, at module scope, so a malformed trace fails the build
 * rather than a page render. The generated modules are already checked twice
 * before this — by `trace-sync.mjs` when they are emitted and by
 * `trace-check.mjs` on every build — and this is the third, at the boundary the
 * app actually reads. That is not redundancy for its own sake: the first two are
 * scripts a contributor can forget to run, and this one cannot be skipped.
 */
export const TRACES: Record<TraceKey, TraceDocument> = Object.fromEntries(
  Object.entries(RAW).map(([key, doc]) => [key, parseTrace(doc, key)]),
) as Record<TraceKey, TraceDocument>;
