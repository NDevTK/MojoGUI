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

// Enum: SodaRecognitionMode
chromeos.machine_learning.mojom.SodaRecognitionMode = {
  kIme: 0,
};

// Enum: SpeakerDiarizationMode
chromeos.machine_learning.mojom.SpeakerDiarizationMode = {
  kDiarizationUnspecified: 0,
  kSpeakerChangeDetection: 1,
  kSpeakerLabelDetection: 2,
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
  SWITCH_SUCCEEDED: 0,
  SWITCH_FAILED: 1,
  SWITCH_SKIPPED_NO_LP: 2,
};

// Struct: SodaMultilangConfig
chromeos.machine_learning.mojom.SodaMultilangConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaMultilangConfig',
      packedSize: 24,
      fields: [
        { name: 'rewind_when_switching_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'locale_to_language_pack_map', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SodaConfig
chromeos.machine_learning.mojom.SodaConfigSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.SodaConfig',
      packedSize: 104,
      fields: [
        { name: 'channel_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sample_rate', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'api_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'library_dlc_path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'language_dlc_path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'enable_formatting', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'recognition_mode', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mask_offensive_words', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'speaker_change_detection', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'include_logging_output', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'multi_lang_config', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'kSpeakerDiarizationModeOffDefault', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_speaker_count', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'audio_start_epoch', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'audio_start_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'elapsed_wall_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'event_end_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'latency', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'normalized_latency', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'word_alignments', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'endpointer_type', packedOffset: 8, packedBitOffset: 0, type: chromeos.machine_learning.mojom.EndpointerTypeSpec, nullable: false },
        { name: 'timing_event', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HypothesisPartInResult
chromeos.machine_learning.mojom.HypothesisPartInResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.HypothesisPartInResult',
      packedSize: 48,
      fields: [
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'alignment', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'leading_space', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'speaker_change', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'speaker_label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'partial_text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timing_event', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true },
        { name: 'hypothesis_part', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'final_hypotheses', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'endpoint_reason', packedOffset: 16, packedBitOffset: 0, type: chromeos.machine_learning.mojom.EndpointReasonSpec, nullable: false },
        { name: 'timing_event', packedOffset: 24, packedBitOffset: 0, type: chromeos.machine_learning.mojom.TimingInfoSpec, nullable: true },
        { name: 'hypothesis_part', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'rms', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'audio_level', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LangIdEvent
chromeos.machine_learning.mojom.LangIdEventSpec = {
  $: {
    structSpec: {
      name: 'chromeos.machine_learning.mojom.LangIdEvent',
      packedSize: 32,
      fields: [
        { name: 'language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'confidence_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'asr_switch_result', packedOffset: 24, packedBitOffset: 0, type: chromeos.machine_learning.mojom.AsrSwitchResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'hypothesis_parts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SodaClient
chromeos.machine_learning.mojom.SodaClient = {};

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

// Legacy compatibility
chromeos.machine_learning.mojom.SodaClientPtr = chromeos.machine_learning.mojom.SodaClientRemote;
chromeos.machine_learning.mojom.SodaClientRequest = chromeos.machine_learning.mojom.SodaClientPendingReceiver;


// Interface: SodaRecognizer
chromeos.machine_learning.mojom.SodaRecognizer = {};

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

// Legacy compatibility
chromeos.machine_learning.mojom.SodaRecognizerPtr = chromeos.machine_learning.mojom.SodaRecognizerRemote;
chromeos.machine_learning.mojom.SodaRecognizerRequest = chromeos.machine_learning.mojom.SodaRecognizerPendingReceiver;

