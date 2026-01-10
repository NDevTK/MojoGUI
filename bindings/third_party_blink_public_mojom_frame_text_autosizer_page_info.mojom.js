// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/text_autosizer_page_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: TextAutosizerPageInfo
blink.mojom.mojom.TextAutosizerPageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextAutosizerPageInfo',
      packedSize: 24,
      fields: [
        { name: 'main_frame_width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'main_frame_layout_width', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_scale_adjustment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
