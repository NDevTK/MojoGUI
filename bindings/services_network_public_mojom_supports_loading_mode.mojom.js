// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/supports_loading_mode.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.LoadingModeSpec = { $: mojo.internal.Enum() };
network.mojom.SupportsLoadingModeSpec = { $: {} };

// Enum: LoadingMode
network.mojom.LoadingMode = {
  kDefault: 0,
  kUncredentialedPrefetch: 1,
  kUncredentialedPrerender: 2,
  kCredentialedPrerender: 3,
  kFencedFrame: 4,
  kPrerenderCrossOriginFrames: 5,
};

// Struct: SupportsLoadingMode
mojo.internal.Struct(
    network.mojom.SupportsLoadingModeSpec, 'network.mojom.SupportsLoadingMode', [
      mojo.internal.StructField('supported_modes', 0, 0, mojo.internal.Array(network.mojom.LoadingModeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
