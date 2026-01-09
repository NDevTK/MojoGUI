// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_output_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioOutputStreamFactory
blink.mojom.RendererAudioOutputStreamFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RendererAudioOutputStreamFactory';
  }

  discarded(bound) {
    // Method: discarded
    // Call: discarded(bound)
  }

  requestDeviceAuthorization(stream_provider_receiver, session_id, device_id) {
    // Method: RequestDeviceAuthorization
    return new Promise((resolve) => {
      // Call: RequestDeviceAuthorization(stream_provider_receiver, session_id, device_id)
      resolve({});
    });
  }

};

blink.mojom.RendererAudioOutputStreamFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
