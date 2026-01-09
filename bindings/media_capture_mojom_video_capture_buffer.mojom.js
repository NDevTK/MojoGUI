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
      packedSize: 16,
      fields: [
        { name: 'strides', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
