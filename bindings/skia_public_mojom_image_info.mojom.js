// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/image_info.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};


// Enum: ColorType
skia.mojom.mojom.ColorType = {
  ALPHA_8: 0,
  RGB_565: 1,
  ARGB_4444: 2,
  RGBA_8888: 3,
  BGRA_8888: 4,
  DEPRECATED_INDEX_8: 5,
  GRAY_8: 6,
};
skia.mojom.mojom.ColorTypeSpec = { $: mojo.internal.Enum() };

// Enum: AlphaType
skia.mojom.mojom.AlphaType = {
  ALPHA_TYPE_OPAQUE: 0,
  PREMUL: 1,
  UNPREMUL: 2,
};
skia.mojom.mojom.AlphaTypeSpec = { $: mojo.internal.Enum() };

// Struct: ImageInfo
skia.mojom.mojom.ImageInfoSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.ImageInfo',
      packedSize: 40,
      fields: [
        { name: 'color_type', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.ColorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'alpha_type', packedOffset: 20, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'color_transfer_function', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'color_to_xyz_matrix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: BitmapN32ImageInfo
skia.mojom.mojom.BitmapN32ImageInfoSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapN32ImageInfo',
      packedSize: 40,
      fields: [
        { name: 'alpha_type', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'color_transfer_function', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'color_to_xyz_matrix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
