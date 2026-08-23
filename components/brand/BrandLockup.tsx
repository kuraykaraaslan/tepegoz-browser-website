import Link from 'next/link';
import { TepegozMark } from './TepegozMark';
import { SITE } from '@/libs/config/site';
import { localePath } from '@/libs/i18n/locales';
import type { Locale } from '@/libs/i18n/locales';
import { cn } from '@/libs/utils/cn';

type BrandLockupProps = {
  locale: Locale;
  /**
   * `favicon` (the shield) holds up at header size; the `full` lockup carries
   * browser chrome — three dots and an address arrow — that turns to mush below
   * about 40px. Default to the shield and opt into the full mark when there is
   * room for it.
   */
  mark?: 'full' | 'favicon';
  /**
   * Drops the wordmark below `sm`, leaving the mark alone.
   *
   * At 390px the header has to fit a hamburger, the lockup, the theme switcher
   * and the Download CTA. Something has to go, and the wordmark is the only one
   * of those that is not a control — the mark still reads as Tepegöz and still
   * links home.
   */
  compact?: boolean;
  /** Renders as plain text instead of a link — for the footer, or the home page itself. */
  asLink?: boolean;
  showTagline?: boolean;
  className?: string;
};

export function BrandLockup({
  locale,
  mark = 'favicon',
  compact = false,
  asLink = true,
  showTagline = false,
  className,
}: BrandLockupProps) {
  const inner = (
    <span className={cn('flex items-center gap-2.5', className)}>
      <TepegozMark variant={mark} className="w-7 shrink-0" />
      <span className={cn('flex-col leading-none', compact ? 'hidden sm:flex' : 'flex')}>
        <span className="text-[1.0625rem] font-extrabold tracking-tight text-text-primary">
          {SITE.name}
        </span>
        {showTagline && (
          <span className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-text-secondary">
            {SITE.tagline}
          </span>
        )}
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link
      href={localePath('/', locale)}
      prefetch={false}
      className="rounded-md focus-visible:outline-none"
      aria-label={`${SITE.name} — home`}
    >
      {inner}
    </Link>
  );
}
