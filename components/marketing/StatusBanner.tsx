import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { Container } from './Section';
import type { PageStatus } from '@/types/content';

/**
 * Surfaces a page's publication status to the reader.
 *
 * `docs/website/README.md` defines three statuses and treats two of them as
 * shipping blockers. Rather than trusting a reviewer to remember which page is
 * which, the status travels with the content and renders itself:
 *
 *   - `draft-legal` — a non-lawyer draft that must be reviewed before it is
 *     relied on. It also carries unfilled `{{PLACEHOLDER}}` tokens, which the
 *     rich-text renderer highlights.
 *   - `needs-assets` — copy is final but a required asset does not exist. Shown
 *     only in development; a visitor does not need to hear about a missing
 *     screenshot, but the person building the page does.
 *   - `ready` — nothing to say.
 */
export function StatusBanner({ status }: { status: PageStatus }) {
  if (status === 'ready') return null;

  if (status === 'needs-assets') {
    if (process.env.NODE_ENV === 'production') return null;
    return (
      <div className="border-b border-border bg-surface-overlay">
        <Container className="flex items-center gap-3 py-2.5">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="h-3.5 w-3.5 shrink-0 text-warning"
            aria-hidden="true"
          />
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-text-secondary">
            Dev only · status: needs-assets — this page ships when its assets exist
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="border-b border-warning/40 bg-warning-subtle">
      <Container className="flex gap-3.5 py-4">
        <FontAwesomeIcon
          icon={faScaleBalanced}
          className="mt-0.5 h-4 w-4 shrink-0 text-warning"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-semibold text-text-primary">
            Draft — not legal advice, and not yet reviewed.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">
            This document was drafted by a non-lawyer and is published here for review, not reliance.
            Highlighted <code className="font-mono text-[0.9em]">{'{{PLACEHOLDERS}}'}</code> are
            unfilled. Do not treat any of it as final.
          </p>
        </div>
      </Container>
    </div>
  );
}
