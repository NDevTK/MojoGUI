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


// Enum: DisplayConfigResult
crosapi.mojom.mojom.DisplayConfigResult = {
  kInvalidOperationError: 0,
  kInvalidDisplayIdError: 1,
  kUnifiedNotEnabledError: 2,
  kPropertyValueOutOfRangeError: 3,
  kNotSupportedOnInternalDisplayError: 4,
  kNegativeValueError: 5,
  kSetDisplayModeError: 6,
  kInvalidDisplayLayoutError: 7,
  kSingleDisplayError: 8,
  kMirrorModeSourceIdError: 9,
  kMirrorModeDestIdError: 10,
  kCalibrationNotAvailableError: 11,
  kCalibrationNotStartedError: 12,
  kCalibrationInProgressError: 13,
  kCalibrationInvalidDataError: 14,
  kCalibrationFailedError: 15,
};
crosapi.mojom.mojom.DisplayConfigResultSpec = { $: mojo.internal.Enum() };

// Enum: DisplayLayoutMode
crosapi.mojom.mojom.DisplayLayoutMode = {
  kUnified: 0,
  kMirrored: 1,
};
crosapi.mojom.mojom.DisplayLayoutModeSpec = { $: mojo.internal.Enum() };

// Enum: DisplayLayoutPosition
crosapi.mojom.mojom.DisplayLayoutPosition = {
  kRight: 0,
  kBottom: 1,
  kLeft: 2,
};
crosapi.mojom.mojom.DisplayLayoutPositionSpec = { $: mojo.internal.Enum() };

// Enum: DisplayConfigOperation
crosapi.mojom.mojom.DisplayConfigOperation = {
  kAdjust: 0,
  kReset: 1,
  kComplete: 2,
  kShowNative: 3,
};
crosapi.mojom.mojom.DisplayConfigOperationSpec = { $: mojo.internal.Enum() };

// Enum: DisplayConfigSource
crosapi.mojom.mojom.DisplayConfigSource = {
  kPolicy: 0,
};
crosapi.mojom.mojom.DisplayConfigSourceSpec = { $: mojo.internal.Enum() };

// Enum: DisplayRotationOptions
crosapi.mojom.mojom.DisplayRotationOptions = {
  kZeroDegrees: 0,
  k90Degrees: 1,
  k180Degrees: 2,
  k270Degrees: 3,
};
crosapi.mojom.mojom.DisplayRotationOptionsSpec = { $: mojo.internal.Enum() };

// Struct: TouchCalibrationPair
crosapi.mojom.mojom.TouchCalibrationPairSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TouchCalibrationPair',
      packedSize: 24,
      fields: [
        { name: 'display_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'touch_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TouchCalibration
crosapi.mojom.mojom.TouchCalibrationSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TouchCalibration',
      packedSize: 24,
      fields: [
        { name: 'pairs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TouchCalibrationPairSpec, false), nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DisplayLayout
crosapi.mojom.mojom.DisplayLayoutSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayLayout',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'parent_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DisplayLayoutPositionSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DisplayLayoutInfo
crosapi.mojom.mojom.DisplayLayoutInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayLayoutInfo',
      packedSize: 40,
      fields: [
        { name: 'layout_mode', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.DisplayLayoutModeSpec, nullable: false, minVersion: 0 },
        { name: 'mirror_source_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'mirror_destination_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'layouts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DisplayLayoutSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Edid
crosapi.mojom.mojom.EdidSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Edid',
      packedSize: 32,
      fields: [
        { name: 'manufacturer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'year_of_manufacture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DisplayRotation
crosapi.mojom.mojom.DisplayRotationSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayRotation',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayRotationOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DisplayMode
crosapi.mojom.mojom.DisplayModeSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayMode',
      packedSize: 48,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'size_in_native_pixels', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'refresh_rate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'is_native', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_interlaced', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DisplayUnitInfo
crosapi.mojom.mojom.DisplayUnitInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayUnitInfo',
      packedSize: 112,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'edid', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.EdidSpec, nullable: true, minVersion: 0 },
        { name: 'is_primary', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_internal', packedOffset: 96, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_enabled', packedOffset: 96, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_auto_rotation_allowed', packedOffset: 96, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_touch_support', packedOffset: 96, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_accelerometer_support', packedOffset: 96, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dpi_x', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'dpi_y', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'rotation_options', packedOffset: 88, packedBitOffset: 0, type: crosapi.mojom.DisplayRotationOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'overscan', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.InsetsSpec, nullable: false, minVersion: 0 },
        { name: 'work_area', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'selected_display_mode_index', packedOffset: 92, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'available_display_modes', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DisplayModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'display_zoom_factor', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'available_display_zoom_factors', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
        { name: 'is_detected', packedOffset: 96, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 112}, {version: 1, packedSize: 112}]
    }
  }
};

// Struct: DisplayConfigProperties
crosapi.mojom.mojom.DisplayConfigPropertiesSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.DisplayConfigProperties',
      packedSize: 56,
      fields: [
        { name: 'set_primary', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'overscan', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.InsetsSpec, nullable: true, minVersion: 0 },
        { name: 'rotation', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.DisplayRotationSpec, nullable: true, minVersion: 0 },
        { name: 'bounds_origin', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: true, minVersion: 0 },
        { name: 'display_zoom_factor', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'display_mode', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.DisplayModeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: CrosDisplayConfigController
crosapi.mojom.mojom.CrosDisplayConfigController = {};

crosapi.mojom.mojom.CrosDisplayConfigControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.CrosDisplayConfigControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.CrosDisplayConfigControllerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.CrosDisplayConfigControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.CrosDisplayConfigControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  getDisplayLayoutInfo() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec,
      []);
  }

  setDisplayLayoutInfo(info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec,
      [info]);
  }

  getDisplayUnitInfoList(single_unified) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec,
      [single_unified]);
  }

  setDisplayProperties(id, properties, source) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec,
      [id, properties, source]);
  }

  setUnifiedDesktopEnabled(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  overscanCalibration(display_id, op, delta) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec,
      [display_id, op, delta]);
  }

  touchCalibration(display_id, op, calibration) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec,
      crosapi.mojom.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec,
      [display_id, op, calibration]);
  }

  highlightDisplay(id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec,
      null,
      [id]);
  }

  dragDisplayDelta(display_id, delta_x, delta_y) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec,
      null,
      [display_id, delta_x, delta_y]);
  }

};

