// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/appfuse.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AppfuseHost
arc.mojom.AppfuseHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AppfuseHost';
  }

  0(uid, mount_id) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(uid, mount_id)
      resolve({});
    });
  }

  1(uid, mount_id) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(uid, mount_id)
      resolve({});
    });
  }

  2(uid, mount_id, file_id, flags) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(uid, mount_id, file_id, flags)
      resolve({});
    });
  }

};

arc.mojom.AppfuseHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppfuseInstance
arc.mojom.AppfuseInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AppfuseInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.AppfuseInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
