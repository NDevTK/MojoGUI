// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition.mojom
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
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.ConfidenceLevelSpec = { $: mojo.internal.Enum() };
media.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };
media.mojom.SpeechRecognitionModeSpec = { $: mojo.internal.Enum() };
media.mojom.RecognizerClientTypeSpec = { $: mojo.internal.Enum() };
media.mojom.HypothesisPartsSpec = { $: {} };
media.mojom.MediaTimestampRangeSpec = { $: {} };
media.mojom.TimingInformationSpec = { $: {} };
media.mojom.SpeechRecognitionResultSpec = { $: {} };
media.mojom.LanguageIdentificationEventSpec = { $: {} };
media.mojom.SpeechRecognitionOptionsSpec = { $: {} };
media.mojom.SpeechRecognitionContext = {};
media.mojom.SpeechRecognitionContext.$interfaceName = 'media.mojom.SpeechRecognitionContext';
media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer = {};
media.mojom.SpeechRecognitionRecognizer.$interfaceName = 'media.mojom.SpeechRecognitionRecognizer';
media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient = {};
media.mojom.SpeechRecognitionRecognizerClient.$interfaceName = 'media.mojom.SpeechRecognitionRecognizerClient';
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver = {};
media.mojom.SpeechRecognitionBrowserObserver.$interfaceName = 'media.mojom.SpeechRecognitionBrowserObserver';
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface = {};
media.mojom.SpeechRecognitionSurface.$interfaceName = 'media.mojom.SpeechRecognitionSurface';
media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurfaceClient = {};
media.mojom.SpeechRecognitionSurfaceClient.$interfaceName = 'media.mojom.SpeechRecognitionSurfaceClient';
media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface = {};
media.mojom.SpeechRecognitionClientBrowserInterface.$interfaceName = 'media.mojom.SpeechRecognitionClientBrowserInterface';
media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec = { $: {} };

// Enum: ConfidenceLevel
media.mojom.ConfidenceLevel = {
  kUnknown: 0,
  kNotConfident: 1,
  kConfident: 2,
  kHighlyConfident: 3,
};

// Enum: AsrSwitchResult
media.mojom.AsrSwitchResult = {
  kDefaultNoSwitch: 0,
  kSwitchSucceeded: 1,
  kSwitchFailed: 2,
  kSwitchSkipedNoLp: 3,
};

// Enum: SpeechRecognitionMode
media.mojom.SpeechRecognitionMode = {
  kUnknown: 0,
  kIme: 1,
  kCaption: 2,
};

// Enum: RecognizerClientType
media.mojom.RecognizerClientType = {
  kUnknown: 0,
  kDictation: 1,
  kLiveCaption: 2,
  kProjector: 3,
  kCastModerator: 4,
  MinVersion: 4,
};

