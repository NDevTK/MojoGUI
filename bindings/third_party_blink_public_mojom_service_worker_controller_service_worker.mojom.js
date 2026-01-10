// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/controller_service_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
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
      [params, response_callback],
      false);
  }

  clone(receiver, cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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

blink.mojom.ControllerServiceWorkerConnectorPtr = blink.mojom.ControllerServiceWorkerConnectorRemote;
blink.mojom.ControllerServiceWorkerConnectorRequest = blink.mojom.ControllerServiceWorkerConnectorPendingReceiver;

