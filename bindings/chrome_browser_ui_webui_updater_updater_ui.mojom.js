// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/updater/updater_ui.mojom
// Module: updater_ui.mojom

'use strict';

// Module namespace
var updater_ui = updater_ui || {};
updater_ui.mojom = updater_ui.mojom || {};

updater_ui.mojom.PageHandlerFactory = {};
updater_ui.mojom.PageHandlerFactory.$interfaceName = 'updater_ui.mojom.PageHandlerFactory';
updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
updater_ui.mojom.PageHandler = {};
updater_ui.mojom.PageHandler.$interfaceName = 'updater_ui.mojom.PageHandler';
updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec = { $: {} };
updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec = { $: {} };
updater_ui.mojom.Page = {};
updater_ui.mojom.Page.$interfaceName = 'updater_ui.mojom.Page';

// Interface: PageHandlerFactory
mojo.internal.Struct(
    updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'updater_ui.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(updater_ui.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(updater_ui.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

updater_ui.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

updater_ui.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

updater_ui.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(updater_ui.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

updater_ui.mojom.PageHandlerFactoryReceiver = updater_ui.mojom.PageHandlerFactoryReceiver;

updater_ui.mojom.PageHandlerFactoryPtr = updater_ui.mojom.PageHandlerFactoryRemote;
updater_ui.mojom.PageHandlerFactoryRequest = updater_ui.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec, 'updater_ui.mojom.PageHandler_GetAllUpdaterEvents_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec, 'updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParams', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

updater_ui.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAllUpdaterEvents() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec,
      updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec,
      [],
      false);
  }

};

updater_ui.mojom.PageHandler.getRemote = function() {
  let remote = new updater_ui.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.PageHandler',
    'context');
  return remote.$;
};

updater_ui.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetAllUpdaterEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllUpdaterEvents (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAllUpdaterEvents');
          const result = this.impl.getAllUpdaterEvents();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater_ui.mojom.PageHandler_GetAllUpdaterEvents_ResponseParamsSpec);
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

updater_ui.mojom.PageHandlerReceiver = updater_ui.mojom.PageHandlerReceiver;

updater_ui.mojom.PageHandlerPtr = updater_ui.mojom.PageHandlerRemote;
updater_ui.mojom.PageHandlerRequest = updater_ui.mojom.PageHandlerPendingReceiver;


// Interface: Page
updater_ui.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater_ui.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'updater_ui.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater_ui.mojom.PagePendingReceiver,
      handle);
    this.$ = new updater_ui.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater_ui.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

updater_ui.mojom.Page.getRemote = function() {
  let remote = new updater_ui.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater_ui.mojom.Page',
    'context');
  return remote.$;
};

updater_ui.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

updater_ui.mojom.PageReceiver = updater_ui.mojom.PageReceiver;

updater_ui.mojom.PagePtr = updater_ui.mojom.PageRemote;
updater_ui.mojom.PageRequest = updater_ui.mojom.PagePendingReceiver;

