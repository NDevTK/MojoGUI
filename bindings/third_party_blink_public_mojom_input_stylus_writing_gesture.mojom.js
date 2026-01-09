// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/stylus_writing_gesture.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.StylusWritingGestureDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StylusWritingGestureData',
      packedSize: 56,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StylusWritingGestureActionSpec, nullable: false },
        { name: 'granularity', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.StylusWritingGestureGranularitySpec, nullable: false },
        { name: 'start_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'end_rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true },
        { name: 'text_alternative', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'text_to_insert', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
