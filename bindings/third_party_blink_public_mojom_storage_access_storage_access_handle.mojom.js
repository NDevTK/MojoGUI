// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_access/storage_access_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.StorageAccessHandle = {};
blink.mojom.StorageAccessHandle.$interfaceName = 'blink.mojom.StorageAccessHandle';
blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_Estimate_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec = { $: {} };
blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec = { $: {} };

// Interface: StorageAccessHandle
mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindIndexedDB_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindLocks_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.LockManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindCaches_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec, 'blink.mojom.StorageAccessHandle_GetDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.StorageAccessHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_Estimate_ParamsSpec, 'blink.mojom.StorageAccessHandle_Estimate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec, 'blink.mojom.StorageAccessHandle_Estimate_ResponseParams', [
      mojo.internal.StructField('current_usage', 0, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindBlobStorage_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindBroadcastChannel_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec, 'blink.mojom.StorageAccessHandle_BindSharedWorker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.SharedWorkerConnectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.StorageAccessHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAccessHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAccessHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAccessHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAccessHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.StorageAccessHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndexedDB(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLocks(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCaches(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec,
      null,
      [receiver],
      false);
  }

  getDirectory() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec,
      blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.StorageAccessHandle_Estimate_ParamsSpec,
      blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  bindBlobStorage(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBroadcastChannel(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSharedWorker(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

blink.mojom.StorageAccessHandle.getRemote = function() {
  let remote = new blink.mojom.StorageAccessHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAccessHandle',
    'context');
  return remote.$;
};

blink.mojom.StorageAccessHandleReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindIndexedDB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindIndexedDB (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindLocks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindLocks (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindCaches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindCaches (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectory (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Estimate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_Estimate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Estimate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindBlobStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBlobStorage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindBroadcastChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindBroadcastChannel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BindSharedWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSharedWorker (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindIndexedDB_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindIndexedDB');
          const result = this.impl.bindIndexedDB(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindLocks_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindLocks');
          const result = this.impl.bindLocks(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindCaches_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindCaches');
          const result = this.impl.bindCaches(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_GetDirectory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getDirectory');
          const result = this.impl.getDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageAccessHandle_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_Estimate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.estimate');
          const result = this.impl.estimate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageAccessHandle_Estimate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBlobStorage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindBlobStorage');
          const result = this.impl.bindBlobStorage(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindBroadcastChannel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindBroadcastChannel');
          const result = this.impl.bindBroadcastChannel(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAccessHandle_BindSharedWorker_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.bindSharedWorker');
          const result = this.impl.bindSharedWorker(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.StorageAccessHandleReceiver = blink.mojom.StorageAccessHandleReceiver;

blink.mojom.StorageAccessHandlePtr = blink.mojom.StorageAccessHandleRemote;
blink.mojom.StorageAccessHandleRequest = blink.mojom.StorageAccessHandlePendingReceiver;

