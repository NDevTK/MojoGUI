// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_access/storage_access_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: StorageAccessHandle
blink.mojom.StorageAccessHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.StorageAccessHandle';
  }

  bindIndexedDB(receiver) {
    // Method: BindIndexedDB
    // Call: BindIndexedDB(receiver)
  }

  bindLocks(receiver) {
    // Method: BindLocks
    // Call: BindLocks(receiver)
  }

  bindCaches(receiver) {
    // Method: BindCaches
    // Call: BindCaches(receiver)
  }

  getDirectory() {
    // Method: GetDirectory
    return new Promise((resolve) => {
      // Call: GetDirectory()
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

  bindBlobStorage(receiver) {
    // Method: BindBlobStorage
    // Call: BindBlobStorage(receiver)
  }

  bindBroadcastChannel(receiver) {
    // Method: BindBroadcastChannel
    // Call: BindBroadcastChannel(receiver)
  }

  bindSharedWorker(receiver) {
    // Method: BindSharedWorker
    // Call: BindSharedWorker(receiver)
  }

};

blink.mojom.StorageAccessHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
