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
        { name: 'crop_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.CropIdBoundsPairSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
