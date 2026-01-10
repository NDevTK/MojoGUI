// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_language_model.mojom
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
var on_device_model = on_device_model || {};
var skia = skia || {};

blink.mojom.AILanguageModelPromptRoleSpec = { $: mojo.internal.Enum() };
blink.mojom.AILanguageModelPromptTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AILanguageModelPromptContentSpec = { $: {} };
blink.mojom.AILanguageModelSamplingParamsSpec = { $: {} };
blink.mojom.AILanguageModelParamsSpec = { $: {} };
blink.mojom.AILanguageModelInstanceInfoSpec = { $: {} };
blink.mojom.AILanguageModelExpectedSpec = { $: {} };
blink.mojom.AILanguageModelPromptSpec = { $: {} };
blink.mojom.AILanguageModelCreateOptionsSpec = { $: {} };
blink.mojom.AIManagerCreateLanguageModelClient = {};
blink.mojom.AIManagerCreateLanguageModelClient.$interfaceName = 'blink.mojom.AIManagerCreateLanguageModelClient';
blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec = { $: {} };
blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel = {};
blink.mojom.AILanguageModel.$interfaceName = 'blink.mojom.AILanguageModel';
blink.mojom.AILanguageModel_Prompt_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Append_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Fork_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_Destroy_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec = { $: {} };
blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec = { $: {} };

// Enum: AILanguageModelPromptRole
blink.mojom.AILanguageModelPromptRole = {
  kSystem: 0,
  kUser: 1,
  kAssistant: 2,
  kToolCall: 3,
  kToolResponse: 4,
};

// Enum: AILanguageModelPromptType
blink.mojom.AILanguageModelPromptType = {
  kText: 0,
  kImage: 1,
  kAudio: 2,
  kToolCall: 3,
  kToolResponse: 4,
};

// Union: AILanguageModelPromptContent
mojo.internal.Union(
    blink.mojom.AILanguageModelPromptContentSpec, 'blink.mojom.AILanguageModelPromptContent', {
      'text': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'bitmap': {
        'ordinal': 1,
        'type': skia.mojom.BitmapN32Spec.$,
        'nullable': false,
      },
      'audio': {
        'ordinal': 2,
        'type': on_device_model.mojom.AudioDataSpec.$,
        'nullable': false,
      },
    });

