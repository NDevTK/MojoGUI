// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_installed_scripts_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerInstalledScriptsInfo
blink.mojom.ServiceWorkerInstalledScriptsInfo = class {
  constructor(values = {}) {
    this.installed_urls = values.installed_urls !== undefined ? values.installed_urls : [];
  }
};

// Struct: ServiceWorkerScriptInfo
blink.mojom.ServiceWorkerScriptInfo = class {
  constructor(values = {}) {
    this.meta_data_size = values.meta_data_size !== undefined ? values.meta_data_size : 0;
  }
};

// Interface: ServiceWorkerInstalledScriptsManagerHost
blink.mojom.ServiceWorkerInstalledScriptsManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerInstalledScriptsManagerHost';
  }

  requestInstalledScript(script_url) {
    // Method: RequestInstalledScript
    // Call: RequestInstalledScript(script_url)
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerInstalledScriptsManager
blink.mojom.ServiceWorkerInstalledScriptsManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerInstalledScriptsManager';
  }

  transferInstalledScript(script_info) {
    // Method: TransferInstalledScript
    // Call: TransferInstalledScript(script_info)
  }

};

blink.mojom.ServiceWorkerInstalledScriptsManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
