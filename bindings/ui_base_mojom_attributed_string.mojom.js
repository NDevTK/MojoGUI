// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/mojom/attributed_string.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Struct: FontAttribute
ui.mojom.FontAttributeSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.FontAttribute',
      packedSize: 32,
      fields: [
        { name: 'font_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'effective_range', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'font_point_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttributedString
ui.mojom.AttributedStringSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.AttributedString',
      packedSize: 24,
      fields: [
        { name: 'string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
