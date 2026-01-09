// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/cache_storage_control.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: CacheStorageOwner
storage.mojom.CacheStorageOwner = {
};

// Interface: CacheStorageObserver
storage.mojom.CacheStorageObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.CacheStorageObserver';
  }

  onCacheListChanged(bucket_locator) {
    // Method: OnCacheListChanged
    // Call: OnCacheListChanged(bucket_locator)
  }

  onCacheContentChanged(bucket_locator, cache_name) {
    // Method: OnCacheContentChanged
    // Call: OnCacheContentChanged(bucket_locator, cache_name)
  }

};

storage.mojom.CacheStorageObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CacheStorageControl
storage.mojom.CacheStorageControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.CacheStorageControl';
  }

  addReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver) {
    // Method: AddReceiver
    // Call: AddReceiver(cross_origin_embedder_policy, coep_reporter, document_isolation_policy, dip_reporter, bucket_locator, owner, receiver)
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  applyPolicyUpdates(policy_updates) {
    // Method: ApplyPolicyUpdates
    // Call: ApplyPolicyUpdates(policy_updates)
  }

};

storage.mojom.CacheStorageControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
