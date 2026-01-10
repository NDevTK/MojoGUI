// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/omnibox/aim_eligibility/aim_eligibility.mojom
// Module: aim_eligibility.mojom

'use strict';

// Module namespace
var aim_eligibility = aim_eligibility || {};
aim_eligibility.mojom = aim_eligibility.mojom || {};
var mojo_base = mojo_base || {};

aim_eligibility.mojom.EligibilityStateSpec = { $: {} };
aim_eligibility.mojom.Page = {};
aim_eligibility.mojom.Page.$interfaceName = 'aim_eligibility.mojom.Page';
aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler = {};
aim_eligibility.mojom.PageHandler.$interfaceName = 'aim_eligibility.mojom.PageHandler';
aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec = { $: {} };
aim_eligibility.mojom.PageHandlerFactory = {};
aim_eligibility.mojom.PageHandlerFactory.$interfaceName = 'aim_eligibility.mojom.PageHandlerFactory';
aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: EligibilityState
mojo.internal.Struct(
    aim_eligibility.mojom.EligibilityStateSpec, 'aim_eligibility.mojom.EligibilityState', [
      mojo.internal.StructField('server_response_base64_encoded', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_response_base64_url_encoded', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('server_response_source', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_updated', 24, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_eligible', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_policy', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_dse', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_eligible_by_server', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_server_eligibility_enabled', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: Page
mojo.internal.Struct(
    aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec, 'aim_eligibility.mojom.Page_OnEligibilityStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, aim_eligibility.mojom.EligibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

aim_eligibility.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PagePendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEligibilityStateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

};

aim_eligibility.mojom.Page.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.Page',
    'context');
  return remote.$;
};

aim_eligibility.mojom.PageReceiver = class {
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
        
        // Try Method 0: OnEligibilityStateChanged
        try {
             decoder.decodeStruct(aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEligibilityStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(aim_eligibility.mojom.Page_OnEligibilityStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEligibilityStateChanged');
          const result = this.impl.onEligibilityStateChanged(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

aim_eligibility.mojom.PageReceiver = aim_eligibility.mojom.PageReceiver;

aim_eligibility.mojom.PagePtr = aim_eligibility.mojom.PageRemote;
aim_eligibility.mojom.PageRequest = aim_eligibility.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec, 'aim_eligibility.mojom.PageHandler_GetEligibilityState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec, 'aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, aim_eligibility.mojom.EligibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec, 'aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec, 'aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_Params', [
      mojo.internal.StructField('base64_encoded_response', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec, 'aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

aim_eligibility.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEligibilityState() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec,
      aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec,
      [],
      false);
  }

  requestServerEligibilityForDebugging() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec,
      null,
      [],
      false);
  }

  setEligibilityResponseForDebugging(base64_encoded_response) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec,
      aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec,
      [base64_encoded_response],
      false);
  }

};

aim_eligibility.mojom.PageHandler.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.PageHandler',
    'context');
  return remote.$;
};

aim_eligibility.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetEligibilityState
        try {
             decoder.decodeStruct(aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEligibilityState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RequestServerEligibilityForDebugging
        try {
             decoder.decodeStruct(aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestServerEligibilityForDebugging (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SetEligibilityResponseForDebugging
        try {
             decoder.decodeStruct(aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEligibilityResponseForDebugging (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(aim_eligibility.mojom.PageHandler_GetEligibilityState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getEligibilityState');
          const result = this.impl.getEligibilityState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, aim_eligibility.mojom.PageHandler_GetEligibilityState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(aim_eligibility.mojom.PageHandler_RequestServerEligibilityForDebugging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestServerEligibilityForDebugging');
          const result = this.impl.requestServerEligibilityForDebugging();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setEligibilityResponseForDebugging');
          const result = this.impl.setEligibilityResponseForDebugging(params.base64_encoded_response);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, aim_eligibility.mojom.PageHandler_SetEligibilityResponseForDebugging_ResponseParamsSpec);
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

aim_eligibility.mojom.PageHandlerReceiver = aim_eligibility.mojom.PageHandlerReceiver;

aim_eligibility.mojom.PageHandlerPtr = aim_eligibility.mojom.PageHandlerRemote;
aim_eligibility.mojom.PageHandlerRequest = aim_eligibility.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(aim_eligibility.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(aim_eligibility.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

aim_eligibility.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

aim_eligibility.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'aim_eligibility.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      aim_eligibility.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new aim_eligibility.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

aim_eligibility.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

aim_eligibility.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new aim_eligibility.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'aim_eligibility.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

aim_eligibility.mojom.PageHandlerFactoryReceiver = class {
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
        try {
             decoder.decodeStruct(aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(aim_eligibility.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$, message.header.headerSize);
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

aim_eligibility.mojom.PageHandlerFactoryReceiver = aim_eligibility.mojom.PageHandlerFactoryReceiver;

aim_eligibility.mojom.PageHandlerFactoryPtr = aim_eligibility.mojom.PageHandlerFactoryRemote;
aim_eligibility.mojom.PageHandlerFactoryRequest = aim_eligibility.mojom.PageHandlerFactoryPendingReceiver;

