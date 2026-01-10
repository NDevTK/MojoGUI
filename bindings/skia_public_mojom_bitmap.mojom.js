// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/bitmap.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};
var skia = skia || {};


// Struct: BitmapN32
skia.mojom.mojom.BitmapN32Spec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapN32',
      packedSize: 32,
      fields: [
        { name: 'image_info', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.BitmapN32ImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BitmapWithArbitraryBpp
skia.mojom.mojom.BitmapWithArbitraryBppSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapWithArbitraryBpp',
      packedSize: 40,
      fields: [
        { name: 'image_info', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.ImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'UNUSED_row_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BitmapMappedFromTrustedProcess
skia.mojom.mojom.BitmapMappedFromTrustedProcessSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapMappedFromTrustedProcess',
      packedSize: 40,
      fields: [
        { name: 'image_info', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.ImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'UNUSED_row_bytes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'pixel_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: InlineBitmap
skia.mojom.mojom.InlineBitmapSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.InlineBitmap',
      packedSize: 24,
      fields: [
        { name: 'image_info', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32ImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
