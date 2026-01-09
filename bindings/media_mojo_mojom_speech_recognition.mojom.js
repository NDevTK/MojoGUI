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

  0(receiver, client, options) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(receiver, client, options)
      resolve({});
    });
  }

  1(session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous) {
    // Method: 1
    // Call: 1(session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous)
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

  0(buffer, media_start_pts) {
    // Method: 0
    // Call: 0(buffer, media_start_pts)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  string("en-US") {
    // Method: string
    // Call: string("en-US")
  }

  2(language) {
    // Method: 2
    // Call: 2(language)
  }

  3(mask_offensive_words) {
    // Method: 3
    // Call: 3(mask_offensive_words)
  }

  4(recognition_context) {
    // Method: 4
    // Call: 4(recognition_context)
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

  0(result) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(result)
      resolve({});
    });
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2() {
    // Method: 2
    // Call: 2()
  }

  3(event) {
    // Method: 3
    // Call: 3(event)
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

  0(is_speech_recognition_available) {
    // Method: 0
    // Call: 0(is_speech_recognition_available)
  }

  1(language) {
    // Method: 1
    // Call: 1(language)
  }

  2(mask_offensive_words) {
    // Method: 2
    // Call: 2(mask_offensive_words)
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
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

  0(observer) {
    // Method: 0
    // Call: 0(observer)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  bindBabelOrcaSpeechRecognitionBrowserObserver() {
    // Method: BindBabelOrcaSpeechRecognitionBrowserObserver
    // Call: BindBabelOrcaSpeechRecognitionBrowserObserver()
  }

  2(observer) {
    // Method: 2
    // Call: 2(observer)
  }

};

media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
