// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/permissions_policy/document_policy_feature.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DocumentPolicyFeatureSpec = { $: mojo.internal.Enum() };

// Enum: DocumentPolicyFeature
blink.mojom.DocumentPolicyFeature = {
  kDefault: 0,
  kForceLoadAtTop: 3,
  kJSProfiling: 11,
  kSyncXHR: 12,
  kIncludeJSCallStacksInCrashReports: 14,
  kExpectNoLinkedResources: 15,
  kNetworkEfficiencyGuardrails: 16,
};
