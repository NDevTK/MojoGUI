// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/geolocation_context.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: GeolocationPermissionLevel
device.mojom.GeolocationPermissionLevel = {
};

// Interface: GeolocationContext
device.mojom.GeolocationContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.GeolocationContext';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  bindGeolocation(receiver, requesting_url, client_id, has_precise_permission) {
    // Method: BindGeolocation
    // Call: BindGeolocation(receiver, requesting_url, client_id, has_precise_permission)
  }

  onPermissionUpdated(origin, permission_level) {
    // Method: OnPermissionUpdated
    // Call: OnPermissionUpdated(origin, permission_level)
  }

  setOverride(result) {
    // Method: SetOverride
    // Call: SetOverride(result)
  }

  clearOverride() {
    // Method: ClearOverride
    // Call: ClearOverride()
  }

};

device.mojom.GeolocationContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
