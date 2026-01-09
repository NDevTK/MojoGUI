// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_logging.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AudioLogComponent
media.mojom.AudioLogComponent = {
};

// Interface: AudioLog
media.mojom.AudioLogPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioLog';
  }

  onCreated(params, device_id) {
    // Method: OnCreated
    // Call: OnCreated(params, device_id)
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

  onClosed() {
    // Method: OnClosed
    // Call: OnClosed()
  }

  onError() {
    // Method: OnError
    // Call: OnError()
  }

  onSetVolume(volume) {
    // Method: OnSetVolume
    // Call: OnSetVolume(volume)
  }

  onProcessingStateChanged(message) {
    // Method: OnProcessingStateChanged
    // Call: OnProcessingStateChanged(message)
  }

  onLogMessage(message) {
    // Method: OnLogMessage
    // Call: OnLogMessage(message)
  }

};

media.mojom.AudioLogRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioLogFactory
media.mojom.AudioLogFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioLogFactory';
  }

  createAudioLog(component, component_id, audio_log_receiver) {
    // Method: CreateAudioLog
    // Call: CreateAudioLog(component, component_id, audio_log_receiver)
  }

};

media.mojom.AudioLogFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
