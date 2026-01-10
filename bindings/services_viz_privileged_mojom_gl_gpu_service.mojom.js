// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: GpuService
viz.mojom.mojom.GpuService = {};

viz.mojom.mojom.GpuServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.GpuServiceRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.GpuService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.GpuServicePendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.GpuServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.GpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.GpuService_EstablishGpuChannel_ParamsSpec,
      viz.mojom.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec,
      [client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation]);
  }

  setChannelClientPid(client_id, client_pid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.GpuService_SetChannelClientPid_ParamsSpec,
      null,
      [client_id, client_pid]);
  }

  setChannelDiskCacheHandle(client_id, cache_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec,
      null,
      [client_id, cache_handle]);
  }

  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec,
      null,
      [client_id, cache_handle, pending_backend]);
  }

  onDiskCacheHandleDestoyed(cache_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec,
      null,
      [cache_handle]);
  }

  closeChannel(client_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.mojom.GpuService_CloseChannel_ParamsSpec,
      null,
      [client_id]);
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda]);
  }

  createJpegEncodeAccelerator(jea) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea]);
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec,
      viz.mojom.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle]);
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token]);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [vea_provider]);
  }

  bindWebNNContextProvider(receiver, client_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.mojom.GpuService_BindWebNNContextProvider_ParamsSpec,
      null,
      [receiver, client_id]);
  }

  getVideoMemoryUsageStats() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec,
      viz.mojom.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec,
      []);
  }

  startPeakMemoryMonitor(sequence_num) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec,
      null,
      [sequence_num]);
  }

  getPeakMemoryUsage(sequence_num) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec,
      viz.mojom.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec,
      [sequence_num]);
  }

  requestDXGIInfo() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.mojom.GpuService_RequestDXGIInfo_ParamsSpec,
      viz.mojom.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec,
      []);
  }

  loadedBlob(cache_handle, key, data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.mojom.GpuService_LoadedBlob_ParamsSpec,
      null,
      [cache_handle, key, data]);
  }

  wakeUpGpu() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.mojom.GpuService_WakeUpGpu_ParamsSpec,
      null,
      []);
  }

  gpuSwitched() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      viz.mojom.mojom.GpuService_GpuSwitched_ParamsSpec,
      null,
      []);
  }

  displayAdded() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      viz.mojom.mojom.GpuService_DisplayAdded_ParamsSpec,
      null,
      []);
  }

  displayRemoved() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      viz.mojom.mojom.GpuService_DisplayRemoved_ParamsSpec,
      null,
      []);
  }

  displayMetricsChanged() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      viz.mojom.mojom.GpuService_DisplayMetricsChanged_ParamsSpec,
      null,
      []);
  }

  destroyAllChannels() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      viz.mojom.mojom.GpuService_DestroyAllChannels_ParamsSpec,
      null,
      []);
  }

  onBackgroundCleanup() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      viz.mojom.mojom.GpuService_OnBackgroundCleanup_ParamsSpec,
      null,
      []);
  }

  onBackgrounded() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      viz.mojom.mojom.GpuService_OnBackgrounded_ParamsSpec,
      null,
      []);
  }

  onForegrounded() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      viz.mojom.mojom.GpuService_OnForegrounded_ParamsSpec,
      null,
      []);
  }

  beginCATransaction() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      viz.mojom.mojom.GpuService_BeginCATransaction_ParamsSpec,
      null,
      []);
  }

  commitCATransaction() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      viz.mojom.mojom.GpuService_CommitCATransaction_ParamsSpec,
      null,
      []);
  }

  writeClangProfilingProfile() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      viz.mojom.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec,
      null,
      []);
  }

  getDawnInfo(collect_metrics) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      viz.mojom.mojom.GpuService_GetDawnInfo_ParamsSpec,
      viz.mojom.mojom.GpuService_GetDawnInfo_ResponseParamsSpec,
      [collect_metrics]);
  }

  crash() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      viz.mojom.mojom.GpuService_Crash_ParamsSpec,
      null,
      []);
  }

  hang() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      viz.mojom.mojom.GpuService_Hang_ParamsSpec,
      null,
      []);
  }

  throwJavaException() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      viz.mojom.mojom.GpuService_ThrowJavaException_ParamsSpec,
      null,
      []);
  }

};

viz.mojom.mojom.GpuService.getRemote = function() {
  let remote = new viz.mojom.mojom.GpuServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.GpuService',
    'context');
  return remote.$;
};

// ParamsSpec for EstablishGpuChannel
viz.mojom.mojom.GpuService_EstablishGpuChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.EstablishGpuChannel_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client_tracing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'is_gpu_host', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_extra_handles_validation', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

