// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/webpreferences/web_preferences.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.PointerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.HoverTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.OutputDeviceUpdateAbilityTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.EditingBehaviorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ImageAnimationPolicySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ViewportStyleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AutoplayPolicySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.EffectiveConnectionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.WebPreferencesSpec = { $: {} };

// Enum: PointerType
mojo.internal.bindings.blink.mojom.PointerType = {
  kPointerNone: 1,
  kPointerFirstType: 1,
  kPointerCoarseType: 2,
  kPointerFineType: 4,
};

// Enum: HoverType
mojo.internal.bindings.blink.mojom.HoverType = {
  kHoverNone: 1,
  kHoverFirstType: 1,
  kHoverHoverType: 2,
};

// Enum: OutputDeviceUpdateAbilityType
mojo.internal.bindings.blink.mojom.OutputDeviceUpdateAbilityType = {
  kSlowType: 0,
  kFastType: 1,
};

// Enum: EditingBehavior
mojo.internal.bindings.blink.mojom.EditingBehavior = {
  kEditingMacBehavior: 0,
  kEditingWindowsBehavior: 1,
  kEditingUnixBehavior: 2,
  kEditingAndroidBehavior: 3,
  kEditingChromeOSBehavior: 4,
};

// Enum: ImageAnimationPolicy
mojo.internal.bindings.blink.mojom.ImageAnimationPolicy = {
  kImageAnimationPolicyAllowed: 0,
  kImageAnimationPolicyAnimateOnce: 1,
  kImageAnimationPolicyNoAnimation: 2,
};

// Enum: ViewportStyle
mojo.internal.bindings.blink.mojom.ViewportStyle = {
  kDefault: 0,
  kMobile: 1,
  kTelevision: 2,
  kLast: 2,
};

// Enum: AutoplayPolicy
mojo.internal.bindings.blink.mojom.AutoplayPolicy = {
  kNoUserGestureRequired: 0,
  kUserGestureRequired: 1,
  kDocumentUserActivationRequired: 2,
};

// Enum: EffectiveConnectionType
mojo.internal.bindings.blink.mojom.EffectiveConnectionType = {
  kEffectiveConnectionUnknownType: 0,
  kEffectiveConnectionOfflineType: 1,
  kEffectiveConnectionSlow2GType: 2,
  kEffectiveConnection2GType: 3,
  kEffectiveConnection3GType: 4,
  kEffectiveConnection4GType: 5,
  kEffectiveConnectionTypeLast: 6,
};

