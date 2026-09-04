import { createHash } from 'node:crypto';

/**
 * The media ledger's hand-written half.
 *
 * The ledger is split on **authorship**, and the split is the whole point:
 *
 *   - Everything in {@link MediaAsset} except `provenance` is *measured* from the
 *     file's bytes by `scripts/lib/measure.mjs` and written into
 *     `manifest.generated.ts` by `scripts/media-manifest.mjs`. No human types a
 *     dimension. That is what makes the defect this ledger exists to prevent —
 *     `home.ts` declaring `1440x900` over a 1066x864 GIF, a layout shift on the
 *     largest element above the fold — literally unexpressible.
 *   - {@link SourceStamp} is the opposite: nothing in it can be derived from the
 *     bytes. Where a capture came from is editorial record, kept by hand in
 *     `provenance.json` (and filled in automatically by `media:ingest` when it is
 *     the thing doing the capture-copying, because at that moment it *does* know).
 *   - `alt` and `caption` appear here **nowhere**. Alt text is a claim about what
 *     an image conveys, it has to translate with the page, and it belongs in
 *     `modules/marketing/content/<locale>/`. Putting a `Record<Locale, string>` in
 *     a generated file would create a second locale mechanism and make adding
 *     Turkish harder, so it is deliberately absent.
 *
 * The join between the two halves is {@link describes}: a content entry stamps
 * eight hex characters next to its alt text, and those eight characters are a
 * hash of *the asset's bytes and that alt text together*. Change either half and
 * the stamp stops matching by name, so a human has to look at the image and read
 * the sentence back against it. That is the exact defect that shipped once
 * already — a file was swapped under copy nobody re-read, and the alt went on
 * describing a different screen.
 */

/**
 * How the asset is put on a page.
 *
 * `image` is an `<img>`, `motion` is a `<video controls>`. An animated GIF is an
 * `image`: it is an `<img>` in the DOM regardless of the fact that it moves, and
 * the renderer has to treat it as one. Read `animated` for "does it move";
 * read `kind` for "which element".
 */
export type MediaKind = 'image' | 'motion';

/**
 * Where a capture came from — the part of the record that no parser can recover.
 *
 * Every field is nullable and every null means exactly one thing: *this was not
 * recorded*. Nothing here is ever inferred, guessed, or back-filled from a
 * plausible neighbour. A wrong capture date under a screenshot is worse than an
 * absent one, because an absent one asks a question and a wrong one answers it.
 */
export type SourceStamp = {
  /** ISO `YYYY-MM-DD`. `null` when the capture date was never written down. */
  capturedAt: string | null;
  /** Short sha of the `tepegoz-browser` commit the app was built from. */
  browserCommit: string | null;
  /** The app's `package.json` version at capture time. */
  appVersion: string | null;
  /** The script that produced it, e.g. `tepegoz-browser/scripts/screenshots.mjs`. */
  tool: string | null;
  /** Anything a reader of this ledger would otherwise have to ask about. */
  note: string | null;
};

/**
 * One row of the ledger — one file in `public/screenshots/` or `public/media/`.
 *
 * `width` and `height` are non-nullable on purpose, even though `measure()` can
 * legitimately return `null` for an SVG carrying neither intrinsic size nor a
 * viewBox. Reserving layout space is a site-wide rule ("no layout shift on the
 * hero"), so an asset whose size cannot be known cannot be rendered correctly
 * here; the generator refuses it by name rather than emitting a `null` that every
 * consumer would then have to defend against. That is the caller-owned
 * null-dimension policy `measure.mjs` documents, decided here.
 */
export type MediaAsset = {
  /** Public URL path, always rooted — `/screenshots/agent-demo.gif`. */
  src: string;
  kind: MediaKind;
  mime: string;
  width: number;
  height: number;
  /** File size in bytes. */
  bytes: number;
  /** Full lowercase hex sha256 of the file bytes. */
  sha256: string;
  animated: boolean;
  /** `null` where the format does not cheaply expose a count (WebM, still PNG). */
  frames: number | null;
  /** `null` where the format does not carry one, or does not carry it cheaply. */
  durationMs: number | null;
  provenance: SourceStamp;
};

/**
 * How many hex characters of the pair hash a stamp carries.
 *
 * Named rather than inlined because `scripts/media-restamp.mjs` has to agree
 * with it, and a bare `8` in two files is a disagreement waiting to happen.
 */
export const STAMP_LENGTH = 8;

