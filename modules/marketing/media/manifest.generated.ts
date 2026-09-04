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
  "agent-controls": {
    "src": "/screenshots/agent-controls.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 167946,
    "sha256": "e5f1a3dde0f6fa93f79596068bd9cbcb4ed26a293f973cdb8cbac22fc15af6b9",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
    }
  },
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
  "agent-final": {
    "src": "/screenshots/agent-final.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1680,
    "height": 1000,
    "bytes": 51489,
    "sha256": "2cf73967a701ae4a5621c1b6fe2af8c842e22edb43417a09875c2c788942b1bc",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/record-agent.mjs",
      "note": null
    }
  },
  "agent-run": {
    "src": "/media/agent-run.webm",
    "kind": "motion",
    "mime": "video/webm",
    "width": 1680,
    "height": 1000,
    "bytes": 2376229,
    "sha256": "c952cb1f32eeb496105daa3946b61279c20b050cc33b6b712e8328876238cd81",
    "animated": true,
    "frames": null,
    "durationMs": 58344,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/record-agent.mjs",
      "note": null
    }
  },
  "agent-run-narrated": {
    "src": "/media/agent-run-narrated.webm",
    "kind": "motion",
    "mime": "video/webm",
    "width": 1680,
    "height": 1000,
    "bytes": 2986901,
    "sha256": "865daca4277f2a3625230c44fbdd90d57baad4ce8f81c8c139bbc51cd7e9a74c",
    "animated": true,
    "frames": null,
    "durationMs": 58352,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/record-agent.mjs",
      "note": null
    }
  },
  "agent-run-poster": {
    "src": "/screenshots/agent-run-poster.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1680,
    "height": 1000,
    "bytes": 280390,
    "sha256": "0468f70289362a135e9f1eb3d68b315946609757c9b87c29c32ba2d2f5fcb689",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/record-agent.mjs",
      "note": null
    }
  },
  "bookmarks": {
    "src": "/screenshots/bookmarks.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 49980,
    "sha256": "1d82d368d0a4b7870adf177557296c50526f2ea6efbb9aab5d3cc1034868bae9",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
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
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
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
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": "Capture-script entry `03-command-palette`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "downloads": {
    "src": "/screenshots/downloads.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 35760,
    "sha256": "57bb841434e604a522bba3680d4f8b05e71d8244b1350baedc356dd91762f116",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
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
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": "Capture-script entry `05-extensions`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "history": {
    "src": "/screenshots/history.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 48849,
    "sha256": "57566858706107fb3a0031e05f0a8f6f877b1160e11a55e156b38f8f5fba6365",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
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
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": "Capture-script entry `14-network-privacy`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "privacy": {
    "src": "/screenshots/privacy.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 227457,
    "sha256": "633b4ead31b97f7886139693e007174f7ef79d7ade16da43238751d531ead4ae",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
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
      "capturedAt": "2026-09-04",
      "browserCommit": "5cfd1f6",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": "Capture-script entry `12-providers`. `tool` is null because nobody recorded one: attribution to `tepegoz-browser/scripts/screenshots.mjs` is an inference from dimensions, filename and commit timing — see the `browser-chrome` entry for the evidence and its limits — and an inference does not belong in a field that otherwise holds records. capturedAt is the date of commit 1a90893, which added the file, not an independently recorded capture timestamp."
    }
  },
  "settings": {
    "src": "/screenshots/settings.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 138242,
    "sha256": "1185776fdfabfe9d3dc346ef857809e7888d274466f751309e1c0babdbd4f63a",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
    }
  },
  "tasks": {
    "src": "/screenshots/tasks.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 22381,
    "sha256": "b769975a89dd82af521a001800640a8092711556ea37dd52e6a468786da8da6f",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
    }
  },
  "uploads": {
    "src": "/screenshots/uploads.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 35064,
    "sha256": "2b56f5921b5188fe3eefb462b6c890ff83c5bd1f8a640ec60dfdeef186287858",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
    }
  },
  "web-page": {
    "src": "/screenshots/web-page.png",
    "kind": "image",
    "mime": "image/png",
    "width": 1440,
    "height": 900,
    "bytes": 90442,
    "sha256": "3106d93d9f0423a4c688ecc99a3a8f01397b89f607d948704b297c78e4848989",
    "animated": false,
    "frames": null,
    "durationMs": null,
    "provenance": {
      "capturedAt": "2026-09-04",
      "browserCommit": "b08ec95",
      "appVersion": "0.1.0",
      "tool": "tepegoz-browser/scripts/screenshots.mjs",
      "note": null
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
