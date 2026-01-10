// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/device_perf_info.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.Direct3DFeatureLevelSpec = { $: mojo.internal.Enum() };
gpu.mojom.HasDiscreteGpuSpec = { $: mojo.internal.Enum() };
gpu.mojom.DevicePerfInfoSpec = { $: {} };

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
mojo.internal.Struct(
    gpu.mojom.DevicePerfInfoSpec, 'gpu.mojom.DevicePerfInfo', [
      mojo.internal.StructField('total_physical_memory_mb', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('total_disk_space_mb', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('hardware_concurrency', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('system_commit_limit_mb', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('d3d11_feature_level', 16, 0, gpu.mojom.Direct3DFeatureLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_discrete_gpu', 24, 0, gpu.mojom.HasDiscreteGpuSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
