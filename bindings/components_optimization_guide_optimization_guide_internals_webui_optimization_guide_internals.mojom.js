// Auto-generated MojoJS binding
// Source: chromium_src/components/optimization_guide/optimization_guide_internals/webui/optimization_guide_internals.mojom
// Module: optimization_guide_internals.mojom

'use strict';

// Module namespace
var optimization_guide_internals = optimization_guide_internals || {};
optimization_guide_internals.mojom = optimization_guide_internals.mojom || {};
var optimization_guide_common = optimization_guide_common || {};
var mojo_base = mojo_base || {};

optimization_guide_internals.mojom.DownloadedModelInfoSpec = { $: {} };
optimization_guide_internals.mojom.LoggedClientIdsSpec = { $: {} };
optimization_guide_internals.mojom.MqlsLogSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory = {};
optimization_guide_internals.mojom.PageHandlerFactory.$interfaceName = 'optimization_guide_internals.mojom.PageHandlerFactory';
optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec = { $: {} };
optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec = { $: {} };
optimization_guide_internals.mojom.Page = {};
optimization_guide_internals.mojom.Page.$interfaceName = 'optimization_guide_internals.mojom.Page';
optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = { $: {} };

// Struct: DownloadedModelInfo
mojo.internal.Struct(
    optimization_guide_internals.mojom.DownloadedModelInfoSpec, 'optimization_guide_internals.mojom.DownloadedModelInfo', [
      mojo.internal.StructField('optimization_target', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LoggedClientIds
mojo.internal.Struct(
    optimization_guide_internals.mojom.LoggedClientIdsSpec, 'optimization_guide_internals.mojom.LoggedClientIds', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MqlsLog
mojo.internal.Struct(
    optimization_guide_internals.mojom.MqlsLogSpec, 'optimization_guide_internals.mojom.MqlsLog', [
      mojo.internal.StructField('feature', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('proto', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(optimization_guide_internals.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParams', [
      mojo.internal.StructField('downloaded_models_info', 0, 0, mojo.internal.Array(optimization_guide_internals.mojom.DownloadedModelInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParams', [
      mojo.internal.StructField('logged_client_ids', 0, 0, mojo.internal.Array(optimization_guide_internals.mojom.LoggedClientIdsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec, 'optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParams', [
      mojo.internal.StructField('mqls_logs', 0, 0, mojo.internal.Array(optimization_guide_internals.mojom.MqlsLogSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'optimization_guide_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new optimization_guide_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page],
      false);
  }

  requestDownloadedModelsInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestLoggedModelQualityClientIds() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec,
      [],
      false);
  }

  requestMqlsLogs() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec,
      optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec,
      [],
      false);
  }

};

optimization_guide_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new optimization_guide_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

optimization_guide_internals.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageHandler(params.page);
          break;
        }
        case 1: {
          const params = optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestDownloadedModelsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestLoggedModelQualityClientIds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestMqlsLogs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

optimization_guide_internals.mojom.PageHandlerFactoryReceiver = optimization_guide_internals.mojom.PageHandlerFactoryReceiver;

optimization_guide_internals.mojom.PageHandlerFactoryPtr = optimization_guide_internals.mojom.PageHandlerFactoryRemote;
optimization_guide_internals.mojom.PageHandlerFactoryRequest = optimization_guide_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec, 'optimization_guide_internals.mojom.Page_OnLogMessageAdded_Params', [
      mojo.internal.StructField('event_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_source', 8, 0, optimization_guide_common.mojom.LogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_line', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('message', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

optimization_guide_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

optimization_guide_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'optimization_guide_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      optimization_guide_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new optimization_guide_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

optimization_guide_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, log_source, source_file, source_line, message],
      false);
  }

};

optimization_guide_internals.mojom.Page.getRemote = function() {
  let remote = new optimization_guide_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'optimization_guide_internals.mojom.Page',
    'context');
  return remote.$;
};

optimization_guide_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLogMessageAdded(params.event_time, params.log_source, params.source_file, params.source_line, params.message);
          break;
        }
      }
    });
  }
};

optimization_guide_internals.mojom.PageReceiver = optimization_guide_internals.mojom.PageReceiver;

optimization_guide_internals.mojom.PagePtr = optimization_guide_internals.mojom.PageRemote;
optimization_guide_internals.mojom.PageRequest = optimization_guide_internals.mojom.PagePendingReceiver;

