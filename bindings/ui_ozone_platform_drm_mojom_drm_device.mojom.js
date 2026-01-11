// Auto-generated MojoJS binding
 // Source: chromium_src/ui/ozone/platform/drm/mojom/drm_device.mojom
 // Module: ui.ozone.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.ozone = mojo.internal.bindings.ui.ozone || {};
mojo.internal.bindings.ui.ozone.mojom = mojo.internal.bindings.ui.ozone.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.ui.ozone.mojom.DrmDevice = {};
mojo.internal.bindings.ui.ozone.mojom.DrmDeviceSpec = { $ : {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice.$interfaceName = 'ui.ozone.mojom.DrmDevice';
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec = { $: {} };

// Interface: DrmDevice
mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec, 'ui.ozone.mojom.DrmDevice_CreateWindow_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec, 'ui.ozone.mojom.DrmDevice_DestroyWindow_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetWindowBounds_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec, 'ui.ozone.mojom.DrmDevice_TakeDisplayControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParams', [
      mojo.internal.StructField('arg_display_snapshots', 0, 0, mojo.internal.Array(mojo.internal.bindings.display.mojom.DisplaySnapshotSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_AddGraphicsDevice_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fd_mojo_handle', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec, 'ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec, 'ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_Params', [
      mojo.internal.StructField('arg_event_props', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParams', [
      mojo.internal.StructField('arg_should_trigger', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec, 'ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_Params', [
      mojo.internal.StructField('arg_config_requests', 0, 0, mojo.internal.Array(mojo.internal.bindings.display.mojom.DisplayConfigurationParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_modeset_flags', 8, 0, mojo.internal.bindings.display.mojom.ModesetFlagsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParams', [
      mojo.internal.StructField('arg_request_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.display.mojom.DisplayConfigurationParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_config_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParams', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetHDCPState_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParams', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.display.mojom.HDCPStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_protection_method', 16, 0, mojo.internal.bindings.display.mojom.ContentProtectionMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.display.mojom.HDCPStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_protection_method', 16, 0, mojo.internal.bindings.display.mojom.ContentProtectionMethodSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParams', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cta', 8, 0, mojo.internal.bindings.display.mojom.ColorTemperatureAdjustmentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetColorCalibration_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_calibration', 8, 0, mojo.internal.bindings.display.mojom.ColorCalibrationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetGammaAdjustment_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_adjustment', 8, 0, mojo.internal.bindings.display.mojom.GammaAdjustmentSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec, 'ui.ozone.mojom.DrmDevice_SetPrivacyScreen_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_Params', [
      mojo.internal.StructField('arg_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec, 'ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParams', [
      mojo.internal.StructField('arg_ranges', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec, 'ui.ozone.mojom.DrmDevice_GetDeviceCursor_Params', [
      mojo.internal.StructField('arg_cursor', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.ui.ozone.mojom.DeviceCursorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ui.ozone.mojom.DrmDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.DrmDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ui.ozone.mojom.DrmDevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWindow(arg_widget, arg_initial_bounds) {
    return this.$.createWindow(arg_widget, arg_initial_bounds);
  }
  destroyWindow(arg_widget) {
    return this.$.destroyWindow(arg_widget);
  }
  setWindowBounds(arg_widget, arg_bounds) {
    return this.$.setWindowBounds(arg_widget, arg_bounds);
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
  addGraphicsDevice(arg_path, arg_fd_mojo_handle) {
    return this.$.addGraphicsDevice(arg_path, arg_fd_mojo_handle);
  }
  removeGraphicsDevice(arg_path) {
    return this.$.removeGraphicsDevice(arg_path);
  }
  shouldDisplayEventTriggerConfiguration(arg_event_props) {
    return this.$.shouldDisplayEventTriggerConfiguration(arg_event_props);
  }
  configureNativeDisplays(arg_config_requests, arg_modeset_flags) {
    return this.$.configureNativeDisplays(arg_config_requests, arg_modeset_flags);
  }
  setHdcpKeyProp(arg_display_id, arg_key) {
    return this.$.setHdcpKeyProp(arg_display_id, arg_key);
  }
  getHDCPState(arg_display_id) {
    return this.$.getHDCPState(arg_display_id);
  }
  setHDCPState(arg_display_id, arg_state, arg_protection_method) {
    return this.$.setHDCPState(arg_display_id, arg_state, arg_protection_method);
  }
  setColorTemperatureAdjustment(arg_display_id, arg_cta) {
    return this.$.setColorTemperatureAdjustment(arg_display_id, arg_cta);
  }
  setColorCalibration(arg_display_id, arg_calibration) {
    return this.$.setColorCalibration(arg_display_id, arg_calibration);
  }
  setGammaAdjustment(arg_display_id, arg_adjustment) {
    return this.$.setGammaAdjustment(arg_display_id, arg_adjustment);
  }
  setPrivacyScreen(arg_display_id, arg_enabled) {
    return this.$.setPrivacyScreen(arg_display_id, arg_enabled);
  }
  getSeamlessRefreshRates(arg_display_id) {
    return this.$.getSeamlessRefreshRates(arg_display_id);
  }
  getDeviceCursor(arg_cursor) {
    return this.$.getDeviceCursor(arg_cursor);
  }
};

mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ui.ozone.mojom.DrmDevice', [
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

  createWindow(arg_widget, arg_initial_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec,
      null,
      [arg_widget, arg_initial_bounds],
      false);
  }

  destroyWindow(arg_widget) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec,
      null,
      [arg_widget],
      false);
  }

  setWindowBounds(arg_widget, arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec,
      null,
      [arg_widget, arg_bounds],
      false);
  }

  takeDisplayControl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  relinquishDisplayControl() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec,
      [],
      false);
  }

  refreshNativeDisplays() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec,
      [],
      false);
  }

  addGraphicsDevice(arg_path, arg_fd_mojo_handle) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec,
      null,
      [arg_path, arg_fd_mojo_handle],
      false);
  }

  removeGraphicsDevice(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec,
      null,
      [arg_path],
      false);
  }

  shouldDisplayEventTriggerConfiguration(arg_event_props) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec,
      [arg_event_props],
      false);
  }

  configureNativeDisplays(arg_config_requests, arg_modeset_flags) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec,
      [arg_config_requests, arg_modeset_flags],
      false);
  }

  setHdcpKeyProp(arg_display_id, arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec,
      [arg_display_id, arg_key],
      false);
  }

  getHDCPState(arg_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec,
      [arg_display_id],
      false);
  }

  setHDCPState(arg_display_id, arg_state, arg_protection_method) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec,
      [arg_display_id, arg_state, arg_protection_method],
      false);
  }

  setColorTemperatureAdjustment(arg_display_id, arg_cta) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec,
      null,
      [arg_display_id, arg_cta],
      false);
  }

  setColorCalibration(arg_display_id, arg_calibration) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec,
      null,
      [arg_display_id, arg_calibration],
      false);
  }

  setGammaAdjustment(arg_display_id, arg_adjustment) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec,
      null,
      [arg_display_id, arg_adjustment],
      false);
  }

  setPrivacyScreen(arg_display_id, arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec,
      [arg_display_id, arg_enabled],
      false);
  }

  getSeamlessRefreshRates(arg_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec,
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec,
      [arg_display_id],
      false);
  }

  getDeviceCursor(arg_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec,
      null,
      [arg_cursor],
      false);
  }

};

