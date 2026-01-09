// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/memory_stats.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: VideoMemoryProcessStats
gpu.mojom.VideoMemoryProcessStatsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoMemoryProcessStats',
      packedSize: 16,
      fields: [
        { name: 'has_duplicates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoMemoryUsageStats
gpu.mojom.VideoMemoryUsageStatsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.VideoMemoryUsageStats',
      packedSize: 16,
      fields: [
        { name: 'bytes_allocated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
