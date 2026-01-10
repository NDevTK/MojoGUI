// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/enterprise_reporting/enterprise_reporting.mojom
// Module: enterprise_reporting.mojom

'use strict';

// Module namespace
var enterprise_reporting = enterprise_reporting || {};
enterprise_reporting.mojom = enterprise_reporting.mojom || {};

enterprise_reporting.mojom.ErpHistoryDataSpec = { $: {} };
enterprise_reporting.mojom.ErpHistoryEventSpec = { $: {} };
enterprise_reporting.mojom.ErpHistoryEventParameterSpec = { $: {} };
enterprise_reporting.mojom.PageHandlerFactory = {};
enterprise_reporting.mojom.PageHandlerFactory.$interfaceName = 'enterprise_reporting.mojom.PageHandlerFactory';
enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
enterprise_reporting.mojom.PageHandler = {};
enterprise_reporting.mojom.PageHandler.$interfaceName = 'enterprise_reporting.mojom.PageHandler';
enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec = { $: {} };
enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec = { $: {} };
enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec = { $: {} };
enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec = { $: {} };
enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec = { $: {} };
enterprise_reporting.mojom.Page = {};
enterprise_reporting.mojom.Page.$interfaceName = 'enterprise_reporting.mojom.Page';
enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec = { $: {} };

// Struct: ErpHistoryData
mojo.internal.Struct(
    enterprise_reporting.mojom.ErpHistoryDataSpec, 'enterprise_reporting.mojom.ErpHistoryData', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(enterprise_reporting.mojom.ErpHistoryEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ErpHistoryEvent
mojo.internal.Struct(
    enterprise_reporting.mojom.ErpHistoryEventSpec, 'enterprise_reporting.mojom.ErpHistoryEvent', [
      mojo.internal.StructField('call', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parameters', 8, 0, mojo.internal.Array(enterprise_reporting.mojom.ErpHistoryEventParameterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ErpHistoryEventParameter
mojo.internal.Struct(
    enterprise_reporting.mojom.ErpHistoryEventParameterSpec, 'enterprise_reporting.mojom.ErpHistoryEventParameter', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(enterprise_reporting.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(enterprise_reporting.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
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

enterprise_reporting.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = enterprise_reporting.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
    }});
  }
};

enterprise_reporting.mojom.PageHandlerFactoryReceiver = enterprise_reporting.mojom.PageHandlerFactoryReceiver;

enterprise_reporting.mojom.PageHandlerFactoryPtr = enterprise_reporting.mojom.PageHandlerFactoryRemote;
enterprise_reporting.mojom.PageHandlerFactoryRequest = enterprise_reporting.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec, 'enterprise_reporting.mojom.PageHandler_RecordDebugState_Params', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec, 'enterprise_reporting.mojom.PageHandler_GetDebugState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec, 'enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec, 'enterprise_reporting.mojom.PageHandler_GetErpHistoryData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec, 'enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParams', [
      mojo.internal.StructField('history_data', 0, 0, enterprise_reporting.mojom.ErpHistoryDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec,
      null,
      [state],
      false);
  }

  getDebugState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec,
      enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec,
      [],
      false);
  }

  getErpHistoryData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec,
      enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec,
      [],
      false);
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

enterprise_reporting.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = enterprise_reporting.mojom.PageHandler_RecordDebugState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordDebugState(params.state);
          break;
        }
        case 1: {
          const params = enterprise_reporting.mojom.PageHandler_GetDebugState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDebugState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, enterprise_reporting.mojom.PageHandler_GetDebugState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getErpHistoryData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, enterprise_reporting.mojom.PageHandler_GetErpHistoryData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

enterprise_reporting.mojom.PageHandlerReceiver = enterprise_reporting.mojom.PageHandlerReceiver;

enterprise_reporting.mojom.PageHandlerPtr = enterprise_reporting.mojom.PageHandlerRemote;
enterprise_reporting.mojom.PageHandlerRequest = enterprise_reporting.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec, 'enterprise_reporting.mojom.Page_SetErpHistoryData_Params', [
      mojo.internal.StructField('history_data', 0, 0, enterprise_reporting.mojom.ErpHistoryDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec,
      null,
      [history_data],
      false);
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

enterprise_reporting.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = enterprise_reporting.mojom.Page_SetErpHistoryData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setErpHistoryData(params.history_data);
          break;
        }
      }
    }});
  }
};

enterprise_reporting.mojom.PageReceiver = enterprise_reporting.mojom.PageReceiver;

enterprise_reporting.mojom.PagePtr = enterprise_reporting.mojom.PageRemote;
enterprise_reporting.mojom.PageRequest = enterprise_reporting.mojom.PagePendingReceiver;

