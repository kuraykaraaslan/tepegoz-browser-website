import type { RouteKey } from '@/libs/config/site';
import { localePath, type Locale } from '@/libs/i18n/locales';
import { MEDIA, type MediaKey } from '@/modules/marketing/media/manifest.generated';
import { describes as stampOf } from '@/modules/marketing/media/types';
import type {
  Block,
  Cta,
  FigureBlock,
  GalleryBlock,
  HeroMedia,
  Item,
  MotionBlock,
  NavLabels,
  PageContent,
  Section,
} from '@/types/content';
import { EN_PAGES, EN_NAV_LABELS } from './en';
import { TR_PAGES, TR_NAV_LABELS } from './tr';

/**
 * Content registry.
 *
 * Content files are authored with **bare** internal routes (`/download`,
 * `/legal/terms`). `withLocale` rewrites them to `/en/download` at read time, so
 * a translated file is a straight copy of the English one with the prose
 * swapped — no locale prefixes to get wrong in 12 files.
 *
 * Reading a page is also where the media ledger's `describes` stamps are
 * checked, because this is the one place every page passes through.
 */

/**
 * Page bodies per locale.
 *
 * `content/tr/` has landed, so `tr` points at the Turkish pages: every route
 * carries a translated body, not just a translated shell. The half-measure this
 * comment used to describe — a Turkish header and footer wrapped around English
 * copy — is gone, and `isUntranslated` below now returns false for every locale.
 *
 * That function is deliberately kept rather than deleted. It is the mechanism, not
 * a note about a past state: it is what lets a *future* locale ship its chrome
 * first, and the banner it drives is the only thing that would tell a reader the
 * body under it is not in their language. Deleting it would mean the next locale
 * either waits for a full translation or falls back in silence.
 */
const REGISTRY: Record<Locale, { pages: Record<RouteKey, PageContent>; nav: NavLabels }> = {
  en: { pages: EN_PAGES, nav: EN_NAV_LABELS },
  tr: { pages: TR_PAGES, nav: TR_NAV_LABELS },
};

/** True while a locale is still served from another locale's copy. */
export function isUntranslated(locale: Locale): boolean {
  return locale !== 'en' && REGISTRY[locale].pages === EN_PAGES;
}

export function getNavLabels(locale: Locale): NavLabels {
  return REGISTRY[locale].nav;
}

export function getPage(locale: Locale, key: RouteKey): PageContent {
  return withLocale(REGISTRY[locale].pages[key], locale, key);
}

/* -------------------------------------------------------------------------- */

/** True for site-internal paths that still need a locale prefix. */
function isBareInternal(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}

function href(value: string, locale: Locale): string {
  if (!isBareInternal(value)) return value;
  const [path, hash] = value.split('#');
  return localePath(path ?? '/', locale) + (hash ? `#${hash}` : '');
}

/** Rewrites `[text](/route)` inside inline rich text. */
function richText(value: string, locale: Locale): string {
  return value.replace(
    /\[([^\]]+)\]\((\/[^)]*)\)/g,
    (_m, label: string, path: string) => `[${label}](${href(path, locale)})`
  );
}

/** Rewrites routes inside a list item, preserving its star flag. */
function item(value: Item, locale: Locale): Item {
  return typeof value === 'string'
    ? richText(value, locale)
    : { ...value, text: richText(value.text, locale) };
}

function cta(value: Cta, locale: Locale): Cta {
  return value.external ? value : { ...value, href: href(value.href, locale) };
}

/* -------------------------------------------------------------------------- */
/* The media binding                                                          */
/* -------------------------------------------------------------------------- */

/**
 * The content file a route key is authored in.
 *
 * `en/index.ts` names one module per route and the two names are the same word
 * in two casings — `networkPrivacy` is `network-privacy.ts`, `blogScreenshot` is
 * `blog-screenshot.ts` — so the file is derivable rather than tabulated. It is
 * derived rather than listed because a second table is a second thing to forget
 * to update, and this one is only ever read by a human standing in front of an
 * error: if the convention is ever broken the path stops resolving in an editor,
 * which is a visible failure, whereas a stale lookup table would name the wrong
 * file confidently. The asset key in the same message is unambiguous either way.
 */
function contentFileFor(locale: Locale, page: RouteKey): string {
  const file = page.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
  return `modules/marketing/content/${locale}/${file}.ts`;
}

