// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_service.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: CameraClientType
cros.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
  as: 6,
};

// Enum: CameraPrivacySwitchState
cros.mojom.CameraPrivacySwitchState = {
  it: 0,
  UNKNOWN: 1,
  which: 2,
  which: 3,
};

// Enum: CameraAutoFramingState
cros.mojom.CameraAutoFramingState = {
};

// Enum: KioskVisionError
cros.mojom.KioskVisionError = {
};

// Struct: KioskVisionDetection
cros.mojom.KioskVisionDetection = class {
  constructor(values = {}) {
    this.appearances = values.appearances !== undefined ? values.appearances : 0;
  }
};

// Struct: KioskVisionTrack
cros.mojom.KioskVisionTrack = class {
  constructor(values = {}) {
    this.appearances = values.appearances !== undefined ? values.appearances : 0;
  }
};

// Struct: KioskVisionAppearance
cros.mojom.KioskVisionAppearance = class {
  constructor(values = {}) {
    this.body = values.body !== undefined ? values.body : 0;
  }
};

// Struct: KioskVisionFaceDetection
cros.mojom.KioskVisionFaceDetection = class {
  constructor(values = {}) {
    this.box = values.box !== undefined ? values.box : 0;
  }
};

// Struct: KioskVisionBodyDetection
cros.mojom.KioskVisionBodyDetection = class {
  constructor(values = {}) {
    this.box = values.box !== undefined ? values.box : 0;
  }
};

// Struct: KioskVisionBoundingBox
cros.mojom.KioskVisionBoundingBox = class {
  constructor(values = {}) {
    this.height = values.height !== undefined ? values.height : 0;
  }
};

// Interface: KioskVisionObserver
cros.mojom.KioskVisionObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.KioskVisionObserver';
  }

  0(detection) {
    // Method: 0
    // Call: 0(detection)
  }

  1(track) {
    // Method: 1
    // Call: 1(track)
  }

  2(error) {
    // Method: 2
    // Call: 2(error)
  }

};

cros.mojom.KioskVisionObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CameraHalDispatcher
cros.mojom.CameraHalDispatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CameraHalDispatcher';
  }

  5(client, type, auth_token) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(client, type, auth_token)
      resolve({});
    });
  }

};

cros.mojom.CameraHalDispatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosCameraServiceObserver
cros.mojom.CrosCameraServiceObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosCameraServiceObserver';
  }

  closed(used) {
    // Method: closed
    // Call: closed(used)
  }

  0(camera_id, opened, type) {
    // Method: 0
    // Call: 0(camera_id, opened, type)
  }

  1(state, camera_id) {
    // Method: 1
    // Call: 1(state, camera_id)
  }

  2(state) {
    // Method: 2
    // Call: 2(state)
  }

  3(config) {
    // Method: 3
    // Call: 3(config)
  }

  4(state) {
    // Method: 4
    // Call: 4(state)
  }

};

cros.mojom.CrosCameraServiceObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CrosCameraService
cros.mojom.CrosCameraServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'cros.mojom.CrosCameraService';
  }

  0(type) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(type)
      resolve({});
    });
  }

  1(enabled) {
    // Method: 1
    // Call: 1(enabled)
  }

  2(state) {
    // Method: 2
    // Call: 2(state)
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  4(state) {
    // Method: 4
    // Call: 4(state)
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  6(config) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(config)
      resolve({});
    });
  }

  7(observer) {
    // Method: 7
    // Call: 7(observer)
  }

  8(dlc_path, observer) {
    // Method: 8
    // Call: 8(dlc_path, observer)
  }

};

cros.mojom.CrosCameraServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
