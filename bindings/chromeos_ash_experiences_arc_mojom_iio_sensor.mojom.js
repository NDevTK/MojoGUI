// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/iio_sensor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: IioSensorHost
arc.mojom.IioSensorHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.IioSensorHost';
  }

  0(client) {
    // Method: 0
    // Call: 0(client)
  }

};

arc.mojom.IioSensorHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IioSensorInstance
arc.mojom.IioSensorInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.IioSensorInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1(is_tablet_mode_on) {
    // Method: 1
    // Call: 1(is_tablet_mode_on)
  }

};

arc.mojom.IioSensorInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
