import type { RouteKey } from '@/libs/config/site';
import type { ImageKey, MotionKey } from '@/modules/marketing/media/manifest.generated';
import type { TraceKey } from '@/modules/marketing/traces';

/**
 * The page content model.
 *
 * Copy is authored in `tepegoz-browser/docs/website/*.md` and transcribed into
 * these structures — one file per page, per locale. Two rules from that
 * folder's README are encoded in the types rather than left to reviewer memory:
 *
 *   - `[BUILD NOTE]` blocks are instructions, never copy. They appear here only
 *     as `AssetPlaceholderBlock.note`, which renders as a build-time notice and
 *     is stripped from production output.
 *   - `status: needs-assets` pages cannot ship as "done"; the flag travels with
 *     the content so the page can say so instead of quietly pretending.
 *
 * A third rule arrived with the media ledger, and it is why the media blocks
 * below look the way they do. Content owns **copy**; the ledger owns **facts
 * about files**. A block names its asset by key and stamps the hash it was
 * written against; it never carries a `src`, a `width` or a `height`. A human
 * typing a fact about a file is exactly how the home page came to declare
 * `1440x900` over a 1066x864 GIF — a layout shift on the largest element above
 * the fold, in the one place the site's own rules forbid one. Deleting those
 * fields from the type makes that defect unexpressible rather than merely
 * discouraged.
 */

/** Locale-independent nav labels, keyed by route. */
export type NavLabels = Record<RouteKey, string>;

/**
 * Inline rich text. A deliberately tiny subset — `**bold**`, `_italic_`,
 * `` `code` ``, and `[text](/href)` — rendered to real React nodes, never
 * through `dangerouslySetInnerHTML`.
 */
export type RichText = string;

export type CtaVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type Cta = {
  label: string;
  href: string;
  variant?: CtaVariant;
  /** Set for links that leave the site. */
  external?: boolean;
};

/**
 * A list entry that can be flagged as a differentiator.
 *
 * The star is structural rather than a `★` typed into the prose: the renderer
 * needs to style it, screen readers need it announced as meaning rather than
 * decoration, and a future filter needs to query it. A bare string is still
 * accepted so the common, unstarred case stays terse.
 */
export type Item = RichText | { text: RichText; star: true };

/**
 * A human's acknowledgement that they read *this* alt text against *these* bytes.
 *
 * The value is the first eight hex characters of a sha256 over the **pair** —
 * the asset's own sha256, a newline, then the alt text verbatim — which is
 * exactly what `describes(asset, alt)` in `modules/marketing/media/types.ts`
 * returns, and the only place that definition lives. Hashing the pair rather
 * than the bytes alone is what makes the stamp survive the second way alt text
 * goes stale: repointing `asset:` at a different ledger key while leaving the
 * sentence alone. Under a bytes-only stamp that edit could be waved through by
 * copying the new row's hash prefix out of `manifest.generated.ts`; there is now
 * no correct stamp for a new pairing recorded anywhere, so it has to be computed
 * by `scripts/media-restamp.mjs`, which shows the image's path and the alt text
 * side by side while it computes it.
 *
 * It is typed as a plain `string` rather than derived from the ledger's literal
 * types on purpose: a type-level derivation would report a mismatch as an
 * unassignable string literal buried in a union error, and the one thing this
 * stamp has to do when it breaks is tell a human *why* it broke. Two things do
 * the comparing — `node scripts/media-restamp.mjs --check`, inside
 * `npm run check`, which reports by file and line; and `assertDescribes()` in
 * `modules/marketing/content/index.ts`, inside `next build`, which refuses to
 * render the page at all.
 *
 * It is a tripwire, not a checksum: 32 bits over a dozen curated stamps. Its only
 * job is to stop matching when the pairing under a piece of copy changes.
 */
export type MediaStamp = string;

export type ProseBlock = {
  kind: 'prose';
  /** One string per paragraph. */
  body: RichText[];
};

export type CardsBlock = {
  kind: 'cards';
  columns?: 2 | 3;
  items: { title: string; body: RichText; icon?: string }[];
};

export type StepsBlock = {
  kind: 'steps';
  items: { title: string; body: RichText }[];
};

export type ListBlock = {
  kind: 'list';
  /** `check` = things that work, `deny` = things that are refused, `plain` = neutral. */
  variant?: 'check' | 'deny' | 'plain';
  items: Item[];
};

export type TableBlock = {
  kind: 'table';
  caption?: string;
  head: string[];
  rows: RichText[][];
};

