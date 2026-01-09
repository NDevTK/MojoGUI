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
lens.mojom.CoordinateTypeSpec = { $: mojo.internal.Enum() };

// Struct: CenterRotatedBox
lens.mojom.CenterRotatedBoxSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.CenterRotatedBox',
      packedSize: 32,
      fields: [
        { name: 'box', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
        { name: 'rotation', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'kUnspecified', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'bounding_box', packedOffset: 0, packedBitOffset: 0, type: lens.mojom.CenterRotatedBoxSpec, nullable: false, minVersion: 0 },
        { name: 'segmentation_polygon', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.PolygonSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
