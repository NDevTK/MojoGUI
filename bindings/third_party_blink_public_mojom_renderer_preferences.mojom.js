// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/renderer_preferences.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RendererPreferences
blink.mojom.RendererPreferencesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererPreferences',
      packedSize: 336,
      fields: [
        { name: 'can_accept_load_drops', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'should_antialias_text', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'hinting', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HintingSpec, nullable: false },
        { name: 'use_autohinter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'use_bitmaps', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'use_subpixel_positioning', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'text_contrast', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_gamma', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'focus_ring_color', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'active_selection_bg_color', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'active_selection_fg_color', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'inactive_selection_bg_color', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'inactive_selection_fg_color', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'browser_handles_all_top_level_requests', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'caret_blink_interval', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'use_custom_colors', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'use_overlay_scrollbar', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enable_referrers', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_cross_origin_auth_prompt', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_do_not_track', packedOffset: 104, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_encrypted_media', packedOffset: 104, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'webrtc_ip_handling_policy', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.WebRtcIpHandlingPolicySpec, nullable: false },
        { name: 'webrtc_ip_handling_urls', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'webrtc_post_quantum_key_agreement', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'webrtc_udp_min_port', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'webrtc_udp_max_port', packedOffset: 138, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'webrtc_local_ips_allowed_urls', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_agent_override', packedOffset: 152, packedBitOffset: 0, type: blink.mojom.UserAgentOverrideSpec, nullable: false },
        { name: 'accept_languages', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'send_subresource_notification', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'plugin_fullscreen_allowed', packedOffset: 168, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'caret_browsing_enabled', packedOffset: 168, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'system_font_family_name', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'caption_font_family_name', packedOffset: 184, packedBitOffset: 0, type: [EnableIf=is_win] mojo_base.mojom.String16Spec, nullable: false },
        { name: 'caption_font_height', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'small_caption_font_family_name', packedOffset: 200, packedBitOffset: 0, type: [EnableIf=is_win] mojo_base.mojom.String16Spec, nullable: false },
        { name: 'small_caption_font_height', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'menu_font_family_name', packedOffset: 216, packedBitOffset: 0, type: [EnableIf=is_win] mojo_base.mojom.String16Spec, nullable: false },
        { name: 'menu_font_height', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status_font_family_name', packedOffset: 232, packedBitOffset: 0, type: [EnableIf=is_win] mojo_base.mojom.String16Spec, nullable: false },
        { name: 'status_font_height', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'message_font_family_name', packedOffset: 248, packedBitOffset: 0, type: [EnableIf=is_win] mojo_base.mojom.String16Spec, nullable: false },
        { name: 'message_font_height', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'vertical_scroll_bar_width_in_dips', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'horizontal_scroll_bar_height_in_dips', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'arrow_bitmap_height_vertical_scroll_bar_in_dips', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'arrow_bitmap_width_horizontal_scroll_bar_in_dips', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'selection_clipboard_buffer_available', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'middle_click_paste_allowed', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uses_platform_autofill', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'explicitly_allowed_network_ports', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'view_source_line_wrap_enabled', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
