// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/renderer_audio_input_stream_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: RendererAudioInputStreamFactory
blink.mojom.RendererAudioInputStreamFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RendererAudioInputStreamFactory';
  }

  createStream(client, session_id, params, automatic_gain_control, shared_memory_count, processing_config) {
    // Method: CreateStream
    // Call: CreateStream(client, session_id, params, automatic_gain_control, shared_memory_count, processing_config)
  }

  associateInputAndOutputForAec(input_stream_id, output_device_id) {
    // Method: AssociateInputAndOutputForAec
    // Call: AssociateInputAndOutputForAec(input_stream_id, output_device_id)
  }

};

blink.mojom.RendererAudioInputStreamFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RendererAudioInputStreamFactoryClient
blink.mojom.RendererAudioInputStreamFactoryClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RendererAudioInputStreamFactoryClient';
  }

  streamCreated(stream, client_request, data_pipe, initially_muted, stream_id) {
    // Method: StreamCreated
    // Call: StreamCreated(stream, client_request, data_pipe, initially_muted, stream_id)
  }

};

blink.mojom.RendererAudioInputStreamFactoryClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
