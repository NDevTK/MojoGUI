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
};

// Enum: EndpointerType
chromeos.machine_learning.mojom.EndpointerType = {
  but: 0,
};

// Enum: EndpointReason
chromeos.machine_learning.mojom.EndpointReason = {
  unknown: 0,
};

// Enum: AsrSwitchResult
chromeos.machine_learning.mojom.AsrSwitchResult = {
  but: 0,
};

// Struct: SodaMultilangConfig
chromeos.machine_learning.mojom.SodaMultilangConfig = class {
  constructor(values = {}) {
    this.locale_to_language_pack_map = values.locale_to_language_pack_map !== undefined ? values.locale_to_language_pack_map : false;
  }
};

// Struct: SodaConfig
chromeos.machine_learning.mojom.SodaConfig = class {
  constructor(values = {}) {
    this.kSpeakerDiarizationModeOffDefault = values.kSpeakerDiarizationModeOffDefault !== undefined ? values.kSpeakerDiarizationModeOffDefault : 0;
    this.2 = values.2 !== undefined ? values.2 : 0;
  }
};

// Struct: TimingInfo
chromeos.machine_learning.mojom.TimingInfo = class {
  constructor(values = {}) {
    this.word_alignments = values.word_alignments !== undefined ? values.word_alignments : 0;
  }
};

// Struct: EndpointerEvent
chromeos.machine_learning.mojom.EndpointerEvent = class {
  constructor(values = {}) {
    this.timing_event = values.timing_event !== undefined ? values.timing_event : 0;
  }
};

// Struct: HypothesisPartInResult
chromeos.machine_learning.mojom.HypothesisPartInResult = class {
  constructor(values = {}) {
    this.speaker_label = values.speaker_label !== undefined ? values.speaker_label : false;
  }
};

// Struct: PartialResult
chromeos.machine_learning.mojom.PartialResult = class {
  constructor(values = {}) {
    this.timing_event = values.timing_event !== undefined ? values.timing_event : "";
    this.hypothesis_part = values.hypothesis_part !== undefined ? values.hypothesis_part : [];
  }
};

// Struct: FinalResult
chromeos.machine_learning.mojom.FinalResult = class {
  constructor(values = {}) {
    this.timing_event = values.timing_event !== undefined ? values.timing_event : 0;
    this.hypothesis_part = values.hypothesis_part !== undefined ? values.hypothesis_part : [];
  }
};

// Struct: AudioLevelEvent
chromeos.machine_learning.mojom.AudioLevelEvent = class {
  constructor(values = {}) {
    this.rms = values.rms !== undefined ? values.rms : 0;
    this.audio_level = values.audio_level !== undefined ? values.audio_level : 0;
  }
};

// Struct: LangIdEvent
chromeos.machine_learning.mojom.LangIdEvent = class {
  constructor(values = {}) {
    this.language = values.language !== undefined ? values.language : "";
    this.confidence_level = values.confidence_level !== undefined ? values.confidence_level : 0;
    this.asr_switch_result = values.asr_switch_result !== undefined ? values.asr_switch_result : null;
  }
};

// Struct: LabelCorrectionEvent
chromeos.machine_learning.mojom.LabelCorrectionEvent = class {
  constructor(values = {}) {
    this.hypothesis_parts = values.hypothesis_parts !== undefined ? values.hypothesis_parts : [];
  }
};

// Interface: SodaClient
chromeos.machine_learning.mojom.SodaClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.SodaClient';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2(event) {
    // Method: 2
    // Call: 2(event)
  }

};

chromeos.machine_learning.mojom.SodaClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SodaRecognizer
chromeos.machine_learning.mojom.SodaRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.machine_learning.mojom.SodaRecognizer';
  }

  0(audio) {
    // Method: 0
    // Call: 0(audio)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3() {
    // Method: 3
    // Call: 3()
  }

};

chromeos.machine_learning.mojom.SodaRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
