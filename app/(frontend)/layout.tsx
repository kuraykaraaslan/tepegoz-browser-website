import { Inter, JetBrains_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { DEFAULT_LOCALE, LOCALES } from '@/libs/i18n/locales';
import { getNavLabels } from '@/modules/marketing/content';
import { getMessages } from '@kuraykaraaslan/i18n/server/messages';
import { I18nProvider } from '@/libs/i18n/client';
import { serverT } from '@/libs/i18n/server-t';
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
 * KUI's convention persists to `localStorage.theme` and toggles `.dark` on
 * <html>. Without this inline script the page paints light and then flips; the
 * copy's "no layout shift on the hero" rule covers the theme flash too.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||((!t||t==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

/**
 * The default-locale shell.
 *
 * English is served unprefixed from the root, so this layout owns `<html>` and
 * hardcodes `DEFAULT_LOCALE`. A second locale gets a sibling route group
 * (`app/(localized)/[lang]/`) with its own root layout that reads the segment —
 * route groups may each have one, so the two trees never nest and there is
 * never a second `<html>`.
 */
export default function DefaultLocaleLayout({ children }: { children: React.ReactNode }) {
  const labels = getNavLabels(DEFAULT_LOCALE);
  const t = serverT(DEFAULT_LOCALE);
  /*
   * The active-locale bundle is resolved on the server and handed to the client
   * provider as a prop — the shape next-boilerplate's RSC layout uses. Nothing
   * ships the whole multi-locale dictionary to the browser, and the client
   * runtime never fetches: this is a static export with `connect-src 'self'`.
   */
  const messages = getMessages(dictionaries, DEFAULT_LOCALE, DEFAULT_LOCALE);

  return (
    <html
      lang={DEFAULT_LOCALE}
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

        <I18nProvider locale={DEFAULT_LOCALE} messages={messages} languages={[...LOCALES]}>
          <SiteHeader locale={DEFAULT_LOCALE} labels={labels} />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <SiteFooter locale={DEFAULT_LOCALE} labels={labels} />
        </I18nProvider>
      </body>
    </html>
  );
}
