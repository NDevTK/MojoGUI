// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/cros_display_config.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var gfx = gfx || {};
var display = display || {};

crosapi.mojom.DisplayConfigResultSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DisplayLayoutModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DisplayLayoutPositionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DisplayConfigOperationSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DisplayConfigSourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DisplayRotationOptionsSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TouchCalibrationPairSpec = { $: {} };
crosapi.mojom.TouchCalibrationSpec = { $: {} };
crosapi.mojom.DisplayLayoutSpec = { $: {} };
crosapi.mojom.DisplayLayoutInfoSpec = { $: {} };
crosapi.mojom.EdidSpec = { $: {} };
crosapi.mojom.DisplayRotationSpec = { $: {} };
crosapi.mojom.DisplayModeSpec = { $: {} };
crosapi.mojom.DisplayUnitInfoSpec = { $: {} };
crosapi.mojom.DisplayConfigPropertiesSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController = {};
crosapi.mojom.CrosDisplayConfigController.$interfaceName = 'crosapi.mojom.CrosDisplayConfigController';
crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec = { $: {} };
crosapi.mojom.CrosDisplayConfigObserver = {};
crosapi.mojom.CrosDisplayConfigObserver.$interfaceName = 'crosapi.mojom.CrosDisplayConfigObserver';
crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec = { $: {} };

// Enum: DisplayConfigResult
crosapi.mojom.DisplayConfigResult = {
  kSuccess: 0,
  kInvalidOperationError: 1,
  kInvalidDisplayIdError: 2,
  kUnifiedNotEnabledError: 3,
  kPropertyValueOutOfRangeError: 4,
  kNotSupportedOnInternalDisplayError: 5,
  kNegativeValueError: 6,
  kSetDisplayModeError: 7,
  kInvalidDisplayLayoutError: 8,
  kSingleDisplayError: 9,
  kMirrorModeSourceIdError: 10,
  kMirrorModeDestIdError: 11,
  kCalibrationNotAvailableError: 12,
  kCalibrationNotStartedError: 13,
  kCalibrationInProgressError: 14,
  kCalibrationInvalidDataError: 15,
  kCalibrationFailedError: 16,
};

// Enum: DisplayLayoutMode
crosapi.mojom.DisplayLayoutMode = {
  kNormal: 0,
  kUnified: 1,
  kMirrored: 2,
};

// Enum: DisplayLayoutPosition
crosapi.mojom.DisplayLayoutPosition = {
  kTop: 0,
  kRight: 1,
  kBottom: 2,
  kLeft: 3,
};

// Enum: DisplayConfigOperation
crosapi.mojom.DisplayConfigOperation = {
  kStart: 0,
  kAdjust: 1,
  kReset: 2,
  kComplete: 3,
  kShowNative: 4,
  MinVersion: 4,
};

// Enum: DisplayConfigSource
crosapi.mojom.DisplayConfigSource = {
  kUser: 0,
  kPolicy: 1,
};

// Enum: DisplayRotationOptions
crosapi.mojom.DisplayRotationOptions = {
  kAutoRotate: 0,
  kZeroDegrees: 1,
  k90Degrees: 2,
  k180Degrees: 3,
  k270Degrees: 4,
};

