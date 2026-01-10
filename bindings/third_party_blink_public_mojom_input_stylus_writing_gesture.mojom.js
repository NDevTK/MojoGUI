// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/stylus_writing_gesture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.StylusWritingGestureActionSpec = { $: mojo.internal.Enum() };
blink.mojom.StylusWritingGestureGranularitySpec = { $: mojo.internal.Enum() };
blink.mojom.StylusWritingGestureDataSpec = { $: {} };

// Enum: StylusWritingGestureAction
blink.mojom.StylusWritingGestureAction = {
  DELETE_TEXT: 0,
  ADD_SPACE_OR_TEXT: 1,
  REMOVE_SPACES: 2,
  SPLIT_OR_MERGE: 3,
  SELECT_TEXT: 4,
};

// Enum: StylusWritingGestureGranularity
blink.mojom.StylusWritingGestureGranularity = {
  CHARACTER: 0,
  WORD: 1,
};

// Struct: StylusWritingGestureData
mojo.internal.Struct(
    blink.mojom.StylusWritingGestureDataSpec, 'blink.mojom.StylusWritingGestureData', [
      mojo.internal.StructField('action', 0, 0, blink.mojom.StylusWritingGestureActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 4, 0, blink.mojom.StylusWritingGestureGranularitySpec, null, false, 0, undefined),
      mojo.internal.StructField('start_rect', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('end_rect', 16, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
      mojo.internal.StructField('text_alternative', 24, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('text_to_insert', 32, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 48]]);
