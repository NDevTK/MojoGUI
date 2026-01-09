// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/device/device.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ManagedConfigurationObserver
blink.mojom.ManagedConfigurationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ManagedConfigurationObserver';
  }

  onConfigurationChanged() {
    // Method: OnConfigurationChanged
    // Call: OnConfigurationChanged()
  }

};

blink.mojom.ManagedConfigurationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceAPIService
blink.mojom.DeviceAPIServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DeviceAPIService';
  }

  getDirectoryId() {
    // Method: GetDirectoryId
    return new Promise((resolve) => {
      // Call: GetDirectoryId()
      resolve({});
    });
  }

  getHostname() {
    // Method: GetHostname
    return new Promise((resolve) => {
      // Call: GetHostname()
      resolve({});
    });
  }

  getSerialNumber() {
    // Method: GetSerialNumber
    return new Promise((resolve) => {
      // Call: GetSerialNumber()
      resolve({});
    });
  }

  getAnnotatedAssetId() {
    // Method: GetAnnotatedAssetId
    return new Promise((resolve) => {
      // Call: GetAnnotatedAssetId()
      resolve({});
    });
  }

  getAnnotatedLocation() {
    // Method: GetAnnotatedLocation
    return new Promise((resolve) => {
      // Call: GetAnnotatedLocation()
      resolve({});
    });
  }

};

blink.mojom.DeviceAPIServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ManagedConfigurationService
blink.mojom.ManagedConfigurationServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ManagedConfigurationService';
  }

  getManagedConfiguration(keys) {
    // Method: GetManagedConfiguration
    return new Promise((resolve) => {
      // Call: GetManagedConfiguration(keys)
      resolve({});
    });
  }

  subscribeToManagedConfiguration(observer) {
    // Method: SubscribeToManagedConfiguration
    // Call: SubscribeToManagedConfiguration(observer)
  }

};

blink.mojom.ManagedConfigurationServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
