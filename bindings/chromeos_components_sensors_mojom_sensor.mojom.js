// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/sensors/mojom/sensor.mojom
// Module: chromeos.sensors.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.sensors = chromeos.sensors || {};
chromeos.sensors.sensors.mojom = chromeos.sensors.sensors.mojom || {};


chromeos.sensors.sensors.mojom.mojom.kScale = "scale";

chromeos.sensors.sensors.mojom.mojom.kSamplingFrequencyAvailable = "sampling_frequency_available";

chromeos.sensors.sensors.mojom.mojom.kLocation = "location";

chromeos.sensors.sensors.mojom.mojom.kLabel = "label";

chromeos.sensors.sensors.mojom.mojom.kDeviceName = "name";

chromeos.sensors.sensors.mojom.mojom.kSysPath = "syspath";

chromeos.sensors.sensors.mojom.mojom.kDevlink = "devlink";

chromeos.sensors.sensors.mojom.mojom.kLocationBase = "base";

chromeos.sensors.sensors.mojom.mojom.kLocationLid = "lid";

chromeos.sensors.sensors.mojom.mojom.kLocationCamera = "camera";

chromeos.sensors.sensors.mojom.mojom.kLabelBase = "accel-base";

chromeos.sensors.sensors.mojom.mojom.kLabelLid = "accel-display";

chromeos.sensors.sensors.mojom.mojom.kAccelerometerChannel = "accel";

chromeos.sensors.sensors.mojom.mojom.kGyroscopeChannel = "anglvel";

chromeos.sensors.sensors.mojom.mojom.kMagnetometerChannel = "magn";

chromeos.sensors.sensors.mojom.mojom.kGravityChannel = "gravity";

chromeos.sensors.sensors.mojom.mojom.kLightChannel = "illuminance";

chromeos.sensors.sensors.mojom.mojom.kPressureChannel = "pressure";

chromeos.sensors.sensors.mojom.mojom.kTimestampChannel = "timestamp";

// Enum: DeviceType
chromeos.sensors.sensors.mojom.mojom.DeviceType = {
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
chromeos.sensors.sensors.mojom.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ObserverErrorType
chromeos.sensors.sensors.mojom.mojom.ObserverErrorType = {
  SET_FREQUENCY_IO_FAILED: 0,
  FREQUENCY_INVALID: 1,
  NO_ENABLED_CHANNELS: 2,
  GET_FD_FAILED: 3,
  READ_FAILED: 4,
  READ_TIMEOUT: 5,
};
chromeos.sensors.sensors.mojom.mojom.ObserverErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: SensorServiceDisconnectReason
chromeos.sensors.sensors.mojom.mojom.SensorServiceDisconnectReason = {
  IIOSERVICE_SHUTDOWN: 0,
  CHROME_STOPPED: 1,
};
chromeos.sensors.sensors.mojom.mojom.SensorServiceDisconnectReasonSpec = { $: mojo.internal.Enum() };

// Enum: SensorDeviceDisconnectReason
chromeos.sensors.sensors.mojom.mojom.SensorDeviceDisconnectReason = {
  DEVICE_REMOVED: 0,
};
chromeos.sensors.sensors.mojom.mojom.SensorDeviceDisconnectReasonSpec = { $: mojo.internal.Enum() };

// Interface: SensorService
chromeos.sensors.sensors.mojom.mojom.SensorService = {};

chromeos.sensors.sensors.mojom.mojom.SensorServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorServicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDeviceIds(type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorService_GetDeviceIds_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorService_GetDeviceIds_ResponseParamsSpec,
      [type]);
  }

  getAllDeviceIds() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorService_GetAllDeviceIds_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec,
      []);
  }

  getDevice(iio_device_id, device_request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorService_GetDevice_ParamsSpec,
      null,
      [iio_device_id, device_request]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorService.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorService',
    'context');
  return remote.$;
};

