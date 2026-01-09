// Auto-generated MojoJS binding
// Source: chromium_src/storage/browser/quota/quota_manager_observer.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Interface: QuotaManagerObserver
storage.mojom.QuotaManagerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.QuotaManagerObserver';
  }

  onCreateOrUpdateBucket(bucket_info) {
    // Method: OnCreateOrUpdateBucket
    // Call: OnCreateOrUpdateBucket(bucket_info)
  }

  onDeleteBucket(bucket_locator) {
    // Method: OnDeleteBucket
    // Call: OnDeleteBucket(bucket_locator)
  }

};

storage.mojom.QuotaManagerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