crosapi.mojom.mojom.CrosDisplayConfigController.getRemote = function() {
  let remote = new crosapi.mojom.mojom.CrosDisplayConfigControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigController',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
crosapi.mojom.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDisplayLayoutInfo
crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.GetDisplayLayoutInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.GetDisplayLayoutInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayLayoutInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayLayoutInfo
crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.SetDisplayLayoutInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayLayoutInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.SetDisplayLayoutInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDisplayUnitInfoList
crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.GetDisplayUnitInfoList_Params',
      packedSize: 16,
      fields: [
        { name: 'single_unified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.GetDisplayUnitInfoList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.DisplayUnitInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDisplayProperties
crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.SetDisplayProperties_Params',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigPropertiesSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.SetDisplayProperties_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUnifiedDesktopEnabled
crosapi.mojom.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.SetUnifiedDesktopEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverscanCalibration
crosapi.mojom.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.OverscanCalibration_Params',
      packedSize: 32,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'op', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigOperationSpec, nullable: false, minVersion: 0 },
        { name: 'delta', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.InsetsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.OverscanCalibration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TouchCalibration
crosapi.mojom.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.TouchCalibration_Params',
      packedSize: 32,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'op', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigOperationSpec, nullable: false, minVersion: 0 },
        { name: 'calibration', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.TouchCalibrationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

crosapi.mojom.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.TouchCalibration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.DisplayConfigResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HighlightDisplay
crosapi.mojom.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.HighlightDisplay_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DragDisplayDelta
crosapi.mojom.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigController.DragDisplayDelta_Params',
      packedSize: 24,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'delta_x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'delta_y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.CrosDisplayConfigControllerPtr = crosapi.mojom.mojom.CrosDisplayConfigControllerRemote;
crosapi.mojom.mojom.CrosDisplayConfigControllerRequest = crosapi.mojom.mojom.CrosDisplayConfigControllerPendingReceiver;


// Interface: CrosDisplayConfigObserver
crosapi.mojom.mojom.CrosDisplayConfigObserver = {};

crosapi.mojom.mojom.CrosDisplayConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.CrosDisplayConfigObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.CrosDisplayConfigObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.CrosDisplayConfigObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.CrosDisplayConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayConfigChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.mojom.CrosDisplayConfigObserver.getRemote = function() {
  let remote = new crosapi.mojom.mojom.CrosDisplayConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayConfigChanged
crosapi.mojom.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.CrosDisplayConfigObserver.OnDisplayConfigChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.CrosDisplayConfigObserverPtr = crosapi.mojom.mojom.CrosDisplayConfigObserverRemote;
crosapi.mojom.mojom.CrosDisplayConfigObserverRequest = crosapi.mojom.mojom.CrosDisplayConfigObserverPendingReceiver;

