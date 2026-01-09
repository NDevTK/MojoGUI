// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/ai_prototyping_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: AIPrototypingService
ai.mojom.AIPrototypingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ai.mojom.AIPrototypingService';
  }

  executeServerQuery(request) {
    // Method: ExecuteServerQuery
    return new Promise((resolve) => {
      // Call: ExecuteServerQuery(request)
      resolve({});
    });
  }

  executeOnDeviceQuery(request) {
    // Method: ExecuteOnDeviceQuery
    return new Promise((resolve) => {
      // Call: ExecuteOnDeviceQuery(request)
      resolve({});
    });
  }

};

ai.mojom.AIPrototypingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
