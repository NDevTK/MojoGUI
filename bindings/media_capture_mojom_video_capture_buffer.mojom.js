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


// Union: VideoBufferHandle
media.mojom.mojom.VideoBufferHandleSpec = { $: mojo.internal.Union(
    'media.mojom.VideoBufferHandle', {
      'unsafe_shmem_region': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec,
      }},
      'read_only_shmem_region': {
        'ordinal': 1,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec,
      }},
      'shared_image_handle': {
        'ordinal': 2,
        'type': media.mojom.SharedImageBufferHandleSetSpec,
      }},
      'gpu_memory_buffer_handle': {
        'ordinal': 3,
        'type': gfx.mojom.GpuMemoryBufferHandleSpec,
      }},
    })
};

// Struct: VideoFrameInfo
media.mojom.mojom.VideoFrameInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameInfo',
      packedSize: 64,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoFrameMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 48, packedBitOffset: 0, type: media.mojom.VideoCapturePixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'is_premapped', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 40, packedBitOffset: 0, type: media.mojom.PlaneStridesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: ReadyBuffer
media.mojom.mojom.ReadyBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ReadyBuffer',
      packedSize: 24,
      fields: [
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SharedImageBufferHandleSet
media.mojom.mojom.SharedImageBufferHandleSetSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedImageBufferHandleSet',
      packedSize: 24,
      fields: [
        { name: 'shared_image', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
