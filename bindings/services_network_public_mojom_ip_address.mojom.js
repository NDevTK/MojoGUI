// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ip_address.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IPAddress
network.mojom.IPAddressSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IPAddress',
      packedSize: 16,
      fields: [
        { name: 'address_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
