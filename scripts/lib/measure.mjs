/**
 * Measures a media file by reading its actual bytes.
 *
 * Every number this module returns is *derived*, never typed. That is the whole
 * point: `home.ts` shipped `1440x900` over a 1066x864 GIF because a human wrote
 * the dimensions next to the filename and nobody re-measured when the file was
 * swapped. A generated manifest makes that mistake unexpressible — the numbers
 * come from the file or the build fails.
 *
 * Two hard constraints shape the implementation:
 *
 *   1. Zero dependencies, no subprocess. `measure()` runs inside `npm run check`,
 *      which runs on Vercel, where there is no ffmpeg, no ImageMagick, and no
 *      network. So the parsers below are hand-rolled against each format's spec.
 *   2. Never guess. If a field cannot be located, we throw with the path and what
 *      was missing. A wrong dimension silently substituted for a missing one is
 *      exactly the defect this module exists to stop, so "I don't know" has to be
 *      louder than a plausible-looking number.
 *
 * Everything is read into a Buffer up front. The largest asset in the pipeline is
 * a screen recording measured in single-digit megabytes; a streaming parser would
 * buy nothing but bugs.
 */

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

/**
 * @typedef {object} Measurement
 * @property {'image' | 'motion'} kind Still or moving picture. A looping GIF
 *   is still an `image` — it is an `<img>` in the DOM, not a `<video>`, and the
 *   caller renders it accordingly.
 * @property {string} mime
 * @property {number | null} width `null` only for an SVG with no intrinsic size,
 *   which is legal.
 * @property {number | null} height
 * @property {number} bytes
 * @property {string} sha256 Full lowercase hex of the file bytes.
 * @property {boolean} animated
 * @property {number | null} frames `null` where the format does not cheaply
 *   expose a count (WebM: you would have to demux every cluster).
 * @property {number | null} durationMs
 */

/**
 * Bounds check before every read.
 *
 * A zero-byte or half-flushed capture is a realistic failure here — the recorder
 * writes its WebM from a `MediaRecorder` stream, and a screenshot run can be
 * killed mid-write. Without this guard those files surface as a bare
 * `RangeError [ERR_OUT_OF_RANGE]` from deep inside a parser, which tells the
 * person running `media:ingest` nothing. With it they get the path and the field.
 *
 * @returns {number} `offset`, so it can be inlined: `buf.readUInt32BE(need(...))`
 */
function need(buf, offset, length, path, what) {
  if (!Number.isInteger(offset) || offset < 0 || offset + length > buf.length) {
    throw new Error(
      `${path}: truncated or corrupt — needed ${length} byte(s) at offset ${offset} ` +
        `for ${what}, but the file is only ${buf.length} byte(s)`
    );
  }
  return offset;
}

/** First `n` bytes as spaced hex, for error messages that name what was found. */
function hexHead(buf, n = 8) {
  return [...buf.subarray(0, n)].map((b) => b.toString(16).padStart(2, '0')).join(' ');
}

/* -------------------------------------------------------------------- PNG -- */

/**
 * PNG is the friendliest format here: the spec (RFC 2083 / W3C PNG 3rd edition)
 * *requires* IHDR to be the first chunk, so the dimensions live at a fixed offset
 * in every conforming file.
 *
 *   0..7   signature 89 50 4E 47 0D 0A 1A 0A — the 0x89 catches 7-bit-stripping
 *          transports, "PNG" is human-readable in a hex dump, and the CR LF / LF
 *          pair catches newline translation. No match, not a PNG.
 *   8..11  IHDR chunk length (always 13)
 *   12..15 chunk type 'IHDR'
 *   16..19 width  (uint32 BE)
 *   20..23 height (uint32 BE)
 *
 * APNG (animated PNG) is an unofficial extension carried in ancillary chunks. Its
 * `acTL` control chunk must appear *before* the first `IDAT`; a decoder that sees
 * `IDAT` first renders a still image, so that ordering rule is what actually
 * defines "is this animated". We follow the same rule rather than scanning the
 * whole file for `acTL`, so our answer agrees with a browser's.
 */
