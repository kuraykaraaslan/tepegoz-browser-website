# tepegoz-website

The public marketing site for [Tepegöz](https://github.com/kuraykaraaslan/tepegoz-browser) — a fully
static Next.js export, deployed on Vercel, built from KUI React components.

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en/
npm run build    # writes out/
npm run check    # kui imports + content rules + types + lint
```

---

## Where the words come from

Every page is a transcription of a file in `tepegoz-browser/docs/website/`. That folder owns the copy
and the claims; this repo owns the layout. Each content module names its source file at the top.

Three rules from that folder's README are enforced here rather than left to review:

| Rule | Enforced by |
|---|---|
| Meta descriptions ≤ 155 characters | `npm run content:check` |
| `[BUILD NOTE]` / `[CLAIM]` markers must never render | `npm run content:check` |
| `draft-legal` pages must not read as final | `StatusBanner` + `noindex` + highlighted `{{PLACEHOLDER}}`s |

`content:check` also fails on an internal link to a route the site does not build, which is how the
second-wave pages stay out of the nav without leaving dead links behind.

### This wave

**Launch wave, English only.** Twelve pages: home, how-it-works, features, security, privacy,
download, open-source, story, roadmap, and the three legal documents.

Not built yet (second wave in the source folder): `/extensions`, `/network-privacy`, `/compare`,
`/turkey`, `/help`, `/blog`, `/releases`. Links to them were removed rather than left dangling.

---

## Layout

Follows `internal-ai-rules` — root-level `app/`, `components/`, `libs/`, `modules/`, `types/`, with
`@/*` aliased to `./*`. No `src/` directory (`Code_Structure_Rules_Next/app-router-structure.md`).

```
app/
├── layout.tsx                 pass-through root layout (site-wide metadata)
├── globals.css                Tailwind + Tepegöz tokens over KUI's token names
├── not-found.tsx  robots.ts  sitemap.ts
└── (frontend)/[lang]/         every page, one folder per route
components/{brand,layout,marketing}/
libs/{config,i18n,seo,utils}/
modules/marketing/content/     page copy, one file per page per locale
types/content.ts               the block model
vendor/kui-react/              committed KUI build — see its README
```

## Content model

Content is data, not JSX. `types/content.ts` defines a small block union — prose, cards, steps,
lists, tables, callouts, code, capability splits, CTAs, asset placeholders — and
`components/marketing/` renders it. Two consequences worth knowing:

- **All twelve pages share one design language** without twelve hand-built layouts.
- **Translating is copying a file.** Content is authored with bare routes (`/download`); the registry
  rewrites them to `/en/download` at read time, so `modules/marketing/content/tr/` needs no locale prefixes.

Inline copy supports `**bold**`, `_italic_`, `` `code` ``, `[text](/href)`, and `{{PLACEHOLDER}}`,
parsed to React nodes — never `dangerouslySetInnerHTML`.

### Adding Turkish

1. Add `'tr'` to `LOCALES` in `libs/i18n/locales.ts`.
2. Copy `modules/marketing/content/en/` to `../tr/` and translate the strings.
3. Register it in `modules/marketing/content/index.ts`.

Routing, the language switcher, `hreflang`, the sitemap, and OG images all read from `LOCALES` and
extend themselves.

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
shares an entrypoint with components the site does render.

---

## Static export notes

`output: 'export'` — no server, no middleware, no image optimizer.

- **Layout split.** `app/layout.tsx` is a pass-through; `<html lang>` lives in
  `app/(frontend)/[lang]/layout.tsx` because a root layout cannot see the language segment, and the
  `lang` attribute has to be correct.
- **`/` redirect.** Vercel handles it (`vercel.json`); `public/index.html` is the fallback for any host
  serving `out/` as plain files.
- **`prefetch={false}` everywhere.** Next 16.2.4's exporter writes the segment-cache payload for a
  dynamic segment at `<route>/__next.$d$locale.txt` while the prefetcher requests
  `<route>/__next.$d$locale.<segment>.txt`. Every prefetch 404s. On-demand navigation uses a correct
  path and still works. Revisit when the two agree.
- **OG images** are generated per page at build time via `opengraph-image.tsx` and land in `out/` as
  extensionless PNGs with a build hash (`opengraph-image-czhj30`) — `vercel.json` pins their
  `Content-Type`, and must keep doing so.

## Privacy posture

The site loads **no third-party scripts, sets no cookies, and runs no analytics**. Fonts are
self-hosted by `next/font` at build time. The CSP in `vercel.json` is `default-src 'self'` with no
external origins allowed — if a future change needs one, that is a decision to make deliberately, on
a site whose product argument is that it does not phone home.

The one inline-script exception (`'unsafe-inline'` for `script-src`) covers the pre-paint theme
bootstrap and Next's own hydration payload.

## Deploying

Vercel auto-detects the framework. Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical
URLs, `hreflang` and the sitemap are absolute and correct; it defaults to `https://tepegoz.app`.

## Before this goes live

- [ ] The two `draft-legal` pages need a lawyer and every `{{PLACEHOLDER}}` filled.
- [ ] `home` and `how-it-works` are `status: needs-assets` — they render honest labelled gaps where a
      recording and a boundary diagram belong. The copy forbids substituting a mockup.
- [ ] `/roadmap` is transcribed by hand; the source asks for it to be generated from
      `phases/README.md` so it cannot drift.