// Struct: HypothesisParts
mojo.internal.Struct(
    media.mojom.HypothesisPartsSpec, 'media.mojom.HypothesisParts', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hypothesis_part_offset', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaTimestampRange
mojo.internal.Struct(
    media.mojom.MediaTimestampRangeSpec, 'media.mojom.MediaTimestampRange', [
      mojo.internal.StructField('start', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TimingInformation
mojo.internal.Struct(
    media.mojom.TimingInformationSpec, 'media.mojom.TimingInformation', [
      mojo.internal.StructField('audio_start_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_end_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hypothesis_parts', 16, 0, mojo.internal.Array(media.mojom.HypothesisPartsSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('originating_media_timestamps', 24, 0, mojo.internal.Array(media.mojom.MediaTimestampRangeSpec.$, false), null, true, 11, undefined),
    ],
    [[0, 32], [11, 40]]);

// Struct: SpeechRecognitionResult
mojo.internal.Struct(
    media.mojom.SpeechRecognitionResultSpec, 'media.mojom.SpeechRecognitionResult', [
      mojo.internal.StructField('transcription', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timing_information', 8, 0, media.mojom.TimingInformationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_final', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LanguageIdentificationEvent
mojo.internal.Struct(
    media.mojom.LanguageIdentificationEventSpec, 'media.mojom.LanguageIdentificationEvent', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confidence_level', 8, 0, media.mojom.ConfidenceLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('asr_switch_result', 16, 0, media.mojom.AsrSwitchResultSpec.$, null, true, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: SpeechRecognitionOptions
mojo.internal.Struct(
    media.mojom.SpeechRecognitionOptionsSpec, 'media.mojom.SpeechRecognitionOptions', [
      mojo.internal.StructField('recognition_mode', 0, 0, media.mojom.SpeechRecognitionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enable_formatting', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recognizer_client_type', 24, 0, media.mojom.RecognizerClientTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('is_server_based', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('skip_continuously_empty_audio', 32, 1, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('experiment_recognizer_routing_key', 40, 0, mojo.internal.String, null, true, 5, undefined),
      mojo.internal.StructField('channel_count', 48, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('sample_rate', 52, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('recognition_context', 56, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 8, undefined),
    ],
    [[0, 32], [1, 48], [4, 48], [5, 56], [6, 64], [8, 72]]);

// Interface: SpeechRecognitionContext
mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec, 'media.mojom.SpeechRecognitionContext_BindRecognizer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionRecognizerSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec, 'media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParams', [
      mojo.internal.StructField('is_multichannel_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec, 'media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_Params', [
      mojo.internal.StructField('session_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('audio_forwarder', 16, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('continuous', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

media.mojom.SpeechRecognitionContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionContextRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionContextPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionContext', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  bindRecognizer(receiver, client, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec,
      media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec,
      [receiver, client, options],
      false);
  }

  bindWebSpeechRecognizer(session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec,
      null,
      [session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous],
      false);
  }

};

media.mojom.SpeechRecognitionContext.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionContext',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionContext', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: BindRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindRecognizer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindWebSpeechRecognizer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebSpeechRecognizer (1)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindRecognizer');
          const result = this.impl.bindRecognizer(params.receiver, params.client, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindWebSpeechRecognizer');
          const result = this.impl.bindWebSpeechRecognizer(params.session_receiver, params.session_client, params.audio_forwarder, params.channel_count, params.sample_rate, params.options, params.continuous);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionContextReceiver = media.mojom.SpeechRecognitionContextReceiver;

media.mojom.SpeechRecognitionContextPtr = media.mojom.SpeechRecognitionContextRemote;
media.mojom.SpeechRecognitionContextRequest = media.mojom.SpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionRecognizer
mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioDataS16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_start_pts', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 10, undefined),
    ],
    [[0, 16], [10, 24]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_MarkDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_Params', [
      mojo.internal.StructField('recognition_context', 0, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionRecognizerPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionRecognizer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  sendAudioToSpeechRecognitionService(buffer, media_start_pts) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec,
      null,
      [buffer, media_start_pts],
      false);
  }

  markDone() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec,
      null,
      [],
      false);
  }

  onLanguageChanged(language) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec,
      null,
      [language],
      false);
  }

  onMaskOffensiveWordsChanged(mask_offensive_words) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

  updateRecognitionContext(recognition_context) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context],
      false);
  }

};

media.mojom.SpeechRecognitionRecognizer.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionRecognizer',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionRecognizer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
        
        // Try Method 0: SendAudioToSpeechRecognitionService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAudioToSpeechRecognitionService (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MarkDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MarkDone (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnLanguageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLanguageChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnMaskOffensiveWordsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMaskOffensiveWordsChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateRecognitionContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRecognitionContext (4)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendAudioToSpeechRecognitionService');
          const result = this.impl.sendAudioToSpeechRecognitionService(params.buffer, params.media_start_pts);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.markDone');
          const result = this.impl.markDone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLanguageChanged');
          const result = this.impl.onLanguageChanged(params.language);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMaskOffensiveWordsChanged');
          const result = this.impl.onMaskOffensiveWordsChanged(params.mask_offensive_words);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRecognitionContext');
          const result = this.impl.updateRecognitionContext(params.recognition_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionRecognizerReceiver = media.mojom.SpeechRecognitionRecognizerReceiver;

media.mojom.SpeechRecognitionRecognizerPtr = media.mojom.SpeechRecognitionRecognizerRemote;
media.mojom.SpeechRecognitionRecognizerRequest = media.mojom.SpeechRecognitionRecognizerPendingReceiver;


// Interface: SpeechRecognitionRecognizerClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_Params', [
      mojo.internal.StructField('result', 0, 0, media.mojom.SpeechRecognitionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParams', [
      mojo.internal.StructField('continue_recognition', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.LanguageIdentificationEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionRecognizerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionRecognizerClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionRecognizerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionRecognizerClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionRecognizerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionRecognizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionRecognizerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onSpeechRecognitionRecognitionEvent(result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec,
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec,
      [result],
      false);
  }

  onSpeechRecognitionStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognitionError() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec,
      null,
      [],
      false);
  }

  onLanguageIdentificationEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

media.mojom.SpeechRecognitionRecognizerClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionRecognizerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionRecognizerClient',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionRecognizerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionRecognizerClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
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
        
        // Try Method 0: OnSpeechRecognitionRecognitionEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRecognitionRecognitionEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSpeechRecognitionStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRecognitionStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSpeechRecognitionError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRecognitionError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnLanguageIdentificationEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLanguageIdentificationEvent (3)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionRecognitionEvent');
          const result = this.impl.onSpeechRecognitionRecognitionEvent(params.result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionStopped');
          const result = this.impl.onSpeechRecognitionStopped();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionError');
          const result = this.impl.onSpeechRecognitionError();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLanguageIdentificationEvent');
          const result = this.impl.onLanguageIdentificationEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionRecognizerClientReceiver = media.mojom.SpeechRecognitionRecognizerClientReceiver;

media.mojom.SpeechRecognitionRecognizerClientPtr = media.mojom.SpeechRecognitionRecognizerClientRemote;
media.mojom.SpeechRecognitionRecognizerClientRequest = media.mojom.SpeechRecognitionRecognizerClientPendingReceiver;


// Interface: SpeechRecognitionBrowserObserver
mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_Params', [
      mojo.internal.StructField('is_speech_recognition_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionBrowserObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionBrowserObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionBrowserObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionBrowserObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionBrowserObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionBrowserObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionBrowserObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  speechRecognitionAvailabilityChanged(is_speech_recognition_available) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec,
      null,
      [is_speech_recognition_available],
      false);
  }

  speechRecognitionLanguageChanged(language) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec,
      null,
      [language],
      false);
  }

  speechRecognitionMaskOffensiveWordsChanged(mask_offensive_words) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

};

media.mojom.SpeechRecognitionBrowserObserver.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionBrowserObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionBrowserObserver',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionBrowserObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionBrowserObserver', [
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
        
        // Try Method 0: SpeechRecognitionAvailabilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SpeechRecognitionAvailabilityChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SpeechRecognitionLanguageChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SpeechRecognitionLanguageChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SpeechRecognitionMaskOffensiveWordsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SpeechRecognitionMaskOffensiveWordsChanged (2)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionAvailabilityChanged');
          const result = this.impl.speechRecognitionAvailabilityChanged(params.is_speech_recognition_available);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionLanguageChanged');
          const result = this.impl.speechRecognitionLanguageChanged(params.language);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionMaskOffensiveWordsChanged');
          const result = this.impl.speechRecognitionMaskOffensiveWordsChanged(params.mask_offensive_words);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionBrowserObserverReceiver = media.mojom.SpeechRecognitionBrowserObserverReceiver;

media.mojom.SpeechRecognitionBrowserObserverPtr = media.mojom.SpeechRecognitionBrowserObserverRemote;
media.mojom.SpeechRecognitionBrowserObserverRequest = media.mojom.SpeechRecognitionBrowserObserverPendingReceiver;


// Interface: SpeechRecognitionSurface
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec, 'media.mojom.SpeechRecognitionSurface_Activate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec, 'media.mojom.SpeechRecognitionSurface_GetBounds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec, 'media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParams', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionSurfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSurfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSurface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSurfacePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSurfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSurfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSurface', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  activate() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec,
      null,
      [],
      false);
  }

  getBounds() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec,
      media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.SpeechRecognitionSurface.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSurfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSurface',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSurfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSurface', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: Activate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Activate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBounds (1)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activate');
          const result = this.impl.activate();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBounds');
          const result = this.impl.getBounds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec);
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