function measurePng(buf, path) {
  const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  need(buf, 0, 24, path, 'PNG signature and IHDR header');
  if (!buf.subarray(0, 8).equals(SIGNATURE)) {
    throw new Error(`${path}: not a PNG — signature is ${hexHead(buf)}`);
  }
  if (buf.toString('latin1', 12, 16) !== 'IHDR') {
    throw new Error(
      `${path}: malformed PNG — first chunk is '${buf.toString('latin1', 12, 16)}', not IHDR`
    );
  }

  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);

  // Walk the chunk list looking for acTL before IDAT. Each chunk is
  // length(4) type(4) data(length) crc(4).
  let animated = false;
  let frames = null;
  let pos = 8;
  while (pos + 8 <= buf.length) {
    const length = buf.readUInt32BE(need(buf, pos, 4, path, 'PNG chunk length'));
    const type = buf.toString('latin1', need(buf, pos + 4, 4, path, 'PNG chunk type'), pos + 8);
    if (type === 'IDAT') break; // Image data reached: a later acTL is ignored by decoders.
    if (type === 'acTL') {
      // acTL's payload is num_frames(4) num_plays(4).
      animated = true;
      frames = buf.readUInt32BE(need(buf, pos + 8, 4, path, 'APNG acTL num_frames'));
      break;
    }
    // Advance past data + CRC. Chunk lengths are spec-capped at 2^31-1 so this
    // cannot wrap, and `need` catches a length that runs off a truncated file.
    pos += 12 + length;
  }

  // Per-frame delays live in the fcTL chunks, one per frame. We do not sum them:
  // nothing in the pipeline produces APNG today, and a duration no asset exercises
  // is a duration nobody would notice going wrong. Report null, not a guess.
  return {
    kind: 'image',
    mime: 'image/png',
    width,
    height,
    animated,
    frames,
    durationMs: null,
  };
}

/* -------------------------------------------------------------------- GIF -- */

/**
 * GIF is a block stream, so frame count and duration are only knowable by walking
 * it — which is exactly why `agent-demo.gif` ended up described by dimensions
 * copied from a different file. The header, at least, is fixed:
 *
 *   0..5   'GIF87a' or 'GIF89a'
 *   6..7   logical screen width  (uint16 **LE** — GIF predates the network-order
 *          convention every other format here follows)
 *   8..9   logical screen height (uint16 LE)
 *   10     packed: bit 7 = Global Color Table present, bits 0..2 encode its size
 *   11     background colour index
 *   12     pixel aspect ratio
 *   13..   the Global Color Table (when present), then the block stream
 *
 * The GCT holds 2^(N+1) entries of 3 bytes (RGB), so it is
 * `3 * 2**((packed & 7) + 1)` bytes long. Getting that skip wrong desynchronises
 * everything after it, which is why it is computed rather than assumed absent.
 */
function measureGif(buf, path) {
  need(buf, 0, 13, path, 'GIF header');
  const signature = buf.toString('latin1', 0, 6);
  if (signature !== 'GIF87a' && signature !== 'GIF89a') {
    throw new Error(`${path}: not a GIF — header is '${signature}' (${hexHead(buf)})`);
  }

  const width = buf.readUInt16LE(6);
  const height = buf.readUInt16LE(8);

  const packed = buf[10];
  let pos = 13;
  if (packed & 0x80) pos += 3 * 2 ** ((packed & 7) + 1);

  /**
   * Sub-blocks are length-prefixed chunks terminated by a zero-length block.
   * Extensions and image data both use them, so one helper covers both.
   */
  const skipSubBlocks = (from) => {
    let p = from;
    for (;;) {
      const length = buf[need(buf, p, 1, path, 'GIF sub-block length')];
      p += 1;
      if (length === 0) return p;
      need(buf, p, length, path, 'GIF sub-block payload');
      p += length;
    }
  };

  let frames = 0;
  let centiseconds = 0;

  for (;;) {
    const introducer = buf[need(buf, pos, 1, path, 'GIF block introducer')];

    if (introducer === 0x3b) break; // Trailer.

    if (introducer === 0x21) {
      // Extension: 0x21, label, then sub-blocks.
      const label = buf[need(buf, pos + 1, 1, path, 'GIF extension label')];
      if (label === 0xf9) {
        // Graphic Control Extension:
        //   +0 0x21  +1 0xF9  +2 blockSize(=4)  +3 packed  +4..5 delay  +6 transparent index
        // The delay is in CENTIseconds — GIF's hundredths-of-a-second tick is the
        // single most misreported field in the format, so it is accumulated raw
        // and converted exactly once, at the end.
        centiseconds += buf.readUInt16LE(need(buf, pos + 4, 2, path, 'GIF frame delay'));
      }
      // Every extension label — GCE, Comment, Plain Text, Application — is
      // followed by sub-blocks, so they all skip identically from here.
      pos = skipSubBlocks(pos + 2);
      continue;
    }

    if (introducer === 0x2c) {
      // Image Descriptor: separator + 9 bytes (left, top, width, height, packed).
      // One descriptor is one rendered frame — this is the frame count.
      frames += 1;
      const localPacked = buf[need(buf, pos + 9, 1, path, 'GIF image descriptor packed field')];
      let p = pos + 10;
      if (localPacked & 0x80) p += 3 * 2 ** ((localPacked & 7) + 1); // Local Color Table.
      need(buf, p, 1, path, 'GIF LZW minimum code size');
      pos = skipSubBlocks(p + 1); // Past the code-size byte, then the image data.
      continue;
    }

    throw new Error(
      `${path}: malformed GIF — unexpected block introducer 0x${introducer
        .toString(16)
        .padStart(2, '0')} at offset ${pos}`
    );
  }

  return {
    kind: 'image',
    mime: 'image/gif',
    width,
    height,
    animated: frames > 1,
    frames,
    durationMs: centiseconds * 10,
  };
}

