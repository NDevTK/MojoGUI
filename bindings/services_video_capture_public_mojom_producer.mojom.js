// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/producer.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: Producer
video_capture.mojom.ProducerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.Producer';
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Method: OnNewBuffer
    // Call: OnNewBuffer(buffer_id, buffer_handle)
  }

  onBufferRetired(buffer_id) {
    // Method: OnBufferRetired
    // Call: OnBufferRetired(buffer_id)
  }

};

video_capture.mojom.ProducerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
