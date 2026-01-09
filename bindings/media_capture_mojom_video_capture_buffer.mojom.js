// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture_buffer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: VideoFrameInfo
media.mojom.VideoFrameInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameInfo',
      packedSize: 72,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pixel_format', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'coded_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'visible_rect', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'color_space', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'strides', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'is_premapped', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ReadyBuffer
media.mojom.ReadyBufferSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.ReadyBuffer',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedImageBufferHandleSet
media.mojom.SharedImageBufferHandleSetSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SharedImageBufferHandleSet',
      packedSize: 24,
      fields: [
        { name: 'shared_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
