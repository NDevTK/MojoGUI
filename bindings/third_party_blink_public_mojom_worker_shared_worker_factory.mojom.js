// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerFactory
blink.mojom.SharedWorkerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SharedWorkerFactory';
  }

  createSharedWorker(info, token, constructor_key, origin, is_constructor_secure_context, user_agent, ua_metadata, pause_on_start, devtools_worker_token, renderer_preferences, preference_watcher_receiver, content_settings, service_worker_container_info, main_script_load_params, subresource_loader_factories, controller_info, policy_container, host, shared_worker, browser_interface_broker, ukm_source_id, require_cross_site_request_for_cookies, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Method: CreateSharedWorker
    // Call: CreateSharedWorker(info, token, constructor_key, origin, is_constructor_secure_context, user_agent, ua_metadata, pause_on_start, devtools_worker_token, renderer_preferences, preference_watcher_receiver, content_settings, service_worker_container_info, main_script_load_params, subresource_loader_factories, controller_info, policy_container, host, shared_worker, browser_interface_broker, ukm_source_id, require_cross_site_request_for_cookies, coep_reporting_observer_receiver, dip_reporting_observer_receiver)
  }

};

blink.mojom.SharedWorkerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
