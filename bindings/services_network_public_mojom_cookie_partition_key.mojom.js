// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_partition_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.AncestorChainBitSpec = { $: mojo.internal.Enum() };
network.mojom.CookiePartitionKeySpec = { $: {} };
network.mojom.CookiePartitionKeyCollectionSpec = { $: {} };

// Enum: AncestorChainBit
network.mojom.AncestorChainBit = {
  kSameSite: 0,
  kCrossSite: 1,
};

// Struct: CookiePartitionKey
mojo.internal.Struct(
    network.mojom.CookiePartitionKeySpec, 'network.mojom.CookiePartitionKey', [
      mojo.internal.StructField('site', 0, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('from_script', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('nonce', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ancestor_chain_bit', 24, 0, network.mojom.AncestorChainBitSpec.$, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CookiePartitionKeyCollection
mojo.internal.Struct(
    network.mojom.CookiePartitionKeyCollectionSpec, 'network.mojom.CookiePartitionKeyCollection', [
      mojo.internal.StructField('contains_all_partitions', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keys', 8, 0, mojo.internal.Array(network.mojom.CookiePartitionKeySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
