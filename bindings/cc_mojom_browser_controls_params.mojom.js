// Auto-generated MojoJS binding
// Source: chromium_src/cc/mojom/browser_controls_params.mojom
// Module: cc.mojom

'use strict';

// Module namespace
var cc = cc || {};
cc.mojom = cc.mojom || {};


// Struct: BrowserControlsParams
cc.mojom.mojom.BrowserControlsParamsSpec = {
  $: {
    structSpec: {
      name: 'cc.mojom.BrowserControlsParams',
      packedSize: 32,
      fields: [
        { name: 'top_controls_height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'top_controls_min_height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_height', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'bottom_controls_min_height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'animate_browser_controls_height_changes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'browser_controls_shrink_blink_size', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'only_expand_top_controls_at_page_top', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
