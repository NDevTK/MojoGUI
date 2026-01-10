// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/sensor.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.mojom = chromeos.sensors.mojom || {};


chromeos.sensors.mojom.kScale = "scale";

chromeos.sensors.mojom.kSamplingFrequencyAvailable = "sampling_frequency_available";

chromeos.sensors.mojom.kLocation = "location";

chromeos.sensors.mojom.kLabel = "label";

chromeos.sensors.mojom.kDeviceName = "name";

chromeos.sensors.mojom.kSysPath = "syspath";

chromeos.sensors.mojom.kDevlink = "devlink";

chromeos.sensors.mojom.kLocationBase = "base";

chromeos.sensors.mojom.kLocationLid = "lid";

chromeos.sensors.mojom.kLocationCamera = "camera";

chromeos.sensors.mojom.kLabelBase = "accel-base";

chromeos.sensors.mojom.kLabelLid = "accel-display";

chromeos.sensors.mojom.kAccelerometerChannel = "accel";

chromeos.sensors.mojom.kGyroscopeChannel = "anglvel";

chromeos.sensors.mojom.kMagnetometerChannel = "magn";

chromeos.sensors.mojom.kGravityChannel = "gravity";

chromeos.sensors.mojom.kLightChannel = "illuminance";

chromeos.sensors.mojom.kPressureChannel = "pressure";

chromeos.sensors.mojom.kTimestampChannel = "timestamp";

// Enum: DeviceType
chromeos.sensors.mojom.DeviceType = {
  ACCEL: 0,
  ANGLVEL: 1,
  LIGHT: 2,
  COUNT: 3,
  MAGN: 4,
  ANGL: 5,
  BARO: 6,
  ACCEL_UNCALIBRATED: 7,
  ANGLVEL_UNCALIBRATED: 8,
  MAGN_UNCALIBRATED: 9,
  GRAVITY: 10,
};
chromeos.sensors.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ObserverErrorType
chromeos.sensors.mojom.ObserverErrorType = {
  SET_FREQUENCY_IO_FAILED: 0,
  FREQUENCY_INVALID: 1,
  NO_ENABLED_CHANNELS: 2,
  GET_FD_FAILED: 3,
  READ_FAILED: 4,
  READ_TIMEOUT: 5,
};
chromeos.sensors.mojom.ObserverErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: SensorServiceDisconnectReason
chromeos.sensors.mojom.SensorServiceDisconnectReason = {
  IIOSERVICE_SHUTDOWN: 0,
  CHROME_STOPPED: 1,
};
chromeos.sensors.mojom.SensorServiceDisconnectReasonSpec = { $: mojo.internal.Enum() };

// Enum: SensorDeviceDisconnectReason
chromeos.sensors.mojom.SensorDeviceDisconnectReason = {
  DEVICE_REMOVED: 0,
};
chromeos.sensors.mojom.SensorDeviceDisconnectReasonSpec = { $: mojo.internal.Enum() };

// Interface: SensorService
chromeos.sensors.mojom.SensorService = {};

chromeos.sensors.mojom.SensorServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorServicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceIds(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec,
      chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec,
      [type]);
  }

  getAllDeviceIds() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec,
      chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec,
      []);
  }

  getDevice(iio_device_id, device_request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec,
      null,
      [iio_device_id, device_request]);
  }

};

chromeos.sensors.mojom.SensorService.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorService',
    'context');
  return remote.$;
};

// ParamsSpec for GetDeviceIds
chromeos.sensors.mojom.SensorService_GetDeviceIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetDeviceIds_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.sensors.mojom.DeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.sensors.mojom.SensorService_GetDeviceIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetDeviceIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'iio_device_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllDeviceIds
chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetAllDeviceIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.sensors.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetAllDeviceIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'iio_device_ids_types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Array(chromeos.sensors.mojom.DeviceTypeSpec, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevice
chromeos.sensors.mojom.SensorService_GetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'iio_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_request', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorServicePtr = chromeos.sensors.mojom.SensorServiceRemote;
chromeos.sensors.mojom.SensorServiceRequest = chromeos.sensors.mojom.SensorServicePendingReceiver;


