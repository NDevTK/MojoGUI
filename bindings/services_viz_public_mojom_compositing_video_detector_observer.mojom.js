// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/video_detector_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VideoDetectorObserver
viz.mojom.VideoDetectorObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.VideoDetectorObserver';
  }

  onVideoActivityStarted() {
    // Method: OnVideoActivityStarted
    // Call: OnVideoActivityStarted()
  }

  onVideoActivityEnded() {
    // Method: OnVideoActivityEnded
    // Call: OnVideoActivityEnded()
  }

};

viz.mojom.VideoDetectorObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
