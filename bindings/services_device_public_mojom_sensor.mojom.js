// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SensorType
device.mojom.SensorType = {
  AMBIENT_LIGHT: 0,
  ACCELEROMETER: 1,
  LINEAR_ACCELERATION: 2,
  GRAVITY: 3,
  GYROSCOPE: 4,
  MAGNETOMETER: 5,
};

// Enum: ReportingMode
device.mojom.ReportingMode = {
  ON_CHANGE: 0,
  CONTINUOUS: 1,
};

// Struct: SensorReadingRaw
device.mojom.SensorReadingRaw = class {
  constructor(values = {}) {
    this.values = values.values !== undefined ? values.values : 0;
  }
};

// Struct: SensorConfiguration
device.mojom.SensorConfiguration = class {
  constructor(values = {}) {
    this.frequency = values.frequency !== undefined ? values.frequency : 0;
  }
};

// Interface: Sensor
device.mojom.SensorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.Sensor';
  }

  getDefaultConfiguration() {
    // Method: GetDefaultConfiguration
    return new Promise((resolve) => {
      // Call: GetDefaultConfiguration()
      resolve({});
    });
  }

  addConfiguration(configuration) {
    // Method: AddConfiguration
    return new Promise((resolve) => {
      // Call: AddConfiguration(configuration)
      resolve({});
    });
  }

  removeConfiguration(configuration) {
    // Method: RemoveConfiguration
    // Call: RemoveConfiguration(configuration)
  }

  suspend() {
    // Method: Suspend
    // Call: Suspend()
  }

  resume() {
    // Method: Resume
    // Call: Resume()
  }

  configureReadingChangeNotifications(enabled) {
    // Method: ConfigureReadingChangeNotifications
    // Call: ConfigureReadingChangeNotifications(enabled)
  }

};

device.mojom.SensorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SensorClient
device.mojom.SensorClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SensorClient';
  }

  raiseError() {
    // Method: RaiseError
    // Call: RaiseError()
  }

  sensorReadingChanged() {
    // Method: SensorReadingChanged
    // Call: SensorReadingChanged()
  }

};

device.mojom.SensorClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
