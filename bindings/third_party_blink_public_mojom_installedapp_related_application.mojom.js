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
        { name: 'platform', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
