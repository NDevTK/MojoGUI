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

  0(device) {
    // Method: 0
    // Call: 0(device)
  }

  1(device) {
    // Method: 1
    // Call: 1(device)
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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  handle(Handle) {
    // Method: handle
    // Call: handle(Handle)
  }

  3(request) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(request)
      resolve({});
    });
  }

  2(request) {
    // Method: 2
    // Call: 2(request)
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

  0(server, client) {
    // Method: 0
    // Call: 0(server, client)
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

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.MidisInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
