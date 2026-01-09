// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
};

// Enum: RecognizerClientType
media.mojom.RecognizerClientType = {
  kUnknown: 0,
};

// Struct: HypothesisParts
media.mojom.HypothesisParts = class {
  constructor(values = {}) {
    this.hypothesis_part_offset = values.hypothesis_part_offset !== undefined ? values.hypothesis_part_offset : "";
  }
};

// Struct: MediaTimestampRange
media.mojom.MediaTimestampRange = class {
  constructor(values = {}) {
    this.end = values.end !== undefined ? values.end : null;
  }
};

// Struct: TimingInformation
media.mojom.TimingInformation = class {
  constructor(values = {}) {
    this.audio_end_time = values.audio_end_time !== undefined ? values.audio_end_time : null;
    this.hypothesis_parts = values.hypothesis_parts !== undefined ? values.hypothesis_parts : [];
    this.`audio_start_time` = values.`audio_start_time` !== undefined ? values.`audio_start_time` : null;
    this.originating_media_timestamps = values.originating_media_timestamps !== undefined ? values.originating_media_timestamps : [];
  }
};

// Struct: SpeechRecognitionResult
media.mojom.SpeechRecognitionResult = class {
  constructor(values = {}) {
    this.transcription = values.transcription !== undefined ? values.transcription : "";
    this.timing_information = values.timing_information !== undefined ? values.timing_information : false;
  }
};

// Struct: LanguageIdentificationEvent
media.mojom.LanguageIdentificationEvent = class {
  constructor(values = {}) {
    this.confidence_level = values.confidence_level !== undefined ? values.confidence_level : "";
    this.asr_switch_result = values.asr_switch_result !== undefined ? values.asr_switch_result : null;
  }
};

// Struct: SpeechRecognitionOptions
media.mojom.SpeechRecognitionOptions = class {
  constructor(values = {}) {
    this.enable_formatting = values.enable_formatting !== undefined ? values.enable_formatting : false;
    this.recognizer_client_type = values.recognizer_client_type !== undefined ? values.recognizer_client_type : false;
    this.period = values.period !== undefined ? values.period : null;
    this.nonzero = values.nonzero !== undefined ? values.nonzero : null;
    this.recognition_context = values.recognition_context !== undefined ? values.recognition_context : 0;
  }
};

// Interface: SpeechRecognitionContext
media.mojom.SpeechRecognitionContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionContext';
  }

};

media.mojom.SpeechRecognitionContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionRecognizer
media.mojom.SpeechRecognitionRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionRecognizer';
  }

};

media.mojom.SpeechRecognitionRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionRecognizerClient
media.mojom.SpeechRecognitionRecognizerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionRecognizerClient';
  }

};

media.mojom.SpeechRecognitionRecognizerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionBrowserObserver
media.mojom.SpeechRecognitionBrowserObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionBrowserObserver';
  }

};

media.mojom.SpeechRecognitionBrowserObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionSurface
media.mojom.SpeechRecognitionSurfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionSurface';
  }

};

media.mojom.SpeechRecognitionSurfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionSurfaceClient
media.mojom.SpeechRecognitionSurfaceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionSurfaceClient';
  }

};

media.mojom.SpeechRecognitionSurfaceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionClientBrowserInterface
media.mojom.SpeechRecognitionClientBrowserInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionClientBrowserInterface';
  }

};

media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
