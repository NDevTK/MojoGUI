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
      mojo.internal.StructField('debugger_paused', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_fps_counter', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_render_pass_borders', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_surface_borders', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layer_borders', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layout_shift_regions', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_paint_rects', 4, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_property_changed_rects', 4, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_surface_damage_rects', 5, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_screen_space_rects', 5, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_touch_event_handler_rects', 5, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_wheel_event_handler_rects', 5, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_scroll_event_handler_rects', 5, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_main_thread_scroll_hit_test_rects', 5, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_main_thread_scroll_repaint_rects', 5, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_raster_inducing_scroll_rects', 5, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_layer_animation_bounds_rects', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('slow_down_raster_scale_factor', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('rasterize_only_visible_content', 6, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('record_rendering_stats', 6, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
