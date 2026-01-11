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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};

mojo.internal.bindings.crosapi.mojom.DisplayConfigResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DisplayLayoutModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DisplayLayoutPositionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DisplayConfigOperationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DisplayConfigSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DisplayRotationOptionsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.TouchCalibrationPairSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TouchCalibrationSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayLayoutSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayLayoutInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.EdidSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayRotationSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayModeSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayUnitInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DisplayConfigPropertiesSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController = {};
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController.$interfaceName = 'crosapi.mojom.CrosDisplayConfigController';
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver = {};
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver.$interfaceName = 'crosapi.mojom.CrosDisplayConfigObserver';
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec = { $: {} };

// Enum: DisplayConfigResult
mojo.internal.bindings.crosapi.mojom.DisplayConfigResult = {
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
mojo.internal.bindings.crosapi.mojom.DisplayLayoutMode = {
  kNormal: 0,
  kUnified: 1,
  kMirrored: 2,
};

// Enum: DisplayLayoutPosition
mojo.internal.bindings.crosapi.mojom.DisplayLayoutPosition = {
  kTop: 0,
  kRight: 1,
  kBottom: 2,
  kLeft: 3,
};

// Enum: DisplayConfigOperation
mojo.internal.bindings.crosapi.mojom.DisplayConfigOperation = {
  kStart: 0,
  kAdjust: 1,
  kReset: 2,
  kComplete: 3,
  kShowNative: 4,
  MinVersion: 4,
};

// Enum: DisplayConfigSource
mojo.internal.bindings.crosapi.mojom.DisplayConfigSource = {
  kUser: 0,
  kPolicy: 1,
};

// Enum: DisplayRotationOptions
mojo.internal.bindings.crosapi.mojom.DisplayRotationOptions = {
  kAutoRotate: 0,
  kZeroDegrees: 1,
  k90Degrees: 2,
  k180Degrees: 3,
  k270Degrees: 4,
};

// Struct: TouchCalibrationPair
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TouchCalibrationPairSpec, 'crosapi.mojom.TouchCalibrationPair', [
      mojo.internal.StructField('arg_display_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_touch_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchCalibration
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TouchCalibrationSpec, 'crosapi.mojom.TouchCalibration', [
      mojo.internal.StructField('arg_pairs', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TouchCalibrationPairSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DisplayLayout
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayLayoutSpec, 'crosapi.mojom.DisplayLayout', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayLayoutPositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DisplayLayoutInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayLayoutInfoSpec, 'crosapi.mojom.DisplayLayoutInfo', [
      mojo.internal.StructField('arg_layout_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayLayoutModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mirror_source_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mirror_destination_ids', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_layouts', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayLayoutSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Edid
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.EdidSpec, 'crosapi.mojom.Edid', [
      mojo.internal.StructField('arg_manufacturer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_year_of_manufacture', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DisplayRotation
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayRotationSpec, 'crosapi.mojom.DisplayRotation', [
      mojo.internal.StructField('arg_rotation', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayRotationOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DisplayMode
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayModeSpec, 'crosapi.mojom.DisplayMode', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size_in_native_pixels', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_scale_factor', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_refresh_rate', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_native', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_interlaced', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DisplayUnitInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayUnitInfoSpec, 'crosapi.mojom.DisplayUnitInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_edid', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.EdidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dpi_x', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dpi_y', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rotation_options', 40, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayRotationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 48, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_overscan', 56, 0, mojo.internal.bindings.gfx.mojom.InsetsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_work_area', 64, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_available_display_modes', 72, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_display_zoom_factor', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_display_zoom_factors', 88, 0, mojo.internal.Array(mojo.internal.Double, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_display_mode_index', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_primary', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_internal', 100, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 100, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_auto_rotation_allowed', 100, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_touch_support', 100, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_accelerometer_support', 100, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_detected', 100, 6, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 112], [1, 112]]);

// Struct: DisplayConfigProperties
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DisplayConfigPropertiesSpec, 'crosapi.mojom.DisplayConfigProperties', [
      mojo.internal.StructField('arg_overscan', 0, 0, mojo.internal.bindings.gfx.mojom.InsetsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_rotation', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayRotationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bounds_origin', 16, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_zoom_factor', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_display_mode', 32, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_set_primary', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CrosDisplayConfigController
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayLayoutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayLayoutInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_Params', [
      mojo.internal.StructField('arg_single_unified', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParams', [
      mojo.internal.StructField('arg_info_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayUnitInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_op', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_delta', 16, 0, mojo.internal.bindings.gfx.mojom.InsetsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_TouchCalibration_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_op', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_calibration', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.TouchCalibrationSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DisplayConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delta_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delta_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  getDisplayLayoutInfo() {
    return this.$.getDisplayLayoutInfo();
  }
  setDisplayLayoutInfo(arg_info) {
    return this.$.setDisplayLayoutInfo(arg_info);
  }
  getDisplayUnitInfoList(arg_single_unified) {
    return this.$.getDisplayUnitInfoList(arg_single_unified);
  }
  setDisplayProperties(arg_id, arg_properties, arg_source) {
    return this.$.setDisplayProperties(arg_id, arg_properties, arg_source);
  }
  setUnifiedDesktopEnabled(arg_enabled) {
    return this.$.setUnifiedDesktopEnabled(arg_enabled);
  }
  overscanCalibration(arg_display_id, arg_op, arg_delta) {
    return this.$.overscanCalibration(arg_display_id, arg_op, arg_delta);
  }
  touchCalibration(arg_display_id, arg_op, arg_calibration) {
    return this.$.touchCalibration(arg_display_id, arg_op, arg_calibration);
  }
  highlightDisplay(arg_id) {
    return this.$.highlightDisplay(arg_id);
  }
  dragDisplayDelta(arg_display_id, arg_delta_x, arg_delta_y) {
    return this.$.dragDisplayDelta(arg_display_id, arg_delta_x, arg_delta_y);
  }
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemoteCallHandler = class {
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

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getDisplayLayoutInfo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec,
      [],
      false);
  }

  setDisplayLayoutInfo(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec,
      [arg_info],
      false);
  }

  getDisplayUnitInfoList(arg_single_unified) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec,
      [arg_single_unified],
      false);
  }

  setDisplayProperties(arg_id, arg_properties, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec,
      [arg_id, arg_properties, arg_source],
      false);
  }

  setUnifiedDesktopEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  overscanCalibration(arg_display_id, arg_op, arg_delta) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec,
      [arg_display_id, arg_op, arg_delta],
      false);
  }

  touchCalibration(arg_display_id, arg_op, arg_calibration) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec,
      [arg_display_id, arg_op, arg_calibration],
      false);
  }

  highlightDisplay(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  dragDisplayDelta(arg_display_id, arg_delta_x, arg_delta_y) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec,
      null,
      [arg_display_id, arg_delta_x, arg_delta_y],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigController',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayLayoutInfo');
          const result = this.impl.getDisplayLayoutInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayLayoutInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDisplayLayoutInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayLayoutInfo');
          const result = this.impl.setDisplayLayoutInfo(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayLayoutInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDisplayLayoutInfo FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDisplayUnitInfoList');
          const result = this.impl.getDisplayUnitInfoList(params.arg_single_unified);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_GetDisplayUnitInfoList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDisplayUnitInfoList FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayProperties');
          const result = this.impl.setDisplayProperties(params.arg_id, params.arg_properties, params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetDisplayProperties_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetDisplayProperties FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_SetUnifiedDesktopEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUnifiedDesktopEnabled');
          const result = this.impl.setUnifiedDesktopEnabled(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.overscanCalibration');
          const result = this.impl.overscanCalibration(params.arg_display_id, params.arg_op, params.arg_delta);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_OverscanCalibration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OverscanCalibration FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.touchCalibration');
          const result = this.impl.touchCalibration(params.arg_display_id, params.arg_op, params.arg_calibration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_TouchCalibration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TouchCalibration FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_HighlightDisplay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.highlightDisplay');
          const result = this.impl.highlightDisplay(params.arg_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigController_DragDisplayDelta_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragDisplayDelta');
          const result = this.impl.dragDisplayDelta(params.arg_display_id, params.arg_delta_x, params.arg_delta_y);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerReceiver = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerReceiver;

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerPtr = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRemote;
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerRequest = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigControllerPendingReceiver;


// Interface: CrosDisplayConfigObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec, 'crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.CrosDisplayConfigObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosDisplayConfigObserver', [
      { explicit: 0 },
    ]);
  }

  onDisplayConfigChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.CrosDisplayConfigObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserver_OnDisplayConfigChanged_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverReceiver = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverReceiver;

mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverPtr = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRemote;
mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverRequest = mojo.internal.bindings.crosapi.mojom.CrosDisplayConfigObserverPendingReceiver;

