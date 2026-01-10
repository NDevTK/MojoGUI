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
blink.mojom.BehaviorSpec = { $: mojo.internal.Enum() };

// Struct: ScrollAlignment
blink.mojom.ScrollAlignmentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollAlignment',
      packedSize: 16,
      fields: [
        { name: 'kNoScroll', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'relative_location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeFSpec, nullable: false, minVersion: 0 },
        { name: 'can_zoom', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ScrollIntoViewParams
blink.mojom.ScrollIntoViewParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ScrollIntoViewParams',
      packedSize: 48,
      fields: [
        { name: 'align_x', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ScrollAlignmentSpec, nullable: false, minVersion: 0 },
        { name: 'align_y', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScrollAlignmentSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ScrollTypeSpec, nullable: false, minVersion: 0 },
        { name: 'make_visible_in_visual_viewport', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'behavior', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ScrollBehaviorSpec, nullable: false, minVersion: 0 },
        { name: 'is_for_scroll_sequence', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'for_focused_editable', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FocusedEditableParamsSpec, nullable: true, minVersion: 0 },
        { name: 'cross_origin_boundaries', packedOffset: 20, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
