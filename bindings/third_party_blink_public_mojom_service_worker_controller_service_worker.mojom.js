// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/controller_service_worker.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

blink.mojom.ServiceWorkerRouterDataSpec = { $: {} };
blink.mojom.ControllerServiceWorkerInfoSpec = { $: {} };
blink.mojom.ControllerServiceWorker = {};
blink.mojom.ControllerServiceWorker.$interfaceName = 'blink.mojom.ControllerServiceWorker';
blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec = { $: {} };
blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec = { $: {} };
blink.mojom.ControllerServiceWorker_Clone_ParamsSpec = { $: {} };
blink.mojom.ControllerServiceWorkerConnector = {};
blink.mojom.ControllerServiceWorkerConnector.$interfaceName = 'blink.mojom.ControllerServiceWorkerConnector';
blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec = { $: {} };

// Struct: ServiceWorkerRouterData
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRouterDataSpec, 'blink.mojom.ServiceWorkerRouterData', [
      mojo.internal.StructField('router_rules', 0, 0, blink.mojom.ServiceWorkerRouterRulesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_running_status', 8, 0, blink.mojom.ServiceWorkerEmbeddedWorkerStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('running_status_receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerRunningStatusCallbackRemote), null, true, 0, undefined),
      mojo.internal.StructField('remote_cache_storage', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ControllerServiceWorkerInfo
mojo.internal.Struct(
    blink.mojom.ControllerServiceWorkerInfoSpec, 'blink.mojom.ControllerServiceWorkerInfo', [
      mojo.internal.StructField('fetch_handler_bypass_option', 0, 0, blink.mojom.ServiceWorkerFetchHandlerBypassOptionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('sha256_script_checksum', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('router_data', 16, 0, blink.mojom.ServiceWorkerRouterDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_controller', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ControllerServiceWorkerRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fetch_request_window_id', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('object_info', 48, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('used_features', 56, 0, mojo.internal.Array(blink.mojom.WebFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('need_router_evaluate', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Interface: ControllerServiceWorker
mojo.internal.Struct(
    blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec, 'blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DispatchFetchEventParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_callback', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ServiceWorkerFetchResponseCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec, 'blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEventStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ControllerServiceWorker_Clone_ParamsSpec, 'blink.mojom.ControllerServiceWorker_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('cross_origin_embedder_policy', 8, 0, network.mojom.CrossOriginEmbedderPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coep_reporter', 16, 0, mojo.internal.InterfaceProxy(network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('document_isolation_policy', 24, 0, network.mojom.DocumentIsolationPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dip_reporter', 32, 0, mojo.internal.InterfaceProxy(network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);

blink.mojom.ControllerServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ControllerServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ControllerServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ControllerServiceWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ControllerServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  dispatchFetchEventForSubresource(params, response_callback) {
    return this.$.dispatchFetchEventForSubresource(params, response_callback);
  }
  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    return this.$.clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter);
  }
};

blink.mojom.ControllerServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ControllerServiceWorker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchFetchEventForSubresource(params, response_callback) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec,
      blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec,
      [params, response_callback],
      false);
  }

  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ControllerServiceWorker_Clone_ParamsSpec,
      null,
      [receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter],
      false);
  }

};

blink.mojom.ControllerServiceWorker.getRemote = function() {
  let remote = new blink.mojom.ControllerServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ControllerServiceWorker',
    'context');
  return remote.$;
};

blink.mojom.ControllerServiceWorkerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ControllerServiceWorker', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ControllerServiceWorker_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchFetchEventForSubresource(params.params, params.response_callback);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ControllerServiceWorker_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.receiver, params.cross_origin_embedder_policy, params.coep_reporter, params.document_isolation_policy, params.dip_reporter);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ControllerServiceWorkerReceiver = blink.mojom.ControllerServiceWorkerReceiver;

blink.mojom.ControllerServiceWorkerPtr = blink.mojom.ControllerServiceWorkerRemote;
blink.mojom.ControllerServiceWorkerRequest = blink.mojom.ControllerServiceWorkerPendingReceiver;


// Interface: ControllerServiceWorkerConnector
mojo.internal.Struct(
    blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec, 'blink.mojom.ControllerServiceWorkerConnector_UpdateController_Params', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ControllerServiceWorkerRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ControllerServiceWorkerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ControllerServiceWorkerConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ControllerServiceWorkerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ControllerServiceWorkerConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.ControllerServiceWorkerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  updateController(controller) {
    return this.$.updateController(controller);
  }
};

blink.mojom.ControllerServiceWorkerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ControllerServiceWorkerConnector', [
      { explicit: null },
    ]);
  }

  updateController(controller) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec,
      null,
      [controller],
      false);
  }

};

blink.mojom.ControllerServiceWorkerConnector.getRemote = function() {
  let remote = new blink.mojom.ControllerServiceWorkerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ControllerServiceWorkerConnector',
    'context');
  return remote.$;
};

blink.mojom.ControllerServiceWorkerConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ControllerServiceWorkerConnector', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec.$.structSpec);
          const result = this.impl.updateController(params.controller);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ControllerServiceWorkerConnectorReceiver = blink.mojom.ControllerServiceWorkerConnectorReceiver;

blink.mojom.ControllerServiceWorkerConnectorPtr = blink.mojom.ControllerServiceWorkerConnectorRemote;
blink.mojom.ControllerServiceWorkerConnectorRequest = blink.mojom.ControllerServiceWorkerConnectorPendingReceiver;

