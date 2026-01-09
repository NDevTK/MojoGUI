// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/controller_service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerRouterData
blink.mojom.ServiceWorkerRouterData = class {
  constructor(values = {}) {
    this.remote_cache_storage = values.remote_cache_storage !== undefined ? values.remote_cache_storage : null;
  }
};

// Struct: ControllerServiceWorkerInfo
blink.mojom.ControllerServiceWorkerInfo = class {
  constructor(values = {}) {
    this.remote_controller = values.remote_controller !== undefined ? values.remote_controller : false;
    this.is = values.is !== undefined ? values.is : null;
    this.would = values.would !== undefined ? values.would : null;
    this.object_info = values.object_info !== undefined ? values.object_info : "";
    this.used_features = values.used_features !== undefined ? values.used_features : [];
  }
};

// Interface: ControllerServiceWorker
blink.mojom.ControllerServiceWorkerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ControllerServiceWorker';
  }

  dispatchFetchEventForSubresource(params, response_callback) {
    // Method: DispatchFetchEventForSubresource
    return new Promise((resolve) => {
      // Call: DispatchFetchEventForSubresource(params, response_callback)
      resolve({});
    });
  }

  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    // Method: Clone
    // Call: Clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter)
  }

};

blink.mojom.ControllerServiceWorkerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ControllerServiceWorkerConnector
blink.mojom.ControllerServiceWorkerConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ControllerServiceWorkerConnector';
  }

  updateController(controller) {
    // Method: UpdateController
    // Call: UpdateController(controller)
  }

};

blink.mojom.ControllerServiceWorkerConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
