// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/cros_display_config.mojom
// Module: crosapi.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  getDisplayLayoutInfo() {
    return this.$.getDisplayLayoutInfo();
  }
  setDisplayLayoutInfo(info) {
    return this.$.setDisplayLayoutInfo(info);
  }
  getDisplayUnitInfoList(single_unified) {
    return this.$.getDisplayUnitInfoList(single_unified);
  }
  setDisplayProperties(id, properties, source) {
    return this.$.setDisplayProperties(id, properties, source);
  }
  setUnifiedDesktopEnabled(enabled) {
    return this.$.setUnifiedDesktopEnabled(enabled);
  }
  overscanCalibration(display_id, op, delta) {
    return this.$.overscanCalibration(display_id, op, delta);
  }
  touchCalibration(display_id, op, calibration) {
    return this.$.touchCalibration(display_id, op, calibration);
  }
  highlightDisplay(id) {
    return this.$.highlightDisplay(id);
  }
  dragDisplayDelta(display_id, delta_x, delta_y) {
    return this.$.dragDisplayDelta(display_id, delta_x, delta_y);
  }
};

crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosDisplayConfigController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  getDisplayLayoutInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec,
      [],
      false);
  }

  setDisplayLayoutInfo(info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec,
      [info],
      false);
  }

  getDisplayUnitInfoList(single_unified) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec,
      [single_unified],
      false);
  }

  setDisplayProperties(id, properties, source) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec,
      [id, properties, source],
      false);
  }

  setUnifiedDesktopEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  overscanCalibration(display_id, op, delta) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec,
      [display_id, op, delta],
      false);
  }

  touchCalibration(display_id, op, calibration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec,
      crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec,
      [display_id, op, calibration],
      false);
  }

  highlightDisplay(id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec,
      null,
      [id],
      false);
  }

  dragDisplayDelta(display_id, delta_x, delta_y) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CrosDisplayConfigController', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetDisplayLayoutInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayLayoutInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetDisplayLayoutInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayLayoutInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetDisplayUnitInfoList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDisplayUnitInfoList (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetDisplayProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayProperties (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetUnifiedDesktopEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUnifiedDesktopEnabled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OverscanCalibration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverscanCalibration (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: TouchCalibration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TouchCalibration (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HighlightDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HighlightDisplay (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DragDisplayDelta
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragDisplayDelta (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayLayoutInfo');
          const result = this.impl.getDisplayLayoutInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDisplayLayoutInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayLayoutInfo');
          const result = this.impl.setDisplayLayoutInfo(params.info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDisplayLayoutInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayUnitInfoList');
          const result = this.impl.getDisplayUnitInfoList(params.single_unified);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDisplayUnitInfoList FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayProperties');
          const result = this.impl.setDisplayProperties(params.id, params.properties, params.source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDisplayProperties FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUnifiedDesktopEnabled');
          const result = this.impl.setUnifiedDesktopEnabled(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overscanCalibration');
          const result = this.impl.overscanCalibration(params.display_id, params.op, params.delta);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OverscanCalibration FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.touchCalibration');
          const result = this.impl.touchCalibration(params.display_id, params.op, params.calibration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TouchCalibration FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.highlightDisplay');
          const result = this.impl.highlightDisplay(params.id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec.$.structSpec);
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
  onDisplayConfigChanged() {
    return this.$.onDisplayConfigChanged();
  }
};

crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosDisplayConfigObserver', [
      { explicit: 0 },
    ]);
  }

  onDisplayConfigChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('CrosDisplayConfigObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: OnDisplayConfigChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayConfigChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec.$.structSpec);
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

