// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/text_input_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: TextInputHost
blink.mojom.TextInputHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.TextInputHost';
  }

  gotCharacterIndexAtPoint(index) {
    // Method: GotCharacterIndexAtPoint
    // Call: GotCharacterIndexAtPoint(index)
  }

  gotFirstRectForRange(rect) {
    // Method: GotFirstRectForRange
    // Call: GotFirstRectForRange(rect)
  }

};

blink.mojom.TextInputHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
