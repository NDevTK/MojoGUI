// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_feature_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: GpuFeatureStatus
gpu.mojom.GpuFeatureStatus = {
  Enabled: 0,
  Blocklisted: 1,
  Disabled: 2,
  Software: 3,
  Undefined: 4,
  Max: 5,
};

// Struct: GpuFeatureInfo
gpu.mojom.GpuFeatureInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuFeatureInfo',
      packedSize: 16,
      fields: [
        { name: 'supported_buffer_formats_for_allocation_and_texturing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
