// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/device/display_settings/display_settings_provider.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.mojom = ash.settings.settings.mojom || {};


// Enum: DisplaySettingsType
ash.settings.settings.mojom.mojom.DisplaySettingsType = {
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
ash.settings.settings.mojom.mojom.DisplaySettingsTypeSpec = { $: mojo.internal.Enum() };

// Enum: DisplaySettingsNightLightScheduleOption
ash.settings.settings.mojom.mojom.DisplaySettingsNightLightScheduleOption = {
  kNever: 0,
  kSunsetToSunrise: 1,
  kCustom: 2,
};
ash.settings.settings.mojom.mojom.DisplaySettingsNightLightScheduleOptionSpec = { $: mojo.internal.Enum() };

// Enum: DisplaySettingsOrientationOption
ash.settings.settings.mojom.mojom.DisplaySettingsOrientationOption = {
  kAuto: 0,
  k0Degree: 1,
  k90Degree: 2,
  k180Degree: 3,
  k270Degree: 4,
};
ash.settings.settings.mojom.mojom.DisplaySettingsOrientationOptionSpec = { $: mojo.internal.Enum() };

// Struct: DisplaySettingsValue
ash.settings.settings.mojom.mojom.DisplaySettingsValueSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsValue',
      packedSize: 32,
      fields: [
        { name: 'is_internal_display_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_internal_display_$value', originalFieldName: 'is_internal_display' } },
        { name: 'is_internal_display_$value', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_internal_display_$flag', originalFieldName: 'is_internal_display' } },
        { name: 'display_id_$flag', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_id_$value', originalFieldName: 'display_id' } },
        { name: 'display_id_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_id_$flag', originalFieldName: 'display_id' } },
        { name: 'orientation', packedOffset: 8, packedBitOffset: 0, type: ash.settings.mojom.DisplaySettingsOrientationOptionSpec, nullable: true, minVersion: 0 },
        { name: 'night_light_status_$flag', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'night_light_status_$value', originalFieldName: 'night_light_status' } },
        { name: 'night_light_status_$value', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'night_light_status_$flag', originalFieldName: 'night_light_status' } },
        { name: 'night_light_schedule', packedOffset: 12, packedBitOffset: 0, type: ash.settings.mojom.DisplaySettingsNightLightScheduleOptionSpec, nullable: true, minVersion: 0 },
        { name: 'mirror_mode_status_$flag', packedOffset: 16, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'mirror_mode_status_$value', originalFieldName: 'mirror_mode_status' } },
        { name: 'mirror_mode_status_$value', packedOffset: 16, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'mirror_mode_status_$flag', originalFieldName: 'mirror_mode_status' } },
        { name: 'unified_mode_status_$flag', packedOffset: 16, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'unified_mode_status_$value', originalFieldName: 'unified_mode_status' } },
        { name: 'unified_mode_status_$value', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'unified_mode_status_$flag', originalFieldName: 'unified_mode_status' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: TabletModeObserver
ash.settings.settings.mojom.mojom.TabletModeObserver = {};

ash.settings.settings.mojom.mojom.TabletModeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.TabletModeObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.TabletModeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.TabletModeObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.TabletModeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.TabletModeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabletModeChanged(is_tablet_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode]);
  }

};

ash.settings.settings.mojom.mojom.TabletModeObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.TabletModeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.TabletModeObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTabletModeChanged
ash.settings.settings.mojom.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.TabletModeObserver.OnTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.TabletModeObserverPtr = ash.settings.settings.mojom.mojom.TabletModeObserverRemote;
ash.settings.settings.mojom.mojom.TabletModeObserverRequest = ash.settings.settings.mojom.mojom.TabletModeObserverPendingReceiver;


// Interface: DisplayConfigurationObserver
ash.settings.settings.mojom.mojom.DisplayConfigurationObserver = {};

ash.settings.settings.mojom.mojom.DisplayConfigurationObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayConfigurationObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.DisplayConfigurationObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayConfigurationChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec,
      null,
      []);
  }

};

