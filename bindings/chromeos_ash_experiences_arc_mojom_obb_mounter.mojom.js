// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ObbMounterHost
arc.mojom.ObbMounterHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ObbMounterHost';
  }

  0(obb_file, target_path, owner_gid) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(obb_file, target_path, owner_gid)
      resolve({});
    });
  }

  1(target_path) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(target_path)
      resolve({});
    });
  }

};

arc.mojom.ObbMounterHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ObbMounterInstance
arc.mojom.ObbMounterInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ObbMounterInstance';
  }

  1(host_remote) {
    // Method: 1
    // Call: 1(host_remote)
  }

};

arc.mojom.ObbMounterInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
