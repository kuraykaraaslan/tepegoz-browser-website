/**
 * MACHINE-GENERATED — do not edit by hand. Your changes will be overwritten.
 *
 *   node scripts/media-manifest.mjs
 *
 * Every number here is measured from the file's bytes; the `provenance` field is
 * merged from `provenance.json`, which IS hand-maintained. Editing a dimension
 * here does not change an image — it only makes the ledger wrong, and
 * `node scripts/media-check.mjs` will say so.
 *
 * Content files (`modules/marketing/content/<locale>/`) own `alt` and `caption`
 * and bind to a row here through the first eight characters of its `sha256`
 * (`describes()` in ./types). That binding is what forces a human to re-read alt
 * text when the bytes underneath it are swapped.
 */

import type { MediaAsset } from './types';

export const MEDIA = {
  "agent-demo": {
    "src": "/screenshots/agent-demo.gif",
    "kind": "image",
    "mime": "image/gif",
    "width": 1066,
    "height": 864,
    "bytes": 144179,
    "sha256": "0c9202c5ce0fd6eeeebcf9b26bca459d2bff0beb509cb71a6b0002834851552c",
    "animated": true,
    "frames": 76,
    "durationMs": 24440,
    "provenance": {
      "capturedAt": null,
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Provenance not recorded. 1066x864 does not match the output of any capture script in tepegoz-browser/scripts (screenshots.mjs shoots 1440x900; record-agent.mjs writes WebM), so the recording was made some other way and nobody wrote down how. Added to this repo in ebe52e9 on 2026-08-23; that is when the bytes arrived, not when they were captured. Do not conflate it with record-agent.mjs output, which is under a publication ban because it drives a command-palette path that dispatches nothing."
    }
  },
  "agent-demo-poster": {
    "src": "/screenshots/agent-demo-poster.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1066,
    "height": 864,
    "bytes": 146980,
    "sha256": "456a0267e26607d0e6d2eae8e1582f6a41365a4f9ea169c7778600b94285f7a1",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": null,
      "appVersion": null,
      "tool": "ffmpeg (frame 76 of 76 of agent-demo.gif)",
      "note": "Not an independent capture. This is the LAST frame of agent-demo.gif, extracted with ffmpeg so the hero has a still to show before playback. It inherits that recording's unrecorded provenance — see the `agent-demo` entry — and it shows the run in its completed state (both steps done, the answer rendered), which is why the final frame was chosen over the first: a poster of frame 0 would show an idle window and undersell what the recording contains. capturedAt is the extraction date, not a capture date."
    }
  },
  "browser-chrome": {
    "src": "/screenshots/browser-chrome.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 28760,
    "sha256": "789617d615baeb2619f68ff40c403ba950da0ed6fc20fb0da4cca814f1812616",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-08-23",
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Renamed on import; the matching capture-script entry is `01-newtab`. `tool` is null on purpose, and this paragraph is why — it is the long form the other four 1440x900 stills point at. Attribution to `tepegoz-browser/scripts/screenshots.mjs` is an INFERENCE, not a record. It rests on four converging signals: the file is 1440x900, which is exactly the viewport that script sets before calling capturePage(); four of the five keys are the names it writes with the ordinal stripped (`03-command-palette`, `05-extensions`, `12-providers`, `14-network-privacy`) and this one was renamed from a fifth, `01-newtab`; the commit that added the bytes, 1a90893, says they were taken by driving the app with Playwright's Electron driver, and that script is the only such driver in the browser repo; and that script was committed 45 seconds later, in f160d4f, out of the same working session. Converging is still not recorded — there is no run log and no ingest stamp — so the claim lives here in prose, where it reads as reasoning, instead of in `tool`, which this pipeline fills only from an ingest it actually performed. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "command-palette": {
    "src": "/screenshots/command-palette.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 67462,
    "sha256": "509d5e279960e7d3b530e19aeb01738990bbdc57de5f78c397b51a4e01c4af5b",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-08-23",
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Capture-script entry `03-command-palette`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "extensions": {
    "src": "/screenshots/extensions.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 70866,
    "sha256": "c76cb1113628fb1a0ffc162a1769cf2f406b2029329f18a3a930d068de7b72d9",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-08-23",
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Capture-script entry `05-extensions`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "network-privacy": {
    "src": "/screenshots/network-privacy.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 92696,
    "sha256": "fa5c8a160e1f22735714267dadcc7ef6cb32d971d8f48adcb40ef52d02f66971",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-08-23",
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Capture-script entry `14-network-privacy`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "providers": {
    "src": "/screenshots/providers.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 63810,
    "sha256": "d23e5442679312fa071aaa12732ef98bbf554e4d2ac988408e9f60fb63946838",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-08-23",
      "browserCommit": null,
      "appVersion": null,
      "tool": null,
      "note": "Capture-script entry `12-providers`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  }
} as const satisfies Record<string, MediaAsset>;

/** Every asset the site ships. */
export type MediaKey = keyof typeof MEDIA;

/**
 * Narrowing by `kind` through the ledger's own literal types, so the two key
 * unions cannot drift from the assets: dropping a WebM into `public/media/`
 * widens `MotionKey` the moment the manifest is regenerated, with nothing to
 * update by hand.
 */
type KeysOfKind<K extends MediaAsset['kind']> = {
  [P in MediaKey]: (typeof MEDIA)[P]['kind'] extends K ? P : never;
}[MediaKey];

/** Rendered as an `<img>` — including an animated GIF, which is still an `<img>`. */
export type ImageKey = KeysOfKind<'image'>;

/** Rendered as `<video controls>`. Never a third-party player: the CSP is `default-src 'self'`. */
export type MotionKey = KeysOfKind<'motion'>;
