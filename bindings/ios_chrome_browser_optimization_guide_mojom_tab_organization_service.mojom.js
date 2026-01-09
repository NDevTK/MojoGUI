// Auto-generated MojoJS binding
// Source: chromium_src/ios/chrome/browser/optimization_guide/mojom/tab_organization_service.mojom
// Module: ai.mojom

'use strict';

// Module namespace
var ai = ai || {};
ai.mojom = ai.mojom || {};


// Interface: TabOrganizationService
ai.mojom.TabOrganizationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ai.mojom.TabOrganizationService';
  }

  executeGroupTabs(request) {
    // Method: ExecuteGroupTabs
    return new Promise((resolve) => {
      // Call: ExecuteGroupTabs(request)
      resolve({});
    });
  }

};

ai.mojom.TabOrganizationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
