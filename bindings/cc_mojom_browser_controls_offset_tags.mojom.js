// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_offset_tags.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: BrowserControlsOffsetTags
cc.mojom.BrowserControlsOffsetTagsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.BrowserControlsOffsetTags',
      packedSize: 32,
      fields: [
        { name: 'top_controls_offset_tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_offset_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bottom_controls_offset_tag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
