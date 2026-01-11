// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/bitmap.mojom
// Module: skia.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};
var mojo_base = mojo_base || {};

skia.mojom.BitmapN32Spec = { $: {} };
skia.mojom.BitmapWithArbitraryBppSpec = { $: {} };
skia.mojom.BitmapMappedFromTrustedProcessSpec = { $: {} };
skia.mojom.InlineBitmapSpec = { $: {} };

// Struct: BitmapN32
mojo.internal.Struct(
    skia.mojom.BitmapN32Spec, 'skia.mojom.BitmapN32', [
      mojo.internal.StructField('image_info', 0, 0, skia.mojom.BitmapN32ImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_data', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BitmapWithArbitraryBpp
mojo.internal.Struct(
    skia.mojom.BitmapWithArbitraryBppSpec, 'skia.mojom.BitmapWithArbitraryBpp', [
      mojo.internal.StructField('image_info', 0, 0, skia.mojom.ImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('UNUSED_row_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BitmapMappedFromTrustedProcess
mojo.internal.Struct(
    skia.mojom.BitmapMappedFromTrustedProcessSpec, 'skia.mojom.BitmapMappedFromTrustedProcess', [
      mojo.internal.StructField('image_info', 0, 0, skia.mojom.ImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('UNUSED_row_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_data', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: InlineBitmap
mojo.internal.Struct(
    skia.mojom.InlineBitmapSpec, 'skia.mojom.InlineBitmap', [
      mojo.internal.StructField('image_info', 0, 0, skia.mojom.BitmapN32ImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
