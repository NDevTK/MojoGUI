// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/scroll_direction.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ScrollDirectionSpec = { $: mojo.internal.Enum() };

// Enum: ScrollDirection
blink.mojom.ScrollDirection = {
  kScrollUpIgnoringWritingMode: 0,
  kScrollDownIgnoringWritingMode: 1,
  kScrollLeftIgnoringWritingMode: 2,
  kScrollRightIgnoringWritingMode: 3,
  kScrollBlockDirectionBackward: 4,
  kScrollBlockDirectionForward: 5,
  kScrollInlineDirectionBackward: 6,
  kScrollInlineDirectionForward: 7,
};
