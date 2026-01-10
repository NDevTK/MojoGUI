// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/segmentation_internals/segmentation_internals.mojom
// Module: segmentation_internals.mojom

'use strict';

// Module namespace
var segmentation_internals = segmentation_internals || {};
segmentation_internals.mojom = segmentation_internals.mojom || {};

segmentation_internals.mojom.ServiceStatusSpec = { $: {} };
segmentation_internals.mojom.SegmentInfoSpec = { $: {} };
segmentation_internals.mojom.ClientInfoSpec = { $: {} };
segmentation_internals.mojom.PageHandlerFactory = {};
segmentation_internals.mojom.PageHandlerFactory.$interfaceName = 'segmentation_internals.mojom.PageHandlerFactory';
segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler = {};
segmentation_internals.mojom.PageHandler.$interfaceName = 'segmentation_internals.mojom.PageHandler';
segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec = { $: {} };
segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec = { $: {} };
segmentation_internals.mojom.Page = {};
segmentation_internals.mojom.Page.$interfaceName = 'segmentation_internals.mojom.Page';
segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec = { $: {} };
segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec = { $: {} };

// Struct: ServiceStatus
mojo.internal.Struct(
    segmentation_internals.mojom.ServiceStatusSpec, 'segmentation_internals.mojom.ServiceStatus', [
      mojo.internal.StructField('is_initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('intialization_status', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SegmentInfo
mojo.internal.Struct(
    segmentation_internals.mojom.SegmentInfoSpec, 'segmentation_internals.mojom.SegmentInfo', [
      mojo.internal.StructField('segment_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segment_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('segment_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('can_execute_segment', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prediction_result', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('prediction_timestamp', 40, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ClientInfo
mojo.internal.Struct(
    segmentation_internals.mojom.ClientInfoSpec, 'segmentation_internals.mojom.ClientInfo', [
      mojo.internal.StructField('segmentation_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selected_segment', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segment_info', 16, 0, mojo.internal.Array(segmentation_internals.mojom.SegmentInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(segmentation_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(segmentation_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

segmentation_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

segmentation_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

segmentation_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PageHandlerFactoryPtr = segmentation_internals.mojom.PageHandlerFactoryRemote;
segmentation_internals.mojom.PageHandlerFactoryRequest = segmentation_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec, 'segmentation_internals.mojom.PageHandler_GetServiceStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec, 'segmentation_internals.mojom.PageHandler_ExecuteModel_Params', [
      mojo.internal.StructField('segment_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec, 'segmentation_internals.mojom.PageHandler_OverwriteResult_Params', [
      mojo.internal.StructField('segment_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec, 'segmentation_internals.mojom.PageHandler_SetSelected_Params', [
      mojo.internal.StructField('segmentation_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('optimization_target', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

segmentation_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

segmentation_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getServiceStatus() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec,
      null,
      [],
      false);
  }

  executeModel(segment_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec,
      null,
      [segment_id],
      false);
  }

  overwriteResult(segment_id, result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec,
      null,
      [segment_id, result],
      false);
  }

  setSelected(segmentation_key, optimization_target) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec,
      null,
      [segmentation_key, optimization_target],
      false);
  }

};

segmentation_internals.mojom.PageHandler.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PageHandlerPtr = segmentation_internals.mojom.PageHandlerRemote;
segmentation_internals.mojom.PageHandlerRequest = segmentation_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec, 'segmentation_internals.mojom.Page_OnServiceStatusChanged_Params', [
      mojo.internal.StructField('is_initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('status_flag', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec, 'segmentation_internals.mojom.Page_OnClientInfoAvailable_Params', [
      mojo.internal.StructField('client_info', 0, 0, mojo.internal.Array(segmentation_internals.mojom.ClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

segmentation_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

segmentation_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'segmentation_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      segmentation_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new segmentation_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

segmentation_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onServiceStatusChanged(is_initialized, status_flag) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec,
      null,
      [is_initialized, status_flag],
      false);
  }

  onClientInfoAvailable(client_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec,
      null,
      [client_info],
      false);
  }

};

segmentation_internals.mojom.Page.getRemote = function() {
  let remote = new segmentation_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'segmentation_internals.mojom.Page',
    'context');
  return remote.$;
};

segmentation_internals.mojom.PagePtr = segmentation_internals.mojom.PageRemote;
segmentation_internals.mojom.PageRequest = segmentation_internals.mojom.PagePendingReceiver;

