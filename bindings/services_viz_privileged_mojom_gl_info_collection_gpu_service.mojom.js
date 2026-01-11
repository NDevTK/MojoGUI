// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/info_collection_gpu_service.mojom
// Module: viz.mojom

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
  getGpuSupportedDirectXVersionAndDevicePerfInfo() {
    return this.$.getGpuSupportedDirectXVersionAndDevicePerfInfo();
  }
  getGpuSupportedVulkanVersionInfo() {
    return this.$.getGpuSupportedVulkanVersionInfo();
  }
};

viz.mojom.InfoCollectionGpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InfoCollectionGpuService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getGpuSupportedDirectXVersionAndDevicePerfInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec,
      viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec,
      [],
      false);
  }

  getGpuSupportedVulkanVersionInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InfoCollectionGpuService', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getGpuSupportedDirectXVersionAndDevicePerfInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.InfoCollectionGpuService_GetGpuSupportedDirectXVersionAndDevicePerfInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getGpuSupportedVulkanVersionInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.InfoCollectionGpuService_GetGpuSupportedVulkanVersionInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.InfoCollectionGpuServiceReceiver = viz.mojom.InfoCollectionGpuServiceReceiver;

viz.mojom.InfoCollectionGpuServicePtr = viz.mojom.InfoCollectionGpuServiceRemote;
viz.mojom.InfoCollectionGpuServiceRequest = viz.mojom.InfoCollectionGpuServicePendingReceiver;

