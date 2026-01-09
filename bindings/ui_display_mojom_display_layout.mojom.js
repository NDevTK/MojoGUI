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
      packedSize: 48,
      fields: [
        { name: 'display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'parent_display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'position', packedOffset: 24, packedBitOffset: 0, type: display.mojom.PositionSpec, nullable: false },
        { name: 'offset', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'offset_reference', packedOffset: 40, packedBitOffset: 0, type: display.mojom.OffsetReferenceSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'default_unified', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'primary_display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'placement_list', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
