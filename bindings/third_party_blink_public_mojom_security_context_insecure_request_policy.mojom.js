// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/security_context/insecure_request_policy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: InsecureRequestPolicy
blink.mojom.mojom.InsecureRequestPolicy = {
  kLeaveInsecureRequestsAlone: 0,
  kUpgradeInsecureRequests: 1,
  kBlockAllMixedContent: 2,
  kMaxInsecureRequestPolicy: 3,
};
blink.mojom.mojom.InsecureRequestPolicySpec = { $: mojo.internal.Enum() };
