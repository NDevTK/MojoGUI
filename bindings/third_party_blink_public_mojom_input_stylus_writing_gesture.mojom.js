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
      packedSize: 16,
      fields: [
        { name: 'text_to_insert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
