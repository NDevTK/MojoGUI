// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_stats_recorder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodeStatsRecorder
media.mojom.VideoDecodeStatsRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecodeStatsRecorder';
  }

  startNewRecord(features) {
    // Method: StartNewRecord
    // Call: StartNewRecord(features)
  }

  updateRecord(targets) {
    // Method: UpdateRecord
    // Call: UpdateRecord(targets)
  }

};

media.mojom.VideoDecodeStatsRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
