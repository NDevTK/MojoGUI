// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/hash_value.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: SHA256HashValue
network.mojom.SHA256HashValueSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SHA256HashValue',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
