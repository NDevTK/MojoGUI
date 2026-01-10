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

blink.mojom.PointerTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.HoverTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.OutputDeviceUpdateAbilityTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.EditingBehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.ImageAnimationPolicySpec = { $: mojo.internal.Enum() };
blink.mojom.ViewportStyleSpec = { $: mojo.internal.Enum() };
blink.mojom.AutoplayPolicySpec = { $: mojo.internal.Enum() };
blink.mojom.EffectiveConnectionTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.WebPreferencesSpec = { $: {} };

// Enum: PointerType
blink.mojom.PointerType = {
  kPointerNone: 1,
  kPointerFirstType: 1,
  kPointerCoarseType: 2,
  kPointerFineType: 4,
};

// Enum: HoverType
blink.mojom.HoverType = {
  kHoverNone: 1,
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
  kLast: 2,
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
mojo.internal.Struct(
    blink.mojom.WebPreferencesSpec, 'blink.mojom.WebPreferences', [
      mojo.internal.StructField('standard_font_family_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fixed_font_family_map', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('serif_font_family_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sans_serif_font_family_map', 24, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('cursive_font_family_map', 32, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fantasy_font_family_map', 40, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('math_font_family_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_encoding', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('primary_pointer_type', 64, 0, blink.mojom.PointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_device_update_ability_type', 72, 0, blink.mojom.OutputDeviceUpdateAbilityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_hover_type', 80, 0, blink.mojom.HoverTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('editing_behavior', 88, 0, blink.mojom.EditingBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport_style', 96, 0, blink.mojom.ViewportStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('v8_cache_options', 104, 0, blink.mojom.V8CacheOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('animation_policy', 112, 0, blink.mojom.ImageAnimationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_track_background_color', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_color', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_size', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_shadow', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_family', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_style', 160, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_variant', 168, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_window_color', 176, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_window_radius', 184, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('web_app_scope', 192, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_video_poster_url', 200, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('autoplay_policy', 208, 0, blink.mojom.AutoplayPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_scrollbar_theme_color', 216, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('preferred_root_scrollbar_color_scheme', 224, 0, blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_color_scheme', 232, 0, blink.mojom.PreferredColorSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_contrast', 240, 0, blink.mojom.PreferredContrastSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('low_priority_iframes_threshold', 248, 0, blink.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_quality_estimator_web_holdback', 256, 0, blink.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_font_size', 264, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('default_fixed_font_size', 268, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_font_size', 272, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_logical_font_size', 276, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pointer_events_max_touch_points', 280, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('available_pointer_types', 284, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('available_hover_types', 288, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('number_of_cpu_cores', 292, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('text_track_margin_percentage', 296, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('font_scale_factor', 300, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('font_weight_adjustment', 304, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('text_size_contrast_factor', 308, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_adjustment', 312, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('default_minimum_page_scale_factor', 316, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('default_maximum_page_scale_factor', 320, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('always_show_context_menu_on_touch', 324, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('context_menu_on_mouse_up', 324, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('javascript_enabled', 324, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('web_security_enabled', 324, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('loads_images_automatically', 324, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('images_enabled', 324, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('plugins_enabled', 324, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dom_paste_enabled', 324, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shrinks_standalone_images_to_fit', 325, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_areas_are_resizable', 325, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_scripts_to_close_windows', 325, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_window_focus_without_user_gesture', 325, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('remote_fonts_enabled', 325, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('javascript_can_access_clipboard', 325, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dns_prefetching_enabled', 325, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data_saver_enabled', 325, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('local_storage_enabled', 326, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tabs_to_links', 326, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_ipc_flooding_protection', 326, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hyperlink_auditing_enabled', 326, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_universal_access_from_file_urls', 326, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_file_access_from_file_urls', 326, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl1_enabled', 326, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl2_enabled', 326, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('privileged_webgl_extensions_enabled', 327, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl_errors_to_console_enabled', 327, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_scrollbars', 327, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_default_scrollbar_styles', 327, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_2d_canvas_enabled', 327, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('canvas_2d_layers_enabled', 327, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('antialiased_2d_canvas_disabled', 327, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('antialiased_clips_2d_canvas_enabled', 327, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_filters_enabled', 328, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deferred_filters_enabled', 328, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('container_culling_enabled', 328, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_running_insecure_content', 328, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_reading_from_canvas', 328, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_mixed_content_checking', 328, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_powerful_feature_restrictions', 328, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_geolocation_on_insecure_origins', 328, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strictly_block_blockable_mixed_content', 329, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('block_mixed_plugin_content', 329, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('password_echo_enabled_physical', 329, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('password_echo_enabled_touch', 329, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_clear_document_background', 329, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_scroll_animator', 329, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_reduced_motion', 329, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_reduced_transparency', 329, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('inverted_colors', 330, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_event_feature_detection_enabled', 330, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dont_send_key_events_to_javascript', 330, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('barrel_button_for_drag_enabled', 330, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sync_xhr_in_documents_enabled', 330, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('target_blank_implies_no_opener_enabled_will_be_removed', 330, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_permission_for_device_changed_event', 330, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_multiple_windows', 330, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_enabled', 331, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_enabled', 331, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_zoom_focused_editable_to_legible_scale', 331, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shrinks_viewport_contents_to_fit', 331, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('smooth_scroll_for_find_enabled', 331, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('main_frame_resizes_are_orientation_changes', 331, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initialize_at_minimum_page_scale', 331, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('smart_insert_delete_enabled', 331, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spatial_navigation_enabled', 332, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('record_whole_document', 332, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stylus_handwriting_enabled', 332, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cookie_enabled', 332, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_video_decode_enabled', 332, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_gesture_required_for_presentation', 332, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_tracks_enabled', 332, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('immersive_mode_enabled', 332, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('double_tap_to_zoom_enabled', 333, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fullscreen_supported', 333, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_autosizing_enabled', 333, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 333, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('support_deprecated_target_density_dpi', 333, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wide_viewport_quirk', 333, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_wide_viewport', 333, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_zero_layout_height', 333, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_merge_content_quirk', 334, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_non_user_scalable_quirk', 334, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_zero_values_quirk', 334, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('clobber_user_agent_initial_scale_quirk', 334, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_main_frame_overflow_hidden_quirk', 334, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_screen_size_in_physical_pixels_quirk', 334, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reuse_global_for_unowned_main_frame', 334, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spellcheck_enabled_by_default', 334, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video_fullscreen_orientation_lock_enabled', 335, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video_rotate_to_fullscreen_enabled', 335, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('embedded_media_experience_enabled', 335, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('css_hex_alpha_color_enabled', 335, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_top_left_interop_enabled', 335, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_accelerated_small_canvases', 335, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('long_press_link_select_text', 335, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scale_all_fonts_if_no_meta_text_scale_tag', 335, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_webauthn', 336, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_webauthn', 336, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_dark_mode_enabled', 336, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_download_ui', 336, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('presentation_receiver', 336, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('media_controls_enabled', 336, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('do_not_update_selection_on_mutating_selection_range', 336, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_for_get_display_media', 336, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_for_show_file_or_directory_picker', 337, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_and_user_confirmation_for_subapps_api', 337, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_forced_colors', 337, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_forced_colors_disabled', 337, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('picture_in_picture_enabled', 337, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('translate_service_available', 337, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('lazy_load_enabled', 337, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_mixed_content_upgrades', 337, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_show_focus', 338, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_drag_drop_enabled', 338, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_dragend_context_menu', 338, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webxr_immersive_ar_allowed', 338, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('renderer_wide_named_frame_lookup', 338, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_mime_type_check_for_worker_scripts_enabled', 338, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('modal_context_menu', 338, 6, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('dynamic_safe_area_insets_enabled', 338, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('payment_request_enabled', 339, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ai_prompt_api_enabled', 339, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_screenshot_on_mainframe_same_doc_navigation', 339, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('should_disable_external_popups', 339, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 352]]);
