// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/channel.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.ChannelSpec = { $: mojo.internal.Enum() };

// Enum: Channel
extensions.mojom.Channel = {
  kUnknown: 0,
  kCanary: 1,
  kDev: 2,
  kBeta: 3,
  kStable: 4,
};
