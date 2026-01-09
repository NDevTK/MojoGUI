// Auto-generated MojoJS binding
// Source: chromium_src/content/shell/common/power_monitor_test.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: PowerMonitorTest
content.mojom.PowerMonitorTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.PowerMonitorTest';
  }

  queryNextState() {
    // Method: QueryNextState
    return new Promise((resolve) => {
      // Call: QueryNextState()
      resolve({});
    });
  }

};

content.mojom.PowerMonitorTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
