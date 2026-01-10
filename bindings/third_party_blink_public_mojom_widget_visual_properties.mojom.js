// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/visual_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};

blink.mojom.VisualPropertiesSpec = { $: {} };

// Struct: VisualProperties
mojo.internal.Struct(
    blink.mojom.VisualPropertiesSpec, 'blink.mojom.VisualProperties', [
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec, null, false, 0, undefined),
      mojo.internal.StructField('auto_resize_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resizable', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('min_size_for_auto_resize', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_size_for_auto_resize', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_size_device_px', 32, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size_device_px', 40, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('compositor_viewport_pixel_rect', 48, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 56, 0, cc.mojom.BrowserControlsParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('scroll_focused_node_into_view', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 72, 0, viz.mojom.LocalSurfaceIdSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_fullscreen_granted', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_mode', 84, 0, blink.mojom.DisplayModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('window_show_state', 88, 0, ui.mojom.WindowShowStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('capture_sequence_number', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 96, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('css_zoom_factor', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('compositing_scale_factor', 116, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('cursor_accessibility_scale_factor', 120, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('root_widget_viewport_segments', 128, 0, mojo.internal.Array(gfx.mojom.RectSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('is_pinch_gesture_active', 136, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('window_controls_overlay_rect', 144, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('virtual_keyboard_resize_height_device_px', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 168]]);
