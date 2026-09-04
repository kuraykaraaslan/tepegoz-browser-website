'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { Messages, Direction, TFunction } from './types';
import { interpolate } from './interpolate';

type I18nValue = {
  locale: string;
  dir: Direction;
  t: TFunction;
  /**
   * The languages this tenant actually accepts (enabled ∩ shipped dictionaries).
   * Any picker that writes the application language MUST offer only these — the
   * server clamps anything else back to the tenant default, so a wider list
   * silently no-ops.
   */
  languages: string[];
};

const I18nContext = createContext<I18nValue | null>(null);

/**
 * Provides the resolved application language + a `t()` for the admin UI. Seeded
 * server-side (the RSC layout resolves the locale and passes the active-locale
 * message bundle in as a prop). `t(key, fallback?, vars?)` returns
 * `messages[key] ?? fallback ?? key`, interpolating `{{vars}}`. The `dir` is
 * applied to a `display:contents` wrapper so RTL cascades to the subtree without
 * touching the root <html>.
 */
export function I18nProvider({
  locale,
  dir = 'ltr',
  messages,
  languages,
  children,
}: {
  locale: string;
  dir?: Direction;
  messages: Messages;
  /** Tenant-enabled languages that have a dictionary; defaults to `[locale]`. */
  languages?: string[];
  children: ReactNode;
}) {
  const key = (languages || []).join(',');
  const value = useMemo<I18nValue>(() => {
    const t: TFunction = (key, fallback, vars) => {
      const raw = messages[key] ?? fallback ?? key;
      return vars ? interpolate(raw, vars) : raw;
    };
    return { locale, dir, t, languages: languages?.length ? languages : [locale] };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, dir, messages, key]);

  return (
    <I18nContext.Provider value={value}>
      <div dir={dir} className="contents">{children}</div>
    </I18nContext.Provider>
  );
}

/** Full i18n context. Falls back to an identity `t` when no provider is mounted. */
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (ctx) return ctx;
  return {
    locale: 'en',
    dir: 'ltr',
    languages: ['en'],
    t: (key, fallback, vars) => {
      const raw = fallback ?? key;
      return vars ? interpolate(raw, vars) : raw;
    },
  };
}

/** The translate function for the current application language. */
export function useT(): TFunction {
  return useI18n().t;
}

export function useLocale(): string {
  return useI18n().locale;
}

export function useDir(): Direction {
  return useI18n().dir;
}

/**
 * The application languages the user may actually switch to. Use this for any
 * application-language picker instead of the full ISO catalogue — see the
 * `languages` note on I18nValue.
 */
export function useAppLanguages(): string[] {
  return useI18n().languages;
}
