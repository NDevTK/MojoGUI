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
        { name: 'font_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'font_point_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'effective_range', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'string', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.FontAttributeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
