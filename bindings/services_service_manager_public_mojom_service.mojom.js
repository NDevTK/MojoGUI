// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Struct: BindSourceInfo
service_manager.mojom.BindSourceInfo = class {
  constructor(values = {}) {
    this.required_capabilities = values.required_capabilities !== undefined ? values.required_capabilities : null;
  }
};

// Interface: Service
service_manager.mojom.ServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.Service';
  }

  onStart(identity) {
    // Method: OnStart
    return new Promise((resolve) => {
      // Call: OnStart(identity)
      resolve({});
    });
  }

  onBindInterface(source, interface_name, interface_pipe) {
    // Method: OnBindInterface
    // Call: OnBindInterface(source, interface_name, interface_pipe)
  }

  createPackagedServiceInstance(identity, receiver, metadata) {
    // Method: CreatePackagedServiceInstance
    // Call: CreatePackagedServiceInstance(identity, receiver, metadata)
  }

};

service_manager.mojom.ServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