// Struct: AILanguageModelSamplingParams
mojo.internal.Struct(
    blink.mojom.AILanguageModelSamplingParamsSpec, 'blink.mojom.AILanguageModelSamplingParams', [
      mojo.internal.StructField('top_k', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('temperature', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AILanguageModelParams
mojo.internal.Struct(
    blink.mojom.AILanguageModelParamsSpec, 'blink.mojom.AILanguageModelParams', [
      mojo.internal.StructField('default_sampling_params', 0, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_sampling_params', 8, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AILanguageModelInstanceInfo
mojo.internal.Struct(
    blink.mojom.AILanguageModelInstanceInfoSpec, 'blink.mojom.AILanguageModelInstanceInfo', [
      mojo.internal.StructField('input_quota', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('input_usage', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('sampling_params', 16, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_types', 24, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AILanguageModelExpected
mojo.internal.Struct(
    blink.mojom.AILanguageModelExpectedSpec, 'blink.mojom.AILanguageModelExpected', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.AILanguageModelPromptTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('languages', 8, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AILanguageModelPrompt
mojo.internal.Struct(
    blink.mojom.AILanguageModelPromptSpec, 'blink.mojom.AILanguageModelPrompt', [
      mojo.internal.StructField('role', 0, 0, blink.mojom.AILanguageModelPromptRoleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content', 8, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptContentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_prefix', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AILanguageModelCreateOptions
mojo.internal.Struct(
    blink.mojom.AILanguageModelCreateOptionsSpec, 'blink.mojom.AILanguageModelCreateOptions', [
      mojo.internal.StructField('sampling_params', 0, 0, blink.mojom.AILanguageModelSamplingParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_prompts', 8, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_inputs', 16, 0, mojo.internal.Array(blink.mojom.AILanguageModelExpectedSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('expected_outputs', 24, 0, mojo.internal.Array(blink.mojom.AILanguageModelExpectedSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: AIManagerCreateLanguageModelClient
mojo.internal.Struct(
    blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec, 'blink.mojom.AIManagerCreateLanguageModelClient_OnResult_Params', [
      mojo.internal.StructField('language_model_remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AILanguageModelRemote), null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, blink.mojom.AILanguageModelInstanceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec, 'blink.mojom.AIManagerCreateLanguageModelClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.AIManagerCreateClientErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quota_error_info', 8, 0, blink.mojom.QuotaErrorInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIManagerCreateLanguageModelClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIManagerCreateLanguageModelClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIManagerCreateLanguageModelClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIManagerCreateLanguageModelClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateLanguageModelClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResult(language_model_remote, info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec,
      null,
      [language_model_remote, info],
      false);
  }

  onError(error, quota_error_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec,
      null,
      [error, quota_error_info],
      false);
  }

};

blink.mojom.AIManagerCreateLanguageModelClient.getRemote = function() {
  let remote = new blink.mojom.AIManagerCreateLanguageModelClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIManagerCreateLanguageModelClient',
    'context');
  return remote.$;
};

blink.mojom.AIManagerCreateLanguageModelClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIManagerCreateLanguageModelClient', [
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.language_model_remote, params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIManagerCreateLanguageModelClient_OnError_ParamsSpec);
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

blink.mojom.AIManagerCreateLanguageModelClientReceiver = blink.mojom.AIManagerCreateLanguageModelClientReceiver;

blink.mojom.AIManagerCreateLanguageModelClientPtr = blink.mojom.AIManagerCreateLanguageModelClientRemote;
blink.mojom.AIManagerCreateLanguageModelClientRequest = blink.mojom.AIManagerCreateLanguageModelClientPendingReceiver;


// Interface: AILanguageModel
mojo.internal.Struct(
    blink.mojom.AILanguageModel_Prompt_ParamsSpec, 'blink.mojom.AILanguageModel_Prompt_Params', [
      mojo.internal.StructField('prompts', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('constraint', 8, 0, on_device_model.mojom.ResponseConstraintSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pending_responder', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Append_ParamsSpec, 'blink.mojom.AILanguageModel_Append_Params', [
      mojo.internal.StructField('prompts', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Fork_ParamsSpec, 'blink.mojom.AILanguageModel_Fork_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AIManagerCreateLanguageModelClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_Destroy_ParamsSpec, 'blink.mojom.AILanguageModel_Destroy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec, 'blink.mojom.AILanguageModel_MeasureInputUsage_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.Array(blink.mojom.AILanguageModelPromptSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec, 'blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParams', [
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
    ],
    [[0, 16]]);

blink.mojom.AILanguageModelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AILanguageModelRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AILanguageModel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AILanguageModelPendingReceiver,
      handle);
    this.$ = new blink.mojom.AILanguageModelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AILanguageModelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AILanguageModel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  prompt(prompts, constraint, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AILanguageModel_Prompt_ParamsSpec,
      null,
      [prompts, constraint, pending_responder],
      false);
  }

  append(prompts, client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AILanguageModel_Append_ParamsSpec,
      null,
      [prompts, client],
      false);
  }

  fork(client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AILanguageModel_Fork_ParamsSpec,
      null,
      [client],
      false);
  }

  destroy() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AILanguageModel_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

  measureInputUsage(input) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec,
      blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec,
      [input],
      false);
  }

};

blink.mojom.AILanguageModel.getRemote = function() {
  let remote = new blink.mojom.AILanguageModelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AILanguageModel',
    'context');
  return remote.$;
};

blink.mojom.AILanguageModelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AILanguageModel', [
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
        
        // Try Method 0: Prompt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Prompt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Prompt (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Append
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Append_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Append (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Fork
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Fork_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Fork (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Destroy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_Destroy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Destroy (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MeasureInputUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MeasureInputUsage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Prompt_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.prompt');
          const result = this.impl.prompt(params.prompts, params.constraint, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Append_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.append');
          const result = this.impl.append(params.prompts, params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Fork_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.fork');
          const result = this.impl.fork(params.client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_Destroy_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.destroy');
          const result = this.impl.destroy();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AILanguageModel_MeasureInputUsage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.measureInputUsage');
          const result = this.impl.measureInputUsage(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AILanguageModel_MeasureInputUsage_ResponseParamsSpec);
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

blink.mojom.AILanguageModelReceiver = blink.mojom.AILanguageModelReceiver;

blink.mojom.AILanguageModelPtr = blink.mojom.AILanguageModelRemote;
blink.mojom.AILanguageModelRequest = blink.mojom.AILanguageModelPendingReceiver;

