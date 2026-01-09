// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_output_stream.mojom
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
};

// Interface: AudioOutputStream
media.mojom.AudioOutputStreamPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioOutputStream';
  }

  play() {
    // Method: Play
    // Call: Play()
  }

  pause() {
    // Method: Pause
    // Call: Pause()
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

};

media.mojom.AudioOutputStreamRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioOutputStreamObserver
media.mojom.AudioOutputStreamObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioOutputStreamObserver';
  }

};

media.mojom.AudioOutputStreamObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioOutputStreamProvider
media.mojom.AudioOutputStreamProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioOutputStreamProvider';
  }

  acquire(params, client) {
    // Method: Acquire
    // Call: Acquire(params, client)
  }

};

media.mojom.AudioOutputStreamProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioOutputStreamProviderClient
media.mojom.AudioOutputStreamProviderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioOutputStreamProviderClient';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  created(stream, data_pipe) {
    // Method: Created
    // Call: Created(stream, data_pipe)
  }

};

media.mojom.AudioOutputStreamProviderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceSwitchInterface
media.mojom.DeviceSwitchInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.DeviceSwitchInterface';
  }

  switchAudioOutputDeviceId(output_device_id) {
    // Method: SwitchAudioOutputDeviceId
    // Call: SwitchAudioOutputDeviceId(output_device_id)
  }

};

media.mojom.DeviceSwitchInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
