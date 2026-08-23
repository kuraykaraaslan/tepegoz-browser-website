import type { RouteKey } from '@/libs/config/site';

/**
 * The page content model.
 *
 * Copy is authored in `tepegoz-browser/docs/website/*.md` and transcribed into
 * these structures — one file per page, per locale. Two rules from that
 * folder's README are encoded in the types rather than left to reviewer memory:
 *
 *   - `[BUILD NOTE]` blocks are instructions, never copy. They appear here only
 *     as `AssetPlaceholderBlock.note`, which renders as a build-time notice and
 *     is stripped from production output.
 *   - `status: needs-assets` pages cannot ship as "done"; the flag travels with
 *     the content so the page can say so instead of quietly pretending.
 */

/** Locale-independent nav labels, keyed by route. */
export type NavLabels = Record<RouteKey, string>;

/**
 * Inline rich text. A deliberately tiny subset — `**bold**`, `_italic_`,
 * `` `code` ``, and `[text](/href)` — rendered to real React nodes, never
 * through `dangerouslySetInnerHTML`.
 */
export type RichText = string;

export type CtaVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type Cta = {
  label: string;
  href: string;
  variant?: CtaVariant;
  /** Set for links that leave the site. */
  external?: boolean;
};

export type ProseBlock = {
  kind: 'prose';
  /** One string per paragraph. */
  body: RichText[];
};

export type CardsBlock = {
  kind: 'cards';
  columns?: 2 | 3;
  items: { title: string; body: RichText; icon?: string }[];
};

export type StepsBlock = {
  kind: 'steps';
  items: { title: string; body: RichText }[];
};

export type ListBlock = {
  kind: 'list';
  /** `check` = things that work, `deny` = things that are refused, `plain` = neutral. */
  variant?: 'check' | 'deny' | 'plain';
  items: RichText[];
};

export type TableBlock = {
  kind: 'table';
  caption?: string;
  head: string[];
  rows: RichText[][];
};

export type CalloutBlock = {
  kind: 'callout';
  tone: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  body: RichText[];
};

/**
 * The Available / Planned split.
 *
 * `features.md` is explicit that these must not merge under one heading and
 * must carry visibly different weights — "a single undifferentiated list is the
 * most common way product sites lie without lying". Modelling the states in the
 * type keeps a future edit from flattening them back together.
 */
export type CapabilityBlock = {
  kind: 'capability';
  groups: {
    state: 'available' | 'planned' | 'in-progress';
    /** Optional override; defaults to a label derived from `state`. */
    label?: string;
    items: RichText[];
  }[];
};

export type CodeBlock = {
  kind: 'code';
  language?: string;
  /** Shown above the block, e.g. "Build it". */
  label?: string;
  code: string;
};

export type CtasBlock = {
  kind: 'ctas';
  items: Cta[];
};

/**
 * A slot for an asset the page needs but does not have yet (a recording, a
 * screenshot, a signed build). Renders as an honest, labelled gap — the copy's
 * standing instruction is that a mockup must not be substituted.
 */
export type AssetPlaceholderBlock = {
  kind: 'assetPlaceholder';
  label: string;
  note: string;
};

export type Block =
  | ProseBlock
  | CardsBlock
  | StepsBlock
  | ListBlock
  | TableBlock
  | CalloutBlock
  | CapabilityBlock
  | CodeBlock
  | CtasBlock
  | AssetPlaceholderBlock;

export type Section = {
  /** Anchor id; also used as the React key. */
  id: string;
  eyebrow?: string;
  heading?: string;
  lede?: RichText;
  blocks: Block[];
};

export type PageStatus = 'ready' | 'needs-assets' | 'draft-legal';

export type Hero = {
  eyebrow?: string;
  headline: string;
  subhead: RichText;
  ctas?: Cta[];
  /** The pre-release condition, shown directly under the buttons at body weight. */
  statusNote?: { body: RichText; href?: string; linkLabel?: string };
};

export type PageContent = {
  route: string;
  /** <title> — from the source file's `Meta` section. */
  title: string;
  /** Meta description, ≤ 155 characters (enforced by `npm run content:check`). */
  description: string;
  status: PageStatus;
  hero: Hero;
  sections: Section[];
  closing?: {
    heading: string;
    body?: RichText[];
    ctas?: Cta[];
  };
};
