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
      packedSize: 72,
      fields: [
        { name: 'status_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'enabled_gpu_driver_bug_workarounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'disabled_extensions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'disabled_webgl_extensions', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'applied_gpu_blocklist_entries', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'applied_gpu_driver_bug_list_entries', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'supports_nv12_for_allocation_and_texturing', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_p010_for_allocation_and_texturing', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'supported_buffer_formats_for_allocation_and_texturing', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
