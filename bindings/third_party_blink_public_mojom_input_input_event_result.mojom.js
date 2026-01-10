// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_event_result.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: InputEventResultSource
blink.mojom.InputEventResultSource = {
  kUnknown: 0,
  kCompositorThread: 1,
  kMainThread: 2,
  kBrowser: 3,
};
blink.mojom.InputEventResultSourceSpec = { $: mojo.internal.Enum() };

// Enum: InputEventResultState
blink.mojom.InputEventResultState = {
  kUnknown: 0,
  kConsumed: 1,
  kNotConsumed: 2,
  kNoConsumerExists: 3,
  kIgnored: 4,
  kSetNonBlocking: 5,
  kSetNonBlockingDueToFling: 6,
};
blink.mojom.InputEventResultStateSpec = { $: mojo.internal.Enum() };
