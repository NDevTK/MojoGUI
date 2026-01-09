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
      blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec,
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
      packedSize: 160,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'constructor_key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.StorageKeySpec, nullable: false },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'user_agent', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ua_metadata', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'devtools_worker_token', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'renderer_preferences', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_container_info', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'main_script_load_params', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'subresource_loader_factories', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'controller_info', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'policy_container', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ukm_source_id', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'preference_watcher_receiver', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'content_settings', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'host', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'shared_worker', packedOffset: 124, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'browser_interface_broker', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'coep_reporting_observer_receiver', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'dip_reporting_observer_receiver', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'is_constructor_secure_context', packedOffset: 140, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'pause_on_start', packedOffset: 140, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'require_cross_site_request_for_cookies', packedOffset: 140, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerFactoryPtr = blink.mojom.SharedWorkerFactoryRemote;
blink.mojom.SharedWorkerFactoryRequest = blink.mojom.SharedWorkerFactoryPendingReceiver;

