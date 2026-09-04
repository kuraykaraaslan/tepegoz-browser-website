'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faCircleExclamation,
  faForwardStep,
  faHandPaper,
  faPause,
  faPlay,
  faRotateLeft,
  faShieldHalved,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { renderRichText } from './RichText';
import type { JournalReplayBlock } from '@/types/content';
import type { TraceDocument, TraceEvent, TraceEventKind } from '@/modules/marketing/traces/schema';
import { cn } from '@/libs/utils/cn';
import { useT } from '@/libs/i18n/client';

/**
 * Replays one recorded agent run as text.
 *
 * The site's other media shows what the product looks like. This shows what it
 * decided: the plan, the tool calls, the step that failed, and the gates the
 * security kernel stopped at — from the product's own event stream, replayed in
 * the DOM so a reader can scrub it, pause on a line, and copy it.
 *
 * ## Why a browser that keeps an audit journal should ship the journal
 *
 * Every competitor demo is a video, and a video is unfalsifiable in the wrong
 * direction: you cannot check it, search it, or read it with a screen reader.
 * This product writes an append-only record of everything the agent did, which
 * means the most persuasive artefact it has is not a picture of the console —
 * it is the console's own data, handed over.
 *
 * ## Playback is presentation; the timestamps are the record
 *
 * Real gaps between events are wildly uneven: two DOM reads 2 ms apart, then
 * twenty seconds waiting on a model. Replaying at true wall-clock speed is
 * mostly a still image, and compressing the gaps into equal steps would be a
 * quiet lie about pacing. So the dwell between rows is a damped function of the
 * real gap — long waits stay visibly longer than short ones, without stalling —
 * and every row shows its REAL offset from the start of the run. The clock is
 * the truth; the pacing is a reading aid, and the component says so.
 *
 * ## The gate stops the replay
 *
 * When the playhead reaches an `awaiting_approval`, auto-advance stops and does
 * not resume on its own. That is not theatre: the run genuinely stopped and
 * waited. A replay that slid past the pause would misrepresent the single thing
 * this page is trying to demonstrate.
 *
 * ## Nothing is hidden, including the noise
 *
 * A real run of this product emits a lot of repeated egress warnings. They are
 * not filtered out — a marketing page that quietly drops the unflattering rows
 * from its own audit log has refuted itself. Consecutive identical messages
 * collapse into one row carrying a count, which hides no line and no reader can
 * mistake for absence.
 */

/**
 * How each kind is drawn. The WORD is not here.
 *
 * This map is module-level, where no hook can run, so a `label` field would
 * either be untranslatable or force a `t(row.labelKey, row.label)` call whose
 * arguments are variables — which compiles, renders, and is invisible to
 * `scripts/i18n/extract.mjs`, so the keys would never reach `en.json`. The
 * labels are literal `t()` calls inside the component instead.
 */
const KIND_STYLE: Record<TraceEventKind, { tone: string; dot: string }> = {
  plan: { tone: 'text-secondary', dot: 'bg-secondary' },
  decision: { tone: 'text-text-secondary', dot: 'bg-border-strong' },
  step_start: { tone: 'text-text-primary', dot: 'bg-primary/60' },
  step_ok: { tone: 'text-success', dot: 'bg-success' },
  step_error: { tone: 'text-error', dot: 'bg-error' },
  awaiting_approval: { tone: 'text-warning', dot: 'bg-warning' },
  input_action: { tone: 'text-text-primary', dot: 'bg-primary/60' },
  handoff: { tone: 'text-warning', dot: 'bg-warning' },
  tab_spawn: { tone: 'text-text-secondary', dot: 'bg-border-strong' },
  grant: { tone: 'text-secondary', dot: 'bg-secondary' },
  done: { tone: 'text-success', dot: 'bg-success' },
  error: { tone: 'text-error', dot: 'bg-error' },
};

/** One display row: an event, plus how many identical ones it stands for. */
type Row = TraceEvent & { repeats: number; index: number };

