// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_input_stream.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DisconnectReason
media.mojom.DisconnectReason = {
  e: 0,
  kTerminatedByClient: 1,
  kStreamCreationFailed: 2,
  kDocumentDestroyed: 3,
  kSystemPermissions: 4,
  kDeviceInUse: 5,
};

// Interface: AudioInputStream
media.mojom.AudioInputStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioInputStream';
  }

  record() {
    // Method: Record
    // Call: Record()
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

};

media.mojom.AudioInputStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioInputStreamClient
media.mojom.AudioInputStreamClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioInputStreamClient';
  }

  onError(code) {
    // Method: OnError
    // Call: OnError(code)
  }

  onMutedStateChanged(is_muted) {
    // Method: OnMutedStateChanged
    // Call: OnMutedStateChanged(is_muted)
  }

};

media.mojom.AudioInputStreamClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioInputStreamObserver
media.mojom.AudioInputStreamObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioInputStreamObserver';
  }

};

media.mojom.AudioInputStreamObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
