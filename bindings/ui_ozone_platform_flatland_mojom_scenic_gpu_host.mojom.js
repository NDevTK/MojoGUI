// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/flatland/mojom/scenic_gpu_host.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Interface: ScenicGpuHost
ui.mojom.ScenicGpuHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.mojom.ScenicGpuHost';
  }

  attachSurfaceToWindow(window_id, view_holder_token) {
    // Method: AttachSurfaceToWindow
    // Call: AttachSurfaceToWindow(window_id, view_holder_token)
  }

};

ui.mojom.ScenicGpuHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
