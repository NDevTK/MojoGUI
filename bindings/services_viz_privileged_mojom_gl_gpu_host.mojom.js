// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_host.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

viz.mojom.GpuHost = {};
viz.mojom.GpuHost.$interfaceName = 'viz.mojom.GpuHost';
viz.mojom.GpuHost_DidInitialize_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidFailInitialize_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidLoseContext_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec = { $: {} };
viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec = { $: {} };
viz.mojom.GpuHost_GetIsolationKey_ParamsSpec = { $: {} };
viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec = { $: {} };
viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec = { $: {} };
viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec = { $: {} };
viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec = { $: {} };
viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec = { $: {} };
viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec = { $: {} };
viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec = { $: {} };

// Interface: GpuHost
mojo.internal.Struct(
    viz.mojom.GpuHost_DidInitialize_ParamsSpec, 'viz.mojom.GpuHost_DidInitialize_Params', [
      mojo.internal.StructField('gpu_info', 0, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_feature_info', 8, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_info_for_hardware_gpu', 16, 0, gpu.mojom.GpuInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gpu_feature_info_for_hardware_gpu', 24, 0, gpu.mojom.GpuFeatureInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gpu_extra_info', 32, 0, gfx.mojom.GpuExtraInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidFailInitialize_ParamsSpec, 'viz.mojom.GpuHost_DidFailInitialize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec, 'viz.mojom.GpuHost_DidCreateContextSuccessfully_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec, 'viz.mojom.GpuHost_DidCreateOffscreenContext_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec, 'viz.mojom.GpuHost_DidDestroyOffscreenContext_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec, 'viz.mojom.GpuHost_DidDestroyChannel_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec, 'viz.mojom.GpuHost_DidDestroyAllChannels_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidLoseContext_ParamsSpec, 'viz.mojom.GpuHost_DidLoseContext_Params', [
      mojo.internal.StructField('reason', 0, 0, viz.mojom.ContextLostReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('active_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec, 'viz.mojom.GpuHost_DidUpdateGPUInfo_Params', [
      mojo.internal.StructField('gpu_info', 0, 0, gpu.mojom.GpuInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec, 'viz.mojom.GpuHost_DidUpdateOverlayInfo_Params', [
      mojo.internal.StructField('overlay_info', 0, 0, gpu.mojom.OverlayInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec, 'viz.mojom.GpuHost_DidUpdateDXGIInfo_Params', [
      mojo.internal.StructField('dxgi_info', 0, 0, gfx.mojom.DXGIInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec, 'viz.mojom.GpuHost_DisableGpuCompositing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_GetIsolationKey_ParamsSpec, 'viz.mojom.GpuHost_GetIsolationKey_Params', [
      mojo.internal.StructField('wgpu_context_token', 0, 0, blink.mojom.WebGPUExecutionContextTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec, 'viz.mojom.GpuHost_GetIsolationKey_ResponseParams', [
      mojo.internal.StructField('isolation_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec, 'viz.mojom.GpuHost_StoreBlobToDisk_Params', [
      mojo.internal.StructField('cache_handle', 0, 0, gpu.mojom.GpuDiskCacheHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 16, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec, 'viz.mojom.GpuHost_ClearGrShaderDiskCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec, 'viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec, 'viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParams', [
      mojo.internal.StructField('ep_package_info', 0, 0, mojo.internal.Map(mojo.internal.String, webnn.mojom.EpPackageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec, 'viz.mojom.GpuHost_CreateWebNNWeightsFile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec, 'viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      viz.mojom.GpuHost_DidInitialize_ParamsSpec,
      null,
      [gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info],
      false);
  }

  didFailInitialize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.GpuHost_DidFailInitialize_ParamsSpec,
      null,
      [],
      false);
  }

  didCreateContextSuccessfully() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec,
      null,
      [],
      false);
  }

  didCreateOffscreenContext(url) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec,
      null,
      [url],
      false);
  }

  didDestroyOffscreenContext(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec,
      null,
      [url],
      false);
  }

  didDestroyChannel(client_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec,
      null,
      [client_id],
      false);
  }

  didDestroyAllChannels() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec,
      null,
      [],
      false);
  }

  didLoseContext(reason, active_url) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.GpuHost_DidLoseContext_ParamsSpec,
      null,
      [reason, active_url],
      false);
  }

  didUpdateGPUInfo(gpu_info) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec,
      null,
      [gpu_info],
      false);
  }

  didUpdateOverlayInfo(overlay_info) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec,
      null,
      [overlay_info],
      false);
  }

  didUpdateDXGIInfo(dxgi_info) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec,
      null,
      [dxgi_info],
      false);
  }

  disableGpuCompositing() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec,
      null,
      [],
      false);
  }

  getIsolationKey(client_id, wgpu_context_token) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      viz.mojom.GpuHost_GetIsolationKey_ParamsSpec,
      viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec,
      [client_id, wgpu_context_token],
      false);
  }

  storeBlobToDisk(cache_handle, key, blob) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec,
      null,
      [cache_handle, key, blob],
      false);
  }

  clearGrShaderDiskCache() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec,
      null,
      [],
      false);
  }

  ensureWebNNExecutionProvidersReady() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec,
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec,
      [],
      false);
  }

  createWebNNWeightsFile() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec,
      viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec,
      [],
      false);
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

viz.mojom.GpuHostPtr = viz.mojom.GpuHostRemote;
viz.mojom.GpuHostRequest = viz.mojom.GpuHostPendingReceiver;

