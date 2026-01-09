// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/quota_client.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: QuotaClient
storage.mojom.QuotaClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.QuotaClient';
  }

  getBucketUsage(bucket) {
    // Method: GetBucketUsage
    return new Promise((resolve) => {
      // Call: GetBucketUsage(bucket)
      resolve({});
    });
  }

  getDefaultStorageKeys() {
    // Method: GetDefaultStorageKeys
    return new Promise((resolve) => {
      // Call: GetDefaultStorageKeys()
      resolve({});
    });
  }

  deleteBucketData(bucket) {
    // Method: DeleteBucketData
    return new Promise((resolve) => {
      // Call: DeleteBucketData(bucket)
      resolve({});
    });
  }

  performStorageCleanup() {
    // Method: PerformStorageCleanup
    // Call: PerformStorageCleanup()
  }

};

storage.mojom.QuotaClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
