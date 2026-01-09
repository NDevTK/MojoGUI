// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/prerender/prerender.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PrerenderTriggerType
blink.mojom.PrerenderTriggerType = {
};

// Struct: PrerenderAttributes
blink.mojom.PrerenderAttributes = class {
  constructor(values = {}) {
    this.view_size = values.view_size !== undefined ? values.view_size : null;
  }
};

// Interface: NoStatePrefetchProcessor
blink.mojom.NoStatePrefetchProcessorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.NoStatePrefetchProcessor';
  }

  start(prerender_attribute) {
    // Method: Start
    // Call: Start(prerender_attribute)
  }

  start() {
    // Method: Start
    // Call: Start()
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

blink.mojom.NoStatePrefetchProcessorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
