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
      packedSize: 40,
      fields: [
        { name: 'sandbox_flags', packedOffset: 8, packedBitOffset: 0, type: network.mojom.WebSandboxFlagsSpec, nullable: false },
        { name: 'container_policy', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'required_document_policy', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'deferred_fetch_policy', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.DeferredFetchPolicySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
