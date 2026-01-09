// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/supports_loading_mode.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: LoadingMode
network.mojom.LoadingMode = {
  kDefault: 0,
  kUncredentialedPrefetch: 1,
  kUncredentialedPrerender: 2,
  kCredentialedPrerender: 3,
  kFencedFrame: 4,
  kPrerenderCrossOriginFrames: 5,
};
network.mojom.LoadingModeSpec = { $: mojo.internal.Enum() };

// Struct: SupportsLoadingMode
network.mojom.SupportsLoadingModeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SupportsLoadingMode',
      packedSize: 16,
      fields: [
        { name: 'supported_modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.LoadingModeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
