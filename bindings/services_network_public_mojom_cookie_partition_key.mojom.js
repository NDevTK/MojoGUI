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

// Struct: CookiePartitionKey
network.mojom.CookiePartitionKeySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookiePartitionKey',
      packedSize: 40,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false },
        { name: 'from_script', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'ancestor_chain_bit', packedOffset: 24, packedBitOffset: 0, type: network.mojom.AncestorChainBitSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'contains_all_partitions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