export type CalloutBlock = {
  kind: 'callout';
  tone: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  body: RichText[];
};

/**
 * How far along a capability actually is.
 *
 * `features.md` is explicit that these must not merge under one heading and
 * must carry visibly different weights — "a single undifferentiated list is the
 * most common way product sites lie without lying". Modelling the states in the
 * type keeps a future edit from flattening them back together.
 *
 * Two of these exist because `tepegoz-browser/phases/README.md` distinguishes
 * things this site previously could not say, and a vocabulary that cannot say
 * them forces the writer to round up:
 *
 *   - `measurement-owed` — the code landed and the phase is *not* closed,
 *     because nothing has been measured on the harness yet. It is "built,
 *     unproven", and it must never read as a success state; rounding it up to
 *     `available` is precisely the lie the split exists to prevent.
 *   - `frozen` — a deliberate stop. Someone decided this is out of scope for
 *     now. It is a scope decision, not a failure and not a promise, so it reads
 *     as neither a warning nor a plan.
 */
export type CapabilityState =
  | 'available'
  | 'in-progress'
  | 'measurement-owed'
  | 'planned'
  | 'frozen';

export type CapabilityBlock = {
  kind: 'capability';
  groups: {
    state: CapabilityState;
    /** Optional override; defaults to a label derived from `state`. */
    label?: string;
    items: Item[];
  }[];
};

/**
 * A real screenshot of the shipped application.
 *
 * `caption` is what the reader is looking at; `alt` is what the image conveys
 * to someone who cannot see it, and the two are deliberately separate fields so
 * neither degrades into the other. Both are copy, so both live here and both
 * translate with the page.
 *
 * The file itself is addressed by key. Its `src`, `width` and `height` come from
 * `MEDIA[asset]`, measured from the bytes — the intrinsic size still reserves
 * layout space, it is just no longer transcribed by hand.
 */
export type FigureBlock = {
  kind: 'figure';
  /** Key into the generated ledger. Rendered as an `<img>`. */
  asset: ImageKey;
  describes: MediaStamp;
  alt: string;
  caption?: RichText;
};

/** One labelled offset into a recording. `atMs` is measured from the start. */
export type Chapter = { atMs: number; title: string };

/**
 * A recording: a `<video>`, or an animated image that must not loop unbidden.
 *
 * `asset` accepts either kind because the two are the same editorial object —
 * "a clip of the product working" — and the DOM element they need is a detail
 * of the file format. `MotionKey` is `never` until a `.webm` is ingested, so a
 * page can only reach the animated-image path today; the video path compiles
 * now and starts working the moment the first capture lands, with nothing here
 * to change.
 *
 * `poster` is the still shown *before* playback. It is an ordinary ledger image
 * with its own stamp, because a poster is a claim about the recording exactly
 * the way alt text is a claim about a screenshot. It is optional and there is no
 * poster in the ledger yet, so today the renderer shows an honest labelled gap
 * with a play control rather than a fabricated frame.
 */
export type MotionBlock = {
  kind: 'motion';
  asset: MotionKey | ImageKey;
  describes: MediaStamp;
  /** What the recording conveys — the same claim whether it is playing or not. */
  alt: string;
  caption?: RichText;
  poster?: { asset: ImageKey; describes: MediaStamp };
  /**
   * A text alternative for spoken content (WCAG 1.2.1). Required only when the
   * asset carries audio; a silent screen recording is fully described by `alt`.
   */
  transcript?: readonly RichText[];
  chapters?: readonly Chapter[];
};

/**
 * Several shots of the same subject, where **some of them may not exist yet**.
 *
 * This block exists because `extensions.ts` promises nine extension panels and
 * will have some-of-nine for months. Without `expected`, the only two states the
 * content model could express were "all nine" and "none", and a page that shows
 * four while its copy says nine is the quiet kind of dishonesty this site is
 * supposed to be arguing against. Set `expected` to what the copy promises and
 * the renderer shows the delivered shots *and* a labelled gap for the rest.
 */
export type GalleryItem = {
  asset: ImageKey;
  describes: MediaStamp;
  alt: string;
  caption?: RichText;
};

export type GalleryBlock = {
  kind: 'gallery';
  columns?: 2 | 3;
  items: readonly GalleryItem[];
  /** How many the surrounding copy promises. Omit when the set is complete. */
  expected?: number;
  /** Heading for the gap panel. Shown only when `items.length < expected`. */
  pendingLabel?: string;
  pendingNote?: string;
};

