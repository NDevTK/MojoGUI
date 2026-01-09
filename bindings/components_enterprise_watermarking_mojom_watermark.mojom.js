// Auto-generated MojoJS binding
// Source: chromium_src/components/enterprise/watermarking/mojom/watermark.mojom
// Module: watermark.mojom

'use strict';

// Module namespace
var watermark = watermark || {};
watermark.mojom = watermark.mojom || {};


// Struct: WatermarkBlock
watermark.mojom.WatermarkBlockSpec = {
  $: {
    structSpec: {
      name: 'watermark.mojom.WatermarkBlock',
      packedSize: 24,
      fields: [
        { name: 'serialized_skpicture', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
