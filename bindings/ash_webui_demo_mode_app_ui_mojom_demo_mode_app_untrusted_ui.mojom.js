// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/demo_mode_app_ui/mojom/demo_mode_app_untrusted_ui.mojom
// Module: ash.mojom.demo_mode

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.demo_mode = ash.mojom.demo_mode || {};

ash.mojom.demo_mode.UntrustedPageHandlerFactory = {};
ash.mojom.demo_mode.UntrustedPageHandlerFactory.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler = {};
ash.mojom.demo_mode.UntrustedPageHandler.$interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandler';
ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec = { $: {} };
ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec = { $: {} };

// Interface: UntrustedPageHandlerFactory
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.demo_mode.UntrustedPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

ash.mojom.demo_mode.UntrustedPageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver = ash.mojom.demo_mode.UntrustedPageHandlerFactoryReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerFactoryPtr = ash.mojom.demo_mode.UntrustedPageHandlerFactoryRemote;
ash.mojom.demo_mode.UntrustedPageHandlerFactoryRequest = ash.mojom.demo_mode.UntrustedPageHandlerFactoryPendingReceiver;


// Interface: UntrustedPageHandler
mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec, 'ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.demo_mode.UntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  toggleFullscreen() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  launchApp(app_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec,
      null,
      [app_id],
      false);
  }

};

ash.mojom.demo_mode.UntrustedPageHandler.getRemote = function() {
  let remote = new ash.mojom.demo_mode.UntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.demo_mode.UntrustedPageHandler',
    'context');
  return remote.$;
};

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = class {
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
        
        // Try Method 0: ToggleFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleFullscreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LaunchApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchApp (1)');
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
          const params = decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandler_ToggleFullscreen_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.toggleFullscreen');
          const result = this.impl.toggleFullscreen();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.demo_mode.UntrustedPageHandler_LaunchApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchApp');
          const result = this.impl.launchApp(params.app_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.demo_mode.UntrustedPageHandlerReceiver = ash.mojom.demo_mode.UntrustedPageHandlerReceiver;

ash.mojom.demo_mode.UntrustedPageHandlerPtr = ash.mojom.demo_mode.UntrustedPageHandlerRemote;
ash.mojom.demo_mode.UntrustedPageHandlerRequest = ash.mojom.demo_mode.UntrustedPageHandlerPendingReceiver;

