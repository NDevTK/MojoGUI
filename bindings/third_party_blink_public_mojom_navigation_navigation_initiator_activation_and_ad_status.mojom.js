// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/navigation_initiator_activation_and_ad_status.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.NavigationInitiatorActivationAndAdStatusSpec = { $: mojo.internal.Enum() };

// Enum: NavigationInitiatorActivationAndAdStatus
blink.mojom.NavigationInitiatorActivationAndAdStatus = {
  kDidNotStartWithTransientActivation: 0,
  kStartedWithTransientActivationFromNonAd: 1,
  kStartedWithTransientActivationFromAd: 2,
};
