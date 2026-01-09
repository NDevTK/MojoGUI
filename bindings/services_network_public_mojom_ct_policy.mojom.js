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
      packedSize: 16,
      fields: [
        { name: 'excluded_spkis', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
