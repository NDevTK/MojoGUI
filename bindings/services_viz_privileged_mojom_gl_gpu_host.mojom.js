// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_host.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuHost
viz.mojom.GpuHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.GpuHost';
  }

  didInitialize(gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info) {
    // Method: DidInitialize
    // Call: DidInitialize(gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info)
  }

  didFailInitialize() {
    // Method: DidFailInitialize
    // Call: DidFailInitialize()
  }

  didCreateContextSuccessfully() {
    // Method: DidCreateContextSuccessfully
    // Call: DidCreateContextSuccessfully()
  }

  didCreateOffscreenContext(url) {
    // Method: DidCreateOffscreenContext
    // Call: DidCreateOffscreenContext(url)
  }

  didDestroyOffscreenContext(url) {
    // Method: DidDestroyOffscreenContext
    // Call: DidDestroyOffscreenContext(url)
  }

  didDestroyChannel(client_id) {
    // Method: DidDestroyChannel
    // Call: DidDestroyChannel(client_id)
  }

  didDestroyAllChannels() {
    // Method: DidDestroyAllChannels
    // Call: DidDestroyAllChannels()
  }

  didLoseContext(reason, active_url) {
    // Method: DidLoseContext
    // Call: DidLoseContext(reason, active_url)
  }

  didUpdateGPUInfo(gpu_info) {
    // Method: DidUpdateGPUInfo
    // Call: DidUpdateGPUInfo(gpu_info)
  }

  didUpdateOverlayInfo(overlay_info) {
    // Method: DidUpdateOverlayInfo
    // Call: DidUpdateOverlayInfo(overlay_info)
  }

  didUpdateDXGIInfo(dxgi_info) {
    // Method: DidUpdateDXGIInfo
    // Call: DidUpdateDXGIInfo(dxgi_info)
  }

  disableGpuCompositing() {
    // Method: DisableGpuCompositing
    // Call: DisableGpuCompositing()
  }

  getIsolationKey(client_id, wgpu_context_token) {
    // Method: GetIsolationKey
    return new Promise((resolve) => {
      // Call: GetIsolationKey(client_id, wgpu_context_token)
      resolve({});
    });
  }

  storeBlobToDisk(cache_handle, key, blob) {
    // Method: StoreBlobToDisk
    // Call: StoreBlobToDisk(cache_handle, key, blob)
  }

  clearGrShaderDiskCache() {
    // Method: ClearGrShaderDiskCache
    // Call: ClearGrShaderDiskCache()
  }

  ensureWebNNExecutionProvidersReady() {
    // Method: EnsureWebNNExecutionProvidersReady
    return new Promise((resolve) => {
      // Call: EnsureWebNNExecutionProvidersReady()
      resolve({});
    });
  }

  createWebNNWeightsFile() {
    // Method: CreateWebNNWeightsFile
    return new Promise((resolve) => {
      // Call: CreateWebNNWeightsFile()
      resolve({});
    });
  }

};

viz.mojom.GpuHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
