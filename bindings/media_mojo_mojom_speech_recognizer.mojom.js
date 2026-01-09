// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AvailabilityStatus
media.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};

// Struct: StartSpeechRecognitionRequestParams
media.mojom.StartSpeechRecognitionRequestParams = class {
  constructor(values = {}) {
    this.sample_rate = values.sample_rate !== undefined ? values.sample_rate : 0;
  }
};

// Interface: SpeechRecognizer
media.mojom.SpeechRecognizerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognizer';
  }

  start(params) {
    // Method: Start
    // Call: Start(params)
  }

};

media.mojom.SpeechRecognizerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OnDeviceSpeechRecognition
media.mojom.OnDeviceSpeechRecognitionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.OnDeviceSpeechRecognition';
  }

  available(languages) {
    // Method: Available
    return new Promise((resolve) => {
      // Call: Available(languages)
      resolve({});
    });
  }

  install(languages) {
    // Method: Install
    return new Promise((resolve) => {
      // Call: Install(languages)
      resolve({});
    });
  }

};

media.mojom.OnDeviceSpeechRecognitionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionSession
media.mojom.SpeechRecognitionSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionSession';
  }

};

media.mojom.SpeechRecognitionSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionSessionClient
media.mojom.SpeechRecognitionSessionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionSessionClient';
  }

};

media.mojom.SpeechRecognitionSessionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