/* ------------------------------------------------------------------- JPEG -- */

/**
 * JPEG carries its dimensions in the Start Of Frame segment, whose position
 * depends on how many EXIF / ICC / comment segments precede it — so it must be
 * walked, not indexed.
 *
 *   FFD8            SOI (start of image)
 *   FFxx len(2) ..  every other segment; the length INCLUDES the length field
 *   FFC0..FFCF      SOFn, the frame header — except FFC4 (Huffman tables),
 *                   FFC8 (JPEG extensions) and FFCC (arithmetic coding tables),
 *                   which share the C range but are not frame headers.
 *
 * Inside an SOF: FF Cn len(2) precision(1) height(2) width(2) — height *first*,
 * the reverse of every other format here and a classic source of transposed
 * dimensions.
 */
function measureJpeg(buf, path) {
  need(buf, 0, 2, path, 'JPEG SOI marker');
  if (buf[0] !== 0xff || buf[1] !== 0xd8) {
    throw new Error(`${path}: not a JPEG — expected FFD8, found ${hexHead(buf, 2)}`);
  }

  let pos = 2;
  while (pos + 4 <= buf.length) {
    if (buf[pos] !== 0xff) {
      throw new Error(`${path}: malformed JPEG — expected a marker at offset ${pos}`);
    }
    // Fill bytes: any number of FFs may pad in front of the marker code.
    let marker = pos;
    while (buf[marker + 1] === 0xff) marker += 1;
    const code = buf[need(buf, marker + 1, 1, path, 'JPEG marker code')];

    const isSof = code >= 0xc0 && code <= 0xcf && code !== 0xc4 && code !== 0xc8 && code !== 0xcc;
    if (isSof) {
      const height = buf.readUInt16BE(need(buf, marker + 5, 2, path, 'JPEG frame height'));
      const width = buf.readUInt16BE(need(buf, marker + 7, 2, path, 'JPEG frame width'));
      return {
        kind: 'image',
        mime: 'image/jpeg',
        width,
        height,
        animated: false,
        frames: null,
        durationMs: null,
      };
    }

    // SOS (FFDA) is followed by entropy-coded data with no length field, and by
    // then a conforming file has already given us its SOF — so stop rather than
    // walk compressed noise looking for byte pairs that look like markers.
    if (code === 0xda) break;
    // Standalone markers carry no length to advance by: SOI/EOI, the eight
    // restart markers, and TEM.
    if (code === 0xd8 || code === 0xd9 || code === 0x01 || (code >= 0xd0 && code <= 0xd7)) {
      pos = marker + 2;
      continue;
    }
    pos = marker + 2 + buf.readUInt16BE(need(buf, marker + 2, 2, path, 'JPEG segment length'));
  }

  throw new Error(`${path}: JPEG has no SOF segment — dimensions are not recoverable`);
}

/* -------------------------------------------------------------------- SVG -- */

