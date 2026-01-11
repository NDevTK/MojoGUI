// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ct_policy.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.CTPolicySpec = { $: {} };

// Struct: CTPolicy
mojo.internal.Struct(
    network.mojom.CTPolicySpec, 'network.mojom.CTPolicy', [
      mojo.internal.StructField('excluded_hosts', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('excluded_spkis', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
