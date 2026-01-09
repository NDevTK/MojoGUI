// Auto-generated MojoJS binding
// Source: chromium_src/ios/web/shell/web_usage_controller.mojom
// Module: web.mojom

'use strict';

// Module namespace
var web = web || {};
web.mojom = web.mojom || {};


// Interface: WebUsageController
web.mojom.WebUsageControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'web.mojom.WebUsageController';
  }

  setWebUsageEnabled(enabled) {
    // Method: SetWebUsageEnabled
    // Call: SetWebUsageEnabled(enabled)
  }

};

web.mojom.WebUsageControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
