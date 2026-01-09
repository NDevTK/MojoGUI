// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/fuchsia_media.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoDecoderSecureMemoryMode
media.mojom.VideoDecoderSecureMemoryMode = {
};

// Struct: CdmRequest
media.mojom.CdmRequest = class {
  constructor(values = {}) {
    this.request = values.request !== undefined ? values.request : null;
  }
};

// Struct: StreamProcessorRequest
media.mojom.StreamProcessorRequest = class {
  constructor(values = {}) {
    this.request = values.request !== undefined ? values.request : null;
  }
};

// Interface: FuchsiaMediaCdmProvider
media.mojom.FuchsiaMediaCdmProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.FuchsiaMediaCdmProvider';
  }

  createCdm(key_system, cdm_request) {
    // Method: CreateCdm
    // Call: CreateCdm(key_system, cdm_request)
  }

};

media.mojom.FuchsiaMediaCdmProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FuchsiaMediaCodecProvider
media.mojom.FuchsiaMediaCodecProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.FuchsiaMediaCodecProvider';
  }

  createVideoDecoder(codec, secure_mode, stream_processor_request) {
    // Method: CreateVideoDecoder
    // Call: CreateVideoDecoder(codec, secure_mode, stream_processor_request)
  }

  getSupportedVideoDecoderConfigs() {
    // Method: GetSupportedVideoDecoderConfigs
    return new Promise((resolve) => {
      // Call: GetSupportedVideoDecoderConfigs()
      resolve({});
    });
  }

};

media.mojom.FuchsiaMediaCodecProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
