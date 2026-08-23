import { Hero } from './Hero';
import { StatusBanner } from './StatusBanner';
import { Section, Container } from './Section';
import { CtaRow } from './CtaRow';
import { renderRichText } from './RichText';
import type { PageContent } from '@/types/content';

export function MarketingPage({ page }: { page: PageContent }) {
  return (
    <article>
      <StatusBanner status={page.status} />
      <Hero hero={page.hero} />

      {page.sections.map((section, i) => (
        <Section key={section.id} section={section} index={i} />
      ))}

      {page.closing && (
        <section className="border-t border-border bg-surface-raised py-16 sm:py-20">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-balance text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                {renderRichText(page.closing.heading, 'closing-h')}
              </h2>
              {page.closing.body?.map((p, i) => (
                <p key={i} className="mt-4 text-[1.0625rem] leading-[1.75] text-text-secondary">
                  {renderRichText(p, `closing-p${i}`)}
                </p>
              ))}
              {page.closing.ctas && <CtaRow items={page.closing.ctas} className="mt-8" />}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
