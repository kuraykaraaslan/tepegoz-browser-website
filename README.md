# tepegoz-website

The public marketing site for [Tepegöz](https://github.com/kuraykaraaslan/tepegoz-browser) — a fully
static Next.js export, deployed on Vercel, built from KUI React components.

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # kui imports + media ledger + alt-text stamps + content rules + source drift + types + lint
npm run build    # runs `check`, then `next build` — writes out/
```

Two more commands need a `tepegoz-browser` checkout beside this one. Neither is in `check`, and the
reason is that both of them **write**: a generator that runs unattended inside a build is a generator
whose output nobody read.

```bash
npm run media:ingest      ../tepegoz-browser   # receive screenshots and recordings (dry run by default)
npm run known-issues:sync ../tepegoz-browser   # regenerate the known-issues table
```

One more writes, and needs nothing but this repo — it recomputes the `describes` stamps that bind
each image to the alt text written about it, printing every image and its sentence as it goes:

```bash
npm run media:stamps      # verify every stamp, change nothing (this one IS in `check`)
npm run media:restamp     # recompute them, printing each asset, its file and its alt text
```

`npm run sources:check ../tepegoz-browser` also wants that checkout, but it only reads, and it is in
`check` — see below for why the previous reason for excluding it was wrong.

## How the gates run

Every check in this repo exists to make one class of defect unexpressible: a fact about a file typed
by a human into a place far from the file. That is worth nothing if the checks only run when somebody
remembers to type them, and for a while that was the literal situation — `build` was a bare
`next build`, `vercel.json` declared no `buildCommand`, and there was no CI at all. A reviewer proved
it by swapping one screenshot's bytes for another's, leaving the ledger stale, and watching
`next build` exit 0: the wrong image shipped under the wrong alt text at the wrong declared
dimensions, which is precisely the defect this repo was rebuilt to prevent.

So the gate lives in **exactly one place**, `package.json`'s `build` script:

```json
"build": "npm run check && next build"
```

and everything else points at that one script rather than restating it:

| Where | Command | Runs the gate because |
|---|---|---|
| A developer's machine | `npm run build` | it *is* the script |
| Vercel | `npm run build` | `vercel.json` pins `"buildCommand": "npm run build"` |
| GitHub Actions | `npm run check` then `npm run build` | `.github/workflows/ci.yml`, on push and pull request — **armed, never yet run** |

**Two of those three rows have run; the third is a promise.** Saying otherwise here would be this
section committing the exact defect it exists to narrate — a fact about a file, typed by a human into
a place far from the file. `.github/` has never been in a commit, on any branch, and the branch it
currently sits in has never been pushed:

```
$ git ls-files .github               # tracked files under .github — none
$ git log --all --oneline -- .github # commits touching it — none
$ git status --short .github
?? .github/
$ git rev-parse --abbrev-ref '@{upstream}'
fatal: no upstream configured for branch 'feat/asset-receivers'
```

`ci.yml` exists and reads correctly, and GitHub has never executed it, because GitHub has never seen
it. There is no run to link to and no green tick to cite. That row is **armed on first push**, not
proven — the first push is what turns it into evidence, and until then the two rows above it are the
whole of what actually enforces the gate.

**Why the `build` script and not only `vercel.json`.** `vercel.json` is the deploy contract, and
putting `npm run check && next build` there would have protected production just as well. It would
also have meant a developer running `npm run build` locally gets a green that Vercel will not honour
— the one failure mode worse than no gate, because it teaches people the gate does not apply to them.
Putting it in the script makes the local build fail exactly the way the deploy fails, for exactly the
same reason, with the same output.

`vercel.json` still names the script, and that is deliberate rather than redundant. It is not a second
definition of the gate — it is a *pin*. Without it, Vercel's Next.js preset infers the build command,
and a project-settings override in the dashboard could quietly replace it with a bare `next build`,
which is the exact state the reviewer broke. `vercel.json` takes precedence over dashboard settings,
so naming the script there means the deploy cannot be reconfigured out of its own gate without a
commit. (`vercel.json` is strict JSON and cannot carry a comment, which is why this reasoning is here.)

**CI will run `check` and `build` even though `build` re-runs `check`.** (Will, because of the row
above.) The duplicated work is a few seconds and it buys attribution: a lint or ledger failure lands
in a step called `check` instead of a hundred lines into a Next build log. There is deliberately **no scheduled job**. A daily run of an
honesty check goes red on days nobody changed anything, everyone learns to ignore it, and a muted
honesty check is worse than none. These gates are about the diff, so they run on the diff.

**`sources:check` is in `check`, and the old reason for leaving it out was wrong.** It was excluded on
the grounds that "Vercel clones this repo alone and a gate it cannot run is a gate that gets deleted."
The script's own design refutes that, and the refutation is checkable in one command:

```
$ node scripts/sources-check.mjs ./not-a-checkout; echo "EXIT=$?"
- ./not-a-checkout has no docs/website/README.md — that is not a tepegoz-browser checkout.
  Skipping the source-drift check. It needs the product repo, which the
  deploy environment does not have, so it skips rather than fails.
  Pass the checkout path, or set TEPEGOZ_BROWSER_ROOT, to run it.
EXIT=0
```

A missing checkout is a skip with exit 0 — in every case, including a path typed wrongly. So it cannot
red Vercel and it cannot red CI. Excluding it meant that the *only* environment where the check can
actually run, a dev machine with both checkouts, was the one environment that never ran it: the gate
ran nowhere. It now runs where it can, and skips loudly where it cannot.

The asymmetry that buys is worth naming, because it is the mirror of the one above: a developer with a
drifted sibling checkout can now fail `npm run build` for a reason Vercel will not reproduce. That is
the safe direction. A local red is information a human can act on — the script names the page and
prints the restamp command — and the drift it reports is a real defect *in this repo*, since it means
this repo's transcription has gone stale. Failing the one person positioned to fix it is targeting,
not noise. `npm run dev` is untouched.

**A warm `.next` cache cannot fake a green for the ledger checks.** `npm run check` is a chain of
plain Node scripts that re-read `public/`, the generated `.ts` and the content modules' *source text*
on every run and cache nothing, so every gate in `check` is cache-proof by construction. The
`describes` stamps used to be the exception — they were enforced only by `assertDescribes()` inside
`next build`, which meant the one gate about honesty in alt text was silent during the minutes a human
spends reading a diff. `npm run media:stamps` (`scripts/media-restamp.mjs --check`) now runs them
inside `check` and reports by file and line; `assertDescribes()` still runs at build and still refuses
to render the page, because a claim that reaches a reader is worse than one that fails a script. Two
verifiers over the same stamps is also what keeps the formula's two implementations honest — see
[`describes`](#describes--the-eight-characters-that-make-a-human-re-read). Clearing the cache before a
build whose result you intend to *cite* is still the right habit:

```bash
rm -rf .next out && npm run build     # PowerShell: Remove-Item -Recurse -Force .next, out
```

---

## Where the words come from

Every page is a transcription of a file in `tepegoz-browser/docs/website/`. That folder owns the copy
and the claims; this repo owns the layout. Each content module names its source file at the top.

Four rules from that folder's README are enforced here rather than left to review:

| Rule | Enforced by |
|---|---|
| Meta descriptions ≤ 155 characters | `npm run content:check` |
| `[BUILD NOTE]` / `[CLAIM]` markers must never render | `npm run content:check` |
| `draft-legal` pages must not read as final | `StatusBanner` + `noindex` + highlighted `{{PLACEHOLDER}}`s |
| A page that owes an asset says so **on the page** | `npm run content:check` |

`content:check` also fails on an internal link to a route the site does not build, so a page can only
link somewhere that exists.

The last row was a habit rather than a check until recently, and habits lose. `status: needs-assets`
is invisible to a visitor — `StatusBanner` renders it in development only — so four of the seven
pages then flagged were owing assets in complete silence. That count is the snapshot at the moment
this rule was added, not the live one: two of those seven have since been promoted, which is why the
tally further down this file reads five. The rule now runs both ways: a `needs-assets` page must
render a gap
(an `assetPlaceholder`, or a `gallery` delivering fewer items than its `expected`), and a `ready` page
must render none. When the ninth extension screenshot lands, the gap closes and the check immediately
fails the page for still claiming `needs-assets`. That failure is the check working.

### Two receivers, and the converter that must never be written

A hand transcription has exactly one failure mode: the source moves on and nobody notices. Two
mechanisms cover it, and they are split on whether the upstream text is machine-readable.

| | Generated | Checksummed |
|---|---|---|
| What | `docs/known-issues.md`, one named table | the 20 prose pages |
| Command | `npm run known-issues:sync <browser>` | `npm run sources:check <browser>` |
| Output | `content/en/known-issues.generated.ts`, rendered on `/roadmap` | a report; `--write` restamps |
| On a surprise | **refuses** and writes nothing | names the page and stops |

The generator reads the table by matching its **header row** anywhere in the document, never by line
offset, and exits if that header is not exactly what it expects, or if two tables share it. If any
cell carries a `[BUILD NOTE]`-shaped marker or an unfilled `{{PLACEHOLDER}}` it names the row and the
column and writes nothing — it refuses rather than strips, because a stripped instruction leaves a
hole that reads as finished writing. Two transformations are allowed and both are reported per run: a
relative doc link becomes a GitHub blob URL (the site does not host the product repo), and a link
label that is entirely a code span loses its backticks (`RichText` matches the whole link token and
never looks inside the label). Anything else is refused rather than guessed.

**A markdown-to-`Block` converter for the prose pages is forbidden, permanently.** The reason is in
the sources themselves: `docs/website/*.md` is saturated with `[BUILD NOTE]` and `[CLAIM]` blocks that
are instructions to the person building the page, not copy. `home.md` literally says "do not
substitute a mockup". A converter either publishes that sentence as body copy or strips it, and both
outcomes are worse than the transcription staying manual. So it stays manual, and `sources:check`
covers the failure mode manual transcription actually has: each content module records the sha256 of
the document it was written against, and the script names every page where the two no longer agree.
It reports a fact; a human re-reads the document and makes the editorial call.

A stamp is an assertion about a specific pair of files, so `--write` takes `--only a,b` rather than
restamping everything by default, and it refuses `*.generated.ts` outright — a generated stamp can
only move by re-running its generator. A page with **no** stamp is listed but does not fail: it
claims nothing, which is why the unstamped state is survivable and the wrong stamp is not.

> **How the current 20 prose stamps were set, since it matters for how much they are worth.** They
> went on in one pass, not one page at a time. The justification was mechanical rather than editorial: for
> every page, the transcription's last commit was compared against its source document's last
> commit, and the four pages whose source had moved afterwards were checked against that specific
> diff — three turned out to be `prettier` emphasis-marker normalisation and a link-path repair the
> site had already applied, and the fourth (`privacy`) was already carrying the newer wording. So the
> stamps are a **correct baseline for detecting future drift**, which is the whole job of the tool.
> They are not twenty fresh readings, and nobody should cite them as twenty fresh readings.
>
> The count reconciles like this, because the script prints a different number than this paragraph
> does. `node scripts/sources-check.mjs ../tepegoz-browser` reports **21** stamped modules: the 20
> prose pages described above, plus `known-issues.generated.ts`, whose stamp was written by
> `known-issues:sync` and can only move by re-running it. Twenty is the number of stamps a human set;
> twenty-one is the number of stamps that exist.

### This wave

**English only, twenty routes.** The launch twelve — home, how-it-works, features, security, privacy,
download, open-source, story, roadmap, and the three legal documents — plus the second wave, now
built from the same source folder: `/extensions`, `/network-privacy`, `/compare`, `/turkey`, `/help`,
`/blog` (with its first post at `/blog/the-screenshot-that-captured-the-wrong-screen`), and
`/releases`.

**Five** pages are `status: needs-assets` — `/`, `/how-it-works`, `/extensions`, `/network-privacy`
and `/help`. The copy on each is final; each renders an honest labelled gap where a screenshot, a
diagram or a recording belongs — four `assetPlaceholder`s, plus `/extensions`'s `gallery` reading
"0 of 9 captured" — and `content:check` now fails the page if it does not. The other fifteen are
thirteen `ready` pages and the two `draft-legal` documents; 5 + 13 + 2 is the twenty routes named
above, and a count in a README that does not reconcile is exactly the defect the rest of this file is
about, so here is how to recount it:

```
$ grep -c "^  status: 'needs-assets'," modules/marketing/content/en/*.ts | grep -v ':0'
modules/marketing/content/en/extensions.ts:1
modules/marketing/content/en/help.ts:1
modules/marketing/content/en/home.ts:1
modules/marketing/content/en/how-it-works.ts:1
modules/marketing/content/en/network-privacy.ts:1
```

`/features` and `/releases` are both `ready`, each promoted after its source document was read line by
line for an asset ask and found to make none. `/releases` is named here because an earlier draft of
this paragraph listed it as still owing one, which was wrong in the way this repo is supposed to catch:
its `needs-assets` flag was inherited from the source file's front matter and was never true of the
page. That page's whole design is that it ships **today**, in its empty state, and becomes a list at
the first tag — and keeping a pending-asset panel on it to satisfy the flag would have been inventing
a gap to feed a checker, which is the inverse of what the check is for. The reasoning is recorded in
`releases.ts`'s header, beside the `/download` contradiction it deliberately leaves standing.

The FAQ on `/help` reconciles one source answer (automatic CAPTCHA solving) down to what the code
actually does today, because on this site the claims track the code.

---

## Layout

Follows `internal-ai-rules` — root-level `app/`, `components/`, `libs/`, `modules/`, `types/`, with
`@/*` aliased to `./*`. No `src/` directory (`Code_Structure_Rules_Next/app-router-structure.md`).

```
app/
├── layout.tsx                 pass-through root layout (site-wide metadata)
├── globals.css                Tailwind + Tepegöz tokens over KUI's token names
├── not-found.tsx  robots.ts  sitemap.ts
└── (frontend)/                every page, one folder per route (default locale, unprefixed)
components/{brand,layout,marketing}/
libs/{config,i18n,seo,utils}/
modules/marketing/content/     page copy, one file per page per locale
types/content.ts               the block model
vendor/kui-react/              committed KUI build — see its README
```

## Content model

Content is data, not JSX. `types/content.ts` defines a small block union and `components/marketing/`
renders it. Thirteen kinds: prose, cards, steps, lists, tables, callouts, code, capability splits,
CTAs, asset placeholders, and the three media kinds below. Two consequences worth knowing:

- **All twenty pages share one design language** without twenty hand-built layouts.
- **Translating is copying a file.** Content is authored with bare routes (`/download`); the registry
  rewrites them per locale at read time, so `modules/marketing/content/tr/` needs no locale prefixes.

Inline copy supports `**bold**`, `_italic_`, `` `code` ``, `[text](/href)`, and `{{PLACEHOLDER}}`,
parsed to React nodes — never `dangerouslySetInnerHTML`.

Adding a block kind costs two compile errors, deliberately: the `block()` validator in
`modules/marketing/content/index.ts` has no default arm, and `BlockRenderer.tsx` ends in
`const never: never = block`. Neither can be satisfied by ignoring the new kind.

| Kind | For | Notes |
|---|---|---|
| `figure` | one still image | carries no `src`, `width` or `height` — see the ledger below |
| `motion` | a recording | `<video controls>` for WebM; **poster-first** for an animated GIF |
| `gallery` | a set of stills | `expected: 9` with two delivered renders "2 of 9 captured" |
| `assetPlaceholder` | an ask with no ledger key at all | the labelled gap, unchanged |

`motion` is poster-first because the home hero was a 24-second GIF that looped forever above the
fold: a WCAG 2.2.2 failure with no pause control and nothing `prefers-reduced-motion` could reach,
since `globals.css` clamps CSS animation and a GIF is decoded by the image pipeline instead. The
block now mounts a still, and the animated bytes are fetched only when somebody presses play. The
built home page contains no reference to the `.gif` at all until then. Stopping swaps the `<img>` by
`key`, so a stop is a real stop rather than a hidden loop, and focus follows the control that
replaced the one you pressed.

`gallery` exists so partial delivery is representable. Nine extension panels are owed and none have
been captured; the block renders the shots that exist plus a dashed gap badged with the shortfall,
column-spanning when more than one is missing, so the gap stays proportional to what is actually
missing instead of collapsing to a single tile.

### URL scheme

**The default locale is unprefixed.** English is served from `/`, `/features`, `/security`. A second
locale gets its own prefix — `/tr`, `/tr/features`. That rule lives in exactly one function,
`localePath()` in `libs/i18n/locales.ts`; navigation, the sitemap, `hreflang`, the language switcher
and the OG images all derive from it rather than repeating the branch.

`/en` and `/en/*` permanently redirect to the unprefixed equivalents (`vercel.json`), so links shared
before this change keep resolving.

### Adding Turkish

1. Add `'tr'` to `LOCALES` in `libs/i18n/locales.ts`.
2. Copy `modules/marketing/content/en/` to `../tr/` and translate the strings.
3. Register it in `modules/marketing/content/index.ts`.
4. Add `app/(localized)/[lang]/` — a **sibling route group** mirroring `app/(frontend)/`, whose pages
   pass the `lang` param to `getPage` where the root pages pass `DEFAULT_LOCALE`.

Step 4 is a sibling rather than a nested tree because each route group may own a root layout; nesting
them would produce two `<html>` elements. Steps 1–3 alone already make the switcher, sitemap and
`hreflang` aware of the new locale.

---

## Media

Screenshots and recordings are produced in `tepegoz-browser`, by scripts, on a machine with a GUI.
They used to be hand-carried across once and then left to drift. Two defects shipped that way, both
on the home page, both at the same time:

- The hero declared **1440x900** over a file that is **1066x864** — a layout shift on the largest
  element above the fold, in the one place this repo's own rules forbid one.
- The hero's `alt` described **the extensions page**, over a recording of an agent answering a
  question. A file had been swapped underneath copy nobody re-read. That is a live WCAG 1.1.1
  failure: a screen-reader user was told about a screen that is not there.

Neither was carelessness exactly. Both are what happens when a fact about a file is *typed by a
human* into a place far from the file. So the split is on authorship, not on proximity:

| | Where it lives | Who writes it |
|---|---|---|
| Measurements — width, height, bytes, sha256, mime, animated, frames, duration | `modules/marketing/media/manifest.generated.ts` | **derived from the bytes**, never typed |
| Copy — `alt`, `caption` | `modules/marketing/content/<locale>/` | a human, per locale |
| Provenance — when, which commit, which tool | `modules/marketing/media/provenance.json` | the ingest script, or a human writing an honest `null` |

A content block therefore names an asset by key and carries no `src`, no `width`, no `height`.
`1440x900` over a `1066x864` file is no longer a mistake anyone can make — it is not expressible.

Copy deliberately stays out of the generated file. Putting a `Record<Locale, string>` in a manifest
would create a second locale mechanism and make adding Turkish harder, and `alt` is a claim about
what an image shows, which is exactly the sort of thing that must translate with the page.

### `describes` — the eight characters that make a human re-read

Every media block carries `describes`: the first eight hex characters of

```
sha256( assetSha256 + "\n" + alt )
```

— a hash of the **pair**, the image's bytes and the sentence written about them, not of the bytes
alone.

It is not a cache key and not an integrity check — `media:check` already verifies the bytes. It is an
**acknowledgement**. When the file changes, its hash changes, and every content entry describing it
fails by name, because the person who swapped the file cannot know whether the sentence underneath it
is still true. That is the exact defect that shipped.

**Why the alt text is hashed in, and not just the bytes.** A reviewer proved the bytes-only stamp
caught only half of its own remit, and the demonstration is worth keeping because the half it missed
is the cheaper edit to make by accident:

| The edit | Bytes-only stamp | Pair stamp |
|---|---|---|
| Swap the *file* behind a key (`agent-demo.gif` re-recorded) | fails — sha256 moves | fails |
| Repoint `asset:` at a *different ledger key*, leave the sentence | **passes** | fails |
| Rewrite the alt text under the same image | passes | fails |

Row two is the original defect through the other door: a screenshot of one screen shipping under the
alt text of another. It passed because the value that silenced it was written down —
`manifest.generated.ts` prints every asset's `sha256`, and the first eight characters of the new row
were the whole forgery. Reproduced live, with `features.ts`'s command-palette figure repointed at
`providers` and stamped `d23e5442` (that row's real prefix): the old formula returns `d23e5442`, so it
agreed. The pair hash returns `4a41ce33`, so it does not, and `npm run check` stops at `media:stamps`
naming the file, the line, the section, the asset and the sentence.

Row three failing is deliberate, not collateral: a rewritten alt is a *new claim* about the image, and
restamping it is the author signing it.

**There is now no correct stamp for a new pairing written down anywhere.** It has to be computed, and
the only thing that computes it is `npm run media:restamp`, which prints for every stamp the asset
key, the file it resolves to, its dimensions and the alt text in full before it writes a byte. That is
the point of the tool: not to produce eight characters, but to put an image and a sentence about it in
front of a person. It is a nudge and not a proof — no script can look at a picture, or make anyone
else look at one — but nobody gets a passing stamp without the pairing having been printed. The
failure messages say the same thing at length: re-read the alt against the image, rewrite it if it no
longer describes what is there, and only then restamp. A check that can be silenced by copying a value
across is worse than no check, because it launders the thing it exists to catch.

**A poster's stamp binds the poster's bytes to the *recording's* alt.** `poster: { asset, describes }`
has no `alt` of its own — it is rendered under the recording's, because someone who never presses play
meets the poster's pixels and the recording's sentence. So that is the pairing the stamp covers, and
both directions behave: rewrite the recording's alt and the poster's stamp breaks (its claim changed
though its bytes did not), repoint `poster.asset` and it breaks (its bytes changed though the claim
did not — the still-frame-of-a-different-recording defect). The restamp tool implements this as a
general rule, "an object with no `alt` borrows the nearest enclosing one", and labels it `[inherited …]`
in its output so nobody has to infer it.

**Two implementations, one formula.** `describes()` in `modules/marketing/media/types.ts` is
authoritative; `scripts/media-restamp.mjs` recomputes it in plain JavaScript because `allowJs: false`
means neither side can import the other. They cannot drift in silence: `npm run build` runs
`media-restamp.mjs --check` (inside `check`) and then evaluates every content module through
`assertDescribes()` (inside `next build`). Two verifiers, the same eight stamps, one command — a
formula that diverged would red the very next build.

`media-restamp.mjs` reads the content modules as *text*, never importing them, for the same reason
`content-check.mjs` does: it has to run before a build, on a machine with no build, and must not be
breakable by one. It carries a small scanner that understands comments, the three string-literal forms
and brace nesting — and refuses loudly on anything it does not understand, because a stamp computed
over a mis-decoded string would be a false green.

### The receiver

```
   tepegoz-browser                     tepegoz-website
   ───────────────                     ───────────────
   scripts/screenshots.mjs   ──▶  .shots/       ──┐
   scripts/record-agent.mjs  ──▶  .recording/   ──┤   both gitignored, never committed
                                                  │
                                                  ├─▶  npm run media:ingest ../tepegoz-browser
                                                  │       dry run by default; --apply writes
                                                  ▼
                              public/screenshots/ + public/media/   (committed here)
                              modules/marketing/media/manifest.generated.ts
                                                  │
                                                  ▼
                       npm run media:check    ── the manifest describes the bytes
                       npm run media:stamps   ── the alt text describes the image
                                                  │
                                                  ▼
                                            inside `npm run check`,
                                            which `npm run build` runs first,
                                            which is what Vercel and CI run
```

**The bytes live in this repo, and only here.** Vercel clones this repo alone, so everything the
production build needs has to be committed here; duplicating the same PNGs into the product repo's
history would buy nothing and guarantee the two copies diverge. Existing paths are not renamed —
`public/screenshots/*` are live URLs. New motion assets land in `public/media/`.

**Generator and verifier are separate commands on purpose.** `media:ingest` needs a second checkout
and is run by a human on a dev machine. `media:check` needs nothing outside this repo — it reads
`public/` and one generated `.ts` — which is what lets it sit in `npm run check`, and therefore inside
`npm run build`, and therefore in front of every Vercel deploy and every CI run. (How that wiring
works, and how it used to be aspirational rather than real, is under
[How the gates run](#how-the-gates-run).) The property being protected is that the verifier needs
nothing the deploy environment lacks: a gate that needs something Vercel does not have is a gate that
fails once, gets removed from `check`, and then protects nothing. It runs both directions: every derived field is re-measured against the
file, a file with no ledger row is an orphan, and a row with no file is a failure. It lists every
problem in one run rather than stopping at the first.

The measurement module (`scripts/lib/measure.mjs`) parses PNG/APNG, GIF, JPEG, SVG and WebM by hand,
with no dependency and no `ffmpeg`, because it has to run inside `npm run check` on Vercel. It
**refuses rather than guesses**: an MP4 is a deliberate throw naming what would have to be
implemented, and a WebM with no Duration in its header is an error, not a zero. A fabricated duration
under a caption is the same class of defect as `1440x900` over a `1066x864` file.

> A WebM written by `MediaRecorder` chunk-concatenation may legitimately carry no Duration, and
> ingest will refuse it. That is untested against a real capture — no recording has been ingested
> yet. The error names the fix (`ffmpeg -i in.webm -c copy out.webm`); doing that rewrite
> automatically was rejected, because silently changing a capture's bytes inside the one tool whose
> whole purpose is byte fidelity is not a convenience.

---

## KUI React

`@kuraykaraaslan/kui-react` is **not on npm**, and its repo gitignores `dist/` with no `prepare`
script — so neither a registry install nor `github:` install can work on Vercel. The prebuilt bundle
is committed to `vendor/kui-react/`. See that folder's README for why, and for how to refresh it.

The site re-themes KUI by **redefining its token values, not its token names** (`app/globals.css`),
so every vendored component inherits the Tepegöz brand with no per-component overrides. Colours come
from `docs/brand/tepegoz-logo-standalone.html` (brand v1.0): navy `#0C2135`, cyan `#06AEC4`.

> Cyan is darkened to `#07697A` for interactive text in light mode — `#06AEC4` on white is 2.3:1 and
> fails WCAG 2.2 AA. Dark mode uses the raw brand cyan, where it passes comfortably.

Tailwind cannot see class names inside a prebuilt bundle, so `globals.css` points `@source` at
`vendor/kui-react/dist`. Without that line, every KUI component renders unstyled.

`npm run kui:check` lists every bare import the bundle makes and fails if one is not installed. This
is not theoretical: `leaflet` and `react-leaflet` are dependencies here purely because `MapView`
shares an entrypoint with components the site does render. It shares more than an entrypoint —
`MapView` and `Card` are literally the same module in the vendored build, which is why an unused map
component still puts CARTO tile URLs in every page's JavaScript. That is measured under
[Privacy posture](#privacy-posture).

---

## Static export notes

`output: 'export'` — no server, no middleware, no image optimizer.

- **Layout split.** `app/layout.tsx` is a pass-through holding site-wide metadata; `<html lang>` lives
  in `app/(frontend)/layout.tsx`. Keeping them separate is what lets a second locale add its own root
  layout in a sibling route group.
- **`/` is a real page**, not a redirect — there is no locale segment to negotiate.
- **`prefetch={false}` everywhere.** Next 16.2.4's exporter writes the segment-cache payload for a
  dynamic segment at `<route>/__next.$d$locale.txt` while the prefetcher requests
  `<route>/__next.$d$locale.<segment>.txt`. Every prefetch 404s. On-demand navigation uses a correct
  path and still works. Revisit when the two agree.
- **OG images** are generated per page at build time via `opengraph-image.tsx` and land in `out/` as
  extensionless PNGs with a build hash (`opengraph-image-czhj30`) — `vercel.json` pins their
  `Content-Type`, and must keep doing so.

## Privacy posture

The site **makes no third-party request**, sets no cookies, and runs no analytics. Fonts are
self-hosted by `next/font` at build time. The CSP in `vercel.json` is `default-src 'self'` with no
external origins allowed — if a future change needs one, that is a decision to make deliberately, on
a site whose product argument is that it does not phone home.

That is phrased as *no request* rather than *no third-party URL anywhere in the output*, deliberately.
The two are not the same sentence, and the last paragraphs of this section measure the gap between
them.

The one inline-script exception (`'unsafe-inline'` for `script-src`) covers the pre-paint theme
bootstrap and Next's own hydration payload.

The policy names `media-src 'self'` explicitly even though it is redundant — `default-src 'self'`
already covers video, and the directive changes nothing a browser does. It is there as a statement of
intent now that the site serves `<video>`: the next person to touch this header should have to delete
a line that says video is first-party, rather than infer it from an absence. `vercel.json` is strict
JSON and cannot carry a comment, which is why the reasoning is here.

This is also why the vendored KUI `VideoPlayer` is not used: it defaults `enableCast` to true and
loads `gstatic.com/cv/js/sender/v1/cast_sender.js` on mount. The CSP blocks it, and it would be a
third-party request on a site whose product argument is that it does not phone home. Motion renders
through a native `<video controls>` element instead.

**Not rendering it is not the same as not shipping it.** The site imports `Badge`, `Button` and `Card`
from KUI's `/ui` barrel, and that barrel is a fixed set of static re-exports over chunks that were
drawn when the bundle was built, not when this site imports from it. One of those chunk boundaries is
decisive: `Card` and `MapView` are emitted from the **same** module,
`vendor/kui-react/dist/chunk-MD5OQ4J2.mjs`, so rendering a `Card` — which `BlockRenderer` does on every
page — brings Leaflet's CARTO tile URLs with it. There is no tree-shaking to be done there; the two
components are one file. `VideoPlayer` sits in a chunk of its own and reaches the output anyway, and
rather than guess at the webpack reason, the honest thing is to measure it. After
`rm -rf .next out && npm run build`:

```
$ grep -rl cast_sender out/
out/_next/static/chunks/0rajnsrqjc95u.js
$ grep -rl cartocdn out/
out/_next/static/chunks/18bkqm.45mbvt.js
$ grep -rl 0rajnsrqjc95u out/ --include=*.html | wc -l
20
```

Twenty of twenty routes, as `<script async>` tags, not as prefetch hints. What those chunks carry is
**dead code**: `grep -rn 'VideoPlayer\|MapView' app components libs modules types` returns nothing, the
injector runs on mount, and neither component ever mounts — so
`https://www.gstatic.com/cv/js/sender/v1/cast_sender.js` sits in a bundle as a string that is never
handed to a `<script>`, and the tile URLs are never handed to a map. No request is made, and
`default-src 'self'` would refuse one if it were.

Which is why the claim above is the behavioural one. The site makes no third-party request, *and* it
ships bytes that describe requests it never makes. That is not a vulnerability, not a leak, and not
something a visitor can trigger — but on a site whose whole argument is that it does not phone home,
"there is no `gstatic.com` string in what we serve you" is a stronger sentence than the truth, and
this repo does not get to make the stronger one. The fix is upstream and not available from here:
finer entry points in KUI, so that `Card` and `MapView` stop being one module. `npm run kui:check`
already reports the same coupling from the dependency side, which is the reason `leaflet` and
`react-leaflet` are installed at all — see [KUI React](#kui-react).

## Deploying

Vercel detects the framework from `vercel.json`'s `"framework": "nextjs"`, and builds with the
`buildCommand` pinned in the same file — `npm run build`, which runs `npm run check` before
`next build`. That pin is the deploy half of [How the gates run](#how-the-gates-run); do not remove it
in favour of framework auto-detection, because auto-detection is overridable from the dashboard and a
pin is not.

Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical URLs, `hreflang` and the sitemap are
absolute and correct; it defaults to `https://tepegoz.app`.

## Before this goes live

Nothing here is a bug. Every item is either work that needs a machine this repo does not have, or a
call that is not a developer's to make. The gaps are labelled on the pages themselves; that is the
point, and no item below should be closed by inventing content for it.

### Needs a GUI capture session

These need `tepegoz-browser` running on a desktop, and `media:ingest` is the path in. Until they
land, each page renders a labelled gap saying so.

- [ ] **The chaptered recording** for `/`. The hero recording is a real agent run, but a *fully
      autonomous* one — the mode in which, by design, nothing stops to ask. So it cannot show the
      confirmation gate `home.md` asks for, and nothing in its 76 frames fails. What is owed is a
      longer capture of a task on a real site: the plan before it runs, an irreversible step stopping
      for a decision, and the agent carrying on after something breaks.
- [ ] **Nine extension panel screenshots** for `/extensions`. The gallery block is in place and reads
      "0 of 9 captured"; it starts filling in with the first one.
- [ ] **Two diagrams** — the trust boundary on `/how-it-works`, and three-tabs-three-exits on
      `/network-privacy`. Both are `assetPlaceholder`s today, and both notes say what the drawing has
      to show, so that whoever draws one is not guessing at the brief.
- [ ] **Step-by-step screenshots for the `/help` guides**, taken from a running build. This is why the
      tracks on that page are listed and not linked: a walkthrough is mostly its pictures, and none of
      them exist. (It has always belonged on this list and was never on it — the mirror of the item
      below, which stayed on the list after it was already done.)
- [x] **~~A poster frame for the hero recording.~~** Landed. `public/screenshots/agent-demo-poster.png`
      is in the ledger as `agent-demo-poster`, and `home.ts`'s hero carries
      `poster: { asset: 'agent-demo-poster', describes: … }` — the stamp itself is deliberately not
      copied here, because a hash written down away from the file it is about is the one thing this
      README is not allowed to do. So the largest element above the fold is now a real still of the
      finished run rather than a dashed panel. It is the recording's *last*
      frame, extracted with `ffmpeg`, not an independent capture — frame 0 is an idle window and would
      undersell what pressing play gets you. Its provenance row says exactly that, and its stamp binds
      the poster's bytes to the recording's alt text, because someone who never presses play meets the
      poster's pixels under the recording's sentence.

### Owner calls, deliberately unresolved

- [ ] **`/download` says builds are "signed and downloadable"; `/releases` says there are none.** No
      `v*` tag exists. One of those two sentences has to change and which one is a product decision,
      not an editing decision. Recorded as a comment in `releases.ts` rather than quietly resolved.
- [ ] **Whether `agent-demo.gif` ships at all.** It is a real capture of the running application, and
      what it has loaded is *this marketing site*, on a staging domain, with the hero visible inside
      the hero. That may read as confident or as circular; it is a taste call.
- [ ] **Whether `/known-issues`, `/ai-transparency` and `/adr` become routes.** The known-issues table
      currently lives on `/roadmap`. A new route is a five-file edit and the information architecture
      is not a script's decision.

### Still owed, plainly

- [ ] The two `draft-legal` pages need a lawyer and every `{{PLACEHOLDER}}` filled — **15 distinct**
      names, 20 occurrences, all of them on `/legal/privacy` and `/legal/terms`. Those two numbers are
      the kind of thing that quietly stops being true, so here is how to recount them in one line:
      `grep -rho '{{[A-Za-z0-9_]*}}' modules/marketing/content/ | sort | uniq -c`.
- [ ] **Turkish.** The mechanism is ready and unused — `content/tr/` is a file copy plus four steps
      above. The generated known-issues table is English-only and would need a translated table,
      which is a human call the generator cannot make.
- [ ] `/roadmap` is transcribed by hand. Generating the phase list from `phases/README.md` was
      considered and rejected — the reasoning is recorded in `roadmap.ts`'s header so it is not
      re-proposed. Its **known-issues table** *is* generated.

### Known thin spots in what this repo just built

- [ ] **The `<video>` path has never rendered.** `MotionKey` is `never` until a WebM is ingested, so
      the code compiles and lints but has not executed. Chapter seeking, the transcript disclosure and
      `poster` on a `<video>` are all unexercised.
- [ ] **WebM ingest is untested against a real capture.** See the note in the Media section.
- [x] **~~A wrong `describes` stamp is caught by the compiler, not by a script.~~** Closed. The
      script-side verifier this entry asked for exists: `scripts/media-restamp.mjs --check`, wired in
      as `npm run media:stamps` inside `check`, reporting by file, line, section, asset key and alt
      text. The stamp itself also changed shape — it now hashes the (bytes, alt) pair, closing the
      residual hole where repointing `asset:` at another ledger key while pasting that key's hash
      prefix sailed through every gate. Both are demonstrated in
      [`describes`](#describes--the-eight-characters-that-make-a-human-re-read).
- [ ] **A stamp still cannot prove anyone looked at the image.** It can only guarantee that nobody got
      a passing stamp without the image's path and its alt text being printed side by side. Someone
      determined to rubber-stamp can still run `npm run media:restamp` and read nothing, and no
      mechanism in this repo would know. What is gone is the *accidental* version — the edit that
      looks correct in review because the number matches something printed elsewhere in the tree.
- [ ] **The stamp formula has two implementations.** `describes()` in TypeScript and `stampFor()` in
      `media-restamp.mjs`, because `allowJs: false` keeps the `.ts` and `.mjs` halves of this repo from
      importing each other. They are kept honest by both running over the same stamps in every
      `npm run build`, which is a real guarantee and not the same thing as having one definition. If
      the scripts ever move to TypeScript, delete one of them.
- [ ] **The 20 hand-set source stamps are a drift baseline, not 20 fresh readings.** (The script
      reports 21; the twenty-first is generated. The reconciliation, how they were set, and what that
      does and does not buy are written out under “Two receivers” above.)
