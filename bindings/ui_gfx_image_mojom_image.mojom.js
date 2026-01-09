// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/image/mojom/image.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: ImageSkiaRep
gfx.mojom.ImageSkiaRepSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ImageSkiaRep',
      packedSize: 24,
      fields: [
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapWithArbitraryBppSpec, nullable: false },
        { name: 'scale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'image_reps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
