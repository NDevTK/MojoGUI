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

  0(type) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(type)
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(iio_device_id, device_request) {
    // Method: 2
    // Call: 2(iio_device_id, device_request)
  }

  3(observer) {
    // Method: 3
    // Call: 3(observer)
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

  0(timeout) {
    // Method: 0
    // Call: 0(timeout)
  }

  name() {
    // Method: name
    // Call: name()
  }

  1(attr_names) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(attr_names)
      resolve({});
    });
  }

  2(frequency) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(frequency)
      resolve({});
    });
  }

  3(observer) {
    // Method: 3
    // Call: 3(observer)
  }

  4() {
    // Method: 4
    // Call: 4()
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  6(iio_chn_indices, en) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(iio_chn_indices, en)
      resolve({});
    });
  }

  7(iio_chn_indices) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(iio_chn_indices)
      resolve({});
    });
  }

  8(iio_chn_indices, attr_name) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(iio_chn_indices, attr_name)
      resolve({});
    });
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

  data(integer) {
    // Method: data
    // Call: data(integer)
  }

  0(sample) {
    // Method: 0
    // Call: 0(sample)
  }

  1(type) {
    // Method: 1
    // Call: 1(type)
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

  0(iio_device_id, types) {
    // Method: 0
    // Call: 0(iio_device_id, types)
  }

};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
