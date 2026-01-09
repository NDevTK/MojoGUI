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
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'async_hit_test_reasons', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'async_hit_test_reasons', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'transform', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.TransformSpec, nullable: false, minVersion: 0 },
        { name: 'regions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.HitTestRegionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
