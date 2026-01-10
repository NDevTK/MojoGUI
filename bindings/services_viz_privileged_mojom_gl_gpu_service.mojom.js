// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var persistent_cache = persistent_cache || {};
var gpu = gpu || {};
var media = media || {};
var mojo_base = mojo_base || {};
var webnn = webnn || {};
var gfx = gfx || {};
var gl = gl || {};
var arc = arc || {};
var chromeos_camera = chromeos_camera || {};

viz.mojom.GpuService = {};
viz.mojom.GpuService.$interfaceName = 'viz.mojom.GpuService';
viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec = { $: {} };
viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_SetChannelClientPid_ParamsSpec = { $: {} };
viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec = { $: {} };
viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec = { $: {} };
viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec = { $: {} };
viz.mojom.GpuService_CloseChannel_ParamsSpec = { $: {} };
viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec = { $: {} };
viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec = { $: {} };
viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };
viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };
viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec = { $: {} };
viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec = { $: {} };
viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec = { $: {} };
viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec = { $: {} };
viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec = { $: {} };
viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec = { $: {} };
viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_LoadedBlob_ParamsSpec = { $: {} };
viz.mojom.GpuService_WakeUpGpu_ParamsSpec = { $: {} };
viz.mojom.GpuService_GpuSwitched_ParamsSpec = { $: {} };
viz.mojom.GpuService_DisplayAdded_ParamsSpec = { $: {} };
viz.mojom.GpuService_DisplayRemoved_ParamsSpec = { $: {} };
viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec = { $: {} };
viz.mojom.GpuService_DestroyAllChannels_ParamsSpec = { $: {} };
viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec = { $: {} };
viz.mojom.GpuService_OnBackgrounded_ParamsSpec = { $: {} };
viz.mojom.GpuService_OnForegrounded_ParamsSpec = { $: {} };
viz.mojom.GpuService_BeginCATransaction_ParamsSpec = { $: {} };
viz.mojom.GpuService_CommitCATransaction_ParamsSpec = { $: {} };
viz.mojom.GpuService_CommitCATransaction_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec = { $: {} };
viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_GetDawnInfo_ParamsSpec = { $: {} };
viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec = { $: {} };
viz.mojom.GpuService_Crash_ParamsSpec = { $: {} };
viz.mojom.GpuService_Hang_ParamsSpec = { $: {} };
viz.mojom.GpuService_ThrowJavaException_ParamsSpec = { $: {} };

