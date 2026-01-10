// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_anonymization_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};
var services = services || {};

network.mojom.NetworkAnonymizationKeySpec = { $: {} };
network.mojom.EmptyNetworkAnonymizationKeySpec = { $: {} };
network.mojom.NonEmptyNetworkAnonymizationKeySpec = { $: {} };

// Union: NetworkAnonymizationKey
mojo.internal.Union(
    network.mojom.NetworkAnonymizationKeySpec, 'network.mojom.NetworkAnonymizationKey', {
      'empty': {
        'ordinal': 0,
        'type': network.mojom.EmptyNetworkAnonymizationKeySpec,
        'nullable': false,
      },
      'non_empty': {
        'ordinal': 1,
        'type': network.mojom.NonEmptyNetworkAnonymizationKeySpec,
        'nullable': false,
      },
    });

// Struct: EmptyNetworkAnonymizationKey
mojo.internal.Struct(
    network.mojom.EmptyNetworkAnonymizationKeySpec, 'network.mojom.EmptyNetworkAnonymizationKey', [
    ],
    [{version: 0, packedSize: 8}]);

// Struct: NonEmptyNetworkAnonymizationKey
mojo.internal.Struct(
    network.mojom.NonEmptyNetworkAnonymizationKeySpec, 'network.mojom.NonEmptyNetworkAnonymizationKey', [
      mojo.internal.StructField('top_frame_site', 0, 0, network.mojom.SchemefulSiteSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_cross_site', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('network_isolation_partition', 16, 0, network.mojom.NetworkIsolationPartitionSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
