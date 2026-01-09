// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webaudio/audio_context_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AudioContextManager
blink.mojom.AudioContextManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AudioContextManager';
  }

  audioContextAudiblePlaybackStarted(id) {
    // Method: AudioContextAudiblePlaybackStarted
    // Call: AudioContextAudiblePlaybackStarted(id)
  }

  audioContextAudiblePlaybackStopped(id) {
    // Method: AudioContextAudiblePlaybackStopped
    // Call: AudioContextAudiblePlaybackStopped(id)
  }

  audioContextCreated(id) {
    // Method: AudioContextCreated
    // Call: AudioContextCreated(id)
  }

  audioContextClosed(id) {
    // Method: AudioContextClosed
    // Call: AudioContextClosed(id)
  }

};

blink.mojom.AudioContextManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
