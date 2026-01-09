// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/display_settings/display_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Enum: DisplaySettingsType
ash.settings.mojom.DisplaySettingsType = {
};

// Enum: DisplaySettingsNightLightScheduleOption
ash.settings.mojom.DisplaySettingsNightLightScheduleOption = {
};

// Enum: DisplaySettingsOrientationOption
ash.settings.mojom.DisplaySettingsOrientationOption = {
};

// Struct: DisplaySettingsValue
ash.settings.mojom.DisplaySettingsValue = class {
  constructor(values = {}) {
    this.is_internal_display = values.is_internal_display !== undefined ? values.is_internal_display : false;
    this.time = values.time !== undefined ? values.time : null;
    this.unified_mode_status = values.unified_mode_status !== undefined ? values.unified_mode_status : 0;
  }
};

// Interface: TabletModeObserver
ash.settings.mojom.TabletModeObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.TabletModeObserver';
  }

  onTabletModeChanged(is_tablet_mode) {
    // Method: OnTabletModeChanged
    // Call: OnTabletModeChanged(is_tablet_mode)
  }

};

ash.settings.mojom.TabletModeObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplayConfigurationObserver
ash.settings.mojom.DisplayConfigurationObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.DisplayConfigurationObserver';
  }

  onDisplayConfigurationChanged() {
    // Method: OnDisplayConfigurationChanged
    // Call: OnDisplayConfigurationChanged()
  }

};

ash.settings.mojom.DisplayConfigurationObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplayBrightnessSettingsObserver
ash.settings.mojom.DisplayBrightnessSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
  }

  onDisplayBrightnessChanged(brightness_percent, triggered_by_als) {
    // Method: OnDisplayBrightnessChanged
    // Call: OnDisplayBrightnessChanged(brightness_percent, triggered_by_als)
  }

};

ash.settings.mojom.DisplayBrightnessSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AmbientLightSensorObserver
ash.settings.mojom.AmbientLightSensorObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.AmbientLightSensorObserver';
  }

  onAmbientLightSensorEnabledChanged(is_ambient_light_sensor_enabled) {
    // Method: OnAmbientLightSensorEnabledChanged
    // Call: OnAmbientLightSensorEnabledChanged(is_ambient_light_sensor_enabled)
  }

};

ash.settings.mojom.AmbientLightSensorObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplaySettingsProvider
ash.settings.mojom.DisplaySettingsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.DisplaySettingsProvider';
  }

  observeTabletMode(observer) {
    // Method: ObserveTabletMode
    return new Promise((resolve) => {
      // Call: ObserveTabletMode(observer)
      resolve({});
    });
  }

  observeDisplayConfiguration(observer) {
    // Method: ObserveDisplayConfiguration
    // Call: ObserveDisplayConfiguration(observer)
  }

  observeDisplayBrightnessSettings(observer) {
    // Method: ObserveDisplayBrightnessSettings
    return new Promise((resolve) => {
      // Call: ObserveDisplayBrightnessSettings(observer)
      resolve({});
    });
  }

  observeAmbientLightSensor(observer) {
    // Method: ObserveAmbientLightSensor
    return new Promise((resolve) => {
      // Call: ObserveAmbientLightSensor(observer)
      resolve({});
    });
  }

  recordChangingDisplaySettings(type, value) {
    // Method: RecordChangingDisplaySettings
    // Call: RecordChangingDisplaySettings(type, value)
  }

  setShinyPerformance(enabled) {
    // Method: SetShinyPerformance
    // Call: SetShinyPerformance(enabled)
  }

  setInternalDisplayScreenBrightness(percent) {
    // Method: SetInternalDisplayScreenBrightness
    // Call: SetInternalDisplayScreenBrightness(percent)
  }

  setInternalDisplayAmbientLightSensorEnabled(enabled) {
    // Method: SetInternalDisplayAmbientLightSensorEnabled
    // Call: SetInternalDisplayAmbientLightSensorEnabled(enabled)
  }

  startNativeTouchscreenMappingExperience() {
    // Method: StartNativeTouchscreenMappingExperience
    // Call: StartNativeTouchscreenMappingExperience()
  }

  hasAmbientLightSensor() {
    // Method: HasAmbientLightSensor
    return new Promise((resolve) => {
      // Call: HasAmbientLightSensor()
      resolve({});
    });
  }

};

ash.settings.mojom.DisplaySettingsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
