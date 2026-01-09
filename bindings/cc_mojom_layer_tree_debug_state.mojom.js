// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/layer_tree_debug_state.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: LayerTreeDebugState
cc.mojom.LayerTreeDebugStateSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.LayerTreeDebugState',
      packedSize: 32,
      fields: [
        { name: 'debugger_paused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'show_fps_counter', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'show_render_pass_borders', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'show_surface_borders', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'show_layer_borders', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'show_layout_shift_regions', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'show_paint_rects', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'show_property_changed_rects', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'show_surface_damage_rects', packedOffset: 0, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'show_screen_space_rects', packedOffset: 0, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
        { name: 'show_touch_event_handler_rects', packedOffset: 0, packedBitOffset: 10, type: mojo.internal.Bool, nullable: false },
        { name: 'show_wheel_event_handler_rects', packedOffset: 0, packedBitOffset: 11, type: mojo.internal.Bool, nullable: false },
        { name: 'show_scroll_event_handler_rects', packedOffset: 0, packedBitOffset: 12, type: mojo.internal.Bool, nullable: false },
        { name: 'show_main_thread_scroll_hit_test_rects', packedOffset: 0, packedBitOffset: 13, type: mojo.internal.Bool, nullable: false },
        { name: 'show_main_thread_scroll_repaint_rects', packedOffset: 0, packedBitOffset: 14, type: mojo.internal.Bool, nullable: false },
        { name: 'show_raster_inducing_scroll_rects', packedOffset: 0, packedBitOffset: 15, type: mojo.internal.Bool, nullable: false },
        { name: 'show_layer_animation_bounds_rects', packedOffset: 0, packedBitOffset: 16, type: mojo.internal.Bool, nullable: false },
        { name: 'slow_down_raster_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'rasterize_only_visible_content', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'record_rendering_stats', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
