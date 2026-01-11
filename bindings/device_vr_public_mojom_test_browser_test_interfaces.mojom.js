// Auto-generated MojoJS binding
 // Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
 // Module: device_test.mojom

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
 

 mojo.internal.bindings.device_test = mojo.internal.bindings.device_test || {};
mojo.internal.bindings.device_test.mojom = mojo.internal.bindings.device_test.mojom || {};
mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.device_test.mojom.EyeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device_test.mojom.ControllerRoleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device_test.mojom.EventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device_test.mojom.ColorSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.ViewDataSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.DeviceConfigSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.ControllerAxisDataSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.ControllerFrameDataSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.EventDataSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRVisibilityMaskSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook = {};
mojo.internal.bindings.device_test.mojom.XRTestHook.$interfaceName = 'device_test.mojom.XRTestHook';
mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRServiceTestHook = {};
mojo.internal.bindings.device_test.mojom.XRServiceTestHook.$interfaceName = 'device_test.mojom.XRServiceTestHook';
mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec = { $: {} };

// Enum: Eye
mojo.internal.bindings.device_test.mojom.Eye = {
  LEFT: 1,
  RIGHT: 2,
  NONE: 3,
};

// Enum: ControllerRole
mojo.internal.bindings.device_test.mojom.ControllerRole = {
  kControllerRoleInvalid: 0,
  kControllerRoleLeft: 1,
  kControllerRoleRight: 2,
  kControllerRoleVoice: 3,
};

// Enum: EventType
mojo.internal.bindings.device_test.mojom.EventType = {
  kSessionLost: 0,
  kVisibilityVisibleBlurred: 1,
  kInstanceLost: 2,
  kInteractionProfileChanged: 3,
  kNoEvent: 4,
};