// ParamsSpec for GetDeviceIds
chromeos.sensors.sensors.mojom.mojom.SensorService_GetDeviceIds_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorService_GetDeviceIds_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorService_GetAllDeviceIds_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorService_GetAllDeviceIds_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorService_GetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorService.GetDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'iio_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'device_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.sensors.mojom.SensorDeviceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.sensors.mojom.mojom.SensorServicePtr = chromeos.sensors.sensors.mojom.mojom.SensorServiceRemote;
chromeos.sensors.sensors.mojom.mojom.SensorServiceRequest = chromeos.sensors.sensors.mojom.mojom.SensorServicePendingReceiver;


// Interface: SensorDevice
chromeos.sensors.sensors.mojom.mojom.SensorDevice = {};

chromeos.sensors.sensors.mojom.mojom.SensorDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorDevicePendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTimeout(timeout) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetTimeout_ParamsSpec,
      null,
      [timeout]);
  }

  getAttributes(attr_names) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAttributes_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAttributes_ResponseParamsSpec,
      [attr_names]);
  }

  setFrequency(frequency) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetFrequency_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetFrequency_ResponseParamsSpec,
      [frequency]);
  }

  startReadingSamples(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_StartReadingSamples_ParamsSpec,
      null,
      [observer]);
  }

  stopReadingSamples() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_StopReadingSamples_ParamsSpec,
      null,
      []);
  }

  getAllChannelIds() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAllChannelIds_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec,
      []);
  }

  getChannelsEnabled(iio_chn_indices) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec,
      [iio_chn_indices]);
  }

  getChannelsAttributes(iio_chn_indices, attr_name) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec,
      chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec,
      [iio_chn_indices, attr_name]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorDevice.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDevice',
    'context');
  return remote.$;
};

// ParamsSpec for SetTimeout
chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetTimeout_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAttributes_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAttributes_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetFrequency_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorDevice_SetFrequency_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_StartReadingSamples_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorDevice.StartReadingSamples_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopReadingSamples
chromeos.sensors.sensors.mojom.mojom.SensorDevice_StopReadingSamples_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAllChannelIds_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetAllChannelIds_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsEnabled_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsEnabled_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsAttributes_ParamsSpec = {
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

chromeos.sensors.sensors.mojom.mojom.SensorDevice_GetChannelsAttributes_ResponseParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDevicePtr = chromeos.sensors.sensors.mojom.mojom.SensorDeviceRemote;
chromeos.sensors.sensors.mojom.mojom.SensorDeviceRequest = chromeos.sensors.sensors.mojom.mojom.SensorDevicePendingReceiver;


// Interface: SensorDeviceSamplesObserver
chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver = {};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorDeviceSamplesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSampleUpdated(sample) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec,
      null,
      [sample]);
  }

  onErrorOccurred(type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec,
      null,
      [type]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDeviceSamplesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSampleUpdated
chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver_OnSampleUpdated_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserver_OnErrorOccurred_ParamsSpec = {
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
chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverPtr = chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRemote;
chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverRequest = chromeos.sensors.sensors.mojom.mojom.SensorDeviceSamplesObserverPendingReceiver;


// Interface: SensorServiceNewDevicesObserver
chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserver = {};

chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverPendingReceiver,
      handle);
    this.$ = new chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewDeviceAdded(iio_device_id, types) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec,
      null,
      [iio_device_id, types]);
  }

};

chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserver.getRemote = function() {
  let remote = new chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorServiceNewDevicesObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewDeviceAdded
chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserver_OnNewDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.sensors.mojom.SensorServiceNewDevicesObserver.OnNewDeviceAdded_Params',
      packedSize: 24,
      fields: [
        { name: 'iio_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'types', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.sensors.mojom.DeviceTypeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverPtr = chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRemote;
chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverRequest = chromeos.sensors.sensors.mojom.mojom.SensorServiceNewDevicesObserverPendingReceiver;

