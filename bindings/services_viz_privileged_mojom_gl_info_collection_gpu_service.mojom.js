// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/info_collection_gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.InfoCollectionGpuService = {};
viz.mojom.InfoCollectionGpuService.$interfaceName = 'viz.mojom.InfoCollectionGpuService';
viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec = { $: {} };
viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec = { $: {} };
viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec = { $: {} };
viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec = { $: {} };

// Interface: InfoCollectionGpuService
mojo.internal.Struct(
    viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec, 'viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec, 'viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParams', [
      mojo.internal.StructField('device_perf_info', 0, 0, gpu.mojom.DevicePerfInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('d3d12_feature_level', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('highest_shader_model_version', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('directml_feature_level', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec, 'viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec, 'viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParams', [
      mojo.internal.StructField('vulkan_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.InfoCollectionGpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.InfoCollectionGpuServiceRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.InfoCollectionGpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.InfoCollectionGpuServicePendingReceiver,
      handle);
    this.$ = new viz.mojom.InfoCollectionGpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.InfoCollectionGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getGpuSupportedDirectXVersionAndDevicePerfInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec,
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec,
      [],
      false);
  }

  getGpuSupportedVulkanVersionInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec,
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec,
      [],
      false);
  }

};

viz.mojom.InfoCollectionGpuService.getRemote = function() {
  let remote = new viz.mojom.InfoCollectionGpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.InfoCollectionGpuService',
    'context');
  return remote.$;
};

viz.mojom.InfoCollectionGpuServicePtr = viz.mojom.InfoCollectionGpuServiceRemote;
viz.mojom.InfoCollectionGpuServiceRequest = viz.mojom.InfoCollectionGpuServicePendingReceiver;

