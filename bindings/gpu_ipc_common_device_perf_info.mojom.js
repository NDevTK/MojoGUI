// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/device_perf_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: Direct3DFeatureLevel
gpu.mojom.Direct3DFeatureLevel = {
  k1_0_Generic: 0,
  k1_0_Core: 1,
  k9_1: 2,
  k9_2: 3,
  k9_3: 4,
  k10_0: 5,
  k10_1: 6,
  k11_0: 7,
  k11_1: 8,
  k12_0: 9,
  k12_1: 10,
  k12_2: 11,
};

// Enum: HasDiscreteGpu
gpu.mojom.HasDiscreteGpu = {
  kUnknown: 0,
  kNo: 1,
  kYes: 2,
};

// Struct: DevicePerfInfo
gpu.mojom.DevicePerfInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DevicePerfInfo',
      packedSize: 48,
      fields: [
        { name: 'total_physical_memory_mb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'total_disk_space_mb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'hardware_concurrency', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'system_commit_limit_mb', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'd3d11_feature_level', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'has_discrete_gpu', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
