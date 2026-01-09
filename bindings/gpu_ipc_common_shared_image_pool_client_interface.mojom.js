// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_pool_client_interface.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Interface: SharedImagePoolClientInterface
gpu.mojom.SharedImagePoolClientInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.SharedImagePoolClientInterface';
  }

  onClearPool() {
    // Method: OnClearPool
    // Call: OnClearPool()
  }

};

gpu.mojom.SharedImagePoolClientInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
