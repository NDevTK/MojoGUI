// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuService
viz.mojom.GpuService = {};

viz.mojom.GpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.GpuServiceRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.GpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.GpuServicePendingReceiver,
      handle);
    this.$ = new viz.mojom.GpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.GpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec,
      viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec,
      viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec,
      [client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  setChannelClientPid(client_id, client_pid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.GpuService_SetChannelClientPid_ParamsSpec,
      null,
      null,
      [client_id, client_pid],
      undefined,
      undefined
    );
  }

  setChannelDiskCacheHandle(client_id, cache_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec,
      null,
      null,
      [client_id, cache_handle],
      undefined,
      undefined
    );
  }

  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec,
      null,
      null,
      [client_id, cache_handle, pending_backend],
      undefined,
      undefined
    );
  }

  onDiskCacheHandleDestoyed(cache_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec,
      null,
      null,
      [cache_handle],
      undefined,
      undefined
    );
  }

  closeChannel(client_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.GpuService_CloseChannel_ParamsSpec,
      null,
      null,
      [client_id],
      undefined,
      undefined
    );
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      null,
      [jda],
      undefined,
      undefined
    );
  }

  createJpegEncodeAccelerator(jea) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec,
      null,
      null,
      [jea],
      undefined,
      undefined
    );
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec,
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle],
      undefined,
      undefined
    );
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      null,
      [token],
      undefined,
      undefined
    );
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      null,
      [vea_provider],
      undefined,
      undefined
    );
  }

  bindWebNNContextProvider(receiver, client_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec,
      null,
      null,
      [receiver, client_id],
      undefined,
      undefined
    );
  }

  getVideoMemoryUsageStats() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec,
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec,
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  startPeakMemoryMonitor(sequence_num) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec,
      null,
      null,
      [sequence_num],
      undefined,
      undefined
    );
  }

  getPeakMemoryUsage(sequence_num) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec,
      viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec,
      viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec,
      [sequence_num],
      undefined,
      undefined
    );
  }

  requestDXGIInfo() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec,
      viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec,
      viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  loadedBlob(cache_handle, key, data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.GpuService_LoadedBlob_ParamsSpec,
      null,
      null,
      [cache_handle, key, data],
      undefined,
      undefined
    );
  }

  wakeUpGpu() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.GpuService_WakeUpGpu_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  gpuSwitched() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      viz.mojom.GpuService_GpuSwitched_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  displayAdded() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      viz.mojom.GpuService_DisplayAdded_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  displayRemoved() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      viz.mojom.GpuService_DisplayRemoved_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  displayMetricsChanged() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  destroyAllChannels() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      viz.mojom.GpuService_DestroyAllChannels_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onBackgroundCleanup() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onBackgrounded() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      viz.mojom.GpuService_OnBackgrounded_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onForegrounded() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      viz.mojom.GpuService_OnForegrounded_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  beginCATransaction() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      viz.mojom.GpuService_BeginCATransaction_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  commitCATransaction() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      viz.mojom.GpuService_CommitCATransaction_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  writeClangProfilingProfile() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  getDawnInfo(collect_metrics) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      viz.mojom.GpuService_GetDawnInfo_ParamsSpec,
      viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec,
      viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec,
      [collect_metrics],
      undefined,
      undefined
    );
  }

  crash() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      viz.mojom.GpuService_Crash_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  hang() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      viz.mojom.GpuService_Hang_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  throwJavaException() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      viz.mojom.GpuService_ThrowJavaException_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

viz.mojom.GpuService.getRemote = function() {
  let remote = new viz.mojom.GpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.GpuService',
    'context');
  return remote.$;
};

// ParamsSpec for EstablishGpuChannel
viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.EstablishGpuChannel_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'client_tracing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'is_gpu_host', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_extra_handles_validation', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.EstablishGpuChannel_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'channel_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'gpu_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'gpu_feature_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shared_image_capabilities', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetChannelClientPid
viz.mojom.GpuService_SetChannelClientPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelClientPid_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'client_pid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetChannelDiskCacheHandle
viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelDiskCacheHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cache_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetChannelPersistentCachePendingBackend
viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelPersistentCachePendingBackend_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'cache_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'pending_backend', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnDiskCacheHandleDestoyed
viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.OnDiskCacheHandleDestoyed_Params',
      packedSize: 16,
      fields: [
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseChannel
viz.mojom.GpuService_CloseChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CloseChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateJpegDecodeAccelerator
viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateJpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateJpegEncodeAccelerator
viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateJpegEncodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jea', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterDCOMPSurfaceHandle
viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RegisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RegisterDCOMPSurfaceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterDCOMPSurfaceHandle
viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.UnregisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'vea_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindWebNNContextProvider
viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.BindWebNNContextProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetVideoMemoryUsageStats
viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetVideoMemoryUsageStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetVideoMemoryUsageStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartPeakMemoryMonitor
viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.StartPeakMemoryMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_num', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPeakMemoryUsage
viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetPeakMemoryUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_num', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetPeakMemoryUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'memory_per_allocation_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestDXGIInfo
viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RequestDXGIInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RequestDXGIInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dxgi_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadedBlob
viz.mojom.GpuService_LoadedBlob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.LoadedBlob_Params',
      packedSize: 32,
      fields: [
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for WakeUpGpu
viz.mojom.GpuService_WakeUpGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.WakeUpGpu_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GpuSwitched
viz.mojom.GpuService_GpuSwitched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GpuSwitched_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DisplayAdded
viz.mojom.GpuService_DisplayAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.DisplayAdded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DisplayRemoved
viz.mojom.GpuService_DisplayRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.DisplayRemoved_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DisplayMetricsChanged
viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.DisplayMetricsChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DestroyAllChannels
viz.mojom.GpuService_DestroyAllChannels_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.DestroyAllChannels_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnBackgroundCleanup
viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.OnBackgroundCleanup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnBackgrounded
viz.mojom.GpuService_OnBackgrounded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.OnBackgrounded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnForegrounded
viz.mojom.GpuService_OnForegrounded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.OnForegrounded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BeginCATransaction
viz.mojom.GpuService_BeginCATransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.BeginCATransaction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CommitCATransaction
viz.mojom.GpuService_CommitCATransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CommitCATransaction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for WriteClangProfilingProfile
viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.WriteClangProfilingProfile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetDawnInfo
viz.mojom.GpuService_GetDawnInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetDawnInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'collect_metrics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetDawnInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dawn_info_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Crash
viz.mojom.GpuService_Crash_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.Crash_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Hang
viz.mojom.GpuService_Hang_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.Hang_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ThrowJavaException
viz.mojom.GpuService_ThrowJavaException_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.ThrowJavaException_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
viz.mojom.GpuServicePtr = viz.mojom.GpuServiceRemote;
viz.mojom.GpuServiceRequest = viz.mojom.GpuServicePendingReceiver;

