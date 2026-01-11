// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ad_auction.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.AdAuctionEventRecordSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  kUninitialized: 0,
  kView: 1,
  kClick: 2,
};

// Struct: AdAuctionEventRecord
mojo.internal.Struct(
    network.mojom.AdAuctionEventRecordSpec, 'network.mojom.AdAuctionEventRecord', [
      mojo.internal.StructField('kUninitialized', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);
