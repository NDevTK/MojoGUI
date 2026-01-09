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
      packedSize: 40,
      fields: [
        { name: 'top_frame_site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'is_cross_site', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'nonce', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'network_isolation_partition', packedOffset: 32, packedBitOffset: 0, type: network.mojom.NetworkIsolationPartitionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
