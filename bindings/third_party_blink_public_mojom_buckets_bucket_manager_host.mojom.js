// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.BucketErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.BucketPoliciesSpec = { $: {} };
blink.mojom.BucketHost = {};
blink.mojom.BucketHost.$interfaceName = 'blink.mojom.BucketHost';
blink.mojom.BucketHost_Persist_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persist_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Persisted_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Estimate_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Durability_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_SetExpires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ParamsSpec = { $: {} };
blink.mojom.BucketHost_Expires_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetIdbFactory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetLockManager_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetCaches_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost = {};
blink.mojom.BucketManagerHost.$interfaceName = 'blink.mojom.BucketManagerHost';
blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec = { $: {} };
blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec = { $: {} };

// Enum: BucketError
blink.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};

// Struct: BucketPolicies
mojo.internal.Struct(
    blink.mojom.BucketPoliciesSpec, 'blink.mojom.BucketPolicies', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('expires', 16, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('persisted', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_persisted', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_durability', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_quota', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: BucketHost
mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ParamsSpec, 'blink.mojom.BucketHost_Persist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persist_ResponseParamsSpec, 'blink.mojom.BucketHost_Persist_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ParamsSpec, 'blink.mojom.BucketHost_Persisted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Persisted_ResponseParamsSpec, 'blink.mojom.BucketHost_Persisted_ResponseParams', [
      mojo.internal.StructField('persisted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('success', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ParamsSpec, 'blink.mojom.BucketHost_Estimate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Estimate_ResponseParamsSpec, 'blink.mojom.BucketHost_Estimate_ResponseParams', [
      mojo.internal.StructField('current_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('current_quota', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ParamsSpec, 'blink.mojom.BucketHost_Durability_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Durability_ResponseParamsSpec, 'blink.mojom.BucketHost_Durability_ResponseParams', [
      mojo.internal.StructField('durability', 0, 0, blink.mojom.BucketDurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ParamsSpec, 'blink.mojom.BucketHost_SetExpires_Params', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_SetExpires_ResponseParamsSpec, 'blink.mojom.BucketHost_SetExpires_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ParamsSpec, 'blink.mojom.BucketHost_Expires_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_Expires_ResponseParamsSpec, 'blink.mojom.BucketHost_Expires_ResponseParams', [
      mojo.internal.StructField('expires', 0, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetIdbFactory_ParamsSpec, 'blink.mojom.BucketHost_GetIdbFactory_Params', [
      mojo.internal.StructField('idb_factory', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.IDBFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetLockManager_ParamsSpec, 'blink.mojom.BucketHost_GetLockManager_Params', [
      mojo.internal.StructField('lock_manager', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.LockManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetCaches_ParamsSpec, 'blink.mojom.BucketHost_GetCaches_Params', [
      mojo.internal.StructField('cache_storage', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.CacheStorageRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ParamsSpec, 'blink.mojom.BucketHost_GetDirectory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_Params', [
      mojo.internal.StructField('directory_path_components', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec, 'blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.BucketHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  persist() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BucketHost_Persist_ParamsSpec,
      blink.mojom.BucketHost_Persist_ResponseParamsSpec,
      [],
      false);
  }

  persisted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BucketHost_Persisted_ParamsSpec,
      blink.mojom.BucketHost_Persisted_ResponseParamsSpec,
      [],
      false);
  }

  estimate() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BucketHost_Estimate_ParamsSpec,
      blink.mojom.BucketHost_Estimate_ResponseParamsSpec,
      [],
      false);
  }

  durability() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BucketHost_Durability_ParamsSpec,
      blink.mojom.BucketHost_Durability_ResponseParamsSpec,
      [],
      false);
  }

  setExpires(expires) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.BucketHost_SetExpires_ParamsSpec,
      blink.mojom.BucketHost_SetExpires_ResponseParamsSpec,
      [expires],
      false);
  }

  expires() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.BucketHost_Expires_ParamsSpec,
      blink.mojom.BucketHost_Expires_ResponseParamsSpec,
      [],
      false);
  }

  getIdbFactory(idb_factory) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.BucketHost_GetIdbFactory_ParamsSpec,
      null,
      [idb_factory],
      false);
  }

  getLockManager(lock_manager) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.BucketHost_GetLockManager_ParamsSpec,
      null,
      [lock_manager],
      false);
  }

  getCaches(cache_storage) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.BucketHost_GetCaches_ParamsSpec,
      null,
      [cache_storage],
      false);
  }

  getDirectory() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.BucketHost_GetDirectory_ParamsSpec,
      blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec,
      [],
      false);
  }

  getDirectoryForDevtools(directory_path_components) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec,
      blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec,
      [directory_path_components],
      false);
  }

};

