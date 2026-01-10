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
gpu.mojom.Direct3DFeatureLevelSpec = { $: mojo.internal.Enum() };

// Enum: HasDiscreteGpu
gpu.mojom.HasDiscreteGpu = {
  kUnknown: 0,
  kNo: 1,
  kYes: 2,
};
gpu.mojom.HasDiscreteGpuSpec = { $: mojo.internal.Enum() };

// Struct: DevicePerfInfo
gpu.mojom.DevicePerfInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DevicePerfInfo',
      packedSize: 32,
      fields: [
        { name: 'total_physical_memory_mb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'total_disk_space_mb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'hardware_concurrency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'system_commit_limit_mb', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'd3d11_feature_level', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.Direct3DFeatureLevelSpec, nullable: false, minVersion: 0 },
        { name: 'has_discrete_gpu', packedOffset: 20, packedBitOffset: 0, type: gpu.mojom.HasDiscreteGpuSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
