// Auto-generated MojoJS binding
 // Source: chromium_src/device/vr/public/mojom/isolated_xr_service.mojom
 // Module: device.mojom

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
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.device_test = mojo.internal.bindings.device_test || {};
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.device.mojom.XRRuntimeSessionOptionsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntimeSessionResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDeviceDataSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRSessionController = {};
mojo.internal.bindings.device.mojom.XRSessionController.$interfaceName = 'device.mojom.XRSessionController';
mojo.internal.bindings.device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntimeEventListener = {};
mojo.internal.bindings.device.mojom.XRRuntimeEventListener.$interfaceName = 'device.mojom.XRRuntimeEventListener';
mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntime = {};
mojo.internal.bindings.device.mojom.XRRuntime.$interfaceName = 'device.mojom.XRRuntime';
mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay = {};
mojo.internal.bindings.device.mojom.ImmersiveOverlay.$interfaceName = 'device.mojom.ImmersiveOverlay';
mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient = {};
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient.$interfaceName = 'device.mojom.IsolatedXRRuntimeProviderClient';
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider = {};
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider.$interfaceName = 'device.mojom.IsolatedXRRuntimeProvider';
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDeviceService = {};
mojo.internal.bindings.device.mojom.XRDeviceService.$interfaceName = 'device.mojom.XRDeviceService';
mojo.internal.bindings.device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDeviceService_BindTestHook_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.XRDeviceServiceHost = {};
mojo.internal.bindings.device.mojom.XRDeviceServiceHost.$interfaceName = 'device.mojom.XRDeviceServiceHost';
mojo.internal.bindings.device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec = { $: {} };

mojo.internal.bindings.device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kXrCompositing;

mojo.internal.bindings.device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kUtility;

