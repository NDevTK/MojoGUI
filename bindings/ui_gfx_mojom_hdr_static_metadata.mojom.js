// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/hdr_static_metadata.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: HDRStaticMetadata
gfx.mojom.mojom.HDRStaticMetadataSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HDRStaticMetadata',
      packedSize: 24,
      fields: [
        { name: 'max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'max_avg', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'min', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'supported_eotf_mask', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
