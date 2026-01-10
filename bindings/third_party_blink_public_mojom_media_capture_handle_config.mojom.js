// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/capture_handle_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: CaptureHandleConfig
blink.mojom.CaptureHandleConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CaptureHandleConfig',
      packedSize: 32,
      fields: [
        { name: 'expose_origin', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capture_handle', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'all_origins_permitted', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'permitted_origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
