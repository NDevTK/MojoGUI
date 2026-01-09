// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/smart_tab_grouping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: SmartTabGroupingService
ai.mojom.SmartTabGroupingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ai.mojom.SmartTabGroupingService';
  }

  executeSmartTabGroupingRequest() {
    // Method: ExecuteSmartTabGroupingRequest
    return new Promise((resolve) => {
      // Call: ExecuteSmartTabGroupingRequest()
      resolve({});
    });
  }

};

ai.mojom.SmartTabGroupingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
