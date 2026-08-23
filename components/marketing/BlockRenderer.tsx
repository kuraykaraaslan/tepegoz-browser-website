import { Badge, Card } from '@kuraykaraaslan/kui-react/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faXmark,
  faCircleInfo,
  faTriangleExclamation,
  faCircleCheck,
  faCircleExclamation,
  faFilm,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { renderRichText } from './RichText';
import { CtaRow } from './CtaRow';
import type { Block, CalloutBlock, CapabilityBlock, Item } from '@/types/content';
import { cn } from '@/libs/utils/cn';

const CALLOUT_STYLE: Record<
  CalloutBlock['tone'],
  { icon: IconDefinition; wrap: string; mark: string }
> = {
  info: {
    icon: faCircleInfo,
    wrap: 'border-info/35 bg-info-subtle',
    mark: 'text-info',
  },
  warning: {
    icon: faTriangleExclamation,
    wrap: 'border-warning/40 bg-warning-subtle',
    mark: 'text-warning',
  },
  success: {
    icon: faCircleCheck,
    wrap: 'border-success/35 bg-success-subtle',
    mark: 'text-success',
  },
  error: {
    icon: faCircleExclamation,
    wrap: 'border-error/40 bg-error-subtle',
    mark: 'text-error',
  },
};

type CapabilityState = CapabilityBlock['groups'][number]['state'];

/** Normalises the bare-string shorthand into the full item shape. */
function readItem(item: Item): { text: string; star: boolean } {
  return typeof item === 'string' ? { text: item, star: false } : { text: item.text, star: true };
}

/**
 * The differentiator marker.
 *
 * `aria-hidden` on the glyph with an adjacent screen-reader label, because a
 * lone `★` announces as "black star" — meaningless without the legend a sighted
 * reader gets from the top of the page.
 */
function StarMark() {
  return (
    <>
      <span className="sr-only">Differentiator: </span>
      <span
        className="mr-1.5 inline-block align-[0.05em] text-[0.9em] font-semibold text-star"
        aria-hidden="true"
        title="Differentiator"
      >
        ★
      </span>
    </>
  );
}

/**
 * Available is solid and confident; Planned is deliberately quieter — dashed,
 * muted, hollow marker. The visual gap is the honesty mechanism `features.md`
 * asks for, so do not equalise these treatments in a design pass.
 */
const CAPABILITY_STATE: Record<
  CapabilityState,
  { label: string; icon: IconDefinition; wrap: string; chip: string; mark: string; text: string }
> = {
  available: {
    label: 'Available',
    icon: faCheck,
    wrap: 'border-success/30 bg-success-subtle/40',
    chip: 'bg-success-subtle text-success-fg',
    mark: 'bg-success text-white',
    text: 'text-text-primary',
  },
  'in-progress': {
    label: 'In progress',
    icon: faCircleNotch,
    wrap: 'border-warning/30 bg-warning-subtle/40',
    chip: 'bg-warning-subtle text-warning-fg',
    mark: 'bg-warning text-white',
    text: 'text-text-primary',
  },
  planned: {
    label: 'Planned',
    icon: faCircleNotch,
    wrap: 'border-dashed border-border-strong bg-transparent',
    chip: 'bg-surface-overlay text-text-secondary',
    mark: 'border border-border-strong bg-transparent text-text-disabled',
    text: 'text-text-secondary',
  },
};