viz.mojom.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.EstablishGpuChannel_ResponseParams',
      packedSize: 40,
      fields: [
        { name: 'channel_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true, minVersion: 0 },
        { name: 'gpu_info', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.GpuInfoSpec, nullable: false, minVersion: 0 },
        { name: 'gpu_feature_info', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.GpuFeatureInfoSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image_capabilities', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SharedImageCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for SetChannelClientPid
viz.mojom.mojom.GpuService_SetChannelClientPid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelClientPid_Params',
      packedSize: 24,
      fields: [
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'client_pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetChannelDiskCacheHandle
viz.mojom.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelDiskCacheHandle_Params',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuDiskCacheHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetChannelPersistentCachePendingBackend
viz.mojom.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.SetChannelPersistentCachePendingBackend_Params',
      packedSize: 40,
      fields: [
        { name: 'client_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuDiskCacheHandleSpec, nullable: false, minVersion: 0 },
        { name: 'pending_backend', packedOffset: 16, packedBitOffset: 0, type: persistent_cache.mojom.PendingReadWriteBackendSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnDiskCacheHandleDestoyed
viz.mojom.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.OnDiskCacheHandleDestoyed_Params',
      packedSize: 24,
      fields: [
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuDiskCacheHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseChannel
viz.mojom.mojom.GpuService_CloseChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CloseChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateJpegDecodeAccelerator
viz.mojom.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateJpegDecodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jda', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateJpegEncodeAccelerator
viz.mojom.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateJpegEncodeAccelerator_Params',
      packedSize: 16,
      fields: [
        { name: 'jea', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterDCOMPSurfaceHandle
viz.mojom.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RegisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'surface_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RegisterDCOMPSurfaceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterDCOMPSurfaceHandle
viz.mojom.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.UnregisterDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateVideoEncodeAcceleratorProvider
viz.mojom.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.CreateVideoEncodeAcceleratorProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'vea_provider', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindWebNNContextProvider
viz.mojom.mojom.GpuService_BindWebNNContextProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.BindWebNNContextProvider_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'client_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetVideoMemoryUsageStats
viz.mojom.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec = {
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

viz.mojom.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetVideoMemoryUsageStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.VideoMemoryUsageStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartPeakMemoryMonitor
viz.mojom.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.StartPeakMemoryMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_num', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPeakMemoryUsage
viz.mojom.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetPeakMemoryUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_num', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetPeakMemoryUsage_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'memory_usage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'memory_per_allocation_source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(gpu.mojom.GpuPeakMemoryAllocationSourceSpec, mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestDXGIInfo
viz.mojom.mojom.GpuService_RequestDXGIInfo_ParamsSpec = {
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

viz.mojom.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.RequestDXGIInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dxgi_info', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.DXGIInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadedBlob
viz.mojom.mojom.GpuService_LoadedBlob_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.LoadedBlob_Params',
      packedSize: 40,
      fields: [
        { name: 'cache_handle', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.GpuDiskCacheHandleSpec, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for WakeUpGpu
viz.mojom.mojom.GpuService_WakeUpGpu_ParamsSpec = {
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
viz.mojom.mojom.GpuService_GpuSwitched_ParamsSpec = {
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
viz.mojom.mojom.GpuService_DisplayAdded_ParamsSpec = {
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
viz.mojom.mojom.GpuService_DisplayRemoved_ParamsSpec = {
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
viz.mojom.mojom.GpuService_DisplayMetricsChanged_ParamsSpec = {
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
viz.mojom.mojom.GpuService_DestroyAllChannels_ParamsSpec = {
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
viz.mojom.mojom.GpuService_OnBackgroundCleanup_ParamsSpec = {
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
viz.mojom.mojom.GpuService_OnBackgrounded_ParamsSpec = {
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
viz.mojom.mojom.GpuService_OnForegrounded_ParamsSpec = {
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
viz.mojom.mojom.GpuService_BeginCATransaction_ParamsSpec = {
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
viz.mojom.mojom.GpuService_CommitCATransaction_ParamsSpec = {
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
viz.mojom.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec = {
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
viz.mojom.mojom.GpuService_GetDawnInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetDawnInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'collect_metrics', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

viz.mojom.mojom.GpuService_GetDawnInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.GpuService.GetDawnInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dawn_info_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Crash
viz.mojom.mojom.GpuService_Crash_ParamsSpec = {
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
viz.mojom.mojom.GpuService_Hang_ParamsSpec = {
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
viz.mojom.mojom.GpuService_ThrowJavaException_ParamsSpec = {
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
viz.mojom.mojom.GpuServicePtr = viz.mojom.mojom.GpuServiceRemote;
viz.mojom.mojom.GpuServiceRequest = viz.mojom.mojom.GpuServicePendingReceiver;

