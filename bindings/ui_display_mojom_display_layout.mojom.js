// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_layout.mojom
// Module: display.mojom

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};

display.mojom.PositionSpec = { $: mojo.internal.Enum() };
display.mojom.OffsetReferenceSpec = { $: mojo.internal.Enum() };
display.mojom.DisplayPlacementSpec = { $: {} };
display.mojom.DisplayLayoutSpec = { $: {} };

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
mojo.internal.Struct(
    display.mojom.DisplayPlacementSpec, 'display.mojom.DisplayPlacement', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('parent_display_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, display.mojom.PositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset_reference', 24, 0, display.mojom.OffsetReferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DisplayLayout
mojo.internal.Struct(
    display.mojom.DisplayLayoutSpec, 'display.mojom.DisplayLayout', [
      mojo.internal.StructField('primary_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('placement_list', 8, 0, mojo.internal.Array(display.mojom.DisplayPlacementSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_unified', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