/**
 * A recorded agent run, replayed in the DOM.
 *
 * The site's other media shows what the product LOOKS like. This shows what it
 * DECIDED — the plan it proposed, the tools it called, the step that failed, and
 * the gates the security kernel stopped at — from the product's own event
 * stream, replayed as text a reader can scrub, pause and copy.
 *
 * The block carries only the two things a machine cannot know: which run, and
 * what the page wants to say about it. Every fact about the run itself comes
 * from `TRACES[trace]`, generated from the product repo and stamped against it,
 * exactly as `MEDIA[asset]` owns every fact about an image.
 *
 * ## Why there is no `describes` stamp here
 *
 * A stamp binds an image's bytes to the sentence written about it, because
 * nobody can tell from the alt text whether the picture still matches. A trace
 * has no such gap: the block makes no claim about the run's contents at all, and
 * the run's own integrity is its module's `@sourceSha256`.
 *
 * The field is also named `trace` rather than `asset` for a mechanical reason
 * worth knowing before renaming it: `scripts/media-restamp.mjs` scans every
 * content module for a `describes:` field and then demands an `asset:` sibling
 * that resolves in the media ledger. A block reusing those two names would fail
 * `npm run check` with an error about a missing image.
 */
export type JournalReplayBlock = {
  kind: 'journalReplay';
  /** Key into the trace registry. A run that does not exist is a compile error. */
  trace: TraceKey;
  /**
   * Accessible name for the replay region — what a screen-reader user hears
   * before they enter it. Not a heading; the section already has one.
   */
  label: string;
  caption?: RichText;
};

export type CodeBlock = {
  kind: 'code';
  language?: string;
  /** Shown above the block, e.g. "Build it". */
  label?: string;
  code: string;
};

export type CtasBlock = {
  kind: 'ctas';
  items: Cta[];
};

/**
 * A slot for an asset the page needs but does not have yet (a recording, a
 * screenshot, a signed build). Renders as an honest, labelled gap — the copy's
 * standing instruction is that a mockup must not be substituted.
 */
export type AssetPlaceholderBlock = {
  kind: 'assetPlaceholder';
  label: string;
  note: string;
};

export type Block =
  | ProseBlock
  | CardsBlock
  | StepsBlock
  | ListBlock
  | TableBlock
  | CalloutBlock
  | CapabilityBlock
  | CodeBlock
  | FigureBlock
  | MotionBlock
  | GalleryBlock
  | JournalReplayBlock
  | CtasBlock
  | AssetPlaceholderBlock;

export type Section = {
  /** Anchor id; also used as the React key. */
  id: string;
  eyebrow?: string;
  heading?: string;
  lede?: RichText;
  blocks: Block[];
};

export type PageStatus = 'ready' | 'needs-assets' | 'draft-legal';

/**
 * What a hero can show beside its copy: a still, or a recording.
 *
 * Deliberately the block types themselves rather than a parallel shape. The
 * hero used to carry its own `{ src, alt, caption, width, height }`, which meant
 * every improvement to figures — key addressing, the `describes` stamp, the
 * click-to-play treatment for animated media — had to be made twice or not at
 * all, and "not at all" is what happened: the looping GIF above the fold was the
 * one piece of media on the site with no way to stop it.
 */
export type HeroMedia = FigureBlock | MotionBlock;

export type Hero = {
  eyebrow?: string;
  headline: string;
  subhead: RichText;
  ctas?: Cta[];
  /** The pre-release condition, shown directly under the buttons at body weight. */
  statusNote?: { body: RichText; href?: string; linkLabel?: string };
  /**
   * The product shot or recording beside the hero copy.
   *
   * A `figure` here is rendered eagerly and at high fetch priority: it is above
   * the fold on most screens, and lazy-loading the largest element in the
   * viewport is how a hero ends up shifting after paint. A `motion` here is the
   * opposite — nothing above the fold is allowed to start moving on its own, so
   * it loads on activation and the poster (or the labelled gap standing in for
   * one) is what paints.
   */
  media?: HeroMedia;
};

export type PageContent = {
  route: string;
  /** <title> — from the source file's `Meta` section. */
  title: string;
  /** Meta description, ≤ 155 characters (enforced by `npm run content:check`). */
  description: string;
  status: PageStatus;
  hero: Hero;
  sections: Section[];
  closing?: {
    heading: string;
    body?: RichText[];
    ctas?: Cta[];
  };
};
