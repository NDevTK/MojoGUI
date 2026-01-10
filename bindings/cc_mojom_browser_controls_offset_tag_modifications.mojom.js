// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_offset_tag_modifications.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: BrowserControlsOffsetTagModifications
cc.mojom.mojom.BrowserControlsOffsetTagModificationsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.BrowserControlsOffsetTagModifications',
      packedSize: 24,
      fields: [
        { name: 'tags', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.BrowserControlsOffsetTagsSpec, nullable: false, minVersion: 0 },
        { name: 'top_controls_additional_height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_additional_height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
