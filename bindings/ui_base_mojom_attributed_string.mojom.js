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
      packedSize: 16,
      fields: [
        { name: 'effective_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'attributes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