blink.mojom.BucketHost.getRemote = function() {
  let remote = new blink.mojom.BucketHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketHost',
    'context');
  return remote.$;
};

blink.mojom.BucketHostReceiver = class {
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
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
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
        
        // Try Method 0: Persist
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_Persist_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Persist (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: Persisted
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_Persisted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Persisted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Estimate
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_Estimate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Estimate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: Durability
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_Durability_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Durability (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: SetExpires
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_SetExpires_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetExpires (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: Expires
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_Expires_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Expires (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: GetIdbFactory
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIdbFactory (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: GetLockManager
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_GetLockManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLockManager (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: GetCaches
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_GetCaches_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCaches (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: GetDirectory
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_GetDirectory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectory (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: GetDirectoryForDevtools
        try {
             decoder.decodeStruct(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectoryForDevtools (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_Persist_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.persist');
          const result = this.impl.persist();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persist_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_Persisted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.persisted');
          const result = this.impl.persisted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Persisted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_Estimate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.estimate');
          const result = this.impl.estimate();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Estimate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_Durability_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.durability');
          const result = this.impl.durability();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Durability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_SetExpires_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setExpires');
          const result = this.impl.setExpires(params.expires);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_SetExpires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_Expires_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.expires');
          const result = this.impl.expires();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_Expires_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_GetIdbFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getIdbFactory');
          const result = this.impl.getIdbFactory(params.idb_factory);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_GetLockManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getLockManager');
          const result = this.impl.getLockManager(params.lock_manager);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_GetCaches_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCaches');
          const result = this.impl.getCaches(params.cache_storage);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_GetDirectory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDirectory');
          const result = this.impl.getDirectory();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketHost_GetDirectoryForDevtools_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDirectoryForDevtools');
          const result = this.impl.getDirectoryForDevtools(params.directory_path_components);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketHost_GetDirectoryForDevtools_ResponseParamsSpec);
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

blink.mojom.BucketHostReceiver = blink.mojom.BucketHostReceiver;

blink.mojom.BucketHostPtr = blink.mojom.BucketHostRemote;
blink.mojom.BucketHostRequest = blink.mojom.BucketHostPendingReceiver;


// Interface: BucketManagerHost
mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('policy', 8, 0, blink.mojom.BucketPoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_OpenBucket_ResponseParams', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.BucketHostSpec), null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, blink.mojom.BucketErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec, 'blink.mojom.BucketManagerHost_GetBucketForDevtools_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.BucketHostSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ParamsSpec, 'blink.mojom.BucketManagerHost_Keys_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_Keys_ResponseParams', [
      mojo.internal.StructField('buckets', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec, 'blink.mojom.BucketManagerHost_DeleteBucket_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.BucketManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.BucketManagerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.BucketManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.BucketManagerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.BucketManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.BucketManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openBucket(name, policy) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec,
      [name, policy],
      false);
  }

  getBucketForDevtools(name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

  keys() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.BucketManagerHost_Keys_ParamsSpec,
      blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec,
      [],
      false);
  }

  deleteBucket(name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec,
      blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec,
      [name],
      false);
  }

};

blink.mojom.BucketManagerHost.getRemote = function() {
  let remote = new blink.mojom.BucketManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.BucketManagerHost',
    'context');
  return remote.$;
};

blink.mojom.BucketManagerHostReceiver = class {
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
        
        // Try Method 0: OpenBucket
        try {
             decoder.decodeStruct(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBucket (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetBucketForDevtools
        try {
             decoder.decodeStruct(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBucketForDevtools (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: Keys
        try {
             decoder.decodeStruct(blink.mojom.BucketManagerHost_Keys_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Keys (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: DeleteBucket
        try {
             decoder.decodeStruct(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteBucket (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketManagerHost_OpenBucket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openBucket');
          const result = this.impl.openBucket(params.name, params.policy);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_OpenBucket_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketManagerHost_GetBucketForDevtools_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBucketForDevtools');
          const result = this.impl.getBucketForDevtools(params.name, params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketManagerHost_Keys_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.keys');
          const result = this.impl.keys();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_Keys_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.BucketManagerHost_DeleteBucket_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteBucket');
          const result = this.impl.deleteBucket(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.BucketManagerHost_DeleteBucket_ResponseParamsSpec);
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

blink.mojom.BucketManagerHostReceiver = blink.mojom.BucketManagerHostReceiver;

blink.mojom.BucketManagerHostPtr = blink.mojom.BucketManagerHostRemote;
blink.mojom.BucketManagerHostRequest = blink.mojom.BucketManagerHostPendingReceiver;

