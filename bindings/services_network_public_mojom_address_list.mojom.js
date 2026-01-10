// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/address_list.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: AddressList
network.mojom.mojom.AddressListSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AddressList',
      packedSize: 24,
      fields: [
        { name: 'addresses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.IPEndPointSpec, false), nullable: false, minVersion: 0 },
        { name: 'dns_aliases', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
