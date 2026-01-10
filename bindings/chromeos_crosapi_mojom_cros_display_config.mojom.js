// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/cros_display_config.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};

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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.AssociatedInterfaceProxy(crosapi.mojom.CrosDisplayConfigObserverRemote), null, false, 0, undefined),
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

crosapi.mojom.CrosDisplayConfigObserverPtr = crosapi.mojom.CrosDisplayConfigObserverRemote;
crosapi.mojom.CrosDisplayConfigObserverRequest = crosapi.mojom.CrosDisplayConfigObserverPendingReceiver;

