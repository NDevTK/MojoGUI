// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/draggable_region.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DraggableRegion
blink.mojom.DraggableRegionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DraggableRegion',
      packedSize: 24,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'draggable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
