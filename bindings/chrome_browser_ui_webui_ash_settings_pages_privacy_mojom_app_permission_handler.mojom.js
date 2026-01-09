// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/privacy/mojom/app_permission_handler.mojom
// Module: ash.settings.app_permission.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_permission = ash.settings.app_permission || {};
ash.settings.app_permission.mojom = ash.settings.app_permission.mojom || {};


// Struct: App
ash.settings.app_permission.mojom.App = class {
  constructor(values = {}) {
    this.permissions = values.permissions !== undefined ? values.permissions : "";
  }
};

// Interface: AppPermissionsHandler
ash.settings.app_permission.mojom.AppPermissionsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsHandler';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  getApps() {
    // Method: GetApps
    return new Promise((resolve) => {
      // Call: GetApps()
      resolve({});
    });
  }

  getSystemAppsThatUseCamera() {
    // Method: GetSystemAppsThatUseCamera
    return new Promise((resolve) => {
      // Call: GetSystemAppsThatUseCamera()
      resolve({});
    });
  }

  getSystemAppsThatUseMicrophone() {
    // Method: GetSystemAppsThatUseMicrophone
    return new Promise((resolve) => {
      // Call: GetSystemAppsThatUseMicrophone()
      resolve({});
    });
  }

  openBrowserPermissionSettings(permission_type) {
    // Method: OpenBrowserPermissionSettings
    // Call: OpenBrowserPermissionSettings(permission_type)
  }

  openNativeSettings(app_id) {
    // Method: OpenNativeSettings
    // Call: OpenNativeSettings(app_id)
  }

  setPermission(app_id, permission) {
    // Method: SetPermission
    // Call: SetPermission(app_id, permission)
  }

};

ash.settings.app_permission.mojom.AppPermissionsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppPermissionsObserver
ash.settings.app_permission.mojom.AppPermissionsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_permission.mojom.AppPermissionsObserver';
  }

  onAppRemoved(app_id) {
    // Method: OnAppRemoved
    // Call: OnAppRemoved(app_id)
  }

  onAppUpdated(app) {
    // Method: OnAppUpdated
    // Call: OnAppUpdated(app)
  }

};

ash.settings.app_permission.mojom.AppPermissionsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
