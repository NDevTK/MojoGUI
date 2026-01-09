// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/vm/vm.mojom
// Module: ash.vm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.vm = ash.vm || {};
ash.vm.mojom = ash.vm.mojom || {};


// Interface: VmDiagnosticsProvider
ash.vm.mojom.VmDiagnosticsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.vm.mojom.VmDiagnosticsProvider';
  }

  getPluginVmDiagnostics() {
    // Method: GetPluginVmDiagnostics
    return new Promise((resolve) => {
      // Call: GetPluginVmDiagnostics()
      resolve({});
    });
  }

};

ash.vm.mojom.VmDiagnosticsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
