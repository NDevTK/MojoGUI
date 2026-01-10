// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/cursor/mojom/cursor.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var skia = skia || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: Cursor
ui.mojom.mojom.CursorSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Cursor',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.CursorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'hotspot', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'image_scale_factor', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
