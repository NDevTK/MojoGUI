// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/buckets/bucket_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BucketError
blink.mojom.BucketError = {
  kUnknown: 0,
  kQuotaExceeded: 1,
  kInvalidExpiration: 2,
};

// Struct: BucketPolicies
blink.mojom.BucketPolicies = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.expires = values.expires !== undefined ? values.expires : 0;
  }
};

// Interface: BucketHost
blink.mojom.BucketHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BucketHost';
  }

  persist() {
    // Method: Persist
    return new Promise((resolve) => {
      // Call: Persist()
      resolve({});
    });
  }

  persisted() {
    // Method: Persisted
    return new Promise((resolve) => {
      // Call: Persisted()
      resolve({});
    });
  }

  estimate() {
    // Method: Estimate
    return new Promise((resolve) => {
      // Call: Estimate()
      resolve({});
    });
  }

  durability() {
    // Method: Durability
    return new Promise((resolve) => {
      // Call: Durability()
      resolve({});
    });
  }

  setExpires(expires) {
    // Method: SetExpires
    return new Promise((resolve) => {
      // Call: SetExpires(expires)
      resolve({});
    });
  }

  expires() {
    // Method: Expires
    return new Promise((resolve) => {
      // Call: Expires()
      resolve({});
    });
  }

  getIdbFactory(idb_factory) {
    // Method: GetIdbFactory
    // Call: GetIdbFactory(idb_factory)
  }

  getLockManager(lock_manager) {
    // Method: GetLockManager
    // Call: GetLockManager(lock_manager)
  }

  getCaches(cache_storage) {
    // Method: GetCaches
    // Call: GetCaches(cache_storage)
  }

  getDirectory() {
    // Method: GetDirectory
    return new Promise((resolve) => {
      // Call: GetDirectory()
      resolve({});
    });
  }

  getDirectoryForDevtools(directory_path_components) {
    // Method: GetDirectoryForDevtools
    return new Promise((resolve) => {
      // Call: GetDirectoryForDevtools(directory_path_components)
      resolve({});
    });
  }

};

blink.mojom.BucketHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BucketManagerHost
blink.mojom.BucketManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BucketManagerHost';
  }

  openBucket(name, policy) {
    // Method: OpenBucket
    return new Promise((resolve) => {
      // Call: OpenBucket(name, policy)
      resolve({});
    });
  }

  getBucketForDevtools(name, receiver) {
    // Method: GetBucketForDevtools
    // Call: GetBucketForDevtools(name, receiver)
  }

  keys() {
    // Method: Keys
    return new Promise((resolve) => {
      // Call: Keys()
      resolve({});
    });
  }

  deleteBucket(name) {
    // Method: DeleteBucket
    return new Promise((resolve) => {
      // Call: DeleteBucket(name)
      resolve({});
    });
  }

};

blink.mojom.BucketManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
