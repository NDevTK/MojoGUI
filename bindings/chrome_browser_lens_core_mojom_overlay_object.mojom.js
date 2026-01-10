// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/overlay_object.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};


// Struct: OverlayObject
lens.mojom.OverlayObjectSpec = {
  $: {
    structSpec: {
      name: 'lens.mojom.OverlayObject',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'geometry', packedOffset: 8, packedBitOffset: 0, type: lens.mojom.GeometrySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
