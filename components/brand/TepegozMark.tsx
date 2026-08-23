import { cn } from '@/libs/utils/cn';

/**
 * The Tepegöz brand mark, transcribed verbatim from
 * `tepegoz-browser/docs/brand/tepegoz-logo-standalone.html` (brand v1.0 — 2026).
 *
 * Colours are driven by `--navy` / `--cyan` / `--eye` exactly as the brand sheet
 * defines them, so a caller can recolour the mark (e.g. monochrome on a dark
 * field) without a second copy of the paths.
 *
 * Rendered inline rather than as an <img> so it inherits the theme and costs no
 * extra request — the hero must not shift while a logo loads.
 */

type MarkProps = {
  /** `full` = browser-chrome lockup, `favicon` = compact shield. */
  variant?: 'full' | 'favicon';
  className?: string;
  /** Decorative next to a wordmark; give a title when it stands alone. */
  title?: string;
};

export function TepegozMark({ variant = 'full', className, title }: MarkProps) {
  const clipId = variant === 'full' ? 'tg-eye-clip' : 'tg-fav-clip';

  return (
    <svg
      viewBox="0 0 240 276"
      className={cn('block h-auto', className)}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          {variant === 'full' ? (
            <path d="M40 162 Q120 70 200 162 Q120 254 40 162 Z" />
          ) : (
            <path d="M48 162 Q120 98 192 162 Q120 224 48 162 Z" />
          )}
        </clipPath>
      </defs>

      {variant === 'full' ? (
        <>
          <rect x="28" y="26" width="84" height="46" rx="13" fill="var(--navy, #0C2135)" />
          <circle cx="50" cy="49" r="7" fill="var(--cyan, #06AEC4)" />
          <circle cx="72" cy="49" r="7" fill="var(--cyan, #06AEC4)" />
          <circle cx="94" cy="49" r="7" fill="var(--cyan, #06AEC4)" />
          <rect x="128" y="24" width="84" height="48" rx="13" fill="var(--cyan, #06AEC4)" />
          <path d="M150 45 H172 V40 L190 49 L172 58 V53 H150 Z" fill="var(--eye, #FFFFFF)" />
          <path
            d="M28 108 Q120 90 212 108 L212 150 Q212 214 120 256 Q28 214 28 150 Z"
            fill="var(--navy, #0C2135)"
          />
          <path d="M40 162 Q120 70 200 162 Q120 254 40 162 Z" fill="var(--eye, #FFFFFF)" />
          <g clipPath={`url(#${clipId})`}>
            <circle cx="120" cy="162" r="50" fill="var(--cyan, #06AEC4)" />
            <circle cx="120" cy="162" r="23" fill="var(--navy, #0C2135)" />
            <circle cx="131" cy="151" r="8.5" fill="var(--eye, #FFFFFF)" />
          </g>
          <path
            d="M120 210 L120 250"
            fill="none"
            stroke="var(--eye, #FFFFFF)"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <path
            d="M30 70 Q30 40 60 40 H180 Q210 40 210 70 V150 Q210 214 120 256 Q30 214 30 150 Z"
            fill="var(--navy, #0C2135)"
          />
          <path d="M48 162 Q120 98 192 162 Q120 224 48 162 Z" fill="var(--eye, #FFFFFF)" />
          <g clipPath={`url(#${clipId})`}>
            <circle cx="120" cy="162" r="48" fill="var(--cyan, #06AEC4)" />
            <circle cx="120" cy="162" r="22" fill="var(--navy, #0C2135)" />
            <circle cx="131" cy="152" r="8" fill="var(--eye, #FFFFFF)" />
          </g>
        </>
      )}
    </svg>
  );
}
