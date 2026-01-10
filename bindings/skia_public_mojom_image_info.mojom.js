// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/image_info.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};

skia.mojom.ColorTypeSpec = { $: mojo.internal.Enum() };
skia.mojom.AlphaTypeSpec = { $: mojo.internal.Enum() };
skia.mojom.ImageInfoSpec = { $: {} };
skia.mojom.BitmapN32ImageInfoSpec = { $: {} };

// Enum: ColorType
skia.mojom.ColorType = {
  UNKNOWN: 0,
  ALPHA_8: 1,
  RGB_565: 2,
  ARGB_4444: 3,
  RGBA_8888: 4,
  BGRA_8888: 5,
  DEPRECATED_INDEX_8: 6,
  GRAY_8: 7,
};

// Enum: AlphaType
skia.mojom.AlphaType = {
  UNKNOWN: 0,
  ALPHA_TYPE_OPAQUE: 1,
  PREMUL: 2,
  UNPREMUL: 3,
};

// Struct: ImageInfo
mojo.internal.Struct(
    skia.mojom.ImageInfoSpec, 'skia.mojom.ImageInfo', [
      mojo.internal.StructField('color_type', 0, 0, skia.mojom.ColorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('alpha_type', 4, 0, skia.mojom.AlphaTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('color_transfer_function', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
      mojo.internal.StructField('color_to_xyz_matrix', 24, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BitmapN32ImageInfo
mojo.internal.Struct(
    skia.mojom.BitmapN32ImageInfoSpec, 'skia.mojom.BitmapN32ImageInfo', [
      mojo.internal.StructField('alpha_type', 0, 0, skia.mojom.AlphaTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('width', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('color_transfer_function', 16, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
      mojo.internal.StructField('color_to_xyz_matrix', 24, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, true, 0, undefined),
    ],
    [[0, 40]]);
