// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_service.mojom
// Module: media.mojom

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
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

media.mojom.AudioSourceSpeechRecognitionContext = {};
media.mojom.AudioSourceSpeechRecognitionContext.$interfaceName = 'media.mojom.AudioSourceSpeechRecognitionContext';
media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec = { $: {} };
media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService = {};
media.mojom.SpeechRecognitionService.$interfaceName = 'media.mojom.SpeechRecognitionService';
media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec = { $: {} };
media.mojom.AudioSourceFetcher = {};
media.mojom.AudioSourceFetcher.$interfaceName = 'media.mojom.AudioSourceFetcher';
media.mojom.AudioSourceFetcher_Start_ParamsSpec = { $: {} };
media.mojom.AudioSourceFetcher_Stop_ParamsSpec = { $: {} };

// Interface: AudioSourceSpeechRecognitionContext
mojo.internal.Struct(
    media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec, 'media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_Params', [
      mojo.internal.StructField('fetcher_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioSourceFetcherSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec, 'media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParams', [
      mojo.internal.StructField('is_multichannel_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioSourceSpeechRecognitionContextRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioSourceSpeechRecognitionContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioSourceSpeechRecognitionContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioSourceSpeechRecognitionContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioSourceSpeechRecognitionContext', [
      { explicit: null },
    ]);
  }

  bindAudioSourceFetcher(fetcher_receiver, client, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec,
      media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec,
      [fetcher_receiver, client, options],
      false);
  }

};

media.mojom.AudioSourceSpeechRecognitionContext.getRemote = function() {
  let remote = new media.mojom.AudioSourceSpeechRecognitionContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioSourceSpeechRecognitionContext',
    'context');
  return remote.$;
};

media.mojom.AudioSourceSpeechRecognitionContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioSourceSpeechRecognitionContext', [
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
        
        // Try Method 0: BindAudioSourceFetcher
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAudioSourceFetcher (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAudioSourceFetcher');
          const result = this.impl.bindAudioSourceFetcher(params.fetcher_receiver, params.client, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioSourceSpeechRecognitionContext_BindAudioSourceFetcher_ResponseParamsSpec);
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

media.mojom.AudioSourceSpeechRecognitionContextReceiver = media.mojom.AudioSourceSpeechRecognitionContextReceiver;

media.mojom.AudioSourceSpeechRecognitionContextPtr = media.mojom.AudioSourceSpeechRecognitionContextRemote;
media.mojom.AudioSourceSpeechRecognitionContextRequest = media.mojom.AudioSourceSpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionService
mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_Params', [
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioSourceSpeechRecognitionContextSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaPaths_Params', [
      mojo.internal.StructField('binary_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('config_paths', 8, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('primary_language_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaParams_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec, 'media.mojom.SpeechRecognitionService_SetSodaConfigPaths_Params', [
      mojo.internal.StructField('config_paths', 0, 0, mojo.internal.Map(mojo.internal.String, mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionServicePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindSpeechRecognitionContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec,
      null,
      [context],
      false);
  }

  bindAudioSourceSpeechRecognitionContext(context) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec,
      null,
      [context],
      false);
  }

  setSodaPaths(binary_path, config_paths, primary_language_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec,
      null,
      [binary_path, config_paths, primary_language_name],
      false);
  }

  setSodaParams(mask_offensive_words) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

  setSodaConfigPaths(config_paths) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec,
      null,
      [config_paths],
      false);
  }

};

media.mojom.SpeechRecognitionService.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionService',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionService', [
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
        
        // Try Method 0: BindSpeechRecognitionContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSpeechRecognitionContext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindAudioSourceSpeechRecognitionContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindAudioSourceSpeechRecognitionContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSodaPaths
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSodaPaths (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetSodaParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSodaParams (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetSodaConfigPaths
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSodaConfigPaths (4)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindSpeechRecognitionContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindSpeechRecognitionContext');
          const result = this.impl.bindSpeechRecognitionContext(params.context);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_BindAudioSourceSpeechRecognitionContext_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.bindAudioSourceSpeechRecognitionContext');
          const result = this.impl.bindAudioSourceSpeechRecognitionContext(params.context);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaPaths_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSodaPaths');
          const result = this.impl.setSodaPaths(params.binary_path, params.config_paths, params.primary_language_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaParams_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSodaParams');
          const result = this.impl.setSodaParams(params.mask_offensive_words);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionService_SetSodaConfigPaths_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSodaConfigPaths');
          const result = this.impl.setSodaConfigPaths(params.config_paths);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionServiceReceiver = media.mojom.SpeechRecognitionServiceReceiver;

media.mojom.SpeechRecognitionServicePtr = media.mojom.SpeechRecognitionServiceRemote;
media.mojom.SpeechRecognitionServiceRequest = media.mojom.SpeechRecognitionServicePendingReceiver;


// Interface: AudioSourceFetcher
mojo.internal.Struct(
    media.mojom.AudioSourceFetcher_Start_ParamsSpec, 'media.mojom.AudioSourceFetcher_Start_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('audio_parameters', 16, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.AudioSourceFetcher_Stop_ParamsSpec, 'media.mojom.AudioSourceFetcher_Stop_Params', [
    ],
    [[0, 8]]);

media.mojom.AudioSourceFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioSourceFetcherRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioSourceFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioSourceFetcherPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioSourceFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioSourceFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioSourceFetcher', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(factory, device_id, audio_parameters) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.AudioSourceFetcher_Start_ParamsSpec,
      null,
      [factory, device_id, audio_parameters],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.AudioSourceFetcher_Stop_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.AudioSourceFetcher.getRemote = function() {
  let remote = new media.mojom.AudioSourceFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioSourceFetcher',
    'context');
  return remote.$;
};

media.mojom.AudioSourceFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioSourceFetcher', [
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
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
          const params = decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Start_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.factory, params.device_id, params.audio_parameters);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.AudioSourceFetcher_Stop_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioSourceFetcherReceiver = media.mojom.AudioSourceFetcherReceiver;

media.mojom.AudioSourceFetcherPtr = media.mojom.AudioSourceFetcherRemote;
media.mojom.AudioSourceFetcherRequest = media.mojom.AudioSourceFetcherPendingReceiver;

