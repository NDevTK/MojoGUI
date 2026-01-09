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
        { name: 'r', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'g', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'b', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
