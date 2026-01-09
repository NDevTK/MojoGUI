// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/scroll/scroll_into_view_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Behavior
blink.mojom.Behavior = {
  kNoScroll: 0,
  kCenter: 1,
  kTop: 2,
  kBottom: 3,
  kLeft: 4,
  kRight: 5,
  kClosestEdge: 6,
};

// Struct: ScrollAlignment
blink.mojom.ScrollAlignmentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollAlignment',
      packedSize: 16,
      fields: [
        { name: 'kNoScroll', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FocusedEditableParams
blink.mojom.FocusedEditableParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FocusedEditableParams',
      packedSize: 32,
      fields: [
        { name: 'relative_location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false },
        { name: 'can_zoom', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollIntoViewParams
blink.mojom.ScrollIntoViewParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollIntoViewParams',
      packedSize: 72,
      fields: [
        { name: 'align_x', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollAlignmentSpec, nullable: false },
        { name: 'align_y', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ScrollAlignmentSpec, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ScrollTypeSpec, nullable: false },
        { name: 'make_visible_in_visual_viewport', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'behavior', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ScrollBehaviorSpec, nullable: false },
        { name: 'is_for_scroll_sequence', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'for_focused_editable', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.FocusedEditableParamsSpec, nullable: true },
        { name: 'cross_origin_boundaries', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
