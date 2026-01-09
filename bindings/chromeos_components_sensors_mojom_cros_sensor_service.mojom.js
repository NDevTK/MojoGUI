// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/cros_sensor_service.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};


// Interface: SensorHalServer
chromeos.sensors.mojom.SensorHalServerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorHalServer';
  }

  0(sensor_service_request) {
    // Method: 0
    // Call: 0(sensor_service_request)
  }

};

chromeos.sensors.mojom.SensorHalServerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SensorHalClient
chromeos.sensors.mojom.SensorHalClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.sensors.mojom.SensorHalClient';
  }

  0(sensor_service_ptr) {
    // Method: 0
    // Call: 0(sensor_service_ptr)
  }

};

chromeos.sensors.mojom.SensorHalClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
