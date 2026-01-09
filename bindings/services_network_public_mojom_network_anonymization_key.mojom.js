// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_anonymization_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EmptyNetworkAnonymizationKey
network.mojom.EmptyNetworkAnonymizationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EmptyNetworkAnonymizationKey',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NonEmptyNetworkAnonymizationKey
network.mojom.NonEmptyNetworkAnonymizationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NonEmptyNetworkAnonymizationKey',
      packedSize: 16,
      fields: [
        { name: 'network_isolation_partition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
