// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/trees_in_viz_timing.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.TreesInVizTimingSpec = { $: {} };

// Struct: TreesInVizTiming
mojo.internal.Struct(
    viz.mojom.TreesInVizTimingSpec, 'viz.mojom.TreesInVizTiming', [
      mojo.internal.StructField('start_update_display_tree', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_prepare_to_draw', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_draw_layers', 16, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('submit_compositor_frame', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
