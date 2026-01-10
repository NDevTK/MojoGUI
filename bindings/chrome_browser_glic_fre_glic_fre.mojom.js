// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/glic/fre/glic_fre.mojom
// Module: glic.mojom

'use strict';

// Module namespace
var glic = glic || {};
glic.mojom = glic.mojom || {};
var url = url || {};

glic.mojom.FreWebUiStateSpec = { $: mojo.internal.Enum() };
glic.mojom.FrePageHandlerFactory = {};
glic.mojom.FrePageHandlerFactory.$interfaceName = 'glic.mojom.FrePageHandlerFactory';
glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler = {};
glic.mojom.FrePageHandler.$interfaceName = 'glic.mojom.FrePageHandler';
glic.mojom.FrePageHandler_AcceptFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_RejectFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_DismissFre_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_FreReloaded_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec = { $: {} };
glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec = { $: {} };

// Enum: FreWebUiState
glic.mojom.FreWebUiState = {
  kUninitialized: 0,
  kBeginLoading: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kReady: 7,
  kDisabledByAdmin: 8,
};

// Interface: FrePageHandlerFactory
mojo.internal.Struct(
    glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.FrePageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(glic.mojom.FrePageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

glic.mojom.FrePageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.FrePageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

glic.mojom.FrePageHandlerFactory.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandlerFactory',
    'context');
  return remote.$;
};

glic.mojom.FrePageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(glic.mojom.FrePageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.FrePageHandlerFactoryReceiver = glic.mojom.FrePageHandlerFactoryReceiver;

glic.mojom.FrePageHandlerFactoryPtr = glic.mojom.FrePageHandlerFactoryRemote;
glic.mojom.FrePageHandlerFactoryRequest = glic.mojom.FrePageHandlerFactoryPendingReceiver;


// Interface: FrePageHandler
mojo.internal.Struct(
    glic.mojom.FrePageHandler_AcceptFre_ParamsSpec, 'glic.mojom.FrePageHandler_AcceptFre_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_RejectFre_ParamsSpec, 'glic.mojom.FrePageHandler_RejectFre_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_DismissFre_ParamsSpec, 'glic.mojom.FrePageHandler_DismissFre_Params', [
      mojo.internal.StructField('panel', 0, 0, glic.mojom.FreWebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_FreReloaded_ParamsSpec, 'glic.mojom.FrePageHandler_FreReloaded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.FrePageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec, 'glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.FrePageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('new_state', 0, 0, glic.mojom.FreWebUiStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec, 'glic.mojom.FrePageHandler_ExceededTimeoutError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec, 'glic.mojom.FrePageHandler_LogWebUiLoadComplete_Params', [
    ],
    [[0, 8]]);

glic.mojom.FrePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

glic.mojom.FrePageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.FrePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      glic.mojom.FrePageHandlerPendingReceiver,
      handle);
    this.$ = new glic.mojom.FrePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

glic.mojom.FrePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  acceptFre() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      glic.mojom.FrePageHandler_AcceptFre_ParamsSpec,
      null,
      [],
      false);
  }

  rejectFre() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      glic.mojom.FrePageHandler_RejectFre_ParamsSpec,
      null,
      [],
      false);
  }

  dismissFre(panel) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      glic.mojom.FrePageHandler_DismissFre_ParamsSpec,
      null,
      [panel],
      false);
  }

  freReloaded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      glic.mojom.FrePageHandler_FreReloaded_ParamsSpec,
      null,
      [],
      false);
  }

  prepareForClient() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec,
      glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

  validateAndOpenLinkInNewTab(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec,
      null,
      [url],
      false);
  }

  webUiStateChanged(new_state) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [new_state],
      false);
  }

  exceededTimeoutError() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec,
      null,
      [],
      false);
  }

  logWebUiLoadComplete() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

glic.mojom.FrePageHandler.getRemote = function() {
  let remote = new glic.mojom.FrePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.FrePageHandler',
    'context');
  return remote.$;
};

glic.mojom.FrePageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        
        // Try Method 0: AcceptFre
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_AcceptFre_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptFre (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RejectFre
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_RejectFre_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RejectFre (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DismissFre
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_DismissFre_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissFre (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FreReloaded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_FreReloaded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FreReloaded (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: PrepareForClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrepareForClient (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ValidateAndOpenLinkInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidateAndOpenLinkInNewTab (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: WebUiStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WebUiStateChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExceededTimeoutError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExceededTimeoutError (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: LogWebUiLoadComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogWebUiLoadComplete (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_AcceptFre_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acceptFre');
          const result = this.impl.acceptFre();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_RejectFre_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.rejectFre');
          const result = this.impl.rejectFre();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_DismissFre_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dismissFre');
          const result = this.impl.dismissFre(params.panel);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_FreReloaded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.freReloaded');
          const result = this.impl.freReloaded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_PrepareForClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
          const result = this.impl.prepareForClient();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, glic.mojom.FrePageHandler_PrepareForClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_ValidateAndOpenLinkInNewTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.validateAndOpenLinkInNewTab');
          const result = this.impl.validateAndOpenLinkInNewTab(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_WebUiStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.webUiStateChanged');
          const result = this.impl.webUiStateChanged(params.new_state);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_ExceededTimeoutError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exceededTimeoutError');
          const result = this.impl.exceededTimeoutError();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(glic.mojom.FrePageHandler_LogWebUiLoadComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logWebUiLoadComplete');
          const result = this.impl.logWebUiLoadComplete();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

glic.mojom.FrePageHandlerReceiver = glic.mojom.FrePageHandlerReceiver;

glic.mojom.FrePageHandlerPtr = glic.mojom.FrePageHandlerRemote;
glic.mojom.FrePageHandlerRequest = glic.mojom.FrePageHandlerPendingReceiver;

