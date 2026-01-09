// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/service_connector.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ServiceConnector
chromecast.mojom.ServiceConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.ServiceConnector';
  }

  connect(service_name, receiver) {
    // Method: Connect
    // Call: Connect(service_name, receiver)
  }

};

chromecast.mojom.ServiceConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
