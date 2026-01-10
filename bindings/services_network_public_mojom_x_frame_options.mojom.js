// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/x_frame_options.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.XFrameOptionsValueSpec = { $: mojo.internal.Enum() };

// Enum: XFrameOptionsValue
network.mojom.XFrameOptionsValue = {
  kNone: 0,
  kDeny: 1,
  kSameOrigin: 2,
  kAllowAll: 3,
  kInvalid: 4,
  kConflict: 5,
};
