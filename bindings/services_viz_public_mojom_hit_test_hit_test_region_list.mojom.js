// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/hit_test_region_list.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: HitTestRegion
viz.mojom.HitTestRegionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.HitTestRegion',
      packedSize: 40,
      fields: [
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'async_hit_test_reasons', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'frame_sink_id', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'transform', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HitTestRegionList
viz.mojom.HitTestRegionListSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.HitTestRegionList',
      packedSize: 40,
      fields: [
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'async_hit_test_reasons', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'transform', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false },
        { name: 'regions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
