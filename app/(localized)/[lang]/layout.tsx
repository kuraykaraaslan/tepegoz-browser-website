import { Inter, JetBrains_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from '@/libs/i18n/locales';
import { serverT } from '@/libs/i18n/server-t';
import { getNavLabels, isUntranslated } from '@/modules/marketing/content';
import { getMessages } from '@kuraykaraaslan/i18n/server/messages';
import { I18nProvider } from '@/libs/i18n/client';
import { dictionaries } from '@/modules/marketing/dictionaries';

/* Self-hosted at build time by next/font, so the page makes no request to
   Google at runtime — the site ships zero third-party requests by design. */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Applies the stored theme before first paint.
 *
 * Duplicated from the default-locale layout rather than shared, and that is the
 * one duplication worth keeping: it has to be the FIRST thing in `<head>`, it
 * must not be a module import (an inline script has no request to wait for), and
 * the two trees are separate root layouts by construction. Extracting it to a
 * component would put a React boundary in front of the thing whose whole job is
 * to run before React does.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||((!t||t==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

/**
 * Every locale except the default one, which is served unprefixed from the root
 * tree. Listing the default here would publish it twice, at two URLs, with the
 * canonical tag pointing at only one of them.
 */
export function generateStaticParams(): { lang: string }[] {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

/**
 * The prefixed-locale shell.
 *
 * A sibling ROOT layout to `app/(frontend)/layout.tsx` — route groups may each
 * own one, so the two trees never nest and there is never a second `<html>`.
 * This one reads the locale from the segment instead of hardcoding the default.
 */
export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  const labels = getNavLabels(locale);
  const t = serverT(locale);
  const messages = getMessages(dictionaries, locale, DEFAULT_LOCALE);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-full flex-col bg-surface-base font-sans text-text-primary">
        <a
          href="#main-content"
          className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-fg focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          {t('marketing.a11y.skipToContent', 'Skip to content')}
        </a>

        <I18nProvider locale={locale} messages={messages} languages={[...LOCALES]}>
          <SiteHeader locale={locale} labels={labels} />

          {/*
            Said plainly, at the top of every page it applies to.

            The chrome of this locale is translated and its page bodies are not.
            A reader who scrolls into English copy under a Turkish header should
            have been told before they got there, not left to conclude the
            translation is broken. It renders only while the locale really is
            served from another locale's content — `isUntranslated` reads the
            content registry, so this notice disappears by itself the day
            `content/tr/` lands, with no second edit to remember.
          */}
          {isUntranslated(locale) && (
            <p
              role="status"
              className="border-b border-border bg-surface-overlay px-5 py-2.5 text-center text-sm text-text-secondary"
            >
              {t(
                'marketing.locale.untranslated',
                'The interface is in your language; the page text has not been translated yet and is shown in English.',
              )}
            </p>
          )}

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <SiteFooter locale={locale} labels={labels} />
        </I18nProvider>
      </body>
    </html>
  );
}
