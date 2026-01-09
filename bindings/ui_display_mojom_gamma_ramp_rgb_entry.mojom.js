// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/gamma_ramp_rgb_entry.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: GammaRampRGBEntry
display.mojom.GammaRampRGBEntrySpec = {
  $: {
    structSpec: {
      name: 'display.mojom.GammaRampRGBEntry',
      packedSize: 16,
      fields: [
        { name: 'r', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'g', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'b', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
