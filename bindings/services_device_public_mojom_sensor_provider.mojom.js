// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor_provider.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SensorCreationResult
device.mojom.SensorCreationResult = {
  SUCCESS: 0,
  ERROR_NOT_AVAILABLE: 1,
};

// Enum: CreateVirtualSensorResult
device.mojom.CreateVirtualSensorResult = {
};

// Enum: UpdateVirtualSensorResult
device.mojom.UpdateVirtualSensorResult = {
};

// Enum: GetVirtualSensorInformationError
device.mojom.GetVirtualSensorInformationError = {
};

// Struct: SensorInitParams
device.mojom.SensorInitParams = class {
  constructor(values = {}) {
    this.minimum_frequency = values.minimum_frequency !== undefined ? values.minimum_frequency : 0;
  }
};

// Struct: VirtualSensorMetadata
device.mojom.VirtualSensorMetadata = class {
  constructor(values = {}) {
    this.reporting_mode = values.reporting_mode !== undefined ? values.reporting_mode : 0;
  }
};

// Struct: VirtualSensorInformation
device.mojom.VirtualSensorInformation = class {
  constructor(values = {}) {
    this.sampling_frequency = values.sampling_frequency !== undefined ? values.sampling_frequency : 0;
  }
};

// Interface: SensorProvider
device.mojom.SensorProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SensorProvider';
  }

  getSensor(type) {
    // Method: GetSensor
    return new Promise((resolve) => {
      // Call: GetSensor(type)
      resolve({});
    });
  }

  createVirtualSensor(type, metadata) {
    // Method: CreateVirtualSensor
    return new Promise((resolve) => {
      // Call: CreateVirtualSensor(type, metadata)
      resolve({});
    });
  }

  updateVirtualSensor(type, reading) {
    // Method: UpdateVirtualSensor
    return new Promise((resolve) => {
      // Call: UpdateVirtualSensor(type, reading)
      resolve({});
    });
  }

  removeVirtualSensor(type) {
    // Method: RemoveVirtualSensor
    // Call: RemoveVirtualSensor(type)
  }

  getVirtualSensorInformation(type) {
    // Method: GetVirtualSensorInformation
    return new Promise((resolve) => {
      // Call: GetVirtualSensorInformation(type)
      resolve({});
    });
  }

};

device.mojom.SensorProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
