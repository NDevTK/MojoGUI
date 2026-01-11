// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/gesture_event.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.GestureDeviceSpec = { $: mojo.internal.Enum() };
blink.mojom.InertialPhaseStateSpec = { $: mojo.internal.Enum() };

// Enum: GestureDevice
blink.mojom.GestureDevice = {
  kUninitialized: 0,
  kTouchpad: 1,
  kTouchscreen: 2,
  kSyntheticAutoscroll: 3,
  kScrollbar: 4,
};

// Enum: InertialPhaseState
blink.mojom.InertialPhaseState = {
  kUnknownMomentum: 0,
  kNonMomentum: 1,
  kMomentum: 2,
};
