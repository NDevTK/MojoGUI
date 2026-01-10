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
var device = device || {};
device.mojom = device.mojom || {};
var device_test = device_test || {};
var gpu = gpu || {};
var sandbox = sandbox || {};
var viz = viz || {};
var gfx = gfx || {};

device.mojom.XRRuntimeSessionOptionsSpec = { $: {} };
device.mojom.XRRuntimeSessionResultSpec = { $: {} };
device.mojom.XRDeviceDataSpec = { $: {} };
device.mojom.XRSessionController = {};
device.mojom.XRSessionController.$interfaceName = 'device.mojom.XRSessionController';
device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec = { $: {} };
device.mojom.XRRuntimeEventListener = {};
device.mojom.XRRuntimeEventListener.$interfaceName = 'device.mojom.XRRuntimeEventListener';
device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec = { $: {} };
device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec = { $: {} };
device.mojom.XRRuntime = {};
device.mojom.XRRuntime.$interfaceName = 'device.mojom.XRRuntime';
device.mojom.XRRuntime_RequestSession_ParamsSpec = { $: {} };
device.mojom.XRRuntime_RequestSession_ResponseParamsSpec = { $: {} };
device.mojom.XRRuntime_ShutdownSession_ParamsSpec = { $: {} };
device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec = { $: {} };
device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay = {};
device.mojom.ImmersiveOverlay.$interfaceName = 'device.mojom.ImmersiveOverlay';
device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec = { $: {} };
device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient = {};
device.mojom.IsolatedXRRuntimeProviderClient.$interfaceName = 'device.mojom.IsolatedXRRuntimeProviderClient';
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec = { $: {} };
device.mojom.IsolatedXRRuntimeProvider = {};
device.mojom.IsolatedXRRuntimeProvider.$interfaceName = 'device.mojom.IsolatedXRRuntimeProvider';
device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec = { $: {} };
device.mojom.XRDeviceService = {};
device.mojom.XRDeviceService.$interfaceName = 'device.mojom.XRDeviceService';
device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec = { $: {} };
device.mojom.XRDeviceService_BindTestHook_ParamsSpec = { $: {} };
device.mojom.XRDeviceServiceHost = {};
device.mojom.XRDeviceServiceHost.$interfaceName = 'device.mojom.XRDeviceServiceHost';
device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec = { $: {} };

device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kXrCompositing;

device.mojom.kXrSandbox = sandbox.mojom.Sandbox.kUtility;

