// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/display_settings.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.DisplaySettings = {};
chromecast.mojom.DisplaySettings.$interfaceName = 'chromecast.mojom.DisplaySettings';
chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec = { $: {} };
chromecast.mojom.DisplaySettingsObserver = {};
chromecast.mojom.DisplaySettingsObserver.$interfaceName = 'chromecast.mojom.DisplaySettingsObserver';
chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = { $: {} };

// Interface: DisplaySettings
mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetColorTemperature_Params', [
      mojo.internal.StructField('kelvin', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kelvin', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec, 'chromecast.mojom.DisplaySettings_ResetColorTemperature_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetBrightness_Params', [
      mojo.internal.StructField('brightness', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetBrightnessSmooth_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('brightness', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec, 'chromecast.mojom.DisplaySettings_ResetBrightness_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetScreenOn_Params', [
      mojo.internal.StructField('display_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec, 'chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_Params', [
      mojo.internal.StructField('allow_power_off', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec, 'chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.DisplaySettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.DisplaySettingsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.DisplaySettingsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettings';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.DisplaySettingsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.DisplaySettingsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.DisplaySettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setColorTemperature(kelvin) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec,
      null,
      [kelvin],
      false);
  }

  setColorTemperatureSmooth(kelvin, duration) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec,
      null,
      [kelvin, duration],
      false);
  }

  resetColorTemperature() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec,
      null,
      [],
      false);
  }

  setBrightness(brightness) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec,
      null,
      [brightness],
      false);
  }

  setBrightnessSmooth(brightness, duration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec,
      null,
      [brightness, duration],
      false);
  }

  resetBrightness() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec,
      null,
      [],
      false);
  }

  setScreenOn(display_on) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec,
      null,
      [display_on],
      false);
  }

  setAllowScreenPowerOff(allow_power_off) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec,
      null,
      [allow_power_off],
      false);
  }

  addDisplaySettingsObserver(observer) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

chromecast.mojom.DisplaySettings.getRemote = function() {
  let remote = new chromecast.mojom.DisplaySettingsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettings',
    'context');
  return remote.$;
};

chromecast.mojom.DisplaySettingsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setColorTemperature(params.kelvin);
          break;
        }
        case 1: {
          const params = chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setColorTemperatureSmooth(params.kelvin, params.duration);
          break;
        }
        case 2: {
          const params = chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetColorTemperature();
          break;
        }
        case 3: {
          const params = chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBrightness(params.brightness);
          break;
        }
        case 4: {
          const params = chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBrightnessSmooth(params.brightness, params.duration);
          break;
        }
        case 5: {
          const params = chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resetBrightness();
          break;
        }
        case 6: {
          const params = chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScreenOn(params.display_on);
          break;
        }
        case 7: {
          const params = chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAllowScreenPowerOff(params.allow_power_off);
          break;
        }
        case 8: {
          const params = chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addDisplaySettingsObserver(params.observer);
          break;
        }
      }
    });
  }
};

chromecast.mojom.DisplaySettingsReceiver = chromecast.mojom.DisplaySettingsReceiver;

chromecast.mojom.DisplaySettingsPtr = chromecast.mojom.DisplaySettingsRemote;
chromecast.mojom.DisplaySettingsRequest = chromecast.mojom.DisplaySettingsPendingReceiver;


// Interface: DisplaySettingsObserver
mojo.internal.Struct(
    chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec, 'chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_Params', [
      mojo.internal.StructField('brightness', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.DisplaySettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.DisplaySettingsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.DisplaySettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.DisplaySettingsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.DisplaySettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.DisplaySettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayBrightnessChanged(brightness) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness],
      false);
  }

};

chromecast.mojom.DisplaySettingsObserver.getRemote = function() {
  let remote = new chromecast.mojom.DisplaySettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.DisplaySettingsObserver',
    'context');
  return remote.$;
};

chromecast.mojom.DisplaySettingsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisplayBrightnessChanged(params.brightness);
          break;
        }
      }
    });
  }
};

chromecast.mojom.DisplaySettingsObserverReceiver = chromecast.mojom.DisplaySettingsObserverReceiver;

chromecast.mojom.DisplaySettingsObserverPtr = chromecast.mojom.DisplaySettingsObserverRemote;
chromecast.mojom.DisplaySettingsObserverRequest = chromecast.mojom.DisplaySettingsObserverPendingReceiver;

