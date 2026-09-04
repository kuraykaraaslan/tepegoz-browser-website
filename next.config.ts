import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits a self-contained `out/` directory.
  // No server, no middleware, no image optimizer — Vercel serves it from the CDN.
  output: 'export',

  // next/image's optimizer is a server feature; static export requires it off.
  images: { unoptimized: true },

  // Emit `about/index.html` rather than `about.html` so the same `out/` works
  // on any static host, not just ones that strip `.html`.
  trailingSlash: true,

  /**
   * The vendored i18n runtime ships TypeScript source, not a built bundle.
   *
   * `vendor/kui-react` carries an already-compiled `dist/`, so Next can consume
   * it as-is. `@kuraykaraaslan/i18n` is the upstream module copied verbatim —
   * `.ts` and `.tsx` — because that is what next-boilerplate exports, and
   * transpiling it here is cheaper than maintaining a build of someone else's
   * module. Remove this only if the vendored copy is ever replaced by a dist.
   */
  transpilePackages: ['@kuraykaraaslan/i18n'],

  // The site ships no third-party scripts by design (see docs/website README:
  // "No third-party analytics or tracking scripts"), so there is nothing to allow here.
  reactStrictMode: true,
};

export default nextConfig;
