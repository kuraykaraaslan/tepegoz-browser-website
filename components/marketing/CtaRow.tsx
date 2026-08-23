'use client';

/*
 * A client boundary, and deliberately the deepest one that works.
 *
 * KUI's polymorphic `Button` takes the link component via `as`. Passing
 * `next/link` — a function — from a Server Component to a Client Component is
 * not allowed, so the handoff has to happen inside the client boundary. Keeping
 * that boundary on this leaf leaves every page, section and block above it a
 * Server Component.
 */

/*
 * `prefetch={false}` on every internal link is deliberate.
 *
 * Next 16.2.4's static export writes the segment-cache payload for a dynamic
 * segment at `<route>/__next.$d$locale.txt`, but the prefetcher asks for
 * `<route>/__next.$d$locale.<segment>.txt`. Every prefetch 404s. On-demand
 * navigation uses a different, correct path and works, so turning prefetch off
 * removes eight failing requests per page load and costs nothing measurable on
 * a CDN-served static page. Revisit when the export and the prefetcher agree.
 */

import Link from 'next/link';
import { Button } from '@kuraykaraaslan/kui-react/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { Cta } from '@/types/content';
import { cn } from '@/libs/utils/cn';

export function CtaRow({ items, className }: { items: Cta[]; className?: string }) {
  if (items.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {items.map((cta) =>
        cta.external ? (
          <Button
            key={cta.href + cta.label}
            as="a"
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            variant={cta.variant ?? 'primary'}
            size="lg"
            iconRight={
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3"
                aria-hidden="true"
              />
            }
          >
            {cta.label}
          </Button>
        ) : (
          <Button
            key={cta.href + cta.label}
            as={Link}
            href={cta.href}
            prefetch={false}
            variant={cta.variant ?? 'primary'}
            size="lg"
          >
            {cta.label}
          </Button>
        )
      )}
    </div>
  );
}