// Struct: XRRuntimeSessionOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntimeSessionOptionsSpec, 'device.mojom.XRRuntimeSessionOptions', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.device.mojom.XRSessionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_required_features', 8, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_features', 16, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tracked_images', 24, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRTrackedImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_depth_options', 32, 0, mojo.internal.bindings.device.mojom.XRDepthOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_render_process_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_render_frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XRRuntimeSessionResult
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntimeSessionResultSpec, 'device.mojom.XRRuntimeSessionResult', [
      mojo.internal.StructField('arg_controller', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRSessionControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.bindings.device.mojom.XRSessionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 16, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_overlay', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.ImmersiveOverlaySpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRDeviceData
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDeviceDataSpec, 'device.mojom.XRDeviceData', [
      mojo.internal.StructField('arg_supported_features', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_luid', 8, 0, mojo.internal.bindings.gpu.mojom.LuidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_ar_blend_mode_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: XRSessionController
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec, 'device.mojom.XRSessionController_SetFrameDataRestricted_Params', [
      mojo.internal.StructField('arg_restricted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRSessionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRSessionControllerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRSessionControllerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRSessionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFrameDataRestricted(arg_restricted) {
    return this.$.setFrameDataRestricted(arg_restricted);
  }
};

mojo.internal.bindings.device.mojom.XRSessionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionController', [
      { explicit: null },
    ]);
  }

  setFrameDataRestricted(arg_restricted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec,
      null,
      [arg_restricted],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRSessionController.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRSessionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionController',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRSessionControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRSessionController', [
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
        
        // Try Method 0: SetFrameDataRestricted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameDataRestricted (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameDataRestricted');
          const result = this.impl.setFrameDataRestricted(params.arg_restricted);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRSessionControllerReceiver = mojo.internal.bindings.device.mojom.XRSessionControllerReceiver;

mojo.internal.bindings.device.mojom.XRSessionControllerPtr = mojo.internal.bindings.device.mojom.XRSessionControllerRemote;
mojo.internal.bindings.device.mojom.XRSessionControllerRequest = mojo.internal.bindings.device.mojom.XRSessionControllerPendingReceiver;


// Interface: XRRuntimeEventListener
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('arg_visibility_state', 0, 0, mojo.internal.bindings.device.mojom.XRVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnExitPresent_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntimeEventListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRRuntimeEventListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVisibilityStateChanged(arg_visibility_state) {
    return this.$.onVisibilityStateChanged(arg_visibility_state);
  }
  onExitPresent() {
    return this.$.onExitPresent();
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntimeEventListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onVisibilityStateChanged(arg_visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec,
      null,
      [arg_visibility_state],
      false);
  }

  onExitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRRuntimeEventListener.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntimeEventListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRRuntimeEventListener', [
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
        
        // Try Method 0: OnVisibilityStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnExitPresent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnExitPresent (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityStateChanged');
          const result = this.impl.onVisibilityStateChanged(params.arg_visibility_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onExitPresent');
          const result = this.impl.onExitPresent();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerReceiver = mojo.internal.bindings.device.mojom.XRRuntimeEventListenerReceiver;

mojo.internal.bindings.device.mojom.XRRuntimeEventListenerPtr = mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRemote;
mojo.internal.bindings.device.mojom.XRRuntimeEventListenerRequest = mojo.internal.bindings.device.mojom.XRRuntimeEventListenerPendingReceiver;


// Interface: XRRuntime
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ParamsSpec, 'device.mojom.XRRuntime_RequestSession_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRRuntimeSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ResponseParamsSpec, 'device.mojom.XRRuntime_RequestSession_ResponseParams', [
      mojo.internal.StructField('arg_session', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRRuntimeSessionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec, 'device.mojom.XRRuntime_ListenToDeviceChanges_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRRuntimePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntime';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRRuntimePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRRuntimeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestSession(arg_options) {
    return this.$.requestSession(arg_options);
  }
  shutdownSession() {
    return this.$.shutdownSession();
  }
  listenToDeviceChanges(arg_listener) {
    return this.$.listenToDeviceChanges(arg_listener);
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntime', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestSession(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ResponseParamsSpec,
      [arg_options],
      false);
  }

  shutdownSession() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ParamsSpec,
      mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec,
      [],
      false);
  }

  listenToDeviceChanges(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRRuntime.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRRuntimeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntime',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRRuntimeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRRuntime', [
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
        
        // Try Method 0: RequestSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShutdownSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShutdownSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ListenToDeviceChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListenToDeviceChanges (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSession');
          const result = this.impl.requestSession(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XRRuntime_RequestSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestSession FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shutdownSession');
          const result = this.impl.shutdownSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShutdownSession FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listenToDeviceChanges');
          const result = this.impl.listenToDeviceChanges(params.arg_listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRRuntimeReceiver = mojo.internal.bindings.device.mojom.XRRuntimeReceiver;

mojo.internal.bindings.device.mojom.XRRuntimePtr = mojo.internal.bindings.device.mojom.XRRuntimeRemote;
mojo.internal.bindings.device.mojom.XRRuntimeRequest = mojo.internal.bindings.device.mojom.XRRuntimePendingReceiver;


// Interface: ImmersiveOverlay
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParams', [
      mojo.internal.StructField('arg_render_info', 0, 0, mojo.internal.bindings.device.mojom.XRRenderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_Params', [
      mojo.internal.StructField('arg_texture', 0, 0, mojo.internal.bindings.gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sync_token', 8, 0, mojo.internal.bindings.gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_left_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_right_bounds', 24, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 32, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec, 'device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_Params', [
      mojo.internal.StructField('arg_overlay_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_webxr_visible', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.ImmersiveOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.ImmersiveOverlayRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ImmersiveOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.ImmersiveOverlayPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.ImmersiveOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestNextOverlayPose() {
    return this.$.requestNextOverlayPose();
  }
  submitOverlayTexture(arg_frame_id, arg_texture, arg_sync_token, arg_left_bounds, arg_right_bounds) {
    return this.$.submitOverlayTexture(arg_frame_id, arg_texture, arg_sync_token, arg_left_bounds, arg_right_bounds);
  }
  setOverlayAndWebXRVisibility(arg_overlay_visible, arg_webxr_visible) {
    return this.$.setOverlayAndWebXRVisibility(arg_overlay_visible, arg_webxr_visible);
  }
  requestNotificationOnWebXrSubmitted() {
    return this.$.requestNotificationOnWebXrSubmitted();
  }
};

mojo.internal.bindings.device.mojom.ImmersiveOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImmersiveOverlay', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestNextOverlayPose() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec,
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec,
      [],
      false);
  }

  submitOverlayTexture(arg_frame_id, arg_texture, arg_sync_token, arg_left_bounds, arg_right_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec,
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec,
      [arg_frame_id, arg_texture, arg_sync_token, arg_left_bounds, arg_right_bounds],
      false);
  }

  setOverlayAndWebXRVisibility(arg_overlay_visible, arg_webxr_visible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec,
      null,
      [arg_overlay_visible, arg_webxr_visible],
      false);
  }

  requestNotificationOnWebXrSubmitted() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec,
      mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.ImmersiveOverlay.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.ImmersiveOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ImmersiveOverlay',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.ImmersiveOverlayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImmersiveOverlay', [
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
        
        // Try Method 0: RequestNextOverlayPose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNextOverlayPose (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SubmitOverlayTexture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitOverlayTexture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetOverlayAndWebXRVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOverlayAndWebXRVisibility (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestNotificationOnWebXrSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestNotificationOnWebXrSubmitted (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNextOverlayPose');
          const result = this.impl.requestNextOverlayPose();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestNextOverlayPose FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitOverlayTexture');
          const result = this.impl.submitOverlayTexture(params.arg_frame_id, params.arg_texture, params.arg_sync_token, params.arg_left_bounds, params.arg_right_bounds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubmitOverlayTexture FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOverlayAndWebXRVisibility');
          const result = this.impl.setOverlayAndWebXRVisibility(params.arg_overlay_visible, params.arg_webxr_visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotificationOnWebXrSubmitted');
          const result = this.impl.requestNotificationOnWebXrSubmitted();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestNotificationOnWebXrSubmitted FAILED:', e));
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

mojo.internal.bindings.device.mojom.ImmersiveOverlayReceiver = mojo.internal.bindings.device.mojom.ImmersiveOverlayReceiver;

mojo.internal.bindings.device.mojom.ImmersiveOverlayPtr = mojo.internal.bindings.device.mojom.ImmersiveOverlayRemote;
mojo.internal.bindings.device.mojom.ImmersiveOverlayRequest = mojo.internal.bindings.device.mojom.ImmersiveOverlayPendingReceiver;


// Interface: IsolatedXRRuntimeProviderClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('arg_runtime', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRRuntimeSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_device_data', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.XRDeviceDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 16, 0, mojo.internal.bindings.device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('arg_device_index', 0, 0, mojo.internal.bindings.device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceAdded(arg_runtime, arg_device_data, arg_device_id) {
    return this.$.onDeviceAdded(arg_runtime, arg_device_data, arg_device_id);
  }
  onDeviceRemoved(arg_device_index) {
    return this.$.onDeviceRemoved(arg_device_index);
  }
  onDevicesEnumerated() {
    return this.$.onDevicesEnumerated();
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProviderClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceAdded(arg_runtime, arg_device_data, arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec,
      null,
      [arg_runtime, arg_device_data, arg_device_id],
      false);
  }

  onDeviceRemoved(arg_device_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec,
      null,
      [arg_device_index],
      false);
  }

  onDevicesEnumerated() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProviderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProviderClient', [
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
        
        // Try Method 0: OnDeviceAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnDeviceRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDeviceRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDevicesEnumerated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDevicesEnumerated (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceAdded');
          const result = this.impl.onDeviceAdded(params.arg_runtime, params.arg_device_data, params.arg_device_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRemoved');
          const result = this.impl.onDeviceRemoved(params.arg_device_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDevicesEnumerated');
          const result = this.impl.onDevicesEnumerated();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientReceiver = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientReceiver;

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientPtr = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRemote;
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientRequest = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver;


// Interface: IsolatedXRRuntimeProvider
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProvider_RequestDevices_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestDevices(arg_client) {
    return this.$.requestDevices(arg_client);
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProvider', [
      { explicit: null },
    ]);
  }

  requestDevices(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec,
      null,
      [arg_client],
      false);
  }

};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProvider', [
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
        
        // Try Method 0: RequestDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDevices (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDevices');
          const result = this.impl.requestDevices(params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderReceiver = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderReceiver;

mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderPtr = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRemote;
mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderRequest = mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderPendingReceiver;


// Interface: XRDeviceService
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec, 'device.mojom.XRDeviceService_BindRuntimeProvider_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device.mojom.IsolatedXRRuntimeProviderSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.XRDeviceServiceHostSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDeviceService_BindTestHook_ParamsSpec, 'device.mojom.XRDeviceService_BindTestHook_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.device_test.mojom.XRServiceTestHookRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRDeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRDeviceServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRDeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindRuntimeProvider(arg_receiver, arg_host) {
    return this.$.bindRuntimeProvider(arg_receiver, arg_host);
  }
  bindTestHook(arg_receiver) {
    return this.$.bindTestHook(arg_receiver);
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindRuntimeProvider(arg_receiver, arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec,
      null,
      [arg_receiver, arg_host],
      false);
  }

  bindTestHook(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.XRDeviceService_BindTestHook_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRDeviceService.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRDeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceService',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRDeviceServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRDeviceService', [
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
        
        // Try Method 0: BindRuntimeProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindRuntimeProvider (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindTestHook
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceService_BindTestHook_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestHook (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindRuntimeProvider');
          const result = this.impl.bindRuntimeProvider(params.arg_receiver, params.arg_host);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceService_BindTestHook_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTestHook');
          const result = this.impl.bindTestHook(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceReceiver = mojo.internal.bindings.device.mojom.XRDeviceServiceReceiver;

mojo.internal.bindings.device.mojom.XRDeviceServicePtr = mojo.internal.bindings.device.mojom.XRDeviceServiceRemote;
mojo.internal.bindings.device.mojom.XRDeviceServiceRequest = mojo.internal.bindings.device.mojom.XRDeviceServicePendingReceiver;


// Interface: XRDeviceServiceHost
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec, 'device.mojom.XRDeviceServiceHost_BindGpu_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.GpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.XRDeviceServiceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceHostRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceServiceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.XRDeviceServiceHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.XRDeviceServiceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindGpu(arg_receiver) {
    return this.$.bindGpu(arg_receiver);
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceServiceHost', [
      { explicit: null },
    ]);
  }

  bindGpu(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.device.mojom.XRDeviceServiceHost.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.XRDeviceServiceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceServiceHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.XRDeviceServiceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XRDeviceServiceHost', [
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
        
        // Try Method 0: BindGpu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGpu (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGpu');
          const result = this.impl.bindGpu(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.XRDeviceServiceHostReceiver = mojo.internal.bindings.device.mojom.XRDeviceServiceHostReceiver;

mojo.internal.bindings.device.mojom.XRDeviceServiceHostPtr = mojo.internal.bindings.device.mojom.XRDeviceServiceHostRemote;
mojo.internal.bindings.device.mojom.XRDeviceServiceHostRequest = mojo.internal.bindings.device.mojom.XRDeviceServiceHostPendingReceiver;

