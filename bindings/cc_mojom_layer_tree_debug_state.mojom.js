// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/layer_tree_debug_state.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};

cc.mojom.LayerTreeDebugStateSpec = { $: {} };

// Struct: LayerTreeDebugState
mojo.internal.Struct(
    cc.mojom.LayerTreeDebugStateSpec, 'cc.mojom.LayerTreeDebugState', [
      mojo.internal.StructField('debugger_paused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_fps_counter', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_render_pass_borders', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_surface_borders', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layer_borders', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layout_shift_regions', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_paint_rects', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_property_changed_rects', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_surface_damage_rects', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_screen_space_rects', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_touch_event_handler_rects', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_wheel_event_handler_rects', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_scroll_event_handler_rects', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_main_thread_scroll_hit_test_rects', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_main_thread_scroll_repaint_rects', 1, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_raster_inducing_scroll_rects', 1, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layer_animation_bounds_rects', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('slow_down_raster_scale_factor', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rasterize_only_visible_content', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('record_rendering_stats', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