/** A CSS length we can honestly turn into a pixel count: bare number, or `px`. */
function parseSvgLength(value) {
  if (value === undefined) return null;
  const match = /^\s*(\d+(?:\.\d+)?|\.\d+)\s*(?:px)?\s*$/i.exec(value);
  return match ? Number(match[1]) : null;
}

/**
 * SVG is XML, so there are no magic numbers to assert — only a root element.
 *
 * Intrinsic size is genuinely optional in SVG: `public/favicon.svg` carries a
 * `viewBox` and nothing else, which is correct authoring for an icon meant to
 * scale to its container. So `null` dimensions are a legitimate answer here, not
 * a failure, and the caller decides whether a given slot tolerates them. We
 * deliberately do not "resolve" a percentage or `em` width against an imaginary
 * viewport — that would be inventing a number, which is the thing this module
 * exists to prevent.
 *
 * Regex-over-XML is acceptable here because we only ever need the *root*
 * element's own attributes, and these are first-party files, not untrusted input.
 */
function measureSvg(text, path) {
  const root = /<svg\b[^>]*>/i.exec(text);
  if (!root) {
    throw new Error(`${path}: no <svg> root element found`);
  }
  const tag = root[0];
  const attribute = (name) => {
    const match = new RegExp(String.raw`\b${name}\s*=\s*["']([^"']*)["']`, 'i').exec(tag);
    return match ? match[1] : undefined;
  };

  let width = parseSvgLength(attribute('width'));
  let height = parseSvgLength(attribute('height'));

  if (width === null || height === null) {
    // viewBox is "min-x min-y width height", separated by whitespace and/or commas.
    const viewBox = attribute('viewBox');
    if (viewBox) {
      const parts = viewBox.trim().split(/[\s,]+/).map(Number);
      if (parts.length === 4 && parts.every((n) => Number.isFinite(n))) {
        if (width === null) width = parts[2];
        if (height === null) height = parts[3];
      }
    }
  }

  return {
    kind: 'image',
    mime: 'image/svg+xml',
    width,
    height,
    animated: false,
    frames: null,
    durationMs: null,
  };
}

/* ------------------------------------------------------------------- WEBM -- */

/**
 * WebM is Matroska, which is EBML: a binary tree in which both element IDs and
 * element sizes are variable-length integers (VINTs).
 *
 * A VINT's first byte announces its own length by its leading-zero count — the
 * first set bit is the "marker": `1xxxxxxx` is 1 byte, `01xxxxxx` is 2, and so on
 * up to 8. The crucial asymmetry, and the thing that breaks naive readers:
 *
 *   - For an element **ID**, the marker bit is *part of the ID*. `0xB0` **is**
 *     PixelWidth's id; stripping the marker would yield `0x30`, which is nothing.
 *   - For a **SIZE**, the marker bit is length metadata and must be stripped.
 *
 * @param {boolean} keepMarker true for IDs, false for sizes.
 */
function readVint(buf, pos, path, keepMarker) {
  const first = buf[need(buf, pos, 1, path, 'EBML variable-length integer')];
  let length = 1;
  while (length <= 8 && !(first & (0x80 >> (length - 1)))) length += 1;
  if (length > 8) {
    throw new Error(`${path}: malformed EBML — zero first byte of a VINT at offset ${pos}`);
  }
  need(buf, pos, length, path, `${length}-byte EBML VINT`);

  let value = keepMarker ? first : first & (0x7f >> (length - 1));
  for (let i = 1; i < length; i += 1) value = value * 256 + buf[pos + i];

  // An all-ones size means "unknown length — runs to the end of the parent". A
  // live-muxed WebM (which is what MediaRecorder writes) uses this for Segment,
  // so this branch is exercised by the real pipeline, not a theoretical one.
  const unknown = !keepMarker && value === 2 ** (7 * length) - 1;

  return { value, next: pos + length, unknown };
}

function readEbmlUint(buf, start, size, path, what) {
  need(buf, start, size, path, what);
  let value = 0;
  for (let i = 0; i < size; i += 1) value = value * 256 + buf[start + i];
  return value;
}

/** EBML floats are IEEE-754, big-endian, and either 4 or 8 bytes wide. */
function readEbmlFloat(buf, start, size, path, what) {
  if (size === 4) return buf.readFloatBE(need(buf, start, 4, path, what));
  if (size === 8) return buf.readDoubleBE(need(buf, start, 8, path, what));
  throw new Error(`${path}: ${what} has an unsupported float width of ${size} byte(s)`);
}

