// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom
// Module: customize_color_scheme_mode.mojom

'use strict';

// Module namespace
var customize_color_scheme_mode = customize_color_scheme_mode || {};
customize_color_scheme_mode.mojom = customize_color_scheme_mode.mojom || {};

customize_color_scheme_mode.mojom.ColorSchemeModeSpec = { $: mojo.internal.Enum() };
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory = {};
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory.$interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory';
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec = { $: {} };
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler = {};
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.$interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler';
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec = { $: {} };
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec = { $: {} };
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient = {};
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient.$interfaceName = 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient';
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec = { $: {} };

// Enum: ColorSchemeMode
customize_color_scheme_mode.mojom.ColorSchemeMode = {
  kSystem: 0,
  kLight: 1,
  kDark: 2,
};

// Interface: CustomizeColorSchemeModeHandlerFactory
mojo.internal.Struct(
    customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_Params', [
      mojo.internal.StructField('pending_client', 0, 0, mojo.internal.InterfaceProxy(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('pending_handler', 8, 0, mojo.internal.InterfaceRequest(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createCustomizeColorSchemeModeHandler(pending_client, pending_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec,
      null,
      [pending_client, pending_handler],
      false);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory',
    'context');
  return remote.$;
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreateCustomizeColorSchemeModeHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCustomizeColorSchemeModeHandler (0)');
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
          const params = decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCustomizeColorSchemeModeHandler');
          const result = this.impl.createCustomizeColorSchemeModeHandler(params.pending_client, params.pending_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryReceiver = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryReceiver;

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactoryPendingReceiver;


// Interface: CustomizeColorSchemeModeHandler
mojo.internal.Struct(
    customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_Params', [
      mojo.internal.StructField('colorSchemeMode', 0, 0, customize_color_scheme_mode.mojom.ColorSchemeModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_Params', [
    ],
    [[0, 8]]);

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode],
      false);
  }

  initializeColorSchemeMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec,
      null,
      [],
      false);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler',
    'context');
  return remote.$;
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerReceiver = class {
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
        
        // Try Method 0: SetColorSchemeMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorSchemeMode (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InitializeColorSchemeMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeColorSchemeMode (1)');
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
          const params = decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setColorSchemeMode');
          const result = this.impl.setColorSchemeMode(params.colorSchemeMode);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeColorSchemeMode');
          const result = this.impl.initializeColorSchemeMode();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerReceiver = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerReceiver;

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerPendingReceiver;


// Interface: CustomizeColorSchemeModeClient
mojo.internal.Struct(
    customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_Params', [
      mojo.internal.StructField('colorSchemeMode', 0, 0, customize_color_scheme_mode.mojom.ColorSchemeModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote = class {
  static get $interfaceName() {
    return 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver,
      handle);
    this.$ = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorSchemeMode(colorSchemeMode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec,
      null,
      [colorSchemeMode],
      false);
  }

};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient.getRemote = function() {
  let remote = new customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient',
    'context');
  return remote.$;
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientReceiver = class {
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
        
        // Try Method 0: SetColorSchemeMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorSchemeMode (0)');
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
          const params = decoder.decodeStruct(customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setColorSchemeMode');
          const result = this.impl.setColorSchemeMode(params.colorSchemeMode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientReceiver = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientReceiver;

customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPtr = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRemote;
customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientRequest = customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClientPendingReceiver;

