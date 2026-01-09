// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};


// Interface: ConfigTraitsTestService
wl.mojom.ConfigTraitsTestServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'wl.mojom.ConfigTraitsTestService';
  }

  echoTransform(t) {
    // Method: EchoTransform
    return new Promise((resolve) => {
      // Call: EchoTransform(t)
      resolve({});
    });
  }

};

wl.mojom.ConfigTraitsTestServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
