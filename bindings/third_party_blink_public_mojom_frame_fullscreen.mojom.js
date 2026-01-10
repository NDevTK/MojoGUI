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
      packedSize: 24,
      fields: [
        { name: 'prefers_navigation_bar', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prefers_status_bar', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'is_prefixed', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_xr_overlay', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
