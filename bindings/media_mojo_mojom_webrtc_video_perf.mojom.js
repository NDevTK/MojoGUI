// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/webrtc_video_perf.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: WebrtcPredictionFeatures
media.mojom.WebrtcPredictionFeatures = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: WebrtcVideoStats
media.mojom.WebrtcVideoStats = class {
  constructor(values = {}) {
  }
};

// Interface: WebrtcVideoPerfRecorder
media.mojom.WebrtcVideoPerfRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.WebrtcVideoPerfRecorder';
  }

  updateRecord(features, video_stats) {
    // Method: UpdateRecord
    // Call: UpdateRecord(features, video_stats)
  }

};

media.mojom.WebrtcVideoPerfRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebrtcVideoPerfHistory
media.mojom.WebrtcVideoPerfHistoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.WebrtcVideoPerfHistory';
  }

  getPerfInfo(features, frames_per_second) {
    // Method: GetPerfInfo
    return new Promise((resolve) => {
      // Call: GetPerfInfo(features, frames_per_second)
      resolve({});
    });
  }

};

media.mojom.WebrtcVideoPerfHistoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
