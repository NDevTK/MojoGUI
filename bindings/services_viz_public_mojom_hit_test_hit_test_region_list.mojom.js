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
      packedSize: 16,
      fields: [
        { name: 'transform', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'regions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
