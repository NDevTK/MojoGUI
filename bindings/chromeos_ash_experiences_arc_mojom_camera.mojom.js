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

};

arc.mojom.CameraInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
