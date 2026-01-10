// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_disk_cache_type.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: GpuDiskCacheType
gpu.mojom.mojom.GpuDiskCacheType = {
  kGlShaders: 0,
  kDawnWebGPU: 1,
  kDawnGraphite: 2,
};
gpu.mojom.mojom.GpuDiskCacheTypeSpec = { $: mojo.internal.Enum() };

// Union: GpuDiskCacheHandle
gpu.mojom.mojom.GpuDiskCacheHandleSpec = { $: mojo.internal.Union(
    'gpu.mojom.GpuDiskCacheHandle', {
      'gl_shader_handle': {
        'ordinal': 0,
        'type': gpu.mojom.GpuDiskCacheGlShaderHandleSpec,
      }},
      'dawn_webgpu_handle': {
        'ordinal': 1,
        'type': gpu.mojom.GpuDiskCacheDawnWebGPUHandleSpec,
      }},
      'dawn_graphite_handle': {
        'ordinal': 2,
        'type': gpu.mojom.GpuDiskCacheDawnGraphiteHandleSpec,
      }},
    })
};

// Struct: GpuDiskCacheGlShaderHandle
gpu.mojom.mojom.GpuDiskCacheGlShaderHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheGlShaderHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GpuDiskCacheDawnWebGPUHandle
gpu.mojom.mojom.GpuDiskCacheDawnWebGPUHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheDawnWebGPUHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GpuDiskCacheDawnGraphiteHandle
gpu.mojom.mojom.GpuDiskCacheDawnGraphiteHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheDawnGraphiteHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
