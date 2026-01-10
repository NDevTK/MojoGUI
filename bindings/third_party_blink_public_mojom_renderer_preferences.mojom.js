// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preferences.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var blink = blink || {};

blink.mojom.RendererPreferencesSpec = { $: {} };

blink.mojom.kDefaultCaretBlinkIntervalInMilliseconds = 500;

// Struct: RendererPreferences
mojo.internal.Struct(
    blink.mojom.RendererPreferencesSpec, 'blink.mojom.RendererPreferences', [
      mojo.internal.StructField('can_accept_load_drops', 172, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_antialias_text', 172, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hinting', 96, 0, gfx.mojom.HintingSpec, null, false, 0, undefined),
      mojo.internal.StructField('use_autohinter', 172, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_bitmaps', 172, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_subpixel_positioning', 172, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_contrast', 100, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('text_gamma', 104, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('focus_ring_color', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active_selection_bg_color', 112, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active_selection_fg_color', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_bg_color', 120, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_fg_color', 124, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('browser_handles_all_top_level_requests', 172, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caret_blink_interval', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('use_custom_colors', 172, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_overlay_scrollbar', 172, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_referrers', 173, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cross_origin_auth_prompt', 173, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_do_not_track', 173, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_encrypted_media', 173, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_policy', 128, 0, blink.mojom.WebRtcIpHandlingPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_urls', 8, 0, mojo.internal.Array(blink.mojom.WebRtcIpHandlingUrlEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$flag', 173, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$value', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$value', 173, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$flag', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('webrtc_udp_min_port', 168, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_udp_max_port', 170, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_local_ips_allowed_urls', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('user_agent_override', 24, 0, blink.mojom.UserAgentOverrideSpec, null, false, 0, undefined),
      mojo.internal.StructField('accept_languages', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('send_subresource_notification', 173, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('plugin_fullscreen_allowed', 173, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caret_browsing_enabled', 174, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('system_font_family_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('caption_font_family_name', 48, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('caption_font_height', 132, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_family_name', 56, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_height', 136, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('menu_font_family_name', 64, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('menu_font_height', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_font_family_name', 72, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('status_font_height', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('message_font_family_name', 80, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('message_font_height', 148, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_scroll_bar_width_in_dips', 152, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('horizontal_scroll_bar_height_in_dips', 156, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_height_vertical_scroll_bar_in_dips', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_width_horizontal_scroll_bar_in_dips', 164, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_clipboard_buffer_available', 174, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('middle_click_paste_allowed', 174, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uses_platform_autofill', 174, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('explicitly_allowed_network_ports', 88, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('view_source_line_wrap_enabled', 174, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);