media.mojom.SpeechRecognitionSurfaceReceiver = media.mojom.SpeechRecognitionSurfaceReceiver;

media.mojom.SpeechRecognitionSurfacePtr = media.mojom.SpeechRecognitionSurfaceRemote;
media.mojom.SpeechRecognitionSurfaceRequest = media.mojom.SpeechRecognitionSurfacePendingReceiver;


// Interface: SpeechRecognitionSurfaceClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec, 'media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_Params', [
    ],
    [[0, 8]]);

media.mojom.SpeechRecognitionSurfaceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSurfaceClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSurfaceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSurfaceClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSurfaceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSurfaceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSurfaceClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onSessionEnded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onFullscreenToggled() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.SpeechRecognitionSurfaceClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSurfaceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSurfaceClient',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSurfaceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionSurfaceClient', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnSessionEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionEnded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFullscreenToggled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFullscreenToggled (1)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionEnded');
          const result = this.impl.onSessionEnded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFullscreenToggled');
          const result = this.impl.onFullscreenToggled();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionSurfaceClientReceiver = media.mojom.SpeechRecognitionSurfaceClientReceiver;

media.mojom.SpeechRecognitionSurfaceClientPtr = media.mojom.SpeechRecognitionSurfaceClientRemote;
media.mojom.SpeechRecognitionSurfaceClientRequest = media.mojom.SpeechRecognitionSurfaceClientPendingReceiver;


// Interface: SpeechRecognitionClientBrowserInterface
mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionClientBrowserInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionClientBrowserInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionClientBrowserInterface', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  bindSpeechRecognitionBrowserObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  rEMOVED_1() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_2(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec,
      null,
      [observer],
      false);
  }

};

media.mojom.SpeechRecognitionClientBrowserInterface.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionClientBrowserInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionClientBrowserInterface',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionClientBrowserInterface', [
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
        
        // Try Method 0: BindSpeechRecognitionBrowserObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSpeechRecognitionBrowserObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: REMOVED_1
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_1 (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: REMOVED_2
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> REMOVED_2 (2)');
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindSpeechRecognitionBrowserObserver');
          const result = this.impl.bindSpeechRecognitionBrowserObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_1');
          const result = this.impl.rEMOVED_1();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_2');
          const result = this.impl.rEMOVED_2(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver = media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver;

media.mojom.SpeechRecognitionClientBrowserInterfacePtr = media.mojom.SpeechRecognitionClientBrowserInterfaceRemote;
media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver;

