// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_mode.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: DisplayMode
display.mojom.DisplayModeSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayMode',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'is_interlaced', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'refresh_rate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'vsync_rate_min', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Float, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
