// Auto-generated MojoJS binding
 // Source: chromium_src/printing/mojom/print.mojom
 // Module: printing.mojom

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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.printing = mojo.internal.bindings.printing || {};
mojo.internal.bindings.printing.mojom = mojo.internal.bindings.printing.mojom || {};

mojo.internal.bindings.printing.mojom.ColorModelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.QualitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PrintScalingTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PrintScalingOptionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.SkiaDocumentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.MetafileDataTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.GenerateDocumentOutlineSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.MarginTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.ColorModeRestrictionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.DuplexModeRestrictionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PinModeRestrictionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.ResultCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PrinterTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PrinterLanguageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.ClientTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.printing.mojom.PageSizeMarginsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PageRangeSpec = { $: {} };
mojo.internal.bindings.printing.mojom.IppClientInfoSpec = { $: {} };

// Enum: ColorModel
mojo.internal.bindings.printing.mojom.ColorModel = {
  kUnknownColorModel: 0,
  kGray: 1,
  kColor: 2,
  kCMYK: 3,
  kCMY: 4,
  kKCMY: 5,
  kCMYPlusK: 6,
  kBlack: 7,
  kGrayscale: 8,
  kRGB: 9,
  kRGB16: 10,
  kRGBA: 11,
  kColorModeColor: 12,
  kColorModeMonochrome: 13,
  kHPColorColor: 14,
  kHPColorBlack: 15,
  kPrintoutModeNormal: 16,
  kPrintoutModeNormalGray: 17,
  kProcessColorModelCMYK: 18,
  kProcessColorModelGreyscale: 19,
  kProcessColorModelRGB: 20,
  kBrotherCUPSColor: 21,
  kBrotherCUPSMono: 22,
  kBrotherBRScript3Color: 23,
  kBrotherBRScript3Black: 24,
  kEpsonInkColor: 25,
  kEpsonInkMono: 26,
  kSharpARCModeCMColor: 27,
  kSharpARCModeCMBW: 28,
  kXeroxXRXColorAutomatic: 29,
  kXeroxXRXColorBW: 30,
  kCanonCNColorModeColor: 31,
  kCanonCNColorModeMono: 32,
  kCanonCNIJGrayScaleOne: 33,
  kCanonCNIJGrayScaleZero: 34,
  kKonicaMinoltaSelectColorColor: 35,
  kKonicaMinoltaSelectColorGrayscale: 36,
  kOkiOKControlColor: 37,
  kOkiOKControlGray: 38,
  kXeroxXROutputColorPrintAsColor: 39,
  kXeroxXROutputColorPrintAsGrayscale: 40,
  kHpPjlColorAsGrayNo: 41,
  kHpPjlColorAsGrayYes: 42,
};

// Enum: Quality
mojo.internal.bindings.printing.mojom.Quality = {
  kUnknownQuality: -1,
  kDraft: 3,
  kNormal: 4,
  kHigh: 5,
};

// Enum: DuplexMode
mojo.internal.bindings.printing.mojom.DuplexMode = {
  kUnknownDuplexMode: -1,
  kSimplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: PrintScalingType
mojo.internal.bindings.printing.mojom.PrintScalingType = {
  kUnknownPrintScalingType: -1,
  kAuto: 0,
  kAutoFit: 1,
  kFit: 2,
  kFill: 3,
  kNone: 4,
};

// Enum: PageOrientation
mojo.internal.bindings.printing.mojom.PageOrientation = {
  kUpright: 0,
  kRotateLeft: 1,
  kRotateRight: 2,
};

// Enum: PrintScalingOption
mojo.internal.bindings.printing.mojom.PrintScalingOption = {
  kNone: 0,
  kFitToPrintableArea: 1,
  kSourceSize: 2,
  kFitToPaper: 3,
  kCenterShrinkToFitPaper: 4,
};

// Enum: SkiaDocumentType
mojo.internal.bindings.printing.mojom.SkiaDocumentType = {
  kPDF: 0,
  kMSKP: 1,
  kXPS: 2,
};

// Enum: MetafileDataType
mojo.internal.bindings.printing.mojom.MetafileDataType = {
  kPDF: 0,
  kEMF: 1,
  kPostScriptEmf: 2,
};

// Enum: GenerateDocumentOutline
mojo.internal.bindings.printing.mojom.GenerateDocumentOutline = {
  kNone: 0,
  kFromAccessibilityTreeHeaders: 1,
};

// Enum: MarginType
mojo.internal.bindings.printing.mojom.MarginType = {
  kDefaultMargins: 0,
  kNoMargins: 1,
  kPrintableAreaMargins: 2,
  kCustomMargins: 3,
  kPrecomputedMarginsForBackend: 4,
};

// Enum: ColorModeRestriction
mojo.internal.bindings.printing.mojom.ColorModeRestriction = {
  kUnset: 0,
  kMonochrome: 1,
  kColor: 2,
};

// Enum: DuplexModeRestriction
mojo.internal.bindings.printing.mojom.DuplexModeRestriction = {
  kUnset: 0,
  kSimplex: 1,
  kLongEdge: 2,
  kShortEdge: 4,
  kDuplex: 6,
};

// Enum: PinModeRestriction
mojo.internal.bindings.printing.mojom.PinModeRestriction = {
  kUnset: 0,
  kPin: 1,
  kNoPin: 2,
};

// Enum: ResultCode
mojo.internal.bindings.printing.mojom.ResultCode = {
  kSuccess: 0,
  kFailed: 1,
  kAccessDenied: 2,
  kCanceled: 3,
};

// Enum: PrinterType
mojo.internal.bindings.printing.mojom.PrinterType = {
  kExtension: 0,
  kPdf: 1,
  kLocal: 2,
};

// Enum: PrinterLanguageType
mojo.internal.bindings.printing.mojom.PrinterLanguageType = {
  kNone: 0,
  kTextOnly: 1,
  kXps: 2,
  kPostscriptLevel2: 3,
  kPostscriptLevel3: 4,
};

// Enum: ClientType
mojo.internal.bindings.printing.mojom.ClientType = {
  kApplication: 3,
  kOperatingSystem: 4,
  kDriver: 5,
  kOther: 6,
};

// Struct: PageSizeMargins
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PageSizeMarginsSpec, 'printing.mojom.PageSizeMargins', [
      mojo.internal.StructField('arg_content_width', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_content_height', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_top', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_right', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_bottom', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_margin_left', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PageRange
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PageRangeSpec, 'printing.mojom.PageRange', [
      mojo.internal.StructField('arg_from', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_to', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IppClientInfo
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.IppClientInfoSpec, 'printing.mojom.IppClientInfo', [
      mojo.internal.StructField('arg_kApplication', 0, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 5, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 6, false, 0, undefined),
    ],
    [[0, 40]]);
