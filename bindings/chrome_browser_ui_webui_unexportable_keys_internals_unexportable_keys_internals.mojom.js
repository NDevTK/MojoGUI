// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/unexportable_keys_internals/unexportable_keys_internals.mojom
// Module: unexportable_keys_internals.mojom

'use strict';

// Module namespace
var unexportable_keys_internals = unexportable_keys_internals || {};
unexportable_keys_internals.mojom = unexportable_keys_internals.mojom || {};
var mojo_base = mojo_base || {};

unexportable_keys_internals.mojom.UnexportableKeyIdSpec = { $: {} };
unexportable_keys_internals.mojom.UnexportableKeyInfoSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandlerFactory = {};
unexportable_keys_internals.mojom.PageHandlerFactory.$interfaceName = 'unexportable_keys_internals.mojom.PageHandlerFactory';
unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler = {};
unexportable_keys_internals.mojom.PageHandler.$interfaceName = 'unexportable_keys_internals.mojom.PageHandler';
unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec = { $: {} };
unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec = { $: {} };
unexportable_keys_internals.mojom.Page = {};
unexportable_keys_internals.mojom.Page.$interfaceName = 'unexportable_keys_internals.mojom.Page';

// Struct: UnexportableKeyId
mojo.internal.Struct(
    unexportable_keys_internals.mojom.UnexportableKeyIdSpec, 'unexportable_keys_internals.mojom.UnexportableKeyId', [
      mojo.internal.StructField('key_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnexportableKeyInfo
mojo.internal.Struct(
    unexportable_keys_internals.mojom.UnexportableKeyInfoSpec, 'unexportable_keys_internals.mojom.UnexportableKeyInfo', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys_internals.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key_tag', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 32, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(unexportable_keys_internals.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(unexportable_keys_internals.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createUnexportableKeysInternalsHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

unexportable_keys_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PageHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreateUnexportableKeysInternalsHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUnexportableKeysInternalsHandler (0)');
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
          const params = decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandlerFactory_CreateUnexportableKeysInternalsHandler_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createUnexportableKeysInternalsHandler');
          const result = this.impl.createUnexportableKeysInternalsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

unexportable_keys_internals.mojom.PageHandlerFactoryReceiver = unexportable_keys_internals.mojom.PageHandlerFactoryReceiver;

unexportable_keys_internals.mojom.PageHandlerFactoryPtr = unexportable_keys_internals.mojom.PageHandlerFactoryRemote;
unexportable_keys_internals.mojom.PageHandlerFactoryRequest = unexportable_keys_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParams', [
      mojo.internal.StructField('keys', 0, 0, mojo.internal.Array(unexportable_keys_internals.mojom.UnexportableKeyInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_DeleteKey_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys_internals.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec, 'unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

unexportable_keys_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUnexportableKeysInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec,
      unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec,
      [],
      false);
  }

  deleteKey(key_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec,
      unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec,
      [key_id],
      false);
  }

};

unexportable_keys_internals.mojom.PageHandler.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetUnexportableKeysInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUnexportableKeysInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteKey (1)');
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
          const params = decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUnexportableKeysInfo');
          const result = this.impl.getUnexportableKeysInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unexportable_keys_internals.mojom.PageHandler_GetUnexportableKeysInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(unexportable_keys_internals.mojom.PageHandler_DeleteKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteKey');
          const result = this.impl.deleteKey(params.key_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unexportable_keys_internals.mojom.PageHandler_DeleteKey_ResponseParamsSpec);
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

unexportable_keys_internals.mojom.PageHandlerReceiver = unexportable_keys_internals.mojom.PageHandlerReceiver;

unexportable_keys_internals.mojom.PageHandlerPtr = unexportable_keys_internals.mojom.PageHandlerRemote;
unexportable_keys_internals.mojom.PageHandlerRequest = unexportable_keys_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
unexportable_keys_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new unexportable_keys_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

unexportable_keys_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

unexportable_keys_internals.mojom.Page.getRemote = function() {
  let remote = new unexportable_keys_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys_internals.mojom.Page',
    'context');
  return remote.$;
};

unexportable_keys_internals.mojom.PageReceiver = class {
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

unexportable_keys_internals.mojom.PageReceiver = unexportable_keys_internals.mojom.PageReceiver;

unexportable_keys_internals.mojom.PagePtr = unexportable_keys_internals.mojom.PageRemote;
unexportable_keys_internals.mojom.PageRequest = unexportable_keys_internals.mojom.PagePendingReceiver;

