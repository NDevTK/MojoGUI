// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SupportedAudioDecoderConfig
media.mojom.SupportedAudioDecoderConfig = class {
  constructor(values = {}) {
    this.profile = values.profile !== undefined ? values.profile : null;
  }
};

// Interface: AudioDecoder
media.mojom.AudioDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioDecoder';
  }

  construct() {
    // Method: Construct
    // Call: Construct()
  }

  getSupportedConfigs() {
    // Method: GetSupportedConfigs
    return new Promise((resolve) => {
      // Call: GetSupportedConfigs()
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  configure() {
    // Method: Configure
    // Call: Configure()
  }

  construct(client, media_log) {
    // Method: Construct
    // Call: Construct(client, media_log)
  }

  initialize(config, cdm_id) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(config, cdm_id)
      resolve({});
    });
  }

  decode() {
    // Method: Decode
    // Call: Decode()
  }

  setDataSource(receive_pipe) {
    // Method: SetDataSource
    // Call: SetDataSource(receive_pipe)
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  decode(buffer) {
    // Method: Decode
    return new Promise((resolve) => {
      // Call: Decode(buffer)
      resolve({});
    });
  }

  initialize() {
    // Method: Initialize
    // Call: Initialize()
  }

  decode() {
    // Method: Decode
    // Call: Decode()
  }

  reset() {
    // Method: Reset
    // Call: Reset()
  }

};

media.mojom.AudioDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AudioDecoderClient
media.mojom.AudioDecoderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AudioDecoderClient';
  }

  onBufferDecoded(buffer) {
    // Method: OnBufferDecoded
    // Call: OnBufferDecoded(buffer)
  }

  onWaiting(reason) {
    // Method: OnWaiting
    // Call: OnWaiting(reason)
  }

};

media.mojom.AudioDecoderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
