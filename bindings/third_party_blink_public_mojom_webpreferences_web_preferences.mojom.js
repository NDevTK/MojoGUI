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
      mojo.internal.StructField('standard_font_family_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('fixed_font_family_map', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('serif_font_family_map', 16, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('sans_serif_font_family_map', 24, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('cursive_font_family_map', 32, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('fantasy_font_family_map', 40, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('math_font_family_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.String16Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('default_font_size', 160, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('default_fixed_font_size', 164, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_font_size', 168, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_logical_font_size', 172, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('default_encoding', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('always_show_context_menu_on_touch', 272, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('context_menu_on_mouse_up', 272, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('javascript_enabled', 272, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('web_security_enabled', 272, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('loads_images_automatically', 272, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('images_enabled', 272, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('plugins_enabled', 272, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dom_paste_enabled', 272, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shrinks_standalone_images_to_fit', 273, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_areas_are_resizable', 273, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_scripts_to_close_windows', 273, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_window_focus_without_user_gesture', 273, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('remote_fonts_enabled', 273, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('javascript_can_access_clipboard', 273, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dns_prefetching_enabled', 273, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data_saver_enabled', 273, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('local_storage_enabled', 274, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tabs_to_links', 274, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_ipc_flooding_protection', 274, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hyperlink_auditing_enabled', 274, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_universal_access_from_file_urls', 274, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_file_access_from_file_urls', 274, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl1_enabled', 274, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl2_enabled', 274, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('privileged_webgl_extensions_enabled', 275, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webgl_errors_to_console_enabled', 275, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hide_scrollbars', 275, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_default_scrollbar_styles', 275, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_2d_canvas_enabled', 275, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('canvas_2d_layers_enabled', 275, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('antialiased_2d_canvas_disabled', 275, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('antialiased_clips_2d_canvas_enabled', 275, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_filters_enabled', 276, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('deferred_filters_enabled', 276, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('container_culling_enabled', 276, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_running_insecure_content', 276, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_reading_from_canvas', 276, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_mixed_content_checking', 276, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_powerful_feature_restrictions', 276, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_geolocation_on_insecure_origins', 276, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strictly_block_blockable_mixed_content', 277, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('block_mixed_plugin_content', 277, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('password_echo_enabled_physical', 277, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('password_echo_enabled_touch', 277, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_clear_document_background', 277, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_scroll_animator', 277, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_reduced_motion', 277, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prefers_reduced_transparency', 277, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('inverted_colors', 278, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_event_feature_detection_enabled', 278, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pointer_events_max_touch_points', 176, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('available_pointer_types', 180, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('primary_pointer_type', 184, 0, blink.mojom.PointerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_device_update_ability_type', 188, 0, blink.mojom.OutputDeviceUpdateAbilityTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('available_hover_types', 192, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('primary_hover_type', 196, 0, blink.mojom.HoverTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('dont_send_key_events_to_javascript', 278, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('barrel_button_for_drag_enabled', 278, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sync_xhr_in_documents_enabled', 278, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('target_blank_implies_no_opener_enabled_will_be_removed', 278, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_permission_for_device_changed_event', 278, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('number_of_cpu_cores', 200, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('editing_behavior', 204, 0, blink.mojom.EditingBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('supports_multiple_windows', 278, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_enabled', 279, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_enabled', 279, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_zoom_focused_editable_to_legible_scale', 279, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shrinks_viewport_contents_to_fit', 279, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_style', 208, 0, blink.mojom.ViewportStyleSpec, null, false, 0, undefined),
      mojo.internal.StructField('smooth_scroll_for_find_enabled', 279, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('main_frame_resizes_are_orientation_changes', 279, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('initialize_at_minimum_page_scale', 279, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('smart_insert_delete_enabled', 279, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spatial_navigation_enabled', 280, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('v8_cache_options', 212, 0, blink.mojom.V8CacheOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('record_whole_document', 280, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('stylus_handwriting_enabled', 280, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cookie_enabled', 280, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerated_video_decode_enabled', 280, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('animation_policy', 216, 0, blink.mojom.ImageAnimationPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture_required_for_presentation', 280, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_tracks_enabled', 280, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_track_background_color', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_color', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_size', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_text_shadow', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_family', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_style', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_font_variant', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_window_color', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_window_radius', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_track_margin_percentage', 220, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('immersive_mode_enabled', 280, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('double_tap_to_zoom_enabled', 281, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fullscreen_supported', 281, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_autosizing_enabled', 281, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('web_app_scope', 136, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('font_scale_factor', 224, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('font_weight_adjustment', 228, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('text_size_contrast_factor', 232, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_adjustment', 236, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('force_enable_zoom', 281, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('default_video_poster_url', 144, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('support_deprecated_target_density_dpi', 281, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wide_viewport_quirk', 281, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_wide_viewport', 281, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_zero_layout_height', 281, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_merge_content_quirk', 282, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_non_user_scalable_quirk', 282, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('viewport_meta_zero_values_quirk', 282, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('clobber_user_agent_initial_scale_quirk', 282, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore_main_frame_overflow_hidden_quirk', 282, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('report_screen_size_in_physical_pixels_quirk', 282, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('reuse_global_for_unowned_main_frame', 282, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('spellcheck_enabled_by_default', 282, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video_fullscreen_orientation_lock_enabled', 283, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('video_rotate_to_fullscreen_enabled', 283, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('embedded_media_experience_enabled', 283, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('css_hex_alpha_color_enabled', 283, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_top_left_interop_enabled', 283, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_accelerated_small_canvases', 283, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('long_press_link_select_text', 283, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scale_all_fonts_if_no_meta_text_scale_tag', 283, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_webauthn', 284, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_webauthn', 284, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_dark_mode_enabled', 284, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('default_minimum_page_scale_factor', 240, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('default_maximum_page_scale_factor', 244, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('hide_download_ui', 284, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('presentation_receiver', 284, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('media_controls_enabled', 284, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('do_not_update_selection_on_mutating_selection_range', 284, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('autoplay_policy', 248, 0, blink.mojom.AutoplayPolicySpec, null, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_for_get_display_media', 284, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_for_show_file_or_directory_picker', 285, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_transient_activation_and_user_confirmation_for_subapps_api', 285, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_forced_colors', 285, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_forced_colors_disabled', 285, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('root_scrollbar_theme_color', 152, 0, skia.mojom.SkColorSpec, null, true, 0, undefined),
      mojo.internal.StructField('preferred_root_scrollbar_color_scheme', 252, 0, blink.mojom.PreferredColorSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('preferred_color_scheme', 256, 0, blink.mojom.PreferredColorSchemeSpec, null, false, 0, undefined),
      mojo.internal.StructField('preferred_contrast', 260, 0, blink.mojom.PreferredContrastSpec, null, false, 0, undefined),
      mojo.internal.StructField('low_priority_iframes_threshold', 264, 0, blink.mojom.EffectiveConnectionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('picture_in_picture_enabled', 285, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('translate_service_available', 285, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('network_quality_estimator_web_holdback', 268, 0, blink.mojom.EffectiveConnectionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('lazy_load_enabled', 285, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_mixed_content_upgrades', 285, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_show_focus', 286, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_drag_drop_enabled', 286, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_dragend_context_menu', 286, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webxr_immersive_ar_allowed', 286, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('renderer_wide_named_frame_lookup', 286, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('strict_mime_type_check_for_worker_scripts_enabled', 286, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('modal_context_menu', 286, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dynamic_safe_area_insets_enabled', 286, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('payment_request_enabled', 287, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ai_prompt_api_enabled', 287, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_screenshot_on_mainframe_same_doc_navigation', 287, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_disable_external_popups', 287, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 296]]);
