// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/quota/quota_manager_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: QuotaManagerHost
blink.mojom.QuotaManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.QuotaManagerHost';
  }

  queryStorageUsageAndQuota() {
    // Method: QueryStorageUsageAndQuota
    return new Promise((resolve) => {
      // Call: QueryStorageUsageAndQuota()
      resolve({});
    });
  }

};

blink.mojom.QuotaManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
