// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/memory_stats.mojom
// Module: gpu.mojom

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.VideoMemoryProcessStatsSpec = { $: {} };
gpu.mojom.VideoMemoryUsageStatsSpec = { $: {} };

// Struct: VideoMemoryProcessStats
mojo.internal.Struct(
    gpu.mojom.VideoMemoryProcessStatsSpec, 'gpu.mojom.VideoMemoryProcessStats', [
      mojo.internal.StructField('video_memory_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('has_duplicates', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoMemoryUsageStats
mojo.internal.Struct(
    gpu.mojom.VideoMemoryUsageStatsSpec, 'gpu.mojom.VideoMemoryUsageStats', [
      mojo.internal.StructField('process_map', 0, 0, mojo.internal.Map(mojo.internal.Int32, gpu.mojom.VideoMemoryProcessStatsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bytes_allocated', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);
