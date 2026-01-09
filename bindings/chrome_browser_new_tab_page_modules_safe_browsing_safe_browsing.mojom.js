// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/safe_browsing/safe_browsing.mojom
// Module: ntp.safe_browsing.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.safe_browsing = ntp.safe_browsing || {};
ntp.safe_browsing.mojom = ntp.safe_browsing.mojom || {};


// Interface: SafeBrowsingHandler
ntp.safe_browsing.mojom.SafeBrowsingHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
  }

  canShowModule() {
    // Method: CanShowModule
    return new Promise((resolve) => {
      // Call: CanShowModule()
      resolve({});
    });
  }

  processModuleClick() {
    // Method: ProcessModuleClick
    // Call: ProcessModuleClick()
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
  }

  restoreModule() {
    // Method: RestoreModule
    // Call: RestoreModule()
  }

};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
