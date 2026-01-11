// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/delegated_ink_point.mojom
// Module: gfx.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var mojo_base = mojo_base || {};

gfx.mojom.DelegatedInkPointSpec = { $: {} };

// Struct: DelegatedInkPoint
mojo.internal.Struct(
    gfx.mojom.DelegatedInkPointSpec, 'gfx.mojom.DelegatedInkPoint', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
