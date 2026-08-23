import { notFound } from 'next/navigation';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { LOCALES, isLocale } from '@/libs/i18n/locales';
import { getNavLabels } from '@/modules/marketing/content';

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
 * KUI's ThemeSwitcher persists to `localStorage.theme` and toggles `.dark` on
 * <html>. Without this inline script the page paints light and then flips; the
 * copy's "no layout shift on the hero" rule covers the theme flash too.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||((!t||t==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

/** The key must match the `[lang]` segment. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const labels = getNavLabels(lang);

  return (
    <html
      lang={lang}
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
          Skip to content
        </a>

        <SiteHeader locale={lang} labels={labels} />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <SiteFooter locale={lang} labels={labels} />
      </body>
    </html>
  );
}
