// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/locks/lock_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.LockModeSpec = { $: mojo.internal.Enum() };
blink.mojom.WaitModeSpec = { $: mojo.internal.Enum() };
blink.mojom.LockInfoSpec = { $: {} };
blink.mojom.LockHandle = {};
blink.mojom.LockHandle.$interfaceName = 'blink.mojom.LockHandle';
blink.mojom.LockRequest = {};
blink.mojom.LockRequest.$interfaceName = 'blink.mojom.LockRequest';
blink.mojom.LockRequest_Granted_ParamsSpec = { $: {} };
blink.mojom.LockRequest_Failed_ParamsSpec = { $: {} };
blink.mojom.LockManager = {};
blink.mojom.LockManager.$interfaceName = 'blink.mojom.LockManager';
blink.mojom.LockManager_RequestLock_ParamsSpec = { $: {} };
blink.mojom.LockManager_QueryState_ParamsSpec = { $: {} };
blink.mojom.LockManager_QueryState_ResponseParamsSpec = { $: {} };

// Enum: LockMode
blink.mojom.LockMode = {
  SHARED: 0,
  EXCLUSIVE: 1,
};

// Enum: WaitMode
blink.mojom.WaitMode = {
  WAIT: 0,
  NO_WAIT: 1,
  PREEMPT: 2,
};

// Struct: LockInfo
mojo.internal.Struct(
    blink.mojom.LockInfoSpec, 'blink.mojom.LockInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, blink.mojom.LockModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: LockHandle
blink.mojom.LockHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.LockHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.LockHandle.getRemote = function() {
  let remote = new blink.mojom.LockHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockHandle',
    'context');
  return remote.$;
};

blink.mojom.LockHandleReceiver = class {
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

blink.mojom.LockHandleReceiver = blink.mojom.LockHandleReceiver;

blink.mojom.LockHandlePtr = blink.mojom.LockHandleRemote;
blink.mojom.LockHandleRequest = blink.mojom.LockHandlePendingReceiver;


// Interface: LockRequest
mojo.internal.Struct(
    blink.mojom.LockRequest_Granted_ParamsSpec, 'blink.mojom.LockRequest_Granted_Params', [
      mojo.internal.StructField('lock_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.LockRequest_Failed_ParamsSpec, 'blink.mojom.LockRequest_Failed_Params', [
    ],
    [[0, 8]]);

blink.mojom.LockRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockRequestPendingReceiver,
      handle);
    this.$ = new blink.mojom.LockRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  granted(lock_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockRequest_Granted_ParamsSpec,
      null,
      [lock_handle],
      false);
  }

  failed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockRequest_Failed_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.LockRequest.getRemote = function() {
  let remote = new blink.mojom.LockRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockRequest',
    'context');
  return remote.$;
};

blink.mojom.LockRequestReceiver = class {
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
        
        // Try Method 0: Granted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.LockRequest_Granted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Granted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Failed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.LockRequest_Failed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Failed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(blink.mojom.LockRequest_Granted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.granted');
          const result = this.impl.granted(params.lock_handle);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.LockRequest_Failed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.failed');
          const result = this.impl.failed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.LockRequestReceiver = blink.mojom.LockRequestReceiver;

blink.mojom.LockRequestPtr = blink.mojom.LockRequestRemote;
blink.mojom.LockRequestRequest = blink.mojom.LockRequestPendingReceiver;


// Interface: LockManager
mojo.internal.Struct(
    blink.mojom.LockManager_RequestLock_ParamsSpec, 'blink.mojom.LockManager_RequestLock_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, blink.mojom.LockModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wait', 16, 0, blink.mojom.WaitModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.LockManager_QueryState_ParamsSpec, 'blink.mojom.LockManager_QueryState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.LockManager_QueryState_ResponseParamsSpec, 'blink.mojom.LockManager_QueryState_ResponseParams', [
      mojo.internal.StructField('requested', 0, 0, mojo.internal.Array(blink.mojom.LockInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('held', 8, 0, mojo.internal.Array(blink.mojom.LockInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.LockManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.LockManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LockManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.LockManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.LockManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.LockManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestLock(name, mode, wait, request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.LockManager_RequestLock_ParamsSpec,
      null,
      [name, mode, wait, request],
      false);
  }

  queryState() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.LockManager_QueryState_ParamsSpec,
      blink.mojom.LockManager_QueryState_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.LockManager.getRemote = function() {
  let remote = new blink.mojom.LockManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LockManager',
    'context');
  return remote.$;
};

blink.mojom.LockManagerReceiver = class {
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
        
        // Try Method 0: RequestLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.LockManager_RequestLock_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestLock (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: QueryState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.LockManager_QueryState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(blink.mojom.LockManager_RequestLock_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestLock');
          const result = this.impl.requestLock(params.name, params.mode, params.wait, params.request);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.LockManager_QueryState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryState');
          const result = this.impl.queryState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.LockManager_QueryState_ResponseParamsSpec);
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

blink.mojom.LockManagerReceiver = blink.mojom.LockManagerReceiver;

blink.mojom.LockManagerPtr = blink.mojom.LockManagerRemote;
blink.mojom.LockManagerRequest = blink.mojom.LockManagerPendingReceiver;

