// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/devices_changed_observer.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Interface: DevicesChangedObserver
video_capture.mojom.DevicesChangedObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'video_capture.mojom.DevicesChangedObserver';
  }

  onDevicesChanged() {
    // Method: OnDevicesChanged
    // Call: OnDevicesChanged()
  }

};

video_capture.mojom.DevicesChangedObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
