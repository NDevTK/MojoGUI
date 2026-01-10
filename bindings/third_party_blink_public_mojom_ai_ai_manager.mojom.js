// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_manager.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ModelAvailabilityCheckResultSpec = { $: mojo.internal.Enum() };
blink.mojom.AIManagerCreateWriterClient = {};
blink.mojom.AIManagerCreateWriterClient.$interfaceName = 'blink.mojom.AIManagerCreateWriterClient';
blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateRewriterClient = {};
blink.mojom.AIManagerCreateRewriterClient.$interfaceName = 'blink.mojom.AIManagerCreateRewriterClient';
blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateSummarizerClient = {};
blink.mojom.AIManagerCreateSummarizerClient.$interfaceName = 'blink.mojom.AIManagerCreateSummarizerClient';
blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateProofreaderClient = {};
blink.mojom.AIManagerCreateProofreaderClient.$interfaceName = 'blink.mojom.AIManagerCreateProofreaderClient';
blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AIManager = {};
blink.mojom.AIManager.$interfaceName = 'blink.mojom.AIManager';
blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateLanguageModel_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateSummarizer_ParamsSpec = { $: {} };
blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec = { $: {} };
blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateWriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateWriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateRewriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateRewriter_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateProofreader_ParamsSpec = { $: {} };
blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec = { $: {} };
blink.mojom.AIManager_CreateProofreader_ParamsSpec = { $: {} };
blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec = { $: {} };

// Enum: ModelAvailabilityCheckResult
blink.mojom.ModelAvailabilityCheckResult = {
  kAvailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kUnavailableServiceNotRunning: 3,
  kUnavailableUnsupportedLanguage: 4,
  kUnavailableUnknown: 5,
  kUnavailableFeatureNotEnabled: 6,
  kUnavailableConfigNotAvailableForFeature: 7,
  kUnavailableGpuBlocked: 8,
  kUnavailableTooManyRecentCrashes: 9,
  kUnavailableSafetyModelNotAvailable: 10,
  kUnavailableSafetyConfigNotAvailableForFeature: 11,
  kUnavailableLanguageDetectionModelNotAvailable: 12,
  kUnavailableFeatureExecutionNotEnabled: 13,
  kUnavailableModelAdaptationNotAvailable: 14,
  kUnavailableValidationPending: 15,
  kUnavailableValidationFailed: 16,
  kUnavailableModelNotEligible: 17,
  kUnavailableInsufficientDiskSpace: 18,
  kUnavailableTranslationNotEligible: 19,
  kUnavailableEnterprisePolicyDisabled: 20,
};

