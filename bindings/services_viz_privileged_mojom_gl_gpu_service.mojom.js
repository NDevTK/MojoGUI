// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var components = components || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var components = components || {};
var components = components || {};
var ui = ui || {};
var gfx = gfx || {};

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

viz.mojom.GpuServicePtr = viz.mojom.GpuServiceRemote;
viz.mojom.GpuServiceRequest = viz.mojom.GpuServicePendingReceiver;

