// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_encoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AacOutputFormat
media.mojom.AacOutputFormat = {
  kAAC: 0,
  kADTS: 1,
};

// Struct: AacAudioEncoderConfig
media.mojom.AacAudioEncoderConfig = class {
  constructor(values = {}) {
    this.format = values.format !== undefined ? values.format : null;
  }
};

// Struct: AudioEncoderConfig
media.mojom.AudioEncoderConfig = class {
  constructor(values = {}) {
    this.channel_count = values.channel_count !== undefined ? values.channel_count : 0;
    this.aac = values.aac !== undefined ? values.aac : 0;
  }
};

// Struct: EncodedAudioBuffer
media.mojom.EncodedAudioBuffer = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Interface: AudioEncoder
media.mojom.AudioEncoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioEncoder';
  }

  initialize(client, config) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(client, config)
      resolve({});
    });
  }

  encode(buffer) {
    // Method: Encode
    return new Promise((resolve) => {
      // Call: Encode(buffer)
      resolve({});
    });
  }

  flush() {
    // Method: Flush
    return new Promise((resolve) => {
      // Call: Flush()
      resolve({});
    });
  }

};

media.mojom.AudioEncoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioEncoderClient
media.mojom.AudioEncoderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioEncoderClient';
  }

  onEncodedBufferReady(buffer, description) {
    // Method: OnEncodedBufferReady
    // Call: OnEncodedBufferReady(buffer, description)
  }

};

media.mojom.AudioEncoderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
