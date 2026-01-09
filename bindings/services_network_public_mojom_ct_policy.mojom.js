// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: CTPolicy
network.mojom.CTPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CTPolicy',
      packedSize: 24,
      fields: [
        { name: 'excluded_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'excluded_spkis', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
