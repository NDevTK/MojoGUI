// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/help_app_ui.mojom
// Module: ash.help_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};


// Enum: ActionTypeId
ash.help_app.mojom.ActionTypeId = {
  INVALID: 0,
  OPEN_CHROME: 1,
  OPEN_LAUNCHER: 2,
  OPEN_PERSONALIZATION_APP: 3,
  OPEN_PLAY_STORE: 4,
  OPEN_GOOGLE_DOCS: 5,
  OPEN_GOOGLE_PHOTOS: 6,
  OPEN_SETTINGS_PRINTER: 7,
  OPEN_PHONE_HUB: 8,
  OPEN_YOUTUBE: 9,
  OPEN_FILE_MANAGER: 10,
};

// Enum: SettingsComponent
ash.help_app.mojom.SettingsComponent = {
  ACCESSIBILITY: 0,
  BLUETOOTH: 1,
  DISPLAY: 2,
  INPUT: 3,
  MULTI_DEVICE: 4,
  PEOPLE: 5,
  PER_DEVICE_KEYBOARD: 6,
  PER_DEVICE_TOUCHPAD: 7,
  PERSONALIZATION: 8,
  PRINTING: 9,
  SECURITY_AND_SIGN_IN: 10,
  TOUCHPAD_REVERSE_SCROLLING: 11,
  TOUCHPAD_SIMULATE_RIGHT_CLICK: 12,
};

// Struct: DeviceInfo
ash.help_app.mojom.DeviceInfo = class {
  constructor(values = {}) {
    this.user_type = values.user_type !== undefined ? values.user_type : "";
    this.is_steam_allowed = values.is_steam_allowed !== undefined ? values.is_steam_allowed : false;
  }
};

// Interface: PageHandlerFactory
ash.help_app.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.help_app.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.help_app.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.help_app.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.help_app.mojom.PageHandler';
  }

  openFeedbackDialog() {
    // Method: OpenFeedbackDialog
    return new Promise((resolve) => {
      // Call: OpenFeedbackDialog()
      resolve({});
    });
  }

  showOnDeviceAppControls() {
    // Method: ShowOnDeviceAppControls
    // Call: ShowOnDeviceAppControls()
  }

  showParentalControls() {
    // Method: ShowParentalControls
    // Call: ShowParentalControls()
  }

  triggerWelcomeTipCallToAction(action_type_id) {
    // Method: TriggerWelcomeTipCallToAction
    // Call: TriggerWelcomeTipCallToAction(action_type_id)
  }

  isLauncherSearchEnabled() {
    // Method: IsLauncherSearchEnabled
    return new Promise((resolve) => {
      // Call: IsLauncherSearchEnabled()
      resolve({});
    });
  }

  launchMicrosoft365Setup() {
    // Method: LaunchMicrosoft365Setup
    // Call: LaunchMicrosoft365Setup()
  }

  maybeShowReleaseNotesNotification() {
    // Method: MaybeShowReleaseNotesNotification
    // Call: MaybeShowReleaseNotesNotification()
  }

  getDeviceInfo() {
    // Method: GetDeviceInfo
    return new Promise((resolve) => {
      // Call: GetDeviceInfo()
      resolve({});
    });
  }

  openUrlInBrowserAndTriggerInstallDialog(url) {
    // Method: OpenUrlInBrowserAndTriggerInstallDialog
    // Call: OpenUrlInBrowserAndTriggerInstallDialog(url)
  }

  openSettings(component) {
    // Method: OpenSettings
    // Call: OpenSettings(component)
  }

  setHasCompletedNewDeviceChecklist() {
    // Method: SetHasCompletedNewDeviceChecklist
    // Call: SetHasCompletedNewDeviceChecklist()
  }

  setHasVisitedHowToPage() {
    // Method: SetHasVisitedHowToPage
    // Call: SetHasVisitedHowToPage()
  }

};

ash.help_app.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
