// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/soda.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};


// Enum: OptionalBool
chromeos.machine_learning.mojom.OptionalBool = {
  kFalse: 0,
  kTrue: 1,
};
chromeos.machine_learning.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };

// Enum: SodaRecognitionMode
chromeos.machine_learning.mojom.SodaRecognitionMode = {
  kIme: 0,
};
chromeos.machine_learning.mojom.SodaRecognitionModeSpec = { $: mojo.internal.Enum() };

// Enum: SpeakerDiarizationMode
chromeos.machine_learning.mojom.SpeakerDiarizationMode = {
  kDiarizationUnspecified: 0,
  kSpeakerChangeDetection: 1,
  kSpeakerLabelDetection: 2,
};
chromeos.machine_learning.mojom.SpeakerDiarizationModeSpec = { $: mojo.internal.Enum() };

// Enum: EndpointerType
chromeos.machine_learning.mojom.EndpointerType = {
  START_OF_SPEECH: 0,
  END_OF_SPEECH: 1,
  END_OF_AUDIO: 2,
  END_OF_UTTERANCE: 3,
};
chromeos.machine_learning.mojom.EndpointerTypeSpec = { $: mojo.internal.Enum() };

// Enum: EndpointReason
chromeos.machine_learning.mojom.EndpointReason = {
  ENDPOINT_UNKNOWN: 0,
  ENDPOINT_END_OF_SPEECH: 1,
  ENDPOINT_END_OF_UTTERANCE: 2,
  ENDPOINT_END_OF_AUDIO: 3,
};
chromeos.machine_learning.mojom.EndpointReasonSpec = { $: mojo.internal.Enum() };

// Enum: AsrSwitchResult
chromeos.machine_learning.mojom.AsrSwitchResult = {
  SWITCH_SUCCEEDED: 0,
  SWITCH_FAILED: 1,
  SWITCH_SKIPPED_NO_LP: 2,
};
chromeos.machine_learning.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };

// Union: SpeechRecognizerEvent
chromeos.machine_learning.mojom.SpeechRecognizerEventSpec = { $: mojo.internal.Union(
    'chromeos.machine_learning.mojom.SpeechRecognizerEvent', {
      'audio_event': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.AudioLevelEventSpec,
      }},
      'partial_result': {
        'ordinal': 1,
        'type': chromeos.machine_learning.mojom.PartialResultSpec,
      }},
      'endpointer_event': {
        'ordinal': 2,
        'type': chromeos.machine_learning.mojom.EndpointerEventSpec,
      }},
      'final_result': {
        'ordinal': 3,
        'type': chromeos.machine_learning.mojom.FinalResultSpec,
      }},
      'langid_event': {
        'ordinal': 4,
        'type': chromeos.machine_learning.mojom.LangIdEventSpec,
      }},
      'label_correction_event': {
        'ordinal': 5,
        'type': chromeos.machine_learning.mojom.LabelCorrectionEventSpec,
      }},
    })
};

// Struct: SodaMultilangConfig
chromeos.machine_learning.mojom.SodaMultilangConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaMultilangConfig',
      packedSize: 24,
      fields: [
        { name: 'rewind_when_switching_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'locale_to_language_pack_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SodaConfig
chromeos.machine_learning.mojom.SodaConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaConfig',
      packedSize: 72,
      fields: [
        { name: 'channel_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'api_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'library_dlc_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'language_dlc_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enable_formatting', packedOffset: 32, packedBitOffset: 0, type: chromeos.machine_learning.mojom.OptionalBoolSpec, nullable: false, minVersion: 2 },
        { name: 'recognition_mode', packedOffset: 36, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SodaRecognitionModeSpec, nullable: false, minVersion: 3 },
        { name: 'mask_offensive_words', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 4 },
        { name: 'speaker_change_detection', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
        { name: 'include_logging_output', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 6 },
        { name: 'multi_lang_config', packedOffset: 48, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SodaMultilangConfigSpec, nullable: true, minVersion: 7 },
        { name: 'kSpeakerDiarizationModeOffDefault', packedOffset: 56, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SpeakerDiarizationMode speaker_diarization_mode =Spec, nullable: false, minVersion: 9 },
        { name: 'max_speaker_count', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 2, packedSize: 48}, {version: 3, packedSize: 48}, {version: 4, packedSize: 56}, {version: 5, packedSize: 56}, {version: 6, packedSize: 56}, {version: 7, packedSize: 64}, {version: 9, packedSize: 72}]
    }
  }
};

// Struct: TimingInfo
chromeos.machine_learning.mojom.TimingInfoSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.TimingInfo',
      packedSize: 64,
      fields: [
        { name: 'audio_start_epoch', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'audio_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'elapsed_wall_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'event_end_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'latency', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'normalized_latency', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'word_alignments', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: EndpointerEvent
chromeos.machine_learning.mojom.EndpointerEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.EndpointerEvent',
      packedSize: 24,
      fields: [
        { name: 'endpointer_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.EndpointerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'timing_event', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: HypothesisPartInResult
chromeos.machine_learning.mojom.HypothesisPartInResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HypothesisPartInResult',
      packedSize: 40,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'alignment', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'leading_space_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 8, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'leading_space_$value', originalFieldName: 'leading_space' } },
        { name: 'leading_space_$value', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 8, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'leading_space_$flag', originalFieldName: 'leading_space' } },
        { name: 'speaker_change', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 9 },
        { name: 'speaker_label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 8, packedSize: 32}, {version: 9, packedSize: 40}]
    }
  }
};

// Struct: PartialResult
chromeos.machine_learning.mojom.PartialResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.PartialResult',
      packedSize: 32,
      fields: [
        { name: 'partial_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'timing_event', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true, minVersion: 0 },
        { name: 'hypothesis_part', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 9, packedSize: 32}]
    }
  }
};

