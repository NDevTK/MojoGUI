// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/skcolorspace.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};

skia.mojom.SkcmsMatrix3x3Spec = { $: {} };
skia.mojom.SkcmsTransferFunctionSpec = { $: {} };
skia.mojom.SkColorSpaceSpec = { $: {} };

// Struct: SkcmsMatrix3x3
mojo.internal.Struct(
    skia.mojom.SkcmsMatrix3x3Spec, 'skia.mojom.SkcmsMatrix3x3', [
      mojo.internal.StructField('vals', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkcmsTransferFunction
mojo.internal.Struct(
    skia.mojom.SkcmsTransferFunctionSpec, 'skia.mojom.SkcmsTransferFunction', [
      mojo.internal.StructField('g', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('a', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('c', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('d', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('e', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('f', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SkColorSpace
mojo.internal.Struct(
    skia.mojom.SkColorSpaceSpec, 'skia.mojom.SkColorSpace', [
      mojo.internal.StructField('to_linear', 0, 0, skia.mojom.SkcmsTransferFunctionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('to_xyzd50', 8, 0, skia.mojom.SkcmsMatrix3x3Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);
