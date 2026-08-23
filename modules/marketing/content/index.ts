import type { RouteKey } from '@/libs/config/site';
import { localePath, type Locale } from '@/libs/i18n/locales';
import type { Block, Cta, Item, NavLabels, PageContent, Section } from '@/types/content';
import { EN_PAGES, EN_NAV_LABELS } from './en';

/**
 * Content registry.
 *
 * Content files are authored with **bare** internal routes (`/download`,
 * `/legal/terms`). `withLocale` rewrites them to `/en/download` at read time, so
 * a translated file is a straight copy of the English one with the prose
 * swapped — no locale prefixes to get wrong in 12 files.
 */

const REGISTRY: Record<Locale, { pages: Record<RouteKey, PageContent>; nav: NavLabels }> = {
  en: { pages: EN_PAGES, nav: EN_NAV_LABELS },
};

export function getNavLabels(locale: Locale): NavLabels {
  return REGISTRY[locale].nav;
}

export function getPage(locale: Locale, key: RouteKey): PageContent {
  return withLocale(REGISTRY[locale].pages[key], locale);
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

function block(value: Block, locale: Locale): Block {
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
    case 'code':
    case 'assetPlaceholder':
      return value;
  }
}

function section(value: Section, locale: Locale): Section {
  return {
    ...value,
    lede: value.lede ? richText(value.lede, locale) : undefined,
    blocks: value.blocks.map((b) => block(b, locale)),
  };
}

function withLocale(page: PageContent, locale: Locale): PageContent {
  return {
    ...page,
    hero: {
      ...page.hero,
      subhead: richText(page.hero.subhead, locale),
      ctas: page.hero.ctas?.map((c) => cta(c, locale)),
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
    sections: page.sections.map((s) => section(s, locale)),
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
