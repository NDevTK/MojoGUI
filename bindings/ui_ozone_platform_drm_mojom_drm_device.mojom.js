// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
// Module: ui.ozone.mojom

'use strict';

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

ui.ozone.mojom.DrmDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DestroyWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyWindow (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWindowBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowBounds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: TakeDisplayControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakeDisplayControl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RelinquishDisplayControl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RelinquishDisplayControl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RefreshNativeDisplays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshNativeDisplays (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AddGraphicsDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddGraphicsDevice (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RemoveGraphicsDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveGraphicsDevice (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShouldDisplayEventTriggerConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldDisplayEventTriggerConfiguration (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ConfigureNativeDisplays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfigureNativeDisplays (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetHdcpKeyProp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHdcpKeyProp (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetHDCPState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHDCPState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetHDCPState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHDCPState (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetColorTemperatureAdjustment
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorTemperatureAdjustment (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetColorCalibration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorCalibration (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetGammaAdjustment
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGammaAdjustment (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetPrivacyScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPrivacyScreen (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetSeamlessRefreshRates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSeamlessRefreshRates (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GetDeviceCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceCursor (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createWindow');
          const result = this.impl.createWindow(params.widget, params.initial_bounds);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.destroyWindow');
          const result = this.impl.destroyWindow(params.widget);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWindowBounds');
          const result = this.impl.setWindowBounds(params.widget, params.bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.takeDisplayControl');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.relinquishDisplayControl');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.refreshNativeDisplays');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addGraphicsDevice');
          const result = this.impl.addGraphicsDevice(params.path, params.fd_mojo_handle);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.removeGraphicsDevice');
          const result = this.impl.removeGraphicsDevice(params.path);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.shouldDisplayEventTriggerConfiguration');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.configureNativeDisplays');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setHdcpKeyProp');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getHDCPState');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setHDCPState');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setColorTemperatureAdjustment');
          const result = this.impl.setColorTemperatureAdjustment(params.display_id, params.cta);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setColorCalibration');
          const result = this.impl.setColorCalibration(params.display_id, params.calibration);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setGammaAdjustment');
          const result = this.impl.setGammaAdjustment(params.display_id, params.adjustment);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setPrivacyScreen');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getSeamlessRefreshRates');
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
          const params = decoder.decodeStructInline(ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getDeviceCursor');
          const result = this.impl.getDeviceCursor(params.cursor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.ozone.mojom.DrmDeviceReceiver = ui.ozone.mojom.DrmDeviceReceiver;

ui.ozone.mojom.DrmDevicePtr = ui.ozone.mojom.DrmDeviceRemote;
ui.ozone.mojom.DrmDeviceRequest = ui.ozone.mojom.DrmDevicePendingReceiver;

