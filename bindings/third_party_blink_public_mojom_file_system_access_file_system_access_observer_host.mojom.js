// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_observer_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FileSystemAccessObserverHost
blink.mojom.FileSystemAccessObserverHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessObserverHost';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  observe(token, is_recursive) {
    // Method: Observe
    return new Promise((resolve) => {
      // Call: Observe(token, is_recursive)
      resolve({});
    });
  }

  observe() {
    // Method: Observe
    // Call: Observe()
  }

  unobserve(token) {
    // Method: Unobserve
    // Call: Unobserve(token)
  }

};

blink.mojom.FileSystemAccessObserverHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
