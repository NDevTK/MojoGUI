// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decode_perf_history.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoDecodePerfHistory
media.mojom.VideoDecodePerfHistoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecodePerfHistory';
  }

  getPerfInfo(features) {
    // Method: GetPerfInfo
    return new Promise((resolve) => {
      // Call: GetPerfInfo(features)
      resolve({});
    });
  }

};

media.mojom.VideoDecodePerfHistoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
