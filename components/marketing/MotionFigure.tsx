'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { Badge } from '@kuraykaraaslan/kui-react/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { renderRichText } from './RichText';
import { MEDIA } from '@/modules/marketing/media/manifest.generated';
import type { MediaAsset } from '@/modules/marketing/media/types';
import type { Chapter, MotionBlock } from '@/types/content';
import { cn } from '@/libs/utils/cn';

/**
 * The site's video receiver — and the fix for the one accessibility failure the
 * site was actively shipping.
 *
 * `agent-demo.gif` is 24.44 seconds long and loops forever. WCAG 2.2.2 (Pause,
 * Stop, Hide) applies to any moving content that starts automatically, runs for
 * more than five seconds and sits beside other content — which is the hero
 * exactly. `globals.css` already clamps CSS animation under
 * `prefers-reduced-motion`, but a GIF is decoded by the image pipeline: no CSS
 * rule, no `animation-play-state`, no media query can touch it. The only control
 * that exists is whether the animated bytes are in the document at all.
 *
 * So they are not, until someone asks for them. Nothing here ever autoplays:
 *
 *   - A `<video>` renders with native `controls` and `preload="metadata"`. Native
 *     controls already satisfy 1.4.11 (non-text contrast) and 2.1.1 (keyboard);
 *     a custom skin would have to re-earn both, and the vendored KUI player is
 *     forbidden outright — it defaults `enableCast` on and pulls
 *     `gstatic.com/cv/js/sender/v1/cast_sender.js` on mount, which the site's
 *     `default-src 'self'` CSP blocks and its no-third-party rule prohibits.
 *   - An animated image renders its poster with an explicit play control, and
 *     the animated `src` is only mounted once that control is pressed. Pressing
 *     stop unmounts it again, which is a real stop rather than a hidden loop.
 *
 * ## Where the poster comes from
 *
 * There is no ffmpeg on Vercel and no build step that could produce a still, so
 * a poster cannot be generated at deploy time. The two options were:
 *
 *   (a) Capture frame 0 in the browser by drawing the `<img>` to a canvas on
 *       `load`. This needs the animated file decoded and in the document to
 *       capture from — which is the precise thing 2.2.2 asks us not to do — and
 *       "the element still shows frame 0 when `load` fires" is a race, not a
 *       contract. A poster that is sometimes frame 40 is a broken poster.
 *   (b) Let the block name a poster asset from the ledger — a still extracted
 *       offline, ingested like any other capture, carrying its own provenance
 *       and its own `describes` stamp — and render an honest labelled gap on any
 *       page that has not got one.
 *
 * (b) is what this does, and the home hero now has one: `agent-demo-poster` is
 * that recording's last frame, extracted with ffmpeg on a workstation and put
 * through the ledger like every other asset. Pages without a poster still get
 * the gap, drawn in the same visual language as `assetPlaceholder` — dashed,
 * badged, explicit — with the play control on it so the clip stays one keystroke
 * away.
 *
 * ## The frame owns the geometry, not the picture inside it
 *
 * Everything on the animated path — poster, labelled gap, and the animation
 * itself — is laid into one wrapper that reserves *the recording's* aspect ratio
 * and nothing else's. That is deliberate, and it closes a hole the ledger exists
 * to close but this component had left open on one branch: the gap carefully
 * reserved `asset.width / asset.height` while the real-poster branch reserved
 * whatever the *poster* happened to be, so a poster of a different shape would
 * have resized the largest element above the fold at the moment a visitor
 * pressed play.
 *
 * Measured rather than assumed, because the distinction matters to anyone
 * reading this later: `agent-demo-poster.png` is 1066x864 (PNG IHDR) against a
 * 1066x864 recording (GIF logical screen), ratio 1.2337962962962963 both times.
 * The defect was therefore **latent, not live** — no shift ships today. But
 * "latent" here means "waiting for the second poster", and the ledger's whole
 * argument is that a dimension nobody types cannot be typed wrong. See
 * {@link sameShape} for what happens when the two disagree.
 */

