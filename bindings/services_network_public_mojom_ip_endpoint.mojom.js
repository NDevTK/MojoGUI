// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ip_endpoint.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: IPEndPoint
network.mojom.IPEndPointSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.IPEndPoint',
      packedSize: 24,
      fields: [
        { name: 'address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
        { name: 'port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
