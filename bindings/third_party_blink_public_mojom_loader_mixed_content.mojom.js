// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/mixed_content.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MixedContentContextTypeSpec = { $: mojo.internal.Enum() };

// Enum: MixedContentContextType
blink.mojom.MixedContentContextType = {
  kNotMixedContent: 0,
  kBlockable: 1,
  kOptionallyBlockable: 2,
  kShouldBeBlockable: 3,
};
