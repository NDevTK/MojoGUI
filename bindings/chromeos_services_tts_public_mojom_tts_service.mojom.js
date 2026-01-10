// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/tts/public/mojom/tts_service.mojom
// Module: chromeos.tts.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var chromeos = chromeos || {};
chromeos.tts = chromeos.tts || {};
chromeos.tts.mojom = chromeos.tts.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

chromeos.tts.mojom.AudioParametersSpec = { $: {} };
chromeos.tts.mojom.TtsService = {};
chromeos.tts.mojom.TtsService.$interfaceName = 'chromeos.tts.mojom.TtsService';
chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream = {};
chromeos.tts.mojom.GoogleTtsStream.$interfaceName = 'chromeos.tts.mojom.GoogleTtsStream';
chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream = {};
chromeos.tts.mojom.PlaybackTtsStream.$interfaceName = 'chromeos.tts.mojom.PlaybackTtsStream';
chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver = {};
chromeos.tts.mojom.TtsEventObserver.$interfaceName = 'chromeos.tts.mojom.TtsEventObserver';
chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec = { $: {} };

// Struct: AudioParameters
mojo.internal.Struct(
    chromeos.tts.mojom.AudioParametersSpec, 'chromeos.tts.mojom.AudioParameters', [
      mojo.internal.StructField('sample_rate', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TtsService
mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec, 'chromeos.tts.mojom.TtsService_BindGoogleTtsStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.GoogleTtsStreamSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_factory', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec, 'chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.PlaybackTtsStreamSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_factory', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('desired_audio_parameters', 16, 0, chromeos.tts.mojom.AudioParametersSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec, 'chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParams', [
      mojo.internal.StructField('audio_parameters', 0, 0, chromeos.tts.mojom.AudioParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.tts.mojom.TtsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.TtsServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.TtsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.TtsServicePendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.TtsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.tts.mojom.TtsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindGoogleTtsStream(receiver, stream_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec,
      null,
      [receiver, stream_factory],
      false);
  }

  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec,
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec,
      [receiver, stream_factory, desired_audio_parameters],
      false);
  }

};

chromeos.tts.mojom.TtsService.getRemote = function() {
  let remote = new chromeos.tts.mojom.TtsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.TtsService',
    'context');
  return remote.$;
};

chromeos.tts.mojom.TtsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsService', [
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
        
        // Try Method 0: BindGoogleTtsStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGoogleTtsStream (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindPlaybackTtsStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPlaybackTtsStream (1)');
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
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGoogleTtsStream');
          const result = this.impl.bindGoogleTtsStream(params.receiver, params.stream_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindPlaybackTtsStream');
          const result = this.impl.bindPlaybackTtsStream(params.receiver, params.stream_factory, params.desired_audio_parameters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec);
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

chromeos.tts.mojom.TtsServiceReceiver = chromeos.tts.mojom.TtsServiceReceiver;

chromeos.tts.mojom.TtsServicePtr = chromeos.tts.mojom.TtsServiceRemote;
chromeos.tts.mojom.TtsServiceRequest = chromeos.tts.mojom.TtsServicePendingReceiver;


// Interface: GoogleTtsStream
mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_InstallVoice_Params', [
      mojo.internal.StructField('voice_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('voice_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SelectVoice_Params', [
      mojo.internal.StructField('voice_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Speak_Params', [
      mojo.internal.StructField('text_jspb', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('speaker_params_jspb', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParams', [
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Resume_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.GoogleTtsStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.GoogleTtsStreamRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.GoogleTtsStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.GoogleTtsStreamPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.GoogleTtsStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.tts.mojom.GoogleTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GoogleTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  installVoice(voice_name, voice_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec,
      [voice_name, voice_bytes],
      false);
  }

  selectVoice(voice_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec,
      [voice_name],
      false);
  }

  speak(text_jspb, speaker_params_jspb) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec,
      [text_jspb, speaker_params_jspb],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.GoogleTtsStream.getRemote = function() {
  let remote = new chromeos.tts.mojom.GoogleTtsStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.GoogleTtsStream',
    'context');
  return remote.$;
};

chromeos.tts.mojom.GoogleTtsStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GoogleTtsStream', [
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
        
        // Try Method 0: InstallVoice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallVoice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SelectVoice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectVoice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Speak
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Speak (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (6)');
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
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installVoice');
          const result = this.impl.installVoice(params.voice_name, params.voice_bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectVoice');
          const result = this.impl.selectVoice(params.voice_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.speak');
          const result = this.impl.speak(params.text_jspb, params.speaker_params_jspb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.tts.mojom.GoogleTtsStreamReceiver = chromeos.tts.mojom.GoogleTtsStreamReceiver;

chromeos.tts.mojom.GoogleTtsStreamPtr = chromeos.tts.mojom.GoogleTtsStreamRemote;
chromeos.tts.mojom.GoogleTtsStreamRequest = chromeos.tts.mojom.GoogleTtsStreamPendingReceiver;


// Interface: PlaybackTtsStream
mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParams', [
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_Params', [
      mojo.internal.StructField('frames_buffer', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('char_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_buffer', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Resume_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.PlaybackTtsStreamRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.PlaybackTtsStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.PlaybackTtsStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.tts.mojom.PlaybackTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PlaybackTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  play() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec,
      chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec,
      [],
      false);
  }

  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec,
      null,
      [frames_buffer, char_index, last_buffer],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.PlaybackTtsStream.getRemote = function() {
  let remote = new chromeos.tts.mojom.PlaybackTtsStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.PlaybackTtsStream',
    'context');
  return remote.$;
};

chromeos.tts.mojom.PlaybackTtsStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PlaybackTtsStream', [
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
        
        // Try Method 0: Play
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Play (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendAudioBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAudioBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.play');
          const result = this.impl.play();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendAudioBuffer');
          const result = this.impl.sendAudioBuffer(params.frames_buffer, params.char_index, params.last_buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.tts.mojom.PlaybackTtsStreamReceiver = chromeos.tts.mojom.PlaybackTtsStreamReceiver;

chromeos.tts.mojom.PlaybackTtsStreamPtr = chromeos.tts.mojom.PlaybackTtsStreamRemote;
chromeos.tts.mojom.PlaybackTtsStreamRequest = chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver;


// Interface: TtsEventObserver
mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnTimepoint_Params', [
      mojo.internal.StructField('char_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnEnd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnError_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.TtsEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.TtsEventObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.TtsEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.TtsEventObserverPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.TtsEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.tts.mojom.TtsEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsEventObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec,
      null,
      [],
      false);
  }

  onTimepoint(char_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec,
      null,
      [char_index],
      false);
  }

  onEnd() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec,
      null,
      [],
      false);
  }

  onError() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.TtsEventObserver.getRemote = function() {
  let remote = new chromeos.tts.mojom.TtsEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.TtsEventObserver',
    'context');
  return remote.$;
};

chromeos.tts.mojom.TtsEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsEventObserver', [
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
        
        // Try Method 0: OnStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStart (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTimepoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimepoint (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnEnd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnd (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStart');
          const result = this.impl.onStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTimepoint');
          const result = this.impl.onTimepoint(params.char_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEnd');
          const result = this.impl.onEnd();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.tts.mojom.TtsEventObserverReceiver = chromeos.tts.mojom.TtsEventObserverReceiver;

chromeos.tts.mojom.TtsEventObserverPtr = chromeos.tts.mojom.TtsEventObserverRemote;
chromeos.tts.mojom.TtsEventObserverRequest = chromeos.tts.mojom.TtsEventObserverPendingReceiver;

