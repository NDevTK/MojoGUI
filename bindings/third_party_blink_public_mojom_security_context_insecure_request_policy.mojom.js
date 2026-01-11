// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/security_context/insecure_request_policy.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.InsecureRequestPolicySpec = { $: mojo.internal.Enum() };

// Enum: InsecureRequestPolicy
blink.mojom.InsecureRequestPolicy = {
  kLeaveInsecureRequestsAlone: 0,
  kUpgradeInsecureRequests: 1,
  kBlockAllMixedContent: 2,
  kMaxInsecureRequestPolicy: 3,
};
