// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/renderer_content_settings.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RendererContentSettings
blink.mojom.RendererContentSettingsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RendererContentSettings',
      packedSize: 16,
      fields: [
        { name: 'allow_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_image', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_popup', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_mixed_content', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_controlled_frame', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
