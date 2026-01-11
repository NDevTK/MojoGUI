// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control_test.mojom
// Module: storage.mojom

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
  failOperation(failure_class, failure_method, instance_num, call_num) {
    return this.$.failOperation(failure_class, failure_method, instance_num, call_num);
  }
};

storage.mojom.MockFailureInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MockFailureInjector', [
      { explicit: null },
    ]);
  }

  failOperation(failure_class, failure_method, instance_num, call_num) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MockFailureInjector', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.MockFailureInjector_FailOperation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$.structSpec);
          const result = this.impl.failOperation(params.failure_class, params.failure_method, params.instance_num, params.call_num);
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.MockFailureInjectorRemote), null, false, 0, undefined),
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
  getBaseDataPathForTesting() {
    return this.$.getBaseDataPathForTesting();
  }
  getFilePathForTesting(bucket_locator, for_sqlite) {
    return this.$.getFilePathForTesting(bucket_locator, for_sqlite);
  }
  resetCachesForTesting() {
    return this.$.resetCachesForTesting();
  }
  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    return this.$.getPathForBlobForTesting(bucket_locator, database_id, blob_number);
  }
  flushBackingStoreForTesting(bucket_locator) {
    return this.$.flushBackingStoreForTesting(bucket_locator);
  }
  flushBucketSequenceForTesting(bucket_locator) {
    return this.$.flushBucketSequenceForTesting(bucket_locator);
  }
  getUsageForTesting() {
    return this.$.getUsageForTesting();
  }
  bindMockFailureSingletonForTesting(receiver) {
    return this.$.bindMockFailureSingletonForTesting(receiver);
  }
  forceInitializeFromFilesForTesting() {
    return this.$.forceInitializeFromFilesForTesting();
  }
};

storage.mojom.IndexedDBControlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBControlTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBaseDataPathForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getFilePathForTesting(bucket_locator, for_sqlite) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec,
      [bucket_locator, for_sqlite],
      false);
  }

  resetCachesForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec,
      [bucket_locator, database_id, blob_number],
      false);
  }

  flushBackingStoreForTesting(bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ResponseParamsSpec,
      [bucket_locator],
      false);
  }

  flushBucketSequenceForTesting(bucket_locator) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ResponseParamsSpec,
      [bucket_locator],
      false);
  }

  getUsageForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec,
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec,
      [],
      false);
  }

  bindMockFailureSingletonForTesting(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec,
      null,
      [receiver],
      false);
  }

  forceInitializeFromFilesForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBControlTest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$.structSpec);
          const result = this.impl.bindMockFailureSingletonForTesting(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

storage.mojom.IndexedDBControlTestReceiver = storage.mojom.IndexedDBControlTestReceiver;

storage.mojom.IndexedDBControlTestPtr = storage.mojom.IndexedDBControlTestRemote;
storage.mojom.IndexedDBControlTestRequest = storage.mojom.IndexedDBControlTestPendingReceiver;

