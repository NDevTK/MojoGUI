// Auto-generated MojoJS binding
// Source: chromium_src/skia/public/mojom/skcolorspace.mojom
// Module: skia.mojom

'use strict';

// Module namespace
var skia = skia || {};
skia.mojom = skia.mojom || {};


// Struct: SkcmsMatrix3x3
skia.mojom.mojom.SkcmsMatrix3x3Spec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkcmsMatrix3x3',
      packedSize: 16,
      fields: [
        { name: 'vals', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SkcmsTransferFunction
skia.mojom.mojom.SkcmsTransferFunctionSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkcmsTransferFunction',
      packedSize: 40,
      fields: [
        { name: 'g', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'a', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'c', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'd', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'e', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'f', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SkColorSpace
skia.mojom.mojom.SkColorSpaceSpec = {
  $: {
    structSpec: {
      name: 'skia.mojom.SkColorSpace',
      packedSize: 24,
      fields: [
        { name: 'to_linear', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkcmsTransferFunctionSpec, nullable: true, minVersion: 0 },
        { name: 'to_xyzd50', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkcmsMatrix3x3Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
