// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/device_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: DeviceService
device.mojom.DeviceServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.DeviceService';
  }

  bindFingerprint(receiver) {
    // Method: BindFingerprint
    // Call: BindFingerprint(receiver)
  }

  bindGeolocationContext(receiver) {
    // Method: BindGeolocationContext
    // Call: BindGeolocationContext(receiver)
  }

  bindGeolocationControl(receiver) {
    // Method: BindGeolocationControl
    // Call: BindGeolocationControl(receiver)
  }

  bindGeolocationInternals(receiver) {
    // Method: BindGeolocationInternals
    // Call: BindGeolocationInternals(receiver)
  }

  bindInputDeviceManager(receiver) {
    // Method: BindInputDeviceManager
    // Call: BindInputDeviceManager(receiver)
  }

  bindBatteryMonitor(receiver) {
    // Method: BindBatteryMonitor
    // Call: BindBatteryMonitor(receiver)
  }

  bindPressureManager(receiver) {
    // Method: BindPressureManager
    // Call: BindPressureManager(receiver)
  }

  bindNFCProvider(receiver) {
    // Method: BindNFCProvider
    // Call: BindNFCProvider(receiver)
  }

  bindVibrationManager(receiver, listener) {
    // Method: BindVibrationManager
    // Call: BindVibrationManager(receiver, listener)
  }

  bindHidManager(receiver) {
    // Method: BindHidManager
    // Call: BindHidManager(receiver)
  }

  bindMtpManager(receiver) {
    // Method: BindMtpManager
    // Call: BindMtpManager(receiver)
  }

  bindPowerMonitor(receiver) {
    // Method: BindPowerMonitor
    // Call: BindPowerMonitor(receiver)
  }

  bindPublicIpAddressGeolocationProvider(receiver) {
    // Method: BindPublicIpAddressGeolocationProvider
    // Call: BindPublicIpAddressGeolocationProvider(receiver)
  }

  bindScreenOrientationListener(receiver) {
    // Method: BindScreenOrientationListener
    // Call: BindScreenOrientationListener(receiver)
  }

  bindSensorProvider(receiver) {
    // Method: BindSensorProvider
    // Call: BindSensorProvider(receiver)
  }

  bindSerialPortManager(receiver) {
    // Method: BindSerialPortManager
    // Call: BindSerialPortManager(receiver)
  }

  bindTimeZoneMonitor(receiver) {
    // Method: BindTimeZoneMonitor
    // Call: BindTimeZoneMonitor(receiver)
  }

  bindWakeLockProvider(receiver) {
    // Method: BindWakeLockProvider
    // Call: BindWakeLockProvider(receiver)
  }

  bindUsbDeviceManager(receiver) {
    // Method: BindUsbDeviceManager
    // Call: BindUsbDeviceManager(receiver)
  }

  bindUsbDeviceManagerTest(receiver) {
    // Method: BindUsbDeviceManagerTest
    // Call: BindUsbDeviceManagerTest(receiver)
  }

};

device.mojom.DeviceServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
