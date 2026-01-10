// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/sensor.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.SensorTypeSpec = { $: mojo.internal.Enum() };
device.mojom.ReportingModeSpec = { $: mojo.internal.Enum() };
device.mojom.SensorReadingRawSpec = { $: {} };
device.mojom.SensorConfigurationSpec = { $: {} };
device.mojom.Sensor = {};
device.mojom.Sensor.$interfaceName = 'device.mojom.Sensor';
device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec = { $: {} };
device.mojom.Sensor_AddConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_AddConfiguration_ResponseParamsSpec = { $: {} };
device.mojom.Sensor_RemoveConfiguration_ParamsSpec = { $: {} };
device.mojom.Sensor_Suspend_ParamsSpec = { $: {} };
device.mojom.Sensor_Resume_ParamsSpec = { $: {} };
device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec = { $: {} };
device.mojom.SensorClient = {};
device.mojom.SensorClient.$interfaceName = 'device.mojom.SensorClient';
device.mojom.SensorClient_RaiseError_ParamsSpec = { $: {} };
device.mojom.SensorClient_SensorReadingChanged_ParamsSpec = { $: {} };

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

// Enum: ReportingMode
device.mojom.ReportingMode = {
  ON_CHANGE: 0,
  CONTINUOUS: 1,
};

// Struct: SensorReadingRaw
mojo.internal.Struct(
    device.mojom.SensorReadingRawSpec, 'device.mojom.SensorReadingRaw', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('values', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SensorConfiguration
mojo.internal.Struct(
    device.mojom.SensorConfigurationSpec, 'device.mojom.SensorConfiguration', [
      mojo.internal.StructField('frequency', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: Sensor
mojo.internal.Struct(
    device.mojom.Sensor_GetDefaultConfiguration_ParamsSpec, 'device.mojom.Sensor_GetDefaultConfiguration_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_GetDefaultConfiguration_ResponseParamsSpec, 'device.mojom.Sensor_GetDefaultConfiguration_ResponseParams', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_AddConfiguration_ParamsSpec, 'device.mojom.Sensor_AddConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_AddConfiguration_ResponseParamsSpec, 'device.mojom.Sensor_AddConfiguration_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_RemoveConfiguration_ParamsSpec, 'device.mojom.Sensor_RemoveConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, device.mojom.SensorConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.Sensor_Suspend_ParamsSpec, 'device.mojom.Sensor_Suspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_Resume_ParamsSpec, 'device.mojom.Sensor_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec, 'device.mojom.Sensor_ConfigureReadingChangeNotifications_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  addConfiguration(configuration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.Sensor_AddConfiguration_ParamsSpec,
      device.mojom.Sensor_AddConfiguration_ResponseParamsSpec,
      [configuration],
      false);
  }

  removeConfiguration(configuration) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.Sensor_RemoveConfiguration_ParamsSpec,
      null,
      [configuration],
      false);
  }

  suspend() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.Sensor_Suspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.Sensor_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  configureReadingChangeNotifications(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.Sensor_ConfigureReadingChangeNotifications_ParamsSpec,
      null,
      [enabled],
      false);
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

device.mojom.SensorPtr = device.mojom.SensorRemote;
device.mojom.SensorRequest = device.mojom.SensorPendingReceiver;


// Interface: SensorClient
mojo.internal.Struct(
    device.mojom.SensorClient_RaiseError_ParamsSpec, 'device.mojom.SensorClient_RaiseError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SensorClient_SensorReadingChanged_ParamsSpec, 'device.mojom.SensorClient_SensorReadingChanged_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  sensorReadingChanged() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SensorClient_SensorReadingChanged_ParamsSpec,
      null,
      [],
      false);
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

device.mojom.SensorClientPtr = device.mojom.SensorClientRemote;
device.mojom.SensorClientRequest = device.mojom.SensorClientPendingReceiver;

