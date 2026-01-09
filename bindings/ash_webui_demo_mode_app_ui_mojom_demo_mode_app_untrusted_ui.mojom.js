// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/demo_mode_app_ui/mojom/demo_mode_app_untrusted_ui.mojom
// Module: ash.mojom.demo_mode

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.demo_mode = ash.mojom.demo_mode || {};


// Interface: UntrustedPageHandlerFactory
ash.mojom.demo_mode.UntrustedPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.mojom.demo_mode.UntrustedPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UntrustedPageHandler
ash.mojom.demo_mode.UntrustedPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.demo_mode.UntrustedPageHandler';
  }

  toggleFullscreen() {
    // Method: ToggleFullscreen
    // Call: ToggleFullscreen()
  }

  launchApp(app_id) {
    // Method: LaunchApp
    // Call: LaunchApp(app_id)
  }

};

ash.mojom.demo_mode.UntrustedPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
