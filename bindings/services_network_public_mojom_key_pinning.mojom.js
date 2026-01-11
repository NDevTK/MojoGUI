// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/key_pinning.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.PinSetSpec = { $: {} };
network.mojom.PinSetInfoSpec = { $: {} };
network.mojom.PinListSpec = { $: {} };

// Struct: PinSet
mojo.internal.Struct(
    network.mojom.PinSetSpec, 'network.mojom.PinSet', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('static_spki_hashes', 8, 0, mojo.internal.Array(network.mojom.SHA256HashValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bad_static_spki_hashes', 16, 0, mojo.internal.Array(network.mojom.SHA256HashValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PinSetInfo
mojo.internal.Struct(
    network.mojom.PinSetInfoSpec, 'network.mojom.PinSetInfo', [
      mojo.internal.StructField('hostname', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pinset_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('include_subdomains', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PinList
mojo.internal.Struct(
    network.mojom.PinListSpec, 'network.mojom.PinList', [
      mojo.internal.StructField('pinsets', 0, 0, mojo.internal.Array(network.mojom.PinSetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('host_pins', 8, 0, mojo.internal.Array(network.mojom.PinSetInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
