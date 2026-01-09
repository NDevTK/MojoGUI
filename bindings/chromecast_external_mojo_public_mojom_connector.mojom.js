// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};


// Struct: ExternalServiceInfo
chromecast.external_mojo.mojom.ExternalServiceInfo = class {
  constructor(values = {}) {
    this.disconnect_time = values.disconnect_time !== undefined ? values.disconnect_time : "";
  }
};

// Struct: ServiceInstanceInfo
chromecast.external_mojo.mojom.ServiceInstanceInfo = class {
  constructor(values = {}) {
    this.service_remote = values.service_remote !== undefined ? values.service_remote : "";
  }
};

// Interface: ExternalService
chromecast.external_mojo.mojom.ExternalServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.external_mojo.mojom.ExternalService';
  }

  onBindInterface(interface_name, interface_pipe) {
    // Method: OnBindInterface
    // Call: OnBindInterface(interface_name, interface_pipe)
  }

};

chromecast.external_mojo.mojom.ExternalServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ExternalConnector
chromecast.external_mojo.mojom.ExternalConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.external_mojo.mojom.ExternalConnector';
  }

  registerServiceInstances(instances_info) {
    // Method: RegisterServiceInstances
    // Call: RegisterServiceInstances(instances_info)
  }

  bindInterface(service_name, interface_name, interface_pipe) {
    // Method: BindInterface
    // Call: BindInterface(service_name, interface_name, interface_pipe)
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

  bindChromiumConnector(interface_pipe) {
    // Method: BindChromiumConnector
    // Call: BindChromiumConnector(interface_pipe)
  }

  queryServiceList() {
    // Method: QueryServiceList
    return new Promise((resolve) => {
      // Call: QueryServiceList()
      resolve({});
    });
  }

};

chromecast.external_mojo.mojom.ExternalConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