// Ids of the masters on the path to the fields we want. Everything else — Cluster
// above all, which is the overwhelming bulk of the file — is skipped by its
// declared size, so measuring a 50 MB recording only ever touches its header.
const EBML_SEGMENT = 0x18538067;
const EBML_INFO = 0x1549a966;
const EBML_TRACKS = 0x1654ae6b;
const EBML_TRACK_ENTRY = 0xae;
const EBML_VIDEO = 0xe0;
const EBML_DESCEND = new Set([EBML_SEGMENT, EBML_INFO, EBML_TRACKS, EBML_TRACK_ENTRY, EBML_VIDEO]);

const EBML_PIXEL_WIDTH = 0xb0;
const EBML_PIXEL_HEIGHT = 0xba;
const EBML_DURATION = 0x4489;
const EBML_TIMECODE_SCALE = 0x2ad7b1;

function walkEbml(buf, start, end, path, found) {
  let pos = start;
  while (pos < end) {
    const id = readVint(buf, pos, path, true);
    const size = readVint(buf, id.next, path, false);

    // Clamp rather than trust: a size field that overruns the file means the file
    // is truncated, and clamping lets the walk finish so we can report the
    // *missing field* — which names what to do — instead of an offset error.
    const contentEnd = size.unknown ? end : Math.min(size.next + size.value, end);
    const contentSize = contentEnd - size.next;

    if (EBML_DESCEND.has(id.value)) {
      walkEbml(buf, size.next, contentEnd, path, found);
    } else if (id.value === EBML_PIXEL_WIDTH) {
      found.width = readEbmlUint(buf, size.next, contentSize, path, 'PixelWidth');
    } else if (id.value === EBML_PIXEL_HEIGHT) {
      found.height = readEbmlUint(buf, size.next, contentSize, path, 'PixelHeight');
    } else if (id.value === EBML_DURATION) {
      found.duration = readEbmlFloat(buf, size.next, contentSize, path, 'Duration');
    } else if (id.value === EBML_TIMECODE_SCALE) {
      found.timecodeScale = readEbmlUint(buf, size.next, contentSize, path, 'TimecodeScale');
    }

    if (contentEnd <= pos) {
      // A valid file cannot produce a zero-width element, and looping forever on a
      // corrupt one would hang `npm run check` with no output at all.
      throw new Error(`${path}: malformed EBML — element at offset ${pos} does not advance`);
    }
    pos = contentEnd;
  }
}

/**
 * WebM's magic is the EBML header id 1A45DFA3 — shared with every Matroska file;
 * only the DocType (which we do not need) tells .mkv from .webm.
 *
 * Duration is expressed in TimecodeScale units, and TimecodeScale is nanoseconds
 * (default 1_000_000, i.e. one millisecond per tick). So
 * milliseconds = Duration × TimecodeScale ÷ 1e6.
 */
function measureWebm(buf, path) {
  const found = { width: null, height: null, duration: null, timecodeScale: 1_000_000 };
  walkEbml(buf, 0, buf.length, path, found);

  const missing = [];
  if (found.width === null) missing.push('PixelWidth');
  if (found.height === null) missing.push('PixelHeight');
  if (found.duration === null) missing.push('Duration');
  if (missing.length > 0) {
    throw new Error(
      `${path}: WebM is missing ${missing.join(', ')} — refusing to guess. ` +
        'A live-muxed stream can legitimately omit Duration; remux it ' +
        '(`ffmpeg -i in.webm -c copy out.webm`) so the header carries real values.'
    );
  }

  return {
    kind: 'motion',
    mime: 'video/webm',
    width: found.width,
    height: found.height,
    animated: true,
    // A frame count would mean demuxing every Cluster and counting SimpleBlocks.
    // Nothing on the site displays it, so we do not pay for it.
    frames: null,
    durationMs: Math.round((found.duration * found.timecodeScale) / 1_000_000),
  };
}

/* --------------------------------------------------------------- dispatch -- */

