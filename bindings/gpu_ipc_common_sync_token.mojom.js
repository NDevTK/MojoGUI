// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/sync_token.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: CommandBufferNamespace
gpu.mojom.CommandBufferNamespace = {
  INVALID: 0,
  GPU_IO: 1,
  IN_PROCESS: 2,
  VIZ_SKIA_OUTPUT_SURFACE: 3,
  VIZ_SKIA_OUTPUT_SURFACE_NON_DDL: 4,
  GPU_CHANNEL_SHARED_IMAGE_INTERFACE: 5,
  WEBNN_CONTEXT_INTERFACE: 6,
};

// Struct: SyncToken
gpu.mojom.SyncTokenSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SyncToken',
      packedSize: 16,
      fields: [
        { name: 'release_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
