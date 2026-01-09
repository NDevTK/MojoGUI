// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/people/mojom/graduation_handler.mojom
// Module: ash.settings.graduation.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.graduation = ash.settings.graduation || {};
ash.settings.graduation.mojom = ash.settings.graduation.mojom || {};


// Interface: GraduationHandler
ash.settings.graduation.mojom.GraduationHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.graduation.mojom.GraduationHandler';
  }

  launchGraduationApp() {
    // Method: LaunchGraduationApp
    // Call: LaunchGraduationApp()
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

};

ash.settings.graduation.mojom.GraduationHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GraduationObserver
ash.settings.graduation.mojom.GraduationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.graduation.mojom.GraduationObserver';
  }

  onGraduationAppUpdated(is_app_enabled) {
    // Method: OnGraduationAppUpdated
    // Call: OnGraduationAppUpdated(is_app_enabled)
  }

};

ash.settings.graduation.mojom.GraduationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