// Struct: XRRuntimeSessionOptions
mojo.internal.Struct(
    device.mojom.XRRuntimeSessionOptionsSpec, 'device.mojom.XRRuntimeSessionOptions', [
      mojo.internal.StructField('mode', 0, 0, device.mojom.XRSessionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('required_features', 8, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('optional_features', 16, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tracked_images', 24, 0, mojo.internal.Array(device.mojom.XRTrackedImageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('depth_options', 32, 0, device.mojom.XRDepthOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('render_process_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('render_frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: XRRuntimeSessionResult
mojo.internal.Struct(
    device.mojom.XRRuntimeSessionResultSpec, 'device.mojom.XRRuntimeSessionResult', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRSessionControllerSpec), null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, device.mojom.XRSessionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 16, 0, viz.mojom.FrameSinkIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('overlay', 24, 0, mojo.internal.InterfaceProxy(device.mojom.ImmersiveOverlaySpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XRDeviceData
mojo.internal.Struct(
    device.mojom.XRDeviceDataSpec, 'device.mojom.XRDeviceData', [
      mojo.internal.StructField('supported_features', 0, 0, mojo.internal.Array(device.mojom.XRSessionFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('luid', 8, 0, gpu.mojom.LuidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_ar_blend_mode_supported', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: XRSessionController
mojo.internal.Struct(
    device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec, 'device.mojom.XRSessionController_SetFrameDataRestricted_Params', [
      mojo.internal.StructField('restricted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRSessionControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRSessionControllerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRSessionController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRSessionControllerPendingReceiver,
      handle);
    this.$ = new device.mojom.XRSessionControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFrameDataRestricted(restricted) {
    return this.$.setFrameDataRestricted(restricted);
  }
};

device.mojom.XRSessionControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRSessionController', [
      { explicit: null },
    ]);
  }

  setFrameDataRestricted(restricted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec,
      null,
      [restricted],
      false);
  }

};

device.mojom.XRSessionController.getRemote = function() {
  let remote = new device.mojom.XRSessionControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRSessionController',
    'context');
  return remote.$;
};

device.mojom.XRSessionControllerReceiver = class {
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
             decoder.decodeStructInline(device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.XRSessionController_SetFrameDataRestricted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameDataRestricted');
          const result = this.impl.setFrameDataRestricted(params.restricted);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.XRSessionControllerReceiver = device.mojom.XRSessionControllerReceiver;

device.mojom.XRSessionControllerPtr = device.mojom.XRSessionControllerRemote;
device.mojom.XRSessionControllerRequest = device.mojom.XRSessionControllerPendingReceiver;


// Interface: XRRuntimeEventListener
mojo.internal.Struct(
    device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_Params', [
      mojo.internal.StructField('visibility_state', 0, 0, device.mojom.XRVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec, 'device.mojom.XRRuntimeEventListener_OnExitPresent_Params', [
    ],
    [[0, 8]]);

device.mojom.XRRuntimeEventListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRRuntimeEventListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntimeEventListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRRuntimeEventListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.XRRuntimeEventListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVisibilityStateChanged(visibility_state) {
    return this.$.onVisibilityStateChanged(visibility_state);
  }
  onExitPresent() {
    return this.$.onExitPresent();
  }
};

device.mojom.XRRuntimeEventListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntimeEventListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onVisibilityStateChanged(visibility_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec,
      null,
      [visibility_state],
      false);
  }

  onExitPresent() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.XRRuntimeEventListener.getRemote = function() {
  let remote = new device.mojom.XRRuntimeEventListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntimeEventListener',
    'context');
  return remote.$;
};

device.mojom.XRRuntimeEventListenerReceiver = class {
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
             decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnVisibilityStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityStateChanged');
          const result = this.impl.onVisibilityStateChanged(params.visibility_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntimeEventListener_OnExitPresent_ParamsSpec.$.structSpec);
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

device.mojom.XRRuntimeEventListenerReceiver = device.mojom.XRRuntimeEventListenerReceiver;

device.mojom.XRRuntimeEventListenerPtr = device.mojom.XRRuntimeEventListenerRemote;
device.mojom.XRRuntimeEventListenerRequest = device.mojom.XRRuntimeEventListenerPendingReceiver;


// Interface: XRRuntime
mojo.internal.Struct(
    device.mojom.XRRuntime_RequestSession_ParamsSpec, 'device.mojom.XRRuntime_RequestSession_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.XRRuntimeSessionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_RequestSession_ResponseParamsSpec, 'device.mojom.XRRuntime_RequestSession_ResponseParams', [
      mojo.internal.StructField('session', 0, 0, device.mojom.XRRuntimeSessionResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ShutdownSession_ParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec, 'device.mojom.XRRuntime_ShutdownSession_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec, 'device.mojom.XRRuntime_ListenToDeviceChanges_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRRuntimePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRRuntimeRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRRuntime';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRRuntimePendingReceiver,
      handle);
    this.$ = new device.mojom.XRRuntimeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestSession(options) {
    return this.$.requestSession(options);
  }
  shutdownSession() {
    return this.$.shutdownSession();
  }
  listenToDeviceChanges(listener) {
    return this.$.listenToDeviceChanges(listener);
  }
};

device.mojom.XRRuntimeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRRuntime', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestSession(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRRuntime_RequestSession_ParamsSpec,
      device.mojom.XRRuntime_RequestSession_ResponseParamsSpec,
      [options],
      false);
  }

  shutdownSession() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRRuntime_ShutdownSession_ParamsSpec,
      device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec,
      [],
      false);
  }

  listenToDeviceChanges(listener) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec,
      null,
      [listener],
      false);
  }

};

device.mojom.XRRuntime.getRemote = function() {
  let remote = new device.mojom.XRRuntimeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRRuntime',
    'context');
  return remote.$;
};

device.mojom.XRRuntimeReceiver = class {
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
             decoder.decodeStructInline(device.mojom.XRRuntime_RequestSession_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.XRRuntime_ShutdownSession_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_RequestSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSession');
          const result = this.impl.requestSession(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRRuntime_RequestSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_ShutdownSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shutdownSession');
          const result = this.impl.shutdownSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.XRRuntime_ShutdownSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRRuntime_ListenToDeviceChanges_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listenToDeviceChanges');
          const result = this.impl.listenToDeviceChanges(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.XRRuntimeReceiver = device.mojom.XRRuntimeReceiver;

device.mojom.XRRuntimePtr = device.mojom.XRRuntimeRemote;
device.mojom.XRRuntimeRequest = device.mojom.XRRuntimePendingReceiver;


// Interface: ImmersiveOverlay
mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParams', [
      mojo.internal.StructField('render_info', 0, 0, device.mojom.XRRenderInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_Params', [
      mojo.internal.StructField('texture', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('left_bounds', 16, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('right_bounds', 24, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 32, 0, mojo.internal.Int16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec, 'device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_Params', [
      mojo.internal.StructField('overlay_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webxr_visible', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec, 'device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParams', [
    ],
    [[0, 8]]);

device.mojom.ImmersiveOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ImmersiveOverlayRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ImmersiveOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ImmersiveOverlayPendingReceiver,
      handle);
    this.$ = new device.mojom.ImmersiveOverlayRemoteCallHandler(this.proxy);
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
  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    return this.$.submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds);
  }
  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    return this.$.setOverlayAndWebXRVisibility(overlay_visible, webxr_visible);
  }
  requestNotificationOnWebXrSubmitted() {
    return this.$.requestNotificationOnWebXrSubmitted();
  }
};

device.mojom.ImmersiveOverlayRemoteCallHandler = class {
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
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec,
      device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec,
      [],
      false);
  }

  submitOverlayTexture(frame_id, texture, sync_token, left_bounds, right_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec,
      device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec,
      [frame_id, texture, sync_token, left_bounds, right_bounds],
      false);
  }

  setOverlayAndWebXRVisibility(overlay_visible, webxr_visible) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec,
      null,
      [overlay_visible, webxr_visible],
      false);
  }

  requestNotificationOnWebXrSubmitted() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec,
      device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.ImmersiveOverlay.getRemote = function() {
  let remote = new device.mojom.ImmersiveOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ImmersiveOverlay',
    'context');
  return remote.$;
};

