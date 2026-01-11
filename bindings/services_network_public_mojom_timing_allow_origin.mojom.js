// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/timing_allow_origin.mojom
// Module: network.mojom

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
