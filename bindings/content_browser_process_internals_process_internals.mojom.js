// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/process_internals/process_internals.mojom
// Module: mojom

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

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
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
var mojom = mojom || {};
var url = url || {};

mojom.TypeSpec = { $: mojo.internal.Enum() };
mojom.ProcessCountInfoSpec = { $: {} };
mojom.SiteInstanceInfoSpec = { $: {} };
mojom.FrameInfoSpec = { $: {} };
mojom.WebContentsInfoSpec = { $: {} };
mojom.IsolatedOriginInfoSpec = { $: {} };
mojom.ProcessInternalsHandler = {};
mojom.ProcessInternalsHandler.$interfaceName = 'mojom.ProcessInternalsHandler';
mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec = { $: {} };

// Enum: Type
mojom.Type = {
  kActive: 0,
  kBackForwardCache: 1,
  kPrerender: 2,
};

// Struct: ProcessCountInfo
mojo.internal.Struct(
    mojom.ProcessCountInfoSpec, 'mojom.ProcessCountInfo', [
      mojo.internal.StructField('renderer_process_limit', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('renderer_process_count_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('live_renderer_processes_count_total', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('renderer_process_count_for_limit', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SiteInstanceInfo
mojo.internal.Struct(
    mojom.SiteInstanceInfoSpec, 'mojom.SiteInstanceInfo', [
      mojo.internal.StructField('site_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_lock_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_partition', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('site_instance_group_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('browsing_instance_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('locked', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('requires_origin_keyed_process', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_sandbox_for_iframes', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_guest', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pdf', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('are_javascript_optimizers_enabled', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FrameInfo
mojo.internal.Struct(
    mojom.FrameInfoSpec, 'mojom.FrameInfo', [
      mojo.internal.StructField('site_instance', 0, 0, mojom.SiteInstanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_committed_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subframes', 16, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kActive', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('agent_scheduling_group_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('process_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebContentsInfo
mojo.internal.Struct(
    mojom.WebContentsInfoSpec, 'mojom.WebContentsInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_frame', 8, 0, mojom.FrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bfcached_root_frames', 16, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('prerender_root_frames', 24, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IsolatedOriginInfo
mojo.internal.Struct(
    mojom.IsolatedOriginInfoSpec, 'mojom.IsolatedOriginInfo', [
      mojo.internal.StructField('origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProcessInternalsHandler
mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessCountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojom.ProcessCountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec, 'mojom.ProcessInternalsHandler_GetIsolationMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessPerSiteMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojom.IsolatedOriginInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec, 'mojom.ProcessInternalsHandler_GetAllWebContentsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams', [
      mojo.internal.StructField('infos', 0, 0, mojo.internal.Array(mojom.WebContentsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.ProcessInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ProcessInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.ProcessInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ProcessInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.ProcessInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProcessCountInfo() {
    return this.$.getProcessCountInfo();
  }
  getIsolationMode() {
    return this.$.getIsolationMode();
  }
  getProcessPerSiteMode() {
    return this.$.getProcessPerSiteMode();
  }
  getUserTriggeredIsolatedOrigins() {
    return this.$.getUserTriggeredIsolatedOrigins();
  }
  getWebTriggeredIsolatedOrigins() {
    return this.$.getWebTriggeredIsolatedOrigins();
  }
  getGloballyIsolatedOrigins() {
    return this.$.getGloballyIsolatedOrigins();
  }
  getAllWebContentsInfo() {
    return this.$.getAllWebContentsInfo();
  }
};

mojom.ProcessInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProcessCountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec,
      [],
      false);
  }

  getIsolationMode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec,
      [],
      false);
  }

  getProcessPerSiteMode() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec,
      [],
      false);
  }

  getUserTriggeredIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getWebTriggeredIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getGloballyIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getAllWebContentsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec,
      [],
      false);
  }

};

mojom.ProcessInternalsHandler.getRemote = function() {
  let remote = new mojom.ProcessInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ProcessInternalsHandler',
    'context');
  return remote.$;
};

mojom.ProcessInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProcessInternalsHandler', [
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
        
        // Try Method 0: GetProcessCountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProcessCountInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetIsolationMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsolationMode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetProcessPerSiteMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProcessPerSiteMode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetUserTriggeredIsolatedOrigins
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserTriggeredIsolatedOrigins (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetWebTriggeredIsolatedOrigins
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWebTriggeredIsolatedOrigins (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetGloballyIsolatedOrigins
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGloballyIsolatedOrigins (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetAllWebContentsInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllWebContentsInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProcessCountInfo');
          const result = this.impl.getProcessCountInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProcessCountInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsolationMode');
          const result = this.impl.getIsolationMode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsolationMode FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProcessPerSiteMode');
          const result = this.impl.getProcessPerSiteMode();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProcessPerSiteMode FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserTriggeredIsolatedOrigins');
          const result = this.impl.getUserTriggeredIsolatedOrigins();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserTriggeredIsolatedOrigins FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWebTriggeredIsolatedOrigins');
          const result = this.impl.getWebTriggeredIsolatedOrigins();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWebTriggeredIsolatedOrigins FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGloballyIsolatedOrigins');
          const result = this.impl.getGloballyIsolatedOrigins();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGloballyIsolatedOrigins FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllWebContentsInfo');
          const result = this.impl.getAllWebContentsInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllWebContentsInfo FAILED:', e));
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

mojom.ProcessInternalsHandlerReceiver = mojom.ProcessInternalsHandlerReceiver;

mojom.ProcessInternalsHandlerPtr = mojom.ProcessInternalsHandlerRemote;
mojom.ProcessInternalsHandlerRequest = mojom.ProcessInternalsHandlerPendingReceiver;