/**
 * Refuses copy whose `describes` stamp no longer matches the pairing it is about.
 *
 * This is the join the media ledger exists to create. `media-check.mjs` proves
 * the manifest describes the files; this proves a *human* read this alt text
 * against those files. Neither is the other's substitute: a correct manifest
 * under stale prose is exactly the defect that shipped — `agent-demo.gif` was
 * swapped for a different recording and the alt went on describing the old
 * screen, which is a WCAG 1.1.1 failure invisible to everyone who can see.
 *
 * The stamp covers the asset's bytes **and** the alt text together (see
 * `describes()` in `modules/marketing/media/types.ts` for the serialization and
 * the argument), so exactly three edits can break it, and the message below
 * names all three because the reader has to work out which one they made:
 *
 *   1. the file behind the key was replaced — the original defect;
 *   2. the block was repointed at a *different* ledger key while the sentence
 *      stayed put — the defect a bytes-only stamp let through, because the value
 *      that would have silenced it was printed in `manifest.generated.ts`;
 *   3. the alt text was rewritten — a new claim, which its author signs by
 *      restamping.
 *
 * It throws rather than warns, and it runs here rather than only in a script,
 * because here is where every page passes on its way to being rendered:
 * `next build` fails, the deploy does not happen, and the broken claim never
 * reaches a reader. It is no longer the *only* enforcement, which was the real
 * complaint against it — `node scripts/media-restamp.mjs --check` runs inside
 * `npm run check`, so the same mismatch is reported by file and line while a
 * human is reviewing a diff, long before anything renders. Both still run on
 * every `npm run build`, which is also what keeps the two implementations of
 * the stamp formula from drifting apart in silence.
 *
 * `where` is built up on the way down — file, then section id, then block kind —
 * so the message names a place in a file rather than a block index nobody can
 * count to.
 */
function assertDescribes(
  where: string,
  key: MediaKey,
  stamped: string,
  alt: string,
  /** Set when the alt is borrowed from an enclosing block, as a poster's is. */
  altSource?: string
): void {
  const actual = stampOf(MEDIA[key], alt);
  if (stamped === actual) return;

  throw new Error(
    [
      `Media stamp mismatch: ${where} → asset "${key}".`,
      '',
      `  the copy is stamped     ${stamped}`,
      `  this pairing hashes to  ${actual}`,
      '',
      `  asset  ${key} → ${MEDIA[key].src}  (bytes ${MEDIA[key].sha256.slice(0, 8)}…)`,
      `  alt    ${JSON.stringify(alt)}${altSource === undefined ? '' : `  [${altSource}]`}`,
      '',
      '  The stamp covers the bytes AND this alt text together, so one of three',
      '  things happened: the file behind that key was replaced, the block was',
      '  repointed at a different key, or the alt text was edited.',
      '',
      '  Do NOT just paste the new stamp in. Open the file above, look at it, and',
      '  read this alt text back against what you see. If it no longer describes',
      '  the image, rewrite it — THEN restamp. A stamp updated without re-reading',
      '  the alt is worse than no stamp at all: it launders the exact defect this',
      '  check exists to catch, and leaves a screen-reader user with a confident',
      '  description of a screen that is no longer there.',
      '',
      '  Restamp — it prints every asset, its file and its alt text for you to',
      '  read before it writes anything:',
      '',
      '      npm run media:restamp',
      '',
      '  Or list every stale stamp without changing a file:',
      '',
      '      npm run media:stamps',
      '',
    ].join('\n')
  );
}

function figure(value: FigureBlock, locale: Locale, where: string): FigureBlock {
  assertDescribes(`${where}, figure`, value.asset, value.describes, value.alt);
  return value.caption ? { ...value, caption: richText(value.caption, locale) } : value;
}

function motion(value: MotionBlock, locale: Locale, where: string): MotionBlock {
  assertDescribes(`${where}, motion`, value.asset, value.describes, value.alt);
  if (value.poster) {
    // The poster stands in for the recording, so it is rendered under the
    // recording's alt text, unchanged — and so its stamp binds the POSTER's
    // bytes to the RECORDING's alt. That is the pairing a reader actually
    // meets: someone who never presses play hears `value.alt` while looking at
    // the poster's pixels, and a stamp that guarded any other combination would
    // be guarding something nobody is shown.
    //
    // It behaves correctly in both directions. Rewrite the recording's alt and
    // the poster's stamp breaks too, because the poster's claim changed even
    // though its bytes did not. Repoint `poster.asset` at some other image and
    // it breaks as well, because the bytes changed under a claim that did not —
    // which is the still-frame-of-a-different-recording defect.
    assertDescribes(
      `${where}, motion poster`,
      value.poster.asset,
      value.poster.describes,
      value.alt,
      'inherited from the recording this is a poster for'
    );
  }

  return {
    ...value,
    // `alt` is deliberately absent from this list. It is plain text, not rich
    // text: a link inside an alt attribute is markup a screen reader reads
    // aloud as punctuation, so it must never be rewritten. Captions,
    // transcripts and chapter titles are prose and behave like prose — except
    // chapter titles, which are short labels rendered inside a control and have
    // nowhere to put a link either.
    //
    // It is now also the string the stamp is computed over, which makes the rule
    // load-bearing twice: rewriting `alt` here would hash a sentence no author
    // ever wrote and no reader ever hears.
    caption: value.caption ? richText(value.caption, locale) : undefined,
    transcript: value.transcript?.map((line) => richText(line, locale)),
  };
}

