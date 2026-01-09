// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/hdr_static_metadata.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: HDRStaticMetadata
gfx.mojom.HDRStaticMetadataSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.HDRStaticMetadata',
      packedSize: 24,
      fields: [
        { name: 'max', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'max_avg', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'min', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'supported_eotf_mask', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
