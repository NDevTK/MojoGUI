// Auto-generated MojoJS binding
 // Source: chromium_src/printing/mojom/printing_context.mojom
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
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.printing.mojom.PageMarginsSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PageSetupSpec = { $: {} };
mojo.internal.bindings.printing.mojom.RequestedMediaSpec = { $: {} };
mojo.internal.bindings.printing.mojom.PrintSettingsSpec = { $: {} };

// Struct: PageMargins
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PageMarginsSpec, 'printing.mojom.PageMargins', [
      mojo.internal.StructField('arg_header', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_footer', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_left', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bottom', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PageSetup
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PageSetupSpec, 'printing.mojom.PageSetup', [
      mojo.internal.StructField('arg_physical_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_printable_area', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_overlay_area', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_area', 24, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_effective_margins', 32, 0, mojo.internal.bindings.mojo.internal.bindings.printing.mojom.PageMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_margins', 40, 0, mojo.internal.bindings.mojo.internal.bindings.printing.mojom.PageMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_height', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_forced_margins', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: RequestedMedia
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.RequestedMediaSpec, 'printing.mojom.RequestedMedia', [
      mojo.internal.StructField('arg_size_microns', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintSettings
mojo.internal.Struct(
    mojo.internal.bindings.printing.mojom.PrintSettingsSpec, 'printing.mojom.PrintSettings', [
      mojo.internal.StructField('arg_ranges', 0, 0, mojo.internal.Array(mojo.internal.bindings.printing.mojom.PageRangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_margin_type', 8, 0, mojo.internal.bindings.printing.mojom.MarginTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 32, 0, mojo.internal.bindings.printing.mojom.ColorModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duplex_mode', 40, 0, mojo.internal.bindings.printing.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 48, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_media', 56, 0, mojo.internal.bindings.mojo.internal.bindings.printing.mojom.RequestedMediaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_setup_device_units', 64, 0, mojo.internal.bindings.mojo.internal.bindings.printing.mojom.PageSetupSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_media_type', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dpi', 80, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scale_factor', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_printer_language_type', 96, 0, mojo.internal.bindings.printing.mojom.PrinterLanguageTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_custom_margins_in_microns', 104, 0, mojo.internal.bindings.mojo.internal.bindings.printing.mojom.PageMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_advanced_settings', 112, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_username', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pin_value', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_system_print_dialog_data', 136, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_copies', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pages_per_sheet', 148, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_only', 152, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_display_header_footer', 152, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_print_backgrounds', 152, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_collate', 152, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_borderless', 152, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_rasterize_pdf', 152, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_landscape', 152, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_modifiable', 152, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_send_user_info', 153, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 168]]);
