// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/integrity_policy.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.DestinationSpec = { $: mojo.internal.Enum() };
network.mojom.SourceSpec = { $: mojo.internal.Enum() };
network.mojom.IntegrityPolicySpec = { $: {} };

// Enum: Destination
network.mojom.Destination = {
  kScript: 0,
};

// Enum: Source
network.mojom.Source = {
  kInline: 0,
};

// Struct: IntegrityPolicy
mojo.internal.Struct(
    network.mojom.IntegrityPolicySpec, 'network.mojom.IntegrityPolicy', [
      mojo.internal.StructField('kScript', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
