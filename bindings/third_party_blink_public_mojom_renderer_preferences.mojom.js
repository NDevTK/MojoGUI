// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preferences.mojom
// Module: blink.mojom

'use strict';

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
