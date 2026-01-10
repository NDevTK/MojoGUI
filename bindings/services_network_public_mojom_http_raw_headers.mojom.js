// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/http_raw_headers.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: HttpRawHeaderPair
network.mojom.HttpRawHeaderPairSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.HttpRawHeaderPair',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
