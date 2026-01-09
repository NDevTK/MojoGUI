// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/sensor.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};


// Enum: DeviceType
chromeos.sensors.mojom.DeviceType = {
  ANGLVEL: 0,
  LIGHT: 1,
  COUNT: 2,
  MAGN: 3,
  ANGL: 4,
  BARO: 5,
  ACCEL_UNCALIBRATED: 6,
  ANGLVEL_UNCALIBRATED: 7,
  MAGN_UNCALIBRATED: 8,
  GRAVITY: 9,
};

// Enum: ObserverErrorType
chromeos.sensors.mojom.ObserverErrorType = {
  SET_FREQUENCY_IO_FAILED: 0,
  FREQUENCY_INVALID: 1,
  NO_ENABLED_CHANNELS: 2,
  GET_FD_FAILED: 3,
  READ_FAILED: 4,
  READ_TIMEOUT: 5,
};

// Enum: SensorServiceDisconnectReason
chromeos.sensors.mojom.SensorServiceDisconnectReason = {
};

// Enum: SensorDeviceDisconnectReason
chromeos.sensors.mojom.SensorDeviceDisconnectReason = {
};

// Interface: SensorService
chromeos.sensors.mojom.SensorServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorService';
  }

};

chromeos.sensors.mojom.SensorServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SensorDevice
chromeos.sensors.mojom.SensorDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorDevice';
  }

};

chromeos.sensors.mojom.SensorDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SensorDeviceSamplesObserver
chromeos.sensors.mojom.SensorDeviceSamplesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
  }

};

chromeos.sensors.mojom.SensorDeviceSamplesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SensorServiceNewDevicesObserver
chromeos.sensors.mojom.SensorServiceNewDevicesObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
  }

};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
