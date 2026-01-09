// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/sensor_info/sensor.mojom
// Module: sensor.mojom

'use strict';

// Module namespace
var sensor = sensor || {};
sensor.mojom = sensor.mojom || {};


// Enum: SensorType
sensor.mojom.SensorType = {
  kLidAngle: 0,
  kAccelerometerBase: 1,
  kAccelerometerLid: 2,
  kGyroscopeBase: 3,
  kGyroscopeLid: 4,
  kSensorTypeCount: 5,
};

// Struct: NonLidAngleUpdateInfo
sensor.mojom.NonLidAngleUpdateInfo = class {
  constructor(values = {}) {
    this.z = values.z !== undefined ? values.z : 0;
  }
};

// Struct: LidAngleUpdateInfo
sensor.mojom.LidAngleUpdateInfo = class {
  constructor(values = {}) {
    this.x = values.x !== undefined ? values.x : 0;
  }
};

// Interface: PageHandlerFactory
sensor.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sensor.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

sensor.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
sensor.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'sensor.mojom.PageHandler';
  }

  startRecordingUpdate() {
    // Method: StartRecordingUpdate
    // Call: StartRecordingUpdate()
  }

  stopRecordingUpdate() {
    // Method: StopRecordingUpdate
    // Call: StopRecordingUpdate()
  }

};

sensor.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
