// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/touch_event.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TouchStateSpec = { $: mojo.internal.Enum() };
blink.mojom.TouchEventConsumersSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.TouchEventConsumersSpec, 'blink.mojom.TouchEventConsumers', [
      mojo.internal.StructField('has_touch_event_handlers', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_hit_testable_scrollbar', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
