// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.DedicatedWorkerHostFactoryClient = {};
blink.mojom.DedicatedWorkerHostFactoryClient.$interfaceName = 'blink.mojom.DedicatedWorkerHostFactoryClient';
blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec = { $: {} };
blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec = { $: {} };
blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec = { $: {} };
blink.mojom.DedicatedWorkerHostFactory = {};
blink.mojom.DedicatedWorkerHostFactory.$interfaceName = 'blink.mojom.DedicatedWorkerHostFactory';
blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec = { $: {} };

blink.mojom.kNavigation_DedicatedWorkerSpec = "navigation:dedicated_worker";

// Interface: DedicatedWorkerHostFactoryClient
mojo.internal.Struct(
    blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec, 'blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_Params', [
      mojo.internal.StructField('browser_interface_broker', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.DedicatedWorkerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('origin', 16, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec, 'blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_Params', [
      mojo.internal.StructField('service_worker_container_info', 0, 0, blink.mojom.ServiceWorkerContainerInfoForClientSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('main_script_load_params', 8, 0, blink.mojom.WorkerMainScriptLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_factories', 16, 0, blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subresource_loader_updater', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.SubresourceLoaderUpdaterRemote), null, false, 0, undefined),
      mojo.internal.StructField('controller_info', 32, 0, blink.mojom.ControllerServiceWorkerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('back_forward_cache_controller_host', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.BackForwardCacheControllerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('coep_reporting_observer_receiver', 48, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('dip_reporting_observer_receiver', 56, 0, mojo.internal.InterfaceRequest(blink.mojom.ReportingObserverRemote), null, true, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec, 'blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_Params', [
    ],
    [[0, 8]]);

blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostFactoryClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactoryClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostFactoryClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWorkerHostCreated(browser_interface_broker, host, origin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec,
      null,
      [browser_interface_broker, host, origin],
      false);
  }

  onScriptLoadStarted(service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec,
      null,
      [service_worker_container_info, main_script_load_params, subresource_loader_factories, subresource_loader_updater, controller_info, back_forward_cache_controller_host, coep_reporting_observer_receiver, dip_reporting_observer_receiver],
      false);
  }

  onScriptLoadStartFailed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DedicatedWorkerHostFactoryClient.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostFactoryClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactoryClient',
    'context');
  return remote.$;
};

blink.mojom.DedicatedWorkerHostFactoryClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnWorkerHostCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWorkerHostCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnScriptLoadStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScriptLoadStarted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnScriptLoadStartFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScriptLoadStartFailed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnWorkerHostCreated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWorkerHostCreated');
          const result = this.impl.onWorkerHostCreated(params.browser_interface_broker, params.host, params.origin);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScriptLoadStarted');
          const result = this.impl.onScriptLoadStarted(params.service_worker_container_info, params.main_script_load_params, params.subresource_loader_factories, params.subresource_loader_updater, params.controller_info, params.back_forward_cache_controller_host, params.coep_reporting_observer_receiver, params.dip_reporting_observer_receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactoryClient_OnScriptLoadStartFailed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScriptLoadStartFailed');
          const result = this.impl.onScriptLoadStartFailed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DedicatedWorkerHostFactoryClientReceiver = blink.mojom.DedicatedWorkerHostFactoryClientReceiver;

blink.mojom.DedicatedWorkerHostFactoryClientPtr = blink.mojom.DedicatedWorkerHostFactoryClientRemote;
blink.mojom.DedicatedWorkerHostFactoryClientRequest = blink.mojom.DedicatedWorkerHostFactoryClientPendingReceiver;


// Interface: DedicatedWorkerHostFactory
mojo.internal.Struct(
    blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec, 'blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_Params', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.DedicatedWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credentials_mode', 16, 0, network.mojom.CredentialsModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outside_fetch_client_settings_object', 24, 0, blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 32, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('client', 40, 0, mojo.internal.InterfaceProxy(blink.mojom.DedicatedWorkerHostFactoryClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 48, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

blink.mojom.DedicatedWorkerHostFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHostFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWorkerHostAndStartScriptLoad(token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec,
      null,
      [token, script_url, credentials_mode, outside_fetch_client_settings_object, blob_url_token, client, storage_access_api_status],
      false);
  }

};

blink.mojom.DedicatedWorkerHostFactory.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHostFactory',
    'context');
  return remote.$;
};

blink.mojom.DedicatedWorkerHostFactoryReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateWorkerHostAndStartScriptLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWorkerHostAndStartScriptLoad (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DedicatedWorkerHostFactory_CreateWorkerHostAndStartScriptLoad_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createWorkerHostAndStartScriptLoad');
          const result = this.impl.createWorkerHostAndStartScriptLoad(params.token, params.script_url, params.credentials_mode, params.outside_fetch_client_settings_object, params.blob_url_token, params.client, params.storage_access_api_status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DedicatedWorkerHostFactoryReceiver = blink.mojom.DedicatedWorkerHostFactoryReceiver;

blink.mojom.DedicatedWorkerHostFactoryPtr = blink.mojom.DedicatedWorkerHostFactoryRemote;
blink.mojom.DedicatedWorkerHostFactoryRequest = blink.mojom.DedicatedWorkerHostFactoryPendingReceiver;