/** Spoken form for an accessible name — "24 seconds", "1 minute 12 seconds". */
function spokenDuration(ms: number | null): string | null {
  if (ms === null || ms <= 0) return null;
  const total = Math.round(ms / 1000);
  if (total < 60) return `${total} seconds`;
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  const head = `${minutes} minute${minutes === 1 ? '' : 's'}`;
  return seconds === 0 ? head : `${head} ${seconds} seconds`;
}

/**
 * Visible form for a chapter offset — `0:00`, `1:12`.
 *
 * Floored, not rounded. The number beside a chapter is a promise about where the
 * control lands, and rounding breaks that promise in the direction that reads as
 * a bug: an offset of 71,600 ms displayed `1:12` and seeked to 1:11.6, so a
 * visitor watching the player's own clock saw it stop *before* the label it had
 * just pressed. A floor is always at or before the landing point, which is how a
 * timecode is read everywhere else.
 */
function timecode(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

/**
 * Screenshots and screen recordings of a light-themed desktop app would glare on
 * the dark site, so they sit on their own light plate in both themes rather than
 * being inverted — a recoloured screenshot is not a screenshot. The hex is
 * deliberate and not a theme token for the same reason: it is the app's own
 * background, not the site's.
 */
const PLATE = 'overflow-hidden rounded-2xl border border-border bg-[#F4F7FA] p-2 sm:p-3';

/**
 * The hairline every *control* in this file is drawn with.
 *
 * It is `text-secondary` rather than the `border-strong` that reads more
 * naturally, because `border-strong` does not clear WCAG 1.4.11 (3:1 for the
 * visual information that identifies a control) against any surface it is used
 * on here. Measured in sRGB, both themes, against the three grounds a control in
 * this file can sit on:
 *
 *                            surface-base   surface-raised   #F4F7FA plate
 *   light  border-strong         1.60            1.51             1.49
 *   dark   border-strong         2.34            2.13             7.12
 *   light  text-secondary        5.68            5.38             5.28
 *   dark   text-secondary        7.32            6.67             2.28
 *
 * `border-strong` fails five of six. `text-secondary` passes five of six, and
 * the sixth — dark `text-secondary` against the light plate — is not a boundary
 * anyone has to see: in dark mode the panel it edges is filled `surface-raised`
 * (#0C2135) on that plate, and the *fill* difference is 15.20:1, so the shape is
 * identified with or without a border. It is in light mode that the fill
 * difference collapses to ~1.02:1 and the border becomes the only thing marking
 * the shape — which is precisely where `text-secondary` scores 5.28.
 *
 * A token and not a hex, on purpose: the site re-themes KUI by redefining token
 * values, so a literal colour here would survive a re-theme it should not.
 */
const CONTROL_EDGE = 'border-text-secondary';

const CONTROL = cn(
  'inline-flex items-center gap-2.5 rounded-full border bg-surface-base px-4 py-2.5',
  'text-sm font-semibold text-text-primary shadow-sm transition-colors hover:bg-surface-raised',
  CONTROL_EDGE,
);

/**
 * How far a poster's aspect ratio may sit from the recording's and still be
 * accepted as a frame of it. A genuine extraction matches exactly; the slack is
 * only for a re-encode that rounds a dimension by a pixel (1/864 = 0.12%).
 */
const POSTER_RATIO_TOLERANCE = 0.01;

/**
 * Is this poster the same shape as the recording it stands for?
 *
 * Two different things fail when it is not, and only one of them is layout. A
 * poster inherits the recording's alt text verbatim, because it is supposed to
 * be a frame of that recording — a still with a different aspect ratio is not a
 * frame of it, so the claim under it is wrong before anything is painted. And
 * letting it size the frame, or squashing it to fit, moves the page.
 *
 * So a mismatch is refused rather than rendered: the labelled gap goes back up
 * with the reason on it. That is the same trade the rest of this site makes — an
 * honest gap beats a picture that is not what it says it is — and it is a
 * fallback, not the intended defence. The intended defence is a build failure:
 * `scripts/media-check.mjs` can see both ledger rows and both stamps in the
 * content entry, so it can compare the two ratios and refuse to build. This
 * component cannot fail a build; it can only refuse to lie.
 */
function sameShape(recording: MediaAsset, poster: MediaAsset): boolean {
  const wanted = recording.width / recording.height;
  const got = poster.width / poster.height;
  return Math.abs(wanted - got) / wanted <= POSTER_RATIO_TOLERANCE;
}

/**
 * Does `target` fall inside a range the media element says it can seek to?
 *
 * `seekable` is the browser's own answer to "can I jump here", and on a host
 * that answers a ranged request with the whole file (or `Accept-Ranges: none`)
 * it collapses to nothing, or to `[0, 0]`. Reading it is what stops a chapter
 * button from setting `currentTime`, watching the position snap back to zero,
 * and playing from the top as though the jump had worked.
 */
function withinSeekable(video: HTMLVideoElement, target: number): boolean {
  const ranges = video.seekable;
  for (let i = 0; i < ranges.length; i += 1) {
    if (target >= ranges.start(i) && target <= ranges.end(i)) return true;
  }
  return false;
}

/**
 * How far from the requested offset a landing still counts as a landing.
 *
 * A container with sparse keyframes can only begin decoding at the nearest one,
 * so an exact match is not on offer. One second is wide enough to accept that
 * and far too narrow to accept the failure this guard exists for, which does not
 * land near the target at all — it lands at 0.
 */
const SEEK_TOLERANCE_S = 1;

/** How long to wait for `seeked` before calling the jump failed. */
const SEEK_TIMEOUT_MS = 4000;

export function MotionFigure({
  block,
  idPrefix,
  priority = false,
}: {
  block: MotionBlock;
  idPrefix: string;
  /** Set for the hero: it is above the fold, so the plate carries the hero's lift. */
  priority?: boolean;
}) {
  // Annotated as `MediaAsset` rather than left at the ledger's literal types on
  // purpose. `MotionKey` is `never` until a `.webm` is ingested, so every key in
  // the manifest currently has `kind: 'image'` *as a literal* — and TypeScript
  // rejects `asset.kind === 'motion'` on a literal `'image'` as a comparison
  // with no overlap. Widening to the declared type keeps the video branch
  // compiling before the first video exists, which is the whole point of having
  // it now.
  const asset: MediaAsset = MEDIA[block.asset];
  const declaredPoster: MediaAsset | null = block.poster ? MEDIA[block.poster.asset] : null;

  // "A poster was named" and "a poster is usable" are two different facts, and
  // every branch below — which document renders, what the stop button announces
  // — has to agree on the second one rather than the first.
  const poster: MediaAsset | null =
    declaredPoster !== null && sameShape(asset, declaredPoster) ? declaredPoster : null;

  const [playing, setPlaying] = useState(false);
  const [seekNote, setSeekNote] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);
  const stopRef = useRef<HTMLButtonElement>(null);
  /**
   * Armed by a press, disarmed the moment the resulting focus move is made.
   *
   * It has to be disarmed, and leaving it armed was a real defect: `playing`
   * also changes when `prefers-reduced-motion` turns on mid-play, and a flag
   * still true from some earlier press made that state change pull focus back to
   * the hero from wherever the visitor had got to — a focus move with no user
   * action behind it (WCAG 3.2.1 / 3.2.2). The flag now authorises exactly one
   * move, and then stops authorising anything.
   */
  const pressed = useRef(false);
  /** Cancels the verification of the last chapter seek. Replaced by each jump. */
  const cancelSeekWatch = useRef<() => void>(() => {});

  useEffect(() => {
    // `prefers-reduced-motion` needs no initial read: nothing here ever starts
    // moving on its own, so the state the visitor lands on already honours it.
    // What is left is the mid-play case — an animated image has no pause of its
    // own, putting the still back *is* the pause, so if the visitor turns
    // "reduce motion" on while it is looping, stop rather than making them find
    // the control. Subscribing and setting state from the change callback is
    // also the shape the effect rules want; sampling the query in the effect
    // body would be a synchronous setState in an effect.
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stopIfReduced = () => {
      if (query.matches) setPlaying(false);
    };
    query.addEventListener('change', stopIfReduced);
    return () => query.removeEventListener('change', stopIfReduced);
  }, []);

  useEffect(() => {
    // The control that was just pressed unmounts and is replaced by its
    // opposite. Without this, focus falls back to <body> and a keyboard user
    // restarts their traversal from the top of the page. The authorisation is
    // spent here rather than on the next press, so the reduced-motion stop —
    // which changes `playing` with nobody having touched anything — finds the
    // flag already down and leaves focus where the visitor put it.
    if (!pressed.current) return;
    pressed.current = false;
    (playing ? stopRef.current : playRef.current)?.focus();
  }, [playing]);

  useEffect(() => {
    // Copied to a local so `exhaustive-deps` does not read this as the
    // "ref.current may have changed by cleanup time" hazard; the ref object is
    // stable and the cleanup it holds is exactly the one that should run.
    const watch = cancelSeekWatch;
    return () => watch.current();
  }, []);

  const duration = spokenDuration(asset.durationMs);
  const playLabel = duration ? `Play the recording — ${duration}` : 'Play the recording';
  /**
   * Continues the visible word rather than repeating it.
   *
   * The button reads "Stop" on screen and has to announce what stopping leaves
   * behind, but appending a sentence that itself starts with "Stop" produced the
   * stutter "Stop — Stop the recording" — in *both* branches, not only the
   * poster-less one that ships today. Written as a suffix, the accessible name
   * is one sentence and still contains the visible label verbatim, which is what
   * 2.5.3 (Label in Name) asks for.
   */
  const stopSuffix = poster
    ? ' the recording and return to the still frame'
    : ' the recording and put the still back';

  const caption = block.caption ? (
    <figcaption className="mt-3 text-sm leading-relaxed text-text-secondary">
      {renderRichText(block.caption, `${idPrefix}-motion-cap`)}
    </figcaption>
  ) : null;

  /* ---------------------------------------------------------------------- */
  /* A real video file.                                                      */
  /* ---------------------------------------------------------------------- */

  if (asset.kind === 'motion') {
    /**
     * Jump to a chapter, or say plainly that the jump did not happen.
     *
     * `video.currentTime = t` is a request, not a guarantee, and its failure is
     * silent by construction: on a host that will not serve a ranged request the
     * position snaps back to 0, and the `play()` that used to follow it
     * unconditionally then started the recording from the beginning. The control
     * looked like it had worked; the visitor was simply somewhere other than
     * where the label said. With `preload="metadata"`, a click that lands before
     * the file is seekable at all has the same ending.
     *
     * So the jump is fenced on both sides. Before: the element must have
     * metadata, and must itself claim the offset is reachable. After: `play()`
     * is withheld until `seeked` confirms the position landed near the target,
     * because a browser can advertise a seekable range it then fails to fetch.
     * Either fence failing writes into the live region below instead of
     * pretending.
     */
    const jumpTo = (chapter: Chapter) => {
      const video = videoRef.current;
      if (!video) return;

      cancelSeekWatch.current();
      const target = chapter.atMs / 1000;
      const where = `${timecode(chapter.atMs)} — ${chapter.title}`;

      if (video.readyState < video.HAVE_METADATA) {
        setSeekNote(
          `Could not jump to ${where} yet: the recording is still loading. Try again in a moment, or use the player's own controls.`,
        );
        return;
      }

      if (!withinSeekable(video, target)) {
        setSeekNote(
          `Could not jump to ${where}: this browser reports the recording as not seekable, so the position was left where it was. Use the player's own controls to move through it.`,
        );
        return;
      }

      setSeekNote(null);

      // Already there — the same chapter pressed twice, or chapter 0 on a
      // recording sitting at its start. There is nothing to verify, and not
      // every browser fires `seeked` for a no-op seek, so waiting for one would
      // time out and report a failure that never happened.
      if (Math.abs(video.currentTime - target) <= SEEK_TOLERANCE_S) {
        void video.play().catch(() => {});
        return;
      }

      const settle = () => {
        window.clearTimeout(timer);
        video.removeEventListener('seeked', onSeeked);
        cancelSeekWatch.current = () => {};
      };

      const onSeeked = () => {
        settle();
        if (Math.abs(video.currentTime - target) > SEEK_TOLERANCE_S) {
          setSeekNote(
            `Could not jump to ${where}: the recording moved to ${timecode(video.currentTime * 1000)} instead. Use the player's own controls to move through it.`,
          );
          return;
        }
        // Autoplay policy can still refuse this, and that is not a failure of
        // the jump: the position is where the label said it would be, the native
        // controls work, and the visitor presses play themselves.
        void video.play().catch(() => {});
      };

      const timer = window.setTimeout(() => {
        settle();
        setSeekNote(
          `Could not jump to ${where}: the recording did not respond to the jump. Use the player's own controls to move through it.`,
        );
      }, SEEK_TIMEOUT_MS);

      video.addEventListener('seeked', onSeeked);
      cancelSeekWatch.current = settle;
      // Last, so the listener is already attached: a cached, fully buffered file
      // can complete the seek before the next statement would have run.
      video.currentTime = target;
    };

    return (
      <figure>
        <div className={cn(PLATE, priority && 'shadow-sm')}>
          {/* No `autoPlay`, and `preload="metadata"` so the poster and duration
              are available without pulling the whole file. `aria-label` carries
              the same claim as an image's alt: a <video> has no alt attribute,
              and without a name it announces as an unlabelled media element.
              There is no <track> because no captions file exists — `transcript`
              below is the 1.2.1 alternative, and inventing an empty track would
              claim captions that are not there.

              `poster` is the shape-checked one, not whatever the block named. A
              UA letterboxes a mismatched poster inside the video box rather than
              resizing it, so the layout half of that problem does not arise on
              this branch — but the honesty half does, and a still that is not a
              frame of this recording must not appear under this recording's
              name. */}
          <video
            ref={videoRef}
            controls
            preload="metadata"
            playsInline
            poster={poster?.src}
            width={asset.width}
            height={asset.height}
            aria-label={block.alt}
            className="block h-auto w-full rounded-xl border border-black/10"
          >
            <source src={asset.src} type={asset.mime} />
            {/* Shown only by a browser that cannot play the file at all. */}
            {block.alt}
          </video>
        </div>

        {block.chapters && block.chapters.length > 0 && (
          <nav aria-label="Chapters" className="mt-4">
            <ol className="flex flex-wrap gap-2">
              {block.chapters.map((chapter, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => jumpTo(chapter)}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full border bg-surface-raised px-3 py-1.5',
                      'text-[0.8125rem] text-text-secondary transition-colors hover:text-text-primary',
                      // Same 1.4.11 reasoning as CONTROL_EDGE, and the hover
                      // state has to move *up* from it: this used to go from
                      // `border` to `border-strong`, which against this fill in
                      // light mode is 1.16 to 1.51 — a change too small to see,
                      // from one failing value to another.
                      CONTROL_EDGE,
                      'hover:border-text-primary',
                    )}
                  >
                    <span className="font-mono text-[0.75rem] tabular-nums text-primary">
                      {timecode(chapter.atMs)}
                    </span>
                    {chapter.title}
                  </button>
                </li>
              ))}
            </ol>
            {/* Mounted always, filled sometimes: a live region has to be in the
                document before its text arrives, or the first message after it
                appears is not announced. */}
            <p role="status" aria-live="polite" className="mt-2 text-[0.8125rem] text-warning">
              {seekNote}
            </p>
          </nav>
        )}

        <Transcript block={block} idPrefix={idPrefix} />
        {caption}
      </figure>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* A still image handed to the motion receiver.                            */
  /* ---------------------------------------------------------------------- */

  if (!asset.animated) {
    // Not an error worth throwing over: the block is still a picture with alt
    // text, and rendering it plainly is strictly better than a play button that
    // starts nothing. There is simply no motion to control.
    return (
      <figure>
        <div className={cn(PLATE, priority && 'shadow-sm')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset.src}
            alt={block.alt}
            width={asset.width}
            height={asset.height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className="block h-auto w-full rounded-xl border border-black/10"
          />
        </div>
        {caption}
      </figure>
    );
  }

  /* ---------------------------------------------------------------------- */
  /* An animated image: poster first, animation only on request.             */
  /* ---------------------------------------------------------------------- */

  const play = () => {
    pressed.current = true;
    setPlaying(true);
  };

  // The three states are pulled out of the JSX because they are three different
  // documents, not three attribute values: animated bytes present, a still with
  // a play affordance over it, and the labelled gap that stands in for a still
  // nobody has captured. `key` forces a fresh <img> on the swap, so stopping
  // really does reset the clip rather than leaving a decoded loop in place.
  //
  // All three are laid into the same fixed-ratio frame below and sized
  // `h-full w-full object-contain`, so none of them can size the box it is in.
  // `object-contain` is the second belt over the shape check: even if a
  // mismatched still ever reached here it would letterbox, never squash.
  const still = poster ? (
    <>
      {/* The poster carries the recording's alt text unchanged: it is a frame of
          the same thing, and a visitor who cannot see either should get the same
          claim before and after pressing play. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key="poster"
        src={poster.src}
        alt={block.alt}
        width={poster.width}
        height={poster.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="block h-full w-full rounded-xl border border-black/10 object-contain"
      />
      <button
        ref={playRef}
        type="button"
        onClick={play}
        className="absolute inset-0 grid place-items-center rounded-xl bg-black/25 transition-colors hover:bg-black/35"
      >
        <span className={CONTROL}>
          <FontAwesomeIcon icon={faPlay} className="h-3.5 w-3.5" aria-hidden="true" />
          {playLabel}
        </span>
      </button>
    </>
  ) : (
    <PendingPoster
      reason={declaredPoster ? 'mismatch' : 'missing'}
      playLabel={playLabel}
      buttonRef={playRef}
      onPlay={play}
    />
  );

  const moving = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key="motion"
        src={asset.src}
        alt={block.alt}
        width={asset.width}
        height={asset.height}
        decoding="async"
        className="block h-full w-full rounded-xl border border-black/10 object-contain"
      />
      <button
        ref={stopRef}
        type="button"
        onClick={() => {
          pressed.current = true;
          setPlaying(false);
        }}
        className={cn(CONTROL, 'absolute right-3 top-3')}
      >
        <FontAwesomeIcon icon={faStop} className="h-3.5 w-3.5" aria-hidden="true" />
        Stop
        {/* The accessible name has to change with the state, and "Stop" alone
            does not say what stopping leaves behind. */}
        <span className="sr-only">{stopSuffix}</span>
      </button>
    </>
  );

  return (
    <figure>
      <div className={cn(PLATE, priority && 'shadow-sm')}>
        {/* The frame. Its height is the *recording's* ratio applied to whatever
            width the column gives it, in every state — so pressing play, or a
            future poster of some other shape landing in the ledger, cannot move
            a pixel of the page around it. An inline style because the numbers
            come from the ledger at runtime and Tailwind generates its classes at
            build time, from source text it can read. */}
        <div className="relative" style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
          {playing ? moving : still}
        </div>
      </div>

      {block.chapters && block.chapters.length > 0 && (
        // Deliberately not buttons. An <img> cannot be seeked, so a control that
        // looked like a chapter jump would do nothing — the offsets are true, the
        // interaction would not be. They are labelled as a written index instead.
        <div className="mt-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-secondary">
            What happens when
          </p>
          <ol className="mt-2 space-y-1.5">
            {block.chapters.map((chapter, i) => (
              <li key={i} className="flex gap-3 text-[0.875rem] text-text-secondary">
                <span className="font-mono tabular-nums text-primary">{timecode(chapter.atMs)}</span>
                {chapter.title}
              </li>
            ))}
          </ol>
        </div>
      )}

      <Transcript block={block} idPrefix={idPrefix} />
      {caption}
    </figure>
  );
}

