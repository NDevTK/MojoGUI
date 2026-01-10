// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/scroll/scroll_into_view_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.BehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.ScrollAlignmentSpec = { $: {} };
blink.mojom.FocusedEditableParamsSpec = { $: {} };
blink.mojom.ScrollIntoViewParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.ScrollAlignmentSpec, 'blink.mojom.ScrollAlignment', [
      mojo.internal.StructField('kNoScroll', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FocusedEditableParams
mojo.internal.Struct(
    blink.mojom.FocusedEditableParamsSpec, 'blink.mojom.FocusedEditableParams', [
      mojo.internal.StructField('relative_location', 0, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeFSpec, null, false, 0, undefined),
      mojo.internal.StructField('can_zoom', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ScrollIntoViewParams
mojo.internal.Struct(
    blink.mojom.ScrollIntoViewParamsSpec, 'blink.mojom.ScrollIntoViewParams', [
      mojo.internal.StructField('align_x', 0, 0, blink.mojom.ScrollAlignmentSpec, null, false, 0, undefined),
      mojo.internal.StructField('align_y', 8, 0, blink.mojom.ScrollAlignmentSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, blink.mojom.ScrollTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('make_visible_in_visual_viewport', 20, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('behavior', 24, 0, blink.mojom.ScrollBehaviorSpec, 0, false, 0, undefined),
      mojo.internal.StructField('is_for_scroll_sequence', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('for_focused_editable', 32, 0, blink.mojom.FocusedEditableParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('cross_origin_boundaries', 40, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 56]]);