// Interface: GpuService
mojo.internal.Struct(
    viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec, 'viz.mojom.GpuService_EstablishGpuChannel_Params', [
      mojo.internal.StructField('client_tracing_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_gpu_host', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_extra_handles_validation', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec, 'viz.mojom.GpuService_EstablishGpuChannel_ResponseParams', [
      mojo.internal.StructField('channel_handle', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('gpu_info', 8, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_feature_info', 16, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_image_capabilities', 24, 0, gpu.mojom.SharedImageCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    viz.mojom.GpuService_SetChannelClientPid_ParamsSpec, 'viz.mojom.GpuService_SetChannelClientPid_Params', [
      mojo.internal.StructField('client_pid', 0, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec, 'viz.mojom.GpuService_SetChannelDiskCacheHandle_Params', [
      mojo.internal.StructField('cache_handle', 0, 0, gpu.mojom.GpuDiskCacheHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec, 'viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_Params', [
      mojo.internal.StructField('cache_handle', 0, 0, gpu.mojom.GpuDiskCacheHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pending_backend', 8, 0, persistent_cache.mojom.PendingReadWriteBackendSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec, 'viz.mojom.GpuService_OnDiskCacheHandleDestoyed_Params', [
      mojo.internal.StructField('cache_handle', 0, 0, gpu.mojom.GpuDiskCacheHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CloseChannel_ParamsSpec, 'viz.mojom.GpuService_CloseChannel_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec, 'viz.mojom.GpuService_CreateJpegDecodeAccelerator_Params', [
      mojo.internal.StructField('jda', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.MjpegDecodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec, 'viz.mojom.GpuService_CreateJpegEncodeAccelerator_Params', [
      mojo.internal.StructField('jea', 0, 0, mojo.internal.InterfaceRequest(chromeos_camera.mojom.JpegEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec, 'viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('surface_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec, 'viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec, 'viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec, 'viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_Params', [
      mojo.internal.StructField('vea_provider', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoEncodeAcceleratorProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec, 'viz.mojom.GpuService_BindWebNNContextProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(webnn.mojom.WebNNContextProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec, 'viz.mojom.GpuService_GetVideoMemoryUsageStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec, 'viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParams', [
      mojo.internal.StructField('stats', 0, 0, gpu.mojom.VideoMemoryUsageStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec, 'viz.mojom.GpuService_StartPeakMemoryMonitor_Params', [
      mojo.internal.StructField('sequence_num', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec, 'viz.mojom.GpuService_GetPeakMemoryUsage_Params', [
      mojo.internal.StructField('sequence_num', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec, 'viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParams', [
      mojo.internal.StructField('memory_usage', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('memory_per_allocation_source', 8, 0, mojo.internal.Map(gpu.mojom.GpuPeakMemoryAllocationSourceSpec.$, mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec, 'viz.mojom.GpuService_RequestDXGIInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec, 'viz.mojom.GpuService_RequestDXGIInfo_ResponseParams', [
      mojo.internal.StructField('dxgi_info', 0, 0, gfx.mojom.DXGIInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_LoadedBlob_ParamsSpec, 'viz.mojom.GpuService_LoadedBlob_Params', [
      mojo.internal.StructField('cache_handle', 0, 0, gpu.mojom.GpuDiskCacheHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.GpuService_WakeUpGpu_ParamsSpec, 'viz.mojom.GpuService_WakeUpGpu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GpuSwitched_ParamsSpec, 'viz.mojom.GpuService_GpuSwitched_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_DisplayAdded_ParamsSpec, 'viz.mojom.GpuService_DisplayAdded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_DisplayRemoved_ParamsSpec, 'viz.mojom.GpuService_DisplayRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec, 'viz.mojom.GpuService_DisplayMetricsChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_DestroyAllChannels_ParamsSpec, 'viz.mojom.GpuService_DestroyAllChannels_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec, 'viz.mojom.GpuService_OnBackgroundCleanup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_OnBackgrounded_ParamsSpec, 'viz.mojom.GpuService_OnBackgrounded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_OnForegrounded_ParamsSpec, 'viz.mojom.GpuService_OnForegrounded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_BeginCATransaction_ParamsSpec, 'viz.mojom.GpuService_BeginCATransaction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CommitCATransaction_ParamsSpec, 'viz.mojom.GpuService_CommitCATransaction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_CommitCATransaction_ResponseParamsSpec, 'viz.mojom.GpuService_CommitCATransaction_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec, 'viz.mojom.GpuService_WriteClangProfilingProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParamsSpec, 'viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetDawnInfo_ParamsSpec, 'viz.mojom.GpuService_GetDawnInfo_Params', [
      mojo.internal.StructField('collect_metrics', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec, 'viz.mojom.GpuService_GetDawnInfo_ResponseParams', [
      mojo.internal.StructField('dawn_info_list', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuService_Crash_ParamsSpec, 'viz.mojom.GpuService_Crash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_Hang_ParamsSpec, 'viz.mojom.GpuService_Hang_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuService_ThrowJavaException_ParamsSpec, 'viz.mojom.GpuService_ThrowJavaException_Params', [
    ],
    [[0, 8]]);

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
      [client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation],
      false);
  }

  setChannelClientPid(client_id, client_pid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.GpuService_SetChannelClientPid_ParamsSpec,
      null,
      [client_id, client_pid],
      false);
  }

  setChannelDiskCacheHandle(client_id, cache_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec,
      null,
      [client_id, cache_handle],
      false);
  }

  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec,
      null,
      [client_id, cache_handle, pending_backend],
      false);
  }

  onDiskCacheHandleDestoyed(cache_handle) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec,
      null,
      [cache_handle],
      false);
  }

  closeChannel(client_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.GpuService_CloseChannel_ParamsSpec,
      null,
      [client_id],
      false);
  }

  createJpegDecodeAccelerator(jda) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

  createJpegEncodeAccelerator(jea) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea],
      false);
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec,
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle],
      false);
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token],
      false);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [vea_provider],
      false);
  }

  bindWebNNContextProvider(receiver, client_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec,
      null,
      [receiver, client_id],
      false);
  }

  getVideoMemoryUsageStats() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec,
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec,
      [],
      false);
  }

  startPeakMemoryMonitor(sequence_num) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec,
      null,
      [sequence_num],
      false);
  }

  getPeakMemoryUsage(sequence_num) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec,
      viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec,
      [sequence_num],
      false);
  }

  requestDXGIInfo() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec,
      viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec,
      [],
      false);
  }

  loadedBlob(cache_handle, key, data) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.GpuService_LoadedBlob_ParamsSpec,
      null,
      [cache_handle, key, data],
      false);
  }

  wakeUpGpu() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      viz.mojom.GpuService_WakeUpGpu_ParamsSpec,
      null,
      [],
      false);
  }

  gpuSwitched() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      viz.mojom.GpuService_GpuSwitched_ParamsSpec,
      null,
      [],
      false);
  }

  displayAdded() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      viz.mojom.GpuService_DisplayAdded_ParamsSpec,
      null,
      [],
      false);
  }

  displayRemoved() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      viz.mojom.GpuService_DisplayRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  displayMetricsChanged() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec,
      null,
      [],
      false);
  }

  destroyAllChannels() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      viz.mojom.GpuService_DestroyAllChannels_ParamsSpec,
      null,
      [],
      false);
  }

  onBackgroundCleanup() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec,
      null,
      [],
      false);
  }

  onBackgrounded() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      viz.mojom.GpuService_OnBackgrounded_ParamsSpec,
      null,
      [],
      false);
  }

  onForegrounded() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      viz.mojom.GpuService_OnForegrounded_ParamsSpec,
      null,
      [],
      false);
  }

  beginCATransaction() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      viz.mojom.GpuService_BeginCATransaction_ParamsSpec,
      null,
      [],
      false);
  }

  commitCATransaction() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      viz.mojom.GpuService_CommitCATransaction_ParamsSpec,
      viz.mojom.GpuService_CommitCATransaction_ResponseParamsSpec,
      [],
      false);
  }

  writeClangProfilingProfile() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec,
      viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  getDawnInfo(collect_metrics) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      viz.mojom.GpuService_GetDawnInfo_ParamsSpec,
      viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec,
      [collect_metrics],
      false);
  }

  crash() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      viz.mojom.GpuService_Crash_ParamsSpec,
      null,
      [],
      false);
  }

  hang() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      viz.mojom.GpuService_Hang_ParamsSpec,
      null,
      [],
      false);
  }

  throwJavaException() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      viz.mojom.GpuService_ThrowJavaException_ParamsSpec,
      null,
      [],
      false);
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

