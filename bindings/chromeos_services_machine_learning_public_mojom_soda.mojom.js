// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/services/machine_learning/public/mojom/soda.mojom
 // Module: chromeos.machine_learning.mojom

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
 

 mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.machine_learning = mojo.internal.bindings.chromeos.machine_learning || {};
mojo.internal.bindings.chromeos.machine_learning.mojom = mojo.internal.bindings.chromeos.machine_learning.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.chromeos.machine_learning.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognitionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.SpeakerDiarizationModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chromeos.machine_learning.mojom.SpeechRecognizerEventSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaMultilangConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaConfigSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.TimingInfoSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerEventSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.HypothesisPartInResultSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.PartialResultSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.FinalResultSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.AudioLevelEventSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.LangIdEventSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.LabelCorrectionEventSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient = {};
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient.$interfaceName = 'chromeos.machine_learning.mojom.SodaClient';
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer = {};
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer.$interfaceName = 'chromeos.machine_learning.mojom.SodaRecognizer';
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec = { $: {} };

// Enum: OptionalBool
mojo.internal.bindings.chromeos.machine_learning.mojom.OptionalBool = {
  kUnknown: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: SodaRecognitionMode
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognitionMode = {
  kCaption: 0,
  kIme: 1,
};

// Enum: SpeakerDiarizationMode
mojo.internal.bindings.chromeos.machine_learning.mojom.SpeakerDiarizationMode = {
  kDiarizationUnspecified: 0,
  kSpeakerDiarizationModeOffDefault: 1,
  kSpeakerChangeDetection: 2,
  kSpeakerLabelDetection: 3,
};

// Enum: EndpointerType
mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerType = {
  START_OF_SPEECH: 0,
  END_OF_SPEECH: 1,
  END_OF_AUDIO: 2,
  END_OF_UTTERANCE: 3,
};

// Enum: EndpointReason
mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointReason = {
  ENDPOINT_UNKNOWN: 0,
  ENDPOINT_END_OF_SPEECH: 1,
  ENDPOINT_END_OF_UTTERANCE: 2,
  ENDPOINT_END_OF_AUDIO: 3,
};

// Enum: AsrSwitchResult
mojo.internal.bindings.chromeos.machine_learning.mojom.AsrSwitchResult = {
  DEFAULT_NO_SWITCH: 0,
  SWITCH_SUCCEEDED: 1,
  SWITCH_FAILED: 2,
  SWITCH_SKIPPED_NO_LP: 3,
};

// Union: SpeechRecognizerEvent
mojo.internal.Union(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SpeechRecognizerEventSpec, 'chromeos.machine_learning.mojom.SpeechRecognizerEvent', {
      'arg_audio_event': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.AudioLevelEventSpec.$,
        'nullable': false,
      },
      'arg_partial_result': {
        'ordinal': 1,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.PartialResultSpec.$,
        'nullable': false,
      },
      'arg_endpointer_event': {
        'ordinal': 2,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerEventSpec.$,
        'nullable': false,
      },
      'arg_final_result': {
        'ordinal': 3,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.FinalResultSpec.$,
        'nullable': false,
      },
      'arg_langid_event': {
        'ordinal': 4,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.LangIdEventSpec.$,
        'nullable': false,
      },
      'arg_label_correction_event': {
        'ordinal': 5,
        'type': mojo.internal.bindings.chromeos.machine_learning.mojom.LabelCorrectionEventSpec.$,
        'nullable': false,
      },
    });

