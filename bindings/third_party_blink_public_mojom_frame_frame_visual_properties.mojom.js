// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_visual_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.FrameVisualPropertiesSpec = { $: {} };

// Struct: FrameVisualProperties
mojo.internal.Struct(
    blink.mojom.FrameVisualPropertiesSpec, 'blink.mojom.FrameVisualProperties', [
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('css_zoom_factor', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_size_for_auto_resize', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size_for_auto_resize', 40, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('root_widget_viewport_segments', 48, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('compositor_viewport', 56, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect_in_local_root', 64, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_size', 72, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 80, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_sequence_number', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 92, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('compositing_scale_factor', 96, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('cursor_accessibility_scale_factor', 100, 0, mojo.internal.Float, 1, false, 0, undefined),
      mojo.internal.StructField('auto_resize_enabled', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pinch_gesture_active', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);
