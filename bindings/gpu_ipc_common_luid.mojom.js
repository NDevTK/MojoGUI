// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/luid.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: Luid
gpu.mojom.LuidSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.Luid',
      packedSize: 16,
      fields: [
        { name: 'high', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'low', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