ash.settings.settings.mojom.mojom.DisplayConfigurationObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayConfigurationObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayConfigurationChanged
ash.settings.settings.mojom.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplayConfigurationObserver.OnDisplayConfigurationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.DisplayConfigurationObserverPtr = ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRemote;
ash.settings.settings.mojom.mojom.DisplayConfigurationObserverRequest = ash.settings.settings.mojom.mojom.DisplayConfigurationObserverPendingReceiver;


// Interface: DisplayBrightnessSettingsObserver
ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserver = {};

ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplayBrightnessSettingsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayBrightnessChanged(brightness_percent, triggered_by_als) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec,
      null,
      [brightness_percent, triggered_by_als]);
  }

};

ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplayBrightnessSettingsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayBrightnessChanged
ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplayBrightnessSettingsObserver.OnDisplayBrightnessChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'triggered_by_als', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverPtr = ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRemote;
ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverRequest = ash.settings.settings.mojom.mojom.DisplayBrightnessSettingsObserverPendingReceiver;


// Interface: AmbientLightSensorObserver
ash.settings.settings.mojom.mojom.AmbientLightSensorObserver = {};

ash.settings.settings.mojom.mojom.AmbientLightSensorObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.AmbientLightSensorObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.AmbientLightSensorObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAmbientLightSensorEnabledChanged(is_ambient_light_sensor_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec,
      null,
      [is_ambient_light_sensor_enabled]);
  }

};

ash.settings.settings.mojom.mojom.AmbientLightSensorObserver.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.AmbientLightSensorObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAmbientLightSensorEnabledChanged
ash.settings.settings.mojom.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.AmbientLightSensorObserver.OnAmbientLightSensorEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.AmbientLightSensorObserverPtr = ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRemote;
ash.settings.settings.mojom.mojom.AmbientLightSensorObserverRequest = ash.settings.settings.mojom.mojom.AmbientLightSensorObserverPendingReceiver;


// Interface: DisplaySettingsProvider
ash.settings.settings.mojom.mojom.DisplaySettingsProvider = {};

ash.settings.settings.mojom.mojom.DisplaySettingsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProviderRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.DisplaySettingsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.mojom.mojom.DisplaySettingsProviderPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.mojom.mojom.DisplaySettingsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observeTabletMode(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec,
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer]);
  }

  observeDisplayConfiguration(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,
      null,
      [observer]);
  }

  observeDisplayBrightnessSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec,
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      [observer]);
  }

  observeAmbientLightSensor(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec,
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      [observer]);
  }

  recordChangingDisplaySettings(type, value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,
      null,
      [type, value]);
  }

  setShinyPerformance(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec,
      null,
      [enabled]);
  }

  setInternalDisplayScreenBrightness(percent) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec,
      null,
      [percent]);
  }

  setInternalDisplayAmbientLightSensorEnabled(enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  startNativeTouchscreenMappingExperience() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec,
      null,
      []);
  }

  hasAmbientLightSensor() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.settings.mojom.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      []);
  }

};

ash.settings.settings.mojom.mojom.DisplaySettingsProvider.getRemote = function() {
  let remote = new ash.settings.settings.mojom.mojom.DisplaySettingsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.DisplaySettingsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObserveTabletMode
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveTabletMode_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDisplayConfiguration
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDisplayBrightnessSettings
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayBrightnessSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayBrightnessSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveAmbientLightSensor
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveAmbientLightSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordChangingDisplaySettings
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.RecordChangingDisplaySettings_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ash.settings.mojom.DisplaySettingsTypeSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: ash.settings.mojom.DisplaySettingsValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetShinyPerformance
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetShinyPerformance_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInternalDisplayScreenBrightness
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetInternalDisplayScreenBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInternalDisplayAmbientLightSensorEnabled
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetInternalDisplayAmbientLightSensorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartNativeTouchscreenMappingExperience
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.StartNativeTouchscreenMappingExperience_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HasAmbientLightSensor
ash.settings.settings.mojom.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.HasAmbientLightSensor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.mojom.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.HasAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_ambient_light_sensor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.mojom.mojom.DisplaySettingsProviderPtr = ash.settings.settings.mojom.mojom.DisplaySettingsProviderRemote;
ash.settings.settings.mojom.mojom.DisplaySettingsProviderRequest = ash.settings.settings.mojom.mojom.DisplaySettingsProviderPendingReceiver;

