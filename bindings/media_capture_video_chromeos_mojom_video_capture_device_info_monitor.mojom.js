// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/video_capture_device_info_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Interface: VideoCaptureDeviceInfoObserver
cros.mojom.VideoCaptureDeviceInfoObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.VideoCaptureDeviceInfoObserver';
  }

  0(camera_id, device_id) {
    // Method: 0
    // Call: 0(camera_id, device_id)
  }

};

cros.mojom.VideoCaptureDeviceInfoObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoCaptureDeviceInfoMonitor
cros.mojom.VideoCaptureDeviceInfoMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.VideoCaptureDeviceInfoMonitor';
  }

  0(observer) {
    // Method: 0
    // Call: 0(observer)
  }

};

cros.mojom.VideoCaptureDeviceInfoMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
