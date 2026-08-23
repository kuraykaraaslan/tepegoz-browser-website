import Link from 'next/link';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { TepegozMark } from '@/components/brand/TepegozMark';
import { ROUTES } from '@/libs/config/site';
import { DEFAULT_LOCALE, localePath } from '@/libs/i18n/locales';
import { EN_NAV_LABELS } from '@/modules/marketing/content/en';

const inter = Inter({ variable: '--font-inter', subsets: ['latin', 'latin-ext'], display: 'swap' });
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

const themeBootstrap = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||((!t||t==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

/**
 * The 404 page renders its own `<html>`/`<body>`.
 *
 * The root layout is a pass-through (see `app/layout.tsx`), and a not-found at
 * the root sits outside `[locale]`, so it cannot inherit that shell. It falls
 * back to the default locale for its links, which is the correct guess for a
 * URL that did not carry a valid one.
 */
export default function NotFound() {
  const suggestions = [ROUTES.home, ROUTES.howItWorks, ROUTES.download, ROUTES.roadmap];
  const labels = [
    EN_NAV_LABELS.home,
    EN_NAV_LABELS.howItWorks,
    EN_NAV_LABELS.download,
    EN_NAV_LABELS.roadmap,
  ];

  return (
    <html
      lang={DEFAULT_LOCALE}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="flex min-h-full flex-col items-center justify-center bg-surface-base px-6 py-20 font-sans text-text-primary">
        <TepegozMark className="w-14" />

        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-balance text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          One eye, and it still could not find this page.
        </h1>
        <p className="mt-4 max-w-md text-center text-[1.0625rem] leading-relaxed text-text-secondary">
          The address is deterministic, so it did not guess. Whatever you were after is not here.
        </p>

        <nav aria-label="Suggested pages" className="mt-9 flex flex-wrap justify-center gap-3">
          {suggestions.map((route, i) => (
            <Link
              key={route}
              href={localePath(route, DEFAULT_LOCALE)}
              prefetch={false}
              className="rounded-lg border border-border bg-surface-raised px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-border-strong hover:bg-surface-overlay"
            >
              {labels[i]}
            </Link>
          ))}
        </nav>
      </body>
    </html>
  );
}
