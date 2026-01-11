// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/print_preview_cros/mojom/printer_capabilities.mojom
 // Module: ash.printing.print_preview.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.printing = mojo.internal.bindings.ash.printing || {};
mojo.internal.bindings.ash.printing.print_preview = mojo.internal.bindings.ash.printing.print_preview || {};
mojo.internal.bindings.ash.printing.print_preview.mojom = mojo.internal.bindings.ash.printing.print_preview.mojom || {};

mojo.internal.bindings.ash.printing.print_preview.mojom.ColorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.printing.print_preview.mojom.ColorOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.ColorCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.CollateCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.CopiesCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.LocalizedStringSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.DpiOptionSpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.DpiCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.PinCapabilitySpec = { $: {} };
mojo.internal.bindings.ash.printing.print_preview.mojom.CapabilitiesSpec = { $: {} };

// Enum: ColorType
mojo.internal.bindings.ash.printing.print_preview.mojom.ColorType = {
  kStandardColor: 0,
  kStandardMonochrome: 1,
  kCustomColor: 2,
  kCustomMonochrome: 3,
  kAutoColor: 4,
};

// Enum: DuplexType
mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexType = {
  kNoDuplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: PageOrientation
mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientation = {
  kPortrait: 0,
  kLandscape: 1,
  kAuto: 2,
};

// Struct: ColorOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.ColorOptionSpec, 'ash.printing.print_preview.mojom.ColorOption', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.ColorTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 40]]);

// Struct: ColorCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.ColorCapabilitySpec, 'ash.printing.print_preview.mojom.ColorCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.ColorOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reset_to_default_$value', originalFieldName: 'arg_reset_to_default' }),
      mojo.internal.StructField('arg_reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reset_to_default_$flag', originalFieldName: 'arg_reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: CollateCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.CollateCapabilitySpec, 'ash.printing.print_preview.mojom.CollateCapability', [
      mojo.internal.StructField('arg_value_default', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CopiesCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.CopiesCapabilitySpec, 'ash.printing.print_preview.mojom.CopiesCapability', [
      mojo.internal.StructField('arg_value_default', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DuplexOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexOptionSpec, 'ash.printing.print_preview.mojom.DuplexOption', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 24]]);

// Struct: DuplexCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexCapabilitySpec, 'ash.printing.print_preview.mojom.DuplexCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexOptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PageOrientationOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationOptionSpec, 'ash.printing.print_preview.mojom.PageOrientationOption', [
      mojo.internal.StructField('arg_option', 0, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 24]]);

