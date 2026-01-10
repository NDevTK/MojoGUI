// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: MetaTag
blink.mojom.mojom.MetaTagSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MetaTag',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FrameMetadata
blink.mojom.mojom.FrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameMetadata',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'meta_tags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.MetaTagSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PageMetadata
blink.mojom.mojom.PageMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageMetadata',
      packedSize: 16,
      fields: [
        { name: 'frame_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.FrameMetadataSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
