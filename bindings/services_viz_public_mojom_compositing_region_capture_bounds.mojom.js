// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/region_capture_bounds.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: CropIdBoundsPair
viz.mojom.CropIdBoundsPairSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CropIdBoundsPair',
      packedSize: 24,
      fields: [
        { name: 'crop_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RegionCaptureBounds
viz.mojom.RegionCaptureBoundsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RegionCaptureBounds',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
