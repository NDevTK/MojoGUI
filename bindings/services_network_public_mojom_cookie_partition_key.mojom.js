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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'keys', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
