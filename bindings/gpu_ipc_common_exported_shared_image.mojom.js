// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/exported_shared_image.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: SharedImageExportResult
gpu.mojom.mojom.SharedImageExportResultSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageExportResult',
      packedSize: 16,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ExportedSharedImage
gpu.mojom.mojom.ExportedSharedImageSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.ExportedSharedImage',
      packedSize: 64,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'creation_sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'debug_label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: true, minVersion: 0 },
        { name: 'buffer_usage', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: true, minVersion: 0 },
        { name: 'texture_target', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_software', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
