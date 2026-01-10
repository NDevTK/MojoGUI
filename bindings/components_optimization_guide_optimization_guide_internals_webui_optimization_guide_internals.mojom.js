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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: CreatePageHandler
        try {
             decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RequestDownloadedModelsInfo
        try {
             decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDownloadedModelsInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RequestLoggedModelQualityClientIds
        try {
             decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestLoggedModelQualityClientIds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: RequestMqlsLogs
        try {
             decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMqlsLogs (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestDownloadedModelsInfo');
          const result = this.impl.requestDownloadedModelsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, optimization_guide_internals.mojom.PageHandlerFactory_RequestDownloadedModelsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestLoggedModelQualityClientIds_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestLoggedModelQualityClientIds');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(optimization_guide_internals.mojom.PageHandlerFactory_RequestMqlsLogs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestMqlsLogs');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnLogMessageAdded
        try {
             decoder.decodeStruct(optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLogMessageAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(optimization_guide_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLogMessageAdded');
          const result = this.impl.onLogMessageAdded(params.event_time, params.log_source, params.source_file, params.source_line, params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

optimization_guide_internals.mojom.PageReceiver = optimization_guide_internals.mojom.PageReceiver;

optimization_guide_internals.mojom.PagePtr = optimization_guide_internals.mojom.PageRemote;
optimization_guide_internals.mojom.PageRequest = optimization_guide_internals.mojom.PagePendingReceiver;

