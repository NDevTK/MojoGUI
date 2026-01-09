// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Interface: InterfaceProvider
service_manager.mojom.InterfaceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.InterfaceProvider';
  }

  getInterface(interface_name, pipe) {
    // Method: GetInterface
    // Call: GetInterface(interface_name, pipe)
  }

};

service_manager.mojom.InterfaceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
