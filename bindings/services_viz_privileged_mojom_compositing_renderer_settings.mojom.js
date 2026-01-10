// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/renderer_settings.mojom
// Module: viz.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};

viz.mojom.OcclusionCullerSettingsSpec = { $: {} };
viz.mojom.RendererSettingsSpec = { $: {} };
viz.mojom.DebugRendererSettingsSpec = { $: {} };

viz.mojom.kInvalidDisplayId = -1;

// Struct: OcclusionCullerSettings
mojo.internal.Struct(
    viz.mojom.OcclusionCullerSettingsSpec, 'viz.mojom.OcclusionCullerSettings', [
      mojo.internal.StructField('quad_split_limit', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_occluder_complexity', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_fragments_reduced', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('generate_complex_occluder_for_rounded_corners', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RendererSettings
mojo.internal.Struct(
    viz.mojom.RendererSettingsSpec, 'viz.mojom.RendererSettings', [
      mojo.internal.StructField('occlusion_culler_settings', 0, 0, viz.mojom.OcclusionCullerSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overlay_strategies', 8, 0, mojo.internal.Array(viz.mojom.OverlayStrategySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('highp_threshold_min', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('slow_down_compositing_scale_factor', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_antialiasing', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_antialiasing', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_blending_with_shaders', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('partial_swap_enabled', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('release_overlay_resources_after_gpu_query', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_clear_root_render_pass', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_resize_output_surface', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('requires_alpha_channel', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DebugRendererSettings
mojo.internal.Struct(
    viz.mojom.DebugRendererSettingsSpec, 'viz.mojom.DebugRendererSettings', [
      mojo.internal.StructField('tint_composited_content', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tint_composited_content_modulate', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_overdraw_feedback', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_dc_layer_debug_borders', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_aggregated_damage', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
