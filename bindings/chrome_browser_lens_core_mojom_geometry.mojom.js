// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/geometry.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: CoordinateType
lens.mojom.CoordinateType = {
  kUnspecified: 0,
  kNormalized: 1,
  kImage: 2,
};

// Struct: CenterRotatedBox
lens.mojom.CenterRotatedBoxSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.CenterRotatedBox',
      packedSize: 32,
      fields: [
        { name: 'box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
        { name: 'kUnspecified', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rotation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Geometry
lens.mojom.GeometrySpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Geometry',
      packedSize: 24,
      fields: [
        { name: 'bounding_box', packedOffset: 0, packedBitOffset: 0, type: lens.mojom.CenterRotatedBoxSpec, nullable: false },
        { name: 'segmentation_polygon', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
