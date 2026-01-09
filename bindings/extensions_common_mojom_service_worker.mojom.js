// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: ServiceWorker
extensions.mojom.ServiceWorkerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.ServiceWorker';
  }

  updatePermissions(active_permissions, withheld_permissions) {
    // Method: UpdatePermissions
    // Call: UpdatePermissions(active_permissions, withheld_permissions)
  }

  dispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host) {
    // Method: DispatchOnConnect
    return new Promise((resolve) => {
      // Call: DispatchOnConnect(port_id, channel_type, channel_name, tab_info, external_connection_info, port, port_host)
      resolve({});
    });
  }

};

extensions.mojom.ServiceWorkerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
