// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.SharedWorkerFactory = {};
blink.mojom.SharedWorkerFactory.$interfaceName = 'blink.mojom.SharedWorkerFactory';
blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec = { $: {} };

blink.mojom.kNavigation_SharedWorkerSpec = "navigation:shared_worker";

// Interface: SharedWorkerFactory
mojo.internal.Struct(
    blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec, 'blink.mojom.SharedWorkerFactory_CreateSharedWorker_Params', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.SharedWorkerInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, blink.mojom.SharedWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('constructor_key', 16, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 24, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_agent', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ua_metadata', 40, 0, blink.mojom.UserAgentMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_worker_token', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_preferences', 56, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preference_watcher_receiver', 64, 0, mojo.internal.InterfaceRequest(blink.mojom.RendererPreferenceWatcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('content_settings', 72, 0, mojo.internal.InterfaceProxy(blink.mojom.WorkerContentSettingsProxyRemote), null, false, 0, undefined),
      mojo.internal.StructField('service_worker_container_info', 80, 0, blink.mojom.ServiceWorkerContainerInfoForClientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('main_script_load_params', 88, 0, blink.mojom.WorkerMainScriptLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 96, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('controller_info', 104, 0, blink.mojom.ControllerServiceWorkerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('policy_container', 112, 0, blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host', 120, 0, mojo.internal.InterfaceProxy(blink.mojom.SharedWorkerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_worker', 128, 0, mojo.internal.InterfaceRequest(blink.mojom.SharedWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('browser_interface_broker', 136, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('ukm_source_id', 144, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('coep_reporting_observer_receiver', 152, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporting_observer_receiver', 160, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('is_constructor_secure_context', 168, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pause_on_start', 168, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_cross_site_request_for_cookies', 168, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);

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
      [info, token, constructor_key, origin, is_constructor_secure_context, user_agent, ua_metadata, pause_on_start, devtools_worker_token, renderer_preferences, preference_watcher_receiver, content_settings, service_worker_container_info, main_script_load_params, subresource_loader_factories, controller_info, policy_container, host, shared_worker, browser_interface_broker, ukm_source_id, require_cross_site_request_for_cookies, coep_reporting_observer_receiver, dip_reporting_observer_receiver],
      false);
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

blink.mojom.SharedWorkerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.SharedWorkerFactory_CreateSharedWorker_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createSharedWorker');
          const result = this.impl.createSharedWorker(params.info, params.token, params.constructor_key, params.origin, params.is_constructor_secure_context, params.user_agent, params.ua_metadata, params.pause_on_start, params.devtools_worker_token, params.renderer_preferences, params.preference_watcher_receiver, params.content_settings, params.service_worker_container_info, params.main_script_load_params, params.subresource_loader_factories, params.controller_info, params.policy_container, params.host, params.shared_worker, params.browser_interface_broker, params.ukm_source_id, params.require_cross_site_request_for_cookies, params.coep_reporting_observer_receiver, params.dip_reporting_observer_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.SharedWorkerFactoryReceiver = blink.mojom.SharedWorkerFactoryReceiver;

blink.mojom.SharedWorkerFactoryPtr = blink.mojom.SharedWorkerFactoryRemote;
blink.mojom.SharedWorkerFactoryRequest = blink.mojom.SharedWorkerFactoryPendingReceiver;

