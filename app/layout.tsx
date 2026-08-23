import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/libs/config/site';

/**
 * Pass-through root layout.
 *
 * `<html>` and `<body>` live in `app/[locale]/layout.tsx` instead, because the
 * `lang` attribute has to carry the actual locale — WCAG 2.2 AA (3.1.1) and the
 * copy's own accessibility commitment both require it, and a root layout cannot
 * see the `[locale]` segment. Site-wide metadata still belongs here.
 */

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#07172E' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.shortDescription}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  generator: null,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
