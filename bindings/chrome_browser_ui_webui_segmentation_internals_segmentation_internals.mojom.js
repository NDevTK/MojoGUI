// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/segmentation_internals/segmentation_internals.mojom
// Module: segmentation_internals.mojom

'use strict';

// Module namespace
var segmentation_internals = segmentation_internals || {};
segmentation_internals.mojom = segmentation_internals.mojom || {};


// Struct: ServiceStatus
segmentation_internals.mojom.ServiceStatusSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.ServiceStatus',
      packedSize: 16,
      fields: [
        { name: 'is_initialized', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'intialization_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SegmentInfo
segmentation_internals.mojom.SegmentInfoSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.SegmentInfo',
      packedSize: 48,
      fields: [
        { name: 'segment_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'segment_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'segment_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'can_execute_segment', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prediction_result', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'prediction_timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ClientInfo
segmentation_internals.mojom.ClientInfoSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.ClientInfo',
      packedSize: 32,
      fields: [
        { name: 'segmentation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'selected_segment', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'segment_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(segmentation_internals.mojom.SegmentInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: PageHandlerFactory
segmentation_internals.mojom.PageHandlerFactory = {};

segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(segmentation_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(segmentation_internals.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [page, handler]);
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

// ParamsSpec for CreatePageHandler
segmentation_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(segmentation_internals.mojom.PageRemote), nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(segmentation_internals.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
segmentation_internals.mojom.PageHandlerFactoryPtr = segmentation_internals.mojom.PageHandlerFactoryRemote;
segmentation_internals.mojom.PageHandlerFactoryRequest = segmentation_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
segmentation_internals.mojom.PageHandler = {};

segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler_GetServiceStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler_ExecuteModel_Params',
      packedSize: 16,
      fields: [
        { name: 'segment_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler_OverwriteResult_Params',
      packedSize: 16,
      fields: [
        { name: 'segment_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler_SetSelected_Params',
      packedSize: 24,
      fields: [
        { name: 'segmentation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'optimization_target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      []);
  }

  executeModel(segment_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec,
      null,
      [segment_id]);
  }

  overwriteResult(segment_id, result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec,
      null,
      [segment_id, result]);
  }

  setSelected(segmentation_key, optimization_target) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec,
      null,
      [segmentation_key, optimization_target]);
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

// ParamsSpec for GetServiceStatus
segmentation_internals.mojom.PageHandler_GetServiceStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler.GetServiceStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ExecuteModel
segmentation_internals.mojom.PageHandler_ExecuteModel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler.ExecuteModel_Params',
      packedSize: 16,
      fields: [
        { name: 'segment_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverwriteResult
segmentation_internals.mojom.PageHandler_OverwriteResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler.OverwriteResult_Params',
      packedSize: 16,
      fields: [
        { name: 'segment_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSelected
segmentation_internals.mojom.PageHandler_SetSelected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.PageHandler.SetSelected_Params',
      packedSize: 24,
      fields: [
        { name: 'segmentation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'optimization_target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
segmentation_internals.mojom.PageHandlerPtr = segmentation_internals.mojom.PageHandlerRemote;
segmentation_internals.mojom.PageHandlerRequest = segmentation_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
segmentation_internals.mojom.Page = {};

segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.Page_OnServiceStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_initialized', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'status_flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.Page_OnClientInfoAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'client_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(segmentation_internals.mojom.ClientInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [is_initialized, status_flag]);
  }

  onClientInfoAvailable(client_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec,
      null,
      [client_info]);
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

// ParamsSpec for OnServiceStatusChanged
segmentation_internals.mojom.Page_OnServiceStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.Page.OnServiceStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_initialized', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'status_flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnClientInfoAvailable
segmentation_internals.mojom.Page_OnClientInfoAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'segmentation_internals.mojom.Page.OnClientInfoAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'client_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(segmentation_internals.mojom.ClientInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
segmentation_internals.mojom.PagePtr = segmentation_internals.mojom.PageRemote;
segmentation_internals.mojom.PageRequest = segmentation_internals.mojom.PagePendingReceiver;

