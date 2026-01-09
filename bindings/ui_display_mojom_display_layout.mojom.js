// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_layout.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Enum: Position
display.mojom.Position = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
};

// Enum: OffsetReference
display.mojom.OffsetReference = {
  TOP_LEFT: 0,
  BOTTOM_RIGHT: 1,
};

// Struct: DisplayPlacement
display.mojom.DisplayPlacementSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayPlacement',
      packedSize: 16,
      fields: [
        { name: 'offset_reference', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisplayLayout
display.mojom.DisplayLayoutSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayLayout',
      packedSize: 16,
      fields: [
        { name: 'placement_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
