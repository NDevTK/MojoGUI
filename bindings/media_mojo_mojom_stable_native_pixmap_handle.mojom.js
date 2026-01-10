// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/stable/native_pixmap_handle.mojom
// Module: media.stable.mojom

'use strict';

// Module namespace
var media = media || {};
media.stable = media.stable || {};
media.stable.mojom = media.stable.mojom || {};


// Struct: NativePixmapPlane
media.stable.mojom.NativePixmapPlaneSpec = {
  $: {
    structSpec: {
      name: 'media.stable.mojom.NativePixmapPlane',
      packedSize: 40,
      fields: [
        { name: 'stride', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: NativePixmapHandle
media.stable.mojom.NativePixmapHandleSpec = {
  $: {
    structSpec: {
      name: 'media.stable.mojom.NativePixmapHandle',
      packedSize: 24,
      fields: [
        { name: 'planes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.stable.mojom.NativePixmapPlaneSpec, false), nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
