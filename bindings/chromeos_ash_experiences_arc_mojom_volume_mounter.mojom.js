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

};

arc.mojom.VolumeMounterInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
