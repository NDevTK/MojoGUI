// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/gfx.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.RectSpec = { $: {} };
arc.mojom.RangeSpec = { $: {} };
arc.mojom.SizeSpec = { $: {} };

// Struct: Rect
mojo.internal.Struct(
    arc.mojom.RectSpec, 'arc.mojom.Rect', [
      mojo.internal.StructField('left', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('top', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Range
mojo.internal.Struct(
    arc.mojom.RangeSpec, 'arc.mojom.Range', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Size
mojo.internal.Struct(
    arc.mojom.SizeSpec, 'arc.mojom.Size', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