/**
 * Collapse runs of consecutive identical messages.
 *
 * Identity is `kind` + `message` — NOT `detail`, because the egress warnings
 * that make up most of the repetition carry a slightly different sample list
 * each time while saying the same thing. Collapsing on the message keeps the
 * distinct events distinct and the noise readable, and the count means nothing
 * is claimed to have happened once when it happened eighteen times.
 */
function collapse(events: readonly TraceEvent[]): Row[] {
  const rows: Row[] = [];
  for (const [index, e] of events.entries()) {
    const last = rows.at(-1);
    if (last && last.kind === e.kind && last.message === e.message) {
      last.repeats += 1;
      continue;
    }
    rows.push({ ...e, repeats: 1, index });
  }
  return rows;
}

/** mm:ss of a millisecond offset — the run's real clock, never the replay's. */
function clock(ms: number): string {
  const s = Math.round(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

/**
 * How long to dwell on a row before advancing.
 *
 * A damped square root of the real gap: a 20-second wait reads as noticeably
 * longer than a 200 ms one without costing twenty seconds of the viewer's time.
 * Clamped at both ends so nothing flashes past unreadably and nothing stalls.
 */
function dwellMs(gapMs: number): number {
  return Math.min(2400, Math.max(420, Math.round(Math.sqrt(Math.max(gapMs, 0)) * 42)));
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = (): void => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return reduced;
}

export function JournalReplay({
  block,
  trace,
  idPrefix,
}: {
  block: JournalReplayBlock;
  trace: TraceDocument;
  idPrefix: string;
}): React.ReactElement {
  const t = useT();
  const rows = useMemo(() => collapse(trace.events), [trace.events]);
  const reduced = usePrefersReducedMotion();

  /* Literal calls, one per kind — see the note on KIND_STYLE. */
  const kindLabel: Record<TraceEventKind, string> = {
    plan: t('marketing.replay.kind.plan', 'plan'),
    decision: t('marketing.replay.kind.decision', 'decision'),
    step_start: t('marketing.replay.kind.stepStart', 'step'),
    step_ok: t('marketing.replay.kind.stepOk', 'ok'),
    step_error: t('marketing.replay.kind.stepError', 'failed'),
    awaiting_approval: t('marketing.replay.kind.awaitingApproval', 'stopped to ask'),
    input_action: t('marketing.replay.kind.inputAction', 'input'),
    handoff: t('marketing.replay.kind.handoff', 'handoff'),
    tab_spawn: t('marketing.replay.kind.tabSpawn', 'new tab'),
    grant: t('marketing.replay.kind.grant', 'grant'),
    done: t('marketing.replay.kind.done', 'done'),
    error: t('marketing.replay.kind.error', 'error'),
  };

  const [at, setAt] = useState(0);
  const [playing, setPlaying] = useState(false);
  const listRef = useRef<HTMLOListElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = rows[Math.min(at, rows.length - 1)];
  const atGate = current?.kind === 'awaiting_approval';
  const finished = at >= rows.length - 1;

  /** The approval the playhead is sitting on, matched by time, not by guesswork. */
  const gate = useMemo(() => {
    if (!atGate || !current) return null;
    return (
      trace.approvals.find((a) => Math.abs(a.atMs - current.atMs) < 1500) ??
      trace.approvals.find((a) => a.atMs >= current.atMs) ??
      null
    );
  }, [atGate, current, trace.approvals]);

  /**
   * Advance, unless the playhead is sitting on a gate.
   *
   * `playing` is the reader's INTENT and the gate is a derived halt, rather than
   * the effect clearing `playing` when it reaches one. Writing state from inside
   * an effect to express "we stopped" causes a cascading render for a fact both
   * values already imply — and lint is right to refuse it. Modelling the halt as
   * `playing && atGate` keeps the intent intact, so continuing past the gate does
   * not require the reader to press play again as well.
   */
  const halted = playing && atGate;
  useEffect(() => {
    if (!playing || finished || atGate) return;
    const next = rows[at + 1];
    const gap = next ? next.atMs - (current?.atMs ?? 0) : 0;
    timer.current = setTimeout(() => setAt((i) => Math.min(i + 1, rows.length - 1)), dwellMs(gap));
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [playing, at, atGate, finished, rows, current]);

  // Keep the active row in view, but never fight a reader who has scrolled: this
  // scrolls the LIST, not the page, and only while playing.
  useEffect(() => {
    if (!playing || halted) return;
    const el = listRef.current?.querySelector<HTMLElement>(`[data-row="${at}"]`);
    el?.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
  }, [at, playing, halted, reduced]);

  const restart = useCallback(() => {
    setAt(0);
    setPlaying(false);
  }, []);

  const regionId = `${idPrefix}-replay`;
  const outcome =
    trace.terminal === 'done'
      ? t('marketing.replay.outcome.finished', 'finished')
      : trace.terminal === 'error'
        ? t('marketing.replay.outcome.failed', 'failed')
        : t('marketing.replay.outcome.timedOut', 'timed out');

  return (
    <section
      aria-labelledby={`${regionId}-label`}
      className="not-prose my-8 overflow-hidden rounded-2xl border border-border bg-surface-raised"
    >
      <h3 id={`${regionId}-label`} className="sr-only">
        {block.label}
      </h3>

      {/* Unconditional, and not driven by any optional prop: there is no way to
          author this block without the reader being told what they are looking at. */}
      <div className="border-b border-border bg-surface-overlay px-4 py-3 text-sm sm:px-5">
        <p className="font-medium text-text-primary">
          {t('marketing.replay.banner.what', 'A recorded run, replayed from its exported event journal.')}
        </p>
        <p className="mt-1 text-text-secondary">
          {t(
            'marketing.replay.banner.notLive',
            'Nothing here is live — no agent is running and this page never contacts one. It is also not a mockup: every line below is an event the product’s own journal wrote.',
          )}
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-[0.8125rem] text-text-secondary sm:grid-cols-4">
          <div>
            <dt className="inline font-medium text-text-primary">{t('marketing.replay.meta.captured', 'Captured')} </dt>
            <dd className="inline tabular-nums">{trace.capturedOn}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text-primary">{t('marketing.replay.meta.model', 'Model')} </dt>
            <dd className="inline">{trace.provider}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text-primary">{t('marketing.replay.meta.autonomy', 'Autonomy')} </dt>
            <dd className="inline">{trace.autonomy}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text-primary">{t('marketing.replay.meta.outcome', 'Outcome')} </dt>
            <dd className="inline">
              {t('marketing.replay.meta.outcomeValue', '{{outcome}} in {{duration}}', {
                outcome,
                duration: clock(trace.durationMs),
              })}
            </dd>
          </div>
        </dl>
        {trace.answeredByHarness.length > 0 && (
          <p className="mt-2 text-[0.8125rem] text-text-secondary">
            <FontAwesomeIcon icon={faHandPaper} className="mr-1.5 h-3 w-3" aria-hidden="true" />
            {/* One key per grammatical number rather than a stitched-together
                sentence: English needs "gate was" / "gates were", and a language
                that inflects differently gets a whole sentence to rewrite. */}
            {trace.answeredByHarness.length === 1
              ? t(
                  'marketing.replay.harness.one',
                  'No person was at the keyboard: 1 gate was answered by the capture harness, by clicking the product’s own buttons.',
                )
              : t(
                  'marketing.replay.harness.many',
                  'No person was at the keyboard: {{n}} gates were answered by the capture harness, by clicking the product’s own buttons.',
                  { n: trace.answeredByHarness.length },
                )}
          </p>
        )}
      </div>

      {/* The task, in the words it was given in. */}
      <div className="border-b border-border px-4 py-3 sm:px-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-text-secondary">
          {t('marketing.replay.task.label', 'The task')}
        </p>
        <p className="mt-1 text-sm text-text-primary">{trace.task}</p>
        <p className="mt-1 font-mono text-[0.75rem] text-text-secondary">{trace.startUrl}</p>
      </div>

      {/* The plan, as it was shown for approval before anything ran. */}
      {trace.plans.length > 0 && trace.plans[0] && (
        <details className="border-b border-border px-4 py-3 sm:px-5">
          <summary className="cursor-pointer text-sm font-medium text-text-primary">
            {t(
              'marketing.replay.plan.summary',
              'The plan it proposed — {{n}} steps, each with its reason',
              { n: trace.plans[0].steps.length },
            )}
          </summary>
          <p className="mt-2 text-sm text-text-secondary">{trace.plans[0].goal}</p>
          <ol className="mt-3 space-y-2">
            {trace.plans[0].steps.map((s, i) => (
              <li key={s.id} className="flex gap-3 text-sm">
                <span className="mt-0.5 shrink-0 tabular-nums text-text-disabled">{i + 1}.</span>
                <span>
                  <code className="rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.75rem] text-text-primary">
                    {s.tool}
                  </code>
                  <span className="ml-2 text-text-secondary">{s.rationale}</span>
                </span>
              </li>
            ))}
          </ol>
        </details>
      )}

      {/* Transport. */}
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={() => {
            if (finished) return restart();
            // At a gate, the primary control is "go on" rather than "play": the
            // run is halted at a decision, and stepping over it IS the decision.
            if (atGate) {
              setAt((i) => Math.min(i + 1, rows.length - 1));
              setPlaying(true);
              return;
            }
            setPlaying((p) => !p);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-fg transition-colors hover:bg-primary-hover"
        >
          <FontAwesomeIcon
            icon={finished ? faRotateLeft : atGate ? faForwardStep : playing ? faPause : faPlay}
            className="h-3 w-3"
            aria-hidden="true"
          />
          {finished
            ? t('marketing.replay.control.replay', 'Replay')
            : atGate
              ? t('marketing.replay.control.continue', 'Continue past the gate')
              : playing
                ? t('marketing.replay.control.pause', 'Pause')
                : t('marketing.replay.control.play', 'Play')}
        </button>
        <button
          type="button"
          onClick={() => setAt((i) => Math.min(i + 1, rows.length - 1))}
          disabled={finished}
          className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-3 py-1.5 text-sm text-text-primary transition-colors hover:bg-surface-overlay disabled:opacity-50"
        >
          <FontAwesomeIcon icon={faForwardStep} className="h-3 w-3" aria-hidden="true" />
          {t('marketing.replay.control.step', 'Step')}
        </button>

        <label className="flex flex-1 items-center gap-3 text-sm">
          <span className="sr-only">{t('marketing.replay.control.position', 'Position in the run')}</span>
          <input
            type="range"
            min={0}
            max={Math.max(rows.length - 1, 0)}
            value={at}
            onChange={(e) => {
              setPlaying(false);
              setAt(Number(e.currentTarget.value));
            }}
            aria-valuetext={`${clock(current?.atMs ?? 0)}, ${current?.message ?? ''}`}
            className="min-w-32 flex-1 accent-[var(--primary)]"
          />
          <span className="shrink-0 font-mono text-[0.75rem] tabular-nums text-text-secondary">
            {clock(current?.atMs ?? 0)} / {clock(trace.durationMs)}
          </span>
        </label>
      </div>

      {/* The gate. Shown only while the playhead is on it, because that is when
          the run was actually stopped. */}
      {atGate && gate && (
        <div className="border-b border-border bg-warning-subtle px-4 py-3 sm:px-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-text-primary">
            <FontAwesomeIcon icon={faShieldHalved} className="h-3.5 w-3.5" aria-hidden="true" />
            {t('marketing.replay.gate.title', 'The run stopped here and asked')}
          </p>
          <dl className="mt-2 space-y-1 text-sm">
            <div>
              <dt className="inline font-medium text-text-primary">{t('marketing.replay.gate.tool', 'Tool')} </dt>
              <dd className="inline font-mono text-[0.8125rem]">{gate.toolName}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-text-primary">{t('marketing.replay.gate.why', 'Why')} </dt>
              <dd className="inline font-mono text-[0.8125rem]">{gate.reason}</dd>
            </div>
            {gate.riskTier && (
              <div>
                <dt className="inline font-medium text-text-primary">{t('marketing.replay.gate.riskClass', 'Risk class')} </dt>
                <dd className="inline font-mono text-[0.8125rem]">{gate.riskTier}</dd>
              </div>
            )}
          </dl>
          <p className="mt-2 break-all rounded bg-surface-base/70 px-2 py-1.5 font-mono text-[0.75rem] text-text-secondary">
            {gate.argsPreview}
          </p>
          <p className="mt-1 text-[0.75rem] text-text-secondary">
            {t(
              'marketing.replay.gate.truncated',
              'The product truncates this preview to 200 characters inside the privileged process, before it reaches any window. It is not the whole argument.',
            )}
          </p>
        </div>
      )}

      {/* The run. */}
      <ol ref={listRef} className="max-h-96 overflow-y-auto px-2 py-2 sm:px-3">
        {rows.map((row, i) => {
          const style = KIND_STYLE[row.kind];
          const past = i <= at;
          return (
            <li
              key={`${row.index}-${row.kind}`}
              data-row={i}
              aria-current={i === at ? 'step' : undefined}
              className={cn(
                'flex gap-3 rounded-lg px-2 py-1.5 transition-colors',
                i === at && 'bg-primary-subtle',
                !past && 'opacity-40',
              )}
            >
              <span className="mt-1.5 shrink-0 font-mono text-[0.6875rem] tabular-nums text-text-disabled">
                {clock(row.atMs)}
              </span>
              <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', style.dot)} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-baseline gap-2">
                  <span className={cn('text-[0.6875rem] font-semibold uppercase tracking-wide', style.tone)}>
                    {kindLabel[row.kind]}
                  </span>
                  {row.repeats > 1 && (
                    <span className="rounded bg-surface-sunken px-1.5 text-[0.6875rem] tabular-nums text-text-secondary">
                      ×{row.repeats}
                    </span>
                  )}
                  {row.kind === 'step_ok' && (
                    <FontAwesomeIcon icon={faCheck} className="h-2.5 w-2.5 text-success" aria-hidden="true" />
                  )}
                  {row.kind === 'step_error' && (
                    <FontAwesomeIcon icon={faXmark} className="h-2.5 w-2.5 text-error" aria-hidden="true" />
                  )}
                  {row.kind === 'awaiting_approval' && (
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="h-2.5 w-2.5 text-warning"
                      aria-hidden="true"
                    />
                  )}
                </span>
                <span className="block break-words text-sm text-text-primary">{row.message}</span>
                {row.detail && (
                  <span className="mt-0.5 block break-words font-mono text-[0.75rem] leading-relaxed text-text-secondary">
                    {row.detail}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ol>

      {/* One polite announcement per row, not per frame: a live region updated on
          every drag position floods a screen reader and makes the control useless. */}
      <p role="status" aria-live="polite" className="sr-only">
        {playing && !halted && current ? `${clock(current.atMs)} ${current.message}` : ''}
      </p>

      <p className="border-t border-border px-4 py-2.5 text-[0.75rem] text-text-secondary sm:px-5">
        {t(
          'marketing.replay.pacing',
          'Timestamps are the run’s own. Playback pacing is compressed so long waits stay visibly longer than short ones without costing you the wait.',
        )}
      </p>

      {block.caption && (
        <p className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-secondary sm:px-5">
          {renderRichText(block.caption)}
        </p>
      )}
    </section>
  );
}
