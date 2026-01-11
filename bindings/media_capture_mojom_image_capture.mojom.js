// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/mojom/image_capture.mojom
 // Module: media.mojom

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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};

mojo.internal.bindings.media.mojom.BackgroundBlurModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.EyeGazeCorrectionModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.MeteringModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.RedEyeReductionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.FillLightModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.RangeSpec = { $: {} };
mojo.internal.bindings.media.mojom.PhotoStateSpec = { $: {} };
mojo.internal.bindings.media.mojom.Point2DSpec = { $: {} };
mojo.internal.bindings.media.mojom.PhotoSettingsSpec = { $: {} };
mojo.internal.bindings.media.mojom.BlobSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture = {};
mojo.internal.bindings.media.mojom.ImageCapture.$interfaceName = 'media.mojom.ImageCapture';
mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec = { $: {} };

// Enum: BackgroundBlurMode
mojo.internal.bindings.media.mojom.BackgroundBlurMode = {
  OFF: 0,
  BLUR: 1,
};

// Enum: EyeGazeCorrectionMode
mojo.internal.bindings.media.mojom.EyeGazeCorrectionMode = {
  OFF: 0,
  ON: 1,
  STARE: 2,
};

// Enum: MeteringMode
mojo.internal.bindings.media.mojom.MeteringMode = {
  NONE: 0,
  MANUAL: 1,
  SINGLE_SHOT: 2,
  CONTINUOUS: 3,
};

// Enum: RedEyeReduction
mojo.internal.bindings.media.mojom.RedEyeReduction = {
  NEVER: 0,
  ALWAYS: 1,
  CONTROLLABLE: 2,
};

// Enum: FillLightMode
mojo.internal.bindings.media.mojom.FillLightMode = {
  OFF: 0,
  AUTO: 1,
  FLASH: 2,
};

// Struct: Range
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.RangeSpec, 'media.mojom.Range', [
      mojo.internal.StructField('arg_max', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_min', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_current', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_step', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PhotoState
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PhotoStateSpec, 'media.mojom.PhotoState', [
      mojo.internal.StructField('arg_supported_white_balance_modes', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_current_white_balance_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_exposure_modes', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_current_exposure_mode', 24, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_focus_modes', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_current_focus_mode', 40, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_points_of_interest', 48, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.Point2DSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_exposure_compensation', 56, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exposure_time', 64, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_temperature', 72, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_iso', 80, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_brightness', 88, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_contrast', 96, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_saturation', 104, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sharpness', 112, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus_distance', 120, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pan', 128, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tilt', 136, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_zoom', 144, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_red_eye_reduction', 152, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RedEyeReductionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_height', 160, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 168, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fill_light_mode', 176, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.FillLightModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_background_blur_modes', 184, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.BackgroundBlurModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_background_blur_mode', 192, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.BackgroundBlurModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_face_framing_modes', 200, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_current_face_framing_mode', 208, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_eye_gaze_correction_modes', 216, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.EyeGazeCorrectionModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_current_eye_gaze_correction_mode', 224, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.EyeGazeCorrectionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_background_segmentation_mask_states', 232, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_supports_torch', 240, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_torch', 240, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_current_background_segmentation_mask_state', 240, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 256]]);

// Struct: Point2D
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.Point2DSpec, 'media.mojom.Point2D', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PhotoSettings
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.PhotoSettingsSpec, 'media.mojom.PhotoSettings', [
      mojo.internal.StructField('arg_white_balance_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exposure_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus_mode', 16, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_points_of_interest', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.media.mojom.Point2DSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_exposure_compensation', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_exposure_time', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_color_temperature', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_iso', 56, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_brightness', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_contrast', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_saturation', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sharpness', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_focus_distance', 96, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pan', 104, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tilt', 112, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_zoom', 120, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fill_light_mode', 128, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.FillLightModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_width', 136, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 144, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_background_blur_mode', 152, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.BackgroundBlurModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_face_framing_mode', 160, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.MeteringModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_eye_gaze_correction_mode', 168, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.EyeGazeCorrectionModeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_has_white_balance_mode', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_exposure_mode', 176, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_focus_mode', 176, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_exposure_compensation', 176, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_exposure_time', 176, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_color_temperature', 176, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_iso', 176, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_brightness', 176, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_contrast', 177, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_saturation', 177, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_sharpness', 177, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_focus_distance', 177, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_pan', 177, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_tilt', 177, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_zoom', 177, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_torch', 177, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_torch', 178, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_fill_light_mode', 178, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_width', 178, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_height', 178, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_red_eye_reduction', 178, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_red_eye_reduction', 178, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_background_blur_mode', 178, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_face_framing_mode', 178, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_background_segmentation_mask_state_$flag', 179, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_background_segmentation_mask_state_$value', originalFieldName: 'arg_background_segmentation_mask_state' }),
      mojo.internal.StructField('arg_background_segmentation_mask_state_$value', 179, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_background_segmentation_mask_state_$flag', originalFieldName: 'arg_background_segmentation_mask_state' }),
    ],
    [[0, 192]]);

