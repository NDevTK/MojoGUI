// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/video/chromeos/mojom/cros_camera_service.mojom
 // Module: cros.mojom

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
 

 mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};
mojo.internal.bindings.cros.mojom = mojo.internal.bindings.cros.mojom || {};
mojo.internal.bindings.chromeos_camera = mojo.internal.bindings.chromeos_camera || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.cros.mojom.CameraClientTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.CameraPrivacySwitchStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.CameraAutoFramingStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.KioskVisionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.cros.mojom.KioskVisionDetectionSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionTrackSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionAppearanceSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionFaceDetectionSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionBodyDetectionSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionBoundingBoxSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionObserver = {};
mojo.internal.bindings.cros.mojom.KioskVisionObserver.$interfaceName = 'cros.mojom.KioskVisionObserver';
mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraHalDispatcher = {};
mojo.internal.bindings.cros.mojom.CameraHalDispatcher.$interfaceName = 'cros.mojom.CameraHalDispatcher';
mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver = {};
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver.$interfaceName = 'cros.mojom.CrosCameraServiceObserver';
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService = {};
mojo.internal.bindings.cros.mojom.CrosCameraService.$interfaceName = 'cros.mojom.CrosCameraService';
mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec = { $: {} };

// Enum: CameraClientType
mojo.internal.bindings.cros.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
};

// Enum: CameraPrivacySwitchState
mojo.internal.bindings.cros.mojom.CameraPrivacySwitchState = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2,
};

// Enum: CameraAutoFramingState
mojo.internal.bindings.cros.mojom.CameraAutoFramingState = {
  OFF: 0,
  ON_SINGLE: 1,
  ON_MULTI: 2,
};

// Enum: KioskVisionError
mojo.internal.bindings.cros.mojom.KioskVisionError = {
  UNKNOWN: 0,
  DLC_ERROR: 1,
  MODEL_ERROR: 2,
};

