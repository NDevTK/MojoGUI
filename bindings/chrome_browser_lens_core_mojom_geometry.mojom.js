// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/geometry.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};
var gfx = gfx || {};

lens.mojom.CoordinateTypeSpec = { $: mojo.internal.Enum() };
lens.mojom.CenterRotatedBoxSpec = { $: {} };
lens.mojom.GeometrySpec = { $: {} };

// Enum: CoordinateType
lens.mojom.CoordinateType = {
  kUnspecified: 0,
  kNormalized: 1,
  kImage: 2,
};

// Struct: CenterRotatedBox
mojo.internal.Struct(
    lens.mojom.CenterRotatedBoxSpec, 'lens.mojom.CenterRotatedBox', [
      mojo.internal.StructField('box', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kUnspecified', 8, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('rotation', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Geometry
mojo.internal.Struct(
    lens.mojom.GeometrySpec, 'lens.mojom.Geometry', [
      mojo.internal.StructField('bounding_box', 0, 0, lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('segmentation_polygon', 8, 0, mojo.internal.Array(lens.mojom.PolygonSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
