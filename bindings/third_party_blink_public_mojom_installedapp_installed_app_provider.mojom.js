// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/installedapp/installed_app_provider.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: InstalledAppProvider
blink.mojom.InstalledAppProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.InstalledAppProvider';
  }

  filterInstalledApps(related_apps, manifest_url, add_saved_related_applications) {
    // Method: FilterInstalledApps
    return new Promise((resolve) => {
      // Call: FilterInstalledApps(related_apps, manifest_url, add_saved_related_applications)
      resolve({});
    });
  }

};

blink.mojom.InstalledAppProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
