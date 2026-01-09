// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/debug_recording.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Enum: DebugRecordingStreamType
audio.mojom.DebugRecordingStreamType = {
  kInput: 0,
  kOutput: 1,
  kLoopback: 2,
};

// Interface: DebugRecordingFileProvider
audio.mojom.DebugRecordingFileProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.DebugRecordingFileProvider';
  }

  createWavFile(stream_type, id) {
    // Method: CreateWavFile
    return new Promise((resolve) => {
      // Call: CreateWavFile(stream_type, id)
      resolve({});
    });
  }

  createAecdumpFile(id) {
    // Method: CreateAecdumpFile
    return new Promise((resolve) => {
      // Call: CreateAecdumpFile(id)
      resolve({});
    });
  }

};

audio.mojom.DebugRecordingFileProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DebugRecording
audio.mojom.DebugRecordingPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.DebugRecording';
  }

  enable(file_provider) {
    // Method: Enable
    // Call: Enable(file_provider)
  }

};

audio.mojom.DebugRecordingRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