// Struct: Blob
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.BlobSpec, 'media.mojom.Blob', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ImageCapture
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ParamsSpec, 'media.mojom.ImageCapture_GetPhotoState_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec, 'media.mojom.ImageCapture_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.PhotoStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec, 'media.mojom.ImageCapture_SetPhotoOptions_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 8, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.PhotoSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec, 'media.mojom.ImageCapture_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ParamsSpec, 'media.mojom.ImageCapture_TakePhoto_Params', [
      mojo.internal.StructField('arg_source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec, 'media.mojom.ImageCapture_TakePhoto_ResponseParams', [
      mojo.internal.StructField('arg_blob', 0, 0, mojo.internal.bindings.mojo.internal.bindings.media.mojom.BlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.ImageCapturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.ImageCaptureRemote = class {
  static get $interfaceName() {
    return 'media.mojom.ImageCapture';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.ImageCapturePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.ImageCaptureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPhotoState(arg_source_id) {
    return this.$.getPhotoState(arg_source_id);
  }
  setPhotoOptions(arg_source_id, arg_settings) {
    return this.$.setPhotoOptions(arg_source_id, arg_settings);
  }
  takePhoto(arg_source_id) {
    return this.$.takePhoto(arg_source_id);
  }
};

mojo.internal.bindings.media.mojom.ImageCaptureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImageCapture', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getPhotoState(arg_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ParamsSpec,
      mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec,
      [arg_source_id],
      false);
  }

  setPhotoOptions(arg_source_id, arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec,
      mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec,
      [arg_source_id, arg_settings],
      false);
  }

  takePhoto(arg_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ParamsSpec,
      mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec,
      [arg_source_id],
      false);
  }

};

mojo.internal.bindings.media.mojom.ImageCapture.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.ImageCaptureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.ImageCapture',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.ImageCaptureReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImageCapture', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: GetPhotoState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPhotoState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetPhotoOptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPhotoOptions (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TakePhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakePhoto (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPhotoState');
          const result = this.impl.getPhotoState(params.arg_source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ImageCapture_GetPhotoState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPhotoState FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPhotoOptions');
          const result = this.impl.setPhotoOptions(params.arg_source_id, params.arg_settings);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ImageCapture_SetPhotoOptions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPhotoOptions FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takePhoto');
          const result = this.impl.takePhoto(params.arg_source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.ImageCapture_TakePhoto_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TakePhoto FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.ImageCaptureReceiver = mojo.internal.bindings.media.mojom.ImageCaptureReceiver;

mojo.internal.bindings.media.mojom.ImageCapturePtr = mojo.internal.bindings.media.mojom.ImageCaptureRemote;
mojo.internal.bindings.media.mojom.ImageCaptureRequest = mojo.internal.bindings.media.mojom.ImageCapturePendingReceiver;

