// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/touch_event.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: TouchState
blink.mojom.TouchState = {
  kStateUndefined: 0,
  kStateReleased: 1,
  kStatePressed: 2,
  kStateMoved: 3,
  kStateStationary: 4,
  kStateCancelled: 5,
};

// Struct: TouchEventConsumers
blink.mojom.TouchEventConsumersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TouchEventConsumers',
      packedSize: 16,
      fields: [
        { name: 'has_hit_testable_scrollbar', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
