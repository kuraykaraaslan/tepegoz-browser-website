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
  faFlask,
  faSnowflake,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { renderRichText } from './RichText';
import { CtaRow } from './CtaRow';
import { MotionFigure } from './MotionFigure';
import { MEDIA } from '@/modules/marketing/media/manifest.generated';
import type { Block, CalloutBlock, CapabilityState, GalleryBlock, Item } from '@/types/content';
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
 * The two marked list variants, and — the part that matters — the words that
 * carry their polarity to a reader who never sees the glyph.
 *
 * A sighted reader gets the polarity twice over: a green tick or a red cross,
 * and the shape of the glyph itself. A screen-reader user got neither, because
 * the marker span is `aria-hidden` and colour is not announced. So a `deny`
 * list — the site's way of stating what the product *refuses* to do — was read
 * out identically to a `check` list, i.e. as a list of things it does. That is
 * not a styling nit; it inverts the claim.
 *
 * The fix is StarMark's: an `sr-only` label next to the `aria-hidden` glyph.
 *
 * The wording deviates from StarMark's on purpose, and the reason is worth
 * writing down because the obvious label is the wrong one. StarMark names the
 * *meaning* ("Differentiator") rather than the glyph, since "black star" is an
 * arbitrary Unicode name that carries nothing. A tick and a cross are not
 * arbitrary — but a meaning-gloss here cannot be written, because the four
 * `deny` lists on this site are four different rhetorical shapes:
 *
 *   - `/privacy` — limitations stated affirmatively ("Your AI provider sees
 *     what you send them").
 *   - `/how-it-works` — guardrails already phrased as negations ("It cannot
 *     approve its own permissions").
 *   - `/download` — absences ("No independent security audit has been
 *     performed").
 *   - `/legal/privacy` — commitments that happen to be absences ("No
 *     third-party analytics").
 *
 * A prefix of "No: " — the obvious polarity word — is a double negative on
 * three of those, and on the first it can be heard as *denying* the limitation,
 * which re-inverts the very claim this label exists to protect. "Limit: " is
 * wrong for the fourth; "Refused: " is wrong for the first and third. There is
 * no gloss that is true of all of them, and a label that is false on one page
 * is worse than the silence it replaced.
 *
 * So these name the mark. That is honest — it hands a screen-reader user the
 * same signal the glyph hands a sighted one, "this item sits in the crossed
 * column", and lets the item's own words carry the rest, exactly as they do for
 * everyone else — and it stays true for any list a future page writes.
 */
const LIST_MARK: Record<'check' | 'deny', { icon: IconDefinition; srLabel: string; mark: string }> =
  {
    check: { icon: faCheck, srLabel: 'Check mark: ', mark: 'bg-success-subtle text-success' },
    deny: { icon: faXmark, srLabel: 'Cross mark: ', mark: 'bg-error-subtle text-error' },
  };

/**
 * Available is solid and confident; Planned is deliberately quieter — dashed,
 * muted, hollow marker. The visual gap is the honesty mechanism `features.md`
 * asks for, so do not equalise these treatments in a design pass.
 *
 * The two states added later are the ones `phases/README.md` needed and this
 * grammar could not say, and each is deliberately *not* a neighbour of the state
 * a reader would otherwise round it to:
 *
 *   - `measurement-owed` sits on a solid border, because the code really did
 *     land — but in `info` rather than `success`, with a hollow ringed marker
 *     and a flask, so it reads as "built, unproven" and never as a tick. If this
 *     ever starts looking like Available, the honesty is gone.
 *   - `frozen` is neutral and dimmed with a solid border: a deliberate stop is
 *     not a warning (nothing is wrong) and not a plan (nothing is coming). The
 *     solid border is what separates it from Planned's dashed one.
 *
 * `icon` is nullable because an empty marker is itself a treatment: In progress
 * and Planned have always shown a hollow bullet, and giving them a glyph now
 * would quietly promote them. Nothing here relies on colour alone — every group
 * is titled by its chip, the three states that carry a marker glyph carry three
 * distinct ones (tick, flask, snowflake), and the two that carry none are still
 * told apart without colour by a filled marker on a solid border (In progress)
 * versus a hollow ringed one on a dashed border (Planned).
 */
const CAPABILITY_STATE: Record<
  CapabilityState,
  {
    label: string;
    /** The marker glyph, or `null` for states whose marker is deliberately empty. */
    icon: IconDefinition | null;
    wrap: string;
    chip: string;
    mark: string;
    text: string;
  }
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
    icon: null,
    wrap: 'border-warning/30 bg-warning-subtle/40',
    chip: 'bg-warning-subtle text-warning-fg',
    mark: 'bg-warning text-white',
    text: 'text-text-primary',
  },
  'measurement-owed': {
    label: 'Built, not yet measured',
    icon: faFlask,
    wrap: 'border-info/30 bg-info-subtle/40',
    chip: 'bg-info-subtle text-info-fg',
    mark: 'border border-info bg-transparent text-info',
    text: 'text-text-primary',
  },
  planned: {
    label: 'Planned',
    icon: null,
    wrap: 'border-dashed border-border-strong bg-transparent',
    chip: 'bg-surface-overlay text-text-secondary',
    mark: 'border border-border-strong bg-transparent text-text-disabled',
    text: 'text-text-secondary',
  },
  frozen: {
    label: 'Frozen',
    icon: faSnowflake,
    wrap: 'border-border-strong bg-surface-raised',
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
                // A plain bullet asserts nothing, so it gets no spoken label —
                // the `<ul>` already tells a screen reader this is a list item.
                <span
                  className="mt-[0.6875rem] h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong"
                  aria-hidden="true"
                />
              ) : (
                <>
                  {/* Placed before the glyph so the polarity is heard before the
                      item, exactly as the mark is seen before the text. It is a
                      `sr-only` sibling rather than a label inside the marker
                      because that marker is `aria-hidden`, which would swallow
                      any text nested in it. `sr-only` is absolutely positioned,
                      so it is not a flex item and the row's layout and gap are
                      byte-for-byte what they were. */}
                  <span className="sr-only">{LIST_MARK[variant].srLabel}</span>
                  <span
                    className={cn(
                      'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                      LIST_MARK[variant].mark
                    )}
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={LIST_MARK[variant].icon} className="h-3 w-3" />
                  </span>
                </>
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
                        {style.icon && (
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

    case 'figure': {
      // Every fact about the file — path, intrinsic size — comes from the
      // ledger, measured from the bytes. The block supplies only the two things
      // a machine cannot know: what the image conveys, and what to say about it.
      const asset = MEDIA[block.asset];
      return (
        <figure className="space-y-3">
          {/* Screenshots of a light-themed desktop app would glare on the dark
              site, so they sit on their own light plate in both themes rather
              than being inverted — a recoloured screenshot is not a screenshot. */}
          <div className="overflow-hidden rounded-xl border border-border bg-[#F4F7FA] p-2 sm:p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset.src}
              alt={block.alt}
              width={asset.width}
              height={asset.height}
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
    }

    case 'motion':
      return <MotionFigure block={block} idPrefix={idPrefix} />;

    case 'gallery':
      return <Gallery block={block} idPrefix={idPrefix} />;

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

/**
 * A set of shots that may be incomplete, and says so.
 *
 * The reason this is not just a loop of figures: `extensions.ts` promises nine
 * extension panels, and for as long as only some of them exist the page has to
 * be able to show four *and* be visibly four-of-nine. A grid that silently ends
 * after the fourth tile looks finished, and looking finished while being
 * incomplete is the failure mode the whole site is arguing against.
 *
 * So the shortfall is rendered — in `assetPlaceholder`'s visual language, since
 * a reader has already learned what a dashed badged panel means here — and it
 * spans the remaining columns so the gap is proportional to what is missing.
 */
function Gallery({ block, idPrefix }: { block: GalleryBlock; idPrefix: string }) {
  const columns = block.columns ?? 3;
  const missing = block.expected ? Math.max(0, block.expected - block.items.length) : 0;

  return (
    <div className="space-y-4">
      <div
        className={cn(
          'grid gap-4',
          columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
        )}
      >
        {block.items.map((item, i) => {
          const asset = MEDIA[item.asset];
          return (
            <figure key={i} className="space-y-2">
              <div className="overflow-hidden rounded-xl border border-border bg-[#F4F7FA] p-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset.src}
                  alt={item.alt}
                  width={asset.width}
                  height={asset.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-lg border border-black/10"
                />
              </div>
              {item.caption && (
                <figcaption className="text-[0.8125rem] leading-relaxed text-text-secondary">
                  {renderRichText(item.caption, `${idPrefix}-gal${i}`)}
                </figcaption>
              )}
            </figure>
          );
        })}

        {missing > 0 && (
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-strong bg-surface-raised p-6 text-center',
              // One missing shot occupies one cell; several span the row, so the
              // gap is as big as the shortfall rather than a single polite tile.
              missing > 1 && (columns === 2 ? 'sm:col-span-2' : 'sm:col-span-2 lg:col-span-3')
            )}
          >
            <FontAwesomeIcon
              icon={faImage}
              className="h-5 w-5 text-text-secondary"
              aria-hidden="true"
            />
            <Badge variant="warning" size="sm">
              {block.items.length} of {block.expected} captured
            </Badge>
            {block.pendingLabel && (
              <p className="text-sm font-semibold text-text-primary">{block.pendingLabel}</p>
            )}
            {block.pendingNote && (
              <p className="mx-auto max-w-md text-[0.8125rem] leading-relaxed text-text-secondary">
                {block.pendingNote}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

