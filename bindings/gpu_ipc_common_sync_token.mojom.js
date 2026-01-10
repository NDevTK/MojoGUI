// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/sync_token.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.CommandBufferNamespaceSpec = { $: mojo.internal.Enum() };
gpu.mojom.SyncTokenSpec = { $: {} };

// Enum: CommandBufferNamespace
gpu.mojom.CommandBufferNamespace = {
  INVALID: -1,
  GPU_IO: 0,
  IN_PROCESS: 1,
  VIZ_SKIA_OUTPUT_SURFACE: 2,
  VIZ_SKIA_OUTPUT_SURFACE_NON_DDL: 3,
  GPU_CHANNEL_SHARED_IMAGE_INTERFACE: 4,
  WEBNN_CONTEXT_INTERFACE: 5,
};

// Struct: SyncToken
mojo.internal.Struct(
    gpu.mojom.SyncTokenSpec, 'gpu.mojom.SyncToken', [
      mojo.internal.StructField('verified_flush', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 4, 0, gpu.mojom.CommandBufferNamespaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('command_buffer_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('release_count', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);
