// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorkerFactory
blink.mojom.SharedWorkerFactory = {};

blink.mojom.SharedWorkerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SharedWorkerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSharedWorker(info, token, constructor_key, origin, is_constructor_secure_context, user_agent, ua_metadata, pause_on_start, devtools_worker_token, renderer_preferences, preference_watcher_receiver, content_settings, service_worker_container_info, main_script_load_params, subresource_loader_factories, controller_info, policy_container, host, shared_worker, browser_interface_broker, ukm_source_id, require_cross_site_request_for_cookies, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec.$,
      null,
      [info, token, constructor_key, origin, is_constructor_secure_context, user_agent, ua_metadata, pause_on_start, devtools_worker_token, renderer_preferences, preference_watcher_receiver, content_settings, service_worker_container_info, main_script_load_params, subresource_loader_factories, controller_info, policy_container, host, shared_worker, browser_interface_broker, ukm_source_id, require_cross_site_request_for_cookies, coep_reporting_observer_receiver, dip_reporting_observer_receiver]);
  }

};

blink.mojom.SharedWorkerFactory.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateSharedWorker
blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerFactory.CreateSharedWorker_Params',
      packedSize: 200,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'constructor_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_constructor_secure_context', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'user_agent', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ua_metadata', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pause_on_start', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'devtools_worker_token', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'renderer_preferences', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'preference_watcher_receiver', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_settings', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'service_worker_container_info', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'main_script_load_params', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'subresource_loader_factories', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'controller_info', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'policy_container', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_worker', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'browser_interface_broker', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ukm_source_id', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'require_cross_site_request_for_cookies', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'coep_reporting_observer_receiver', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dip_reporting_observer_receiver', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerFactoryPtr = blink.mojom.SharedWorkerFactoryRemote;
blink.mojom.SharedWorkerFactoryRequest = blink.mojom.SharedWorkerFactoryPendingReceiver;

