'use client';

import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@kuraykaraaslan/kui-react/common';
import { LOCALES, LOCALE_LABELS, isLocale, localePath, type Locale } from '@/libs/i18n/locales';

/**
 * Static-export language switcher, built on KUI's `LanguageSwitcher`.
 *
 * ## Why the navigation is a FULL document load
 *
 * This was the fix for a real bug — switching language reset the theme to light
 * — and the explanation written here first was wrong in a way worth recording,
 * because the wrong version still produced a working fix and would have been
 * believed.
 *
 * The locales live in two layouts that each render their own `<html>`. The
 * `dark` class is not one of React's props: the inline bootstrap in `<head>`
 * puts it on `<html>` before first paint, because that is the only way to avoid
 * a flash of the wrong theme. React treats `<html>` as a DOM *singleton* — when
 * it acquires one it strips every attribute off the live element and re-applies
 * only the props it owns. `className` is one of those props, so the font classes
 * and `h-full` come back; `dark` is not, so it does not.
 *
 * What made that happen at all was `app/layout.tsx`, a pass-through that
 * rendered no `<html>`. A layout is a ROOT layout only when nothing sits above
 * it, so with that file present Next stamped the root-layout flag on the segment
 * both trees share, decided a locale switch was not crossing root layouts, and
 * took the client-side path. That file is gone now, the two layouts really are
 * root layouts, and Next performs the document load itself — for every link that
 * crosses, not only this control.
 *
 * `location.assign` stays because KUI's switcher is a dropdown, not a link:
 * something has to navigate. It is now belt-and-braces rather than the fix.
 *
 * ## Why `<noscript>` still carries real links
 *
 * KUI's switcher is a dropdown driven by `onChange`, so it needs JavaScript. The
 * two anchors it replaced did not, and this file used to promise as much. Rather
 * than quietly drop that promise, the anchors survive inside `<noscript>` — the
 * same URLs `localePath` produces, so the two paths cannot disagree.
 *
 * ## What KUI decides for us
 *
 * The list scales with `LOCALES`: KUI renders a flag and the language's name for
 * each code, so adding a third locale is one entry in the registry and nothing
 * here. Worth knowing before that happens: KUI labels each language through
 * `iso-639-1`'s `getName`, which is the ENGLISH name ("Turkish"), not the
 * endonym ("Türkçe"). `LOCALE_LABELS` still holds the endonyms and the
 * `<noscript>` list uses them; aligning the two means a change in KUI, not here.
 */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  if (LOCALES.length < 2) return null;

  /*
   * Recover the bare route by stripping whatever locale the path carries, then
   * let `localePath` decide what each target URL looks like. The prefix rule
   * (default unprefixed, others prefixed) is expressed once, there, not here.
   */
  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.length > 0 && isLocale(segments[0]!) ? segments.slice(1) : segments;
  const route = rest.length > 0 ? `/${rest.join('/')}` : '/';

  return (
    <>
      <LanguageSwitcher
        value={locale}
        languages={[...LOCALES]}
        onChange={(lang) => {
          /* KUI types its language as a bare string — its enum is open so an app
             can carry any code. This site's is a closed union, so the value is
             narrowed here rather than cast: a code that is not one of ours must
             not become a URL. */
          if (!isLocale(lang) || lang === locale) return;
          window.location.assign(localePath(route, lang));
        }}
      />

      <noscript>
        <ul className="flex items-center gap-1">
          {LOCALES.map((code) => (
            <li key={code}>
              <a
                href={localePath(route, code)}
                hrefLang={code}
                aria-current={code === locale ? 'true' : undefined}
                className="rounded px-2 py-1 text-xs font-semibold text-text-secondary hover:text-text-primary"
              >
                {LOCALE_LABELS[code].label}
                <span className="sr-only"> — {LOCALE_LABELS[code].nativeName}</span>
              </a>
            </li>
          ))}
        </ul>
      </noscript>
    </>
  );
}
