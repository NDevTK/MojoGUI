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
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec, null, false, 0, undefined),
      mojo.internal.StructField('auto_resize_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pinch_gesture_active', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_sequence_number', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_level', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('css_zoom_factor', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('page_scale_factor', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('compositing_scale_factor', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('cursor_accessibility_scale_factor', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('visible_viewport_size', 48, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('min_size_for_auto_resize', 56, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('max_size_for_auto_resize', 64, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('root_widget_viewport_segments', 72, 0, mojo.internal.Array(gfx.mojom.RectSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('compositor_viewport', 80, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('rect_in_local_root', 88, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_size', 96, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('local_surface_id', 104, 0, viz.mojom.LocalSurfaceIdSpec, null, false, 0, undefined),
    ],
    [[0, 120]]);
