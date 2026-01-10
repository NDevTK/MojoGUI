// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/gesture_event.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: GestureDevice
blink.mojom.mojom.GestureDevice = {
  kUninitialized: 0,
  kTouchpad: 1,
  kTouchscreen: 2,
  kSyntheticAutoscroll: 3,
  kScrollbar: 4,
};
blink.mojom.mojom.GestureDeviceSpec = { $: mojo.internal.Enum() };

// Enum: InertialPhaseState
blink.mojom.mojom.InertialPhaseState = {
  kUnknownMomentum: 0,
  kNonMomentum: 1,
  kMomentum: 2,
};
blink.mojom.mojom.InertialPhaseStateSpec = { $: mojo.internal.Enum() };
