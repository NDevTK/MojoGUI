// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_offset_tag_modifications.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: BrowserControlsOffsetTagModifications
cc.mojom.BrowserControlsOffsetTagModificationsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.BrowserControlsOffsetTagModifications',
      packedSize: 24,
      fields: [
        { name: 'tags', packedOffset: 8, packedBitOffset: 0, type: cc.mojom.BrowserControlsOffsetTagsSpec, nullable: false },
        { name: 'top_controls_additional_height', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom_controls_additional_height', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
