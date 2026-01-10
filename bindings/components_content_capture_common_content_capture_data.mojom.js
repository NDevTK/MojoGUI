// Auto-generated MojoJS binding
// Source: chromium_src/components/content_capture/common/content_capture_data.mojom
// Module: content_capture.mojom

'use strict';

// Module namespace
var content_capture = content_capture || {};
content_capture.mojom = content_capture.mojom || {};


// Struct: ContentCaptureData
content_capture.mojom.ContentCaptureDataSpec = {
  $: {
    structSpec: {
      name: 'content_capture.mojom.ContentCaptureData',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(content_capture.mojom.ContentCaptureDataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
