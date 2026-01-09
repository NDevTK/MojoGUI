// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_disk_cache_type.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: GpuDiskCacheType
gpu.mojom.GpuDiskCacheType = {
  kGlShaders: 0,
  kDawnWebGPU: 1,
  kDawnGraphite: 2,
};

// Struct: GpuDiskCacheGlShaderHandle
gpu.mojom.GpuDiskCacheGlShaderHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheGlShaderHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GpuDiskCacheDawnWebGPUHandle
gpu.mojom.GpuDiskCacheDawnWebGPUHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheDawnWebGPUHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GpuDiskCacheDawnGraphiteHandle
gpu.mojom.GpuDiskCacheDawnGraphiteHandleSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuDiskCacheDawnGraphiteHandle',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
