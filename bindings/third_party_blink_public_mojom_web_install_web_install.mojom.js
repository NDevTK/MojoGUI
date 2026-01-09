// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/web_install/web_install.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebInstallServiceResult
blink.mojom.WebInstallServiceResult = {
  kSuccess: 0,
  kAbortError: 1,
  kDataError: 2,
};

// Struct: InstallOptions
blink.mojom.InstallOptions = class {
  constructor(values = {}) {
    this.manifest_id = values.manifest_id !== undefined ? values.manifest_id : null;
  }
};

// Interface: WebInstallService
blink.mojom.WebInstallServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebInstallService';
  }

  install(options) {
    // Method: Install
    return new Promise((resolve) => {
      // Call: Install(options)
      resolve({});
    });
  }

  installFromElement(options) {
    // Method: InstallFromElement
    return new Promise((resolve) => {
      // Call: InstallFromElement(options)
      resolve({});
    });
  }

};

blink.mojom.WebInstallServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
