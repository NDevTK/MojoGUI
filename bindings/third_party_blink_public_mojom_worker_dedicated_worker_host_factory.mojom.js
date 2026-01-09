// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DedicatedWorkerHostFactoryClient
blink.mojom.DedicatedWorkerHostFactoryClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DedicatedWorkerHostFactoryClient';
  }

  onWorkerHostCreated(browser_interface_broker, host, origin) {
    // Method: OnWorkerHostCreated
    // Call: OnWorkerHostCreated(browser_interface_broker, host, origin)
  }

  onScriptLoadStarted(service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Method: OnScriptLoadStarted
    // Call: OnScriptLoadStarted(service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver)
  }

  onScriptLoadStartFailed() {
    // Method: OnScriptLoadStartFailed
    // Call: OnScriptLoadStartFailed()
  }

};

blink.mojom.DedicatedWorkerHostFactoryClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DedicatedWorkerHostFactory
blink.mojom.DedicatedWorkerHostFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DedicatedWorkerHostFactory';
  }

  createWorkerHostAndStartScriptLoad(token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status) {
    // Method: CreateWorkerHostAndStartScriptLoad
    // Call: CreateWorkerHostAndStartScriptLoad(token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status)
  }

};

blink.mojom.DedicatedWorkerHostFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