// Struct: PageOrientationCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationCapabilitySpec, 'ash.printing.print_preview.mojom.PageOrientationCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reset_to_default_$value', originalFieldName: 'arg_reset_to_default' }),
      mojo.internal.StructField('arg_reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reset_to_default_$flag', originalFieldName: 'arg_reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: LocalizedString
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.LocalizedStringSpec, 'ash.printing.print_preview.mojom.LocalizedString', [
      mojo.internal.StructField('arg_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSizeOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeOptionSpec, 'ash.printing.print_preview.mojom.MediaSizeOption', [
      mojo.internal.StructField('arg_vendor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name_localized', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.LocalizedStringSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_height_microns', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width_microns', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_imageable_area_left_microns_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_imageable_area_left_microns_$flag', originalFieldName: 'arg_imageable_area_left_microns' }),
      mojo.internal.StructField('arg_imageable_area_bottom_microns_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_imageable_area_bottom_microns_$flag', originalFieldName: 'arg_imageable_area_bottom_microns' }),
      mojo.internal.StructField('arg_imageable_area_right_microns_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_imageable_area_right_microns_$flag', originalFieldName: 'arg_imageable_area_right_microns' }),
      mojo.internal.StructField('arg_imageable_area_top_microns_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_imageable_area_top_microns_$flag', originalFieldName: 'arg_imageable_area_top_microns' }),
      mojo.internal.StructField('arg_imageable_area_left_microns_$flag', 56, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_imageable_area_left_microns_$value', originalFieldName: 'arg_imageable_area_left_microns' }),
      mojo.internal.StructField('arg_imageable_area_bottom_microns_$flag', 56, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_imageable_area_bottom_microns_$value', originalFieldName: 'arg_imageable_area_bottom_microns' }),
      mojo.internal.StructField('arg_imageable_area_right_microns_$flag', 56, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_imageable_area_right_microns_$value', originalFieldName: 'arg_imageable_area_right_microns' }),
      mojo.internal.StructField('arg_imageable_area_top_microns_$flag', 56, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_imageable_area_top_microns_$value', originalFieldName: 'arg_imageable_area_top_microns' }),
      mojo.internal.StructField('arg_has_borderless_variant_$flag', 56, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_has_borderless_variant_$value', originalFieldName: 'arg_has_borderless_variant' }),
      mojo.internal.StructField('arg_has_borderless_variant_$value', 56, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_has_borderless_variant_$flag', originalFieldName: 'arg_has_borderless_variant' }),
      mojo.internal.StructField('arg_is_default_$flag', 56, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 56, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 72]]);

// Struct: MediaSizeCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeCapabilitySpec, 'ash.printing.print_preview.mojom.MediaSizeCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reset_to_default_$value', originalFieldName: 'arg_reset_to_default' }),
      mojo.internal.StructField('arg_reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reset_to_default_$flag', originalFieldName: 'arg_reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: MediaTypeOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeOptionSpec, 'ash.printing.print_preview.mojom.MediaTypeOption', [
      mojo.internal.StructField('arg_vendor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_display_name_localized', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.LocalizedStringSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 32, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 48]]);

// Struct: MediaTypeCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeCapabilitySpec, 'ash.printing.print_preview.mojom.MediaTypeCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reset_to_default_$value', originalFieldName: 'arg_reset_to_default' }),
      mojo.internal.StructField('arg_reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reset_to_default_$flag', originalFieldName: 'arg_reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: DpiOption
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.DpiOptionSpec, 'ash.printing.print_preview.mojom.DpiOption', [
      mojo.internal.StructField('arg_vendor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_horizontal_dpi', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vertical_dpi', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_default_$value', originalFieldName: 'arg_is_default' }),
      mojo.internal.StructField('arg_is_default_$value', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_default_$flag', originalFieldName: 'arg_is_default' }),
    ],
    [[0, 32]]);

// Struct: DpiCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.DpiCapabilitySpec, 'ash.printing.print_preview.mojom.DpiCapability', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.printing.print_preview.mojom.DpiOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reset_to_default_$value', originalFieldName: 'arg_reset_to_default' }),
      mojo.internal.StructField('arg_reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reset_to_default_$flag', originalFieldName: 'arg_reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: PinCapability
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.PinCapabilitySpec, 'ash.printing.print_preview.mojom.PinCapability', [
      mojo.internal.StructField('arg_supported_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_supported_$value', originalFieldName: 'arg_supported' }),
      mojo.internal.StructField('arg_supported_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_supported_$flag', originalFieldName: 'arg_supported' }),
    ],
    [[0, 16]]);

// Struct: Capabilities
mojo.internal.Struct(
    mojo.internal.bindings.ash.printing.print_preview.mojom.CapabilitiesSpec, 'ash.printing.print_preview.mojom.Capabilities', [
      mojo.internal.StructField('arg_destination_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_collate', 8, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.CollateCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_color', 16, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.ColorCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_copies', 24, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.CopiesCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_duplex', 32, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.DuplexCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_page_orientation', 40, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.PageOrientationCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_media_size', 48, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.MediaSizeCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_media_type', 56, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.MediaTypeCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dpi', 64, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.DpiCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pin', 72, 0, mojo.internal.bindings.ash.printing.print_preview.mojom.PinCapabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);
