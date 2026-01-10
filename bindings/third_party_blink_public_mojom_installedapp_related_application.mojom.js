// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/related_application.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RelatedApplication
blink.mojom.RelatedApplicationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RelatedApplication',
      packedSize: 40,
      fields: [
        { name: 'platform', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
