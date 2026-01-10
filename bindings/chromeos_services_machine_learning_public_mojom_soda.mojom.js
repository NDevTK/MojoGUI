// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/machine_learning/public/mojom/soda.mojom
// Module: chromeos.machine_learning.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.machine_learning = chromeos.machine_learning || {};
chromeos.machine_learning.mojom = chromeos.machine_learning.mojom || {};

chromeos.machine_learning.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.SodaRecognitionModeSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.SpeakerDiarizationModeSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.EndpointerTypeSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.EndpointReasonSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };
chromeos.machine_learning.mojom.SpeechRecognizerEventSpec = { $: {} };
chromeos.machine_learning.mojom.SodaMultilangConfigSpec = { $: {} };
chromeos.machine_learning.mojom.SodaConfigSpec = { $: {} };
chromeos.machine_learning.mojom.TimingInfoSpec = { $: {} };
chromeos.machine_learning.mojom.EndpointerEventSpec = { $: {} };
chromeos.machine_learning.mojom.HypothesisPartInResultSpec = { $: {} };
chromeos.machine_learning.mojom.PartialResultSpec = { $: {} };
chromeos.machine_learning.mojom.FinalResultSpec = { $: {} };
chromeos.machine_learning.mojom.AudioLevelEventSpec = { $: {} };
chromeos.machine_learning.mojom.LangIdEventSpec = { $: {} };
chromeos.machine_learning.mojom.LabelCorrectionEventSpec = { $: {} };
chromeos.machine_learning.mojom.SodaClient = {};
chromeos.machine_learning.mojom.SodaClient.$interfaceName = 'chromeos.machine_learning.mojom.SodaClient';
chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaRecognizer = {};
chromeos.machine_learning.mojom.SodaRecognizer.$interfaceName = 'chromeos.machine_learning.mojom.SodaRecognizer';
chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec = { $: {} };
chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec = { $: {} };