// Struct: TouchCalibrationPair
mojo.internal.Struct(
    crosapi.mojom.TouchCalibrationPairSpec, 'crosapi.mojom.TouchCalibrationPair', [
      mojo.internal.StructField('display_point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchCalibration
mojo.internal.Struct(
    crosapi.mojom.TouchCalibrationSpec, 'crosapi.mojom.TouchCalibration', [
      mojo.internal.StructField('pairs', 0, 0, mojo.internal.Array(crosapi.mojom.TouchCalibrationPairSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DisplayLayout
mojo.internal.Struct(
    crosapi.mojom.DisplayLayoutSpec, 'crosapi.mojom.DisplayLayout', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, crosapi.mojom.DisplayLayoutPositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DisplayLayoutInfo
mojo.internal.Struct(
    crosapi.mojom.DisplayLayoutInfoSpec, 'crosapi.mojom.DisplayLayoutInfo', [
      mojo.internal.StructField('layout_mode', 0, 0, crosapi.mojom.DisplayLayoutModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mirror_source_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('mirror_destination_ids', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('layouts', 24, 0, mojo.internal.Array(crosapi.mojom.DisplayLayoutSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Edid
mojo.internal.Struct(
    crosapi.mojom.EdidSpec, 'crosapi.mojom.Edid', [
      mojo.internal.StructField('manufacturer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('year_of_manufacture', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DisplayRotation
mojo.internal.Struct(
    crosapi.mojom.DisplayRotationSpec, 'crosapi.mojom.DisplayRotation', [
      mojo.internal.StructField('rotation', 0, 0, crosapi.mojom.DisplayRotationOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DisplayMode
mojo.internal.Struct(
    crosapi.mojom.DisplayModeSpec, 'crosapi.mojom.DisplayMode', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size_in_native_pixels', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('refresh_rate', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('is_native', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_interlaced', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DisplayUnitInfo
mojo.internal.Struct(
    crosapi.mojom.DisplayUnitInfoSpec, 'crosapi.mojom.DisplayUnitInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('edid', 16, 0, crosapi.mojom.EdidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dpi_x', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('dpi_y', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('rotation_options', 40, 0, crosapi.mojom.DisplayRotationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 48, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overscan', 56, 0, gfx.mojom.InsetsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('work_area', 64, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('available_display_modes', 72, 0, mojo.internal.Array(crosapi.mojom.DisplayModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('display_zoom_factor', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('available_display_zoom_factors', 88, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('selected_display_mode_index', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_primary', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_internal', 100, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 100, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_auto_rotation_allowed', 100, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_touch_support', 100, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_accelerometer_support', 100, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_detected', 100, 6, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 112], [1, 112]]);

// Struct: DisplayConfigProperties
mojo.internal.Struct(
    crosapi.mojom.DisplayConfigPropertiesSpec, 'crosapi.mojom.DisplayConfigProperties', [
      mojo.internal.StructField('overscan', 0, 0, gfx.mojom.InsetsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('rotation', 8, 0, crosapi.mojom.DisplayRotationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bounds_origin', 16, 0, gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_zoom_factor', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('display_mode', 32, 0, crosapi.mojom.DisplayModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('set_primary', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CrosDisplayConfigController
mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, crosapi.mojom.DisplayLayoutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_Params', [
      mojo.internal.StructField('info', 0, 0, crosapi.mojom.DisplayLayoutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_Params', [
      mojo.internal.StructField('single_unified', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParams', [
      mojo.internal.StructField('info_list', 0, 0, mojo.internal.Array(crosapi.mojom.DisplayUnitInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, crosapi.mojom.DisplayConfigPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, crosapi.mojom.DisplayConfigSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('op', 8, 0, crosapi.mojom.DisplayConfigOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delta', 16, 0, gfx.mojom.InsetsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_TouchCalibration_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('op', 8, 0, crosapi.mojom.DisplayConfigOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('calibration', 16, 0, crosapi.mojom.TouchCalibrationSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('delta_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('delta_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

crosapi.mojom.CrosDisplayConfigControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.CrosDisplayConfigControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.CrosDisplayConfigControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getDisplayLayoutInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec,
      [],
      false);
  }

  setDisplayLayoutInfo(info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec,
      [info],
      false);
  }

  getDisplayUnitInfoList(single_unified) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec,
      [single_unified],
      false);
  }

  setDisplayProperties(id, properties, source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec,
      [id, properties, source],
      false);
  }

  setUnifiedDesktopEnabled(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  overscanCalibration(display_id, op, delta) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec,
      [display_id, op, delta],
      false);
  }

  touchCalibration(display_id, op, calibration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec,
      [display_id, op, calibration],
      false);
  }

  highlightDisplay(id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec,
      null,
      [id],
      false);
  }

  dragDisplayDelta(display_id, delta_x, delta_y) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec,
      null,
      [display_id, delta_x, delta_y],
      false);
  }

};

crosapi.mojom.CrosDisplayConfigController.getRemote = function() {
  let remote = new crosapi.mojom.CrosDisplayConfigControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigController',
    'context');
  return remote.$;
};

crosapi.mojom.CrosDisplayConfigControllerReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddObserver
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetDisplayLayoutInfo
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayLayoutInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: SetDisplayLayoutInfo
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayLayoutInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetDisplayUnitInfoList
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayUnitInfoList (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: SetDisplayProperties
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayProperties (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SetUnifiedDesktopEnabled
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUnifiedDesktopEnabled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: OverscanCalibration
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverscanCalibration (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: TouchCalibration
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TouchCalibration (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: HighlightDisplay
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HighlightDisplay (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: DragDisplayDelta
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragDisplayDelta (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDisplayLayoutInfo');
          const result = this.impl.getDisplayLayoutInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayLayoutInfo');
          const result = this.impl.setDisplayLayoutInfo(params.info);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDisplayUnitInfoList');
          const result = this.impl.getDisplayUnitInfoList(params.single_unified);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDisplayProperties');
          const result = this.impl.setDisplayProperties(params.id, params.properties, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUnifiedDesktopEnabled');
          const result = this.impl.setUnifiedDesktopEnabled(params.enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.overscanCalibration');
          const result = this.impl.overscanCalibration(params.display_id, params.op, params.delta);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.touchCalibration');
          const result = this.impl.touchCalibration(params.display_id, params.op, params.calibration);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.highlightDisplay');
          const result = this.impl.highlightDisplay(params.id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragDisplayDelta');
          const result = this.impl.dragDisplayDelta(params.display_id, params.delta_x, params.delta_y);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.CrosDisplayConfigControllerReceiver = crosapi.mojom.CrosDisplayConfigControllerReceiver;

crosapi.mojom.CrosDisplayConfigControllerPtr = crosapi.mojom.CrosDisplayConfigControllerRemote;
crosapi.mojom.CrosDisplayConfigControllerRequest = crosapi.mojom.CrosDisplayConfigControllerPendingReceiver;


// Interface: CrosDisplayConfigObserver
mojo.internal.Struct(
    crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.CrosDisplayConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.CrosDisplayConfigObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.CrosDisplayConfigObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayConfigChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.CrosDisplayConfigObserver.getRemote = function() {
  let remote = new crosapi.mojom.CrosDisplayConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigObserver',
    'context');
  return remote.$;
};

crosapi.mojom.CrosDisplayConfigObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDisplayConfigChanged
        try {
             decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayConfigChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDisplayConfigChanged');
          const result = this.impl.onDisplayConfigChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.CrosDisplayConfigObserverReceiver = crosapi.mojom.CrosDisplayConfigObserverReceiver;

crosapi.mojom.CrosDisplayConfigObserverPtr = crosapi.mojom.CrosDisplayConfigObserverRemote;
crosapi.mojom.CrosDisplayConfigObserverRequest = crosapi.mojom.CrosDisplayConfigObserverPendingReceiver;

