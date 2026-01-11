// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
// Module: ui.ozone.mojom

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var mojo_base = mojo_base || {};
var display = display || {};
var gfx = gfx || {};

ui.ozone.mojom.DrmDevice = {};
ui.ozone.mojom.DrmDevice.$interfaceName = 'ui.ozone.mojom.DrmDevice';
ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec = { $: {} };
ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec = { $: {} };

// Interface: DrmDevice
mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec, 'ui.ozone.mojom.DrmDevice_CreateWindow_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec, 'ui.ozone.mojom.DrmDevice_DestroyWindow_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetWindowBounds_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec, 'ui.ozone.mojom.DrmDevice_TakeDisplayControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParams', [
      mojo.internal.StructField('display_snapshots', 0, 0, mojo.internal.Array(display.mojom.DisplaySnapshotSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_AddGraphicsDevice_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fd_mojo_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec, 'ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_Params', [
      mojo.internal.StructField('event_props', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParams', [
      mojo.internal.StructField('should_trigger', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec, 'ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_Params', [
      mojo.internal.StructField('config_requests', 0, 0, mojo.internal.Array(display.mojom.DisplayConfigurationParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modeset_flags', 8, 0, display.mojom.ModesetFlagsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParams', [
      mojo.internal.StructField('request_results', 0, 0, mojo.internal.Array(display.mojom.DisplayConfigurationParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('config_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParams', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetHDCPState_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParams', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, display.mojom.HDCPStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protection_method', 16, 0, display.mojom.ContentProtectionMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, display.mojom.HDCPStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protection_method', 16, 0, display.mojom.ContentProtectionMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParams', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cta', 8, 0, display.mojom.ColorTemperatureAdjustmentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorCalibration_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('calibration', 8, 0, display.mojom.ColorCalibrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetGammaAdjustment_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('adjustment', 8, 0, display.mojom.GammaAdjustmentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetPrivacyScreen_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParams', [
      mojo.internal.StructField('ranges', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetDeviceCursor_Params', [
      mojo.internal.StructField('cursor', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

ui.ozone.mojom.DrmDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.DrmDeviceRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.DrmDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.DrmDevicePendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.DrmDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWindow(widget, initial_bounds) {
    return this.$.createWindow(widget, initial_bounds);
  }
  destroyWindow(widget) {
    return this.$.destroyWindow(widget);
  }
  setWindowBounds(widget, bounds) {
    return this.$.setWindowBounds(widget, bounds);
  }
  takeDisplayControl() {
    return this.$.takeDisplayControl();
  }
  relinquishDisplayControl() {
    return this.$.relinquishDisplayControl();
  }
  refreshNativeDisplays() {
    return this.$.refreshNativeDisplays();
  }
  addGraphicsDevice(path, fd_mojo_handle) {
    return this.$.addGraphicsDevice(path, fd_mojo_handle);
  }
  removeGraphicsDevice(path) {
    return this.$.removeGraphicsDevice(path);
  }
  shouldDisplayEventTriggerConfiguration(event_props) {
    return this.$.shouldDisplayEventTriggerConfiguration(event_props);
  }
  configureNativeDisplays(config_requests, modeset_flags) {
    return this.$.configureNativeDisplays(config_requests, modeset_flags);
  }
  setHdcpKeyProp(display_id, key) {
    return this.$.setHdcpKeyProp(display_id, key);
  }
  getHDCPState(display_id) {
    return this.$.getHDCPState(display_id);
  }
  setHDCPState(display_id, state, protection_method) {
    return this.$.setHDCPState(display_id, state, protection_method);
  }
  setColorTemperatureAdjustment(display_id, cta) {
    return this.$.setColorTemperatureAdjustment(display_id, cta);
  }
  setColorCalibration(display_id, calibration) {
    return this.$.setColorCalibration(display_id, calibration);
  }
  setGammaAdjustment(display_id, adjustment) {
    return this.$.setGammaAdjustment(display_id, adjustment);
  }
  setPrivacyScreen(display_id, enabled) {
    return this.$.setPrivacyScreen(display_id, enabled);
  }
  getSeamlessRefreshRates(display_id) {
    return this.$.getSeamlessRefreshRates(display_id);
  }
  getDeviceCursor(cursor) {
    return this.$.getDeviceCursor(cursor);
  }
};

ui.ozone.mojom.DrmDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DrmDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  createWindow(widget, initial_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec,
      null,
      [widget, initial_bounds],
      false);
  }

  destroyWindow(widget) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec,
      null,
      [widget],
      false);
  }

  setWindowBounds(widget, bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec,
      null,
      [widget, bounds],
      false);
  }

  takeDisplayControl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  relinquishDisplayControl() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  refreshNativeDisplays() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec,
      [],
      false);
  }

  addGraphicsDevice(path, fd_mojo_handle) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec,
      null,
      [path, fd_mojo_handle],
      false);
  }

  removeGraphicsDevice(path) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec,
      null,
      [path],
      false);
  }

  shouldDisplayEventTriggerConfiguration(event_props) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec,
      [event_props],
      false);
  }

  configureNativeDisplays(config_requests, modeset_flags) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec,
      [config_requests, modeset_flags],
      false);
  }

  setHdcpKeyProp(display_id, key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec,
      [display_id, key],
      false);
  }

  getHDCPState(display_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec,
      [display_id],
      false);
  }

  setHDCPState(display_id, state, protection_method) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec,
      [display_id, state, protection_method],
      false);
  }

  setColorTemperatureAdjustment(display_id, cta) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec,
      null,
      [display_id, cta],
      false);
  }

  setColorCalibration(display_id, calibration) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec,
      null,
      [display_id, calibration],
      false);
  }

  setGammaAdjustment(display_id, adjustment) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec,
      null,
      [display_id, adjustment],
      false);
  }

  setPrivacyScreen(display_id, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec,
      [display_id, enabled],
      false);
  }

  getSeamlessRefreshRates(display_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec,
      [display_id],
      false);
  }

  getDeviceCursor(cursor) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

};