device.mojom.ImmersiveOverlayReceiver = class {
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
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNextOverlayPose');
          const result = this.impl.requestNextOverlayPose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_RequestNextOverlayPose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitOverlayTexture');
          const result = this.impl.submitOverlayTexture(params.frame_id, params.texture, params.sync_token, params.left_bounds, params.right_bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_SubmitOverlayTexture_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_SetOverlayAndWebXRVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOverlayAndWebXRVisibility');
          const result = this.impl.setOverlayAndWebXRVisibility(params.overlay_visible, params.webxr_visible);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestNotificationOnWebXrSubmitted');
          const result = this.impl.requestNotificationOnWebXrSubmitted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ImmersiveOverlay_RequestNotificationOnWebXrSubmitted_ResponseParamsSpec);
               responder(response);
            });
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

device.mojom.ImmersiveOverlayReceiver = device.mojom.ImmersiveOverlayReceiver;

device.mojom.ImmersiveOverlayPtr = device.mojom.ImmersiveOverlayRemote;
device.mojom.ImmersiveOverlayRequest = device.mojom.ImmersiveOverlayPendingReceiver;


// Interface: IsolatedXRRuntimeProviderClient
mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('runtime', 0, 0, mojo.internal.InterfaceProxy(device.mojom.XRRuntimeSpec), null, false, 0, undefined),
      mojo.internal.StructField('device_data', 8, 0, device.mojom.XRDeviceDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 16, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('device_index', 0, 0, device.mojom.XRDeviceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_Params', [
    ],
    [[0, 8]]);

device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.IsolatedXRRuntimeProviderClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProviderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver,
      handle);
    this.$ = new device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDeviceAdded(runtime, device_data, device_id) {
    return this.$.onDeviceAdded(runtime, device_data, device_id);
  }
  onDeviceRemoved(device_index) {
    return this.$.onDeviceRemoved(device_index);
  }
  onDevicesEnumerated() {
    return this.$.onDevicesEnumerated();
  }
};

device.mojom.IsolatedXRRuntimeProviderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProviderClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onDeviceAdded(runtime, device_data, device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec,
      null,
      [runtime, device_data, device_id],
      false);
  }

  onDeviceRemoved(device_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_index],
      false);
  }

  onDevicesEnumerated() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.IsolatedXRRuntimeProviderClient.getRemote = function() {
  let remote = new device.mojom.IsolatedXRRuntimeProviderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProviderClient',
    'context');
  return remote.$;
};

device.mojom.IsolatedXRRuntimeProviderClientReceiver = class {
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceAdded');
          const result = this.impl.onDeviceAdded(params.runtime, params.device_data, params.device_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDeviceRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDeviceRemoved');
          const result = this.impl.onDeviceRemoved(params.device_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProviderClient_OnDevicesEnumerated_ParamsSpec.$.structSpec);
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

device.mojom.IsolatedXRRuntimeProviderClientReceiver = device.mojom.IsolatedXRRuntimeProviderClientReceiver;

device.mojom.IsolatedXRRuntimeProviderClientPtr = device.mojom.IsolatedXRRuntimeProviderClientRemote;
device.mojom.IsolatedXRRuntimeProviderClientRequest = device.mojom.IsolatedXRRuntimeProviderClientPendingReceiver;


// Interface: IsolatedXRRuntimeProvider
mojo.internal.Struct(
    device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec, 'device.mojom.IsolatedXRRuntimeProvider_RequestDevices_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.IsolatedXRRuntimeProviderClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.IsolatedXRRuntimeProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.IsolatedXRRuntimeProviderRemote = class {
  static get $interfaceName() {
    return 'device.mojom.IsolatedXRRuntimeProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.IsolatedXRRuntimeProviderPendingReceiver,
      handle);
    this.$ = new device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestDevices(client) {
    return this.$.requestDevices(client);
  }
};

device.mojom.IsolatedXRRuntimeProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IsolatedXRRuntimeProvider', [
      { explicit: null },
    ]);
  }

  requestDevices(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec,
      null,
      [client],
      false);
  }

};

