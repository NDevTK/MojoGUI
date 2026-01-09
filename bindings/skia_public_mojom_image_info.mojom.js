// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/image_info.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};


// Enum: ColorType
skia.mojom.ColorType = {
  ALPHA_8: 0,
  RGB_565: 1,
  ARGB_4444: 2,
  RGBA_8888: 3,
  BGRA_8888: 4,
  DEPRECATED_INDEX_8: 5,
  GRAY_8: 6,
};

// Enum: AlphaType
skia.mojom.AlphaType = {
  ALPHA_TYPE_OPAQUE: 0,
  PREMUL: 1,
  UNPREMUL: 2,
};

// Struct: ImageInfo
skia.mojom.ImageInfoSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.ImageInfo',
      packedSize: 16,
      fields: [
        { name: 'color_to_xyz_matrix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BitmapN32ImageInfo
skia.mojom.BitmapN32ImageInfoSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.BitmapN32ImageInfo',
      packedSize: 16,
      fields: [
        { name: 'color_to_xyz_matrix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