// Struct: WebPreferences
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WebPreferencesSpec, 'blink.mojom.WebPreferences', [
      mojo.internal.StructField('arg_standard_font_family_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fixed_font_family_map', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_serif_font_family_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sans_serif_font_family_map', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cursive_font_family_map', 32, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fantasy_font_family_map', 40, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_math_font_family_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_default_encoding', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_primary_pointer_type', 64, 0, mojo.internal.bindings.blink.mojom.PointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_device_update_ability_type', 72, 0, mojo.internal.bindings.blink.mojom.OutputDeviceUpdateAbilityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_primary_hover_type', 80, 0, mojo.internal.bindings.blink.mojom.HoverTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_editing_behavior', 88, 0, mojo.internal.bindings.blink.mojom.EditingBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_style', 96, 0, mojo.internal.bindings.blink.mojom.ViewportStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_v8_cache_options', 104, 0, mojo.internal.bindings.blink.mojom.V8CacheOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_animation_policy', 112, 0, mojo.internal.bindings.blink.mojom.ImageAnimationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_background_color', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_text_color', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_text_size', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_text_shadow', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_font_family', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_font_style', 160, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_font_variant', 168, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_window_color', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_window_radius', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_app_scope', 192, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_video_poster_url', 200, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_autoplay_policy', 208, 0, mojo.internal.bindings.blink.mojom.AutoplayPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_scrollbar_theme_color', 216, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_preferred_root_scrollbar_color_scheme', 224, 0, mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preferred_color_scheme', 232, 0, mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preferred_contrast', 240, 0, mojo.internal.bindings.blink.mojom.PreferredContrastSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_low_priority_iframes_threshold', 248, 0, mojo.internal.bindings.blink.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_quality_estimator_web_holdback', 256, 0, mojo.internal.bindings.blink.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_font_size', 264, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_default_fixed_font_size', 268, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_font_size', 272, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_logical_font_size', 276, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_events_max_touch_points', 280, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_pointer_types', 284, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_hover_types', 288, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_number_of_cpu_cores', 292, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_text_track_margin_percentage', 296, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_font_scale_factor', 300, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_font_weight_adjustment', 304, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_text_size_contrast_factor', 308, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_adjustment', 312, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_default_minimum_page_scale_factor', 316, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_default_maximum_page_scale_factor', 320, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_always_show_context_menu_on_touch', 324, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_context_menu_on_mouse_up', 324, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_javascript_enabled', 324, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_web_security_enabled', 324, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_loads_images_automatically', 324, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_images_enabled', 324, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_plugins_enabled', 324, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dom_paste_enabled', 324, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shrinks_standalone_images_to_fit', 325, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_text_areas_are_resizable', 325, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_scripts_to_close_windows', 325, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_window_focus_without_user_gesture', 325, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_remote_fonts_enabled', 325, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_javascript_can_access_clipboard', 325, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dns_prefetching_enabled', 325, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_data_saver_enabled', 325, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_local_storage_enabled', 326, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tabs_to_links', 326, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_ipc_flooding_protection', 326, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hyperlink_auditing_enabled', 326, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_universal_access_from_file_urls', 326, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_file_access_from_file_urls', 326, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webgl1_enabled', 326, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webgl2_enabled', 326, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_privileged_webgl_extensions_enabled', 327, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webgl_errors_to_console_enabled', 327, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_scrollbars', 327, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prefers_default_scrollbar_styles', 327, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_accelerated_2d_canvas_enabled', 327, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_canvas_2d_layers_enabled', 327, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_antialiased_2d_canvas_disabled', 327, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_antialiased_clips_2d_canvas_enabled', 327, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_accelerated_filters_enabled', 328, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_deferred_filters_enabled', 328, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_container_culling_enabled', 328, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_running_insecure_content', 328, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_reading_from_canvas', 328, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_strict_mixed_content_checking', 328, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_strict_powerful_feature_restrictions', 328, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_geolocation_on_insecure_origins', 328, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_strictly_block_blockable_mixed_content', 329, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_block_mixed_plugin_content', 329, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_password_echo_enabled_physical', 329, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_password_echo_enabled_touch', 329, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_clear_document_background', 329, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_scroll_animator', 329, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prefers_reduced_motion', 329, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prefers_reduced_transparency', 329, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_inverted_colors', 330, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_touch_event_feature_detection_enabled', 330, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_dont_send_key_events_to_javascript', 330, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_barrel_button_for_drag_enabled', 330, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sync_xhr_in_documents_enabled', 330, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_target_blank_implies_no_opener_enabled_will_be_removed', 330, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_permission_for_device_changed_event', 330, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_multiple_windows', 330, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_enabled', 331, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_meta_enabled', 331, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_auto_zoom_focused_editable_to_legible_scale', 331, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shrinks_viewport_contents_to_fit', 331, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_smooth_scroll_for_find_enabled', 331, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame_resizes_are_orientation_changes', 331, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_initialize_at_minimum_page_scale', 331, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_smart_insert_delete_enabled', 331, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_spatial_navigation_enabled', 332, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_record_whole_document', 332, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_stylus_handwriting_enabled', 332, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_enabled', 332, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_accelerated_video_decode_enabled', 332, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture_required_for_presentation', 332, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_text_tracks_enabled', 332, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_immersive_mode_enabled', 332, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_double_tap_to_zoom_enabled', 333, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fullscreen_supported', 333, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_text_autosizing_enabled', 333, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_enable_zoom', 333, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_deprecated_target_density_dpi', 333, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wide_viewport_quirk', 333, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_use_wide_viewport', 333, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_zero_layout_height', 333, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_meta_merge_content_quirk', 334, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_meta_non_user_scalable_quirk', 334, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_meta_zero_values_quirk', 334, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_clobber_user_agent_initial_scale_quirk', 334, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_main_frame_overflow_hidden_quirk', 334, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_report_screen_size_in_physical_pixels_quirk', 334, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reuse_global_for_unowned_main_frame', 334, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_spellcheck_enabled_by_default', 334, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video_fullscreen_orientation_lock_enabled', 335, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_video_rotate_to_fullscreen_enabled', 335, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_embedded_media_experience_enabled', 335, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_css_hex_alpha_color_enabled', 335, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_top_left_interop_enabled', 335, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_accelerated_small_canvases', 335, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_long_press_link_select_text', 335, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scale_all_fonts_if_no_meta_text_scale_tag', 335, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_webauthn', 336, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_webauthn', 336, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_dark_mode_enabled', 336, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hide_download_ui', 336, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_presentation_receiver', 336, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_media_controls_enabled', 336, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_do_not_update_selection_on_mutating_selection_range', 336, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_transient_activation_for_get_display_media', 336, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_transient_activation_for_show_file_or_directory_picker', 337, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_transient_activation_and_user_confirmation_for_subapps_api', 337, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_in_forced_colors', 337, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_forced_colors_disabled', 337, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_picture_in_picture_enabled', 337, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_translate_service_available', 337, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_lazy_load_enabled', 337, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_mixed_content_upgrades', 337, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_always_show_focus', 338, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_touch_drag_drop_enabled', 338, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_touch_dragend_context_menu', 338, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webxr_immersive_ar_allowed', 338, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_renderer_wide_named_frame_lookup', 338, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_strict_mime_type_check_for_worker_scripts_enabled', 338, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_modal_context_menu', 338, 6, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_dynamic_safe_area_insets_enabled', 338, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_payment_request_enabled', 339, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ai_prompt_api_enabled', 339, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_screenshot_on_mainframe_same_doc_navigation', 339, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_should_disable_external_popups', 339, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 352]]);
