// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mojo_service_manager/mojom/mojo_service_manager.mojom
// Module: chromeos.mojo_service_manager.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.mojo_service_manager = chromeos.mojo_service_manager || {};
chromeos.mojo_service_manager.mojom = chromeos.mojo_service_manager.mojom || {};


// Enum: Type
chromeos.mojo_service_manager.mojom.Type = {
};

// Enum: ErrorCode
chromeos.mojo_service_manager.mojom.ErrorCode = {
  all: 0,
  if: 1,
  the: 2,
};

// Struct: ProcessIdentity
chromeos.mojo_service_manager.mojom.ProcessIdentity = class {
  constructor(values = {}) {
    this.gid@3 = values.gid@3 !== undefined ? values.gid@3 : 0;
  }
};

// Struct: RegisteredServiceState
chromeos.mojo_service_manager.mojom.RegisteredServiceState = class {
  constructor(values = {}) {
    this.owner@0 = values.owner@0 !== undefined ? values.owner@0 : null;
  }
};

// Struct: UnregisteredServiceState
chromeos.mojo_service_manager.mojom.UnregisteredServiceState = class {
  constructor(values = {}) {
  }
};

// Struct: ServiceEvent
chromeos.mojo_service_manager.mojom.ServiceEvent = class {
  constructor(values = {}) {
    this.kUnknown = values.kUnknown !== undefined ? values.kUnknown : null;
  }
};

// Struct: Error
chromeos.mojo_service_manager.mojom.Error = class {
  constructor(values = {}) {
    this.message@1 = values.message@1 !== undefined ? values.message@1 : "";
  }
};

// Interface: ServiceManager
chromeos.mojo_service_manager.mojom.ServiceManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceManager';
  }

  0(service_name, service_provider) {
    // Method: 0
    // Call: 0(service_name, service_provider)
  }

  1(service_name, timeout, receiver) {
    // Method: 1
    // Call: 1(service_name, timeout, receiver)
  }

  2(service_name) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(service_name)
      resolve({});
    });
  }

  3(observer) {
    // Method: 3
    // Call: 3(observer)
  }

};

chromeos.mojo_service_manager.mojom.ServiceManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceProvider
chromeos.mojo_service_manager.mojom.ServiceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceProvider';
  }

  0(client_identity, receiver) {
    // Method: 0
    // Call: 0(client_identity, receiver)
  }

};

chromeos.mojo_service_manager.mojom.ServiceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceObserver
chromeos.mojo_service_manager.mojom.ServiceObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.mojo_service_manager.mojom.ServiceObserver';
  }

  0(event) {
    // Method: 0
    // Call: 0(event)
  }

};

chromeos.mojo_service_manager.mojom.ServiceObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
