// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/cast_demo.mojom
// Module: chromecast.shell.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};


// Interface: CastDemoVolumeChangeObserver
chromecast.shell.mojom.CastDemoVolumeChangeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.shell.mojom.CastDemoVolumeChangeObserver';
  }

  volumeChanged(level) {
    // Method: VolumeChanged
    // Call: VolumeChanged(level)
  }

};

chromecast.shell.mojom.CastDemoVolumeChangeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CastDemo
chromecast.shell.mojom.CastDemoPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.shell.mojom.CastDemo';
  }

  recordEvent(event_name, data) {
    // Method: RecordEvent
    // Call: RecordEvent(event_name, data)
  }

  setRetailerName(retailer_name) {
    // Method: SetRetailerName
    // Call: SetRetailerName(retailer_name)
  }

  setStoreId(store_id) {
    // Method: SetStoreId
    // Call: SetStoreId(store_id)
  }

  getRetailerName() {
    // Method: GetRetailerName
    return new Promise((resolve) => {
      // Call: GetRetailerName()
      resolve({});
    });
  }

  getStoreId() {
    // Method: GetStoreId
    return new Promise((resolve) => {
      // Call: GetStoreId()
      resolve({});
    });
  }

  setDefaultVolumeLevel(level) {
    // Method: SetDefaultVolumeLevel
    // Call: SetDefaultVolumeLevel(level)
  }

  setDefaultVolumeLevel() {
    // Method: SetDefaultVolumeLevel
    // Call: SetDefaultVolumeLevel()
  }

  getDefaultVolumeLevel() {
    // Method: GetDefaultVolumeLevel
    return new Promise((resolve) => {
      // Call: GetDefaultVolumeLevel()
      resolve({});
    });
  }

  setDefaultVolumeLevel() {
    // Method: SetDefaultVolumeLevel
    // Call: SetDefaultVolumeLevel()
  }

  applyDefaultVolume() {
    // Method: ApplyDefaultVolume
    // Call: ApplyDefaultVolume()
  }

  setWifiCredentials(ssid, psk) {
    // Method: SetWifiCredentials
    // Call: SetWifiCredentials(ssid, psk)
  }

};

chromecast.shell.mojom.CastDemoRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
