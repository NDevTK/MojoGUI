// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};

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
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
      mojo.internal.StructField('initial_bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec, 'ui.ozone.mojom.DrmDevice_DestroyWindow_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetWindowBounds_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('display_snapshots', 0, 0, mojo.internal.Array(display.mojom.DisplaySnapshotSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_AddGraphicsDevice_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('fd_mojo_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('config_requests', 0, 0, mojo.internal.Array(display.mojom.DisplayConfigurationParamsSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('modeset_flags', 8, 0, display.mojom.ModesetFlagsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParams', [
      mojo.internal.StructField('request_results', 0, 0, mojo.internal.Array(display.mojom.DisplayConfigurationParamsSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('state', 12, 0, display.mojom.HDCPStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('protection_method', 16, 0, display.mojom.ContentProtectionMethodSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, display.mojom.HDCPStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('protection_method', 12, 0, display.mojom.ContentProtectionMethodSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParams', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('cta', 8, 0, display.mojom.ColorTemperatureAdjustmentSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorCalibration_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('calibration', 8, 0, display.mojom.ColorCalibrationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetGammaAdjustment_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('adjustment', 8, 0, display.mojom.GammaAdjustmentSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('cursor', 0, 0, mojo.internal.AssociatedInterfaceRequest(ui.ozone.mojom.DeviceCursorRemote), null, false, 0, undefined),
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
};

ui.ozone.mojom.DrmDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(widget, initial_bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec,
      null,
      [widget, initial_bounds],
      false);
  }

  destroyWindow(widget) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec,
      null,
      [widget],
      false);
  }

  setWindowBounds(widget, bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec,
      null,
      [widget, bounds],
      false);
  }

  takeDisplayControl() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  relinquishDisplayControl() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  refreshNativeDisplays() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec,
      [],
      false);
  }

  addGraphicsDevice(path, fd_mojo_handle) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec,
      null,
      [path, fd_mojo_handle],
      false);
  }

  removeGraphicsDevice(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec,
      null,
      [path],
      false);
  }

  shouldDisplayEventTriggerConfiguration(event_props) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec,
      [event_props],
      false);
  }

  configureNativeDisplays(config_requests, modeset_flags) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec,
      ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec,
      [config_requests, modeset_flags],
      false);
  }

  setHdcpKeyProp(display_id, key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec,
      [display_id, key],
      false);
  }

  getHDCPState(display_id) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec,
      [display_id],
      false);
  }

  setHDCPState(display_id, state, protection_method) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec,
      [display_id, state, protection_method],
      false);
  }

  setColorTemperatureAdjustment(display_id, cta) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec,
      null,
      [display_id, cta],
      false);
  }

  setColorCalibration(display_id, calibration) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec,
      null,
      [display_id, calibration],
      false);
  }

  setGammaAdjustment(display_id, adjustment) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec,
      null,
      [display_id, adjustment],
      false);
  }

  setPrivacyScreen(display_id, enabled) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec,
      ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec,
      [display_id, enabled],
      false);
  }

  getSeamlessRefreshRates(display_id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec,
      ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec,
      [display_id],
      false);
  }

  getDeviceCursor(cursor) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
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

ui.ozone.mojom.DrmDevicePtr = ui.ozone.mojom.DrmDeviceRemote;
ui.ozone.mojom.DrmDeviceRequest = ui.ozone.mojom.DrmDevicePendingReceiver;

