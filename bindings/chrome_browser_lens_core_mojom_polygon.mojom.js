// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/polygon.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Enum: VertexOrdering
lens.mojom.mojom.VertexOrdering = {
  kUnspecified: 0,
  kClockwise: 1,
  kCounterClockwise: 2,
};
lens.mojom.mojom.VertexOrderingSpec = { $: mojo.internal.Enum() };

// Enum: CoordinateType
lens.mojom.mojom.CoordinateType = {
  kUnspecified: 0,
  kNormalized: 1,
  kImage: 2,
};
lens.mojom.mojom.CoordinateTypeSpec = { $: mojo.internal.Enum() };

// Struct: Polygon
lens.mojom.mojom.PolygonSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Polygon',
      packedSize: 24,
      fields: [
        { name: 'vertex', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(lens.mojom.VertexSpec, false), nullable: false, minVersion: 0 },
        { name: 'kUnspecified', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Vertex
lens.mojom.mojom.VertexSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.Vertex',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
