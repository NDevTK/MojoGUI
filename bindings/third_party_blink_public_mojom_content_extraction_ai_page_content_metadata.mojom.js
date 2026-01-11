// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content_metadata.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.MetaTagSpec = { $: {} };
blink.mojom.FrameMetadataSpec = { $: {} };
blink.mojom.PageMetadataSpec = { $: {} };

// Struct: MetaTag
mojo.internal.Struct(
    blink.mojom.MetaTagSpec, 'blink.mojom.MetaTag', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameMetadata
mojo.internal.Struct(
    blink.mojom.FrameMetadataSpec, 'blink.mojom.FrameMetadata', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('meta_tags', 8, 0, mojo.internal.Array(blink.mojom.MetaTagSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PageMetadata
mojo.internal.Struct(
    blink.mojom.PageMetadataSpec, 'blink.mojom.PageMetadata', [
      mojo.internal.StructField('frame_metadata', 0, 0, mojo.internal.Array(blink.mojom.FrameMetadataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
