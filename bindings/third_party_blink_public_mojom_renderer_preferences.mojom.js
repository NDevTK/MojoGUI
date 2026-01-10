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


blink.mojom.mojom.kDefaultCaretBlinkIntervalInMilliseconds = 500;

// Struct: RendererPreferences
blink.mojom.mojom.RendererPreferencesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererPreferences',
      packedSize: 184,
      fields: [
        { name: 'can_accept_load_drops', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_antialias_text', packedOffset: 172, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hinting', packedOffset: 96, packedBitOffset: 0, type: gfx.mojom.HintingSpec, nullable: false, minVersion: 0 },
        { name: 'use_autohinter', packedOffset: 172, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_bitmaps', packedOffset: 172, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_subpixel_positioning', packedOffset: 172, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_contrast', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'text_gamma', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'focus_ring_color', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active_selection_bg_color', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'active_selection_fg_color', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'inactive_selection_bg_color', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'inactive_selection_fg_color', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'browser_handles_all_top_level_requests', packedOffset: 172, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'caret_blink_interval', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'use_custom_colors', packedOffset: 172, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_overlay_scrollbar', packedOffset: 172, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_referrers', packedOffset: 173, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_cross_origin_auth_prompt', packedOffset: 173, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_do_not_track', packedOffset: 173, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_encrypted_media', packedOffset: 173, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webrtc_ip_handling_policy', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.WebRtcIpHandlingPolicySpec, nullable: false, minVersion: 0 },
        { name: 'webrtc_ip_handling_urls', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebRtcIpHandlingUrlEntrySpec, false), nullable: false, minVersion: 0 },
        { name: 'webrtc_post_quantum_key_agreement_$flag', packedOffset: 173, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$value', originalFieldName: 'webrtc_post_quantum_key_agreement' } },
        { name: 'webrtc_post_quantum_key_agreement_$value', packedOffset: 173, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'webrtc_post_quantum_key_agreement_$flag', originalFieldName: 'webrtc_post_quantum_key_agreement' } },
        { name: 'webrtc_udp_min_port', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'webrtc_udp_max_port', packedOffset: 170, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'webrtc_local_ips_allowed_urls', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'user_agent_override', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.UserAgentOverrideSpec, nullable: false, minVersion: 0 },
        { name: 'accept_languages', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'send_subresource_notification', packedOffset: 173, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'plugin_fullscreen_allowed', packedOffset: 173, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'caret_browsing_enabled', packedOffset: 174, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'system_font_family_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'caption_font_family_name', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'caption_font_height', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'small_caption_font_family_name', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'small_caption_font_height', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'menu_font_family_name', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'menu_font_height', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'status_font_family_name', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'status_font_height', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'message_font_family_name', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'message_font_height', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'vertical_scroll_bar_width_in_dips', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'horizontal_scroll_bar_height_in_dips', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'arrow_bitmap_height_vertical_scroll_bar_in_dips', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'arrow_bitmap_width_horizontal_scroll_bar_in_dips', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selection_clipboard_buffer_available', packedOffset: 174, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'middle_click_paste_allowed', packedOffset: 174, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uses_platform_autofill', packedOffset: 174, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'explicitly_allowed_network_ports', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint16, false), nullable: false, minVersion: 0 },
        { name: 'view_source_line_wrap_enabled', packedOffset: 174, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 184}]
    }
  }
};
