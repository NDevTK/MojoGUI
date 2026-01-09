// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/demuxer_connector.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};


// Struct: AudioStreamInfo
cast_streaming.mojom.AudioStreamInfo = class {
  constructor(values = {}) {
    this.data_pipe = values.data_pipe !== undefined ? values.data_pipe : null;
  }
};

// Struct: VideoStreamInfo
cast_streaming.mojom.VideoStreamInfo = class {
  constructor(values = {}) {
    this.data_pipe = values.data_pipe !== undefined ? values.data_pipe : null;
  }
};

// Struct: AudioStreamInitializationInfo
cast_streaming.mojom.AudioStreamInitializationInfo = class {
  constructor(values = {}) {
    this.stream_initialization_info = values.stream_initialization_info !== undefined ? values.stream_initialization_info : null;
  }
};

// Struct: VideoStreamInitializationInfo
cast_streaming.mojom.VideoStreamInitializationInfo = class {
  constructor(values = {}) {
    this.stream_initialization_info = values.stream_initialization_info !== undefined ? values.stream_initialization_info : null;
  }
};

// Interface: AudioBufferRequester
cast_streaming.mojom.AudioBufferRequesterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cast_streaming.mojom.AudioBufferRequester';
  }

  getBuffer() {
    // Method: GetBuffer
    return new Promise((resolve) => {
      // Call: GetBuffer()
      resolve({});
    });
  }

  enableBitstreamConverter() {
    // Method: EnableBitstreamConverter
    return new Promise((resolve) => {
      // Call: EnableBitstreamConverter()
      resolve({});
    });
  }

};

cast_streaming.mojom.AudioBufferRequesterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoBufferRequester
cast_streaming.mojom.VideoBufferRequesterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cast_streaming.mojom.VideoBufferRequester';
  }

  getBuffer() {
    // Method: GetBuffer
    return new Promise((resolve) => {
      // Call: GetBuffer()
      resolve({});
    });
  }

  enableBitstreamConverter() {
    // Method: EnableBitstreamConverter
    return new Promise((resolve) => {
      // Call: EnableBitstreamConverter()
      resolve({});
    });
  }

};

cast_streaming.mojom.VideoBufferRequesterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DemuxerConnector
cast_streaming.mojom.DemuxerConnectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cast_streaming.mojom.DemuxerConnector';
  }

  enableReceiver() {
    // Method: EnableReceiver
    // Call: EnableReceiver()
  }

  onStreamsInitialized(audio_buffer_requester, video_buffer_requester) {
    // Method: OnStreamsInitialized
    // Call: OnStreamsInitialized(audio_buffer_requester, video_buffer_requester)
  }

};

cast_streaming.mojom.DemuxerConnectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
