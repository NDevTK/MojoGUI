// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: ServiceWorkerHost
extensions.mojom.ServiceWorkerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.ServiceWorkerHost';
  }

  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    // Method: DidInitializeServiceWorkerContext
    // Call: DidInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Method: DidStartServiceWorkerContext
    // Call: DidStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id)
  }

  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Method: DidStopServiceWorkerContext
    // Call: DidStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id)
  }

  function(API) {
    // Method: function
    // Call: function(API)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  converted() {
    // Method: converted
    // Call: converted()
  }

  requestWorker(params) {
    // Method: RequestWorker
    return new Promise((resolve) => {
      // Call: RequestWorker(params)
      resolve({});
    });
  }

  workerResponseAck(request_uuid) {
    // Method: WorkerResponseAck
    // Call: WorkerResponseAck(request_uuid)
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Method: OpenChannelToExtension
    // Call: OpenChannelToExtension(info, channel_type, channel_name, port_id, port, port_host)
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Method: OpenChannelToNativeApp
    // Call: OpenChannelToNativeApp(native_app_name, port_id, port, port_host)
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Method: OpenChannelToTab
    // Call: OpenChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host)
  }

};

extensions.mojom.ServiceWorkerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
