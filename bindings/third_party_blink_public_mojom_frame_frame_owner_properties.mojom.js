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
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scrollbar_mode', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollbarModeSpec, nullable: false, minVersion: 0 },
        { name: 'margin_width', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'margin_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'allow_fullscreen', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_payment_request', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_display_none', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_scheme', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ColorSchemeSpec, nullable: false, minVersion: 0 },
        { name: 'preferred_color_scheme', packedOffset: 28, packedBitOffset: 0, type: blink.mojom.PreferredColorSchemeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
