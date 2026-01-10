// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_partition_key.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: AncestorChainBit
network.mojom.AncestorChainBit = {
  kSameSite: 0,
  kCrossSite: 1,
};
network.mojom.AncestorChainBitSpec = { $: mojo.internal.Enum() };

// Struct: CookiePartitionKey
network.mojom.CookiePartitionKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookiePartitionKey',
      packedSize: 32,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'from_script', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'ancestor_chain_bit', packedOffset: 12, packedBitOffset: 0, type: network.mojom.AncestorChainBitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CookiePartitionKeyCollection
network.mojom.CookiePartitionKeyCollectionSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookiePartitionKeyCollection',
      packedSize: 24,
      fields: [
        { name: 'contains_all_partitions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.CookiePartitionKeySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
