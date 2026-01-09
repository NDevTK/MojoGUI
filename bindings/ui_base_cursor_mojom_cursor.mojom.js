// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/cursor/mojom/cursor.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: Cursor
ui.mojom.CursorSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Cursor',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.CursorTypeSpec, nullable: false },
        { name: 'hotspot', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'bitmap', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'image_scale_factor', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
