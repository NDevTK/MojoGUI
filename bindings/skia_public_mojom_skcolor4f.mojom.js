// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/skcolor4f.mojom
// Module: skia.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};

skia.mojom.SkColor4fSpec = { $: {} };

// Struct: SkColor4f
mojo.internal.Struct(
    skia.mojom.SkColor4fSpec, 'skia.mojom.SkColor4f', [
      mojo.internal.StructField('r', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('g', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('a', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);
