// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/info_collection_gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: InfoCollectionGpuService
viz.mojom.mojom.InfoCollectionGpuService = {};

viz.mojom.mojom.InfoCollectionGpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.InfoCollectionGpuServiceRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.InfoCollectionGpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.InfoCollectionGpuServicePendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.InfoCollectionGpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.InfoCollectionGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getGpuSupportedDirectXVersionAndDevicePerfInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec,
      viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec,
      []);
  }

  getGpuSupportedVulkanVersionInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec,
      viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec,
      []);
  }

};

viz.mojom.mojom.InfoCollectionGpuService.getRemote = function() {
  let remote = new viz.mojom.mojom.InfoCollectionGpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.InfoCollectionGpuService',
    'context');
  return remote.$;
};

// ParamsSpec for GetGpuSupportedDirectXVersionAndDevicePerfInfo
viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InfoCollectionGpuService.GetGpuSupportedDirectXVersionAndDevicePerfInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InfoCollectionGpuService.GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'd3d12_feature_level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'highest_shader_model_version', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'directml_feature_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_perf_info', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.DevicePerfInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetGpuSupportedVulkanVersionInfo
viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InfoCollectionGpuService.GetGpuSupportedVulkanVersionInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InfoCollectionGpuService.GetGpuSupportedVulkanVersionInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'vulkan_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.InfoCollectionGpuServicePtr = viz.mojom.mojom.InfoCollectionGpuServiceRemote;
viz.mojom.mojom.InfoCollectionGpuServiceRequest = viz.mojom.mojom.InfoCollectionGpuServicePendingReceiver;