/**
 * The stamp a content entry carries next to its alt text.
 *
 * ── What it binds ────────────────────────────────────────────────────────────
 * The stamp is the first eight hex characters of
 *
 *     sha256( asset.sha256 + "\n" + alt )
 *
 * so it is a hash over the **pair**, not over the bytes alone. That is the whole
 * of the design, and each half catches a different way for alt text to go stale:
 *
 *   - **The bytes half** catches *the file behind this key changed*. Someone
 *     re-captures `browser-chrome.png`, the sha256 moves, the stamp stops
 *     matching, and the person who swapped the file is told to read the sentence
 *     underneath it before restamping. This is the original shipped defect —
 *     `agent-demo.gif` replaced under copy nobody re-read — and it was already
 *     caught by the previous, bytes-only stamp.
 *   - **The alt half** catches *the key changed under this copy*, which the
 *     bytes-only stamp did **not**. Repointing `asset:` from one ledger key to
 *     another is a one-word edit; under a bytes-only stamp the value that made it
 *     pass was sitting in plain sight in `manifest.generated.ts` (the first eight
 *     characters of the new row's `sha256`), so an editor could move the pointer,
 *     copy the new prefix across, and ship a screenshot of one screen carrying
 *     the alt text of another — the very defect the stamp exists to prevent,
 *     through the other door. Hashing the alt in closes it: there is no longer
 *     anywhere in the repository that the correct stamp for a *new* pairing can
 *     be read off. It has to be computed, and the only thing that computes it —
 *     `scripts/media-restamp.mjs` — prints the asset key, the file it resolves
 *     to, and the alt text next to each other while it does. Restamping became a
 *     review instead of a copy-paste.
 *   - It also catches *the copy changed under these bytes*. Rewriting an alt
 *     invalidates its own stamp, which is correct rather than annoying: a
 *     rewritten alt is a new claim, and restamping it is the author signing it.
 *
 * Eight hex characters is 32 bits — nowhere near collision-resistant in general,
 * and it does not need to be. It is not a security boundary; it is a *tripwire*
 * over a set of a dozen or so stamps that a human curates, and its only job is to
 * stop matching when the pairing underneath a piece of copy changes. It cannot
 * make anyone actually look at the image. It can only make sure nobody passes the
 * gate without being shown one.
 *
 * ── The serialization is fixed, and why this one ─────────────────────────────
 * `asset.sha256` is always exactly 64 lowercase hex characters, so the `\n`
 * separator is unambiguous by construction: no sha256 can contain one, and no
 * (sha, alt) pair can be re-split any other way. Alt text is hashed as UTF-8
 * exactly as written — no trimming, no normalisation, no collapsing of
 * whitespace. A stamp that survived retyping "the address bar" as "the  address
 * bar" would be quietly deciding for the author which edits count as a new
 * claim, and that is not a call a hash function is entitled to make.
 *
 * ── Two implementations, and why that is safe ────────────────────────────────
 * `scripts/media-restamp.mjs` computes the same value in plain JavaScript,
 * because `tsconfig.json` sets `allowJs: false` and the scripts are `.mjs`, so
 * neither side can import the other. They cannot silently drift: every
 * `npm run build` runs `media-restamp.mjs --check` over all the stamps (inside
 * `npm run check`) and then evaluates every content module through
 * `assertDescribes()` in `modules/marketing/content/index.ts` (inside
 * `next build`). Two verifiers, the same stamps, the same run — a divergence in
 * the formula reds the very next build rather than hiding.
 *
 * It lives here rather than as an expression at each call site so that the
 * definition of "the stamp" is in one place and cannot drift between the content
 * files that write it and the checkers that verify it.
 *
 * ── Why `node:crypto` is safe in this file ───────────────────────────────────
 * The site is `output: 'export'`: every page is rendered in Node at build time
 * and nothing here ever reaches a browser. The one client component that touches
 * this module, `components/marketing/MotionFigure.tsx`, imports `MediaAsset`
 * with `import type`, which is erased before bundling. If a future client
 * component imports a *value* from this file, the bundler will say so loudly —
 * which is the correct outcome, because a stamp check belongs at build time and
 * nowhere else.
 *
 * @param asset the ledger row the copy is about — only its `sha256` is used
 * @param alt   the alt text stamped beside it, verbatim
 */
export function describes(asset: Pick<MediaAsset, 'sha256'>, alt: string): string {
  return createHash('sha256')
    .update(`${asset.sha256}\n${alt}`, 'utf8')
    .digest('hex')
    .slice(0, STAMP_LENGTH);
}
