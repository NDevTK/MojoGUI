// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/text_autosizer_page_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: TextAutosizerPageInfo
blink.mojom.TextAutosizerPageInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TextAutosizerPageInfo',
      packedSize: 24,
      fields: [
        { name: 'main_frame_width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'main_frame_layout_width', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'device_scale_adjustment', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
