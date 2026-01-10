// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/synced_scroll_offset.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: SyncedScrollOffset
cc.mojom.SyncedScrollOffsetSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.SyncedScrollOffset',
      packedSize: 16,
      fields: [
        { name: 'scroll_offset', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
