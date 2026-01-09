// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webpreferences/web_preferences.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PointerType
blink.mojom.PointerType = {
  kPointerNone: 0,
  kPointerFirstType: 1,
  kPointerCoarseType: 2,
  kPointerFineType: 3,
};

// Enum: HoverType
blink.mojom.HoverType = {
  kHoverNone: 0,
  kHoverFirstType: 1,
  kHoverHoverType: 2,
};

// Enum: OutputDeviceUpdateAbilityType
blink.mojom.OutputDeviceUpdateAbilityType = {
  kSlowType: 0,
  kFastType: 1,
};

// Enum: EditingBehavior
blink.mojom.EditingBehavior = {
  kEditingMacBehavior: 0,
  kEditingWindowsBehavior: 1,
  kEditingUnixBehavior: 2,
  kEditingAndroidBehavior: 3,
  kEditingChromeOSBehavior: 4,
};

// Enum: ImageAnimationPolicy
blink.mojom.ImageAnimationPolicy = {
  kImageAnimationPolicyAllowed: 0,
  kImageAnimationPolicyAnimateOnce: 1,
  kImageAnimationPolicyNoAnimation: 2,
};

// Enum: ViewportStyle
blink.mojom.ViewportStyle = {
  kDefault: 0,
  kMobile: 1,
  kTelevision: 2,
  kLast: 3,
};

// Enum: AutoplayPolicy
blink.mojom.AutoplayPolicy = {
  kNoUserGestureRequired: 0,
  kUserGestureRequired: 1,
  kDocumentUserActivationRequired: 2,
};

// Enum: EffectiveConnectionType
blink.mojom.EffectiveConnectionType = {
  kEffectiveConnectionUnknownType: 0,
  kEffectiveConnectionOfflineType: 1,
  kEffectiveConnectionSlow2GType: 2,
  kEffectiveConnection2GType: 3,
  kEffectiveConnection3GType: 4,
  kEffectiveConnection4GType: 5,
  kEffectiveConnectionTypeLast: 6,
};

