// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app_permissions.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: AppPermission
arc.mojom.AppPermission = {
};

// Enum: AppPermissionGroup
arc.mojom.AppPermissionGroup = {
  CAMERA: 0,
};

// Struct: PermissionState
arc.mojom.PermissionState = class {
  constructor(values = {}) {
    this.managed = values.managed !== undefined ? values.managed : false;
    this.details = values.details !== undefined ? values.details : "";
    this.lifetime = values.lifetime !== undefined ? values.lifetime : null;
    this.one_time = values.one_time !== undefined ? values.one_time : false;
  }
};

// Interface: AppPermissionsInstance
arc.mojom.AppPermissionsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AppPermissionsInstance';
  }

};

arc.mojom.AppPermissionsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
