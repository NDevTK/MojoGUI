// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/graduation/mojom/graduation_ui.mojom
// Module: ash.graduation_ui.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.graduation_ui = ash.graduation_ui || {};
ash.graduation_ui.mojom = ash.graduation_ui.mojom || {};


// Enum: GraduationScreen
ash.graduation_ui.mojom.GraduationScreen = {
  kWelcome: 0,
  kTakeoutUi: 1,
  kError: 2,
};

// Enum: AuthResult
ash.graduation_ui.mojom.AuthResult = {
  kSuccess: 0,
  kError: 1,
};

// Struct: ProfileInfo
ash.graduation_ui.mojom.ProfileInfo = class {
  constructor(values = {}) {
    this.photo_url = values.photo_url !== undefined ? values.photo_url : "";
  }
};

// Interface: GraduationUiHandler
ash.graduation_ui.mojom.GraduationUiHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.graduation_ui.mojom.GraduationUiHandler';
  }

  authenticateWebview() {
    // Method: AuthenticateWebview
    return new Promise((resolve) => {
      // Call: AuthenticateWebview()
      resolve({});
    });
  }

  getProfileInfo() {
    // Method: GetProfileInfo
    return new Promise((resolve) => {
      // Call: GetProfileInfo()
      resolve({});
    });
  }

  onScreenSwitched(screen) {
    // Method: OnScreenSwitched
    // Call: OnScreenSwitched(screen)
  }

  onTransferComplete() {
    // Method: OnTransferComplete
    // Call: OnTransferComplete()
  }

};

ash.graduation_ui.mojom.GraduationUiHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
