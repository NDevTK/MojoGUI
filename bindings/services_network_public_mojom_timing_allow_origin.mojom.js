// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/timing_allow_origin.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Union: TimingAllowOrigin
network.mojom.mojom.TimingAllowOriginSpec = { $: mojo.internal.Union(
    'network.mojom.TimingAllowOrigin', {
      'serialized_origins': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
      'all': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
      }},
    })
};
