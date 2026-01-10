// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var skia = skia || {};


// Struct: ImageSkiaRep
gfx.mojom.ImageSkiaRepSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ImageSkiaRep',
      packedSize: 24,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapWithArbitraryBppSpec, nullable: false, minVersion: 0 },
        { name: 'scale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ImageSkia
gfx.mojom.ImageSkiaSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ImageSkia',
      packedSize: 16,
      fields: [
        { name: 'image_reps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.ImageSkiaRepSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
