// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/display_settings/display_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};

ash.settings.mojom.DisplaySettingsTypeSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsOrientationOptionSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.DisplaySettingsValueSpec = { $: {} };
ash.settings.mojom.TabletModeObserver = {};
ash.settings.mojom.TabletModeObserver.$interfaceName = 'ash.settings.mojom.TabletModeObserver';
ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplayConfigurationObserver = {};
ash.settings.mojom.DisplayConfigurationObserver.$interfaceName = 'ash.settings.mojom.DisplayConfigurationObserver';
ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplayBrightnessSettingsObserver = {};
ash.settings.mojom.DisplayBrightnessSettingsObserver.$interfaceName = 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = { $: {} };
ash.settings.mojom.AmbientLightSensorObserver = {};
ash.settings.mojom.AmbientLightSensorObserver.$interfaceName = 'ash.settings.mojom.AmbientLightSensorObserver';
ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider = {};
ash.settings.mojom.DisplaySettingsProvider.$interfaceName = 'ash.settings.mojom.DisplaySettingsProvider';
ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec = { $: {} };
ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = { $: {} };

// Enum: DisplaySettingsType
ash.settings.mojom.DisplaySettingsType = {
  kResolution: 0,
  kRefreshRate: 1,
  kScaling: 2,
  kOrientation: 3,
  kOverscan: 4,
  kNightLight: 5,
  kNightLightSchedule: 6,
  kDisplayPage: 7,
  kMirrorMode: 8,
  kUnifiedMode: 9,
  kPrimaryDisplay: 10,
};

// Enum: DisplaySettingsNightLightScheduleOption
ash.settings.mojom.DisplaySettingsNightLightScheduleOption = {
  kNever: 0,
  kSunsetToSunrise: 1,
  kCustom: 2,
};

// Enum: DisplaySettingsOrientationOption
ash.settings.mojom.DisplaySettingsOrientationOption = {
  kAuto: 0,
  k0Degree: 1,
  k90Degree: 2,
  k180Degree: 3,
  k270Degree: 4,
};

// Struct: DisplaySettingsValue
mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsValueSpec, 'ash.settings.mojom.DisplaySettingsValue', [
      mojo.internal.StructField('display_id_$value', 0, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_id_$flag', originalFieldName: 'display_id' }),
      mojo.internal.StructField('orientation', 8, 0, ash.settings.mojom.DisplaySettingsOrientationOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('night_light_schedule', 16, 0, ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_internal_display_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_internal_display_$value', originalFieldName: 'is_internal_display' }),
      mojo.internal.StructField('is_internal_display_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_internal_display_$flag', originalFieldName: 'is_internal_display' }),
      mojo.internal.StructField('display_id_$flag', 24, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_id_$value', originalFieldName: 'display_id' }),
      mojo.internal.StructField('night_light_status_$flag', 24, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'night_light_status_$value', originalFieldName: 'night_light_status' }),
      mojo.internal.StructField('night_light_status_$value', 24, 4, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'night_light_status_$flag', originalFieldName: 'night_light_status' }),
      mojo.internal.StructField('mirror_mode_status_$flag', 24, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'mirror_mode_status_$value', originalFieldName: 'mirror_mode_status' }),
      mojo.internal.StructField('mirror_mode_status_$value', 24, 6, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'mirror_mode_status_$flag', originalFieldName: 'mirror_mode_status' }),
      mojo.internal.StructField('unified_mode_status_$flag', 24, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'unified_mode_status_$value', originalFieldName: 'unified_mode_status' }),
      mojo.internal.StructField('unified_mode_status_$value', 25, 0, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'unified_mode_status_$flag', originalFieldName: 'unified_mode_status' }),
    ],
    [[0, 40]]);

// Interface: TabletModeObserver
mojo.internal.Struct(
    ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec, 'ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabletModeChanged(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode],
      false);
  }

};

ash.settings.mojom.TabletModeObserver.getRemote = function() {
  let remote = new ash.settings.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.TabletModeObserverReceiver = class {
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
          const params = ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTabletModeChanged(params.is_tablet_mode);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.TabletModeObserverReceiver = ash.settings.mojom.TabletModeObserverReceiver;

ash.settings.mojom.TabletModeObserverPtr = ash.settings.mojom.TabletModeObserverRemote;
ash.settings.mojom.TabletModeObserverRequest = ash.settings.mojom.TabletModeObserverPendingReceiver;


// Interface: DisplayConfigurationObserver
mojo.internal.Struct(
    ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec, 'ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_Params', [
    ],
    [[0, 8]]);

ash.settings.mojom.DisplayConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplayConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplayConfigurationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplayConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayConfigurationChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.settings.mojom.DisplayConfigurationObserver.getRemote = function() {
  let remote = new ash.settings.mojom.DisplayConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayConfigurationObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplayConfigurationObserverReceiver = class {
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
          const params = ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisplayConfigurationChanged();
          break;
        }
      }
    });
  }
};

ash.settings.mojom.DisplayConfigurationObserverReceiver = ash.settings.mojom.DisplayConfigurationObserverReceiver;

