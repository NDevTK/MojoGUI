// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/midis.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: MidisDeviceInfo
arc.mojom.MidisDeviceInfo = class {
  constructor(values = {}) {
    this.manufacturer = values.manufacturer !== undefined ? values.manufacturer : 0;
  }
};

// Struct: MidisRequest
arc.mojom.MidisRequest = class {
  constructor(values = {}) {
    this.subdevice_num = values.subdevice_num !== undefined ? values.subdevice_num : 0;
  }
};

// Interface: MidisClient
arc.mojom.MidisClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MidisClient';
  }

};

arc.mojom.MidisClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MidisServer
arc.mojom.MidisServerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MidisServer';
  }

};

arc.mojom.MidisServerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MidisHost
arc.mojom.MidisHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MidisHost';
  }

};

arc.mojom.MidisHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MidisInstance
arc.mojom.MidisInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MidisInstance';
  }

};

arc.mojom.MidisInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
