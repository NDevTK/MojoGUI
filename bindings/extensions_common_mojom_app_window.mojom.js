// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/app_window.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: AppWindow
extensions.mojom.AppWindowPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.AppWindow';
  }

  setVisuallyDeemphasized(deemphasized) {
    // Method: SetVisuallyDeemphasized
    // Call: SetVisuallyDeemphasized(deemphasized)
  }

};

extensions.mojom.AppWindowRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
