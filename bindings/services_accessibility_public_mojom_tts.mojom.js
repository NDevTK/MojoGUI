// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/tts.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: TtsEventType
ax.mojom.TtsEventType = {
  kStart: 0,
  kEnd: 1,
  kWord: 2,
  kSentence: 3,
  kMarker: 4,
  kInterrupted: 5,
  kCancelled: 6,
  kError: 7,
  kPause: 8,
  kResume: 9,
};

// Enum: TtsError
ax.mojom.TtsError = {
  kNoError: 0,
  kErrorExtensionIdMismatch: 1,
  kErrorInvalidLang: 2,
  kErrorInvalidPitch: 3,
  kErrorInvalidRate: 4,
  kErrorInvalidVolume: 5,
  kErrorMissingPauseOrResume: 6,
  kErrorUndeclaredEventType: 7,
  kErrorUtteranceTooLong: 8,
};

// Struct: TtsVoice
ax.mojom.TtsVoice = class {
  constructor(values = {}) {
    this.voice_name = values.voice_name !== undefined ? values.voice_name : "";
    this.form = values.form !== undefined ? values.form : null;
    this.lang = values.lang !== undefined ? values.lang : "";
    this.event_types = values.event_types !== undefined ? values.event_types : false;
  }
};

// Struct: TtsOptions
ax.mojom.TtsOptions = class {
  constructor(values = {}) {
    this.1.0 = values.1.0 !== undefined ? values.1.0 : 0;
    this.is = values.is !== undefined ? values.is : null;
    this.above = values.above !== undefined ? values.above : null;
    this.1.0 = values.1.0 !== undefined ? values.1.0 : 0;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.1.0 = values.1.0 !== undefined ? values.1.0 : 0;
    this.If = values.If !== undefined ? values.If : null;
    this.false = values.false !== undefined ? values.false : 0;
    this.voice_name = values.voice_name !== undefined ? values.voice_name : "";
    this.engine_id = values.engine_id !== undefined ? values.engine_id : "";
    this.form = values.form !== undefined ? values.form : null;
    this.lang = values.lang !== undefined ? values.lang : "";
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: TtsEvent
ax.mojom.TtsEvent = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.char_index = values.char_index !== undefined ? values.char_index : 0;
    this.error_message = values.error_message !== undefined ? values.error_message : "";
    this.kWord = values.kWord !== undefined ? values.kWord : null;
    this.is_final = values.is_final !== undefined ? values.is_final : 0;
  }
};

// Struct: TtsSpeakResult
ax.mojom.TtsSpeakResult = class {
  constructor(values = {}) {
    this.utterance_client = values.utterance_client !== undefined ? values.utterance_client : null;
  }
};

// Interface: TtsUtteranceClient
ax.mojom.TtsUtteranceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.TtsUtteranceClient';
  }

  onEvent(event) {
    // Method: OnEvent
    // Call: OnEvent(event)
  }

};

ax.mojom.TtsUtteranceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Tts
ax.mojom.TtsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.Tts';
  }

  speak(utterance, options) {
    // Method: Speak
    return new Promise((resolve) => {
      // Call: Speak(utterance, options)
      resolve({});
    });
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

  isSpeaking() {
    // Method: IsSpeaking
    return new Promise((resolve) => {
      // Call: IsSpeaking()
      resolve({});
    });
  }

  getVoices() {
    // Method: GetVoices
    return new Promise((resolve) => {
      // Call: GetVoices()
      resolve({});
    });
  }

};

ax.mojom.TtsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
