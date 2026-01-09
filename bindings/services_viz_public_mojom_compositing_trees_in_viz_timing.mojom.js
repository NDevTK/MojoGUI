// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/trees_in_viz_timing.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: TreesInVizTiming
viz.mojom.TreesInVizTimingSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TreesInVizTiming',
      packedSize: 40,
      fields: [
        { name: 'start_update_display_tree', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'start_prepare_to_draw', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'start_draw_layers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'submit_compositor_frame', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
