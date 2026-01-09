// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_osauth.mojom
// Module: ash.screens_osauth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_osauth = ash.screens_osauth || {};
ash.screens_osauth.mojom = ash.screens_osauth.mojom || {};


// Interface: LocalDataLossWarningPageHandler
ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.screens_osauth.mojom.LocalDataLossWarningPageHandler';
  }

  onPowerwash() {
    // Method: OnPowerwash
    // Call: OnPowerwash()
  }

  onRecreateUser() {
    // Method: OnRecreateUser
    // Call: OnRecreateUser()
  }

  onCancel() {
    // Method: OnCancel
    // Call: OnCancel()
  }

  onBack() {
    // Method: OnBack
    // Call: OnBack()
  }

};

ash.screens_osauth.mojom.LocalDataLossWarningPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
