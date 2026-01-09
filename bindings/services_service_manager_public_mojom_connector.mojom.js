// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/connector.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Enum: ConnectResult
service_manager.mojom.ConnectResult = {
  or: 0,
};

// Enum: BindInterfacePriority
service_manager.mojom.BindInterfacePriority = {
  but: 0,
};

// Struct: Identity
service_manager.mojom.Identity = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
    this.instance_group = values.instance_group !== undefined ? values.instance_group : null;
    this.with = values.with !== undefined ? values.with : null;
    this.instance_id = values.instance_id !== undefined ? values.instance_id : null;
    this.a = values.a !== undefined ? values.a : null;
    this.globally_unique_id = values.globally_unique_id !== undefined ? values.globally_unique_id : null;
  }
};

// Struct: ServiceInfo
service_manager.mojom.ServiceInfo = class {
  constructor(values = {}) {
    this.sandbox_type = values.sandbox_type !== undefined ? values.sandbox_type : "";
  }
};

// Interface: ProcessMetadata
service_manager.mojom.ProcessMetadataPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.ProcessMetadata';
  }

  setPID(pid) {
    // Method: SetPID
    // Call: SetPID(pid)
  }

};

service_manager.mojom.ProcessMetadataRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Connector
service_manager.mojom.ConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.Connector';
  }

  bindInterface(filter, interface_name, interface_pipe, priority) {
    // Method: BindInterface
    return new Promise((resolve) => {
      // Call: BindInterface(filter, interface_name, interface_pipe, priority)
      resolve({});
    });
  }

  queryService(service_name) {
    // Method: QueryService
    return new Promise((resolve) => {
      // Call: QueryService(service_name)
      resolve({});
    });
  }

  warmService(filter) {
    // Method: WarmService
    return new Promise((resolve) => {
      // Call: WarmService(filter)
      resolve({});
    });
  }

  registerServiceInstance(identity, service, metadata_receiver) {
    // Method: RegisterServiceInstance
    return new Promise((resolve) => {
      // Call: RegisterServiceInstance(identity, service, metadata_receiver)
      resolve({});
    });
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

};

service_manager.mojom.ConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
