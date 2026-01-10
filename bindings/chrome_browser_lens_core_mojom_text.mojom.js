// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/text.mojom
// Module: lens.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var gfx = gfx || {};
var mojo_base = mojo_base || {};
var skia = skia || {};

lens.mojom.WritingDirectionSpec = { $: mojo.internal.Enum() };
lens.mojom.AlignmentSpec = { $: mojo.internal.Enum() };
lens.mojom.TextSpec = { $: {} };
lens.mojom.TextLayoutSpec = { $: {} };
lens.mojom.WordSpec = { $: {} };
lens.mojom.LineSpec = { $: {} };
lens.mojom.BackgroundImageDataSpec = { $: {} };
lens.mojom.TranslatedLineSpec = { $: {} };
lens.mojom.TranslatedParagraphSpec = { $: {} };
lens.mojom.ParagraphSpec = { $: {} };
lens.mojom.FormulaMetadataSpec = { $: {} };

// Enum: WritingDirection
lens.mojom.WritingDirection = {
  kLeftToRight: 0,
  kRightToLeft: 1,
  kTopToBottom: 2,
};

// Enum: Alignment
lens.mojom.Alignment = {
  kDefaultLeftAlgined: 0,
  kRightAligned: 1,
  kCenterAligned: 2,
};

// Struct: Text
mojo.internal.Struct(
    lens.mojom.TextSpec, 'lens.mojom.Text', [
      mojo.internal.StructField('text_layout', 0, 0, lens.mojom.TextLayoutSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextLayout
mojo.internal.Struct(
    lens.mojom.TextLayoutSpec, 'lens.mojom.TextLayout', [
      mojo.internal.StructField('paragraphs', 0, 0, mojo.internal.Array(lens.mojom.ParagraphSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Word
mojo.internal.Struct(
    lens.mojom.WordSpec, 'lens.mojom.Word', [
      mojo.internal.StructField('plain_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_separator', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 16, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('formula_metadata', 32, 0, lens.mojom.FormulaMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Line
mojo.internal.Struct(
    lens.mojom.LineSpec, 'lens.mojom.Line', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(lens.mojom.WordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('geometry', 8, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackgroundImageData
mojo.internal.Struct(
    lens.mojom.BackgroundImageDataSpec, 'lens.mojom.BackgroundImageData', [
      mojo.internal.StructField('background_image', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_mask', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vertical_padding', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('horizontal_padding', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TranslatedLine
mojo.internal.Struct(
    lens.mojom.TranslatedLineSpec, 'lens.mojom.TranslatedLine', [
      mojo.internal.StructField('words', 0, 0, mojo.internal.Array(lens.mojom.WordSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('translation', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_color', 16, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_primary_color', 24, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_image_data', 32, 0, lens.mojom.BackgroundImageDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 40, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TranslatedParagraph
mojo.internal.Struct(
    lens.mojom.TranslatedParagraphSpec, 'lens.mojom.TranslatedParagraph', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(lens.mojom.TranslatedLineSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resized_bitmap_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('alignment', 16, 0, lens.mojom.AlignmentSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Paragraph
mojo.internal.Struct(
    lens.mojom.ParagraphSpec, 'lens.mojom.Paragraph', [
      mojo.internal.StructField('lines', 0, 0, mojo.internal.Array(lens.mojom.LineSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('translation', 8, 0, lens.mojom.TranslatedParagraphSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('geometry', 16, 0, lens.mojom.GeometrySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('writing_direction', 24, 0, lens.mojom.WritingDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_language', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FormulaMetadata
mojo.internal.Struct(
    lens.mojom.FormulaMetadataSpec, 'lens.mojom.FormulaMetadata', [
      mojo.internal.StructField('latex', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);
