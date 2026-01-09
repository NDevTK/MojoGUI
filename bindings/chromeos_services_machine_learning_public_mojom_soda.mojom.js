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
      packedSize: 16,
      fields: [
        { name: 'locale_to_language_pack_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'word_alignments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'timing_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'speaker_label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'hypothesis_part', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'hypothesis_part', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
        { name: 'audio_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'asr_switch_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'hypothesis_parts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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

