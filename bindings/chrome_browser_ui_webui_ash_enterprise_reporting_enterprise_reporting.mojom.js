// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/enterprise_reporting/enterprise_reporting.mojom
// Module: enterprise_reporting.mojom

'use strict';

// Module namespace
var enterprise_reporting = enterprise_reporting || {};
enterprise_reporting.mojom = enterprise_reporting.mojom || {};


// Interface: PageHandlerFactory
enterprise_reporting.mojom.PageHandlerFactory = {};

enterprise_reporting.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_reporting.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'enterprise_reporting.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_reporting.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new enterprise_reporting.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

enterprise_reporting.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

enterprise_reporting.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new enterprise_reporting.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_reporting.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
enterprise_reporting.mojom.PageHandlerFactoryPtr = enterprise_reporting.mojom.PageHandlerFactoryRemote;
enterprise_reporting.mojom.PageHandlerFactoryRequest = enterprise_reporting.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
enterprise_reporting.mojom.PageHandler = {};

enterprise_reporting.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_reporting.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'enterprise_reporting.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_reporting.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new enterprise_reporting.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

enterprise_reporting.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordDebugState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec.$,
      null,
      [state]);
  }

  getDebugState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec.$,
      enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec.$,
      []);
  }

  getErpHistoryData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec.$,
      enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec.$,
      []);
  }

};

enterprise_reporting.mojom.PageHandler.getRemote = function() {
  let remote = new enterprise_reporting.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_reporting.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RecordDebugState
enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandler.RecordDebugState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDebugState
enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandler.GetDebugState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandler.GetDebugState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetErpHistoryData
enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandler.GetErpHistoryData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.PageHandler.GetErpHistoryData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'history_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
enterprise_reporting.mojom.PageHandlerPtr = enterprise_reporting.mojom.PageHandlerRemote;
enterprise_reporting.mojom.PageHandlerRequest = enterprise_reporting.mojom.PageHandlerPendingReceiver;


// Interface: Page
enterprise_reporting.mojom.Page = {};

enterprise_reporting.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_reporting.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'enterprise_reporting.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_reporting.mojom.PagePendingReceiver,
      handle);
    this.$ = new enterprise_reporting.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

enterprise_reporting.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setErpHistoryData(history_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec.$,
      null,
      [history_data]);
  }

};

enterprise_reporting.mojom.Page.getRemote = function() {
  let remote = new enterprise_reporting.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_reporting.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SetErpHistoryData
enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_reporting.mojom.Page.SetErpHistoryData_Params',
      packedSize: 16,
      fields: [
        { name: 'history_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
enterprise_reporting.mojom.PagePtr = enterprise_reporting.mojom.PageRemote;
enterprise_reporting.mojom.PageRequest = enterprise_reporting.mojom.PagePendingReceiver;

