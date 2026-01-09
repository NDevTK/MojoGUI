// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_isolation_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EmptyNetworkIsolationKey
network.mojom.EmptyNetworkIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EmptyNetworkIsolationKey',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NonEmptyNetworkIsolationKey
network.mojom.NonEmptyNetworkIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NonEmptyNetworkIsolationKey',
      packedSize: 16,
      fields: [
        { name: 'network_isolation_partition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
