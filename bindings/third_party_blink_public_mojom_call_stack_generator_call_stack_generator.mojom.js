// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/call_stack_generator/call_stack_generator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: CallStackGenerator
blink.mojom.CallStackGeneratorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.CallStackGenerator';
  }

  collectJavaScriptCallStack() {
    // Method: CollectJavaScriptCallStack
    return new Promise((resolve) => {
      // Call: CollectJavaScriptCallStack()
      resolve({});
    });
  }

};

blink.mojom.CallStackGeneratorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
