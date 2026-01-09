// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/camera.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: CameraDeviceInfo
arc.mojom.CameraDeviceInfo = class {
  constructor(values = {}) {
    this.vertical_view_angle_4_3@12 = values.vertical_view_angle_4_3@12 !== undefined ? values.vertical_view_angle_4_3@12 : 0;
  }
};

// Struct: CameraSupportedFormat
arc.mojom.CameraSupportedFormat = class {
  constructor(values = {}) {
    this.frameRates = values.frameRates !== undefined ? values.frameRates : 0;
  }
};

// Interface: CameraService
arc.mojom.CameraServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CameraService';
  }

  0(device_path) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(device_path)
      resolve({});
    });
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  connect() {
    // Method: Connect
    // Call: Connect()
  }

  2(width, height, pixel_format, frame_rate) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(width, height, pixel_format, frame_rate)
      resolve({});
    });
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  streamOn() {
    // Method: StreamOn
    // Call: StreamOn()
  }

  4() {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4()
      resolve({});
    });
  }

  streamOn() {
    // Method: StreamOn
    // Call: StreamOn()
  }

  5(buffer_id) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(buffer_id)
      resolve({});
    });
  }

  connect() {
    // Method: Connect
    // Call: Connect()
  }

  6(device_path) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(device_path)
      resolve({});
    });
  }

  connect() {
    // Method: Connect
    // Call: Connect()
  }

  7() {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7()
      resolve({});
    });
  }

};

arc.mojom.CameraServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraHost
arc.mojom.CameraHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CameraHost';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(client) {
    // Method: 1
    // Call: 1(client)
  }

  2(client) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(client)
      resolve({});
    });
  }

};

arc.mojom.CameraHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraInstance
arc.mojom.CameraInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.CameraInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.CameraInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
