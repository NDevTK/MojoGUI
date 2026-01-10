// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control_test.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var mojo_base = mojo_base || {};

storage.mojom.FailClassSpec = { $: mojo.internal.Enum() };
storage.mojom.FailMethodSpec = { $: mojo.internal.Enum() };
storage.mojom.MockFailureInjector = {};
storage.mojom.MockFailureInjector.$interfaceName = 'storage.mojom.MockFailureInjector';
storage.mojom.MockFailureInjector_FailOperation_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest = {};
storage.mojom.IndexedDBControlTest.$interfaceName = 'storage.mojom.IndexedDBControlTest';
storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec = { $: {} };
storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec = { $: {} };

// Enum: FailClass
storage.mojom.FailClass = {
  NOTHING: 0,
  LEVELDB_ITERATOR: 1,
  LEVELDB_DIRECT_TRANSACTION: 2,
  LEVELDB_TRANSACTION: 3,
  LEVELDB_DATABASE: 4,
};

// Enum: FailMethod
storage.mojom.FailMethod = {
  NOTHING: 0,
  COMMIT: 1,
  COMMIT_DISK_FULL: 2,
  COMMIT_SYNC: 3,
  GET: 4,
  SEEK: 5,
  WRITE: 6,
};

// Interface: MockFailureInjector
mojo.internal.Struct(
    storage.mojom.MockFailureInjector_FailOperation_ParamsSpec, 'storage.mojom.MockFailureInjector_FailOperation_Params', [
      mojo.internal.StructField('failure_class', 0, 0, storage.mojom.FailClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('failure_method', 8, 0, storage.mojom.FailMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instance_num', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('call_num', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

storage.mojom.MockFailureInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.MockFailureInjectorRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.MockFailureInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.MockFailureInjectorPendingReceiver,
      handle);
    this.$ = new storage.mojom.MockFailureInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.MockFailureInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  failOperation(failure_class, failure_method, instance_num, call_num) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.MockFailureInjector_FailOperation_ParamsSpec,
      null,
      [failure_class, failure_method, instance_num, call_num],
      false);
  }

};

storage.mojom.MockFailureInjector.getRemote = function() {
  let remote = new storage.mojom.MockFailureInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.MockFailureInjector',
    'context');
  return remote.$;
};

storage.mojom.MockFailureInjectorReceiver = class {
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
        
        // Try Method 0: FailOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FailOperation (0)');
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
          const params = decoder.decodeStruct(storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.failOperation');
          const result = this.impl.failOperation(params.failure_class, params.failure_method, params.instance_num, params.call_num);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.MockFailureInjectorReceiver = storage.mojom.MockFailureInjectorReceiver;

storage.mojom.MockFailureInjectorPtr = storage.mojom.MockFailureInjectorRemote;
storage.mojom.MockFailureInjectorRequest = storage.mojom.MockFailureInjectorPendingReceiver;


// Interface: IndexedDBControlTest
mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParams', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetFilePathForTesting_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('for_sqlite', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParams', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_ResetCachesForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('database_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('blob_number', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParams', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_Params', [
      mojo.internal.StructField('bucket_locator', 0, 0, storage.mojom.BucketLocatorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_GetUsageForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParams', [
      mojo.internal.StructField('total_usage', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.MockFailureInjectorSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec, 'storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec, 'storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParams', [
    ],
    [[0, 8]]);

storage.mojom.IndexedDBControlTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBControlTestRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControlTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBControlTestPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBControlTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IndexedDBControlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBaseDataPathForTesting() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getFilePathForTesting(bucket_locator, for_sqlite) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec,
      [bucket_locator, for_sqlite],
      false);
  }

  resetCachesForTesting() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec,
      [bucket_locator, database_id, blob_number],
      false);
  }

  flushBackingStoreForTesting(bucket_locator) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec,
      [bucket_locator],
      false);
  }

  flushBucketSequenceForTesting(bucket_locator) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec,
      [bucket_locator],
      false);
  }

  getUsageForTesting() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec,
      [],
      false);
  }

  bindMockFailureSingletonForTesting(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  forceInitializeFromFilesForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.IndexedDBControlTest.getRemote = function() {
  let remote = new storage.mojom.IndexedDBControlTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControlTest',
    'context');
  return remote.$;
};

storage.mojom.IndexedDBControlTestReceiver = class {
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
        
        // Try Method 0: GetBaseDataPathForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBaseDataPathForTesting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetFilePathForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFilePathForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ResetCachesForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetCachesForTesting (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetPathForBlobForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPathForBlobForTesting (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: FlushBackingStoreForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushBackingStoreForTesting (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: FlushBucketSequenceForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushBucketSequenceForTesting (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: GetUsageForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsageForTesting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: BindMockFailureSingletonForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMockFailureSingletonForTesting (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: ForceInitializeFromFilesForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceInitializeFromFilesForTesting (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
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
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBaseDataPathForTesting');
          const result = this.impl.getBaseDataPathForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFilePathForTesting');
          const result = this.impl.getFilePathForTesting(params.bucket_locator, params.for_sqlite);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resetCachesForTesting');
          const result = this.impl.resetCachesForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPathForBlobForTesting');
          const result = this.impl.getPathForBlobForTesting(params.bucket_locator, params.database_id, params.blob_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flushBackingStoreForTesting');
          const result = this.impl.flushBackingStoreForTesting(params.bucket_locator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.flushBucketSequenceForTesting');
          const result = this.impl.flushBucketSequenceForTesting(params.bucket_locator);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUsageForTesting');
          const result = this.impl.getUsageForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindMockFailureSingletonForTesting');
          const result = this.impl.bindMockFailureSingletonForTesting(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.forceInitializeFromFilesForTesting');
          const result = this.impl.forceInitializeFromFilesForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ResponseParamsSpec);
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

storage.mojom.IndexedDBControlTestReceiver = storage.mojom.IndexedDBControlTestReceiver;

storage.mojom.IndexedDBControlTestPtr = storage.mojom.IndexedDBControlTestRemote;
storage.mojom.IndexedDBControlTestRequest = storage.mojom.IndexedDBControlTestPendingReceiver;

