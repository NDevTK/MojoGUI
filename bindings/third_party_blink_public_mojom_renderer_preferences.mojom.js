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
      mojo.internal.StructField('can_accept_load_drops', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_antialias_text', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hinting', 4, 0, gfx.mojom.HintingSpec, null, false, 0, undefined),
      mojo.internal.StructField('use_autohinter', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_bitmaps', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_subpixel_positioning', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_contrast', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('text_gamma', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('focus_ring_color', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active_selection_bg_color', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active_selection_fg_color', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_bg_color', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('inactive_selection_fg_color', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('browser_handles_all_top_level_requests', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caret_blink_interval', 48, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('use_custom_colors', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_overlay_scrollbar', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_referrers', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cross_origin_auth_prompt', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_do_not_track', 56, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_encrypted_media', 56, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_policy', 60, 0, blink.mojom.WebRtcIpHandlingPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('webrtc_ip_handling_urls', 64, 0, mojo.internal.Array(blink.mojom.WebRtcIpHandlingUrlEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$flag', 72, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$value', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('webrtc_post_quantum_key_agreement_$value', 72, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$flag', originalFieldName: 'webrtc_post_quantum_key_agreement' }),
      mojo.internal.StructField('webrtc_udp_min_port', 74, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_udp_max_port', 76, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('webrtc_local_ips_allowed_urls', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('user_agent_override', 88, 0, blink.mojom.UserAgentOverrideSpec, null, false, 0, undefined),
      mojo.internal.StructField('accept_languages', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('send_subresource_notification', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('plugin_fullscreen_allowed', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('caret_browsing_enabled', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('system_font_family_name', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('caption_font_family_name', 120, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('caption_font_height', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_family_name', 136, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('small_caption_font_height', 144, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('menu_font_family_name', 152, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('menu_font_height', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('status_font_family_name', 168, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('status_font_height', 176, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('message_font_family_name', 184, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('message_font_height', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_scroll_bar_width_in_dips', 196, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('horizontal_scroll_bar_height_in_dips', 200, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_height_vertical_scroll_bar_in_dips', 204, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arrow_bitmap_width_horizontal_scroll_bar_in_dips', 208, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_clipboard_buffer_available', 212, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('middle_click_paste_allowed', 212, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uses_platform_autofill', 212, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('explicitly_allowed_network_ports', 216, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false, 0, undefined),
      mojo.internal.StructField('view_source_line_wrap_enabled', 224, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 240]]);
