// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/skcolorspace.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};


// Struct: SkcmsMatrix3x3
skia.mojom.SkcmsMatrix3x3Spec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkcmsMatrix3x3',
      packedSize: 16,
      fields: [
        { name: 'vals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SkcmsTransferFunction
skia.mojom.SkcmsTransferFunctionSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkcmsTransferFunction',
      packedSize: 40,
      fields: [
        { name: 'g', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'a', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'c', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'd', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'e', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'f', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SkColorSpace
skia.mojom.SkColorSpaceSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkColorSpace',
      packedSize: 24,
      fields: [
        { name: 'to_linear', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'to_xyzd50', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
