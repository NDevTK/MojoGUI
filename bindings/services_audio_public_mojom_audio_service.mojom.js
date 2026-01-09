// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_service.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: AudioService
audio.mojom.AudioServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.AudioService';
  }

  bindSystemInfo(receiver) {
    // Method: BindSystemInfo
    // Call: BindSystemInfo(receiver)
  }

  bindDebugRecording(receiver) {
    // Method: BindDebugRecording
    // Call: BindDebugRecording(receiver)
  }

  bindStreamFactory(receiver) {
    // Method: BindStreamFactory
    // Call: BindStreamFactory(receiver)
  }

  bindDeviceNotifier(receiver) {
    // Method: BindDeviceNotifier
    // Call: BindDeviceNotifier(receiver)
  }

  bindLogFactoryManager(receiver) {
    // Method: BindLogFactoryManager
    // Call: BindLogFactoryManager(receiver)
  }

  bindTestingApi(receiver) {
    // Method: BindTestingApi
    // Call: BindTestingApi(receiver)
  }

  bindMlModelManager(receiver) {
    // Method: BindMlModelManager
    // Call: BindMlModelManager(receiver)
  }

};

audio.mojom.AudioServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
