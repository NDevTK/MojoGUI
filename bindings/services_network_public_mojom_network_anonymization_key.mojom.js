// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_anonymization_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: NetworkAnonymizationKey
network.mojom.mojom.NetworkAnonymizationKeySpec = { $: mojo.internal.Union(
    'network.mojom.NetworkAnonymizationKey', {
      'empty': {
        'ordinal': 0,
        'type': network.mojom.EmptyNetworkAnonymizationKeySpec,
      }},
      'non_empty': {
        'ordinal': 1,
        'type': network.mojom.NonEmptyNetworkAnonymizationKeySpec,
      }},
    })
};

// Struct: EmptyNetworkAnonymizationKey
network.mojom.mojom.EmptyNetworkAnonymizationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EmptyNetworkAnonymizationKey',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: NonEmptyNetworkAnonymizationKey
network.mojom.mojom.NonEmptyNetworkAnonymizationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NonEmptyNetworkAnonymizationKey',
      packedSize: 32,
      fields: [
        { name: 'top_frame_site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'is_cross_site', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'network_isolation_partition', packedOffset: 16, packedBitOffset: 0, type: network.mojom.NetworkIsolationPartitionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
