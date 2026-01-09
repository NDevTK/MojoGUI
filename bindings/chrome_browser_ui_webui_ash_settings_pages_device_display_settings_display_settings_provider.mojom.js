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

// Interface: TabletModeObserver
ash.settings.mojom.TabletModeObserver = {};

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
      null,
      [is_tablet_mode],
      undefined,
      undefined
    );
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

// ParamsSpec for OnTabletModeChanged
ash.settings.mojom.TabletModeObserver_OnTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.TabletModeObserver.OnTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.TabletModeObserverPtr = ash.settings.mojom.TabletModeObserverRemote;
ash.settings.mojom.TabletModeObserverRequest = ash.settings.mojom.TabletModeObserverPendingReceiver;


// Interface: DisplayConfigurationObserver
ash.settings.mojom.DisplayConfigurationObserver = {};

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
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for OnDisplayConfigurationChanged
ash.settings.mojom.DisplayConfigurationObserver_OnDisplayConfigurationChanged_ParamsSpec = {
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
ash.settings.mojom.DisplayConfigurationObserverPtr = ash.settings.mojom.DisplayConfigurationObserverRemote;
ash.settings.mojom.DisplayConfigurationObserverRequest = ash.settings.mojom.DisplayConfigurationObserverPendingReceiver;


// Interface: DisplayBrightnessSettingsObserver
ash.settings.mojom.DisplayBrightnessSettingsObserver = {};

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
      null,
      [brightness_percent, triggered_by_als],
      undefined,
      undefined
    );
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

// ParamsSpec for OnDisplayBrightnessChanged
ash.settings.mojom.DisplayBrightnessSettingsObserver_OnDisplayBrightnessChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplayBrightnessSettingsObserver.OnDisplayBrightnessChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'triggered_by_als', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.DisplayBrightnessSettingsObserverPtr = ash.settings.mojom.DisplayBrightnessSettingsObserverRemote;
ash.settings.mojom.DisplayBrightnessSettingsObserverRequest = ash.settings.mojom.DisplayBrightnessSettingsObserverPendingReceiver;


// Interface: AmbientLightSensorObserver
ash.settings.mojom.AmbientLightSensorObserver = {};

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
      null,
      [is_ambient_light_sensor_enabled],
      undefined,
      undefined
    );
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

// ParamsSpec for OnAmbientLightSensorEnabledChanged
ash.settings.mojom.AmbientLightSensorObserver_OnAmbientLightSensorEnabledChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.AmbientLightSensorObserver.OnAmbientLightSensorEnabledChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.AmbientLightSensorObserverPtr = ash.settings.mojom.AmbientLightSensorObserverRemote;
ash.settings.mojom.AmbientLightSensorObserverRequest = ash.settings.mojom.AmbientLightSensorObserverPendingReceiver;


// Interface: DisplaySettingsProvider
ash.settings.mojom.DisplaySettingsProvider = {};

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
      ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec,
      [observer],
      undefined,
      undefined
    );
  }

  observeDisplayConfiguration(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

  observeDisplayBrightnessSettings(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec,
      [observer],
      undefined,
      undefined
    );
  }

  observeAmbientLightSensor(observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec,
      [observer],
      undefined,
      undefined
    );
  }

  recordChangingDisplaySettings(type, value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec,
      null,
      null,
      [type, value],
      undefined,
      undefined
    );
  }

  setShinyPerformance(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setInternalDisplayScreenBrightness(percent) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec,
      null,
      null,
      [percent],
      undefined,
      undefined
    );
  }

  setInternalDisplayAmbientLightSensorEnabled(enabled) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  startNativeTouchscreenMappingExperience() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  hasAmbientLightSensor() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for ObserveTabletMode
ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveTabletMode_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.mojom.DisplaySettingsProvider_ObserveTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDisplayConfiguration
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveDisplayBrightnessSettings
ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayBrightnessSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.mojom.DisplaySettingsProvider_ObserveDisplayBrightnessSettings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveDisplayBrightnessSettings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'brightness_percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObserveAmbientLightSensor
ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveAmbientLightSensor_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.settings.mojom.DisplaySettingsProvider_ObserveAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.ObserveAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_ambient_light_sensor_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordChangingDisplaySettings
ash.settings.mojom.DisplaySettingsProvider_RecordChangingDisplaySettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.RecordChangingDisplaySettings_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetShinyPerformance
ash.settings.mojom.DisplaySettingsProvider_SetShinyPerformance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetShinyPerformance_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInternalDisplayScreenBrightness
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayScreenBrightness_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetInternalDisplayScreenBrightness_Params',
      packedSize: 16,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInternalDisplayAmbientLightSensorEnabled
ash.settings.mojom.DisplaySettingsProvider_SetInternalDisplayAmbientLightSensorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.SetInternalDisplayAmbientLightSensorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartNativeTouchscreenMappingExperience
ash.settings.mojom.DisplaySettingsProvider_StartNativeTouchscreenMappingExperience_ParamsSpec = {
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
ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ParamsSpec = {
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

ash.settings.mojom.DisplaySettingsProvider_HasAmbientLightSensor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.DisplaySettingsProvider.HasAmbientLightSensor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_ambient_light_sensor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.DisplaySettingsProviderPtr = ash.settings.mojom.DisplaySettingsProviderRemote;
ash.settings.mojom.DisplaySettingsProviderRequest = ash.settings.mojom.DisplaySettingsProviderPendingReceiver;

