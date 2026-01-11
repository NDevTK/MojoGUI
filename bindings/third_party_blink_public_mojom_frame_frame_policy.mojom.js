// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_policy.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.FramePolicySpec = { $: {} };

// Struct: FramePolicy
mojo.internal.Struct(
    blink.mojom.FramePolicySpec, 'blink.mojom.FramePolicy', [
      mojo.internal.StructField('sandbox_flags', 0, 0, network.mojom.WebSandboxFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('container_policy', 8, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('required_document_policy', 16, 0, mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec.$, blink.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('deferred_fetch_policy', 24, 0, blink.mojom.DeferredFetchPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
