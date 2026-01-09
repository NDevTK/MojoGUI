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
      packedSize: 16,
      fields: [
        { name: 'f', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'to_xyzd50', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
