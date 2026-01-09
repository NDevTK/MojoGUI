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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'segmentation_polygon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
