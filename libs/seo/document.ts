import type { Metadata, Viewport } from 'next';
import { SITE } from '@/libs/config/site';

/**
 * Site-wide `<head>` facts, shared by every root layout.
 *
 * This used to live in `app/layout.tsx`, and moving it out is the whole point:
 * that file existed only to hold it, and its existence is what made the theme
 * reset when the language changed.
 *
 * A layout is a ROOT layout only when nothing sits above it. With a pass-through
 * `app/layout.tsx` in place, Next stamped `IsRootLayout` on the shared `""`
 * segment for both locale trees, `isNavigatingToNewRootLayout()` compared the two
 * and saw the same root, and an EN↔TR move stayed a client-side transition —
 * across two layouts that each render their own `<html>`. React treats `<html>`
 * as a singleton: acquiring it strips every attribute off the live element, so
 * the `dark` class the pre-paint bootstrap had put there was destroyed.
 *
 * With that file gone, `(frontend)` and `(localized)` really are root layouts and
 * Next itself performs a full page load between them — for EVERY link that
 * crosses, not just the language switcher.
 *
 * The cost is that two files must agree on this metadata, which is exactly why it
 * is defined ONCE here and re-exported rather than copied.
 */
export const siteMetadata: Metadata = {
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

export const siteViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#07172E' },
  ],
};