viz.mojom.GpuServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
    this.ordinalMap.set(32, 32); // Default ordinal 32 -> Index 32
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EstablishGpuChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EstablishGpuChannel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetChannelClientPid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_SetChannelClientPid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetChannelClientPid (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetChannelDiskCacheHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetChannelDiskCacheHandle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetChannelPersistentCachePendingBackend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetChannelPersistentCachePendingBackend (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnDiskCacheHandleDestoyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDiskCacheHandleDestoyed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_CloseChannel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseChannel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateJpegDecodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateJpegDecodeAccelerator (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateJpegEncodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateJpegEncodeAccelerator (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RegisterDCOMPSurfaceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDCOMPSurfaceHandle (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UnregisterDCOMPSurfaceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterDCOMPSurfaceHandle (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateVideoEncodeAcceleratorProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoEncodeAcceleratorProvider (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: BindWebNNContextProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebNNContextProvider (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetVideoMemoryUsageStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoMemoryUsageStats (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: StartPeakMemoryMonitor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPeakMemoryMonitor (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetPeakMemoryUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPeakMemoryUsage (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RequestDXGIInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDXGIInfo (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: LoadedBlob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_LoadedBlob_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadedBlob (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: WakeUpGpu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_WakeUpGpu_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WakeUpGpu (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GpuSwitched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_GpuSwitched_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GpuSwitched (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: DisplayAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_DisplayAdded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayAdded (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: DisplayRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_DisplayRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayRemoved (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: DisplayMetricsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayMetricsChanged (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: DestroyAllChannels
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_DestroyAllChannels_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyAllChannels (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OnBackgroundCleanup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackgroundCleanup (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: OnBackgrounded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_OnBackgrounded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackgrounded (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: OnForegrounded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_OnForegrounded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnForegrounded (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: BeginCATransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_BeginCATransaction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginCATransaction (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: CommitCATransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_CommitCATransaction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitCATransaction (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: WriteClangProfilingProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteClangProfilingProfile (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: GetDawnInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_GetDawnInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDawnInfo (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: Crash
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_Crash_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Crash (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: Hang
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_Hang_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Hang (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: ThrowJavaException
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(viz.mojom.GpuService_ThrowJavaException_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThrowJavaException (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.establishGpuChannel');
          const result = this.impl.establishGpuChannel(params.client_id, params.client_tracing_id, params.is_gpu_host, params.enable_extra_handles_validation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_SetChannelClientPid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setChannelClientPid');
          const result = this.impl.setChannelClientPid(params.client_id, params.client_pid);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setChannelDiskCacheHandle');
          const result = this.impl.setChannelDiskCacheHandle(params.client_id, params.cache_handle);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setChannelPersistentCachePendingBackend');
          const result = this.impl.setChannelPersistentCachePendingBackend(params.client_id, params.cache_handle, params.pending_backend);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDiskCacheHandleDestoyed');
          const result = this.impl.onDiskCacheHandleDestoyed(params.cache_handle);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_CloseChannel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeChannel');
          const result = this.impl.closeChannel(params.client_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createJpegDecodeAccelerator');
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createJpegEncodeAccelerator');
          const result = this.impl.createJpegEncodeAccelerator(params.jea);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerDCOMPSurfaceHandle');
          const result = this.impl.registerDCOMPSurfaceHandle(params.surface_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unregisterDCOMPSurfaceHandle');
          const result = this.impl.unregisterDCOMPSurfaceHandle(params.token);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createVideoEncodeAcceleratorProvider');
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.vea_provider);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindWebNNContextProvider');
          const result = this.impl.bindWebNNContextProvider(params.receiver, params.client_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getVideoMemoryUsageStats');
          const result = this.impl.getVideoMemoryUsageStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startPeakMemoryMonitor');
          const result = this.impl.startPeakMemoryMonitor(params.sequence_num);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getPeakMemoryUsage');
          const result = this.impl.getPeakMemoryUsage(params.sequence_num);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestDXGIInfo');
          const result = this.impl.requestDXGIInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_LoadedBlob_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadedBlob');
          const result = this.impl.loadedBlob(params.cache_handle, params.key, params.data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_WakeUpGpu_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.wakeUpGpu');
          const result = this.impl.wakeUpGpu();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_GpuSwitched_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.gpuSwitched');
          const result = this.impl.gpuSwitched();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_DisplayAdded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayAdded');
          const result = this.impl.displayAdded();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_DisplayRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayRemoved');
          const result = this.impl.displayRemoved();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayMetricsChanged');
          const result = this.impl.displayMetricsChanged();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_DestroyAllChannels_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.destroyAllChannels');
          const result = this.impl.destroyAllChannels();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackgroundCleanup');
          const result = this.impl.onBackgroundCleanup();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_OnBackgrounded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBackgrounded');
          const result = this.impl.onBackgrounded();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_OnForegrounded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onForegrounded');
          const result = this.impl.onForegrounded();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_BeginCATransaction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginCATransaction');
          const result = this.impl.beginCATransaction();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_CommitCATransaction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.commitCATransaction');
          const result = this.impl.commitCATransaction();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_CommitCATransaction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeClangProfilingProfile');
          const result = this.impl.writeClangProfilingProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_GetDawnInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDawnInfo');
          const result = this.impl.getDawnInfo(params.collect_metrics);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_Crash_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.crash');
          const result = this.impl.crash();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_Hang_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hang');
          const result = this.impl.hang();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuService_ThrowJavaException_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.throwJavaException');
          const result = this.impl.throwJavaException();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.GpuServiceReceiver = viz.mojom.GpuServiceReceiver;

viz.mojom.GpuServicePtr = viz.mojom.GpuServiceRemote;
viz.mojom.GpuServiceRequest = viz.mojom.GpuServicePendingReceiver;

