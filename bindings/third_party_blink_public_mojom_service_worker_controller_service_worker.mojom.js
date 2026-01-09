// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/controller_service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerRouterData
blink.mojom.ServiceWorkerRouterDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerRouterData',
      packedSize: 32,
      fields: [
        { name: 'router_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'initial_running_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'running_status_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'remote_cache_storage', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ControllerServiceWorkerInfo
blink.mojom.ControllerServiceWorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorkerInfo',
      packedSize: 80,
      fields: [
        { name: 'fetch_handler_bypass_option', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sha256_script_checksum', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'router_data', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRouterDataSpec, nullable: true },
        { name: 'client_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fetch_request_window_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true },
        { name: 'object_info', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: true },
        { name: 'used_features', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'remote_controller', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'need_router_evaluate', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ControllerServiceWorker
blink.mojom.ControllerServiceWorker = {};

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
};

blink.mojom.ControllerServiceWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchFetchEventForSubresource(params, response_callback) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec,
      blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec,
      [params, response_callback]);
  }

  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ControllerServiceWorker_Clone_ParamsSpec,
      null,
      [receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter]);
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

// ParamsSpec for DispatchFetchEventForSubresource
blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.DispatchFetchEventForSubresource_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DispatchFetchEventParamsSpec, nullable: false },
        { name: 'response_callback', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.ControllerServiceWorker_DispatchFetchEventForSubresource_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.DispatchFetchEventForSubresource_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerEventStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.ControllerServiceWorker_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorker.Clone_Params',
      packedSize: 40,
      fields: [
        { name: 'cross_origin_embedder_policy', packedOffset: 0, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicySpec, nullable: false },
        { name: 'document_isolation_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicySpec, nullable: false },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'coep_reporter', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'dip_reporter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ControllerServiceWorkerPtr = blink.mojom.ControllerServiceWorkerRemote;
blink.mojom.ControllerServiceWorkerRequest = blink.mojom.ControllerServiceWorkerPendingReceiver;


// Interface: ControllerServiceWorkerConnector
blink.mojom.ControllerServiceWorkerConnector = {};

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
};

blink.mojom.ControllerServiceWorkerConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateController(controller) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec,
      null,
      [controller]);
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

// ParamsSpec for UpdateController
blink.mojom.ControllerServiceWorkerConnector_UpdateController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ControllerServiceWorkerConnector.UpdateController_Params',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ControllerServiceWorkerConnectorPtr = blink.mojom.ControllerServiceWorkerConnectorRemote;
blink.mojom.ControllerServiceWorkerConnectorRequest = blink.mojom.ControllerServiceWorkerConnectorPendingReceiver;

