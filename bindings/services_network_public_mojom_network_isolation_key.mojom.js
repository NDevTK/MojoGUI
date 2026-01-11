// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/network_isolation_key.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.NetworkIsolationKeySpec = { $: {} };
network.mojom.EmptyNetworkIsolationKeySpec = { $: {} };
network.mojom.NonEmptyNetworkIsolationKeySpec = { $: {} };

// Union: NetworkIsolationKey
mojo.internal.Union(
    network.mojom.NetworkIsolationKeySpec, 'network.mojom.NetworkIsolationKey', {
      'empty': {
        'ordinal': 0,
        'type': network.mojom.EmptyNetworkIsolationKeySpec.$,
        'nullable': false,
      },
      'non_empty': {
        'ordinal': 1,
        'type': network.mojom.NonEmptyNetworkIsolationKeySpec.$,
        'nullable': false,
      },
    });

// Struct: EmptyNetworkIsolationKey
mojo.internal.Struct(
    network.mojom.EmptyNetworkIsolationKeySpec, 'network.mojom.EmptyNetworkIsolationKey', [
    ],
    [[0, 8]]);

// Struct: NonEmptyNetworkIsolationKey
mojo.internal.Struct(
    network.mojom.NonEmptyNetworkIsolationKeySpec, 'network.mojom.NonEmptyNetworkIsolationKey', [
      mojo.internal.StructField('top_frame_site', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_site', 8, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('network_isolation_partition', 24, 0, network.mojom.NetworkIsolationPartitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
