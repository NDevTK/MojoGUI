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
      packedSize: 40,
      fields: [
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'nonce_if_opaque', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
