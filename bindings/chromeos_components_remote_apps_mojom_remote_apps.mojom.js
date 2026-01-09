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

};

chromeos.remote_apps.mojom.RemoteAppLaunchObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
