// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var skia = skia || {};

gfx.mojom.ImageSkiaRepSpec = { $: {} };
gfx.mojom.ImageSkiaSpec = { $: {} };

// Struct: ImageSkiaRep
mojo.internal.Struct(
    gfx.mojom.ImageSkiaRepSpec, 'gfx.mojom.ImageSkiaRep', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapWithArbitraryBppSpec, null, false, 0, undefined),
      mojo.internal.StructField('scale', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImageSkia
mojo.internal.Struct(
    gfx.mojom.ImageSkiaSpec, 'gfx.mojom.ImageSkia', [
      mojo.internal.StructField('image_reps', 0, 0, mojo.internal.Array(gfx.mojom.ImageSkiaRepSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
