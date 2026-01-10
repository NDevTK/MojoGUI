// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_snapshot.mojom
// Module: display.mojom

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
var display = display || {};
display.mojom = display.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

display.mojom.DisplaySnapshotColorInfoSpec = { $: {} };
display.mojom.DisplaySnapshotSpec = { $: {} };

// Struct: DisplaySnapshotColorInfo
mojo.internal.Struct(
    display.mojom.DisplaySnapshotColorInfoSpec, 'display.mojom.DisplaySnapshotColorInfo', [
      mojo.internal.StructField('color_space', 0, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edid_primaries', 8, 0, skia.mojom.SkColorSpacePrimariesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hdr_static_metadata', 16, 0, gfx.mojom.HDRStaticMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('edid_gamma', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bits_per_channel', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('supports_color_temperature_adjustment', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DisplaySnapshot
mojo.internal.Struct(
    display.mojom.DisplaySnapshotSpec, 'display.mojom.DisplaySnapshot', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('port_display_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('edid_display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('origin', 24, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('physical_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 40, 0, display.mojom.DisplayConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_connector_id', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('path_topology', 56, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('privacy_screen_state', 64, 0, display.mojom.PrivacyScreenStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_info', 72, 0, display.mojom.DisplaySnapshotColorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sys_path', 88, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modes', 96, 0, mojo.internal.Array(display.mojom.DisplayModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('panel_orientation', 104, 0, display.mojom.PanelOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edid', 112, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('current_mode_index', 120, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('native_mode_index', 128, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('product_code', 136, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_cursor_size', 144, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variable_refresh_rate_state', 152, 0, display.mojom.VariableRefreshRateStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drm_formats_and_modifiers', 160, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.Uint64, false), false), null, false, 0, undefined),
      mojo.internal.StructField('year_of_manufacture', 168, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('connector_index', 172, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('is_aspect_preserving_scaling', 174, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_overscan', 174, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_content_protection_key', 174, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_current_mode', 174, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_native_mode', 174, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);
