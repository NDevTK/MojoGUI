// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webpreferences/web_preferences.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Enum: PointerType
blink.mojom.mojom.PointerType = {
  kPointerNone: 0,
  kPointerFirstType: 1,
  kPointerCoarseType: 2,
  kPointerFineType: 3,
};
blink.mojom.mojom.PointerTypeSpec = { $: mojo.internal.Enum() };

// Enum: HoverType
blink.mojom.mojom.HoverType = {
  kHoverNone: 0,
  kHoverFirstType: 1,
  kHoverHoverType: 2,
};
blink.mojom.mojom.HoverTypeSpec = { $: mojo.internal.Enum() };

// Enum: OutputDeviceUpdateAbilityType
blink.mojom.mojom.OutputDeviceUpdateAbilityType = {
  kSlowType: 0,
  kFastType: 1,
};
blink.mojom.mojom.OutputDeviceUpdateAbilityTypeSpec = { $: mojo.internal.Enum() };

// Enum: EditingBehavior
blink.mojom.mojom.EditingBehavior = {
  kEditingMacBehavior: 0,
  kEditingWindowsBehavior: 1,
  kEditingUnixBehavior: 2,
  kEditingAndroidBehavior: 3,
  kEditingChromeOSBehavior: 4,
};
blink.mojom.mojom.EditingBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: ImageAnimationPolicy
blink.mojom.mojom.ImageAnimationPolicy = {
  kImageAnimationPolicyAllowed: 0,
  kImageAnimationPolicyAnimateOnce: 1,
  kImageAnimationPolicyNoAnimation: 2,
};
blink.mojom.mojom.ImageAnimationPolicySpec = { $: mojo.internal.Enum() };

// Enum: ViewportStyle
blink.mojom.mojom.ViewportStyle = {
  kDefault: 0,
  kMobile: 1,
  kTelevision: 2,
  kLast: 3,
};
blink.mojom.mojom.ViewportStyleSpec = { $: mojo.internal.Enum() };

// Enum: AutoplayPolicy
blink.mojom.mojom.AutoplayPolicy = {
  kNoUserGestureRequired: 0,
  kUserGestureRequired: 1,
  kDocumentUserActivationRequired: 2,
};
blink.mojom.mojom.AutoplayPolicySpec = { $: mojo.internal.Enum() };

// Enum: EffectiveConnectionType
blink.mojom.mojom.EffectiveConnectionType = {
  kEffectiveConnectionUnknownType: 0,
  kEffectiveConnectionOfflineType: 1,
  kEffectiveConnectionSlow2GType: 2,
  kEffectiveConnection2GType: 3,
  kEffectiveConnection3GType: 4,
  kEffectiveConnection4GType: 5,
  kEffectiveConnectionTypeLast: 6,
};
blink.mojom.mojom.EffectiveConnectionTypeSpec = { $: mojo.internal.Enum() };

