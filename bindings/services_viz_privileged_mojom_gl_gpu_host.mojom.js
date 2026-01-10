// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_host.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var gfx = gfx || {};
var url = url || {};
var webnn = webnn || {};

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

viz.mojom.GpuHostReceiver = class {
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
        
        // Try Method 0: DidInitialize
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidInitialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidInitialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: DidFailInitialize
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidFailInitialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFailInitialize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: DidCreateContextSuccessfully
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCreateContextSuccessfully (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: DidCreateOffscreenContext
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCreateOffscreenContext (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: DidDestroyOffscreenContext
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyOffscreenContext (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: DidDestroyChannel
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyChannel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: DidDestroyAllChannels
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyAllChannels (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: DidLoseContext
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidLoseContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidLoseContext (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: DidUpdateGPUInfo
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateGPUInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: DidUpdateOverlayInfo
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateOverlayInfo (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: DidUpdateDXGIInfo
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateDXGIInfo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: DisableGpuCompositing
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableGpuCompositing (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: GetIsolationKey
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_GetIsolationKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsolationKey (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: StoreBlobToDisk
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreBlobToDisk (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: ClearGrShaderDiskCache
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearGrShaderDiskCache (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: EnsureWebNNExecutionProvidersReady
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnsureWebNNExecutionProvidersReady (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: CreateWebNNWeightsFile
        try {
             decoder.decodeStruct(viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebNNWeightsFile (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidInitialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didInitialize');
          const result = this.impl.didInitialize(params.gpu_info, params.gpu_feature_info, params.gpu_info_for_hardware_gpu, params.gpu_feature_info_for_hardware_gpu, params.gpu_extra_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidFailInitialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didFailInitialize');
          const result = this.impl.didFailInitialize();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCreateContextSuccessfully');
          const result = this.impl.didCreateContextSuccessfully();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCreateOffscreenContext');
          const result = this.impl.didCreateOffscreenContext(params.url);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didDestroyOffscreenContext');
          const result = this.impl.didDestroyOffscreenContext(params.url);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didDestroyChannel');
          const result = this.impl.didDestroyChannel(params.client_id);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didDestroyAllChannels');
          const result = this.impl.didDestroyAllChannels();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidLoseContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didLoseContext');
          const result = this.impl.didLoseContext(params.reason, params.active_url);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didUpdateGPUInfo');
          const result = this.impl.didUpdateGPUInfo(params.gpu_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didUpdateOverlayInfo');
          const result = this.impl.didUpdateOverlayInfo(params.overlay_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didUpdateDXGIInfo');
          const result = this.impl.didUpdateDXGIInfo(params.dxgi_info);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableGpuCompositing');
          const result = this.impl.disableGpuCompositing();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_GetIsolationKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getIsolationKey');
          const result = this.impl.getIsolationKey(params.client_id, params.wgpu_context_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.storeBlobToDisk');
          const result = this.impl.storeBlobToDisk(params.cache_handle, params.key, params.blob);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearGrShaderDiskCache');
          const result = this.impl.clearGrShaderDiskCache();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ensureWebNNExecutionProvidersReady');
          const result = this.impl.ensureWebNNExecutionProvidersReady();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createWebNNWeightsFile');
          const result = this.impl.createWebNNWeightsFile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.GpuHost_CreateWebNNWeightsFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.GpuHostReceiver = viz.mojom.GpuHostReceiver;

viz.mojom.GpuHostPtr = viz.mojom.GpuHostRemote;
viz.mojom.GpuHostRequest = viz.mojom.GpuHostPendingReceiver;

