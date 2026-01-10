// Auto-generated MojoJS binding
// Source: chromium_src/components/data_sharing/data_sharing_internals/webui/data_sharing_internals.mojom
// Module: data_sharing_internals.mojom

'use strict';

// Module namespace
var data_sharing_internals = data_sharing_internals || {};
data_sharing_internals.mojom = data_sharing_internals.mojom || {};
var data_sharing = data_sharing || {};
var logger_common = logger_common || {};
var mojo_base = mojo_base || {};

data_sharing_internals.mojom.PageHandlerFactory = {};
data_sharing_internals.mojom.PageHandlerFactory.$interfaceName = 'data_sharing_internals.mojom.PageHandlerFactory';
data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler = {};
data_sharing_internals.mojom.PageHandler.$interfaceName = 'data_sharing_internals.mojom.PageHandler';
data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec = { $: {} };
data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec = { $: {} };
data_sharing_internals.mojom.Page = {};
data_sharing_internals.mojom.Page.$interfaceName = 'data_sharing_internals.mojom.Page';
data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(data_sharing_internals.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(data_sharing_internals.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

data_sharing_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

data_sharing_internals.mojom.PageHandlerFactoryReceiver = data_sharing_internals.mojom.PageHandlerFactoryReceiver;

data_sharing_internals.mojom.PageHandlerFactoryPtr = data_sharing_internals.mojom.PageHandlerFactoryRemote;
data_sharing_internals.mojom.PageHandlerFactoryRequest = data_sharing_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec, 'data_sharing_internals.mojom.PageHandler_IsEmptyService_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec, 'data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParams', [
      mojo.internal.StructField('is_empty', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec, 'data_sharing_internals.mojom.PageHandler_GetAllGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec, 'data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(data_sharing.mojom.GroupDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

data_sharing_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isEmptyService() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec,
      data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec,
      [],
      false);
  }

  getAllGroups() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec,
      data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec,
      [],
      false);
  }

};

data_sharing_internals.mojom.PageHandler.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: IsEmptyService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsEmptyService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAllGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllGroups (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing_internals.mojom.PageHandler_IsEmptyService_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isEmptyService');
          const result = this.impl.isEmptyService();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing_internals.mojom.PageHandler_IsEmptyService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing_internals.mojom.PageHandler_GetAllGroups_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllGroups');
          const result = this.impl.getAllGroups();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_sharing_internals.mojom.PageHandler_GetAllGroups_ResponseParamsSpec);
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

data_sharing_internals.mojom.PageHandlerReceiver = data_sharing_internals.mojom.PageHandlerReceiver;

data_sharing_internals.mojom.PageHandlerPtr = data_sharing_internals.mojom.PageHandlerRemote;
data_sharing_internals.mojom.PageHandlerRequest = data_sharing_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec, 'data_sharing_internals.mojom.Page_OnLogMessageAdded_Params', [
      mojo.internal.StructField('event_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('log_source', 8, 0, logger_common.mojom.LogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_file', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_line', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

data_sharing_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_sharing_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'data_sharing_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_sharing_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new data_sharing_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_sharing_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLogMessageAdded(event_time, log_source, source_file, source_line, message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec,
      null,
      [event_time, log_source, source_file, source_line, message],
      false);
  }

};

data_sharing_internals.mojom.Page.getRemote = function() {
  let remote = new data_sharing_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_sharing_internals.mojom.Page',
    'context');
  return remote.$;
};

data_sharing_internals.mojom.PageReceiver = class {
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLogMessageAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_sharing_internals.mojom.Page_OnLogMessageAdded_ParamsSpec.$, message.header.headerSize);
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

data_sharing_internals.mojom.PageReceiver = data_sharing_internals.mojom.PageReceiver;

data_sharing_internals.mojom.PagePtr = data_sharing_internals.mojom.PageRemote;
data_sharing_internals.mojom.PageRequest = data_sharing_internals.mojom.PagePendingReceiver;

