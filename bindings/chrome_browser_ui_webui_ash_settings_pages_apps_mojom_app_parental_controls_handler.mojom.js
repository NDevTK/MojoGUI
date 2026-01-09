// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/apps/mojom/app_parental_controls_handler.mojom
// Module: ash.settings.app_parental_controls.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.app_parental_controls = ash.settings.app_parental_controls || {};
ash.settings.app_parental_controls.mojom = ash.settings.app_parental_controls.mojom || {};


// Enum: PinValidationResult
ash.settings.app_parental_controls.mojom.PinValidationResult = {
};

// Struct: App
ash.settings.app_parental_controls.mojom.App = class {
  constructor(values = {}) {
    this.is_blocked = values.is_blocked !== undefined ? values.is_blocked : false;
  }
};

// Interface: AppParentalControlsHandler
ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_parental_controls.mojom.AppParentalControlsHandler';
  }

  getApps() {
    // Method: GetApps
    return new Promise((resolve) => {
      // Call: GetApps()
      resolve({});
    });
  }

  updateApp(app_id, is_blocked) {
    // Method: UpdateApp
    // Call: UpdateApp(app_id, is_blocked)
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  onControlsDisabled() {
    // Method: OnControlsDisabled
    // Call: OnControlsDisabled()
  }

  validatePin(pin) {
    // Method: ValidatePin
    return new Promise((resolve) => {
      // Call: ValidatePin(pin)
      resolve({});
    });
  }

  setUpPin(pin) {
    // Method: SetUpPin
    return new Promise((resolve) => {
      // Call: SetUpPin(pin)
      resolve({});
    });
  }

  verifyPin(pin) {
    // Method: VerifyPin
    return new Promise((resolve) => {
      // Call: VerifyPin(pin)
      resolve({});
    });
  }

  isSetupCompleted() {
    // Method: IsSetupCompleted
    return new Promise((resolve) => {
      // Call: IsSetupCompleted()
      resolve({});
    });
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppParentalControlsObserver
ash.settings.app_parental_controls.mojom.AppParentalControlsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.app_parental_controls.mojom.AppParentalControlsObserver';
  }

  onAppInstalledOrUpdated(app) {
    // Method: OnAppInstalledOrUpdated
    // Call: OnAppInstalledOrUpdated(app)
  }

  onAppUninstalled(app) {
    // Method: OnAppUninstalled
    // Call: OnAppUninstalled(app)
  }

};

ash.settings.app_parental_controls.mojom.AppParentalControlsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
