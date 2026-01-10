// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preferences.mojom
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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

blink.mojom.RendererPreferencesSpec = { $: {} };

blink.mojom.kDefaultCaretBlinkIntervalInMilliseconds = 500;

// Struct: RendererPreferences
mojo.internal.Struct(
    blink.mojom.RendererPreferencesSpec, 'blink.mojom.RendererPreferences', [
      mojo.internal.StructField('hinting', 0, 0, gfx.mojom.HintingSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('caret_blink_interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_policy', 16, 0, blink.mojom.WebRtcIpHandlingPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_urls', 24, 0, mojo.internal.Array(blink.mojom.WebRtcIpHandlingUrlEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('webrtc_local_ips_allowed_urls', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('user_agent_override', 40, 0, blink.mojom.UserAgentOverrideSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accept_languages', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('system_font_family_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('caption_font_family_name', 64, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_family_name', 72, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('menu_font_family_name', 80, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_font_family_name', 88, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('message_font_family_name', 96, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('explicitly_allowed_network_ports', 104, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('text_contrast', 112, 0, mojo.internal.Float, 0.5, false, 0, undefined),
      mojo.internal.StructField('text_gamma', 116, 0, mojo.internal.Float, 0.0, false, 0, undefined),
      mojo.internal.StructField('focus_ring_color', 120, 0, mojo.internal.Uint32, 4293236480, false, 0, undefined),
      mojo.internal.StructField('active_selection_bg_color', 124, 0, mojo.internal.Uint32, 4279855058, false, 0, undefined),
      mojo.internal.StructField('active_selection_fg_color', 128, 0, mojo.internal.Uint32, 4294967295, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_bg_color', 132, 0, mojo.internal.Uint32, 4291348680, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_fg_color', 136, 0, mojo.internal.Uint32, 4281479730, false, 0, undefined),
      mojo.internal.StructField('caption_font_height', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_height', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('menu_font_height', 148, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_font_height', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('message_font_height', 156, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_scroll_bar_width_in_dips', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('horizontal_scroll_bar_height_in_dips', 164, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_height_vertical_scroll_bar_in_dips', 168, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_width_horizontal_scroll_bar_in_dips', 172, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_udp_min_port', 176, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_udp_max_port', 178, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('can_accept_load_drops', 180, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('should_antialias_text', 180, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('use_autohinter', 180, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_bitmaps', 180, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_subpixel_positioning', 180, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('browser_handles_all_top_level_requests', 180, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_custom_colors', 180, 6, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('use_overlay_scrollbar', 180, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_referrers', 181, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('allow_cross_origin_auth_prompt', 181, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_do_not_track', 181, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_encrypted_media', 181, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$flag', 181, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$value', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$value', 181, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$flag', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('send_subresource_notification', 181, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('plugin_fullscreen_allowed', 181, 7, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('caret_browsing_enabled', 182, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('selection_clipboard_buffer_available', 182, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('middle_click_paste_allowed', 182, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('uses_platform_autofill', 182, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('view_source_line_wrap_enabled', 182, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 192]]);
