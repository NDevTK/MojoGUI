// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/device_notifications.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: DeviceListener
audio.mojom.DeviceListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.DeviceListener';
  }

  devicesChanged() {
    // Method: DevicesChanged
    // Call: DevicesChanged()
  }

};

audio.mojom.DeviceListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceNotifier
audio.mojom.DeviceNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'audio.mojom.DeviceNotifier';
  }

  registerListener(listener) {
    // Method: RegisterListener
    // Call: RegisterListener(listener)
  }

};

audio.mojom.DeviceNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
