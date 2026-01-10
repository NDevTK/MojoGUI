// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/scroll/scroll_enums.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ScrollTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ScrollBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: ScrollType
blink.mojom.ScrollType = {
  kUser: 0,
  kProgrammatic: 1,
  kClamping: 2,
  kCompositor: 3,
  kAnchoring: 4,
  kScrollStart: 5,
};

// Enum: ScrollBehavior
blink.mojom.ScrollBehavior = {
  kAuto: 0,
  kInstant: 1,
  kSmooth: 2,
};
