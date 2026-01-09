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

};

cros.mojom.CrosCameraServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
