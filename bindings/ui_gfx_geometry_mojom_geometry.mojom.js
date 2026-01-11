// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/geometry/mojom/geometry.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.PointSpec = { $: {} };
gfx.mojom.PointFSpec = { $: {} };
gfx.mojom.Point3FSpec = { $: {} };
gfx.mojom.SizeSpec = { $: {} };
gfx.mojom.SizeFSpec = { $: {} };
gfx.mojom.RectSpec = { $: {} };
gfx.mojom.RectFSpec = { $: {} };
gfx.mojom.InsetsSpec = { $: {} };
gfx.mojom.InsetsFSpec = { $: {} };
gfx.mojom.Vector2dSpec = { $: {} };
gfx.mojom.Vector2dFSpec = { $: {} };
gfx.mojom.Vector3dFSpec = { $: {} };
gfx.mojom.QuaternionSpec = { $: {} };
gfx.mojom.QuadFSpec = { $: {} };
gfx.mojom.AxisTransform2dSpec = { $: {} };

// Struct: Point
mojo.internal.Struct(
    gfx.mojom.PointSpec, 'gfx.mojom.Point', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PointF
mojo.internal.Struct(
    gfx.mojom.PointFSpec, 'gfx.mojom.PointF', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Point3F
mojo.internal.Struct(
    gfx.mojom.Point3FSpec, 'gfx.mojom.Point3F', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Size
mojo.internal.Struct(
    gfx.mojom.SizeSpec, 'gfx.mojom.Size', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SizeF
mojo.internal.Struct(
    gfx.mojom.SizeFSpec, 'gfx.mojom.SizeF', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Rect
mojo.internal.Struct(
    gfx.mojom.RectSpec, 'gfx.mojom.Rect', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RectF
mojo.internal.Struct(
    gfx.mojom.RectFSpec, 'gfx.mojom.RectF', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Insets
mojo.internal.Struct(
    gfx.mojom.InsetsSpec, 'gfx.mojom.Insets', [
      mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InsetsF
mojo.internal.Struct(
    gfx.mojom.InsetsFSpec, 'gfx.mojom.InsetsF', [
      mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Vector2d
mojo.internal.Struct(
    gfx.mojom.Vector2dSpec, 'gfx.mojom.Vector2d', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vector2dF
mojo.internal.Struct(
    gfx.mojom.Vector2dFSpec, 'gfx.mojom.Vector2dF', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Vector3dF
mojo.internal.Struct(
    gfx.mojom.Vector3dFSpec, 'gfx.mojom.Vector3dF', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Quaternion
mojo.internal.Struct(
    gfx.mojom.QuaternionSpec, 'gfx.mojom.Quaternion', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: QuadF
mojo.internal.Struct(
    gfx.mojom.QuadFSpec, 'gfx.mojom.QuadF', [
      mojo.internal.StructField('p1', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p2', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p3', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p4', 24, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AxisTransform2d
mojo.internal.Struct(
    gfx.mojom.AxisTransform2dSpec, 'gfx.mojom.AxisTransform2d', [
      mojo.internal.StructField('scale', 0, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('translation', 8, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
