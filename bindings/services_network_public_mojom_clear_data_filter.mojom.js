// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/clear_data_filter.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.TypeSpec = { $: mojo.internal.Enum() };
network.mojom.ClearDataFilterSpec = { $: {} };

// Enum: Type
network.mojom.Type = {
  DELETE_MATCHES: 0,
  KEEP_MATCHES: 1,
};

// Struct: ClearDataFilter
mojo.internal.Struct(
    network.mojom.ClearDataFilterSpec, 'network.mojom.ClearDataFilter', [
    ],
    [[0, 8]]);
