// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_isolation_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: NetworkIsolationKey
network.mojom.NetworkIsolationKeySpec = { $: mojo.internal.Union(
    'network.mojom.NetworkIsolationKey', {
      'empty': {
        'ordinal': 0,
        'type': network.mojom.EmptyNetworkIsolationKeySpec,
      }},
      'non_empty': {
        'ordinal': 1,
        'type': network.mojom.NonEmptyNetworkIsolationKeySpec,
      }},
    })
};

// Struct: EmptyNetworkIsolationKey
network.mojom.EmptyNetworkIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EmptyNetworkIsolationKey',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: NonEmptyNetworkIsolationKey
network.mojom.NonEmptyNetworkIsolationKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.NonEmptyNetworkIsolationKey',
      packedSize: 40,
      fields: [
        { name: 'top_frame_site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'frame_site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'network_isolation_partition', packedOffset: 24, packedBitOffset: 0, type: network.mojom.NetworkIsolationPartitionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
