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
  IIOSERVICE_SHUTDOWN: 0,
  CHROME_STOPPED: 1,
};

// Enum: SensorDeviceDisconnectReason
chromeos.sensors.mojom.SensorDeviceDisconnectReason = {
  DEVICE_REMOVED: 0,
};

// Interface: SensorService
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

};

chromeos.sensors.mojom.SensorService.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorService',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.sensors.mojom.SensorServicePtr = chromeos.sensors.mojom.SensorServiceRemote;
chromeos.sensors.mojom.SensorServiceRequest = chromeos.sensors.mojom.SensorServicePendingReceiver;


// Interface: SensorDevice
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

};

chromeos.sensors.mojom.SensorDevice.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDevice',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.sensors.mojom.SensorDevicePtr = chromeos.sensors.mojom.SensorDeviceRemote;
chromeos.sensors.mojom.SensorDeviceRequest = chromeos.sensors.mojom.SensorDevicePendingReceiver;


// Interface: SensorDeviceSamplesObserver
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

};

chromeos.sensors.mojom.SensorDeviceSamplesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorDeviceSamplesObserver',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.sensors.mojom.SensorDeviceSamplesObserverPtr = chromeos.sensors.mojom.SensorDeviceSamplesObserverRemote;
chromeos.sensors.mojom.SensorDeviceSamplesObserverRequest = chromeos.sensors.mojom.SensorDeviceSamplesObserverPendingReceiver;


// Interface: SensorServiceNewDevicesObserver
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

};

chromeos.sensors.mojom.SensorServiceNewDevicesObserver.getRemote = function() {
  let remote = new chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.sensors.mojom.SensorServiceNewDevicesObserver',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.sensors.mojom.SensorServiceNewDevicesObserverPtr = chromeos.sensors.mojom.SensorServiceNewDevicesObserverRemote;
chromeos.sensors.mojom.SensorServiceNewDevicesObserverRequest = chromeos.sensors.mojom.SensorServiceNewDevicesObserverPendingReceiver;