// Interface: SensorDevice
chromeos.sensors.mojom.SensorDevice = {};

chromeos.sensors.mojom.SensorDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorDeviceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorDevicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTimeout(timeout) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec,
      null,
      [timeout]);
  }

  getAttributes(attr_names) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec,
      [attr_names]);
  }

  setFrequency(frequency) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec,
      [frequency]);
  }

  startReadingSamples(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec,
      null,
      [observer]);
  }

  stopReadingSamples() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec,
      null,
      []);
  }

  getAllChannelIds() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec,
      []);
  }

  getChannelsEnabled(iio_chn_indices) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec,
      [iio_chn_indices]);
  }

  getChannelsAttributes(iio_chn_indices, attr_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec,
      chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec,
      [iio_chn_indices, attr_name]);
  }

};

chromeos.sensors.mojom.SensorDevice.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDevice',
    'context');
  return remote.$;
};

// ParamsSpec for SetTimeout
chromeos.sensors.mojom.SensorDevice_SetTimeout_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.SetTimeout_Params',
      packedSize: 16,
      fields: [
        { name: 'timeout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAttributes
chromeos.sensors.mojom.SensorDevice_GetAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetAttributes_Params',
      packedSize: 16,
      fields: [
        { name: 'attr_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.sensors.mojom.SensorDevice_GetAttributes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetAttributes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFrequency
chromeos.sensors.mojom.SensorDevice_SetFrequency_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.SetFrequency_Params',
      packedSize: 16,
      fields: [
        { name: 'frequency', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.sensors.mojom.SensorDevice_SetFrequency_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.SetFrequency_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_freq', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartReadingSamples
chromeos.sensors.mojom.SensorDevice_StartReadingSamples_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.StartReadingSamples_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopReadingSamples
chromeos.sensors.mojom.SensorDevice_StopReadingSamples_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.StopReadingSamples_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetAllChannelIds
chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetAllChannelIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.sensors.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetAllChannelIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'iio_chn_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetChannelsEnabled
chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetChannelsEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'iio_chn_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.sensors.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetChannelsEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetChannelsAttributes
chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetChannelsAttributes_Params',
      packedSize: 24,
      fields: [
        { name: 'iio_chn_indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
        { name: 'attr_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.sensors.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.GetChannelsAttributes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorDevicePtr = chromeos.sensors.mojom.SensorDeviceRemote;
chromeos.sensors.mojom.SensorDeviceRequest = chromeos.sensors.mojom.SensorDevicePendingReceiver;


// Interface: SensorDeviceSamplesObserver
chromeos.sensors.mojom.SensorDeviceSamplesObserver = {};

chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorDeviceSamplesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSampleUpdated(sample) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec,
      null,
      [sample]);
  }

  onErrorOccurred(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec,
      null,
      [type]);
  }

};

chromeos.sensors.mojom.SensorDeviceSamplesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDeviceSamplesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSampleUpdated
chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDeviceSamplesObserver.OnSampleUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'sample', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnErrorOccurred
chromeos.sensors.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDeviceSamplesObserver.OnErrorOccurred_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chromeos.sensors.mojom.ObserverErrorTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorDeviceSamplesObserverPtr = chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote;
chromeos.sensors.mojom.SensorDeviceSamplesObserverRequest = chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver;


// Interface: SensorServiceNewDevicesObserver
chromeos.sensors.mojom.SensorServiceNewDevicesObserver = {};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewDeviceAdded(iio_device_id, types) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec,
      null,
      [iio_device_id, types]);
  }

};

chromeos.sensors.mojom.SensorServiceNewDevicesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorServiceNewDevicesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewDeviceAdded
chromeos.sensors.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver.OnNewDeviceAdded_Params',
      packedSize: 24,
      fields: [
        { name: 'iio_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chromeos.sensors.mojom.DeviceTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.mojom.SensorServiceNewDevicesObserverPtr = chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote;
chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver;

