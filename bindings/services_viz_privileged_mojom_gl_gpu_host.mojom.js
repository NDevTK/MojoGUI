// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_host.mojom
// Module: viz.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
    this.ordinals = window.mojoScrambler.getOrdinals('GpuHost', [
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

  didInitialize(gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.GpuHost_DidInitialize_ParamsSpec,
      null,
      [gpu_info, gpu_feature_info, gpu_info_for_hardware_gpu, gpu_feature_info_for_hardware_gpu, gpu_extra_info],
      false);
  }

  didFailInitialize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.GpuHost_DidFailInitialize_ParamsSpec,
      null,
      [],
      false);
  }

  didCreateContextSuccessfully() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec,
      null,
      [],
      false);
  }

  didCreateOffscreenContext(url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec,
      null,
      [url],
      false);
  }

  didDestroyOffscreenContext(url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec,
      null,
      [url],
      false);
  }

  didDestroyChannel(client_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec,
      null,
      [client_id],
      false);
  }

  didDestroyAllChannels() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec,
      null,
      [],
      false);
  }

  didLoseContext(reason, active_url) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.GpuHost_DidLoseContext_ParamsSpec,
      null,
      [reason, active_url],
      false);
  }

  didUpdateGPUInfo(gpu_info) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec,
      null,
      [gpu_info],
      false);
  }

  didUpdateOverlayInfo(overlay_info) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec,
      null,
      [overlay_info],
      false);
  }

  didUpdateDXGIInfo(dxgi_info) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec,
      null,
      [dxgi_info],
      false);
  }

  disableGpuCompositing() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec,
      null,
      [],
      false);
  }

  getIsolationKey(client_id, wgpu_context_token) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      viz.mojom.GpuHost_GetIsolationKey_ParamsSpec,
      viz.mojom.GpuHost_GetIsolationKey_ResponseParamsSpec,
      [client_id, wgpu_context_token],
      false);
  }

  storeBlobToDisk(cache_handle, key, blob) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec,
      null,
      [cache_handle, key, blob],
      false);
  }

  clearGrShaderDiskCache() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec,
      null,
      [],
      false);
  }

  ensureWebNNExecutionProvidersReady() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec,
      viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ResponseParamsSpec,
      [],
      false);
  }

  createWebNNWeightsFile() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GpuHost', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidInitialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidInitialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidInitialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidFailInitialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidFailInitialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFailInitialize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidCreateContextSuccessfully
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCreateContextSuccessfully (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidCreateOffscreenContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCreateOffscreenContext (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DidDestroyOffscreenContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyOffscreenContext (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DidDestroyChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyChannel (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DidDestroyAllChannels
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidDestroyAllChannels (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DidLoseContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidLoseContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidLoseContext (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DidUpdateGPUInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateGPUInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DidUpdateOverlayInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateOverlayInfo (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DidUpdateDXGIInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateDXGIInfo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DisableGpuCompositing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableGpuCompositing (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetIsolationKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_GetIsolationKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsolationKey (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: StoreBlobToDisk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StoreBlobToDisk (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ClearGrShaderDiskCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearGrShaderDiskCache (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnsureWebNNExecutionProvidersReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnsureWebNNExecutionProvidersReady (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: CreateWebNNWeightsFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebNNWeightsFile (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidInitialize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didInitialize');
          const result = this.impl.didInitialize(params.gpu_info, params.gpu_feature_info, params.gpu_info_for_hardware_gpu, params.gpu_feature_info_for_hardware_gpu, params.gpu_extra_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidFailInitialize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didFailInitialize');
          const result = this.impl.didFailInitialize();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidCreateContextSuccessfully_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didCreateContextSuccessfully');
          const result = this.impl.didCreateContextSuccessfully();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidCreateOffscreenContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didCreateOffscreenContext');
          const result = this.impl.didCreateOffscreenContext(params.url);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyOffscreenContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didDestroyOffscreenContext');
          const result = this.impl.didDestroyOffscreenContext(params.url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyChannel_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didDestroyChannel');
          const result = this.impl.didDestroyChannel(params.client_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidDestroyAllChannels_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didDestroyAllChannels');
          const result = this.impl.didDestroyAllChannels();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidLoseContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didLoseContext');
          const result = this.impl.didLoseContext(params.reason, params.active_url);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateGPUInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateGPUInfo');
          const result = this.impl.didUpdateGPUInfo(params.gpu_info);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateOverlayInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateOverlayInfo');
          const result = this.impl.didUpdateOverlayInfo(params.overlay_info);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DidUpdateDXGIInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateDXGIInfo');
          const result = this.impl.didUpdateDXGIInfo(params.dxgi_info);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_DisableGpuCompositing_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.disableGpuCompositing');
          const result = this.impl.disableGpuCompositing();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_GetIsolationKey_ParamsSpec);
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
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_StoreBlobToDisk_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.storeBlobToDisk');
          const result = this.impl.storeBlobToDisk(params.cache_handle, params.key, params.blob);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_ClearGrShaderDiskCache_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearGrShaderDiskCache');
          const result = this.impl.clearGrShaderDiskCache();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_EnsureWebNNExecutionProvidersReady_ParamsSpec);
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
          const params = decoder.decodeStructInline(viz.mojom.GpuHost_CreateWebNNWeightsFile_ParamsSpec);
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

