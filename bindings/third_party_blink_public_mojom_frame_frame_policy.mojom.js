// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_policy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FramePolicy
blink.mojom.FramePolicySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FramePolicy',
      packedSize: 32,
      fields: [
        { name: 'sandbox_flags', packedOffset: 0, packedBitOffset: 0, type: network.mojom.WebSandboxFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'container_policy', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
        { name: 'required_document_policy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.DocumentPolicyFeatureSpec, blink.mojom.PolicyValueSpec, false), nullable: false, minVersion: 0 },
        { name: 'deferred_fetch_policy', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.DeferredFetchPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
