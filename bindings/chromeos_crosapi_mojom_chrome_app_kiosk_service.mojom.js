// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/chrome_app_kiosk_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ChromeKioskInstallResult
crosapi.mojom.ChromeKioskInstallResult = {
};

// Enum: ChromeKioskLaunchResult
crosapi.mojom.ChromeKioskLaunchResult = {
};

// Struct: AppInstallParams
crosapi.mojom.AppInstallParams = class {
  constructor(values = {}) {
  }
};

// Interface: ChromeKioskLaunchController
crosapi.mojom.ChromeKioskLaunchControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ChromeKioskLaunchController';
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

};

crosapi.mojom.ChromeAppKioskServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
