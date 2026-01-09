// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/screen_infos.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: ScreenInfos
display.mojom.ScreenInfosSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ScreenInfos',
      packedSize: 32,
      fields: [
        { name: 'screen_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'system_cursor_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
