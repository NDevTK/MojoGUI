// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/ai_page_content_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: MetaTag
blink.mojom.MetaTagSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MetaTag',
      packedSize: 16,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameMetadata
blink.mojom.FrameMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameMetadata',
      packedSize: 16,
      fields: [
        { name: 'meta_tags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageMetadata
blink.mojom.PageMetadataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PageMetadata',
      packedSize: 16,
      fields: [
        { name: 'frame_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