function gallery(value: GalleryBlock, locale: Locale, where: string): GalleryBlock {
  return {
    ...value,
    items: value.items.map((entry, index) => {
      assertDescribes(
        `${where}, gallery item ${index + 1}`,
        entry.asset,
        entry.describes,
        entry.alt
      );
      return entry.caption ? { ...entry, caption: richText(entry.caption, locale) } : entry;
    }),
  };
}

/** A hero's media is a figure or a motion block, and reuses their handling. */
function heroMedia(value: HeroMedia, locale: Locale, where: string): HeroMedia {
  return value.kind === 'motion'
    ? motion(value, locale, `${where} hero`)
    : figure(value, locale, `${where} hero`);
}

function block(value: Block, locale: Locale, where: string): Block {
  switch (value.kind) {
    case 'prose':
      return { ...value, body: value.body.map((p) => richText(p, locale)) };
    case 'cards':
      return {
        ...value,
        items: value.items.map((i) => ({ ...i, body: richText(i.body, locale) })),
      };
    case 'steps':
      return {
        ...value,
        items: value.items.map((i) => ({ ...i, body: richText(i.body, locale) })),
      };
    case 'list':
      return { ...value, items: value.items.map((i) => item(i, locale)) };
    case 'table':
      return { ...value, rows: value.rows.map((r) => r.map((c) => richText(c, locale))) };
    case 'callout':
      return { ...value, body: value.body.map((p) => richText(p, locale)) };
    case 'capability':
      return {
        ...value,
        groups: value.groups.map((g) => ({
          ...g,
          items: g.items.map((i) => item(i, locale)),
        })),
      };
    case 'ctas':
      return { ...value, items: value.items.map((c) => cta(c, locale)) };
    case 'figure':
      return figure(value, locale, where);
    case 'motion':
      return motion(value, locale, where);
    case 'gallery':
      return gallery(value, locale, where);
    /* Only `caption` is rewritten. `label` is a short accessible name with
       nowhere to put a link, and the run's own `message`/`detail` are not in the
       block at all — they live in the generated module and reach the renderer
       directly, because a product string must never pass through the locale
       rewriter. */
    case 'journalReplay':
      return value.caption ? { ...value, caption: richText(value.caption, locale) } : value;
    case 'code':
    case 'assetPlaceholder':
      return value;
  }
}

function section(value: Section, locale: Locale, file: string): Section {
  return {
    ...value,
    lede: value.lede ? richText(value.lede, locale) : undefined,
    // Sections carry an `id`, so a stamp failure can name the anchor a human
    // would scroll to rather than a block index they would have to count out.
    blocks: value.blocks.map((b) => block(b, locale, `${file} section "${value.id}"`)),
  };
}

function withLocale(page: PageContent, locale: Locale, key: RouteKey): PageContent {
  const file = contentFileFor(locale, key);
  return {
    ...page,
    hero: {
      ...page.hero,
      subhead: richText(page.hero.subhead, locale),
      ctas: page.hero.ctas?.map((c) => cta(c, locale)),
      media: page.hero.media ? heroMedia(page.hero.media, locale, file) : undefined,
      statusNote: page.hero.statusNote
        ? {
            ...page.hero.statusNote,
            body: richText(page.hero.statusNote.body, locale),
            href: page.hero.statusNote.href
              ? href(page.hero.statusNote.href, locale)
              : undefined,
          }
        : undefined,
    },
    sections: page.sections.map((s) => section(s, locale, file)),
    closing: page.closing
      ? {
          ...page.closing,
          body: page.closing.body?.map((p) => richText(p, locale)),
          ctas: page.closing.ctas?.map((c) => cta(c, locale)),
        }
      : undefined,
  };
}

export type { PageContent, NavLabels } from '@/types/content';
