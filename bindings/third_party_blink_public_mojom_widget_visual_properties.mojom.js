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
      packedSize: 184,
      fields: [
        { name: 'screen_infos', packedOffset: 8, packedBitOffset: 0, type: display.mojom.ScreenInfosSpec, nullable: false },
        { name: 'auto_resize_enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'resizable', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'min_size_for_auto_resize', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'max_size_for_auto_resize', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'new_size_device_px', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'visible_viewport_size_device_px', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'compositor_viewport_pixel_rect', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'browser_controls_params', packedOffset: 64, packedBitOffset: 0, type: cc.mojom.BrowserControlsParamsSpec, nullable: false },
        { name: 'scroll_focused_node_into_view', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'local_surface_id', packedOffset: 80, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: true },
        { name: 'is_fullscreen_granted', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'display_mode', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.DisplayModeSpec, nullable: false },
        { name: 'window_show_state', packedOffset: 104, packedBitOffset: 0, type: ui.mojom.WindowShowStateSpec, nullable: false },
        { name: 'capture_sequence_number', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'zoom_level', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'css_zoom_factor', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'page_scale_factor', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'compositing_scale_factor', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'cursor_accessibility_scale_factor', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'root_widget_viewport_segments', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_pinch_gesture_active', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'window_controls_overlay_rect', packedOffset: 168, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'virtual_keyboard_resize_height_device_px', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
