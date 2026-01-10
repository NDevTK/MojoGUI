// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/polygon.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};

lens.mojom.VertexOrderingSpec = { $: mojo.internal.Enum() };
lens.mojom.CoordinateTypeSpec = { $: mojo.internal.Enum() };
lens.mojom.PolygonSpec = { $: {} };
lens.mojom.VertexSpec = { $: {} };

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
mojo.internal.Struct(
    lens.mojom.PolygonSpec, 'lens.mojom.Polygon', [
      mojo.internal.StructField('vertex', 0, 0, mojo.internal.Array(lens.mojom.VertexSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kUnspecified', 8, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Vertex
mojo.internal.Struct(
    lens.mojom.VertexSpec, 'lens.mojom.Vertex', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);
