// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/speech_recognition.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: SpeechRecognitionType
ax.mojom.SpeechRecognitionType = {
};

// Struct: SpeechRecognitionResultEvent
ax.mojom.SpeechRecognitionResultEvent = class {
  constructor(values = {}) {
    this.is_final = values.is_final !== undefined ? values.is_final : false;
  }
};

// Struct: SpeechRecognitionErrorEvent
ax.mojom.SpeechRecognitionErrorEvent = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: StartOptions
ax.mojom.StartOptions = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.interim_results = values.interim_results !== undefined ? values.interim_results : false;
  }
};

// Struct: StopOptions
ax.mojom.StopOptions = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: SpeechRecognitionStartInfo
ax.mojom.SpeechRecognitionStartInfo = class {
  constructor(values = {}) {
    this.observer_or_error = values.observer_or_error !== undefined ? values.observer_or_error : null;
  }
};

// Interface: SpeechRecognitionEventObserver
ax.mojom.SpeechRecognitionEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.SpeechRecognitionEventObserver';
  }

  onStop() {
    // Method: OnStop
    // Call: OnStop()
  }

  onResult(event) {
    // Method: OnResult
    // Call: OnResult(event)
  }

  onError(event) {
    // Method: OnError
    // Call: OnError(event)
  }

};

ax.mojom.SpeechRecognitionEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognition
ax.mojom.SpeechRecognitionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.SpeechRecognition';
  }

  start(options) {
    // Method: Start
    return new Promise((resolve) => {
      // Call: Start(options)
      resolve({});
    });
  }

  stop(options) {
    // Method: Stop
    return new Promise((resolve) => {
      // Call: Stop(options)
      resolve({});
    });
  }

};

ax.mojom.SpeechRecognitionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
