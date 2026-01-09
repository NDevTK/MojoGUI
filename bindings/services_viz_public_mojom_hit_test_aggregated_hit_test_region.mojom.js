// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/aggregated_hit_test_region.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: AggregatedHitTestRegion
viz.mojom.AggregatedHitTestRegionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AggregatedHitTestRegion',
      packedSize: 48,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transform', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'flags', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'async_hit_test_reasons', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'child_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
