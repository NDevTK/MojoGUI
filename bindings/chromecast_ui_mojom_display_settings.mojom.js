// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/display_settings.mojom
// Module: chromecast.mojom

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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.DisplaySettingsObserverRemote), null, false, 0, undefined),
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
  setColorTemperature(kelvin) {
    return this.$.setColorTemperature(kelvin);
  }
  setColorTemperatureSmooth(kelvin, duration) {
    return this.$.setColorTemperatureSmooth(kelvin, duration);
  }
  resetColorTemperature() {
    return this.$.resetColorTemperature();
  }
  setBrightness(brightness) {
    return this.$.setBrightness(brightness);
  }
  setBrightnessSmooth(brightness, duration) {
    return this.$.setBrightnessSmooth(brightness, duration);
  }
  resetBrightness() {
    return this.$.resetBrightness();
  }
  setScreenOn(display_on) {
    return this.$.setScreenOn(display_on);
  }
  setAllowScreenPowerOff(allow_power_off) {
    return this.$.setAllowScreenPowerOff(allow_power_off);
  }
  addDisplaySettingsObserver(observer) {
    return this.$.addDisplaySettingsObserver(observer);
  }
};

chromecast.mojom.DisplaySettingsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplaySettings', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setColorTemperature(kelvin) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec,
      null,
      [kelvin],
      false);
  }

  setColorTemperatureSmooth(kelvin, duration) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec,
      null,
      [kelvin, duration],
      false);
  }

  resetColorTemperature() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec,
      null,
      [],
      false);
  }

  setBrightness(brightness) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec,
      null,
      [brightness],
      false);
  }

  setBrightnessSmooth(brightness, duration) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec,
      null,
      [brightness, duration],
      false);
  }

  resetBrightness() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec,
      null,
      [],
      false);
  }

  setScreenOn(display_on) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec,
      null,
      [display_on],
      false);
  }

  setAllowScreenPowerOff(allow_power_off) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec,
      null,
      [allow_power_off],
      false);
  }

  addDisplaySettingsObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplaySettings', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperature_ParamsSpec.$.structSpec);
          const result = this.impl.setColorTemperature(params.kelvin);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetColorTemperatureSmooth_ParamsSpec.$.structSpec);
          const result = this.impl.setColorTemperatureSmooth(params.kelvin, params.duration);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetColorTemperature_ParamsSpec.$.structSpec);
          const result = this.impl.resetColorTemperature();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightness_ParamsSpec.$.structSpec);
          const result = this.impl.setBrightness(params.brightness);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetBrightnessSmooth_ParamsSpec.$.structSpec);
          const result = this.impl.setBrightnessSmooth(params.brightness, params.duration);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_ResetBrightness_ParamsSpec.$.structSpec);
          const result = this.impl.resetBrightness();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetScreenOn_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenOn(params.display_on);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_SetAllowScreenPowerOff_ParamsSpec.$.structSpec);
          const result = this.impl.setAllowScreenPowerOff(params.allow_power_off);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettings_AddDisplaySettingsObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addDisplaySettingsObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
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
  onDisplayBrightnessChanged(brightness) {
    return this.$.onDisplayBrightnessChanged(brightness);
  }
};

chromecast.mojom.DisplaySettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsObserver', [
      { explicit: null },
    ]);
  }

  onDisplayBrightnessChanged(brightness) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplaySettingsObserver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.DisplaySettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDisplayBrightnessChanged(params.brightness);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.DisplaySettingsObserverReceiver = chromecast.mojom.DisplaySettingsObserverReceiver;

chromecast.mojom.DisplaySettingsObserverPtr = chromecast.mojom.DisplaySettingsObserverRemote;
chromecast.mojom.DisplaySettingsObserverRequest = chromecast.mojom.DisplaySettingsObserverPendingReceiver;

