// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/swap_timings.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: SwapTimings
gfx.mojom.SwapTimingsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.SwapTimings',
      packedSize: 24,
      fields: [
        { name: 'swap_start', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
        { name: 'swap_end', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
