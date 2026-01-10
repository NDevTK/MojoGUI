// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/luid.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: Luid
gpu.mojom.mojom.LuidSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.Luid',
      packedSize: 16,
      fields: [
        { name: 'high', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'low', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
