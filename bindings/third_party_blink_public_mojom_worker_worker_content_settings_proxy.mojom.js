// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_content_settings_proxy.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WorkerContentSettingsProxy
blink.mojom.WorkerContentSettingsProxyPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WorkerContentSettingsProxy';
  }

  allowIndexedDB() {
    // Method: AllowIndexedDB
    return new Promise((resolve) => {
      // Call: AllowIndexedDB()
      resolve({});
    });
  }

  allowCacheStorage() {
    // Method: AllowCacheStorage
    return new Promise((resolve) => {
      // Call: AllowCacheStorage()
      resolve({});
    });
  }

  allowWebLocks() {
    // Method: AllowWebLocks
    return new Promise((resolve) => {
      // Call: AllowWebLocks()
      resolve({});
    });
  }

  requestFileSystemAccessSync() {
    // Method: RequestFileSystemAccessSync
    return new Promise((resolve) => {
      // Call: RequestFileSystemAccessSync()
      resolve({});
    });
  }

};

blink.mojom.WorkerContentSettingsProxyRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
