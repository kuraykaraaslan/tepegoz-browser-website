import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';

/**
 * Renders the inline subset used by page copy: `**bold**`, `_italic_`,
 * `` `code` ``, and `[text](/href)`.
 *
 * Deliberately a parser producing React nodes rather than an HTML string —
 * copy is trusted, but a marketing site for a browser that treats page content
 * as data should not be the place where `dangerouslySetInnerHTML` shows up.
 */

const TOKEN = /(\*\*[^*]+\*\*|_[^_]+_|`[^`]+`|\[[^\]]+\]\([^)]+\)|\{\{[A-Z0-9_]+\}\})/g;

export function renderRichText(text: string, keyPrefix = 'rt'): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (!part) return null;

    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={key} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith('_') && part.endsWith('_') && part.length > 2) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    // An unfilled placeholder from a draft-legal source document. Rendered
    // loudly rather than silently: `legal-*.md` requires every {{PLACEHOLDER}}
    // to be filled before publication, so an invisible one is a shipping bug.
    if (part.startsWith('{{') && part.endsWith('}}')) {
      return (
        <mark
          key={key}
          className="rounded border border-warning/50 bg-warning-subtle px-1.5 py-0.5 font-mono text-[0.8em] font-semibold text-warning-fg"
          title="Unfilled placeholder — must be completed before publication"
        >
          {part}
        </mark>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          className="rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.85em] text-text-primary"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link as unknown as [string, string, string];
      const external = /^https?:\/\//.test(href);
      const className =
        'font-medium text-primary underline decoration-primary/35 underline-offset-[3px] transition-colors hover:decoration-primary';

      return external ? (
        <a key={key} href={href} className={className} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      ) : (
        <Link key={key} href={href} prefetch={false} className={className}>
          {label}
        </Link>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

export function RichText({ children }: { children: string }) {
  return <>{renderRichText(children)}</>;
}