ui.ozone.mojom.DrmDevice.getRemote = function() {
  let remote = new ui.ozone.mojom.DrmDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.DrmDevice',
    'context');
  return remote.$;
};

ui.ozone.mojom.DrmDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DrmDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec.$.structSpec);
          const result = this.impl.createWindow(params.widget, params.initial_bounds);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec.$.structSpec);
          const result = this.impl.destroyWindow(params.widget);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec.$.structSpec);
          const result = this.impl.setWindowBounds(params.widget, params.bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec.$.structSpec);
          const result = this.impl.takeDisplayControl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec.$.structSpec);
          const result = this.impl.relinquishDisplayControl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec.$.structSpec);
          const result = this.impl.refreshNativeDisplays();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec.$.structSpec);
          const result = this.impl.addGraphicsDevice(params.path, params.fd_mojo_handle);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec.$.structSpec);
          const result = this.impl.removeGraphicsDevice(params.path);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.shouldDisplayEventTriggerConfiguration(params.event_props);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec.$.structSpec);
          const result = this.impl.configureNativeDisplays(params.config_requests, params.modeset_flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec.$.structSpec);
          const result = this.impl.setHdcpKeyProp(params.display_id, params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec.$.structSpec);
          const result = this.impl.getHDCPState(params.display_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec.$.structSpec);
          const result = this.impl.setHDCPState(params.display_id, params.state, params.protection_method);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec.$.structSpec);
          const result = this.impl.setColorTemperatureAdjustment(params.display_id, params.cta);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec.$.structSpec);
          const result = this.impl.setColorCalibration(params.display_id, params.calibration);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec.$.structSpec);
          const result = this.impl.setGammaAdjustment(params.display_id, params.adjustment);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec.$.structSpec);
          const result = this.impl.setPrivacyScreen(params.display_id, params.enabled);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec.$.structSpec);
          const result = this.impl.getSeamlessRefreshRates(params.display_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceCursor(params.cursor);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ui.ozone.mojom.DrmDeviceReceiver = ui.ozone.mojom.DrmDeviceReceiver;

ui.ozone.mojom.DrmDevicePtr = ui.ozone.mojom.DrmDeviceRemote;
ui.ozone.mojom.DrmDeviceRequest = ui.ozone.mojom.DrmDevicePendingReceiver;

