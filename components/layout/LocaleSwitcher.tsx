'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LABELS, isLocale, localePath, type Locale } from '@/libs/i18n/locales';
import { cn } from '@/libs/utils/cn';

/**
 * Static-export language switcher.
 *
 * There is no middleware to negotiate a locale, so switching is just a link to
 * the same route under a different locale — which also means the switcher is a
 * real anchor and works with JavaScript disabled.
 *
 * The prefix rule (default locale unprefixed, others prefixed) is not repeated
 * here: strip whatever locale the current path carries to recover the bare
 * route, then let `localePath` decide what the target URL looks like.
 *
 * It renders nothing while only one locale is configured, rather than showing a
 * dead control. Adding `'tr'` to LOCALES brings it back automatically.
 */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  if (LOCALES.length < 2) return null;

  const segments = pathname.split('/').filter(Boolean);
  const rest = segments.length > 0 && isLocale(segments[0]!) ? segments.slice(1) : segments;
  const route = rest.length > 0 ? `/${rest.join('/')}` : '/';

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border p-0.5"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={localePath(route, code)}
            prefetch={false}
            hrefLang={code}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded px-2 py-1 text-xs font-semibold transition-colors',
              active
                ? 'bg-primary-subtle text-primary'
                : 'text-text-secondary hover:bg-surface-overlay hover:text-text-primary'
            )}
          >
            <span className="sr-only">{LOCALE_LABELS[code].nativeName}</span>
            <span aria-hidden="true">{LOCALE_LABELS[code].label}</span>
          </Link>
        );
      })}
    </div>
  );
}
