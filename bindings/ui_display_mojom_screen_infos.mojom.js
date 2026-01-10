// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/screen_infos.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: ScreenInfos
display.mojom.mojom.ScreenInfosSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ScreenInfos',
      packedSize: 32,
      fields: [
        { name: 'screen_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(display.mojom.ScreenInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'current_display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'system_cursor_size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
