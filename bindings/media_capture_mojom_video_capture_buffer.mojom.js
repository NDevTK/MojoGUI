// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture_buffer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

media.mojom.VideoBufferHandleSpec = { $: {} };
media.mojom.VideoFrameInfoSpec = { $: {} };
media.mojom.ReadyBufferSpec = { $: {} };
media.mojom.SharedImageBufferHandleSetSpec = { $: {} };

// Union: VideoBufferHandle
mojo.internal.Union(
    media.mojom.VideoBufferHandleSpec, 'media.mojom.VideoBufferHandle', {
      'unsafe_shmem_region': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec,
        'nullable': false,
      },
      'read_only_shmem_region': {
        'ordinal': 1,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec,
        'nullable': false,
      },
      'shared_image_handle': {
        'ordinal': 2,
        'type': media.mojom.SharedImageBufferHandleSetSpec,
        'nullable': false,
      },
      'gpu_memory_buffer_handle': {
        'ordinal': 3,
        'type': gfx.mojom.GpuMemoryBufferHandleSpec,
        'nullable': false,
      },
    });

// Struct: VideoFrameInfo
mojo.internal.Struct(
    media.mojom.VideoFrameInfoSpec, 'media.mojom.VideoFrameInfo', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, media.mojom.VideoFrameMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 16, 0, media.mojom.VideoCapturePixelFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 24, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 32, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_premapped', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color_space', 48, 0, gfx.mojom.ColorSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('strides', 56, 0, media.mojom.PlaneStridesSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ReadyBuffer
mojo.internal.Struct(
    media.mojom.ReadyBufferSpec, 'media.mojom.ReadyBuffer', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, media.mojom.VideoFrameInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedImageBufferHandleSet
mojo.internal.Struct(
    media.mojom.SharedImageBufferHandleSetSpec, 'media.mojom.SharedImageBufferHandleSet', [
      mojo.internal.StructField('shared_image', 0, 0, gpu.mojom.ExportedSharedImageSpec, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
