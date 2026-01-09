// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: HidBusType
device.mojom.HidBusType = {
};

// Struct: HidUsageAndPage
device.mojom.HidUsageAndPage = class {
  constructor(values = {}) {
  }
};

// Struct: HidReportItem
device.mojom.HidReportItem = class {
  constructor(values = {}) {
    this.of = values.of !== undefined ? values.of : null;
  }
};

// Struct: HidReportDescription
device.mojom.HidReportDescription = class {
  constructor(values = {}) {
  }
};

// Struct: HidCollectionInfo
device.mojom.HidCollectionInfo = class {
  constructor(values = {}) {
    this.the = values.the !== undefined ? values.the : null;
  }
};

// Struct: HidDeviceInfo
device.mojom.HidDeviceInfo = class {
  constructor(values = {}) {
  }
};

// Interface: HidManagerClient
device.mojom.HidManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidManagerClient';
  }

};

device.mojom.HidManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidManager
device.mojom.HidManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidManager';
  }

};

device.mojom.HidManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnection
device.mojom.HidConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnection';
  }

};

device.mojom.HidConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnectionClient
device.mojom.HidConnectionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnectionClient';
  }

};

device.mojom.HidConnectionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnectionWatcher
device.mojom.HidConnectionWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnectionWatcher';
  }

};

device.mojom.HidConnectionWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
