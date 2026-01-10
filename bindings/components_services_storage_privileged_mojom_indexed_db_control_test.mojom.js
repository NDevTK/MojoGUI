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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.failOperation(params.failure_class, params.failure_method, params.instance_num, params.call_num);
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindMockFailureSingletonForTesting(params.receiver);
          break;
        }
        case 8: {
          const params = storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

storage.mojom.IndexedDBControlTestReceiver = storage.mojom.IndexedDBControlTestReceiver;

storage.mojom.IndexedDBControlTestPtr = storage.mojom.IndexedDBControlTestRemote;
storage.mojom.IndexedDBControlTestRequest = storage.mojom.IndexedDBControlTestPendingReceiver;

