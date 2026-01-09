// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_request_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: HttpRequestHeaderKeyValuePair
network.mojom.HttpRequestHeaderKeyValuePairSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpRequestHeaderKeyValuePair',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HttpRequestHeaders
network.mojom.HttpRequestHeadersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpRequestHeaders',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
