// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/fullscreen.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FullscreenOptions
blink.mojom.FullscreenOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FullscreenOptions',
      packedSize: 32,
      fields: [
        { name: 'prefers_navigation_bar', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'prefers_status_bar', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'is_prefixed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_xr_overlay', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
