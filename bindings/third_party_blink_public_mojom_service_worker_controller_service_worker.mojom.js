// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/controller_service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};


// Struct: ServiceWorkerRouterData
blink.mojom.mojom.ServiceWorkerRouterDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterData',
      packedSize: 32,
      fields: [
        { name: 'router_rules', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterRulesSpec, nullable: false, minVersion: 0 },
        { name: 'initial_running_status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEmbeddedWorkerStatusSpec, nullable: true, minVersion: 0 },
        { name: 'running_status_receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'remote_cache_storage', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ControllerServiceWorkerInfo
blink.mojom.mojom.ControllerServiceWorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorkerInfo',
      packedSize: 72,
      fields: [
        { name: 'fetch_handler_bypass_option', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.ServiceWorkerFetchHandlerBypassOptionSpec, nullable: false, minVersion: 0 },
        { name: 'sha256_script_checksum', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'need_router_evaluate', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'router_data', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterDataSpec, nullable: true, minVersion: 0 },
        { name: 'remote_controller', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'client_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fetch_request_window_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'object_info', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true, minVersion: 0 },
        { name: 'used_features', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebFeatureSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: ControllerServiceWorker
blink.mojom.mojom.ControllerServiceWorker = {};

blink.mojom.mojom.ControllerServiceWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ControllerServiceWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ControllerServiceWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ControllerServiceWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ControllerServiceWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ControllerServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchFetchEventForSubresource(params, response_callback) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec,
      blink.mojom.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec,
      [params, response_callback]);
  }

  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ControllerServiceWorker_Clone_ParamsSpec,
      null,
      [receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter]);
  }

};

blink.mojom.mojom.ControllerServiceWorker.getRemote = function() {
  let remote = new blink.mojom.mojom.ControllerServiceWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ControllerServiceWorker',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchFetchEventForSubresource
blink.mojom.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.DispatchFetchEventForSubresource_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DispatchFetchEventParamsSpec, nullable: false, minVersion: 0 },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.DispatchFetchEventForSubresource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.mojom.ControllerServiceWorker_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.Clone_Params',
      packedSize: 40,
      fields: [
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false, minVersion: 0 },
        { name: 'coep_reporter', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'document_isolation_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false, minVersion: 0 },
        { name: 'dip_reporter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ControllerServiceWorkerPtr = blink.mojom.mojom.ControllerServiceWorkerRemote;
blink.mojom.mojom.ControllerServiceWorkerRequest = blink.mojom.mojom.ControllerServiceWorkerPendingReceiver;


// Interface: ControllerServiceWorkerConnector
blink.mojom.mojom.ControllerServiceWorkerConnector = {};

blink.mojom.mojom.ControllerServiceWorkerConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ControllerServiceWorkerConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ControllerServiceWorkerConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ControllerServiceWorkerConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ControllerServiceWorkerConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ControllerServiceWorkerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateController(controller) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec,
      null,
      [controller]);
  }

};

blink.mojom.mojom.ControllerServiceWorkerConnector.getRemote = function() {
  let remote = new blink.mojom.mojom.ControllerServiceWorkerConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ControllerServiceWorkerConnector',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateController
blink.mojom.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorkerConnector.UpdateController_Params',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ControllerServiceWorkerConnectorPtr = blink.mojom.mojom.ControllerServiceWorkerConnectorRemote;
blink.mojom.mojom.ControllerServiceWorkerConnectorRequest = blink.mojom.mojom.ControllerServiceWorkerConnectorPendingReceiver;

