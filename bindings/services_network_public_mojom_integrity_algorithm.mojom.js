// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_algorithm.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.IntegrityAlgorithmSpec = { $: mojo.internal.Enum() };

// Enum: IntegrityAlgorithm
network.mojom.IntegrityAlgorithm = {
  kSha256: 0,
  kSha384: 1,
  kSha512: 2,
  kEd25519: 3,
};
