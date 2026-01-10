// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_layout.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Enum: Position
display.mojom.mojom.Position = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
};
display.mojom.mojom.PositionSpec = { $: mojo.internal.Enum() };

// Enum: OffsetReference
display.mojom.mojom.OffsetReference = {
  TOP_LEFT: 0,
  BOTTOM_RIGHT: 1,
};
display.mojom.mojom.OffsetReferenceSpec = { $: mojo.internal.Enum() };

// Struct: DisplayPlacement
display.mojom.mojom.DisplayPlacementSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayPlacement',
      packedSize: 40,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'parent_display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: display.mojom.PositionSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'offset_reference', packedOffset: 24, packedBitOffset: 0, type: display.mojom.OffsetReferenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DisplayLayout
display.mojom.mojom.DisplayLayoutSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayLayout',
      packedSize: 32,
      fields: [
        { name: 'default_unified', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'placement_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(display.mojom.DisplayPlacementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