// Enum: OptionalBool
chromeos.machine_learning.mojom.OptionalBool = {
  kUnknown: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: SodaRecognitionMode
chromeos.machine_learning.mojom.SodaRecognitionMode = {
  kCaption: 0,
  kIme: 1,
};

// Enum: SpeakerDiarizationMode
chromeos.machine_learning.mojom.SpeakerDiarizationMode = {
  kDiarizationUnspecified: 0,
  kSpeakerDiarizationModeOffDefault: 1,
  kSpeakerChangeDetection: 2,
  kSpeakerLabelDetection: 3,
};

// Enum: EndpointerType
chromeos.machine_learning.mojom.EndpointerType = {
  START_OF_SPEECH: 0,
  END_OF_SPEECH: 1,
  END_OF_AUDIO: 2,
  END_OF_UTTERANCE: 3,
};

// Enum: EndpointReason
chromeos.machine_learning.mojom.EndpointReason = {
  ENDPOINT_UNKNOWN: 0,
  ENDPOINT_END_OF_SPEECH: 1,
  ENDPOINT_END_OF_UTTERANCE: 2,
  ENDPOINT_END_OF_AUDIO: 3,
};

// Enum: AsrSwitchResult
chromeos.machine_learning.mojom.AsrSwitchResult = {
  DEFAULT_NO_SWITCH: 0,
  SWITCH_SUCCEEDED: 1,
  SWITCH_FAILED: 2,
  SWITCH_SKIPPED_NO_LP: 3,
};

// Union: SpeechRecognizerEvent
mojo.internal.Union(
    chromeos.machine_learning.mojom.SpeechRecognizerEventSpec, 'chromeos.machine_learning.mojom.SpeechRecognizerEvent', {
      'audio_event': {
        'ordinal': 0,
        'type': chromeos.machine_learning.mojom.AudioLevelEventSpec,
        'nullable': false,
      },
      'partial_result': {
        'ordinal': 1,
        'type': chromeos.machine_learning.mojom.PartialResultSpec,
        'nullable': false,
      },
      'endpointer_event': {
        'ordinal': 2,
        'type': chromeos.machine_learning.mojom.EndpointerEventSpec,
        'nullable': false,
      },
      'final_result': {
        'ordinal': 3,
        'type': chromeos.machine_learning.mojom.FinalResultSpec,
        'nullable': false,
      },
      'langid_event': {
        'ordinal': 4,
        'type': chromeos.machine_learning.mojom.LangIdEventSpec,
        'nullable': false,
      },
      'label_correction_event': {
        'ordinal': 5,
        'type': chromeos.machine_learning.mojom.LabelCorrectionEventSpec,
        'nullable': false,
      },
    });

// Struct: SodaMultilangConfig
mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaMultilangConfigSpec, 'chromeos.machine_learning.mojom.SodaMultilangConfig', [
      mojo.internal.StructField('rewind_when_switching_language', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('locale_to_language_pack_map', 8, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SodaConfig
mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaConfigSpec, 'chromeos.machine_learning.mojom.SodaConfig', [
      mojo.internal.StructField('channel_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('api_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('library_dlc_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language_dlc_path', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enable_formatting', 32, 0, chromeos.machine_learning.mojom.OptionalBoolSpec, null, false, 2, undefined),
      mojo.internal.StructField('recognition_mode', 36, 0, chromeos.machine_learning.mojom.SodaRecognitionModeSpec, null, false, 3, undefined),
      mojo.internal.StructField('mask_offensive_words', 40, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('speaker_change_detection', 40, 1, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('include_logging_output', 40, 2, mojo.internal.Bool, false, false, 6, undefined),
      mojo.internal.StructField('multi_lang_config', 48, 0, chromeos.machine_learning.mojom.SodaMultilangConfigSpec, null, true, 7, undefined),
      mojo.internal.StructField('kSpeakerDiarizationModeOffDefault', 56, 0, chromeos.machine_learning.mojom.SpeakerDiarizationMode speaker_diarization_mode =Spec, null, false, 9, undefined),
      mojo.internal.StructField('max_speaker_count', 64, 0, mojo.internal.Uint32, 0, false, 9, undefined),
    ],
    [[0, 40], [2, 48], [3, 48], [4, 56], [5, 56], [6, 56], [7, 64], [9, 80]]);

// Struct: TimingInfo
mojo.internal.Struct(
    chromeos.machine_learning.mojom.TimingInfoSpec, 'chromeos.machine_learning.mojom.TimingInfo', [
      mojo.internal.StructField('audio_start_epoch', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('audio_start_time', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('elapsed_wall_time', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_end_time', 24, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('latency', 32, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('normalized_latency', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('word_alignments', 48, 0, mojo.internal.Array(mojo_base.mojom.TimeDeltaSpec, false), null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: EndpointerEvent
mojo.internal.Struct(
    chromeos.machine_learning.mojom.EndpointerEventSpec, 'chromeos.machine_learning.mojom.EndpointerEvent', [
      mojo.internal.StructField('endpointer_type', 0, 0, chromeos.machine_learning.mojom.EndpointerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('timing_event', 8, 0, chromeos.machine_learning.mojom.TimingInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HypothesisPartInResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.HypothesisPartInResultSpec, 'chromeos.machine_learning.mojom.HypothesisPartInResult', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('alignment', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('leading_space_$flag', 16, 0, mojo.internal.Bool, false, false, 8, { isPrimary: true, linkedValueFieldName: 'leading_space_$value', originalFieldName: 'leading_space' }),
      mojo.internal.StructField('leading_space_$value', 16, 1, mojo.internal.Bool, false, false, 8, { isPrimary: false, linkedValueFieldName: 'leading_space_$flag', originalFieldName: 'leading_space' }),
      mojo.internal.StructField('speaker_change', 16, 2, mojo.internal.Bool, false, false, 9, undefined),
      mojo.internal.StructField('speaker_label', 24, 0, mojo.internal.String, null, true, 9, undefined),
    ],
    [[0, 24], [8, 32], [9, 40]]);

// Struct: PartialResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.PartialResultSpec, 'chromeos.machine_learning.mojom.PartialResult', [
      mojo.internal.StructField('partial_text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('timing_event', 8, 0, chromeos.machine_learning.mojom.TimingInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('hypothesis_part', 16, 0, mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), null, true, 9, undefined),
    ],
    [[0, 24], [9, 32]]);

// Struct: FinalResult
mojo.internal.Struct(
    chromeos.machine_learning.mojom.FinalResultSpec, 'chromeos.machine_learning.mojom.FinalResult', [
      mojo.internal.StructField('final_hypotheses', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('endpoint_reason', 8, 0, chromeos.machine_learning.mojom.EndpointReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('timing_event', 16, 0, chromeos.machine_learning.mojom.TimingInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('hypothesis_part', 24, 0, mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: AudioLevelEvent
mojo.internal.Struct(
    chromeos.machine_learning.mojom.AudioLevelEventSpec, 'chromeos.machine_learning.mojom.AudioLevelEvent', [
      mojo.internal.StructField('rms', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('audio_level', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LangIdEvent
mojo.internal.Struct(
    chromeos.machine_learning.mojom.LangIdEventSpec, 'chromeos.machine_learning.mojom.LangIdEvent', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confidence_level', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('asr_switch_result', 12, 0, chromeos.machine_learning.mojom.AsrSwitchResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LabelCorrectionEvent
mojo.internal.Struct(
    chromeos.machine_learning.mojom.LabelCorrectionEventSpec, 'chromeos.machine_learning.mojom.LabelCorrectionEvent', [
      mojo.internal.StructField('hypothesis_parts', 0, 0, mojo.internal.Array(chromeos.machine_learning.mojom.HypothesisPartInResultSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SodaClient
mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaClient_OnStart_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaClient_OnStop_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_ParamsSpec, 'chromeos.machine_learning.mojom.SodaClient_OnSpeechRecognizerEvent_Params', [
      mojo.internal.StructField('event', 0, 0, chromeos.machine_learning.mojom.SpeechRecognizerEventSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

chromeos.machine_learning.mojom.SodaClientPtr = chromeos.machine_learning.mojom.SodaClientRemote;
chromeos.machine_learning.mojom.SodaClientRequest = chromeos.machine_learning.mojom.SodaClientPendingReceiver;


// Interface: SodaRecognizer
mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_AddAudio_Params', [
      mojo.internal.StructField('audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaRecognizer_Stop_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaRecognizer_Start_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_ParamsSpec, 'chromeos.machine_learning.mojom.SodaRecognizer_MarkDone_Params', [
    ],
    [[0, 8]]);

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

chromeos.machine_learning.mojom.SodaRecognizerPtr = chromeos.machine_learning.mojom.SodaRecognizerRemote;
chromeos.machine_learning.mojom.SodaRecognizerRequest = chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver;

