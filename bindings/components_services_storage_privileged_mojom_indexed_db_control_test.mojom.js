// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control_test.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


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
      storage.mojom.MockFailureInjector_FailOperation_ParamsSpec.$,
      null,
      [failure_class, failure_method, instance_num, call_num]);
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

// ParamsSpec for FailOperation
storage.mojom.MockFailureInjector_FailOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.MockFailureInjector.FailOperation_Params',
      packedSize: 40,
      fields: [
        { name: 'failure_class', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'failure_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'instance_num', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'call_num', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.MockFailureInjectorPtr = storage.mojom.MockFailureInjectorRemote;
storage.mojom.MockFailureInjectorRequest = storage.mojom.MockFailureInjectorPendingReceiver;


// Interface: IndexedDBControlTest
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
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec.$,
      storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec.$,
      []);
  }

  getFilePathForTesting(bucket_locator, for_sqlite) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec.$,
      storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec.$,
      [bucket_locator, for_sqlite]);
  }

  resetCachesForTesting() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec.$,
      null,
      []);
  }

  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec.$,
      storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec.$,
      [bucket_locator, database_id, blob_number]);
  }

  flushBackingStoreForTesting(bucket_locator) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec.$,
      null,
      [bucket_locator]);
  }

  flushBucketSequenceForTesting(bucket_locator) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec.$,
      null,
      [bucket_locator]);
  }

  getUsageForTesting() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec.$,
      storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec.$,
      []);
  }

  bindMockFailureSingletonForTesting(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec.$,
      null,
      [receiver]);
  }

  forceInitializeFromFilesForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for GetBaseDataPathForTesting
storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetBaseDataPathForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetBaseDataPathForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFilePathForTesting
storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetFilePathForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'for_sqlite', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetFilePathForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetCachesForTesting
storage.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.ResetCachesForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPathForBlobForTesting
storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetPathForBlobForTesting_Params',
      packedSize: 32,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'database_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blob_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetPathForBlobForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushBackingStoreForTesting
storage.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.FlushBackingStoreForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushBucketSequenceForTesting
storage.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.FlushBucketSequenceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUsageForTesting
storage.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetUsageForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetUsageForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'total_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindMockFailureSingletonForTesting
storage.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.BindMockFailureSingletonForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceInitializeFromFilesForTesting
storage.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.ForceInitializeFromFilesForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.IndexedDBControlTestPtr = storage.mojom.IndexedDBControlTestRemote;
storage.mojom.IndexedDBControlTestRequest = storage.mojom.IndexedDBControlTestPendingReceiver;

