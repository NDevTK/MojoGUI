// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/capture_handle.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: CaptureHandle
media.mojom.CaptureHandleSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CaptureHandle',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'capture_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
