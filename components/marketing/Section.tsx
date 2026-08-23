import { BlockRenderer } from './BlockRenderer';
import { renderRichText } from './RichText';
import type { Section as SectionData } from '@/types/content';
import { cn } from '@/libs/utils/cn';

/** Consistent horizontal rhythm for every page. */
export function Container({
  children,
  className,
  width = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  width?: 'default' | 'prose';
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        width === 'prose' ? 'max-w-3xl' : 'max-w-5xl',
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({ section, index }: { section: SectionData; index: number }) {
  const headingId = `${section.id}-heading`;

  return (
    <section
      id={section.id}
      aria-labelledby={section.heading ? headingId : undefined}
      className="border-t border-border py-14 first:border-t-0 sm:py-16"
    >
      <Container>
        {(section.eyebrow || section.heading || section.lede) && (
          <header className="mb-8 max-w-3xl">
            {section.eyebrow && (
              <p className="mb-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
                {section.eyebrow}
              </p>
            )}
            {section.heading && (
              <h2
                id={headingId}
                className="text-balance text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl"
              >
                {renderRichText(section.heading, `${section.id}-h`)}
              </h2>
            )}
            {section.lede && (
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {renderRichText(section.lede, `${section.id}-lede`)}
              </p>
            )}
          </header>
        )}

        <div className="space-y-8">
          {section.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} idPrefix={`s${index}-b${i}`} />
          ))}
        </div>
      </Container>
    </section>
  );
}
