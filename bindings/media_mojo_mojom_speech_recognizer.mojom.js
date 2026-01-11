// Auto-generated MojoJS binding
 // Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};

mojo.internal.bindings.media.mojom.AvailabilityStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.StartSpeechRecognitionRequestParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognizer = {};
mojo.internal.bindings.media.mojom.SpeechRecognizer.$interfaceName = 'media.mojom.SpeechRecognizer';
mojo.internal.bindings.media.mojom.SpeechRecognizer_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition = {};
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition.$interfaceName = 'media.mojom.OnDeviceSpeechRecognition';
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSession = {};
mojo.internal.bindings.media.mojom.SpeechRecognitionSession.$interfaceName = 'media.mojom.SpeechRecognitionSession';
mojo.internal.bindings.media.mojom.SpeechRecognitionSession_Abort_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient = {};
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient.$interfaceName = 'media.mojom.SpeechRecognitionSessionClient';
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec = { $: {} };

// Enum: AvailabilityStatus
mojo.internal.bindings.media.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};

// Struct: StartSpeechRecognitionRequestParams
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.StartSpeechRecognitionRequestParamsSpec, 'media.mojom.StartSpeechRecognitionRequestParams', [
      mojo.internal.StructField('arg_session_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_grammars', 24, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.SpeechRecognitionGrammarSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_recognition_context', 32, 0, mojo.internal.bindings.media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_audio_forwarder', 40, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.media.mojom.SpeechRecognitionAudioForwarderRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_max_hypotheses', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_channel_count', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_continuous', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_interim_results', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_on_device', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cloud_fallback', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: SpeechRecognizer
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognizer_Start_ParamsSpec, 'media.mojom.SpeechRecognizer_Start_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.media.mojom.StartSpeechRecognitionRequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.SpeechRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.SpeechRecognizerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.SpeechRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(arg_params) {
    return this.$.start(arg_params);
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognizer', [
      { explicit: null },
    ]);
  }

  start(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognizer_Start_ParamsSpec,
      null,
      [arg_params],
      false);
  }

};

mojo.internal.bindings.media.mojom.SpeechRecognizer.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.SpeechRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognizer',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.SpeechRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognizer', [
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
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognizer_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognizer_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.arg_params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognizerReceiver = mojo.internal.bindings.media.mojom.SpeechRecognizerReceiver;

mojo.internal.bindings.media.mojom.SpeechRecognizerPtr = mojo.internal.bindings.media.mojom.SpeechRecognizerRemote;
mojo.internal.bindings.media.mojom.SpeechRecognizerRequest = mojo.internal.bindings.media.mojom.SpeechRecognizerPendingReceiver;


// Interface: OnDeviceSpeechRecognition
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_Params', [
      mojo.internal.StructField('arg_languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.media.mojom.AvailabilityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_Params', [
      mojo.internal.StructField('arg_languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OnDeviceSpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  available(arg_languages) {
    return this.$.available(arg_languages);
  }
  install(arg_languages) {
    return this.$.install(arg_languages);
  }
};

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OnDeviceSpeechRecognition', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  available(arg_languages) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec,
      mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec,
      [arg_languages],
      false);
  }

  install(arg_languages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec,
      mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec,
      [arg_languages],
      false);
  }

};

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OnDeviceSpeechRecognition',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OnDeviceSpeechRecognition', [
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
        
        // Try Method 0: Available
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Available (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Install
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.available');
          const result = this.impl.available(params.arg_languages);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Available FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install(params.arg_languages);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Install FAILED:', e));
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

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionReceiver = mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionReceiver;

mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionPtr = mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRemote;
mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionRequest = mojo.internal.bindings.media.mojom.OnDeviceSpeechRecognitionPendingReceiver;


// Interface: SpeechRecognitionSession
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSession_Abort_ParamsSpec, 'media.mojom.SpeechRecognitionSession_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec, 'media.mojom.SpeechRecognitionSession_StopCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_Params', [
      mojo.internal.StructField('arg_recognition_context', 0, 0, mojo.internal.bindings.media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  abort() {
    return this.$.abort();
  }
  stopCapture() {
    return this.$.stopCapture();
  }
  updateRecognitionContext(arg_recognition_context) {
    return this.$.updateRecognitionContext(arg_recognition_context);
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSession', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSession_Abort_ParamsSpec,
      null,
      [],
      false);
  }

  stopCapture() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec,
      null,
      [],
      false);
  }

  updateRecognitionContext(arg_recognition_context) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec,
      null,
      [arg_recognition_context],
      false);
  }

};

mojo.internal.bindings.media.mojom.SpeechRecognitionSession.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSession',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSession', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopCapture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateRecognitionContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRecognitionContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopCapture');
          const result = this.impl.stopCapture();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRecognitionContext');
          const result = this.impl.updateRecognitionContext(params.arg_recognition_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionReceiver = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionReceiver;

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionPtr = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRemote;
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionRequest = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionPendingReceiver;


// Interface: SpeechRecognitionSessionClient
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_Params', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.WebSpeechRecognitionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.media.mojom.SpeechRecognitionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Started_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Ended_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resultRetrieved(arg_results) {
    return this.$.resultRetrieved(arg_results);
  }
  errorOccurred(arg_error) {
    return this.$.errorOccurred(arg_error);
  }
  started() {
    return this.$.started();
  }
  audioStarted() {
    return this.$.audioStarted();
  }
  soundStarted() {
    return this.$.soundStarted();
  }
  soundEnded() {
    return this.$.soundEnded();
  }
  audioEnded() {
    return this.$.audioEnded();
  }
  ended() {
    return this.$.ended();
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSessionClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
    ]);
  }

  resultRetrieved(arg_results) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec,
      null,
      [arg_results],
      false);
  }

  errorOccurred(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  started() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec,
      null,
      [],
      false);
  }

  audioStarted() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundStarted() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundEnded() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec,
      null,
      [],
      false);
  }

  audioEnded() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec,
      null,
      [],
      false);
  }

  ended() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSessionClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSessionClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
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
        
        // Try Method 0: ResultRetrieved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResultRetrieved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ErrorOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ErrorOccurred (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Started
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Started (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AudioStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioStarted (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SoundStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SoundStarted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SoundEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SoundEnded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AudioEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioEnded (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Ended
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ended (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resultRetrieved');
          const result = this.impl.resultRetrieved(params.arg_results);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.errorOccurred');
          const result = this.impl.errorOccurred(params.arg_error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.started');
          const result = this.impl.started();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.audioStarted');
          const result = this.impl.audioStarted();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.soundStarted');
          const result = this.impl.soundStarted();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.soundEnded');
          const result = this.impl.soundEnded();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.audioEnded');
          const result = this.impl.audioEnded();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ended');
          const result = this.impl.ended();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientReceiver = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientReceiver;

mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientPtr = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRemote;
mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientRequest = mojo.internal.bindings.media.mojom.SpeechRecognitionSessionClientPendingReceiver;

