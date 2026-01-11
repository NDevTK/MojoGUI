// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};

mojo.internal.bindings.blink.mojom.SpeechSynthesisErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.SpeechSynthesisUtteranceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver = {};
mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver.$interfaceName = 'blink.mojom.SpeechSynthesisVoiceListObserver';
mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient = {};
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient.$interfaceName = 'blink.mojom.SpeechSynthesisClient';
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesis = {};
mojo.internal.bindings.blink.mojom.SpeechSynthesis.$interfaceName = 'blink.mojom.SpeechSynthesis';
mojo.internal.bindings.blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesis_Speak_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesis_Pause_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesis_Resume_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SpeechSynthesis_Cancel_ParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kSpeechSynthesisDefaultRate = 1.0;

mojo.internal.bindings.blink.mojom.kSpeechSynthesisDefaultPitch = 1.0;

mojo.internal.bindings.blink.mojom.kSpeechSynthesisDefaultVolume = 1.0;

mojo.internal.bindings.blink.mojom.kSpeechSynthesisDoublePrefNotSet = mojo.internal.bindings.blink.mojom.-1.0;

// Enum: SpeechSynthesisErrorCode
mojo.internal.bindings.blink.mojom.SpeechSynthesisErrorCode = {
  kCancelled: 0,
  kInterrupted: 1,
  kErrorOccurred: 2,
  kNoError: 3,
};

// Struct: SpeechSynthesisUtterance
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisUtteranceSpec, 'blink.mojom.SpeechSynthesisUtterance', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_voice', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_volume', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rate', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pitch', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SpeechSynthesisVoice
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceSpec, 'blink.mojom.SpeechSynthesisVoice', [
      mojo.internal.StructField('arg_voice_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_lang', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_local_service', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_default', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SpeechSynthesisVoiceListObserver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec, 'blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_Params', [
      mojo.internal.StructField('arg_voice_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisVoiceListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSetVoiceList(arg_voice_list) {
    return this.$.onSetVoiceList(arg_voice_list);
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisVoiceListObserver', [
      { explicit: null },
    ]);
  }

  onSetVoiceList(arg_voice_list) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec,
      null,
      [arg_voice_list],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisVoiceListObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisVoiceListObserver', [
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
        
        // Try Method 0: OnSetVoiceList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSetVoiceList (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSetVoiceList');
          const result = this.impl.onSetVoiceList(params.arg_voice_list);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverReceiver = mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverReceiver;

mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverPtr = mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRemote;
mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverRequest = mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver;


// Interface: SpeechSynthesisClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_Params', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SpeechSynthesisErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_Params', [
      mojo.internal.StructField('arg_char_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_char_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_Params', [
      mojo.internal.StructField('arg_char_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_char_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStartedSpeaking() {
    return this.$.onStartedSpeaking();
  }
  onFinishedSpeaking(arg_error_code) {
    return this.$.onFinishedSpeaking(arg_error_code);
  }
  onPausedSpeaking() {
    return this.$.onPausedSpeaking();
  }
  onResumedSpeaking() {
    return this.$.onResumedSpeaking();
  }
  onEncounteredWordBoundary(arg_char_index, arg_char_length) {
    return this.$.onEncounteredWordBoundary(arg_char_index, arg_char_length);
  }
  onEncounteredSentenceBoundary(arg_char_index, arg_char_length) {
    return this.$.onEncounteredSentenceBoundary(arg_char_index, arg_char_length);
  }
  onEncounteredSpeakingError() {
    return this.$.onEncounteredSpeakingError();
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStartedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onFinishedSpeaking(arg_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec,
      null,
      [arg_error_code],
      false);
  }

  onPausedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onResumedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onEncounteredWordBoundary(arg_char_index, arg_char_length) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec,
      null,
      [arg_char_index, arg_char_length],
      false);
  }

  onEncounteredSentenceBoundary(arg_char_index, arg_char_length) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec,
      null,
      [arg_char_index, arg_char_length],
      false);
  }

  onEncounteredSpeakingError() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SpeechSynthesisClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisClient', [
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
        
        // Try Method 0: OnStartedSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedSpeaking (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFinishedSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFinishedSpeaking (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPausedSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPausedSpeaking (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnResumedSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResumedSpeaking (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnEncounteredWordBoundary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEncounteredWordBoundary (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnEncounteredSentenceBoundary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEncounteredSentenceBoundary (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnEncounteredSpeakingError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEncounteredSpeakingError (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartedSpeaking');
          const result = this.impl.onStartedSpeaking();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFinishedSpeaking');
          const result = this.impl.onFinishedSpeaking(params.arg_error_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPausedSpeaking');
          const result = this.impl.onPausedSpeaking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResumedSpeaking');
          const result = this.impl.onResumedSpeaking();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEncounteredWordBoundary');
          const result = this.impl.onEncounteredWordBoundary(params.arg_char_index, params.arg_char_length);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEncounteredSentenceBoundary');
          const result = this.impl.onEncounteredSentenceBoundary(params.arg_char_index, params.arg_char_length);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEncounteredSpeakingError');
          const result = this.impl.onEncounteredSpeakingError();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientReceiver = mojo.internal.bindings.blink.mojom.SpeechSynthesisClientReceiver;

mojo.internal.bindings.blink.mojom.SpeechSynthesisClientPtr = mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRemote;
mojo.internal.bindings.blink.mojom.SpeechSynthesisClientRequest = mojo.internal.bindings.blink.mojom.SpeechSynthesisClientPendingReceiver;


// Interface: SpeechSynthesis
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec, 'blink.mojom.SpeechSynthesis_AddVoiceListObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.SpeechSynthesisVoiceListObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesis_Speak_ParamsSpec, 'blink.mojom.SpeechSynthesis_Speak_Params', [
      mojo.internal.StructField('arg_utterance', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SpeechSynthesisUtteranceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.SpeechSynthesisClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesis_Pause_ParamsSpec, 'blink.mojom.SpeechSynthesis_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesis_Resume_ParamsSpec, 'blink.mojom.SpeechSynthesis_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SpeechSynthesis_Cancel_ParamsSpec, 'blink.mojom.SpeechSynthesis_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.SpeechSynthesisPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesis';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SpeechSynthesisPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SpeechSynthesisRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addVoiceListObserver(arg_observer) {
    return this.$.addVoiceListObserver(arg_observer);
  }
  speak(arg_utterance, arg_client) {
    return this.$.speak(arg_utterance, arg_client);
  }
  pause() {
    return this.$.pause();
  }
  resume() {
    return this.$.resume();
  }
  cancel() {
    return this.$.cancel();
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesis', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addVoiceListObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  speak(arg_utterance, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesis_Speak_ParamsSpec,
      null,
      [arg_utterance, arg_client],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesis_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesis_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.SpeechSynthesis_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SpeechSynthesis.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SpeechSynthesisRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesis',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesis', [
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
        
        // Try Method 0: AddVoiceListObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVoiceListObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Speak
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Speak_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Speak (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Pause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addVoiceListObserver');
          const result = this.impl.addVoiceListObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Speak_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.speak');
          const result = this.impl.speak(params.arg_utterance, params.arg_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SpeechSynthesis_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SpeechSynthesisReceiver = mojo.internal.bindings.blink.mojom.SpeechSynthesisReceiver;

mojo.internal.bindings.blink.mojom.SpeechSynthesisPtr = mojo.internal.bindings.blink.mojom.SpeechSynthesisRemote;
mojo.internal.bindings.blink.mojom.SpeechSynthesisRequest = mojo.internal.bindings.blink.mojom.SpeechSynthesisPendingReceiver;

