// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/tts/public/mojom/tts_service.mojom
// Module: chromeos.tts.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.tts = chromeos.tts || {};
chromeos.tts.mojom = chromeos.tts.mojom || {};


// Struct: AudioParameters
chromeos.tts.mojom.AudioParameters = class {
  constructor(values = {}) {
    this.buffer_size = values.buffer_size !== undefined ? values.buffer_size : 0;
  }
};

// Interface: TtsService
chromeos.tts.mojom.TtsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.tts.mojom.TtsService';
  }

  bindGoogleTtsStream(receiver, stream_factory) {
    // Method: BindGoogleTtsStream
    // Call: BindGoogleTtsStream(receiver, stream_factory)
  }

  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    // Method: BindPlaybackTtsStream
    return new Promise((resolve) => {
      // Call: BindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters)
      resolve({});
    });
  }

};

chromeos.tts.mojom.TtsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GoogleTtsStream
chromeos.tts.mojom.GoogleTtsStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.tts.mojom.GoogleTtsStream';
  }

  installVoice(voice_name, voice_bytes) {
    // Method: InstallVoice
    return new Promise((resolve) => {
      // Call: InstallVoice(voice_name, voice_bytes)
      resolve({});
    });
  }

  selectVoice(voice_name) {
    // Method: SelectVoice
    return new Promise((resolve) => {
      // Call: SelectVoice(voice_name)
      resolve({});
    });
  }

  speak(text_jspb, speaker_params_jspb) {
    // Method: Speak
    return new Promise((resolve) => {
      // Call: Speak(text_jspb, speaker_params_jspb)
      resolve({});
    });
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

};

chromeos.tts.mojom.GoogleTtsStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PlaybackTtsStream
chromeos.tts.mojom.PlaybackTtsStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.tts.mojom.PlaybackTtsStream';
  }

  play() {
    // Method: Play
    return new Promise((resolve) => {
      // Call: Play()
      resolve({});
    });
  }

  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    // Method: SendAudioBuffer
    // Call: SendAudioBuffer(frames_buffer, char_index, last_buffer)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

};

chromeos.tts.mojom.PlaybackTtsStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TtsEventObserver
chromeos.tts.mojom.TtsEventObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.tts.mojom.TtsEventObserver';
  }

  onStart() {
    // Method: OnStart
    // Call: OnStart()
  }

  onTimepoint(char_index) {
    // Method: OnTimepoint
    // Call: OnTimepoint(char_index)
  }

  onEnd() {
    // Method: OnEnd
    // Call: OnEnd()
  }

  onError() {
    // Method: OnError
    // Call: OnError()
  }

};

chromeos.tts.mojom.TtsEventObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
