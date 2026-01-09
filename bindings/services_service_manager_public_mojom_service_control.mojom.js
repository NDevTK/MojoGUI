// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_control.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Interface: ServiceControl
service_manager.mojom.ServiceControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.ServiceControl';
  }

  requestQuit() {
    // Method: RequestQuit
    // Call: RequestQuit()
  }

};

service_manager.mojom.ServiceControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