// Struct: SodaMultilangConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaMultilangConfigSpec, 'chromeos.machine_learning.mojom.SodaMultilangConfig', [
      mojo.internal.StructField('arg_locale_to_language_pack_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_rewind_when_switching_language', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SodaConfig
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaConfigSpec, 'chromeos.machine_learning.mojom.SodaConfig', [
      mojo.internal.StructField('arg_api_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_library_dlc_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_language_dlc_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_channel_count', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sample_rate', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enable_formatting', 32, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.OptionalBoolSpec.$, 0, false, 2, undefined),
      mojo.internal.StructField('arg_recognition_mode', 40, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognitionModeSpec.$, 0, false, 3, undefined),
      mojo.internal.StructField('arg_mask_offensive_words', 48, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('arg_speaker_change_detection', 48, 1, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('arg_include_logging_output', 48, 2, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('arg_multi_lang_config', 56, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.SodaMultilangConfigSpec.$, null, true, 7, undefined),
      mojo.internal.StructField('arg_kSpeakerDiarizationModeOffDefault', 64, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.SpeakerDiarizationMode speaker_diarization_mode =Spec.$, 0, false, 9, undefined),
      mojo.internal.StructField('arg_max_speaker_count', 72, 0, mojo.internal.Uint32, 2, false, 9, undefined),
    ],
    [[0, 40], [2, 48], [3, 56], [4, 64], [5, 64], [6, 64], [7, 72], [9, 88]]);

// Struct: TimingInfo
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.TimingInfoSpec, 'chromeos.machine_learning.mojom.TimingInfo', [
      mojo.internal.StructField('arg_audio_start_epoch', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_audio_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_elapsed_wall_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_end_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_latency', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_word_alignments', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_normalized_latency', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: EndpointerEvent
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerEventSpec, 'chromeos.machine_learning.mojom.EndpointerEvent', [
      mojo.internal.StructField('arg_endpointer_type', 0, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timing_event', 8, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.TimingInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HypothesisPartInResult
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.HypothesisPartInResultSpec, 'chromeos.machine_learning.mojom.HypothesisPartInResult', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_alignment', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_leading_space_$flag', 16, 0, mojo.internal.Bool, false, false, 8, { isPrimary: true, linkedValueFieldName: 'arg_leading_space_$value', originalFieldName: 'arg_leading_space' }),
      mojo.internal.StructField('arg_leading_space_$value', 16, 1, mojo.internal.Bool, false, false, 8, { isPrimary: false, linkedValueFieldName: 'arg_leading_space_$flag', originalFieldName: 'arg_leading_space' }),
      mojo.internal.StructField('arg_speaker_label', 24, 0, mojo.internal.String, null, true, 9, undefined),
      mojo.internal.StructField('arg_speaker_change', 32, 0, mojo.internal.Bool, false, false, 9, undefined),
    ],
    [[0, 24], [8, 32], [9, 48]]);

// Struct: PartialResult
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.PartialResultSpec, 'chromeos.machine_learning.mojom.PartialResult', [
      mojo.internal.StructField('arg_partial_text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_timing_event', 8, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.TimingInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hypothesis_part', 16, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.machine_learning.mojom.HypothesisPartInResultSpec.$, false), null, true, 9, undefined),
    ],
    [[0, 24], [9, 32]]);

// Struct: FinalResult
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.FinalResultSpec, 'chromeos.machine_learning.mojom.FinalResult', [
      mojo.internal.StructField('arg_final_hypotheses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoint_reason', 8, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.EndpointReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timing_event', 16, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.TimingInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hypothesis_part', 24, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.machine_learning.mojom.HypothesisPartInResultSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: AudioLevelEvent
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.AudioLevelEventSpec, 'chromeos.machine_learning.mojom.AudioLevelEvent', [
      mojo.internal.StructField('arg_rms', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_audio_level', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LangIdEvent
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.LangIdEventSpec, 'chromeos.machine_learning.mojom.LangIdEvent', [
      mojo.internal.StructField('arg_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_asr_switch_result', 8, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.AsrSwitchResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_confidence_level', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LabelCorrectionEvent
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.LabelCorrectionEventSpec, 'chromeos.machine_learning.mojom.LabelCorrectionEvent', [
      mojo.internal.StructField('arg_hypothesis_parts', 0, 0, mojo.internal.Array(mojo.internal.bindings.chromeos.machine_learning.mojom.HypothesisPartInResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SodaClient
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.chromeos.machine_learning.mojom.SpeechRecognizerEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStart() {
    return this.$.onStart();
  }
  onStop() {
    return this.$.onStop();
  }
  onSpeechRecognizerEvent(arg_event) {
    return this.$.onSpeechRecognizerEvent(arg_event);
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SodaClient', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onStart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec,
      null,
      [],
      false);
  }

  onStop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognizerEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SodaClient', [
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
        
        // Try Method 0: OnStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStart (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStop (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnSpeechRecognizerEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRecognizerEvent (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStart');
          const result = this.impl.onStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStop');
          const result = this.impl.onStop();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognizerEvent');
          const result = this.impl.onSpeechRecognizerEvent(params.arg_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientReceiver = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientReceiver;

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientPtr = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRemote;
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientRequest = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaClientPendingReceiver;


// Interface: SodaRecognizer
mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_Params', [
      mojo.internal.StructField('arg_audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addAudio(arg_audio) {
    return this.$.addAudio(arg_audio);
  }
  stop() {
    return this.$.stop();
  }
  start() {
    return this.$.start();
  }
  markDone() {
    return this.$.markDone();
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SodaRecognizer', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  addAudio(arg_audio) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec,
      null,
      [arg_audio],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  start() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec,
      null,
      [],
      false);
  }

  markDone() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer.getRemote = function() {
  let remote = new mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaRecognizer',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SodaRecognizer', [
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
        
        // Try Method 0: AddAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAudio (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MarkDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MarkDone (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addAudio');
          const result = this.impl.addAudio(params.arg_audio);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.markDone');
          const result = this.impl.markDone();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerReceiver = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerReceiver;

mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerPtr = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRemote;
mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerRequest = mojo.internal.bindings.chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver;

