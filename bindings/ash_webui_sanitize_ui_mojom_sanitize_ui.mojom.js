// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sanitize_ui/mojom/sanitize_ui.mojom
// Module: ash.sanitize_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.sanitize_ui = ash.sanitize_ui || {};
ash.sanitize_ui.mojom = ash.sanitize_ui.mojom || {};


// Interface: SettingsResetter
ash.sanitize_ui.mojom.SettingsResetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.sanitize_ui.mojom.SettingsResetter';
  }

  performSanitizeSettings() {
    // Method: PerformSanitizeSettings
    // Call: PerformSanitizeSettings()
  }

};

ash.sanitize_ui.mojom.SettingsResetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
