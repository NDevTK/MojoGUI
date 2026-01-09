// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/gpu/gpu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: GpuDataManager
blink.mojom.GpuDataManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.GpuDataManager';
  }

  are3DAPIsBlockedForUrl(url) {
    // Method: Are3DAPIsBlockedForUrl
    return new Promise((resolve) => {
      // Call: Are3DAPIsBlockedForUrl(url)
      resolve({});
    });
  }

};

blink.mojom.GpuDataManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
