// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/timing_allow_origin.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TimingAllowOriginSpec = { $: {} };

// Union: TimingAllowOrigin
mojo.internal.Union(
    network.mojom.TimingAllowOriginSpec, 'network.mojom.TimingAllowOrigin', {
      'serialized_origins': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
      'all': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
    });
