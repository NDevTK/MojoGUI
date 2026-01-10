// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/search/mojom/magic_boost_handler.mojom
// Module: ash.settings.magic_boost_handler.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.magic_boost_handler = ash.settings.magic_boost_handler || {};
ash.settings.magic_boost_handler.mojom = ash.settings.magic_boost_handler.mojom || {};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory = {};
ash.settings.magic_boost_handler.mojom.PageHandlerFactory.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.settings.magic_boost_handler.mojom.PageHandler = {};
ash.settings.magic_boost_handler.mojom.PageHandler.$interfaceName = 'ash.settings.magic_boost_handler.mojom.PageHandler';
ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec = { $: {} };

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.settings.magic_boost_handler.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(ash.settings.magic_boost_handler.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryReceiver;

ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPtr = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerFactoryRequest = ash.settings.magic_boost_handler.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec, 'ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_Params', [
    ],
    [[0, 8]]);

ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.magic_boost_handler.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showNotice() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.magic_boost_handler.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.magic_boost_handler.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.magic_boost_handler.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.settings.magic_boost_handler.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: ShowNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowNotice (0)');
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
          const params = decoder.decodeStruct(ash.settings.magic_boost_handler.mojom.PageHandler_ShowNotice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showNotice');
          const result = this.impl.showNotice();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.settings.magic_boost_handler.mojom.PageHandlerReceiver = ash.settings.magic_boost_handler.mojom.PageHandlerReceiver;

ash.settings.magic_boost_handler.mojom.PageHandlerPtr = ash.settings.magic_boost_handler.mojom.PageHandlerRemote;
ash.settings.magic_boost_handler.mojom.PageHandlerRequest = ash.settings.magic_boost_handler.mojom.PageHandlerPendingReceiver;

