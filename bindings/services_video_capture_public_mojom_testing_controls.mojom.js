// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/testing_controls.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: TestingControls
video_capture.mojom.TestingControlsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.TestingControls';
  }

  crash() {
    // Method: Crash
    // Call: Crash()
  }

};

video_capture.mojom.TestingControlsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
