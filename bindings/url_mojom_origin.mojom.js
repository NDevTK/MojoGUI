// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/origin.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};


// Struct: Origin
url.mojom.OriginSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.Origin',
      packedSize: 16,
      fields: [
        { name: 'nonce_if_opaque', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
