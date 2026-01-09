// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/input_device_settings/input_device_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Struct: ActionChoice
ash.settings.mojom.ActionChoice = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Interface: KeyboardSettingsObserver
ash.settings.mojom.KeyboardSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.KeyboardSettingsObserver';
  }

  onKeyboardListUpdated(keyboards) {
    // Method: OnKeyboardListUpdated
    // Call: OnKeyboardListUpdated(keyboards)
  }

  onKeyboardPoliciesUpdated(policies) {
    // Method: OnKeyboardPoliciesUpdated
    // Call: OnKeyboardPoliciesUpdated(policies)
  }

};

ash.settings.mojom.KeyboardSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TouchpadSettingsObserver
ash.settings.mojom.TouchpadSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.TouchpadSettingsObserver';
  }

  onTouchpadListUpdated(touchpads) {
    // Method: OnTouchpadListUpdated
    // Call: OnTouchpadListUpdated(touchpads)
  }

};

ash.settings.mojom.TouchpadSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PointingStickSettingsObserver
ash.settings.mojom.PointingStickSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.PointingStickSettingsObserver';
  }

  onPointingStickListUpdated(pointSticks) {
    // Method: OnPointingStickListUpdated
    // Call: OnPointingStickListUpdated(pointSticks)
  }

};

ash.settings.mojom.PointingStickSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MouseSettingsObserver
ash.settings.mojom.MouseSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.MouseSettingsObserver';
  }

  onMouseListUpdated(mice) {
    // Method: OnMouseListUpdated
    // Call: OnMouseListUpdated(mice)
  }

  onMousePoliciesUpdated(policies) {
    // Method: OnMousePoliciesUpdated
    // Call: OnMousePoliciesUpdated(policies)
  }

};

ash.settings.mojom.MouseSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ButtonPressObserver
ash.settings.mojom.ButtonPressObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.ButtonPressObserver';
  }

  onButtonPressed(button) {
    // Method: OnButtonPressed
    // Call: OnButtonPressed(button)
  }

};

ash.settings.mojom.ButtonPressObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GraphicsTabletSettingsObserver
ash.settings.mojom.GraphicsTabletSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.GraphicsTabletSettingsObserver';
  }

  onGraphicsTabletListUpdated(graphics_tablets) {
    // Method: OnGraphicsTabletListUpdated
    // Call: OnGraphicsTabletListUpdated(graphics_tablets)
  }

};

ash.settings.mojom.GraphicsTabletSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardBrightnessObserver
ash.settings.mojom.KeyboardBrightnessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.KeyboardBrightnessObserver';
  }

  onKeyboardBrightnessChanged(brightness_percent) {
    // Method: OnKeyboardBrightnessChanged
    // Call: OnKeyboardBrightnessChanged(brightness_percent)
  }

};

ash.settings.mojom.KeyboardBrightnessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: KeyboardAmbientLightSensorObserver
ash.settings.mojom.KeyboardAmbientLightSensorObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.KeyboardAmbientLightSensorObserver';
  }

  onKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled) {
    // Method: OnKeyboardAmbientLightSensorEnabledChanged
    // Call: OnKeyboardAmbientLightSensorEnabledChanged(keyboard_ambient_light_sensor_enabled)
  }

};

ash.settings.mojom.KeyboardAmbientLightSensorObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LidStateObserver
ash.settings.mojom.LidStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.LidStateObserver';
  }

  onLidStateChanged(is_lid_open) {
    // Method: OnLidStateChanged
    // Call: OnLidStateChanged(is_lid_open)
  }

};

