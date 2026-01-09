// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/capture_handle_config.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: CaptureHandleConfig
blink.mojom.CaptureHandleConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CaptureHandleConfig',
      packedSize: 40,
      fields: [
        { name: 'expose_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'capture_handle', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'all_origins_permitted', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'permitted_origins', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
