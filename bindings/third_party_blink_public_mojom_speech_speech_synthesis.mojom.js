// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SpeechSynthesisErrorCode
blink.mojom.SpeechSynthesisErrorCode = {
};

// Struct: SpeechSynthesisUtterance
blink.mojom.SpeechSynthesisUtterance = class {
  constructor(values = {}) {
    this.pitch = values.pitch !== undefined ? values.pitch : 0;
  }
};

// Struct: SpeechSynthesisVoice
blink.mojom.SpeechSynthesisVoice = class {
  constructor(values = {}) {
    this.is_default = values.is_default !== undefined ? values.is_default : false;
  }
};

// Interface: SpeechSynthesisVoiceListObserver
blink.mojom.SpeechSynthesisVoiceListObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SpeechSynthesisVoiceListObserver';
  }

  onSetVoiceList(voice_list) {
    // Method: OnSetVoiceList
    // Call: OnSetVoiceList(voice_list)
  }

};

blink.mojom.SpeechSynthesisVoiceListObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechSynthesisClient
blink.mojom.SpeechSynthesisClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SpeechSynthesisClient';
  }

  onStartedSpeaking() {
    // Method: OnStartedSpeaking
    // Call: OnStartedSpeaking()
  }

  onFinishedSpeaking(error_code) {
    // Method: OnFinishedSpeaking
    // Call: OnFinishedSpeaking(error_code)
  }

  onPausedSpeaking() {
    // Method: OnPausedSpeaking
    // Call: OnPausedSpeaking()
  }

  onResumedSpeaking() {
    // Method: OnResumedSpeaking
    // Call: OnResumedSpeaking()
  }

  onEncounteredWordBoundary(char_index, char_length) {
    // Method: OnEncounteredWordBoundary
    // Call: OnEncounteredWordBoundary(char_index, char_length)
  }

  onEncounteredSentenceBoundary(char_index, char_length) {
    // Method: OnEncounteredSentenceBoundary
    // Call: OnEncounteredSentenceBoundary(char_index, char_length)
  }

  onEncounteredSpeakingError() {
    // Method: OnEncounteredSpeakingError
    // Call: OnEncounteredSpeakingError()
  }

};

blink.mojom.SpeechSynthesisClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechSynthesis
blink.mojom.SpeechSynthesisPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SpeechSynthesis';
  }

  addVoiceListObserver(observer) {
    // Method: AddVoiceListObserver
    // Call: AddVoiceListObserver(observer)
  }

  speak(utterance, client) {
    // Method: Speak
    // Call: Speak(utterance, client)
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

blink.mojom.SpeechSynthesisRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
