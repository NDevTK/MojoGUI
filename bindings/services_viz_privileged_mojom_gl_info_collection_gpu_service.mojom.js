// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/info_collection_gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: InfoCollectionGpuService
viz.mojom.InfoCollectionGpuServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.InfoCollectionGpuService';
  }

  getGpuSupportedDirectXVersionAndDevicePerfInfo() {
    // Method: GetGpuSupportedDirectXVersionAndDevicePerfInfo
    return new Promise((resolve) => {
      // Call: GetGpuSupportedDirectXVersionAndDevicePerfInfo()
      resolve({});
    });
  }

  getGpuSupportedVulkanVersionInfo() {
    // Method: GetGpuSupportedVulkanVersionInfo
    return new Promise((resolve) => {
      // Call: GetGpuSupportedVulkanVersionInfo()
      resolve({});
    });
  }

};

viz.mojom.InfoCollectionGpuServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