ash.settings.mojom.LidStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InputDeviceSettingsProvider
ash.settings.mojom.InputDeviceSettingsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.settings.mojom.InputDeviceSettingsProvider';
  }

  observeKeyboardSettings(observer) {
    // Method: ObserveKeyboardSettings
    // Call: ObserveKeyboardSettings(observer)
  }

  observeTouchpadSettings(observer) {
    // Method: ObserveTouchpadSettings
    // Call: ObserveTouchpadSettings(observer)
  }

  observePointingStickSettings(observer) {
    // Method: ObservePointingStickSettings
    // Call: ObservePointingStickSettings(observer)
  }

  observeMouseSettings(observer) {
    // Method: ObserveMouseSettings
    // Call: ObserveMouseSettings(observer)
  }

  observeGraphicsTabletSettings(observer) {
    // Method: ObserveGraphicsTabletSettings
    // Call: ObserveGraphicsTabletSettings(observer)
  }

  observeButtonPresses(observer) {
    // Method: ObserveButtonPresses
    // Call: ObserveButtonPresses(observer)
  }

  observeKeyboardBrightness(observer) {
    // Method: ObserveKeyboardBrightness
    // Call: ObserveKeyboardBrightness(observer)
  }

  observeKeyboardAmbientLightSensor(observer) {
    // Method: ObserveKeyboardAmbientLightSensor
    // Call: ObserveKeyboardAmbientLightSensor(observer)
  }

  observeLidState(observer) {
    // Method: ObserveLidState
    return new Promise((resolve) => {
      // Call: ObserveLidState(observer)
      resolve({});
    });
  }

  restoreDefaultKeyboardRemappings(device_id) {
    // Method: RestoreDefaultKeyboardRemappings
    // Call: RestoreDefaultKeyboardRemappings(device_id)
  }

  setKeyboardSettings(device_id, settings) {
    // Method: SetKeyboardSettings
    // Call: SetKeyboardSettings(device_id, settings)
  }

  setPointingStickSettings(device_id, settings) {
    // Method: SetPointingStickSettings
    // Call: SetPointingStickSettings(device_id, settings)
  }

  setMouseSettings(device_id, settings) {
    // Method: SetMouseSettings
    // Call: SetMouseSettings(device_id, settings)
  }

  setTouchpadSettings(device_id, settings) {
    // Method: SetTouchpadSettings
    // Call: SetTouchpadSettings(device_id, settings)
  }

  setGraphicsTabletSettings(device_id, settings) {
    // Method: SetGraphicsTabletSettings
    // Call: SetGraphicsTabletSettings(device_id, settings)
  }

  setKeyboardBrightness(percent) {
    // Method: SetKeyboardBrightness
    // Call: SetKeyboardBrightness(percent)
  }

  setKeyboardAmbientLightSensorEnabled(enabled) {
    // Method: SetKeyboardAmbientLightSensorEnabled
    // Call: SetKeyboardAmbientLightSensorEnabled(enabled)
  }

  startObserving(device_id) {
    // Method: StartObserving
    // Call: StartObserving(device_id)
  }

  stopObserving() {
    // Method: StopObserving
    // Call: StopObserving()
  }

  getActionsForMouseButtonCustomization() {
    // Method: GetActionsForMouseButtonCustomization
    return new Promise((resolve) => {
      // Call: GetActionsForMouseButtonCustomization()
      resolve({});
    });
  }

  getActionsForGraphicsTabletButtonCustomization() {
    // Method: GetActionsForGraphicsTabletButtonCustomization
    return new Promise((resolve) => {
      // Call: GetActionsForGraphicsTabletButtonCustomization()
      resolve({});
    });
  }

  getMetaKeyToDisplay() {
    // Method: GetMetaKeyToDisplay
    return new Promise((resolve) => {
      // Call: GetMetaKeyToDisplay()
      resolve({});
    });
  }

  hasKeyboardBacklight() {
    // Method: HasKeyboardBacklight
    return new Promise((resolve) => {
      // Call: HasKeyboardBacklight()
      resolve({});
    });
  }

  hasAmbientLightSensor() {
    // Method: HasAmbientLightSensor
    return new Promise((resolve) => {
      // Call: HasAmbientLightSensor()
      resolve({});
    });
  }

  isRgbKeyboardSupported() {
    // Method: IsRgbKeyboardSupported
    return new Promise((resolve) => {
      // Call: IsRgbKeyboardSupported()
      resolve({});
    });
  }

  recordKeyboardColorLinkClicked() {
    // Method: RecordKeyboardColorLinkClicked
    // Call: RecordKeyboardColorLinkClicked()
  }

  recordKeyboardBrightnessChangeFromSlider(percent) {
    // Method: RecordKeyboardBrightnessChangeFromSlider
    // Call: RecordKeyboardBrightnessChangeFromSlider(percent)
  }

  getDeviceIconImage(device_key) {
    // Method: GetDeviceIconImage
    return new Promise((resolve) => {
      // Call: GetDeviceIconImage(device_key)
      resolve({});
    });
  }

  launchCompanionApp(package_id) {
    // Method: LaunchCompanionApp
    // Call: LaunchCompanionApp(package_id)
  }

};

ash.settings.mojom.InputDeviceSettingsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
