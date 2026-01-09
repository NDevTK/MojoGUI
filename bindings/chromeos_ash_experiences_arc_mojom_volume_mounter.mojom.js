// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: MountEvent
arc.mojom.MountEvent = {
};

// Enum: DeviceType
arc.mojom.DeviceType = {
};

// Struct: MountPointInfo
arc.mojom.MountPointInfo = class {
  constructor(values = {}) {
    this.mount_path = values.mount_path !== undefined ? values.mount_path : "";
    this.label = values.label !== undefined ? values.label : "";
    this.device_type = values.device_type !== undefined ? values.device_type : null;
    this.visible = values.visible !== undefined ? values.visible : false;
  }
};

// Interface: VolumeMounterHost
arc.mojom.VolumeMounterHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VolumeMounterHost';
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  3(media_provider_uid) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(media_provider_uid)
      resolve({});
    });
  }

  4(success) {
    // Method: 4
    // Call: 4(success)
  }

};

arc.mojom.VolumeMounterHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VolumeMounterInstance
arc.mojom.VolumeMounterInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.VolumeMounterInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1(mount_point_info) {
    // Method: 1
    // Call: 1(mount_point_info)
  }

  2(path) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(path)
      resolve({});
    });
  }

};

arc.mojom.VolumeMounterInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
