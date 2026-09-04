import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { CtaRow } from './CtaRow';
import { Container } from './Section';
import { renderRichText } from './RichText';
import { MotionFigure } from './MotionFigure';
import { MEDIA } from '@/modules/marketing/media/manifest.generated';
import { cn } from '@/libs/utils/cn';
import type { Hero as HeroData, HeroMedia } from '@/types/content';

/**
 * Page hero.
 *
 * The status note is rendered at body weight with a real border, not as small
 * grey print. The source copy is explicit about this: "This line is not a
 * disclaimer to be styled into invisibility… Give it the same weight as body
 * text." Reviewers change hero styling often; this comment is the reason not to.
 */
export function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Brand field: a soft cyan bloom off the top-left, clipped by the section. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_18%_0%,var(--primary-subtle)_0%,transparent_62%)]"
        aria-hidden="true"
      />

      <Container
        width={hero.media ? 'wide' : 'default'}
        className="py-16 sm:py-20 lg:py-24"
      >
        <div
          className={cn(
            hero.media && 'lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14'
          )}
        >
        <div className="max-w-2xl">
          {hero.eyebrow && (
            <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
              {hero.eyebrow}
            </p>
          )}

          <h1 className="text-balance text-[2.125rem] font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[3.375rem]">
            {renderRichText(hero.headline, 'hero-h')}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-lg leading-[1.7] text-text-secondary sm:text-xl">
            {renderRichText(hero.subhead, 'hero-sub')}
          </p>

          {hero.ctas && hero.ctas.length > 0 && <CtaRow items={hero.ctas} className="mt-8" />}

          {hero.statusNote && (
            <div className="mt-8 flex max-w-2xl gap-3.5 rounded-xl border border-warning/40 bg-warning-subtle p-5">
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className="mt-1 h-4 w-4 shrink-0 text-warning"
                aria-hidden="true"
              />
              <p className="text-[1.0625rem] leading-[1.7] text-text-secondary">
                {renderRichText(hero.statusNote.body, 'hero-status')}{' '}
                {hero.statusNote.href && hero.statusNote.linkLabel && (
                  <Link
                    href={hero.statusNote.href}
                    prefetch={false}
                    className="inline-flex items-center gap-1 font-semibold text-primary underline decoration-primary/35 underline-offset-[3px] hover:decoration-primary"
                  >
                    {hero.statusNote.linkLabel}
                    <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
                  </Link>
                )}
              </p>
            </div>
          )}
        </div>

        {hero.media && (
          <div className="mt-12 lg:mt-0">
            <HeroMediaFigure media={hero.media} />
          </div>
        )}
        </div>
      </Container>
    </section>
  );
}

/**
 * The hero's product shot — a still, or a recording.
 *
 * A still is eager and high priority: it is above the fold on most screens, and
 * lazy-loading the largest element in the viewport is how a hero ends up
 * shifting after paint.
 *
 * A recording gets the opposite treatment, and the inversion is the point. The
 * home page's hero was a 24-second GIF that started looping the moment the page
 * painted, with no pause, no stop and nothing `prefers-reduced-motion` could
 * reach — the site's most prominent element was also its one live WCAG 2.2.2
 * failure. `MotionFigure` loads the animated bytes only when someone asks for
 * them, so the hero now paints a still (or an honest labelled gap where a still
 * has not been captured) and moves on request.
 */
function HeroMediaFigure({ media }: { media: HeroMedia }) {
  if (media.kind === 'motion') {
    return <MotionFigure block={media} idPrefix="hero" priority />;
  }

  const asset = MEDIA[media.asset];

  return (
    <figure>
      {/* A light-themed desktop app on a dark site: the shot keeps its own
          light plate in both themes rather than being inverted. */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#F4F7FA] p-2 shadow-sm sm:p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={media.alt}
          width={asset.width}
          height={asset.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full rounded-xl border border-black/10"
        />
      </div>
      {media.caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-text-secondary">
          {renderRichText(media.caption, 'hero-media')}
        </figcaption>
      )}
    </figure>
  );
}
