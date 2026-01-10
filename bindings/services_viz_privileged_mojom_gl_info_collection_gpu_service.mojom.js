// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/info_collection_gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};

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

viz.mojom.InfoCollectionGpuServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGpuSupportedDirectXVersionAndDevicePerfInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGpuSupportedVulkanVersionInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

viz.mojom.InfoCollectionGpuServiceReceiver = viz.mojom.InfoCollectionGpuServiceReceiver;

viz.mojom.InfoCollectionGpuServicePtr = viz.mojom.InfoCollectionGpuServiceRemote;
viz.mojom.InfoCollectionGpuServiceRequest = viz.mojom.InfoCollectionGpuServicePendingReceiver;