ash.settings.mojom.DisplayConfigurationObserverPtr = ash.settings.mojom.DisplayConfigurationObserverRemote;
ash.settings.mojom.DisplayConfigurationObserverRequest = ash.settings.mojom.DisplayConfigurationObserverPendingReceiver;


// Interface: DisplayBrightnessSettingsObserver
mojo.internal.Struct(
    ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec, 'ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_Params', [
      mojo.internal.StructField('brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('triggered_by_als', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayBrightnessChanged(brightness_percent, triggered_by_als) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness_percent, triggered_by_als],
      false);
  }

};

ash.settings.mojom.DisplayBrightnessSettingsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.DisplayBrightnessSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayBrightnessSettingsObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = class {
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
          const params = ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDisplayBrightnessChanged(params.brightness_percent, params.triggered_by_als);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver = ash.settings.mojom.DisplayBrightnessSettingsObserverReceiver;

ash.settings.mojom.DisplayBrightnessSettingsObserverPtr = ash.settings.mojom.DisplayBrightnessSettingsObserverRemote;
ash.settings.mojom.DisplayBrightnessSettingsObserverRequest = ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver;


// Interface: AmbientLightSensorObserver
mojo.internal.Struct(
    ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec, 'ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_Params', [
      mojo.internal.StructField('is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.AmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.AmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.AmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.AmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.AmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAmbientLightSensorEnabledChanged(is_ambient_light_sensor_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [is_ambient_light_sensor_enabled],
      false);
  }

};

ash.settings.mojom.AmbientLightSensorObserver.getRemote = function() {
  let remote = new ash.settings.mojom.AmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.AmbientLightSensorObserver',
    'context');
  return remote.$;
};

ash.settings.mojom.AmbientLightSensorObserverReceiver = class {
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
          const params = ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAmbientLightSensorEnabledChanged(params.is_ambient_light_sensor_enabled);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.AmbientLightSensorObserverReceiver = ash.settings.mojom.AmbientLightSensorObserverReceiver;

ash.settings.mojom.AmbientLightSensorObserverPtr = ash.settings.mojom.AmbientLightSensorObserverRemote;
ash.settings.mojom.AmbientLightSensorObserverRequest = ash.settings.mojom.AmbientLightSensorObserverPendingReceiver;


// Interface: DisplaySettingsProvider
mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.TabletModeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParams', [
      mojo.internal.StructField('is_tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.DisplayConfigurationObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.DisplayBrightnessSettingsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParams', [
      mojo.internal.StructField('brightness_percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.AmbientLightSensorObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('is_ambient_light_sensor_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_Params', [
      mojo.internal.StructField('type', 0, 0, ash.settings.mojom.DisplaySettingsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ash.settings.mojom.DisplaySettingsValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_Params', [
      mojo.internal.StructField('percent', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec, 'ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParams', [
      mojo.internal.StructField('has_ambient_light_sensor', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.settings.mojom.DisplaySettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.DisplaySettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplaySettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.DisplaySettingsProviderPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.DisplaySettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeTabletMode(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer],
      false);
  }

  observeDisplayConfiguration(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,
      null,
      [observer],
      false);
  }

  observeDisplayBrightnessSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      [observer],
      false);
  }

  observeAmbientLightSensor(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      [observer],
      false);
  }

  recordChangingDisplaySettings(type, value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,
      null,
      [type, value],
      false);
  }

  setShinyPerformance(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setInternalDisplayScreenBrightness(percent) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec,
      null,
      [percent],
      false);
  }

  setInternalDisplayAmbientLightSensorEnabled(enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  startNativeTouchscreenMappingExperience() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec,
      null,
      [],
      false);
  }

  hasAmbientLightSensor() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      false);
  }

};

ash.settings.mojom.DisplaySettingsProvider.getRemote = function() {
  let remote = new ash.settings.mojom.DisplaySettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplaySettingsProvider',
    'context');
  return remote.$;
};

ash.settings.mojom.DisplaySettingsProviderReceiver = class {
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
          const params = ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeTabletMode(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeDisplayConfiguration(params.observer);
          break;
        }
        case 2: {
          const params = ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeDisplayBrightnessSettings(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observeAmbientLightSensor(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordChangingDisplaySettings(params.type, params.value);
          break;
        }
        case 5: {
          const params = ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setShinyPerformance(params.enabled);
          break;
        }
        case 6: {
          const params = ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInternalDisplayScreenBrightness(params.percent);
          break;
        }
        case 7: {
          const params = ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setInternalDisplayAmbientLightSensorEnabled(params.enabled);
          break;
        }
        case 8: {
          const params = ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startNativeTouchscreenMappingExperience();
          break;
        }
        case 9: {
          const params = ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasAmbientLightSensor();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.settings.mojom.DisplaySettingsProviderReceiver = ash.settings.mojom.DisplaySettingsProviderReceiver;

ash.settings.mojom.DisplaySettingsProviderPtr = ash.settings.mojom.DisplaySettingsProviderRemote;
ash.settings.mojom.DisplaySettingsProviderRequest = ash.settings.mojom.DisplaySettingsProviderPendingReceiver;

