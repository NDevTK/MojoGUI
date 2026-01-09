// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/authentication/microsoft_auth.mojom
// Module: ntp.authentication.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.authentication = ntp.authentication || {};
ntp.authentication.mojom = ntp.authentication.mojom || {};


// Interface: MicrosoftAuthPageHandler
ntp.authentication.mojom.MicrosoftAuthPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ntp.authentication.mojom.MicrosoftAuthPageHandler';
  }

  dismissModule() {
    // Method: DismissModule
    // Call: DismissModule()
  }

  restoreModule() {
    // Method: RestoreModule
    // Call: RestoreModule()
  }

  shouldShowModule() {
    // Method: ShouldShowModule
    return new Promise((resolve) => {
      // Call: ShouldShowModule()
      resolve({});
    });
  }

};

ntp.authentication.mojom.MicrosoftAuthPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
