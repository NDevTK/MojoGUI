// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/touch_event.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: TouchState
blink.mojom.mojom.TouchState = {
  kStateUndefined: 0,
  kStateReleased: 1,
  kStatePressed: 2,
  kStateMoved: 3,
  kStateStationary: 4,
  kStateCancelled: 5,
};
blink.mojom.mojom.TouchStateSpec = { $: mojo.internal.Enum() };

// Struct: TouchEventConsumers
blink.mojom.mojom.TouchEventConsumersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TouchEventConsumers',
      packedSize: 16,
      fields: [
        { name: 'has_touch_event_handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_hit_testable_scrollbar', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
