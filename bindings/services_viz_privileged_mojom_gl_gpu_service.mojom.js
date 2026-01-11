// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation) {
    return this.$.establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation);
  }
  setChannelClientPid(client_id, client_pid) {
    return this.$.setChannelClientPid(client_id, client_pid);
  }
  setChannelDiskCacheHandle(client_id, cache_handle) {
    return this.$.setChannelDiskCacheHandle(client_id, cache_handle);
  }
  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    return this.$.setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend);
  }
  onDiskCacheHandleDestoyed(cache_handle) {
    return this.$.onDiskCacheHandleDestoyed(cache_handle);
  }
  closeChannel(client_id) {
    return this.$.closeChannel(client_id);
  }
  createJpegDecodeAccelerator(jda) {
    return this.$.createJpegDecodeAccelerator(jda);
  }
  createJpegEncodeAccelerator(jea) {
    return this.$.createJpegEncodeAccelerator(jea);
  }
  registerDCOMPSurfaceHandle(surface_handle) {
    return this.$.registerDCOMPSurfaceHandle(surface_handle);
  }
  unregisterDCOMPSurfaceHandle(token) {
    return this.$.unregisterDCOMPSurfaceHandle(token);
  }
  createVideoEncodeAcceleratorProvider(vea_provider) {
    return this.$.createVideoEncodeAcceleratorProvider(vea_provider);
  }
  bindWebNNContextProvider(receiver, client_id) {
    return this.$.bindWebNNContextProvider(receiver, client_id);
  }
  getVideoMemoryUsageStats() {
    return this.$.getVideoMemoryUsageStats();
  }
  startPeakMemoryMonitor(sequence_num) {
    return this.$.startPeakMemoryMonitor(sequence_num);
  }
  getPeakMemoryUsage(sequence_num) {
    return this.$.getPeakMemoryUsage(sequence_num);
  }
  requestDXGIInfo() {
    return this.$.requestDXGIInfo();
  }
  loadedBlob(cache_handle, key, data) {
    return this.$.loadedBlob(cache_handle, key, data);
  }
  wakeUpGpu() {
    return this.$.wakeUpGpu();
  }
  gpuSwitched() {
    return this.$.gpuSwitched();
  }
  displayAdded() {
    return this.$.displayAdded();
  }
  displayRemoved() {
    return this.$.displayRemoved();
  }
  displayMetricsChanged() {
    return this.$.displayMetricsChanged();
  }
  destroyAllChannels() {
    return this.$.destroyAllChannels();
  }
  onBackgroundCleanup() {
    return this.$.onBackgroundCleanup();
  }
  onBackgrounded() {
    return this.$.onBackgrounded();
  }
  onForegrounded() {
    return this.$.onForegrounded();
  }
  beginCATransaction() {
    return this.$.beginCATransaction();
  }
  commitCATransaction() {
    return this.$.commitCATransaction();
  }
  writeClangProfilingProfile() {
    return this.$.writeClangProfilingProfile();
  }
  getDawnInfo(collect_metrics) {
    return this.$.getDawnInfo(collect_metrics);
  }
  crash() {
    return this.$.crash();
  }
  hang() {
    return this.$.hang();
  }
  throwJavaException() {
    return this.$.throwJavaException();
  }
};