export function BlockRenderer({ block, idPrefix }: { block: Block; idPrefix: string }) {
  switch (block.kind) {
    case 'prose':
      return (
        <div className="space-y-4">
          {block.body.map((p, i) => (
            <p key={i} className="text-[1.0625rem] leading-[1.75] text-text-secondary">
              {renderRichText(p, `${idPrefix}-p${i}`)}
            </p>
          ))}
        </div>
      );

    case 'cards':
      return (
        <div
          className={cn(
            'grid gap-5',
            block.columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
          )}
        >
          {block.items.map((item, i) => (
            <Card key={i} variant="outline" className="h-full">
              <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-secondary">
                {renderRichText(item.body, `${idPrefix}-c${i}`)}
              </p>
            </Card>
          ))}
        </div>
      );

    case 'steps':
      return (
        <ol className="space-y-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-subtle font-mono text-sm font-bold text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-secondary">
                  {renderRichText(item.body, `${idPrefix}-s${i}`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case 'list': {
      const variant = block.variant ?? 'plain';
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              {variant === 'plain' ? (
                <span
                  className="mt-[0.6875rem] h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                  aria-hidden="true"
                />
              ) : (
                <span
                  className={cn(
                    'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                    variant === 'check'
                      ? 'bg-success-subtle text-success'
                      : 'bg-error-subtle text-error'
                  )}
                  aria-hidden="true"
                >
                  <FontAwesomeIcon
                    icon={variant === 'check' ? faCheck : faXmark}
                    className="h-3 w-3"
                  />
                </span>
              )}
              <span className="text-[1.0625rem] leading-[1.7] text-text-secondary">
                {readItem(item).star && <StarMark />}
                {renderRichText(readItem(item).text, `${idPrefix}-l${i}`)}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full border-collapse text-left text-[0.9375rem]">
            {block.caption && <caption className="sr-only">{block.caption}</caption>}
            <thead>
              <tr className="bg-surface-raised">
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="whitespace-nowrap border-b border-border px-4 py-3 text-sm font-semibold text-text-primary"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-border last:border-b-0">
                  {row.map((cell, c) => (
                    <td key={c} className="px-4 py-3 align-top text-text-secondary">
                      {renderRichText(cell, `${idPrefix}-t${r}-${c}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout': {
      const style = CALLOUT_STYLE[block.tone];
      return (
        <div className={cn('flex gap-3.5 rounded-xl border p-5', style.wrap)}>
          <FontAwesomeIcon
            icon={style.icon}
            className={cn('mt-0.5 h-4 w-4 shrink-0', style.mark)}
            aria-hidden="true"
          />
          <div className="min-w-0 space-y-2">
            {block.title && (
              <p className="text-[0.9375rem] font-semibold text-text-primary">{block.title}</p>
            )}
            {block.body.map((p, i) => (
              <p key={i} className="text-[0.9375rem] leading-relaxed text-text-secondary">
                {renderRichText(p, `${idPrefix}-co${i}`)}
              </p>
            ))}
          </div>
        </div>
      );
    }

    case 'capability':
      return (
        <div
          className={cn(
            'grid items-start gap-5',
            // A lone group (e.g. a list with nothing planned against it) would
            // otherwise sit in a half-width column with dead space beside it.
            block.groups.length > 1 && 'lg:grid-cols-2'
          )}
        >
          {block.groups.map((group, g) => {
            const style = CAPABILITY_STATE[group.state];
            return (
              <div key={g} className={cn('rounded-xl border p-5 sm:p-6', style.wrap)}>
                <p
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em]',
                    style.chip
                  )}
                >
                  {group.label ?? style.label}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className={cn(
                          'mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                          style.mark
                        )}
                        aria-hidden="true"
                      >
                        {group.state === 'available' && (
                          <FontAwesomeIcon icon={style.icon} className="h-2 w-2" />
                        )}
                      </span>
                      <span className={cn('text-[0.9375rem] leading-relaxed', style.text)}>
                        {readItem(item).star && <StarMark />}
                        {renderRichText(readItem(item).text, `${idPrefix}-cap${g}-${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );

    case 'figure':
      return (
        <figure className="space-y-3">
          {/* Screenshots of a light-themed desktop app would glare on the dark
              site, so they sit on their own light plate in both themes rather
              than being inverted — a recoloured screenshot is not a screenshot. */}
          <div className="overflow-hidden rounded-xl border border-border bg-[#F4F7FA] p-2 sm:p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full rounded-lg border border-black/10"
            />
          </div>
          {block.caption && (
            <figcaption className="text-sm leading-relaxed text-text-secondary">
              {renderRichText(block.caption, `${idPrefix}-fig`)}
            </figcaption>
          )}
        </figure>
      );

    case 'code':
      return (
        <div className="overflow-hidden rounded-xl border border-border bg-surface-sunken">
          {block.label && (
            <p className="border-b border-border px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-secondary">
              {block.label}
            </p>
          )}
          <pre className="overflow-x-auto p-4 text-[0.8125rem] leading-relaxed text-text-primary sm:p-5">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case 'ctas':
      return <CtaRow items={block.items} />;

    case 'assetPlaceholder':
      return (
        <figure className="rounded-2xl border border-dashed border-border-strong bg-surface-raised p-8 text-center sm:p-12">
          <FontAwesomeIcon
            icon={faFilm}
            className="h-6 w-6 text-text-secondary"
            aria-hidden="true"
          />
          <figcaption className="mt-4 space-y-2">
            <Badge variant="warning" size="sm">
              Asset pending
            </Badge>
            <p className="text-base font-semibold text-text-primary">{block.label}</p>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-text-secondary">
              {block.note}
            </p>
          </figcaption>
        </figure>
      );

    default: {
      // Exhaustiveness guard — a new block kind must be handled here.
      const never: never = block;
      return never;
    }
  }
}