// Struct: FinalResult
chromeos.machine_learning.mojom.FinalResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.FinalResult',
      packedSize: 40,
      fields: [
        { name: 'final_hypotheses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'endpoint_reason', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.EndpointReasonSpec, nullable: false, minVersion: 0 },
        { name: 'timing_event', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true, minVersion: 0 },
        { name: 'hypothesis_part', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: AudioLevelEvent
chromeos.machine_learning.mojom.AudioLevelEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.AudioLevelEvent',
      packedSize: 16,
      fields: [
        { name: 'rms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'audio_level', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LangIdEvent
chromeos.machine_learning.mojom.LangIdEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.LangIdEvent',
      packedSize: 24,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'confidence_level', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'asr_switch_result', packedOffset: 12, packedBitOffset: 0, type: chromeos.machine_learning.mojom.AsrSwitchResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LabelCorrectionEvent
chromeos.machine_learning.mojom.LabelCorrectionEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.LabelCorrectionEvent',
      packedSize: 16,
      fields: [
        { name: 'hypothesis_parts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SodaClient
chromeos.machine_learning.mojom.SodaClient = {};

chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient_OnStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient_OnStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SpeechRecognizerEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.machine_learning.mojom.SodaClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.SodaClientRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.SodaClientPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.SodaClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.SodaClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec,
      null,
      []);
  }

  onStop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec,
      null,
      []);
  }

  onSpeechRecognizerEvent(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec,
      null,
      [event]);
  }

};

chromeos.machine_learning.mojom.SodaClient.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.SodaClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnStart
chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient.OnStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStop
chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient.OnStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSpeechRecognizerEvent
chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaClient.OnSpeechRecognizerEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: chromeos.machine_learning.mojom.SpeechRecognizerEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.SodaClientPtr = chromeos.machine_learning.mojom.SodaClientRemote;
chromeos.machine_learning.mojom.SodaClientRequest = chromeos.machine_learning.mojom.SodaClientPendingReceiver;


// Interface: SodaRecognizer
chromeos.machine_learning.mojom.SodaRecognizer = {};

chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_Params',
      packedSize: 16,
      fields: [
        { name: 'audio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer_Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer_Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.machine_learning.mojom.SodaRecognizerRemote = class {
  static get $interfaceName() {
    return 'chromeos.machine_learning.mojom.SodaRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver,
      handle);
    this.$ = new chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.machine_learning.mojom.SodaRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAudio(audio) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec,
      null,
      [audio]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec,
      null,
      []);
  }

  start() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec,
      null,
      []);
  }

  markDone() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec,
      null,
      []);
  }

};

chromeos.machine_learning.mojom.SodaRecognizer.getRemote = function() {
  let remote = new chromeos.machine_learning.mojom.SodaRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.machine_learning.mojom.SodaRecognizer',
    'context');
  return remote.$;
};

// ParamsSpec for AddAudio
chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer.AddAudio_Params',
      packedSize: 16,
      fields: [
        { name: 'audio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Start
chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer.Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MarkDone
chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaRecognizer.MarkDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromeos.machine_learning.mojom.SodaRecognizerPtr = chromeos.machine_learning.mojom.SodaRecognizerRemote;
chromeos.machine_learning.mojom.SodaRecognizerRequest = chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver;

