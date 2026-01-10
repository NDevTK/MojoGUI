// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/alternate_protocol_usage.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: AlternateProtocolUsage
network.mojom.mojom.AlternateProtocolUsage = {
  kNoRace: 0,
  kWonRace: 1,
  kMainJobWonRace: 2,
  kMappingMissing: 3,
  kBroken: 4,
  kDnsAlpnH3JobWonWithoutRace: 5,
  kDnsAlpnH3JobWonRace: 6,
  kUnspecifiedReason: 7,
};
network.mojom.mojom.AlternateProtocolUsageSpec = { $: mojo.internal.Enum() };