// Struct: Color
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.ColorSpec, 'device_test.mojom.Color', [
      mojo.internal.StructField('arg_r', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_g', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_b', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_a', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewData
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.ViewDataSpec, 'device_test.mojom.ViewData', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_eye', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.EyeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceConfig
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.DeviceConfigSpec, 'device_test.mojom.DeviceConfig', [
      mojo.internal.StructField('arg_interpupillary_distance', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControllerAxisData
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.ControllerAxisDataSpec, 'device_test.mojom.ControllerAxisData', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_axis_type', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ControllerFrameData
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.ControllerFrameDataSpec, 'device_test.mojom.ControllerFrameData', [
      mojo.internal.StructField('arg_buttons_pressed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_buttons_touched', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_supported_buttons', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_axis_data', 24, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ControllerAxisDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pose_data', 32, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_role', 40, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ControllerRoleSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hand_data', 48, 0, mojo.internal.bindings.device.mojom.XRHandTrackingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_packet_number', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_valid', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EventData
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.EventDataSpec, 'device_test.mojom.EventData', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.EventTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_interaction_profile', 8, 0, mojo.internal.bindings.device.mojom.OpenXrInteractionProfileTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRVisibilityMask
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRVisibilityMaskSpec, 'device_test.mojom.XRVisibilityMask', [
      mojo.internal.StructField('arg_vertices', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_indices', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: XRTestHook
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec, 'device_test.mojom.XRTestHook_OnFrameSubmitted_Params', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ViewDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec, 'device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetDeviceConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.DeviceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetPresentingPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetMagicWindowPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.gfx.mojom.TransformSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_Params', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParams', [
      mojo.internal.StructField('arg_role', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ControllerRoleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerData_Params', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.ControllerFrameDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetEventData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetEventData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.EventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetCanCreateSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParams', [
      mojo.internal.StructField('arg_can_create_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetVisibilityMask_Params', [
      mojo.internal.StructField('arg_view_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParams', [
      mojo.internal.StructField('arg_mask', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device_test.mojom.XRVisibilityMaskSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device_test.mojom.XRTestHookPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device_test.mojom.XRTestHookRemote = class {
  static get $interfaceName() {
    return 'device_test.mojom.XRTestHook';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device_test.mojom.XRTestHookPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device_test.mojom.XRTestHookRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameSubmitted(arg_frame_data) {
    return this.$.onFrameSubmitted(arg_frame_data);
  }
  waitGetDeviceConfig() {
    return this.$.waitGetDeviceConfig();
  }
  waitGetPresentingPose() {
    return this.$.waitGetPresentingPose();
  }
  waitGetMagicWindowPose() {
    return this.$.waitGetMagicWindowPose();
  }
  waitGetControllerRoleForTrackedDeviceIndex(arg_index) {
    return this.$.waitGetControllerRoleForTrackedDeviceIndex(arg_index);
  }
  waitGetControllerData(arg_index) {
    return this.$.waitGetControllerData(arg_index);
  }
  waitGetEventData() {
    return this.$.waitGetEventData();
  }
  waitGetCanCreateSession() {
    return this.$.waitGetCanCreateSession();
  }
  waitGetVisibilityMask(arg_view_index) {
    return this.$.waitGetVisibilityMask(arg_view_index);
  }
};

mojo.internal.bindings.device_test.mojom.XRTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRTestHook', [
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

  onFrameSubmitted(arg_frame_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec,
      [arg_frame_data],
      false);
  }

  waitGetDeviceConfig() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec,
      [],
      false);
  }

  waitGetPresentingPose() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetMagicWindowPose() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetControllerRoleForTrackedDeviceIndex(arg_index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec,
      [arg_index],
      false);
  }

  waitGetControllerData(arg_index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec,
      [arg_index],
      false);
  }

  waitGetEventData() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec,
      [],
      false);
  }

  waitGetCanCreateSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec,
      [],
      false);
  }

  waitGetVisibilityMask(arg_view_index) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec,
      [arg_view_index],
      false);
  }

};

mojo.internal.bindings.device_test.mojom.XRTestHook.getRemote = function() {
  let remote = new mojo.internal.bindings.device_test.mojom.XRTestHookRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_test.mojom.XRTestHook',
    'context');
  return remote.$;
};

mojo.internal.bindings.device_test.mojom.XRTestHookReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRTestHook', [
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
        
        // Try Method 0: OnFrameSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameSubmitted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: WaitGetDeviceConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetDeviceConfig (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: WaitGetPresentingPose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetPresentingPose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: WaitGetMagicWindowPose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetMagicWindowPose (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WaitGetControllerRoleForTrackedDeviceIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetControllerRoleForTrackedDeviceIndex (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: WaitGetControllerData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetControllerData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: WaitGetEventData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetEventData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: WaitGetCanCreateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetCanCreateSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: WaitGetVisibilityMask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetVisibilityMask (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameSubmitted');
          const result = this.impl.onFrameSubmitted(params.arg_frame_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnFrameSubmitted FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetDeviceConfig');
          const result = this.impl.waitGetDeviceConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetDeviceConfig FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetPresentingPose');
          const result = this.impl.waitGetPresentingPose();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetPresentingPose FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetMagicWindowPose');
          const result = this.impl.waitGetMagicWindowPose();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetMagicWindowPose FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetControllerRoleForTrackedDeviceIndex');
          const result = this.impl.waitGetControllerRoleForTrackedDeviceIndex(params.arg_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetControllerRoleForTrackedDeviceIndex FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetControllerData');
          const result = this.impl.waitGetControllerData(params.arg_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetControllerData FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetEventData');
          const result = this.impl.waitGetEventData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetEventData FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetCanCreateSession');
          const result = this.impl.waitGetCanCreateSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetCanCreateSession FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitGetVisibilityMask');
          const result = this.impl.waitGetVisibilityMask(params.arg_view_index);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitGetVisibilityMask FAILED:', e));
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

mojo.internal.bindings.device_test.mojom.XRTestHookReceiver = mojo.internal.bindings.device_test.mojom.XRTestHookReceiver;

mojo.internal.bindings.device_test.mojom.XRTestHookPtr = mojo.internal.bindings.device_test.mojom.XRTestHookRemote;
mojo.internal.bindings.device_test.mojom.XRTestHookRequest = mojo.internal.bindings.device_test.mojom.XRTestHookPendingReceiver;


// Interface: XRServiceTestHook
mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec, 'device_test.mojom.XRServiceTestHook_SetTestHook_Params', [
      mojo.internal.StructField('arg_hook', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device_test.mojom.XRTestHookSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec, 'device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec, 'device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec, 'device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device_test.mojom.XRServiceTestHookPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemote = class {
  static get $interfaceName() {
    return 'device_test.mojom.XRServiceTestHook';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device_test.mojom.XRServiceTestHookPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTestHook(arg_hook) {
    return this.$.setTestHook(arg_hook);
  }
  terminateDeviceServiceProcessForTesting() {
    return this.$.terminateDeviceServiceProcessForTesting();
  }
};

mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRServiceTestHook', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setTestHook(arg_hook) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec,
      [arg_hook],
      false);
  }

  terminateDeviceServiceProcessForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec,
      mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device_test.mojom.XRServiceTestHook.getRemote = function() {
  let remote = new mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_test.mojom.XRServiceTestHook',
    'context');
  return remote.$;
};

mojo.internal.bindings.device_test.mojom.XRServiceTestHookReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRServiceTestHook', [
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
        
        // Try Method 0: SetTestHook
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTestHook (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TerminateDeviceServiceProcessForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TerminateDeviceServiceProcessForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTestHook');
          const result = this.impl.setTestHook(params.arg_hook);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetTestHook FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.terminateDeviceServiceProcessForTesting');
          const result = this.impl.terminateDeviceServiceProcessForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TerminateDeviceServiceProcessForTesting FAILED:', e));
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

mojo.internal.bindings.device_test.mojom.XRServiceTestHookReceiver = mojo.internal.bindings.device_test.mojom.XRServiceTestHookReceiver;

mojo.internal.bindings.device_test.mojom.XRServiceTestHookPtr = mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemote;
mojo.internal.bindings.device_test.mojom.XRServiceTestHookRequest = mojo.internal.bindings.device_test.mojom.XRServiceTestHookPendingReceiver;

