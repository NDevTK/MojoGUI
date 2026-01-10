// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/extensions_zero_state_promo/zero_state_promo.mojom
// Module: zero_state_promo.mojom

'use strict';

// Module namespace
var zero_state_promo = zero_state_promo || {};
zero_state_promo.mojom = zero_state_promo.mojom || {};

zero_state_promo.mojom.WebStoreLinkClickedSpec = { $: mojo.internal.Enum() };
zero_state_promo.mojom.PageHandlerFactory = {};
zero_state_promo.mojom.PageHandlerFactory.$interfaceName = 'zero_state_promo.mojom.PageHandlerFactory';
zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
zero_state_promo.mojom.PageHandler = {};
zero_state_promo.mojom.PageHandler.$interfaceName = 'zero_state_promo.mojom.PageHandler';
zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec = { $: {} };

zero_state_promo.mojom.kDiscoverExtensionWebStoreUrl = "https:
const string kCouponWebStoreUrl = "https:
const string kWritingWebStoreUrl = "https:
const string kProductivityWebStoreUrl = "https:
const string kAiWebStoreUrl = "https:


interface PageHandlerFactory {
  
  CreatePageHandler(pending_receiver<PageHandler> handler);

// Enum: WebStoreLinkClicked
zero_state_promo.mojom.WebStoreLinkClicked = {
  kDiscoverExtension: 0,
  kCoupon: 1,
  kWriting: 2,
  kProductivity: 3,
  kAi: 4,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(zero_state_promo.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

zero_state_promo.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

zero_state_promo.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'zero_state_promo.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      zero_state_promo.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new zero_state_promo.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

zero_state_promo.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
  }

};

zero_state_promo.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new zero_state_promo.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'zero_state_promo.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

zero_state_promo.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStruct(zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(zero_state_promo.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

zero_state_promo.mojom.PageHandlerFactoryReceiver = zero_state_promo.mojom.PageHandlerFactoryReceiver;

zero_state_promo.mojom.PageHandlerFactoryPtr = zero_state_promo.mojom.PageHandlerFactoryRemote;
zero_state_promo.mojom.PageHandlerFactoryRequest = zero_state_promo.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec, 'zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_Params', [
      mojo.internal.StructField('link', 0, 0, zero_state_promo.mojom.WebStoreLinkClickedSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

zero_state_promo.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

zero_state_promo.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'zero_state_promo.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      zero_state_promo.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new zero_state_promo.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

zero_state_promo.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchWebStoreLink(link) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec,
      null,
      [link],
      false);
  }

};

zero_state_promo.mojom.PageHandler.getRemote = function() {
  let remote = new zero_state_promo.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'zero_state_promo.mojom.PageHandler',
    'context');
  return remote.$;
};

zero_state_promo.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: LaunchWebStoreLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchWebStoreLink (0)');
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
          const params = decoder.decodeStruct(zero_state_promo.mojom.PageHandler_LaunchWebStoreLink_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.launchWebStoreLink');
          const result = this.impl.launchWebStoreLink(params.link);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

zero_state_promo.mojom.PageHandlerReceiver = zero_state_promo.mojom.PageHandlerReceiver;

zero_state_promo.mojom.PageHandlerPtr = zero_state_promo.mojom.PageHandlerRemote;
zero_state_promo.mojom.PageHandlerRequest = zero_state_promo.mojom.PageHandlerPendingReceiver;

