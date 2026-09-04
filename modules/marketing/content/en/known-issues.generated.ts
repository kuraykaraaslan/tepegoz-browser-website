/**
 * MACHINE-GENERATED — do not edit by hand. Your changes will be overwritten.
 *
 *   node scripts/known-issues-sync.mjs <tepegoz-browser checkout>
 *
 * Source: tepegoz-browser/docs/known-issues.md
 * @sourceSha256 47808ea0 (2026-09-02)
 *
 * The product repository's known-issues table, verbatim apart from two link
 * rewrites the generator reports as it makes them (relative doc links become
 * GitHub blob URLs; a link label that is entirely a code span loses its
 * backticks, because `RichText` cannot render formatting inside a label).
 *
 * Nothing here is editorial. Severity and workaround wording are the product
 * repo's, not the marketing site's, and that is the point: the page's argument
 * is that its claims are checkable, and a defect list rewritten for the website
 * is not the defect list. Copy that *frames* this table — the section heading,
 * the lede, the link to the full document — lives in `roadmap.ts`, where it
 * translates with the page.
 *
 * English only. These are engineering statements written in English upstream;
 * a Turkish `content/tr/` would need a translated table, which is a human call
 * and not something this generator can make.
 *
 * Staleness is reported by `node scripts/sources-check.mjs <checkout>`, which
 * reads the stamp above. Do not hand-edit that stamp — re-run this script.
 */

/** One row of the table. Cell text is inline rich text — bold, code spans, links. */
export type KnownIssue = {
  readonly issue: string;
  readonly severity: string;
  readonly workaround: string;
};

/** The column headings, spelled as the source document spells them. */
export const KNOWN_ISSUES_HEAD = ['Issue', 'Severity', 'Status / Workaround'] as const;

export const KNOWN_ISSUES = [
  {
    "issue": "`turbo` 2.10.1 crashes on Windows (`STATUS_DLL_NOT_FOUND` / 0xC0000135)",
    "severity": "Medium",
    "workaround": "**Now on 2.9.14**, which clears two advisories and was exercised on Windows through a full `typecheck lint test build` run (243/243). 2.10.1 itself is still unverified — do not jump to it without re-testing on Windows."
  },
  {
    "issue": "`ELECTRON_RUN_AS_NODE=1` in some shells makes Electron run as Node (no GUI)",
    "severity": "High",
    "workaround": "`pnpm dev` uses `apps/desktop/scripts/dev.mjs`, which deletes the var before launching."
  },
  {
    "issue": "Dev CSP is relaxed (no meta CSP) for Vite/React-Refresh inline preamble",
    "severity": "Medium",
    "workaround": "**TODO (Phase 1a):** set strict CSP via session response headers in main (dev-relaxed, prod-strict)."
  },
  {
    "issue": "No independent security audit",
    "severity": "High",
    "workaround": "The threat model is published and the architecture is readable, but no outside party has reviewed it. Needs an external reviewer and the budget for one."
  },
  {
    "issue": "`sqlite-vec` is brute-force (no ANN index)",
    "severity": "Medium",
    "workaround": "Fine at small scale; per-task GB-scale memory switches to a real ANN index above a measured threshold (Phase 1b)."
  },
  {
    "issue": "Chrome extension (MV3) support",
    "severity": "Low (now)",
    "workaround": "Partial, planned for Phase 3 (limited allowlist); full parity is a Phase 4 decision. Not promised."
  },
  {
    "issue": "No export path for history, downloads, macros, tasks, agent memory/skills, trust profiles, or preferences",
    "severity": "Medium",
    "workaround": "Bookmarks and stored logins export in the formats other browsers read; the rest can only be moved by copying the whole profile folder, which does NOT carry encrypted data to another machine. See [data-and-backup.md](https://github.com/kuraykaraaslan/tepegoz-browser/blob/main/docs/data-and-backup.md)."
  }
] as const satisfies readonly KnownIssue[];

/** Field order for a table row, so the columns cannot drift from the headings. */
export const KNOWN_ISSUE_COLUMNS = ['issue', 'severity', 'workaround'] as const satisfies readonly (keyof KnownIssue)[];
