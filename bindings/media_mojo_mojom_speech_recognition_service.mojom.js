// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: AudioSourceSpeechRecognitionContext
media.mojom.AudioSourceSpeechRecognitionContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioSourceSpeechRecognitionContext';
  }

  bindAudioSourceFetcher(fetcher_receiver, client, options) {
    // Method: BindAudioSourceFetcher
    return new Promise((resolve) => {
      // Call: BindAudioSourceFetcher(fetcher_receiver, client, options)
      resolve({});
    });
  }

};

media.mojom.AudioSourceSpeechRecognitionContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SpeechRecognitionService
media.mojom.SpeechRecognitionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.SpeechRecognitionService';
  }

  bindSpeechRecognitionContext(context) {
    // Method: BindSpeechRecognitionContext
    // Call: BindSpeechRecognitionContext(context)
  }

  bindAudioSourceSpeechRecognitionContext(context) {
    // Method: BindAudioSourceSpeechRecognitionContext
    // Call: BindAudioSourceSpeechRecognitionContext(context)
  }

  aPI() {
    // Method: API
    // Call: API()
  }

  setSodaPaths(binary_path, config_paths, primary_language_name) {
    // Method: SetSodaPaths
    // Call: SetSodaPaths(binary_path, config_paths, primary_language_name)
  }

  aPI() {
    // Method: API
    // Call: API()
  }

  setSodaParams(mask_offensive_words) {
    // Method: SetSodaParams
    // Call: SetSodaParams(mask_offensive_words)
  }

  setSodaConfigPaths(config_paths) {
    // Method: SetSodaConfigPaths
    // Call: SetSodaConfigPaths(config_paths)
  }

};

media.mojom.SpeechRecognitionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioSourceFetcher
media.mojom.AudioSourceFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioSourceFetcher';
  }

  start(factory, device_id, audio_parameters) {
    // Method: Start
    // Call: Start(factory, device_id, audio_parameters)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

};

media.mojom.AudioSourceFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
