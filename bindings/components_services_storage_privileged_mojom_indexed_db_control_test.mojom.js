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
storage.mojom.MockFailureInjectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.MockFailureInjector';
  }

  failOperation(failure_class, failure_method, instance_num, call_num) {
    // Method: FailOperation
    // Call: FailOperation(failure_class, failure_method, instance_num, call_num)
  }

};

storage.mojom.MockFailureInjectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IndexedDBControlTest
storage.mojom.IndexedDBControlTestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.IndexedDBControlTest';
  }

  getBaseDataPathForTesting() {
    // Method: GetBaseDataPathForTesting
    return new Promise((resolve) => {
      // Call: GetBaseDataPathForTesting()
      resolve({});
    });
  }

  getFilePathForTesting(bucket_locator, for_sqlite) {
    // Method: GetFilePathForTesting
    return new Promise((resolve) => {
      // Call: GetFilePathForTesting(bucket_locator, for_sqlite)
      resolve({});
    });
  }

  resetCachesForTesting() {
    // Method: ResetCachesForTesting
    // Call: ResetCachesForTesting()
  }

  getPathForBlobForTesting(bucket_locator, database_id, blob_number) {
    // Method: GetPathForBlobForTesting
    return new Promise((resolve) => {
      // Call: GetPathForBlobForTesting(bucket_locator, database_id, blob_number)
      resolve({});
    });
  }

  flushBackingStoreForTesting(bucket_locator) {
    // Method: FlushBackingStoreForTesting
    // Call: FlushBackingStoreForTesting(bucket_locator)
  }

  flushBucketSequenceForTesting(bucket_locator) {
    // Method: FlushBucketSequenceForTesting
    // Call: FlushBucketSequenceForTesting(bucket_locator)
  }

  getUsageForTesting() {
    // Method: GetUsageForTesting
    return new Promise((resolve) => {
      // Call: GetUsageForTesting()
      resolve({});
    });
  }

  bindMockFailureSingletonForTesting(receiver) {
    // Method: BindMockFailureSingletonForTesting
    // Call: BindMockFailureSingletonForTesting(receiver)
  }

  forceInitializeFromFilesForTesting() {
    // Method: ForceInitializeFromFilesForTesting
    // Call: ForceInitializeFromFilesForTesting()
  }

};

storage.mojom.IndexedDBControlTestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
