// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/visual_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: VisualProperties
blink.mojom.VisualPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.VisualProperties',
      packedSize: 136,
      fields: [
        { name: 'screen_infos', packedOffset: 0, packedBitOffset: 0, type: display.mojom.ScreenInfosSpec, nullable: false, minVersion: 0 },
        { name: 'auto_resize_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'resizable', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'min_size_for_auto_resize', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_size_for_auto_resize', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'new_size_device_px', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_viewport_size_device_px', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'compositor_viewport_pixel_rect', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'browser_controls_params', packedOffset: 56, packedBitOffset: 0, type: cc.mojom.BrowserControlsParamsSpec, nullable: false, minVersion: 0 },
        { name: 'scroll_focused_node_into_view', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'local_surface_id', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true, minVersion: 0 },
        { name: 'is_fullscreen_granted', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_mode', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.DisplayModeSpec, nullable: false, minVersion: 0 },
        { name: 'window_show_state', packedOffset: 72, packedBitOffset: 0, type: ui.mojom.WindowShowStateSpec, nullable: false, minVersion: 0 },
        { name: 'capture_sequence_number', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'zoom_level', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'css_zoom_factor', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'page_scale_factor', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'compositing_scale_factor', packedOffset: 100, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'cursor_accessibility_scale_factor', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'root_widget_viewport_segments', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'is_pinch_gesture_active', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_controls_overlay_rect', packedOffset: 120, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'virtual_keyboard_resize_height_device_px', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};
