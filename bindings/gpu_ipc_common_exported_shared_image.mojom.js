// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/exported_shared_image.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: SharedImageExportResult
gpu.mojom.SharedImageExportResultSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageExportResult',
      packedSize: 16,
      fields: [
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExportedSharedImage
gpu.mojom.ExportedSharedImageSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.ExportedSharedImage',
      packedSize: 72,
      fields: [
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'metadata', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SharedImageMetadataSpec, nullable: false },
        { name: 'creation_sync_token', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'debug_label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'buffer_handle', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: true },
        { name: 'buffer_usage', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: true },
        { name: 'texture_target', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_software', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