mojo.internal.bindings.ui.ozone.mojom.DrmDevice.getRemote = function() {
  let remote = new mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.DrmDevice',
    'context');
  return remote.$;
};

mojo.internal.bindings.ui.ozone.mojom.DrmDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ui.ozone.mojom.DrmDevice', [
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
        
        // Try Method 0: CreateWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_CreateWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWindow');
          const result = this.impl.createWindow(params.arg_widget, params.arg_initial_bounds);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_DestroyWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyWindow');
          const result = this.impl.destroyWindow(params.arg_widget);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetWindowBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowBounds');
          const result = this.impl.setWindowBounds(params.arg_widget, params.arg_bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takeDisplayControl');
          const result = this.impl.takeDisplayControl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_TakeDisplayControl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TakeDisplayControl FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.relinquishDisplayControl');
          const result = this.impl.relinquishDisplayControl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RelinquishDisplayControl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RelinquishDisplayControl FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshNativeDisplays');
          const result = this.impl.refreshNativeDisplays();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RefreshNativeDisplays_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshNativeDisplays FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_AddGraphicsDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addGraphicsDevice');
          const result = this.impl.addGraphicsDevice(params.arg_path, params.arg_fd_mojo_handle);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_RemoveGraphicsDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeGraphicsDevice');
          const result = this.impl.removeGraphicsDevice(params.arg_path);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldDisplayEventTriggerConfiguration');
          const result = this.impl.shouldDisplayEventTriggerConfiguration(params.arg_event_props);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ShouldDisplayEventTriggerConfiguration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldDisplayEventTriggerConfiguration FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.configureNativeDisplays');
          const result = this.impl.configureNativeDisplays(params.arg_config_requests, params.arg_modeset_flags);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_ConfigureNativeDisplays_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ConfigureNativeDisplays FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHdcpKeyProp');
          const result = this.impl.setHdcpKeyProp(params.arg_display_id, params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHdcpKeyProp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetHdcpKeyProp FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHDCPState');
          const result = this.impl.getHDCPState(params.arg_display_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetHDCPState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHDCPState FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHDCPState');
          const result = this.impl.setHDCPState(params.arg_display_id, params.arg_state, params.arg_protection_method);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetHDCPState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetHDCPState FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorTemperatureAdjustment_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorTemperatureAdjustment');
          const result = this.impl.setColorTemperatureAdjustment(params.arg_display_id, params.arg_cta);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetColorCalibration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorCalibration');
          const result = this.impl.setColorCalibration(params.arg_display_id, params.arg_calibration);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetGammaAdjustment_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGammaAdjustment');
          const result = this.impl.setGammaAdjustment(params.arg_display_id, params.arg_adjustment);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPrivacyScreen');
          const result = this.impl.setPrivacyScreen(params.arg_display_id, params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_SetPrivacyScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPrivacyScreen FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSeamlessRefreshRates');
          const result = this.impl.getSeamlessRefreshRates(params.arg_display_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetSeamlessRefreshRates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSeamlessRefreshRates FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.DrmDevice_GetDeviceCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceCursor');
          const result = this.impl.getDeviceCursor(params.arg_cursor);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ui.ozone.mojom.DrmDeviceReceiver = mojo.internal.bindings.ui.ozone.mojom.DrmDeviceReceiver;

mojo.internal.bindings.ui.ozone.mojom.DrmDevicePtr = mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRemote;
mojo.internal.bindings.ui.ozone.mojom.DrmDeviceRequest = mojo.internal.bindings.ui.ozone.mojom.DrmDevicePendingReceiver;

