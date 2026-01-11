// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ip_address_space.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.IPAddressSpaceSpec = { $: mojo.internal.Enum() };

// Enum: IPAddressSpace
network.mojom.IPAddressSpace = {
  kLoopback: 0,
  kLocal: 1,
  kPublic: 2,
  kUnknown: 3,
};
