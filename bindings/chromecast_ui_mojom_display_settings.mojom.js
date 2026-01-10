// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/display_settings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: DisplaySettings
chromecast.mojom.mojom.DisplaySettings = {};

chromecast.mojom.mojom.DisplaySettingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.DisplaySettingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.DisplaySettingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.DisplaySettingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.DisplaySettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorTemperature(kelvin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetColorTemperature_ParamsSpec,
      null,
      [kelvin]);
  }

  setColorTemperatureSmooth(kelvin, duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec,
      null,
      [kelvin, duration]);
  }

  resetColorTemperature() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec,
      null,
      []);
  }

  setBrightness(brightness) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetBrightness_ParamsSpec,
      null,
      [brightness]);
  }

  setBrightnessSmooth(brightness, duration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec,
      null,
      [brightness, duration]);
  }

  resetBrightness() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_ResetBrightness_ParamsSpec,
      null,
      []);
  }

  setScreenOn(display_on) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetScreenOn_ParamsSpec,
      null,
      [display_on]);
  }

  setAllowScreenPowerOff(allow_power_off) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec,
      null,
      [allow_power_off]);
  }

  addDisplaySettingsObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec,
      null,
      [observer]);
  }

};

chromecast.mojom.mojom.DisplaySettings.getRemote = function() {
  let remote = new chromecast.mojom.mojom.DisplaySettingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettings',
    'context');
  return remote.$;
};

// ParamsSpec for SetColorTemperature
chromecast.mojom.mojom.DisplaySettings_SetColorTemperature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetColorTemperature_Params',
      packedSize: 16,
      fields: [
        { name: 'kelvin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetColorTemperatureSmooth
chromecast.mojom.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetColorTemperatureSmooth_Params',
      packedSize: 24,
      fields: [
        { name: 'kelvin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResetColorTemperature
chromecast.mojom.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.ResetColorTemperature_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetBrightness
chromecast.mojom.mojom.DisplaySettings_SetBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'brightness', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBrightnessSmooth
chromecast.mojom.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetBrightnessSmooth_Params',
      packedSize: 24,
      fields: [
        { name: 'brightness', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResetBrightness
chromecast.mojom.mojom.DisplaySettings_ResetBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.ResetBrightness_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetScreenOn
chromecast.mojom.mojom.DisplaySettings_SetScreenOn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetScreenOn_Params',
      packedSize: 16,
      fields: [
        { name: 'display_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAllowScreenPowerOff
chromecast.mojom.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.SetAllowScreenPowerOff_Params',
      packedSize: 16,
      fields: [
        { name: 'allow_power_off', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddDisplaySettingsObserver
chromecast.mojom.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettings.AddDisplaySettingsObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.DisplaySettingsObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.DisplaySettingsPtr = chromecast.mojom.mojom.DisplaySettingsRemote;
chromecast.mojom.mojom.DisplaySettingsRequest = chromecast.mojom.mojom.DisplaySettingsPendingReceiver;


// Interface: DisplaySettingsObserver
chromecast.mojom.mojom.DisplaySettingsObserver = {};

chromecast.mojom.mojom.DisplaySettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.DisplaySettingsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.DisplaySettingsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.DisplaySettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.DisplaySettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayBrightnessChanged(brightness) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness]);
  }

};

chromecast.mojom.mojom.DisplaySettingsObserver.getRemote = function() {
  let remote = new chromecast.mojom.mojom.DisplaySettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayBrightnessChanged
chromecast.mojom.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.DisplaySettingsObserver.OnDisplayBrightnessChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'brightness', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.DisplaySettingsObserverPtr = chromecast.mojom.mojom.DisplaySettingsObserverRemote;
chromecast.mojom.mojom.DisplaySettingsObserverRequest = chromecast.mojom.mojom.DisplaySettingsObserverPendingReceiver;

