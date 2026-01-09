// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_host.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuHost
viz.mojom.GpuHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.GpuHostRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.GpuHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.GpuHostPendingReceiver,
      handle);
    this.$ = new viz.mojom.GpuHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.GpuHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didInitialize(gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.GpuHost_DidInitialize_ParamsSpec.$,
      null,
      [gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info]);
  }

  didFailInitialize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.GpuHost_DidFailInitialize_ParamsSpec.$,
      null,
      []);
  }

  didCreateContextSuccessfully() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec.$,
      null,
      []);
  }

  didCreateOffscreenContext(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec.$,
      null,
      [url]);
  }

  didDestroyOffscreenContext(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec.$,
      null,
      [url]);
  }

  didDestroyChannel(client_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec.$,
      null,
      [client_id]);
  }

  didDestroyAllChannels() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec.$,
      null,
      []);
  }

  didLoseContext(reason, active_url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.GpuHost_DidLoseContext_ParamsSpec.$,
      null,
      [reason, active_url]);
  }

  didUpdateGPUInfo(gpu_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec.$,
      null,
      [gpu_info]);
  }

  didUpdateOverlayInfo(overlay_info) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec.$,
      null,
      [overlay_info]);
  }

  didUpdateDXGIInfo(dxgi_info) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec.$,
      null,
      [dxgi_info]);
  }

  disableGpuCompositing() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec.$,
      null,
      []);
  }

  getIsolationKey(client_id, wgpu_context_token) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.GpuHost_GetIsolationKey_ParamsSpec.$,
      viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec.$,
      [client_id, wgpu_context_token]);
  }

  storeBlobToDisk(cache_handle, key, blob) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec.$,
      null,
      [cache_handle, key, blob]);
  }

  clearGrShaderDiskCache() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec.$,
      null,
      []);
  }

  ensureWebNNExecutionProvidersReady() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec.$,
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec.$,
      []);
  }

  createWebNNWeightsFile() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec.$,
      viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec.$,
      []);
  }

};

viz.mojom.GpuHost.getRemote = function() {
  let remote = new viz.mojom.GpuHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.GpuHost',
    'context');
  return remote.$;
};

// ParamsSpec for DidInitialize
viz.mojom.GpuHost_DidInitialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidInitialize_Params',
      packedSize: 48,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'gpu_feature_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'gpu_info_for_hardware_gpu', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'gpu_feature_info_for_hardware_gpu', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'gpu_extra_info', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidFailInitialize
viz.mojom.GpuHost_DidFailInitialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidFailInitialize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCreateContextSuccessfully
viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidCreateContextSuccessfully_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCreateOffscreenContext
viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidCreateOffscreenContext_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidDestroyOffscreenContext
viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidDestroyOffscreenContext_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidDestroyChannel
viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidDestroyChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidDestroyAllChannels
viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidDestroyAllChannels_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidLoseContext
viz.mojom.GpuHost_DidLoseContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidLoseContext_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'active_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidUpdateGPUInfo
viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidUpdateGPUInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'gpu_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidUpdateOverlayInfo
viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidUpdateOverlayInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'overlay_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidUpdateDXGIInfo
viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DidUpdateDXGIInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'dxgi_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableGpuCompositing
viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.DisableGpuCompositing_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsolationKey
viz.mojom.GpuHost_GetIsolationKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.GetIsolationKey_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'wgpu_context_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.GetIsolationKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'isolation_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StoreBlobToDisk
viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.StoreBlobToDisk_Params',
      packedSize: 32,
      fields: [
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearGrShaderDiskCache
viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.ClearGrShaderDiskCache_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnsureWebNNExecutionProvidersReady
viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.EnsureWebNNExecutionProvidersReady_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.EnsureWebNNExecutionProvidersReady_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ep_package_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateWebNNWeightsFile
viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.CreateWebNNWeightsFile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuHost.CreateWebNNWeightsFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.GpuHostPtr = viz.mojom.GpuHostRemote;
viz.mojom.GpuHostRequest = viz.mojom.GpuHostPendingReceiver;

