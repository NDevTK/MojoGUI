// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ad_auction.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: Type
network.mojom.Type = {
  kUninitialized: 0,
  kView: 1,
  kClick: 2,
};
network.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: AdAuctionEventRecord
network.mojom.AdAuctionEventRecordSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.AdAuctionEventRecord',
      packedSize: 16,
      fields: [
        { name: 'kUninitialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
