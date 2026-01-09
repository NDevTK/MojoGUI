// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_owner_properties.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FrameOwnerProperties
blink.mojom.FrameOwnerPropertiesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameOwnerProperties',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'scrollbar_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'color_scheme', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'preferred_color_scheme', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'margin_width', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'margin_height', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'allow_fullscreen', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_payment_request', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_display_none', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