device.mojom.IsolatedXRRuntimeProvider.getRemote = function() {
  let remote = new device.mojom.IsolatedXRRuntimeProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.IsolatedXRRuntimeProvider',
    'context');
  return remote.$;
};

device.mojom.IsolatedXRRuntimeProviderReceiver = class {
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
             decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.IsolatedXRRuntimeProvider_RequestDevices_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDevices');
          const result = this.impl.requestDevices(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.IsolatedXRRuntimeProviderReceiver = device.mojom.IsolatedXRRuntimeProviderReceiver;

device.mojom.IsolatedXRRuntimeProviderPtr = device.mojom.IsolatedXRRuntimeProviderRemote;
device.mojom.IsolatedXRRuntimeProviderRequest = device.mojom.IsolatedXRRuntimeProviderPendingReceiver;


// Interface: XRDeviceService
mojo.internal.Struct(
    device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec, 'device.mojom.XRDeviceService_BindRuntimeProvider_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.IsolatedXRRuntimeProviderSpec), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(device.mojom.XRDeviceServiceHostSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.XRDeviceService_BindTestHook_ParamsSpec, 'device.mojom.XRDeviceService_BindTestHook_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device_test.mojom.XRServiceTestHookRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRDeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRDeviceServiceRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRDeviceServicePendingReceiver,
      handle);
    this.$ = new device.mojom.XRDeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindRuntimeProvider(receiver, host) {
    return this.$.bindRuntimeProvider(receiver, host);
  }
  bindTestHook(receiver) {
    return this.$.bindTestHook(receiver);
  }
};

device.mojom.XRDeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindRuntimeProvider(receiver, host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec,
      null,
      [receiver, host],
      false);
  }

  bindTestHook(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.XRDeviceService_BindTestHook_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.XRDeviceService.getRemote = function() {
  let remote = new device.mojom.XRDeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceService',
    'context');
  return remote.$;
};

device.mojom.XRDeviceServiceReceiver = class {
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
             decoder.decodeStructInline(device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.XRDeviceService_BindTestHook_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.XRDeviceService_BindRuntimeProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindRuntimeProvider');
          const result = this.impl.bindRuntimeProvider(params.receiver, params.host);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.XRDeviceService_BindTestHook_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindTestHook');
          const result = this.impl.bindTestHook(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.XRDeviceServiceReceiver = device.mojom.XRDeviceServiceReceiver;

device.mojom.XRDeviceServicePtr = device.mojom.XRDeviceServiceRemote;
device.mojom.XRDeviceServiceRequest = device.mojom.XRDeviceServicePendingReceiver;


// Interface: XRDeviceServiceHost
mojo.internal.Struct(
    device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec, 'device.mojom.XRDeviceServiceHost_BindGpu_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.GpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.XRDeviceServiceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.XRDeviceServiceHostRemote = class {
  static get $interfaceName() {
    return 'device.mojom.XRDeviceServiceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.XRDeviceServiceHostPendingReceiver,
      handle);
    this.$ = new device.mojom.XRDeviceServiceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindGpu(receiver) {
    return this.$.bindGpu(receiver);
  }
};

device.mojom.XRDeviceServiceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRDeviceServiceHost', [
      { explicit: null },
    ]);
  }

  bindGpu(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

device.mojom.XRDeviceServiceHost.getRemote = function() {
  let remote = new device.mojom.XRDeviceServiceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.XRDeviceServiceHost',
    'context');
  return remote.$;
};

device.mojom.XRDeviceServiceHostReceiver = class {
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
             decoder.decodeStructInline(device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.XRDeviceServiceHost_BindGpu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGpu');
          const result = this.impl.bindGpu(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.XRDeviceServiceHostReceiver = device.mojom.XRDeviceServiceHostReceiver;

device.mojom.XRDeviceServiceHostPtr = device.mojom.XRDeviceServiceHostRemote;
device.mojom.XRDeviceServiceHostRequest = device.mojom.XRDeviceServiceHostPendingReceiver;

