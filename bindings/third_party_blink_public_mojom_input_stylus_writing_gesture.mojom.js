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
blink.mojom.StylusWritingGestureActionSpec = { $: mojo.internal.Enum() };

// Enum: StylusWritingGestureGranularity
blink.mojom.StylusWritingGestureGranularity = {
  CHARACTER: 0,
  WORD: 1,
};
blink.mojom.StylusWritingGestureGranularitySpec = { $: mojo.internal.Enum() };

// Struct: StylusWritingGestureData
blink.mojom.StylusWritingGestureDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StylusWritingGestureData',
      packedSize: 48,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StylusWritingGestureActionSpec, nullable: false, minVersion: 0 },
        { name: 'granularity', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.StylusWritingGestureGranularitySpec, nullable: false, minVersion: 0 },
        { name: 'start_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'end_rect', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
        { name: 'text_alternative', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text_to_insert', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
