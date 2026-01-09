// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/remote_apps/mojom/remote_apps.mojom
// Module: chromeos.remote_apps.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.remote_apps = chromeos.remote_apps || {};
chromeos.remote_apps.mojom = chromeos.remote_apps.mojom || {};


// Interface: RemoteApps
chromeos.remote_apps.mojom.RemoteAppsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.remote_apps.mojom.RemoteApps';
  }

  0(name, add_to_front) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(name, add_to_front)
      resolve({});
    });
  }

  1(source_id, name, folder_id, icon_url, add_to_front) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(source_id, name, folder_id, icon_url, add_to_front)
      resolve({});
    });
  }

  addApp() {
    // Method: AddApp
    // Call: AddApp()
  }

  2(app_id) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(app_id)
      resolve({});
    });
  }

  3() {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3()
      resolve({});
    });
  }

  4(app_ids) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(app_ids)
      resolve({});
    });
  }

};

chromeos.remote_apps.mojom.RemoteAppsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteAppsFactory
chromeos.remote_apps.mojom.RemoteAppsFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.remote_apps.mojom.RemoteAppsFactory';
  }

  0(source_id, remote_apps, observer) {
    // Method: 0
    // Call: 0(source_id, remote_apps, observer)
  }

};

chromeos.remote_apps.mojom.RemoteAppsFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteAppLaunchObserver
chromeos.remote_apps.mojom.RemoteAppLaunchObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.remote_apps.mojom.RemoteAppLaunchObserver';
  }

  addApp() {
    // Method: AddApp
    // Call: AddApp()
  }

  0(app_id, source_id) {
    // Method: 0
    // Call: 0(app_id, source_id)
  }

};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
