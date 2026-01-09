// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/file_loader.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AccessibilityFileLoader
ax.mojom.AccessibilityFileLoaderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AccessibilityFileLoader';
  }

  load(path) {
    // Method: Load
    return new Promise((resolve) => {
      // Call: Load(path)
      resolve({});
    });
  }

};

ax.mojom.AccessibilityFileLoaderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
