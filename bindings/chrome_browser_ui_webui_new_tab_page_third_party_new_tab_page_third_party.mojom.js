// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/new_tab_page_third_party/new_tab_page_third_party.mojom
// Module: new_tab_page_third_party.mojom

'use strict';

// Module namespace
var new_tab_page_third_party = new_tab_page_third_party || {};
new_tab_page_third_party.mojom = new_tab_page_third_party.mojom || {};
var skia = skia || {};
var most_visited = most_visited || {};

new_tab_page_third_party.mojom.ThemeSpec = { $: {} };
new_tab_page_third_party.mojom.PageHandlerFactory = {};
new_tab_page_third_party.mojom.PageHandlerFactory.$interfaceName = 'new_tab_page_third_party.mojom.PageHandlerFactory';
new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
new_tab_page_third_party.mojom.PageHandler = {};
new_tab_page_third_party.mojom.PageHandler.$interfaceName = 'new_tab_page_third_party.mojom.PageHandler';
new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec = { $: {} };
new_tab_page_third_party.mojom.Page = {};
new_tab_page_third_party.mojom.Page.$interfaceName = 'new_tab_page_third_party.mojom.Page';
new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec = { $: {} };

// Struct: Theme
mojo.internal.Struct(
    new_tab_page_third_party.mojom.ThemeSpec, 'new_tab_page_third_party.mojom.Theme', [
      mojo.internal.StructField('text_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color_background', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('background_tiling', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('background_position', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('most_visited', 40, 0, most_visited.mojom.MostVisitedThemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_dark', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_custom_background', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(new_tab_page_third_party.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(new_tab_page_third_party.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

new_tab_page_third_party.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

new_tab_page_third_party.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(new_tab_page_third_party.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

new_tab_page_third_party.mojom.PageHandlerFactoryReceiver = new_tab_page_third_party.mojom.PageHandlerFactoryReceiver;

new_tab_page_third_party.mojom.PageHandlerFactoryPtr = new_tab_page_third_party.mojom.PageHandlerFactoryRemote;
new_tab_page_third_party.mojom.PageHandlerFactoryRequest = new_tab_page_third_party.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec, 'new_tab_page_third_party.mojom.PageHandler_UpdateTheme_Params', [
    ],
    [[0, 8]]);

new_tab_page_third_party.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTheme() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec,
      null,
      [],
      false);
  }

};

new_tab_page_third_party.mojom.PageHandler.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.PageHandler',
    'context');
  return remote.$;
};

new_tab_page_third_party.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: UpdateTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTheme (0)');
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
          const params = decoder.decodeStruct(new_tab_page_third_party.mojom.PageHandler_UpdateTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateTheme');
          const result = this.impl.updateTheme();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_page_third_party.mojom.PageHandlerReceiver = new_tab_page_third_party.mojom.PageHandlerReceiver;

new_tab_page_third_party.mojom.PageHandlerPtr = new_tab_page_third_party.mojom.PageHandlerRemote;
new_tab_page_third_party.mojom.PageHandlerRequest = new_tab_page_third_party.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec, 'new_tab_page_third_party.mojom.Page_SetTheme_Params', [
      mojo.internal.StructField('theme', 0, 0, new_tab_page_third_party.mojom.ThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

new_tab_page_third_party.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_tab_page_third_party.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'new_tab_page_third_party.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_tab_page_third_party.mojom.PagePendingReceiver,
      handle);
    this.$ = new new_tab_page_third_party.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_tab_page_third_party.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTheme(theme) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec,
      null,
      [theme],
      false);
  }

};

new_tab_page_third_party.mojom.Page.getRemote = function() {
  let remote = new new_tab_page_third_party.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_tab_page_third_party.mojom.Page',
    'context');
  return remote.$;
};

new_tab_page_third_party.mojom.PageReceiver = class {
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
        
        // Try Method 0: SetTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTheme (0)');
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
          const params = decoder.decodeStruct(new_tab_page_third_party.mojom.Page_SetTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTheme');
          const result = this.impl.setTheme(params.theme);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_tab_page_third_party.mojom.PageReceiver = new_tab_page_third_party.mojom.PageReceiver;

new_tab_page_third_party.mojom.PagePtr = new_tab_page_third_party.mojom.PageRemote;
new_tab_page_third_party.mojom.PageRequest = new_tab_page_third_party.mojom.PagePendingReceiver;

