// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_visual_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FrameVisualProperties
blink.mojom.FrameVisualPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameVisualProperties',
      packedSize: 120,
      fields: [
        { name: 'screen_infos', packedOffset: 0, packedBitOffset: 0, type: display.mojom.ScreenInfosSpec, nullable: false },
        { name: 'zoom_level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'css_zoom_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'visible_viewport_size', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'min_size_for_auto_resize', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'max_size_for_auto_resize', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'root_widget_viewport_segments', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'compositor_viewport', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'rect_in_local_root', packedOffset: 64, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'local_frame_size', packedOffset: 72, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'local_surface_id', packedOffset: 80, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false },
        { name: 'capture_sequence_number', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'page_scale_factor', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'compositing_scale_factor', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'cursor_accessibility_scale_factor', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'auto_resize_enabled', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_pinch_gesture_active', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
