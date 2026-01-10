// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/device_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

device.mojom.DeviceService = {};
device.mojom.DeviceService.$interfaceName = 'device.mojom.DeviceService';
device.mojom.DeviceService_BindFingerprint_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationContext_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationControl_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPressureManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindNFCProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindVibrationManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindHidManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindMtpManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPowerMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindSensorProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindSerialPortManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec = { $: {} };
device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec = { $: {} };

// Interface: DeviceService
mojo.internal.Struct(
    device.mojom.DeviceService_BindFingerprint_ParamsSpec, 'device.mojom.DeviceService_BindFingerprint_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.FingerprintRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationContext_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationContext_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationControl_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationControl_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec, 'device.mojom.DeviceService_BindGeolocationInternals_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.GeolocationInternalsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec, 'device.mojom.DeviceService_BindInputDeviceManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.InputDeviceManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec, 'device.mojom.DeviceService_BindBatteryMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.BatteryMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPressureManager_ParamsSpec, 'device.mojom.DeviceService_BindPressureManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PressureManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindNFCProvider_ParamsSpec, 'device.mojom.DeviceService_BindNFCProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.NFCProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindVibrationManager_ParamsSpec, 'device.mojom.DeviceService_BindVibrationManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.VibrationManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('listener', 8, 0, mojo.internal.InterfaceProxy(device.mojom.VibrationManagerListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindHidManager_ParamsSpec, 'device.mojom.DeviceService_BindHidManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.HidManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindMtpManager_ParamsSpec, 'device.mojom.DeviceService_BindMtpManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.MtpManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPowerMonitor_ParamsSpec, 'device.mojom.DeviceService_BindPowerMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PowerMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec, 'device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.PublicIpAddressGeolocationProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec, 'device.mojom.DeviceService_BindScreenOrientationListener_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.ScreenOrientationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindSensorProvider_ParamsSpec, 'device.mojom.DeviceService_BindSensorProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.SensorProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindSerialPortManager_ParamsSpec, 'device.mojom.DeviceService_BindSerialPortManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.SerialPortManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec, 'device.mojom.DeviceService_BindTimeZoneMonitor_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.TimeZoneMonitorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec, 'device.mojom.DeviceService_BindWakeLockProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec, 'device.mojom.DeviceService_BindUsbDeviceManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec, 'device.mojom.DeviceService_BindUsbDeviceManagerTest_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceManagerTestRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new device.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindFingerprint(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.DeviceService_BindFingerprint_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationContext(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.DeviceService_BindGeolocationContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationControl(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.DeviceService_BindGeolocationControl_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGeolocationInternals(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.DeviceService_BindGeolocationInternals_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInputDeviceManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.DeviceService_BindInputDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBatteryMonitor(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.DeviceService_BindBatteryMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPressureManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.DeviceService_BindPressureManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindNFCProvider(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.DeviceService_BindNFCProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVibrationManager(receiver, listener) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.DeviceService_BindVibrationManager_ParamsSpec,
      null,
      [receiver, listener],
      false);
  }

  bindHidManager(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      device.mojom.DeviceService_BindHidManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMtpManager(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      device.mojom.DeviceService_BindMtpManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPowerMonitor(receiver) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      device.mojom.DeviceService_BindPowerMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPublicIpAddressGeolocationProvider(receiver) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      device.mojom.DeviceService_BindPublicIpAddressGeolocationProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindScreenOrientationListener(receiver) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      device.mojom.DeviceService_BindScreenOrientationListener_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSensorProvider(receiver) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      device.mojom.DeviceService_BindSensorProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSerialPortManager(receiver) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      device.mojom.DeviceService_BindSerialPortManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTimeZoneMonitor(receiver) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      device.mojom.DeviceService_BindTimeZoneMonitor_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindWakeLockProvider(receiver) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      device.mojom.DeviceService_BindWakeLockProvider_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManager(receiver) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindUsbDeviceManagerTest(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      device.mojom.DeviceService_BindUsbDeviceManagerTest_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.DeviceService.getRemote = function() {
  let remote = new device.mojom.DeviceServiceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'device.mojom.DeviceService',
    'context');
  return remote.$;
};

device.mojom.DeviceServicePtr = device.mojom.DeviceServiceRemote;
device.mojom.DeviceServiceRequest = device.mojom.DeviceServicePendingReceiver;

