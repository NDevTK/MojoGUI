// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/bitmap.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ArcBitmap
arc.mojom.ArcBitmapSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcBitmap',
      packedSize: 24,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pixel_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
