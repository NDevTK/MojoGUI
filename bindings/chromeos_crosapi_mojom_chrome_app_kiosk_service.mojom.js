// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/chrome_app_kiosk_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ChromeKioskInstallResult
crosapi.mojom.ChromeKioskInstallResult = {
  kiosk: 0,
  network: 1,
  but: 2,
  but: 3,
};

// Enum: ChromeKioskLaunchResult
crosapi.mojom.ChromeKioskLaunchResult = {
  but: 0,
};

// Struct: AppInstallParams
crosapi.mojom.AppInstallParams = class {
  constructor(values = {}) {
    this.is_store_app@3 = values.is_store_app@3 !== undefined ? values.is_store_app@3 : false;
  }
};

// Interface: ChromeKioskLaunchController
crosapi.mojom.ChromeKioskLaunchControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ChromeKioskLaunchController';
  }

  0(params) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(params)
      resolve({});
    });
  }

  1(app_id, is_network_ready) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(app_id, is_network_ready)
      resolve({});
    });
  }

};

crosapi.mojom.ChromeKioskLaunchControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChromeAppKioskService
crosapi.mojom.ChromeAppKioskServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ChromeAppKioskService';
  }

  0(controller) {
    // Method: 0
    // Call: 0(controller)
  }

};

crosapi.mojom.ChromeAppKioskServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