// Interface: AIManagerCreateWriterClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateWriterClient_OnResult_Params', [
      mojo.internal.StructField('writer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIWriterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateWriterClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateWriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateWriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateWriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateWriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateWriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateWriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateWriterClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(writer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec,
      null,
      [writer],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateWriterClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateWriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateWriterClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateWriterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateWriterClient', [
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
        
        // Try Method 0: OnResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.writer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateWriterClient_OnError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateWriterClientReceiver = blink.mojom.AIManagerCreateWriterClientReceiver;

blink.mojom.AIManagerCreateWriterClientPtr = blink.mojom.AIManagerCreateWriterClientRemote;
blink.mojom.AIManagerCreateWriterClientRequest = blink.mojom.AIManagerCreateWriterClientPendingReceiver;


// Interface: AIManagerCreateRewriterClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateRewriterClient_OnResult_Params', [
      mojo.internal.StructField('rewriter', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIRewriterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateRewriterClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateRewriterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateRewriterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateRewriterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateRewriterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateRewriterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateRewriterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateRewriterClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(rewriter) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec,
      null,
      [rewriter],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateRewriterClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateRewriterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateRewriterClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateRewriterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateRewriterClient', [
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
        
        // Try Method 0: OnResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.rewriter);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateRewriterClient_OnError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateRewriterClientReceiver = blink.mojom.AIManagerCreateRewriterClientReceiver;

blink.mojom.AIManagerCreateRewriterClientPtr = blink.mojom.AIManagerCreateRewriterClientRemote;
blink.mojom.AIManagerCreateRewriterClientRequest = blink.mojom.AIManagerCreateRewriterClientPendingReceiver;


// Interface: AIManagerCreateSummarizerClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateSummarizerClient_OnResult_Params', [
      mojo.internal.StructField('summarizer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AISummarizerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateSummarizerClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateSummarizerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateSummarizerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateSummarizerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateSummarizerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateSummarizerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateSummarizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateSummarizerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(summarizer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec,
      null,
      [summarizer],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateSummarizerClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateSummarizerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateSummarizerClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateSummarizerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateSummarizerClient', [
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
        
        // Try Method 0: OnResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.summarizer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateSummarizerClient_OnError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateSummarizerClientReceiver = blink.mojom.AIManagerCreateSummarizerClientReceiver;

blink.mojom.AIManagerCreateSummarizerClientPtr = blink.mojom.AIManagerCreateSummarizerClientRemote;
blink.mojom.AIManagerCreateSummarizerClientRequest = blink.mojom.AIManagerCreateSummarizerClientPendingReceiver;


// Interface: AIManagerCreateProofreaderClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateProofreaderClient_OnResult_Params', [
      mojo.internal.StructField('proofreader', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIProofreaderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateProofreaderClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateProofreaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateProofreaderClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateProofreaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateProofreaderClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateProofreaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateProofreaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateProofreaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(proofreader) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec,
      null,
      [proofreader],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateProofreaderClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateProofreaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateProofreaderClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateProofreaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateProofreaderClient', [
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
        
        // Try Method 0: OnResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.proofreader);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateProofreaderClient_OnError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.quota_error_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerCreateProofreaderClientReceiver = blink.mojom.AIManagerCreateProofreaderClientReceiver;

blink.mojom.AIManagerCreateProofreaderClientPtr = blink.mojom.AIManagerCreateProofreaderClientRemote;
blink.mojom.AIManagerCreateProofreaderClientRequest = blink.mojom.AIManagerCreateProofreaderClientPendingReceiver;


// Interface: AIManager
mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AILanguageModelCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateLanguageModel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateLanguageModel_ParamsSpec, 'blink.mojom.AIManager_CreateLanguageModel_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AILanguageModelCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AISummarizerCreateOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateSummarizer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateSummarizer_ParamsSpec, 'blink.mojom.AIManager_CreateSummarizer_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateSummarizerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AISummarizerCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec, 'blink.mojom.AIManager_GetLanguageModelParams_ResponseParams', [
      mojo.internal.StructField('language_model_params', 0, 0, blink.mojom.AILanguageModelParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIWriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateWriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateWriter_ParamsSpec, 'blink.mojom.AIManager_CreateWriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateWriterClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIWriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIRewriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateRewriter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateRewriter_ParamsSpec, 'blink.mojom.AIManager_CreateRewriter_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateRewriterClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIRewriterCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.AIProofreaderCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec, 'blink.mojom.AIManager_CanCreateProofreader_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.ModelAvailabilityCheckResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AIManager_CreateProofreader_ParamsSpec, 'blink.mojom.AIManager_CreateProofreader_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateProofreaderClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.AIProofreaderCreateOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec, 'blink.mojom.AIManager_AddModelDownloadProgressObserver_Params', [
      mojo.internal.StructField('observer_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelDownloadProgressObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AIManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManager', [
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

  canCreateLanguageModel(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec,
      blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec,
      [options],
      false);
  }

  createLanguageModel(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManager_CreateLanguageModel_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateSummarizer(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec,
      blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec,
      [options],
      false);
  }

  createSummarizer(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AIManager_CreateSummarizer_ParamsSpec,
      null,
      [client, options],
      false);
  }

  getLanguageModelParams() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec,
      blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec,
      [],
      false);
  }

  canCreateWriter(options) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.AIManager_CanCreateWriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec,
      [options],
      false);
  }

  createWriter(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.AIManager_CreateWriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateRewriter(options) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.AIManager_CanCreateRewriter_ParamsSpec,
      blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec,
      [options],
      false);
  }

  createRewriter(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.AIManager_CreateRewriter_ParamsSpec,
      null,
      [client, options],
      false);
  }

  canCreateProofreader(options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.AIManager_CanCreateProofreader_ParamsSpec,
      blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec,
      [options],
      false);
  }

  createProofreader(client, options) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.AIManager_CreateProofreader_ParamsSpec,
      null,
      [client, options],
      false);
  }

  addModelDownloadProgressObserver(observer_remote) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec,
      null,
      [observer_remote],
      false);
  }

};

blink.mojom.AIManager.getRemote = function() {
  let remote = new blink.mojom.AIManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManager',
    'context');
  return remote.$;
};

blink.mojom.AIManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManager', [
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
        
        // Try Method 0: CanCreateLanguageModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateLanguageModel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateLanguageModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLanguageModel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CanCreateSummarizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateSummarizer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateSummarizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateSummarizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSummarizer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetLanguageModelParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLanguageModelParams (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CanCreateWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateWriter (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateWriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateWriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWriter (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CanCreateRewriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateRewriter (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CreateRewriter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateRewriter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRewriter (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CanCreateProofreader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanCreateProofreader (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateProofreader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_CreateProofreader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProofreader (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddModelDownloadProgressObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddModelDownloadProgressObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateLanguageModel_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canCreateLanguageModel');
          const result = this.impl.canCreateLanguageModel(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateLanguageModel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateLanguageModel_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createLanguageModel');
          const result = this.impl.createLanguageModel(params.client, params.options);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateSummarizer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canCreateSummarizer');
          const result = this.impl.canCreateSummarizer(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateSummarizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateSummarizer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createSummarizer');
          const result = this.impl.createSummarizer(params.client, params.options);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_GetLanguageModelParams_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getLanguageModelParams');
          const result = this.impl.getLanguageModelParams();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_GetLanguageModelParams_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateWriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canCreateWriter');
          const result = this.impl.canCreateWriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateWriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateWriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createWriter');
          const result = this.impl.createWriter(params.client, params.options);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateRewriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canCreateRewriter');
          const result = this.impl.canCreateRewriter(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateRewriter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateRewriter_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createRewriter');
          const result = this.impl.createRewriter(params.client, params.options);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CanCreateProofreader_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.canCreateProofreader');
          const result = this.impl.canCreateProofreader(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIManager_CanCreateProofreader_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_CreateProofreader_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createProofreader');
          const result = this.impl.createProofreader(params.client, params.options);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManager_AddModelDownloadProgressObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addModelDownloadProgressObserver');
          const result = this.impl.addModelDownloadProgressObserver(params.observer_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIManagerReceiver = blink.mojom.AIManagerReceiver;

blink.mojom.AIManagerPtr = blink.mojom.AIManagerRemote;
blink.mojom.AIManagerRequest = blink.mojom.AIManagerPendingReceiver;

