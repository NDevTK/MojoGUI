// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/visual_properties.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var cc = cc || {};
var viz = viz || {};
var display = display || {};
var gfx = gfx || {};
var ui = ui || {};

blink.mojom.VisualPropertiesSpec = { $: {} };

// Struct: VisualProperties
mojo.internal.Struct(
    blink.mojom.VisualPropertiesSpec, 'blink.mojom.VisualProperties', [
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_size_for_auto_resize', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size_for_auto_resize', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_size_device_px', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size_device_px', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('compositor_viewport_pixel_rect', 40, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 48, 0, cc.mojom.BrowserControlsParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 56, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_mode', 64, 0, blink.mojom.DisplayModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('window_show_state', 72, 0, ui.mojom.WindowShowStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('css_zoom_factor', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('root_widget_viewport_segments', 96, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('window_controls_overlay_rect', 104, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_sequence_number', 112, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 116, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('compositing_scale_factor', 120, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('cursor_accessibility_scale_factor', 124, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('virtual_keyboard_resize_height_device_px', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('auto_resize_enabled', 132, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resizable', 132, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('scroll_focused_node_into_view', 132, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fullscreen_granted', 132, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pinch_gesture_active', 132, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);