// Struct: KioskVisionDetection
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionDetectionSpec, 'cros.mojom.KioskVisionDetection', [
      mojo.internal.StructField('arg_timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_appearances', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionTrack
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionTrackSpec, 'cros.mojom.KioskVisionTrack', [
      mojo.internal.StructField('arg_start_timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_timestamp_in_us', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_appearances', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionAppearance
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionAppearanceSpec, 'cros.mojom.KioskVisionAppearance', [
      mojo.internal.StructField('arg_timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_face', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionFaceDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_body', 16, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionBodyDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionFaceDetection
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionFaceDetectionSpec, 'cros.mojom.KioskVisionFaceDetection', [
      mojo.internal.StructField('arg_confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_box', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_roll', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pan', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tilt', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionBodyDetection
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionBodyDetectionSpec, 'cros.mojom.KioskVisionBodyDetection', [
      mojo.internal.StructField('arg_confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_box', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionBoundingBox
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionBoundingBoxSpec, 'cros.mojom.KioskVisionBoundingBox', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KioskVisionObserver
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnFrameProcessed_Params', [
      mojo.internal.StructField('arg_detection', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionDetectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnTrackCompleted_Params', [
      mojo.internal.StructField('arg_track', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionTrackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnError_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.KioskVisionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.KioskVisionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.KioskVisionObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.KioskVisionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.KioskVisionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.KioskVisionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameProcessed(arg_detection) {
    return this.$.onFrameProcessed(arg_detection);
  }
  onTrackCompleted(arg_track) {
    return this.$.onTrackCompleted(arg_track);
  }
  onError(arg_error) {
    return this.$.onError(arg_error);
  }
};

mojo.internal.bindings.cros.mojom.KioskVisionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KioskVisionObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onFrameProcessed(arg_detection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec,
      null,
      [arg_detection],
      false);
  }

  onTrackCompleted(arg_track) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec,
      null,
      [arg_track],
      false);
  }

  onError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.cros.mojom.KioskVisionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.KioskVisionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.KioskVisionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.KioskVisionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KioskVisionObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: OnFrameProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameProcessed (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTrackCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTrackCompleted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameProcessed');
          const result = this.impl.onFrameProcessed(params.arg_detection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrackCompleted');
          const result = this.impl.onTrackCompleted(params.arg_track);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.KioskVisionObserver_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.KioskVisionObserverReceiver = mojo.internal.bindings.cros.mojom.KioskVisionObserverReceiver;

mojo.internal.bindings.cros.mojom.KioskVisionObserverPtr = mojo.internal.bindings.cros.mojom.KioskVisionObserverRemote;
mojo.internal.bindings.cros.mojom.KioskVisionObserverRequest = mojo.internal.bindings.cros.mojom.KioskVisionObserverPendingReceiver;


// Interface: CameraHalDispatcher
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_auth_token', 16, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CameraHalDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CameraHalDispatcherRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CameraHalDispatcherPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CameraHalDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerClientWithToken(arg_client, arg_type, arg_auth_token) {
    return this.$.registerClientWithToken(arg_client, arg_type, arg_auth_token);
  }
};

mojo.internal.bindings.cros.mojom.CameraHalDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraHalDispatcher', [
      { explicit: 5 },
    ]);
  }

  registerClientWithToken(arg_client, arg_type, arg_auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec,
      [arg_client, arg_type, arg_auth_token],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CameraHalDispatcher.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CameraHalDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalDispatcher',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CameraHalDispatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraHalDispatcher', [
      { explicit: 5 },
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
        
        // Try Method 0: RegisterClientWithToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterClientWithToken (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerClientWithToken');
          const result = this.impl.registerClientWithToken(params.arg_client, params.arg_type, params.arg_auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterClientWithToken FAILED:', e));
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

mojo.internal.bindings.cros.mojom.CameraHalDispatcherReceiver = mojo.internal.bindings.cros.mojom.CameraHalDispatcherReceiver;

mojo.internal.bindings.cros.mojom.CameraHalDispatcherPtr = mojo.internal.bindings.cros.mojom.CameraHalDispatcherRemote;
mojo.internal.bindings.cros.mojom.CameraHalDispatcherRequest = mojo.internal.bindings.cros.mojom.CameraHalDispatcherPendingReceiver;


// Interface: CrosCameraServiceObserver
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_opened', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraEffectChange_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cameraDeviceActivityChange(arg_camera_id, arg_opened, arg_type) {
    return this.$.cameraDeviceActivityChange(arg_camera_id, arg_opened, arg_type);
  }
  cameraPrivacySwitchStateChange(arg_state, arg_camera_id) {
    return this.$.cameraPrivacySwitchStateChange(arg_state, arg_camera_id);
  }
  cameraSWPrivacySwitchStateChange(arg_state) {
    return this.$.cameraSWPrivacySwitchStateChange(arg_state);
  }
  cameraEffectChange(arg_config) {
    return this.$.cameraEffectChange(arg_config);
  }
  autoFramingStateChange(arg_state) {
    return this.$.autoFramingStateChange(arg_state);
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosCameraServiceObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  cameraDeviceActivityChange(arg_camera_id, arg_opened, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec,
      null,
      [arg_camera_id, arg_opened, arg_type],
      false);
  }

  cameraPrivacySwitchStateChange(arg_state, arg_camera_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec,
      null,
      [arg_state, arg_camera_id],
      false);
  }

  cameraSWPrivacySwitchStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  cameraEffectChange(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  autoFramingStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraServiceObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosCameraServiceObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
        
        // Try Method 0: CameraDeviceActivityChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraDeviceActivityChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CameraPrivacySwitchStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraPrivacySwitchStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CameraSWPrivacySwitchStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraSWPrivacySwitchStateChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CameraEffectChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CameraEffectChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AutoFramingStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoFramingStateChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraDeviceActivityChange');
          const result = this.impl.cameraDeviceActivityChange(params.arg_camera_id, params.arg_opened, params.arg_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraPrivacySwitchStateChange');
          const result = this.impl.cameraPrivacySwitchStateChange(params.arg_state, params.arg_camera_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraSWPrivacySwitchStateChange');
          const result = this.impl.cameraSWPrivacySwitchStateChange(params.arg_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraEffectChange');
          const result = this.impl.cameraEffectChange(params.arg_config);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autoFramingStateChange');
          const result = this.impl.autoFramingStateChange(params.arg_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverReceiver = mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverReceiver;

mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverPtr = mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRemote;
mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverRequest = mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverPendingReceiver;


// Interface: CrosCameraService
mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_ResponseParams', [
      mojo.internal.StructField('arg_camera_module_receiver', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CameraModuleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec, 'cros.mojom.CrosCameraService_SetTracingEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec, 'cros.mojom.CrosCameraService_SetAutoFramingState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParams', [
      mojo.internal.StructField('arg_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.cros.mojom.SetEffectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec, 'cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.CrosCameraServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec, 'cros.mojom.CrosCameraService_StartKioskVisionDetection_Params', [
      mojo.internal.StructField('arg_dlc_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cros.mojom.KioskVisionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.cros.mojom.CrosCameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.cros.mojom.CrosCameraServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.cros.mojom.CrosCameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCameraModule(arg_type) {
    return this.$.getCameraModule(arg_type);
  }
  setTracingEnabled(arg_enabled) {
    return this.$.setTracingEnabled(arg_enabled);
  }
  setAutoFramingState(arg_state) {
    return this.$.setAutoFramingState(arg_state);
  }
  getCameraSWPrivacySwitchState() {
    return this.$.getCameraSWPrivacySwitchState();
  }
  setCameraSWPrivacySwitchState(arg_state) {
    return this.$.setCameraSWPrivacySwitchState(arg_state);
  }
  getAutoFramingSupported() {
    return this.$.getAutoFramingSupported();
  }
  setCameraEffect(arg_config) {
    return this.$.setCameraEffect(arg_config);
  }
  addCrosCameraServiceObserver(arg_observer) {
    return this.$.addCrosCameraServiceObserver(arg_observer);
  }
  startKioskVisionDetection(arg_dlc_path, arg_observer) {
    return this.$.startKioskVisionDetection(arg_dlc_path, arg_observer);
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosCameraService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  getCameraModule(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec,
      [arg_type],
      false);
  }

  setTracingEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setAutoFramingState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  getCameraSWPrivacySwitchState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec,
      [],
      false);
  }

  setCameraSWPrivacySwitchState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  getAutoFramingSupported() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec,
      [],
      false);
  }

  setCameraEffect(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec,
      mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec,
      [arg_config],
      false);
  }

  addCrosCameraServiceObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  startKioskVisionDetection(arg_dlc_path, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec,
      null,
      [arg_dlc_path, arg_observer],
      false);
  }

};

mojo.internal.bindings.cros.mojom.CrosCameraService.getRemote = function() {
  let remote = new mojo.internal.bindings.cros.mojom.CrosCameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraService',
    'context');
  return remote.$;
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosCameraService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
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
        
        // Try Method 0: GetCameraModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraModule (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTracingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTracingEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetAutoFramingState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoFramingState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetCameraSWPrivacySwitchState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraSWPrivacySwitchState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetCameraSWPrivacySwitchState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraSWPrivacySwitchState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAutoFramingSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAutoFramingSupported (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCameraEffect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraEffect (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: AddCrosCameraServiceObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCrosCameraServiceObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: StartKioskVisionDetection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartKioskVisionDetection (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraModule');
          const result = this.impl.getCameraModule(params.arg_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraModule FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTracingEnabled');
          const result = this.impl.setTracingEnabled(params.arg_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoFramingState');
          const result = this.impl.setAutoFramingState(params.arg_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraSWPrivacySwitchState');
          const result = this.impl.getCameraSWPrivacySwitchState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraSWPrivacySwitchState FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCameraSWPrivacySwitchState');
          const result = this.impl.setCameraSWPrivacySwitchState(params.arg_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAutoFramingSupported');
          const result = this.impl.getAutoFramingSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAutoFramingSupported FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCameraEffect');
          const result = this.impl.setCameraEffect(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCameraEffect FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCrosCameraServiceObserver');
          const result = this.impl.addCrosCameraServiceObserver(params.arg_observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startKioskVisionDetection');
          const result = this.impl.startKioskVisionDetection(params.arg_dlc_path, params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.cros.mojom.CrosCameraServiceReceiver = mojo.internal.bindings.cros.mojom.CrosCameraServiceReceiver;

mojo.internal.bindings.cros.mojom.CrosCameraServicePtr = mojo.internal.bindings.cros.mojom.CrosCameraServiceRemote;
mojo.internal.bindings.cros.mojom.CrosCameraServiceRequest = mojo.internal.bindings.cros.mojom.CrosCameraServicePendingReceiver;

