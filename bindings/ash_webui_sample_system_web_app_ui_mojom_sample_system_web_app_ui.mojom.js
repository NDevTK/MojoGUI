// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};

ash.mojom.sample_swa.PreferencesSpec = { $: {} };
ash.mojom.sample_swa.PageHandlerFactory = {};
ash.mojom.sample_swa.PageHandlerFactory.$interfaceName = 'ash.mojom.sample_swa.PageHandlerFactory';
ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler = {};
ash.mojom.sample_swa.PageHandler.$interfaceName = 'ash.mojom.sample_swa.PageHandler';
ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_Send_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page = {};
ash.mojom.sample_swa.Page.$interfaceName = 'ash.mojom.sample_swa.Page';
ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec = { $: {} };

// Struct: Preferences
mojo.internal.Struct(
    ash.mojom.sample_swa.PreferencesSpec, 'ash.mojom.sample_swa.Preferences', [
      mojo.internal.StructField('background', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('foreground', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.PageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.PageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, page],
      false);
  }

};

ash.mojom.sample_swa.PageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageHandlerFactoryReceiver = ash.mojom.sample_swa.PageHandlerFactoryReceiver;

ash.mojom.sample_swa.PageHandlerFactoryPtr = ash.mojom.sample_swa.PageHandlerFactoryRemote;
ash.mojom.sample_swa.PageHandlerFactoryRequest = ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParams', [
      mojo.internal.StructField('preferences', 0, 0, ash.mojom.sample_swa.PreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_Send_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_Send_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_DoSomething_Params', [
    ],
    [[0, 8]]);

ash.mojom.sample_swa.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPreferences() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec,
      ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec,
      [],
      false);
  }

  send(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.PageHandler_Send_ParamsSpec,
      null,
      [message],
      false);
  }

  doSomething() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.mojom.sample_swa.PageHandler.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandler',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: GetPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPreferences (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Send
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_Send_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoSomething
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoSomething (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPreferences');
          const result = this.impl.getPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_Send_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doSomething');
          const result = this.impl.doSomething();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageHandlerReceiver = ash.mojom.sample_swa.PageHandlerReceiver;

ash.mojom.sample_swa.PageHandlerPtr = ash.mojom.sample_swa.PageHandlerRemote;
ash.mojom.sample_swa.PageHandlerRequest = ash.mojom.sample_swa.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec, 'ash.mojom.sample_swa.Page_OnEventOccurred_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec, 'ash.mojom.sample_swa.Page_CreateParentPage_Params', [
      mojo.internal.StructField('child_untrusted_page', 0, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.ChildUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('parent_trusted_page', 8, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.ParentTrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PagePendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEventOccurred(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec,
      null,
      [name],
      false);
  }

  createParentPage(child_untrusted_page, parent_trusted_page) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec,
      null,
      [child_untrusted_page, parent_trusted_page],
      false);
  }

};

ash.mojom.sample_swa.Page.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.Page',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageReceiver = class {
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
        
        // Try Method 0: OnEventOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEventOccurred (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateParentPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateParentPage (1)');
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
          const params = decoder.decodeStruct(ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEventOccurred');
          const result = this.impl.onEventOccurred(params.name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createParentPage');
          const result = this.impl.createParentPage(params.child_untrusted_page, params.parent_trusted_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageReceiver = ash.mojom.sample_swa.PageReceiver;

ash.mojom.sample_swa.PagePtr = ash.mojom.sample_swa.PageRemote;
ash.mojom.sample_swa.PageRequest = ash.mojom.sample_swa.PagePendingReceiver;

