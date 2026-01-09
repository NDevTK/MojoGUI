// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/display_settings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: DisplaySettings
chromecast.mojom.DisplaySettingsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.DisplaySettings';
  }

  setColorTemperature(kelvin) {
    // Method: SetColorTemperature
    // Call: SetColorTemperature(kelvin)
  }

  setColorTemperatureSmooth(kelvin, duration) {
    // Method: SetColorTemperatureSmooth
    // Call: SetColorTemperatureSmooth(kelvin, duration)
  }

  resetColorTemperature() {
    // Method: ResetColorTemperature
    // Call: ResetColorTemperature()
  }

  setBrightness(brightness) {
    // Method: SetBrightness
    // Call: SetBrightness(brightness)
  }

  setBrightnessSmooth(brightness, duration) {
    // Method: SetBrightnessSmooth
    // Call: SetBrightnessSmooth(brightness, duration)
  }

  resetBrightness() {
    // Method: ResetBrightness
    // Call: ResetBrightness()
  }

  setScreenOn(display_on) {
    // Method: SetScreenOn
    // Call: SetScreenOn(display_on)
  }

  setAllowScreenPowerOff(allow_power_off) {
    // Method: SetAllowScreenPowerOff
    // Call: SetAllowScreenPowerOff(allow_power_off)
  }

  addDisplaySettingsObserver(observer) {
    // Method: AddDisplaySettingsObserver
    // Call: AddDisplaySettingsObserver(observer)
  }

};

chromecast.mojom.DisplaySettingsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DisplaySettingsObserver
chromecast.mojom.DisplaySettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.DisplaySettingsObserver';
  }

  onDisplayBrightnessChanged(brightness) {
    // Method: OnDisplayBrightnessChanged
    // Call: OnDisplayBrightnessChanged(brightness)
  }

};

chromecast.mojom.DisplaySettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
