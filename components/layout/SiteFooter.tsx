import Link from 'next/link';
import { Badge } from '@kuraykaraaslan/kui-react/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BrandLockup } from '@/components/brand/BrandLockup';
import { FOOTER_NAV, ROUTES, SITE } from '@/libs/config/site';
import { localePath, type Locale } from '@/libs/i18n/locales';
import type { NavLabels } from '@/types/content';

export function SiteFooter({ locale, labels }: { locale: Locale; labels: NavLabels }) {
  return (
    <footer className="border-t border-border bg-surface-raised">
      <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_repeat(4,minmax(0,1fr))]">
          <div>
            <BrandLockup locale={locale} mark="full" showTagline />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {SITE.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge variant="warning" size="sm">
                Pre-release
              </Badge>
              <Badge variant="neutral" size="sm">
                {SITE.license}
              </Badge>
            </div>
          </div>

          {FOOTER_NAV.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-secondary">
                {group.heading}
              </h2>
              <ul className="mt-3.5 space-y-2.5">
                {group.items.map((key) => (
                  <li key={key}>
                    <Link
                      href={localePath(ROUTES[key], locale)}
                      prefetch={false}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {labels[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-text-secondary">
            {`© ${new Date().getFullYear()} ${SITE.name}. Licensed under ${SITE.license}.`}
            <br className="sm:hidden" />
            <span className="sm:ml-1">
              This site loads no third-party scripts, sets no cookies, and runs no analytics.
            </span>
          </p>

          <a
            href={SITE.repo}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex shrink-0 items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-overlay hover:text-text-primary"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