/**
 * Is this plausibly SVG? Text formats carry no magic number, so we sniff instead.
 *
 * An SVG file may open with a BOM, an XML declaration, a DOCTYPE and any number
 * of comments before the root element. This is a hand-rolled scan rather than one
 * regex because the natural regex for that preamble nests a quantifier inside a
 * quantified alternation, which backtracks super-linearly on a near-miss. The
 * loop is linear, and it reads better besides.
 */
function looksLikeSvg(buf) {
  let head = buf.toString('utf8', 0, Math.min(buf.length, 1024));
  if (head.charCodeAt(0) === 0xfeff) head = head.slice(1); // UTF-8 BOM.

  let i = 0;
  for (;;) {
    while (i < head.length && /\s/.test(head.charAt(i))) i += 1;
    if (/^<svg\b/i.test(head.slice(i, i + 5))) return true;

    // Consume exactly one preamble construct, then look for the root again.
    let end = -1;
    if (head.startsWith('<?', i)) end = head.indexOf('?>', i) + 2; //         <?xml ... ?>
    else if (head.startsWith('<!--', i)) end = head.indexOf('-->', i) + 3; // <!-- ... -->
    else if (head.startsWith('<!', i)) end = head.indexOf('>', i) + 1; //     <!DOCTYPE ... >
    if (end <= i) return false; // Not a preamble, or unterminated: not our file.
    i = end;
  }
}

/**
 * Measure one file.
 *
 * @param {string} absPath Path to the file. (A relative path works — this is
 *   `readFileSync` semantics — but callers should pass absolute so an error
 *   message identifies the file without the reader knowing the caller's cwd.)
 * @returns {Measurement}
 * @throws if the format is unsupported, or if any field cannot be read.
 */
export function measure(absPath) {
  const buf = readFileSync(absPath);
  const bytes = buf.length;
  const sha256 = createHash('sha256').update(buf).digest('hex');

  if (bytes === 0) {
    throw new Error(`${absPath}: file is empty (0 bytes)`);
  }

  const withIdentity = (measured) => ({ ...measured, bytes, sha256 });

  if (bytes >= 8 && buf.readUInt32BE(0) === 0x89504e47 && buf.readUInt32BE(4) === 0x0d0a1a0a) {
    return withIdentity(measurePng(buf, absPath));
  }
  if (bytes >= 6 && buf.toString('latin1', 0, 3) === 'GIF') {
    return withIdentity(measureGif(buf, absPath));
  }
  if (bytes >= 2 && buf[0] === 0xff && buf[1] === 0xd8) {
    return withIdentity(measureJpeg(buf, absPath));
  }
  if (bytes >= 4 && buf.readUInt32BE(0) === 0x1a45dfa3) {
    return withIdentity(measureWebm(buf, absPath));
  }
  // ISO base media (MP4/MOV/M4V): a `ftyp` box at offset 4, the preceding four
  // bytes being that box's size. Detected only so we can refuse it by name.
  if (bytes >= 12 && buf.toString('latin1', 4, 8) === 'ftyp') {
    throw new Error(
      `${absPath}: MP4 / ISO-BMFF is unimplemented on purpose, not missing by accident. ` +
        'The capture pipeline (tepegoz-browser/scripts/record-agent.mjs) records through ' +
        "MediaRecorder as 'video/webm;codecs=vp9', so every motion asset this site " +
        'receives is WebM. Carrying an MP4 parser would mean maintaining an untested ' +
        'code path for a file the pipeline never produces. If MP4 ever does ship, ' +
        'implement moov > trak > tkhd (width/height are 16.16 fixed point) and mvhd ' +
        '(duration ÷ timescale) here — and measure a real file before trusting it.'
    );
  }
  if (looksLikeSvg(buf)) {
    return withIdentity(measureSvg(buf.toString('utf8'), absPath));
  }

  throw new Error(
    `${absPath}: unrecognised format — the first 8 bytes are ${hexHead(buf)}. ` +
      'Supported: PNG (including APNG), GIF, JPEG, SVG, WebM.'
  );
}

/**
 * Same as {@link measure}, but returns `{ error }` instead of throwing.
 *
 * `media:check` wants to report *every* broken asset in one run — failing on the
 * first turns fixing a batch into one round trip per file. The generator uses it
 * too, so a single unreadable capture does not abort a whole ingest.
 *
 * @param {string} absPath
 * @returns {Measurement | { error: string }}
 */
export function measureSafe(absPath) {
  try {
    return measure(absPath);
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
}
