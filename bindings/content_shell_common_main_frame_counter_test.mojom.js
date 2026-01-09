// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/main_frame_counter_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: MainFrameCounterTest
content.mojom.MainFrameCounterTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.MainFrameCounterTest';
  }

  hasMainFrame() {
    // Method: HasMainFrame
    return new Promise((resolve) => {
      // Call: HasMainFrame()
      resolve({});
    });
  }

};

content.mojom.MainFrameCounterTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
