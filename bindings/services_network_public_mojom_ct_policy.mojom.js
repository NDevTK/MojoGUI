// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: CTPolicy
network.mojom.mojom.CTPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CTPolicy',
      packedSize: 24,
      fields: [
        { name: 'excluded_hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'excluded_spkis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
