// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/actor_internals/actor_internals.mojom
// Module: actor_internals.mojom

'use strict';

// Module namespace
var actor_internals = actor_internals || {};
actor_internals.mojom = actor_internals.mojom || {};
var mojo_base = mojo_base || {};

actor_internals.mojom.JournalEntrySpec = { $: {} };
actor_internals.mojom.Page = {};
actor_internals.mojom.Page.$interfaceName = 'actor_internals.mojom.Page';
actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandler = {};
actor_internals.mojom.PageHandler.$interfaceName = 'actor_internals.mojom.PageHandler';
actor_internals.mojom.PageHandler_StartLogging_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandler_StopLogging_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandlerFactory = {};
actor_internals.mojom.PageHandlerFactory.$interfaceName = 'actor_internals.mojom.PageHandlerFactory';
actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: JournalEntry
mojo.internal.Struct(
    actor_internals.mojom.JournalEntrySpec, 'actor_internals.mojom.JournalEntry', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 32, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('screenshot', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('task_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: Page
mojo.internal.Struct(
    actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec, 'actor_internals.mojom.Page_JournalEntryAdded_Params', [
      mojo.internal.StructField('entry', 0, 0, actor_internals.mojom.JournalEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

actor_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  journalEntryAdded(entry) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec,
      null,
      [entry],
      false);
  }

};

actor_internals.mojom.Page.getRemote = function() {
  let remote = new actor_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.Page',
    'context');
  return remote.$;
};

actor_internals.mojom.PageReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: JournalEntryAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JournalEntryAdded (0)');
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
          const params = decoder.decodeStruct(actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.journalEntryAdded');
          const result = this.impl.journalEntryAdded(params.entry);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

actor_internals.mojom.PageReceiver = actor_internals.mojom.PageReceiver;

actor_internals.mojom.PagePtr = actor_internals.mojom.PageRemote;
actor_internals.mojom.PageRequest = actor_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    actor_internals.mojom.PageHandler_StartLogging_ParamsSpec, 'actor_internals.mojom.PageHandler_StartLogging_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    actor_internals.mojom.PageHandler_StopLogging_ParamsSpec, 'actor_internals.mojom.PageHandler_StopLogging_Params', [
    ],
    [[0, 8]]);

actor_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startLogging() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.PageHandler_StartLogging_ParamsSpec,
      null,
      [],
      false);
  }

  stopLogging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      actor_internals.mojom.PageHandler_StopLogging_ParamsSpec,
      null,
      [],
      false);
  }

};

actor_internals.mojom.PageHandler.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

actor_internals.mojom.PageHandlerReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
        
        // Try Method 0: StartLogging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(actor_internals.mojom.PageHandler_StartLogging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartLogging (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopLogging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(actor_internals.mojom.PageHandler_StopLogging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLogging (1)');
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
          const params = decoder.decodeStruct(actor_internals.mojom.PageHandler_StartLogging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startLogging');
          const result = this.impl.startLogging();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(actor_internals.mojom.PageHandler_StopLogging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopLogging');
          const result = this.impl.stopLogging();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

actor_internals.mojom.PageHandlerReceiver = actor_internals.mojom.PageHandlerReceiver;

actor_internals.mojom.PageHandlerPtr = actor_internals.mojom.PageHandlerRemote;
actor_internals.mojom.PageHandlerRequest = actor_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'actor_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(actor_internals.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(actor_internals.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

actor_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

actor_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

actor_internals.mojom.PageHandlerFactoryReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
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
             decoder.decodeStruct(actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

actor_internals.mojom.PageHandlerFactoryReceiver = actor_internals.mojom.PageHandlerFactoryReceiver;

actor_internals.mojom.PageHandlerFactoryPtr = actor_internals.mojom.PageHandlerFactoryRemote;
actor_internals.mojom.PageHandlerFactoryRequest = actor_internals.mojom.PageHandlerFactoryPendingReceiver;

