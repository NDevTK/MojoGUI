// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/address_list.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: AddressList
network.mojom.AddressListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AddressList',
      packedSize: 24,
      fields: [
        { name: 'addresses', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'dns_aliases', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
