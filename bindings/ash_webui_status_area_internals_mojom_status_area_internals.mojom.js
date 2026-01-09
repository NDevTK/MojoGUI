// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/status_area_internals/mojom/status_area_internals.mojom
// Module: ash.mojom.status_area_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.status_area_internals = ash.mojom.status_area_internals || {};


// Enum: BatteryIcon
ash.mojom.status_area_internals.BatteryIcon = {
  kDefault: 0,
  kXIcon: 1,
  kUnreliableIcon: 2,
  kBoltIcon: 3,
  kBatterySaverPlusIcon: 4,
};

// Interface: PageHandler
ash.mojom.status_area_internals.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.status_area_internals.PageHandler';
  }

  toggleImeTray(visible) {
    // Method: ToggleImeTray
    // Call: ToggleImeTray(visible)
  }

  togglePaletteTray(visible) {
    // Method: TogglePaletteTray
    // Call: TogglePaletteTray(visible)
  }

  toggleLogoutTray(visible) {
    // Method: ToggleLogoutTray
    // Call: ToggleLogoutTray(visible)
  }

  toggleVirtualKeyboardTray(visible) {
    // Method: ToggleVirtualKeyboardTray
    // Call: ToggleVirtualKeyboardTray(visible)
  }

  toggleDictationTray(visible) {
    // Method: ToggleDictationTray
    // Call: ToggleDictationTray(visible)
  }

  toggleVideoConferenceTray(visible) {
    // Method: ToggleVideoConferenceTray
    // Call: ToggleVideoConferenceTray(visible)
  }

  toggleAnnotationTray(visible) {
    // Method: ToggleAnnotationTray
    // Call: ToggleAnnotationTray(visible)
  }

  setIsInUserChildSession(in_child_session) {
    // Method: SetIsInUserChildSession
    // Call: SetIsInUserChildSession(in_child_session)
  }

  triggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used) {
    // Method: TriggerPrivacyIndicators
    // Call: TriggerPrivacyIndicators(app_id, app_name, is_camera_used, is_microphone_used)
  }

  resetHmrConsentStatus() {
    // Method: ResetHmrConsentStatus
    // Call: ResetHmrConsentStatus()
  }

  setBatteryIcon(icon) {
    // Method: SetBatteryIcon
    // Call: SetBatteryIcon(icon)
  }

  setBatteryPercent(percent) {
    // Method: SetBatteryPercent
    // Call: SetBatteryPercent(percent)
  }

};

ash.mojom.status_area_internals.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