/**
 * The labelled gap that stands in for a poster frame.
 *
 * It fills the frame it is placed in and reserves nothing of its own — the frame
 * already holds the recording's aspect ratio for every state, which is what
 * makes replacing this panel with a still, or with the animation, a swap of
 * contents rather than a change of size.
 *
 * Two reasons land here, and they are not the same admission. `missing` is the
 * ordinary state of a page whose poster has not been captured yet. `mismatch`
 * means one was captured and then refused, and saying so plainly is the point:
 * a still of the wrong shape is not a frame of this recording, and the only
 * alternative to admitting that is showing it under alt text that describes
 * something else.
 */
function PendingPoster({
  reason,
  playLabel,
  buttonRef,
  onPlay,
}: {
  reason: 'missing' | 'mismatch';
  playLabel: string;
  buttonRef: RefObject<HTMLButtonElement | null>;
  onPlay: () => void;
}) {
  return (
    <div
      className={cn(
        'grid h-full w-full place-items-center rounded-xl border border-dashed p-6 text-center sm:p-8',
        'bg-surface-raised',
        CONTROL_EDGE,
      )}
    >
      <div className="space-y-4">
        <FontAwesomeIcon icon={faFilm} className="h-6 w-6 text-text-secondary" aria-hidden="true" />
        <div className="space-y-2">
          <Badge variant="warning" size="sm">
            {reason === 'missing' ? 'Still frame pending' : 'Still frame not used'}
          </Badge>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-text-secondary">
            {reason === 'missing'
              ? 'No poster frame has been captured for this recording yet, so nothing is shown in its place. The recording itself plays on request and never on its own.'
              : 'The still frame recorded for this clip is not the same shape as the clip, so it is not a frame of it and is not shown. The recording itself plays on request and never on its own.'}
          </p>
        </div>
        <button ref={buttonRef} type="button" onClick={onPlay} className={CONTROL}>
          <FontAwesomeIcon icon={faPlay} className="h-3.5 w-3.5" aria-hidden="true" />
          {playLabel}
        </button>
      </div>
    </div>
  );
}

/**
 * The text alternative for spoken content (WCAG 1.2.1).
 *
 * Collapsed by default because it duplicates the recording rather than adding to
 * it, and `<details>` is keyboard-operable and announced as a disclosure without
 * any script.
 *
 * Its `border-border` is left alone deliberately while the controls above moved
 * to `CONTROL_EDGE`. What identifies this control is the `<summary>` text, which
 * runs at 15.5:1; the hairline is the site's card edge, shared with every other
 * bordered panel on every page, and re-drawing it here alone would make this one
 * card look unlike all the others without making anything easier to identify.
 */
function Transcript({ block, idPrefix }: { block: MotionBlock; idPrefix: string }) {
  if (!block.transcript || block.transcript.length === 0) return null;

  return (
    <details className="mt-4 rounded-xl border border-border bg-surface-raised px-4 py-3">
      <summary className="cursor-pointer text-sm font-semibold text-text-primary">
        Transcript
      </summary>
      <div className="mt-3 space-y-2">
        {block.transcript.map((line, i) => (
          <p key={i} className="text-[0.9375rem] leading-relaxed text-text-secondary">
            {renderRichText(line, `${idPrefix}-tr${i}`)}
          </p>
        ))}
      </div>
    </details>
  );
}
