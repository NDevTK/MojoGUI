// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/capture_handle.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var url = url || {};


// Struct: CaptureHandle
media.mojom.mojom.CaptureHandleSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CaptureHandle',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'capture_handle', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
