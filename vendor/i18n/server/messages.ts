// Server-side message resolution from a module's own dictionaries — for emails,
// notifications, and API/error strings (the recipient's locale, not the request
// UI's). Framework-free: a module feeds its `dictionaries` object and gets a `t`.
// Mirrors modules/auth/server/dictionaries/index.ts, generalized + prefixed keys.
import { interpolate, type Messages } from './i18n.core';

/** locale code → messages (e.g. `{ en, tr }` from a module's dictionaries barrel). */
export type Dictionaries = Record<string, Messages>;

const base = (locale: string | null | undefined, fallback: string) =>
  ((locale || fallback).toLowerCase().split('-')[0]) || fallback;

/** Merge a locale's messages over the default-locale base (per-key fallback). */
export function getMessages(dicts: Dictionaries, locale: string, defaultLocale = 'en'): Messages {
  const code = base(locale, defaultLocale);
  return { ...(dicts[defaultLocale] || {}), ...(dicts[code] || {}) };
}

/**
 * Build a server `t(key, locale, fallback?, vars?)` bound to a module's dictionaries.
 * Resolution: dicts[locale][key] → dicts[default][key] → fallback → key, with `{{vars}}`.
 */
export function createServerT(dicts: Dictionaries, defaultLocale = 'en') {
  return (key: string, locale: string, fallback?: string, vars?: Record<string, string | number>): string => {
    const code = base(locale, defaultLocale);
    const raw = dicts[code]?.[key] ?? dicts[defaultLocale]?.[key] ?? fallback ?? key;
    return vars ? interpolate(raw, vars) : raw;
  };
}
