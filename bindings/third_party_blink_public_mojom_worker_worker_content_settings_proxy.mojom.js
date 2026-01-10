// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.WorkerContentSettingsProxy = {};
blink.mojom.WorkerContentSettingsProxy.$interfaceName = 'blink.mojom.WorkerContentSettingsProxy';
blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec = { $: {} };
blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec = { $: {} };

// Interface: WorkerContentSettingsProxy
mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec, 'blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WorkerContentSettingsProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WorkerContentSettingsProxyRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WorkerContentSettingsProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WorkerContentSettingsProxyPendingReceiver,
      handle);
    this.$ = new blink.mojom.WorkerContentSettingsProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WorkerContentSettingsProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allowIndexedDB() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec,
      [],
      false);
  }

  allowCacheStorage() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec,
      [],
      false);
  }

  allowWebLocks() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec,
      [],
      false);
  }

  requestFileSystemAccessSync() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec,
      blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.WorkerContentSettingsProxy.getRemote = function() {
  let remote = new blink.mojom.WorkerContentSettingsProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WorkerContentSettingsProxy',
    'context');
  return remote.$;
};

blink.mojom.WorkerContentSettingsProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: AllowIndexedDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowIndexedDB (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AllowCacheStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowCacheStorage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: AllowWebLocks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowWebLocks (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: RequestFileSystemAccessSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFileSystemAccessSync (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
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
          const params = decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allowIndexedDB');
          const result = this.impl.allowIndexedDB();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowIndexedDB_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allowCacheStorage');
          const result = this.impl.allowCacheStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowCacheStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allowWebLocks');
          const result = this.impl.allowWebLocks();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_AllowWebLocks_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestFileSystemAccessSync');
          const result = this.impl.requestFileSystemAccessSync();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WorkerContentSettingsProxy_RequestFileSystemAccessSync_ResponseParamsSpec);
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

blink.mojom.WorkerContentSettingsProxyReceiver = blink.mojom.WorkerContentSettingsProxyReceiver;

blink.mojom.WorkerContentSettingsProxyPtr = blink.mojom.WorkerContentSettingsProxyRemote;
blink.mojom.WorkerContentSettingsProxyRequest = blink.mojom.WorkerContentSettingsProxyPendingReceiver;

