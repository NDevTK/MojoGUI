// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/rrect_f.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.RRectFTypeSpec = { $: mojo.internal.Enum() };
gfx.mojom.RRectFSpec = { $: {} };

// Enum: RRectFType
gfx.mojom.RRectFType = {
  kEmpty: 0,
  kRect: 1,
  kSingle: 2,
  kSimple: 3,
  kOval: 4,
  kComplex: 5,
};

// Struct: RRectF
mojo.internal.Struct(
    gfx.mojom.RRectFSpec, 'gfx.mojom.RRectF', [
      mojo.internal.StructField('type', 0, 0, gfx.mojom.RRectFTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upper_left', 16, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('upper_right', 24, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lower_right', 32, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lower_left', 40, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);
