// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/scheme_host_port.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};


// Struct: SchemeHostPort
url.mojom.SchemeHostPortSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.SchemeHostPort',
      packedSize: 32,
      fields: [
        { name: 'scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
