// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/screen_capture.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ScreenCaptureHost
arc.mojom.ScreenCaptureHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ScreenCaptureHost';
  }

  0(display_name, package_name) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(display_name, package_name)
      resolve({});
    });
  }

  2(package_name) {
    // Method: 2
    // Call: 2(package_name)
  }

  1(notifier, package_name, size) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(notifier, package_name, size)
      resolve({});
    });
  }

};

arc.mojom.ScreenCaptureHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenCaptureSession
arc.mojom.ScreenCaptureSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ScreenCaptureSession';
  }

  0(graphics_buffer, stride) {
    // Method: 0
    // Call: 0(graphics_buffer, stride)
  }

  1(graphics_buffer, buffer_format, buffer_format_modifier, stride) {
    // Method: 1
    // Call: 1(graphics_buffer, buffer_format, buffer_format_modifier, stride)
  }

};

arc.mojom.ScreenCaptureSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenCaptureInstance
arc.mojom.ScreenCaptureInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ScreenCaptureInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.ScreenCaptureInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScreenCaptureSessionNotifier
arc.mojom.ScreenCaptureSessionNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ScreenCaptureSessionNotifier';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

};

arc.mojom.ScreenCaptureSessionNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
