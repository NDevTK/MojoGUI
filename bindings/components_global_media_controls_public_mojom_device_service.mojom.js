// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};


// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
};

// Struct: Device
global_media_controls.mojom.Device = class {
  constructor(values = {}) {
    this.icon@3 = values.icon@3 !== undefined ? values.icon@3 : "";
  }
};

// Interface: DeviceListHost
global_media_controls.mojom.DeviceListHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceListHost';
  }

};

global_media_controls.mojom.DeviceListHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceListClient
global_media_controls.mojom.DeviceListClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceListClient';
  }

};

global_media_controls.mojom.DeviceListClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceService
global_media_controls.mojom.DeviceServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DeviceService';
  }

};

global_media_controls.mojom.DeviceServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePickerProvider
global_media_controls.mojom.DevicePickerProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DevicePickerProvider';
  }

};

global_media_controls.mojom.DevicePickerProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DevicePickerObserver
global_media_controls.mojom.DevicePickerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'global_media_controls.mojom.DevicePickerObserver';
  }

};

global_media_controls.mojom.DevicePickerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
