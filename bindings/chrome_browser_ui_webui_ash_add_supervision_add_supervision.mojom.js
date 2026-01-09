// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/add_supervision/add_supervision.mojom
// Module: add_supervision.mojom

'use strict';

// Module namespace
var add_supervision = add_supervision || {};
add_supervision.mojom = add_supervision.mojom || {};


// Enum: OAuthTokenFetchStatus
add_supervision.mojom.OAuthTokenFetchStatus = {
  OK: 0,
  ERROR: 1,
};

// Interface: AddSupervisionHandler
add_supervision.mojom.AddSupervisionHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'add_supervision.mojom.AddSupervisionHandler';
  }

  requestClose() {
    // Method: RequestClose
    return new Promise((resolve) => {
      // Call: RequestClose()
      resolve({});
    });
  }

  getInstalledArcApps() {
    // Method: GetInstalledArcApps
    return new Promise((resolve) => {
      // Call: GetInstalledArcApps()
      resolve({});
    });
  }

  getOAuthToken() {
    // Method: GetOAuthToken
    return new Promise((resolve) => {
      // Call: GetOAuthToken()
      resolve({});
    });
  }

  logOut() {
    // Method: LogOut
    // Call: LogOut()
  }

  notifySupervisionEnabled() {
    // Method: NotifySupervisionEnabled
    // Call: NotifySupervisionEnabled()
  }

  setCloseOnEscape(enabled) {
    // Method: SetCloseOnEscape
    // Call: SetCloseOnEscape(enabled)
  }

};

add_supervision.mojom.AddSupervisionHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
