// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_control_test.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: FailClass
storage.mojom.mojom.FailClass = {
  NOTHING: 0,
  LEVELDB_ITERATOR: 1,
  LEVELDB_DIRECT_TRANSACTION: 2,
  LEVELDB_TRANSACTION: 3,
  LEVELDB_DATABASE: 4,
};
storage.mojom.mojom.FailClassSpec = { $: mojo.internal.Enum() };

// Enum: FailMethod
storage.mojom.mojom.FailMethod = {
  NOTHING: 0,
  COMMIT: 1,
  COMMIT_DISK_FULL: 2,
  COMMIT_SYNC: 3,
  GET: 4,
  SEEK: 5,
  WRITE: 6,
};
storage.mojom.mojom.FailMethodSpec = { $: mojo.internal.Enum() };

// Interface: MockFailureInjector
storage.mojom.mojom.MockFailureInjector = {};

storage.mojom.mojom.MockFailureInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.MockFailureInjectorRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.MockFailureInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.MockFailureInjectorPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.MockFailureInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.MockFailureInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  failOperation(failure_class, failure_method, instance_num, call_num) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.MockFailureInjector_FailOperation_ParamsSpec,
      null,
      [failure_class, failure_method, instance_num, call_num]);
  }

};

storage.mojom.mojom.MockFailureInjector.getRemote = function() {
  let remote = new storage.mojom.mojom.MockFailureInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.MockFailureInjector',
    'context');
  return remote.$;
};

// ParamsSpec for FailOperation
storage.mojom.mojom.MockFailureInjector_FailOperation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.MockFailureInjector.FailOperation_Params',
      packedSize: 24,
      fields: [
        { name: 'failure_class', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.FailClassSpec, nullable: false, minVersion: 0 },
        { name: 'failure_method', packedOffset: 4, packedBitOffset: 0, type: storage.mojom.FailMethodSpec, nullable: false, minVersion: 0 },
        { name: 'instance_num', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'call_num', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.MockFailureInjectorPtr = storage.mojom.mojom.MockFailureInjectorRemote;
storage.mojom.mojom.MockFailureInjectorRequest = storage.mojom.mojom.MockFailureInjectorPendingReceiver;


// Interface: IndexedDBControlTest
storage.mojom.mojom.IndexedDBControlTest = {};

storage.mojom.mojom.IndexedDBControlTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IndexedDBControlTestRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBControlTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IndexedDBControlTestPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IndexedDBControlTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IndexedDBControlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBaseDataPathForTesting() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec,
      storage.mojom.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec,
      []);
  }

  getFilePathForTesting(bucket_locator, for_sqlite) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec,
      storage.mojom.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec,
      [bucket_locator, for_sqlite]);
  }

  resetCachesForTesting() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec,
      null,
      []);
  }

  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec,
      storage.mojom.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec,
      [bucket_locator, database_id, blob_number]);
  }

  flushBackingStoreForTesting(bucket_locator) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec,
      null,
      [bucket_locator]);
  }

  flushBucketSequenceForTesting(bucket_locator) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec,
      null,
      [bucket_locator]);
  }

  getUsageForTesting() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec,
      storage.mojom.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec,
      []);
  }

  bindMockFailureSingletonForTesting(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec,
      null,
      [receiver]);
  }

  forceInitializeFromFilesForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec,
      null,
      []);
  }

};

storage.mojom.mojom.IndexedDBControlTest.getRemote = function() {
  let remote = new storage.mojom.mojom.IndexedDBControlTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBControlTest',
    'context');
  return remote.$;
};

// ParamsSpec for GetBaseDataPathForTesting
storage.mojom.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetBaseDataPathForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.IndexedDBControlTest_GetBaseDataPathForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetBaseDataPathForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFilePathForTesting
storage.mojom.mojom.IndexedDBControlTest_GetFilePathForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetFilePathForTesting_Params',
      packedSize: 24,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'for_sqlite', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.mojom.IndexedDBControlTest_GetFilePathForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetFilePathForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ResetCachesForTesting
storage.mojom.mojom.IndexedDBControlTest_ResetCachesForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.ResetCachesForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPathForBlobForTesting
storage.mojom.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetPathForBlobForTesting_Params',
      packedSize: 32,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
        { name: 'database_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'blob_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.mojom.IndexedDBControlTest_GetPathForBlobForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetPathForBlobForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushBackingStoreForTesting
storage.mojom.mojom.IndexedDBControlTest_FlushBackingStoreForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.FlushBackingStoreForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushBucketSequenceForTesting
storage.mojom.mojom.IndexedDBControlTest_FlushBucketSequenceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.FlushBucketSequenceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'bucket_locator', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.BucketLocatorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUsageForTesting
storage.mojom.mojom.IndexedDBControlTest_GetUsageForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetUsageForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.IndexedDBControlTest_GetUsageForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.GetUsageForTesting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'total_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMockFailureSingletonForTesting
storage.mojom.mojom.IndexedDBControlTest_BindMockFailureSingletonForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.BindMockFailureSingletonForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceInitializeFromFilesForTesting
storage.mojom.mojom.IndexedDBControlTest_ForceInitializeFromFilesForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBControlTest.ForceInitializeFromFilesForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.IndexedDBControlTestPtr = storage.mojom.mojom.IndexedDBControlTestRemote;
storage.mojom.mojom.IndexedDBControlTestRequest = storage.mojom.mojom.IndexedDBControlTestPendingReceiver;

