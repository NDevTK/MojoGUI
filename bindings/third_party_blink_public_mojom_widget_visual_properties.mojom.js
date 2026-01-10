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
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_size_for_auto_resize', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size_for_auto_resize', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_size_device_px', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size_device_px', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('compositor_viewport_pixel_rect', 40, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('browser_controls_params', 48, 0, cc.mojom.BrowserControlsParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 56, 0, viz.mojom.LocalSurfaceIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_mode', 64, 0, blink.mojom.DisplayModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('window_show_state', 72, 0, ui.mojom.WindowShowStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('css_zoom_factor', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('root_widget_viewport_segments', 96, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('window_controls_overlay_rect', 104, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_sequence_number', 112, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 116, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('compositing_scale_factor', 120, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('cursor_accessibility_scale_factor', 124, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('virtual_keyboard_resize_height_device_px', 128, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('auto_resize_enabled', 132, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('resizable', 132, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('scroll_focused_node_into_view', 132, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_fullscreen_granted', 132, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pinch_gesture_active', 132, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);
