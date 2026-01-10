// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/exported_shared_image.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var gfx = gfx || {};

gpu.mojom.SharedImageExportResultSpec = { $: {} };
gpu.mojom.ExportedSharedImageSpec = { $: {} };

// Struct: SharedImageExportResult
mojo.internal.Struct(
    gpu.mojom.SharedImageExportResultSpec, 'gpu.mojom.SharedImageExportResult', [
      mojo.internal.StructField('sync_token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ExportedSharedImage
mojo.internal.Struct(
    gpu.mojom.ExportedSharedImageSpec, 'gpu.mojom.ExportedSharedImage', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, gpu.mojom.SharedImageMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('creation_sync_token', 16, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('buffer_handle', 32, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('buffer_usage', 40, 0, gfx.mojom.BufferUsageSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('texture_target', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_software', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
