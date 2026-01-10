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
  ABSOLUTE_ORIENTATION_EULER_ANGLES: 6,
  ABSOLUTE_ORIENTATION_QUATERNION: 7,
  RELATIVE_ORIENTATION_EULER_ANGLES: 8,
  RELATIVE_ORIENTATION_QUATERNION: 9,
};
device.mojom.SensorTypeSpec = { $: mojo.internal.Enum() };

// Enum: ReportingMode
device.mojom.ReportingMode = {
  ON_CHANGE: 0,
  CONTINUOUS: 1,
};
device.mojom.ReportingModeSpec = { $: mojo.internal.Enum() };

// Struct: SensorReadingRaw
device.mojom.SensorReadingRawSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorReadingRaw',
      packedSize: 24,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SensorConfiguration
device.mojom.SensorConfigurationSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorConfiguration',
      packedSize: 16,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: Sensor
device.mojom.Sensor = {};

device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_GetDefaultConfiguration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.Sensor_AddConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_AddConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.Sensor_RemoveConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_RemoveConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.Sensor_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.Sensor_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor_ConfigureReadingChangeNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SensorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SensorRemote = class {
  static get $interfaceName() {
    return 'device.mojom.Sensor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SensorPendingReceiver,
      handle);
    this.$ = new device.mojom.SensorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SensorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDefaultConfiguration() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec,
      device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec,
      []);
  }

  addConfiguration(configuration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Sensor_AddConfiguration_ParamsSpec,
      device.mojom.Sensor_AddConfiguration_ResponseParamsSpec,
      [configuration]);
  }

  removeConfiguration(configuration) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.Sensor_RemoveConfiguration_ParamsSpec,
      null,
      [configuration]);
  }

  suspend() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.Sensor_Suspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.Sensor_Resume_ParamsSpec,
      null,
      []);
  }

  configureReadingChangeNotifications(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec,
      null,
      [enabled]);
  }

};

device.mojom.Sensor.getRemote = function() {
  let remote = new device.mojom.SensorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.Sensor',
    'context');
  return remote.$;
};

// ParamsSpec for GetDefaultConfiguration
device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.GetDefaultConfiguration_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.GetDefaultConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddConfiguration
device.mojom.Sensor_AddConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.AddConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.Sensor_AddConfiguration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.AddConfiguration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveConfiguration
device.mojom.Sensor_RemoveConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.RemoveConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SensorConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Suspend
device.mojom.Sensor_Suspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.Suspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
device.mojom.Sensor_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ConfigureReadingChangeNotifications
device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.Sensor.ConfigureReadingChangeNotifications_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.SensorPtr = device.mojom.SensorRemote;
device.mojom.SensorRequest = device.mojom.SensorPendingReceiver;


// Interface: SensorClient
device.mojom.SensorClient = {};

device.mojom.SensorClient_RaiseError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorClient_RaiseError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SensorClient_SensorReadingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorClient_SensorReadingChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SensorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SensorClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SensorClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SensorClientPendingReceiver,
      handle);
    this.$ = new device.mojom.SensorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SensorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  raiseError() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SensorClient_RaiseError_ParamsSpec,
      null,
      []);
  }

  sensorReadingChanged() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SensorClient_SensorReadingChanged_ParamsSpec,
      null,
      []);
  }

};

device.mojom.SensorClient.getRemote = function() {
  let remote = new device.mojom.SensorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SensorClient',
    'context');
  return remote.$;
};

// ParamsSpec for RaiseError
device.mojom.SensorClient_RaiseError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorClient.RaiseError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SensorReadingChanged
device.mojom.SensorClient_SensorReadingChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SensorClient.SensorReadingChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.SensorClientPtr = device.mojom.SensorClientRemote;
device.mojom.SensorClientRequest = device.mojom.SensorClientPendingReceiver;

