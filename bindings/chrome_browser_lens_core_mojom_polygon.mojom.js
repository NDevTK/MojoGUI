// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/polygon.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: VertexOrdering
lens.mojom.VertexOrdering = {
  kUnspecified: 0,
  kClockwise: 1,
  kCounterClockwise: 2,
};

// Enum: CoordinateType
lens.mojom.CoordinateType = {
  kUnspecified: 0,
  kNormalized: 1,
  kImage: 2,
};

// Struct: Polygon
lens.mojom.PolygonSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Polygon',
      packedSize: 24,
      fields: [
        { name: 'vertex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'kUnspecified', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vertex
lens.mojom.VertexSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Vertex',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