// Struct: WebPreferences
blink.mojom.WebPreferencesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPreferences',
      packedSize: 568,
      fields: [
        { name: 'standard_font_family_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fixed_font_family_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'serif_font_family_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'sans_serif_font_family_map', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'cursive_font_family_map', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fantasy_font_family_map', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'math_font_family_map', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'default_encoding', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'primary_pointer_type', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.PointerTypeSpec, nullable: false },
        { name: 'output_device_update_ability_type', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.OutputDeviceUpdateAbilityTypeSpec, nullable: false },
        { name: 'primary_hover_type', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.HoverTypeSpec, nullable: false },
        { name: 'editing_behavior', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.EditingBehaviorSpec, nullable: false },
        { name: 'viewport_style', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.ViewportStyleSpec, nullable: false },
        { name: 'v8_cache_options', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.V8CacheOptionsSpec, nullable: false },
        { name: 'animation_policy', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.ImageAnimationPolicySpec, nullable: false },
        { name: 'text_track_background_color', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_text_color', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_text_size', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_text_shadow', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_font_family', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_font_style', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_font_variant', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_window_color', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_track_window_radius', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'web_app_scope', packedOffset: 192, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'font_scale_factor', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'font_weight_adjustment', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'text_size_contrast_factor', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_scale_adjustment', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'force_enable_zoom', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_video_poster_url', packedOffset: 240, packedBitOffset: 0, type: [EnableIf=is_android] url.mojom.UrlSpec, nullable: false },
        { name: 'support_deprecated_target_density_dpi', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'wide_viewport_quirk', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'use_wide_viewport', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'force_zero_layout_height', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'viewport_meta_merge_content_quirk', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'viewport_meta_non_user_scalable_quirk', packedOffset: 288, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'viewport_meta_zero_values_quirk', packedOffset: 296, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'clobber_user_agent_initial_scale_quirk', packedOffset: 304, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ignore_main_frame_overflow_hidden_quirk', packedOffset: 312, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'report_screen_size_in_physical_pixels_quirk', packedOffset: 320, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reuse_global_for_unowned_main_frame', packedOffset: 328, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'spellcheck_enabled_by_default', packedOffset: 336, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video_fullscreen_orientation_lock_enabled', packedOffset: 344, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'video_rotate_to_fullscreen_enabled', packedOffset: 352, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'embedded_media_experience_enabled', packedOffset: 360, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'css_hex_alpha_color_enabled', packedOffset: 368, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scroll_top_left_interop_enabled', packedOffset: 376, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disable_accelerated_small_canvases', packedOffset: 384, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'long_press_link_select_text', packedOffset: 392, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scale_all_fonts_if_no_meta_text_scale_tag', packedOffset: 400, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disable_webauthn', packedOffset: 408, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'disable_webauthn', packedOffset: 416, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'autoplay_policy', packedOffset: 424, packedBitOffset: 0, type: blink.mojom.AutoplayPolicySpec, nullable: false },
        { name: 'root_scrollbar_theme_color', packedOffset: 432, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true },
        { name: 'preferred_root_scrollbar_color_scheme', packedOffset: 440, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false },
        { name: 'preferred_color_scheme', packedOffset: 448, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false },
        { name: 'preferred_contrast', packedOffset: 456, packedBitOffset: 0, type: blink.mojom.PreferredContrastSpec, nullable: false },
        { name: 'low_priority_iframes_threshold', packedOffset: 464, packedBitOffset: 0, type: blink.mojom.EffectiveConnectionTypeSpec, nullable: false },
        { name: 'network_quality_estimator_web_holdback', packedOffset: 472, packedBitOffset: 0, type: blink.mojom.EffectiveConnectionTypeSpec, nullable: false },
        { name: 'dynamic_safe_area_insets_enabled', packedOffset: 480, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'should_screenshot_on_mainframe_same_doc_navigation', packedOffset: 488, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'should_disable_external_popups', packedOffset: 496, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_font_size', packedOffset: 504, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'default_fixed_font_size', packedOffset: 508, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_font_size', packedOffset: 512, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'minimum_logical_font_size', packedOffset: 516, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'pointer_events_max_touch_points', packedOffset: 520, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'available_pointer_types', packedOffset: 524, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'available_hover_types', packedOffset: 528, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'number_of_cpu_cores', packedOffset: 532, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'text_track_margin_percentage', packedOffset: 536, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'default_minimum_page_scale_factor', packedOffset: 540, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'default_maximum_page_scale_factor', packedOffset: 544, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'always_show_context_menu_on_touch', packedOffset: 548, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'context_menu_on_mouse_up', packedOffset: 548, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'javascript_enabled', packedOffset: 548, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'web_security_enabled', packedOffset: 548, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'loads_images_automatically', packedOffset: 548, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'images_enabled', packedOffset: 548, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'plugins_enabled', packedOffset: 548, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'dom_paste_enabled', packedOffset: 548, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'shrinks_standalone_images_to_fit', packedOffset: 548, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'text_areas_are_resizable', packedOffset: 548, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_scripts_to_close_windows', packedOffset: 548, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_window_focus_without_user_gesture', packedOffset: 548, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'remote_fonts_enabled', packedOffset: 548, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'javascript_can_access_clipboard', packedOffset: 548, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'dns_prefetching_enabled', packedOffset: 548, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'data_saver_enabled', packedOffset: 548, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'local_storage_enabled', packedOffset: 548, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
        { name: 'tabs_to_links', packedOffset: 548, packedBitOffset: 17, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_ipc_flooding_protection', packedOffset: 548, packedBitOffset: 18, type: mojo.internal.Bool, nullable: false },
        { name: 'hyperlink_auditing_enabled', packedOffset: 548, packedBitOffset: 19, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_universal_access_from_file_urls', packedOffset: 548, packedBitOffset: 20, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_file_access_from_file_urls', packedOffset: 548, packedBitOffset: 21, type: mojo.internal.Bool, nullable: false },
        { name: 'webgl1_enabled', packedOffset: 548, packedBitOffset: 22, type: mojo.internal.Bool, nullable: false },
        { name: 'webgl2_enabled', packedOffset: 548, packedBitOffset: 23, type: mojo.internal.Bool, nullable: false },
        { name: 'privileged_webgl_extensions_enabled', packedOffset: 548, packedBitOffset: 24, type: mojo.internal.Bool, nullable: false },
        { name: 'webgl_errors_to_console_enabled', packedOffset: 548, packedBitOffset: 25, type: mojo.internal.Bool, nullable: false },
        { name: 'hide_scrollbars', packedOffset: 548, packedBitOffset: 26, type: mojo.internal.Bool, nullable: false },
        { name: 'prefers_default_scrollbar_styles', packedOffset: 548, packedBitOffset: 27, type: mojo.internal.Bool, nullable: false },
        { name: 'accelerated_2d_canvas_enabled', packedOffset: 548, packedBitOffset: 28, type: mojo.internal.Bool, nullable: false },
        { name: 'canvas_2d_layers_enabled', packedOffset: 548, packedBitOffset: 29, type: mojo.internal.Bool, nullable: false },
        { name: 'antialiased_2d_canvas_disabled', packedOffset: 548, packedBitOffset: 30, type: mojo.internal.Bool, nullable: false },
        { name: 'antialiased_clips_2d_canvas_enabled', packedOffset: 548, packedBitOffset: 31, type: mojo.internal.Bool, nullable: false },
        { name: 'accelerated_filters_enabled', packedOffset: 548, packedBitOffset: 32, type: mojo.internal.Bool, nullable: false },
        { name: 'deferred_filters_enabled', packedOffset: 548, packedBitOffset: 33, type: mojo.internal.Bool, nullable: false },
        { name: 'container_culling_enabled', packedOffset: 548, packedBitOffset: 34, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_running_insecure_content', packedOffset: 548, packedBitOffset: 35, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_reading_from_canvas', packedOffset: 548, packedBitOffset: 36, type: mojo.internal.Bool, nullable: false },
        { name: 'strict_mixed_content_checking', packedOffset: 548, packedBitOffset: 37, type: mojo.internal.Bool, nullable: false },
        { name: 'strict_powerful_feature_restrictions', packedOffset: 548, packedBitOffset: 38, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_geolocation_on_insecure_origins', packedOffset: 548, packedBitOffset: 39, type: mojo.internal.Bool, nullable: false },
        { name: 'strictly_block_blockable_mixed_content', packedOffset: 548, packedBitOffset: 40, type: mojo.internal.Bool, nullable: false },
        { name: 'block_mixed_plugin_content', packedOffset: 548, packedBitOffset: 41, type: mojo.internal.Bool, nullable: false },
        { name: 'password_echo_enabled_physical', packedOffset: 548, packedBitOffset: 42, type: mojo.internal.Bool, nullable: false },
        { name: 'password_echo_enabled_touch', packedOffset: 548, packedBitOffset: 43, type: mojo.internal.Bool, nullable: false },
        { name: 'should_clear_document_background', packedOffset: 548, packedBitOffset: 44, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_scroll_animator', packedOffset: 548, packedBitOffset: 45, type: mojo.internal.Bool, nullable: false },
        { name: 'prefers_reduced_motion', packedOffset: 548, packedBitOffset: 46, type: mojo.internal.Bool, nullable: false },
        { name: 'prefers_reduced_transparency', packedOffset: 548, packedBitOffset: 47, type: mojo.internal.Bool, nullable: false },
        { name: 'inverted_colors', packedOffset: 548, packedBitOffset: 48, type: mojo.internal.Bool, nullable: false },
        { name: 'touch_event_feature_detection_enabled', packedOffset: 548, packedBitOffset: 49, type: mojo.internal.Bool, nullable: false },
        { name: 'dont_send_key_events_to_javascript', packedOffset: 548, packedBitOffset: 50, type: mojo.internal.Bool, nullable: false },
        { name: 'barrel_button_for_drag_enabled', packedOffset: 548, packedBitOffset: 51, type: mojo.internal.Bool, nullable: false },
        { name: 'sync_xhr_in_documents_enabled', packedOffset: 548, packedBitOffset: 52, type: mojo.internal.Bool, nullable: false },
        { name: 'target_blank_implies_no_opener_enabled_will_be_removed', packedOffset: 548, packedBitOffset: 53, type: mojo.internal.Bool, nullable: false },
        { name: 'ignore_permission_for_device_changed_event', packedOffset: 548, packedBitOffset: 54, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_multiple_windows', packedOffset: 548, packedBitOffset: 55, type: mojo.internal.Bool, nullable: false },
        { name: 'viewport_enabled', packedOffset: 548, packedBitOffset: 56, type: mojo.internal.Bool, nullable: false },
        { name: 'viewport_meta_enabled', packedOffset: 548, packedBitOffset: 57, type: mojo.internal.Bool, nullable: false },
        { name: 'auto_zoom_focused_editable_to_legible_scale', packedOffset: 548, packedBitOffset: 58, type: mojo.internal.Bool, nullable: false },
        { name: 'shrinks_viewport_contents_to_fit', packedOffset: 548, packedBitOffset: 59, type: mojo.internal.Bool, nullable: false },
        { name: 'smooth_scroll_for_find_enabled', packedOffset: 548, packedBitOffset: 60, type: mojo.internal.Bool, nullable: false },
        { name: 'main_frame_resizes_are_orientation_changes', packedOffset: 548, packedBitOffset: 61, type: mojo.internal.Bool, nullable: false },
        { name: 'initialize_at_minimum_page_scale', packedOffset: 548, packedBitOffset: 62, type: mojo.internal.Bool, nullable: false },
        { name: 'smart_insert_delete_enabled', packedOffset: 548, packedBitOffset: 63, type: mojo.internal.Bool, nullable: false },
        { name: 'spatial_navigation_enabled', packedOffset: 548, packedBitOffset: 64, type: mojo.internal.Bool, nullable: false },
        { name: 'record_whole_document', packedOffset: 548, packedBitOffset: 65, type: mojo.internal.Bool, nullable: false },
        { name: 'stylus_handwriting_enabled', packedOffset: 548, packedBitOffset: 66, type: mojo.internal.Bool, nullable: false },
        { name: 'cookie_enabled', packedOffset: 548, packedBitOffset: 67, type: mojo.internal.Bool, nullable: false },
        { name: 'accelerated_video_decode_enabled', packedOffset: 548, packedBitOffset: 68, type: mojo.internal.Bool, nullable: false },
        { name: 'user_gesture_required_for_presentation', packedOffset: 548, packedBitOffset: 69, type: mojo.internal.Bool, nullable: false },
        { name: 'text_tracks_enabled', packedOffset: 548, packedBitOffset: 70, type: mojo.internal.Bool, nullable: false },
        { name: 'immersive_mode_enabled', packedOffset: 548, packedBitOffset: 71, type: mojo.internal.Bool, nullable: false },
        { name: 'double_tap_to_zoom_enabled', packedOffset: 548, packedBitOffset: 72, type: mojo.internal.Bool, nullable: false },
        { name: 'fullscreen_supported', packedOffset: 548, packedBitOffset: 73, type: mojo.internal.Bool, nullable: false },
        { name: 'text_autosizing_enabled', packedOffset: 548, packedBitOffset: 74, type: mojo.internal.Bool, nullable: false },
        { name: 'force_dark_mode_enabled', packedOffset: 548, packedBitOffset: 75, type: mojo.internal.Bool, nullable: false },
        { name: 'hide_download_ui', packedOffset: 548, packedBitOffset: 76, type: mojo.internal.Bool, nullable: false },
        { name: 'presentation_receiver', packedOffset: 548, packedBitOffset: 77, type: mojo.internal.Bool, nullable: false },
        { name: 'media_controls_enabled', packedOffset: 548, packedBitOffset: 78, type: mojo.internal.Bool, nullable: false },
        { name: 'do_not_update_selection_on_mutating_selection_range', packedOffset: 548, packedBitOffset: 79, type: mojo.internal.Bool, nullable: false },
        { name: 'require_transient_activation_for_get_display_media', packedOffset: 548, packedBitOffset: 80, type: mojo.internal.Bool, nullable: false },
        { name: 'require_transient_activation_for_show_file_or_directory_picker', packedOffset: 548, packedBitOffset: 81, type: mojo.internal.Bool, nullable: false },
        { name: 'require_transient_activation_and_user_confirmation_for_subapps_api', packedOffset: 548, packedBitOffset: 82, type: mojo.internal.Bool, nullable: false },
        { name: 'in_forced_colors', packedOffset: 548, packedBitOffset: 83, type: mojo.internal.Bool, nullable: false },
        { name: 'is_forced_colors_disabled', packedOffset: 548, packedBitOffset: 84, type: mojo.internal.Bool, nullable: false },
        { name: 'picture_in_picture_enabled', packedOffset: 548, packedBitOffset: 85, type: mojo.internal.Bool, nullable: false },
        { name: 'translate_service_available', packedOffset: 548, packedBitOffset: 86, type: mojo.internal.Bool, nullable: false },
        { name: 'lazy_load_enabled', packedOffset: 548, packedBitOffset: 87, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_mixed_content_upgrades', packedOffset: 548, packedBitOffset: 88, type: mojo.internal.Bool, nullable: false },
        { name: 'always_show_focus', packedOffset: 548, packedBitOffset: 89, type: mojo.internal.Bool, nullable: false },
        { name: 'touch_drag_drop_enabled', packedOffset: 548, packedBitOffset: 90, type: mojo.internal.Bool, nullable: false },
        { name: 'touch_dragend_context_menu', packedOffset: 548, packedBitOffset: 91, type: mojo.internal.Bool, nullable: false },
        { name: 'webxr_immersive_ar_allowed', packedOffset: 548, packedBitOffset: 92, type: mojo.internal.Bool, nullable: false },
        { name: 'renderer_wide_named_frame_lookup', packedOffset: 548, packedBitOffset: 93, type: mojo.internal.Bool, nullable: false },
        { name: 'strict_mime_type_check_for_worker_scripts_enabled', packedOffset: 548, packedBitOffset: 94, type: mojo.internal.Bool, nullable: false },
        { name: 'modal_context_menu', packedOffset: 548, packedBitOffset: 95, type: mojo.internal.Bool, nullable: false },
        { name: 'payment_request_enabled', packedOffset: 548, packedBitOffset: 96, type: mojo.internal.Bool, nullable: false },
        { name: 'ai_prompt_api_enabled', packedOffset: 548, packedBitOffset: 97, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
