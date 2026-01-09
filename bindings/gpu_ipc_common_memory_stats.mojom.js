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
      packedSize: 24,
      fields: [
        { name: 'video_memory_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'has_duplicates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'process_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'bytes_allocated', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
