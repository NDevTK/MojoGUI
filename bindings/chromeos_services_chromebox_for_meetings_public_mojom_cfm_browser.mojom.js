// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_browser.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Struct: ExtensionData
chromeos.cfm.mojom.ExtensionData = class {
  constructor(values = {}) {
    this.description@4 = values.description@4 !== undefined ? values.description@4 : "";
  }
};

// Struct: ProcessMemoryInformation
chromeos.cfm.mojom.ProcessMemoryInformation = class {
  constructor(values = {}) {
    this.num_processes@3 = values.num_processes@3 !== undefined ? values.num_processes@3 : 0;
    this.open_fds_soft_limit@6 = values.open_fds_soft_limit@6 !== undefined ? values.open_fds_soft_limit@6 : 0;
    this.renderer_type@7 = values.renderer_type@7 !== undefined ? values.renderer_type@7 : "";
    this.extension_info@10 = values.extension_info@10 !== undefined ? values.extension_info@10 : 0;
  }
};

// Struct: ProcessData
chromeos.cfm.mojom.ProcessData = class {
  constructor(values = {}) {
    this.processes@2 = values.processes@2 !== undefined ? values.processes@2 : "";
  }
};

// Interface: CfmBrowser
chromeos.cfm.mojom.CfmBrowserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.CfmBrowser';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  memory(error) {
    // Method: memory
    // Call: memory(error)
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

};

chromeos.cfm.mojom.CfmBrowserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
