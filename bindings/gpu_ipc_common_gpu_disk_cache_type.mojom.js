// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_disk_cache_type.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.GpuDiskCacheTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.GpuDiskCacheHandleSpec = { $: {} };
gpu.mojom.GpuDiskCacheGlShaderHandleSpec = { $: {} };
gpu.mojom.GpuDiskCacheDawnWebGPUHandleSpec = { $: {} };
gpu.mojom.GpuDiskCacheDawnGraphiteHandleSpec = { $: {} };

// Enum: GpuDiskCacheType
gpu.mojom.GpuDiskCacheType = {
  kGlShaders: 0,
  kDawnWebGPU: 1,
  kDawnGraphite: 2,
};

// Union: GpuDiskCacheHandle
mojo.internal.Union(
    gpu.mojom.GpuDiskCacheHandleSpec, 'gpu.mojom.GpuDiskCacheHandle', {
      'gl_shader_handle': {
        'ordinal': 0,
        'type': gpu.mojom.GpuDiskCacheGlShaderHandleSpec.$,
        'nullable': false,
      },
      'dawn_webgpu_handle': {
        'ordinal': 1,
        'type': gpu.mojom.GpuDiskCacheDawnWebGPUHandleSpec.$,
        'nullable': false,
      },
      'dawn_graphite_handle': {
        'ordinal': 2,
        'type': gpu.mojom.GpuDiskCacheDawnGraphiteHandleSpec.$,
        'nullable': false,
      },
    });

// Struct: GpuDiskCacheGlShaderHandle
mojo.internal.Struct(
    gpu.mojom.GpuDiskCacheGlShaderHandleSpec, 'gpu.mojom.GpuDiskCacheGlShaderHandle', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GpuDiskCacheDawnWebGPUHandle
mojo.internal.Struct(
    gpu.mojom.GpuDiskCacheDawnWebGPUHandleSpec, 'gpu.mojom.GpuDiskCacheDawnWebGPUHandle', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GpuDiskCacheDawnGraphiteHandle
mojo.internal.Struct(
    gpu.mojom.GpuDiskCacheDawnGraphiteHandleSpec, 'gpu.mojom.GpuDiskCacheDawnGraphiteHandle', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