// Struct: WebPreferences
blink.mojom.mojom.WebPreferencesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPreferences',
      packedSize: 296,
      fields: [
        { name: 'standard_font_family_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'fixed_font_family_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'serif_font_family_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'sans_serif_font_family_map', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'cursive_font_family_map', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'fantasy_font_family_map', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'math_font_family_map', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'default_font_size', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'default_fixed_font_size', packedOffset: 164, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'minimum_font_size', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'minimum_logical_font_size', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'default_encoding', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'always_show_context_menu_on_touch', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'context_menu_on_mouse_up', packedOffset: 272, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'javascript_enabled', packedOffset: 272, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'web_security_enabled', packedOffset: 272, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'loads_images_automatically', packedOffset: 272, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'images_enabled', packedOffset: 272, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'plugins_enabled', packedOffset: 272, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dom_paste_enabled', packedOffset: 272, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shrinks_standalone_images_to_fit', packedOffset: 273, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_areas_are_resizable', packedOffset: 273, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_scripts_to_close_windows', packedOffset: 273, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_window_focus_without_user_gesture', packedOffset: 273, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_fonts_enabled', packedOffset: 273, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'javascript_can_access_clipboard', packedOffset: 273, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dns_prefetching_enabled', packedOffset: 273, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data_saver_enabled', packedOffset: 273, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'local_storage_enabled', packedOffset: 274, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tabs_to_links', packedOffset: 274, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_ipc_flooding_protection', packedOffset: 274, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hyperlink_auditing_enabled', packedOffset: 274, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_universal_access_from_file_urls', packedOffset: 274, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_file_access_from_file_urls', packedOffset: 274, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webgl1_enabled', packedOffset: 274, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webgl2_enabled', packedOffset: 274, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'privileged_webgl_extensions_enabled', packedOffset: 275, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webgl_errors_to_console_enabled', packedOffset: 275, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hide_scrollbars', packedOffset: 275, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prefers_default_scrollbar_styles', packedOffset: 275, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'accelerated_2d_canvas_enabled', packedOffset: 275, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'canvas_2d_layers_enabled', packedOffset: 275, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'antialiased_2d_canvas_disabled', packedOffset: 275, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'antialiased_clips_2d_canvas_enabled', packedOffset: 275, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'accelerated_filters_enabled', packedOffset: 276, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'deferred_filters_enabled', packedOffset: 276, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'container_culling_enabled', packedOffset: 276, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_running_insecure_content', packedOffset: 276, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_reading_from_canvas', packedOffset: 276, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'strict_mixed_content_checking', packedOffset: 276, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'strict_powerful_feature_restrictions', packedOffset: 276, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_geolocation_on_insecure_origins', packedOffset: 276, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'strictly_block_blockable_mixed_content', packedOffset: 277, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'block_mixed_plugin_content', packedOffset: 277, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'password_echo_enabled_physical', packedOffset: 277, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'password_echo_enabled_touch', packedOffset: 277, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_clear_document_background', packedOffset: 277, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_scroll_animator', packedOffset: 277, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prefers_reduced_motion', packedOffset: 277, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prefers_reduced_transparency', packedOffset: 277, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'inverted_colors', packedOffset: 278, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'touch_event_feature_detection_enabled', packedOffset: 278, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'pointer_events_max_touch_points', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'available_pointer_types', packedOffset: 180, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'primary_pointer_type', packedOffset: 184, packedBitOffset: 0, type: blink.mojom.PointerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'output_device_update_ability_type', packedOffset: 188, packedBitOffset: 0, type: blink.mojom.OutputDeviceUpdateAbilityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'available_hover_types', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'primary_hover_type', packedOffset: 196, packedBitOffset: 0, type: blink.mojom.HoverTypeSpec, nullable: false, minVersion: 0 },
        { name: 'dont_send_key_events_to_javascript', packedOffset: 278, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'barrel_button_for_drag_enabled', packedOffset: 278, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sync_xhr_in_documents_enabled', packedOffset: 278, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'target_blank_implies_no_opener_enabled_will_be_removed', packedOffset: 278, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore_permission_for_device_changed_event', packedOffset: 278, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'number_of_cpu_cores', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'editing_behavior', packedOffset: 204, packedBitOffset: 0, type: blink.mojom.EditingBehaviorSpec, nullable: false, minVersion: 0 },
        { name: 'supports_multiple_windows', packedOffset: 278, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_enabled', packedOffset: 279, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_meta_enabled', packedOffset: 279, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'auto_zoom_focused_editable_to_legible_scale', packedOffset: 279, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'shrinks_viewport_contents_to_fit', packedOffset: 279, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_style', packedOffset: 208, packedBitOffset: 0, type: blink.mojom.ViewportStyleSpec, nullable: false, minVersion: 0 },
        { name: 'smooth_scroll_for_find_enabled', packedOffset: 279, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'main_frame_resizes_are_orientation_changes', packedOffset: 279, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'initialize_at_minimum_page_scale', packedOffset: 279, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'smart_insert_delete_enabled', packedOffset: 279, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'spatial_navigation_enabled', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'v8_cache_options', packedOffset: 212, packedBitOffset: 0, type: blink.mojom.V8CacheOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'record_whole_document', packedOffset: 280, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stylus_handwriting_enabled', packedOffset: 280, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cookie_enabled', packedOffset: 280, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'accelerated_video_decode_enabled', packedOffset: 280, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'animation_policy', packedOffset: 216, packedBitOffset: 0, type: blink.mojom.ImageAnimationPolicySpec, nullable: false, minVersion: 0 },
        { name: 'user_gesture_required_for_presentation', packedOffset: 280, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_tracks_enabled', packedOffset: 280, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_track_background_color', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_text_color', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_text_size', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_text_shadow', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_font_family', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_font_style', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_font_variant', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_window_color', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_window_radius', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text_track_margin_percentage', packedOffset: 220, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'immersive_mode_enabled', packedOffset: 280, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'double_tap_to_zoom_enabled', packedOffset: 281, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fullscreen_supported', packedOffset: 281, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'text_autosizing_enabled', packedOffset: 281, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'web_app_scope', packedOffset: 136, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'font_scale_factor', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'font_weight_adjustment', packedOffset: 228, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'text_size_contrast_factor', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_scale_adjustment', packedOffset: 236, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'force_enable_zoom', packedOffset: 281, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'default_video_poster_url', packedOffset: 144, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'support_deprecated_target_density_dpi', packedOffset: 281, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wide_viewport_quirk', packedOffset: 281, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_wide_viewport', packedOffset: 281, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_zero_layout_height', packedOffset: 281, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_meta_merge_content_quirk', packedOffset: 282, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_meta_non_user_scalable_quirk', packedOffset: 282, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'viewport_meta_zero_values_quirk', packedOffset: 282, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'clobber_user_agent_initial_scale_quirk', packedOffset: 282, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore_main_frame_overflow_hidden_quirk', packedOffset: 282, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'report_screen_size_in_physical_pixels_quirk', packedOffset: 282, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reuse_global_for_unowned_main_frame', packedOffset: 282, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'spellcheck_enabled_by_default', packedOffset: 282, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video_fullscreen_orientation_lock_enabled', packedOffset: 283, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'video_rotate_to_fullscreen_enabled', packedOffset: 283, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'embedded_media_experience_enabled', packedOffset: 283, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'css_hex_alpha_color_enabled', packedOffset: 283, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scroll_top_left_interop_enabled', packedOffset: 283, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_accelerated_small_canvases', packedOffset: 283, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'long_press_link_select_text', packedOffset: 283, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scale_all_fonts_if_no_meta_text_scale_tag', packedOffset: 283, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_webauthn', packedOffset: 284, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'disable_webauthn', packedOffset: 284, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_dark_mode_enabled', packedOffset: 284, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'default_minimum_page_scale_factor', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'default_maximum_page_scale_factor', packedOffset: 244, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'hide_download_ui', packedOffset: 284, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'presentation_receiver', packedOffset: 284, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'media_controls_enabled', packedOffset: 284, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'do_not_update_selection_on_mutating_selection_range', packedOffset: 284, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'autoplay_policy', packedOffset: 248, packedBitOffset: 0, type: blink.mojom.AutoplayPolicySpec, nullable: false, minVersion: 0 },
        { name: 'require_transient_activation_for_get_display_media', packedOffset: 284, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'require_transient_activation_for_show_file_or_directory_picker', packedOffset: 285, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'require_transient_activation_and_user_confirmation_for_subapps_api', packedOffset: 285, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'in_forced_colors', packedOffset: 285, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_forced_colors_disabled', packedOffset: 285, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'root_scrollbar_theme_color', packedOffset: 152, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'preferred_root_scrollbar_color_scheme', packedOffset: 252, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'preferred_color_scheme', packedOffset: 256, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'preferred_contrast', packedOffset: 260, packedBitOffset: 0, type: blink.mojom.PreferredContrastSpec, nullable: false, minVersion: 0 },
        { name: 'low_priority_iframes_threshold', packedOffset: 264, packedBitOffset: 0, type: blink.mojom.EffectiveConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'picture_in_picture_enabled', packedOffset: 285, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'translate_service_available', packedOffset: 285, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'network_quality_estimator_web_holdback', packedOffset: 268, packedBitOffset: 0, type: blink.mojom.EffectiveConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'lazy_load_enabled', packedOffset: 285, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_mixed_content_upgrades', packedOffset: 285, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'always_show_focus', packedOffset: 286, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'touch_drag_drop_enabled', packedOffset: 286, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'touch_dragend_context_menu', packedOffset: 286, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'webxr_immersive_ar_allowed', packedOffset: 286, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'renderer_wide_named_frame_lookup', packedOffset: 286, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'strict_mime_type_check_for_worker_scripts_enabled', packedOffset: 286, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'modal_context_menu', packedOffset: 286, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dynamic_safe_area_insets_enabled', packedOffset: 286, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'payment_request_enabled', packedOffset: 287, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ai_prompt_api_enabled', packedOffset: 287, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_screenshot_on_mainframe_same_doc_navigation', packedOffset: 287, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_disable_external_popups', packedOffset: 287, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 296}]
    }
  }
};
