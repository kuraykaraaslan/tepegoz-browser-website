# Vendored `@kuraykaraaslan/kui-react`

**Do not edit anything in `dist/` or `styles/` by hand.**

## Why this is committed

`@kuraykaraaslan/kui-react` is not published to npm, and the upstream repo gitignores its
`dist/` output with no `prepare` script — so neither `npm i @kuraykaraaslan/kui-react` nor
`npm i github:kuraykaraaslan/kui-react` can produce a working install on Vercel. Committing the
prebuilt bundle makes the deployment self-contained: no registry auth, no build-time git fetch,
no submodule.

- Upstream: https://github.com/kuraykaraaslan/kui-react
- Vendored version: `1.0.1`
- Vendored on: 2026-08-23

## Refreshing to a newer KUI build

```bash
# in the kui-react checkout
npm run build:lib

# in this repo
rm -rf vendor/kui-react/dist vendor/kui-react/styles
cp -r <kui-react>/dist   vendor/kui-react/dist
cp -r <kui-react>/styles vendor/kui-react/styles
# bump "version" in vendor/kui-react/package.json and the date above
npm install && npm run build
```

`npm run kui:sync` does this for you when the checkout is at `$KUIREACT_ROOT`.

## Peer dependencies

This vendored package intentionally declares **no** dependencies. Everything the bundle imports
at runtime is a direct dependency of the site's own `package.json`, so installs stay flat and
deterministic. If a KUI refresh introduces a new bare import, add it there — `npm run kui:check`
lists every bare import the bundle makes.
