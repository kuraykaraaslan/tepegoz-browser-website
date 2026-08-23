/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import type { RouteKey } from '@/libs/config/site';
import { SITE } from '@/libs/config/site';
import { isLocale, LOCALES } from '@/libs/i18n/locales';
import { getPage } from '@/modules/marketing/content';

/**
 * Per-page Open Graph images, generated at build time.
 *
 * `docs/website/README.md` lists "Open Graph images per page" as a site-wide
 * requirement, and `home.md` describes the intended treatment: the one-eye mark
 * on a dark field. Every route re-exports the helpers below, so all twelve share
 * one design and each still gets its own title.
 *
 * These are baked into `out/` during `next build` — no runtime image service,
 * which a static export could not have anyway.
 */

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${SITE.name} — ${SITE.tagline}`;

/**
 * Required so the image is emitted for every locale under `output: 'export'`.
 * The key must match the `[lang]` segment.
 */
export function ogStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const NAVY = '#0C2135';
const NAVY_DEEP = '#07172E';
const CYAN = '#06AEC4';
const EYE = '#FFFFFF';
const MUTED = '#8A98A8';

/** The favicon lockup, inlined as a data URI — satori cannot resolve <use>. */
const MARK = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 276">
    <defs><clipPath id="c"><path d="M48 162 Q120 98 192 162 Q120 224 48 162 Z"/></clipPath></defs>
    <path d="M30 70 Q30 40 60 40 H180 Q210 40 210 70 V150 Q210 214 120 256 Q30 214 30 150 Z" fill="${NAVY}"/>
    <path d="M48 162 Q120 98 192 162 Q120 224 48 162 Z" fill="${EYE}"/>
    <g clip-path="url(#c)">
      <circle cx="120" cy="162" r="48" fill="${CYAN}"/>
      <circle cx="120" cy="162" r="22" fill="${NAVY}"/>
      <circle cx="131" cy="152" r="8" fill="${EYE}"/>
    </g>
  </svg>`
)}`;

export async function renderOgImage(locale: string, key: RouteKey) {
  const resolved = isLocale(locale) ? locale : LOCALES[0];
  const page = getPage(resolved, key);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: `radial-gradient(120% 120% at 20% 0%, #143A5E 0%, ${NAVY} 48%, ${NAVY_DEEP} 100%)`,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={MARK} width={68} height={78} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 34, fontWeight: 800, color: EYE, letterSpacing: '-0.02em' }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 15, color: CYAN, letterSpacing: '0.16em', marginTop: 6 }}>
              {SITE.tagline.toUpperCase()}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 940 }}>
          <div
            style={{
              fontSize: page.hero.headline.length > 58 ? 54 : 66,
              fontWeight: 800,
              color: EYE,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
            }}
          >
            {page.hero.headline}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              padding: '7px 16px',
              borderRadius: 999,
              border: `1px solid ${CYAN}`,
              color: CYAN,
              fontSize: 17,
              fontWeight: 600,
            }}
          >
            Pre-release
          </div>
          {/* One string, not an expression beside text: satori requires an
              explicit display on any element with more than one child. */}
          <div style={{ fontSize: 20, color: MUTED }}>
            {`${SITE.license} · no telemetry · bring your own key`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