viz.mojom.GpuServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec,
      viz.mojom.GpuService_EstablishGpuChannel_ResponseParamsSpec,
      [client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation],
      false);
  }

  setChannelClientPid(client_id, client_pid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.GpuService_SetChannelClientPid_ParamsSpec,
      null,
      [client_id, client_pid],
      false);
  }

  setChannelDiskCacheHandle(client_id, cache_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec,
      null,
      [client_id, cache_handle],
      false);
  }

  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec,
      null,
      [client_id, cache_handle, pending_backend],
      false);
  }

  onDiskCacheHandleDestoyed(cache_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec,
      null,
      [cache_handle],
      false);
  }

  closeChannel(client_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.GpuService_CloseChannel_ParamsSpec,
      null,
      [client_id],
      false);
  }

  createJpegDecodeAccelerator(jda) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec,
      null,
      [jda],
      false);
  }

  createJpegEncodeAccelerator(jea) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec,
      null,
      [jea],
      false);
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec,
      viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle],
      false);
  }

  unregisterDCOMPSurfaceHandle(token) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token],
      false);
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec,
      null,
      [vea_provider],
      false);
  }

  bindWebNNContextProvider(receiver, client_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec,
      null,
      [receiver, client_id],
      false);
  }

  getVideoMemoryUsageStats() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec,
      viz.mojom.GpuService_GetVideoMemoryUsageStats_ResponseParamsSpec,
      [],
      false);
  }

  startPeakMemoryMonitor(sequence_num) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec,
      null,
      [sequence_num],
      false);
  }

  getPeakMemoryUsage(sequence_num) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec,
      viz.mojom.GpuService_GetPeakMemoryUsage_ResponseParamsSpec,
      [sequence_num],
      false);
  }

  requestDXGIInfo() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec,
      viz.mojom.GpuService_RequestDXGIInfo_ResponseParamsSpec,
      [],
      false);
  }

  loadedBlob(cache_handle, key, data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      viz.mojom.GpuService_LoadedBlob_ParamsSpec,
      null,
      [cache_handle, key, data],
      false);
  }

  wakeUpGpu() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      viz.mojom.GpuService_WakeUpGpu_ParamsSpec,
      null,
      [],
      false);
  }

  gpuSwitched() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      viz.mojom.GpuService_GpuSwitched_ParamsSpec,
      null,
      [],
      false);
  }

  displayAdded() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      viz.mojom.GpuService_DisplayAdded_ParamsSpec,
      null,
      [],
      false);
  }

  displayRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      viz.mojom.GpuService_DisplayRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  displayMetricsChanged() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec,
      null,
      [],
      false);
  }

  destroyAllChannels() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      viz.mojom.GpuService_DestroyAllChannels_ParamsSpec,
      null,
      [],
      false);
  }

  onBackgroundCleanup() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec,
      null,
      [],
      false);
  }

  onBackgrounded() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      viz.mojom.GpuService_OnBackgrounded_ParamsSpec,
      null,
      [],
      false);
  }

  onForegrounded() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      viz.mojom.GpuService_OnForegrounded_ParamsSpec,
      null,
      [],
      false);
  }

  beginCATransaction() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      viz.mojom.GpuService_BeginCATransaction_ParamsSpec,
      null,
      [],
      false);
  }

  commitCATransaction() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      viz.mojom.GpuService_CommitCATransaction_ParamsSpec,
      viz.mojom.GpuService_CommitCATransaction_ResponseParamsSpec,
      [],
      false);
  }

  writeClangProfilingProfile() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec,
      viz.mojom.GpuService_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  getDawnInfo(collect_metrics) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      viz.mojom.GpuService_GetDawnInfo_ParamsSpec,
      viz.mojom.GpuService_GetDawnInfo_ResponseParamsSpec,
      [collect_metrics],
      false);
  }

  crash() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      viz.mojom.GpuService_Crash_ParamsSpec,
      null,
      [],
      false);
  }

  hang() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      viz.mojom.GpuService_Hang_ParamsSpec,
      null,
      [],
      false);
  }

  throwJavaException() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GpuService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_SetChannelClientPid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_CloseChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_LoadedBlob_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_WakeUpGpu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_GpuSwitched_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_DisplayAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_DisplayRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_DestroyAllChannels_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_OnBackgrounded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_OnForegrounded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_BeginCATransaction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_CommitCATransaction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_GetDawnInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_Crash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_Hang_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuService_ThrowJavaException_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_EstablishGpuChannel_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_SetChannelClientPid_ParamsSpec.$.structSpec);
          const result = this.impl.setChannelClientPid(params.client_id, params.client_pid);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_SetChannelDiskCacheHandle_ParamsSpec.$.structSpec);
          const result = this.impl.setChannelDiskCacheHandle(params.client_id, params.cache_handle);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_SetChannelPersistentCachePendingBackend_ParamsSpec.$.structSpec);
          const result = this.impl.setChannelPersistentCachePendingBackend(params.client_id, params.cache_handle, params.pending_backend);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_OnDiskCacheHandleDestoyed_ParamsSpec.$.structSpec);
          const result = this.impl.onDiskCacheHandleDestoyed(params.cache_handle);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_CloseChannel_ParamsSpec.$.structSpec);
          const result = this.impl.closeChannel(params.client_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_CreateJpegDecodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createJpegDecodeAccelerator(params.jda);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_CreateJpegEncodeAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.createJpegEncodeAccelerator(params.jea);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_RegisterDCOMPSurfaceHandle_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_UnregisterDCOMPSurfaceHandle_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterDCOMPSurfaceHandle(params.token);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_CreateVideoEncodeAcceleratorProvider_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoEncodeAcceleratorProvider(params.vea_provider);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_BindWebNNContextProvider_ParamsSpec.$.structSpec);
          const result = this.impl.bindWebNNContextProvider(params.receiver, params.client_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_GetVideoMemoryUsageStats_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_StartPeakMemoryMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.startPeakMemoryMonitor(params.sequence_num);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_GetPeakMemoryUsage_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_RequestDXGIInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_LoadedBlob_ParamsSpec.$.structSpec);
          const result = this.impl.loadedBlob(params.cache_handle, params.key, params.data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_WakeUpGpu_ParamsSpec.$.structSpec);
          const result = this.impl.wakeUpGpu();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_GpuSwitched_ParamsSpec.$.structSpec);
          const result = this.impl.gpuSwitched();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_DisplayAdded_ParamsSpec.$.structSpec);
          const result = this.impl.displayAdded();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_DisplayRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.displayRemoved();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_DisplayMetricsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.displayMetricsChanged();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_DestroyAllChannels_ParamsSpec.$.structSpec);
          const result = this.impl.destroyAllChannels();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_OnBackgroundCleanup_ParamsSpec.$.structSpec);
          const result = this.impl.onBackgroundCleanup();
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_OnBackgrounded_ParamsSpec.$.structSpec);
          const result = this.impl.onBackgrounded();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_OnForegrounded_ParamsSpec.$.structSpec);
          const result = this.impl.onForegrounded();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_BeginCATransaction_ParamsSpec.$.structSpec);
          const result = this.impl.beginCATransaction();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_CommitCATransaction_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_WriteClangProfilingProfile_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_GetDawnInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuService_Crash_ParamsSpec.$.structSpec);
          const result = this.impl.crash();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_Hang_ParamsSpec.$.structSpec);
          const result = this.impl.hang();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuService_ThrowJavaException_ParamsSpec.$.structSpec);
          const result = this.impl.throwJavaException();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.GpuServiceReceiver = viz.mojom.GpuServiceReceiver;

viz.mojom.GpuServicePtr = viz.mojom.GpuServiceRemote;
viz.mojom.GpuServiceRequest = viz.mojom.GpuServicePendingReceiver;

