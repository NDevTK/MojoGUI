// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/bitmap.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};


// Struct: BitmapN32
skia.mojom.BitmapN32Spec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapN32',
      packedSize: 24,
      fields: [
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pixel_data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BitmapWithArbitraryBpp
skia.mojom.BitmapWithArbitraryBppSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapWithArbitraryBpp',
      packedSize: 32,
      fields: [
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'UNUSED_row_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'pixel_data', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BitmapMappedFromTrustedProcess
skia.mojom.BitmapMappedFromTrustedProcessSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapMappedFromTrustedProcess',
      packedSize: 32,
      fields: [
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'UNUSED_row_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'pixel_data', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InlineBitmap
skia.mojom.InlineBitmapSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.InlineBitmap',
      packedSize: 24,
      fields: [
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pixel_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
