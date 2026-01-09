// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/unhandled_tap_notifier/unhandled_tap_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: UnhandledTapInfo
blink.mojom.UnhandledTapInfo = class {
  constructor(values = {}) {
    this.tapped_position_in_viewport = values.tapped_position_in_viewport !== undefined ? values.tapped_position_in_viewport : 0;
  }
};

// Interface: UnhandledTapNotifier
blink.mojom.UnhandledTapNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.UnhandledTapNotifier';
  }

  showUnhandledTapUIIfNeeded(unhandled_tap_info) {
    // Method: ShowUnhandledTapUIIfNeeded
    // Call: ShowUnhandledTapUIIfNeeded(unhandled_tap_info)
  }

};

blink.mojom.UnhandledTapNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
