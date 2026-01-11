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
var cros = cros || {};
cros.mojom = cros.mojom || {};
var chromeos_camera = chromeos_camera || {};
var mojo_base = mojo_base || {};

cros.mojom.CameraClientTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraPrivacySwitchStateSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraAutoFramingStateSpec = { $: mojo.internal.Enum() };
cros.mojom.KioskVisionErrorSpec = { $: mojo.internal.Enum() };
cros.mojom.KioskVisionDetectionSpec = { $: {} };
cros.mojom.KioskVisionTrackSpec = { $: {} };
cros.mojom.KioskVisionAppearanceSpec = { $: {} };
cros.mojom.KioskVisionFaceDetectionSpec = { $: {} };
cros.mojom.KioskVisionBodyDetectionSpec = { $: {} };
cros.mojom.KioskVisionBoundingBoxSpec = { $: {} };
cros.mojom.KioskVisionObserver = {};
cros.mojom.KioskVisionObserver.$interfaceName = 'cros.mojom.KioskVisionObserver';
cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec = { $: {} };
cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec = { $: {} };
cros.mojom.KioskVisionObserver_OnError_ParamsSpec = { $: {} };
cros.mojom.CameraHalDispatcher = {};
cros.mojom.CameraHalDispatcher.$interfaceName = 'cros.mojom.CameraHalDispatcher';
cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec = { $: {} };
cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver = {};
cros.mojom.CrosCameraServiceObserver.$interfaceName = 'cros.mojom.CrosCameraServiceObserver';
cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService = {};
cros.mojom.CrosCameraService.$interfaceName = 'cros.mojom.CrosCameraService';
cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec = { $: {} };
cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec = { $: {} };
cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec = { $: {} };

// Enum: CameraClientType
cros.mojom.CameraClientType = {
  UNKNOWN: 0,
  TESTING: 1,
  CHROME: 2,
  ANDROID: 3,
  PLUGINVM: 4,
  ASH_CHROME: 5,
};

// Enum: CameraPrivacySwitchState
cros.mojom.CameraPrivacySwitchState = {
  UNKNOWN: 0,
  ON: 1,
  OFF: 2,
};

// Enum: CameraAutoFramingState
cros.mojom.CameraAutoFramingState = {
  OFF: 0,
  ON_SINGLE: 1,
  ON_MULTI: 2,
};

// Enum: KioskVisionError
cros.mojom.KioskVisionError = {
  UNKNOWN: 0,
  DLC_ERROR: 1,
  MODEL_ERROR: 2,
};

// Struct: KioskVisionDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionDetectionSpec, 'cros.mojom.KioskVisionDetection', [
      mojo.internal.StructField('timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('appearances', 8, 0, mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionTrack
mojo.internal.Struct(
    cros.mojom.KioskVisionTrackSpec, 'cros.mojom.KioskVisionTrack', [
      mojo.internal.StructField('start_timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('end_timestamp_in_us', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('appearances', 16, 0, mojo.internal.Array(cros.mojom.KioskVisionAppearanceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionAppearance
mojo.internal.Struct(
    cros.mojom.KioskVisionAppearanceSpec, 'cros.mojom.KioskVisionAppearance', [
      mojo.internal.StructField('timestamp_in_us', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('face', 8, 0, cros.mojom.KioskVisionFaceDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('body', 16, 0, cros.mojom.KioskVisionBodyDetectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('person_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionFaceDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionFaceDetectionSpec, 'cros.mojom.KioskVisionFaceDetection', [
      mojo.internal.StructField('confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('box', 8, 0, cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('roll', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pan', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: KioskVisionBodyDetection
mojo.internal.Struct(
    cros.mojom.KioskVisionBodyDetectionSpec, 'cros.mojom.KioskVisionBodyDetection', [
      mojo.internal.StructField('confidence', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('box', 8, 0, cros.mojom.KioskVisionBoundingBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KioskVisionBoundingBox
mojo.internal.Struct(
    cros.mojom.KioskVisionBoundingBoxSpec, 'cros.mojom.KioskVisionBoundingBox', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: KioskVisionObserver
mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnFrameProcessed_Params', [
      mojo.internal.StructField('detection', 0, 0, cros.mojom.KioskVisionDetectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnTrackCompleted_Params', [
      mojo.internal.StructField('track', 0, 0, cros.mojom.KioskVisionTrackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.KioskVisionObserver_OnError_ParamsSpec, 'cros.mojom.KioskVisionObserver_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, cros.mojom.KioskVisionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.KioskVisionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.KioskVisionObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.KioskVisionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.KioskVisionObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.KioskVisionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameProcessed(detection) {
    return this.$.onFrameProcessed(detection);
  }
  onTrackCompleted(track) {
    return this.$.onTrackCompleted(track);
  }
  onError(error) {
    return this.$.onError(error);
  }
};

cros.mojom.KioskVisionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KioskVisionObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onFrameProcessed(detection) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec,
      null,
      [detection],
      false);
  }

  onTrackCompleted(track) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec,
      null,
      [track],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.KioskVisionObserver_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

};

cros.mojom.KioskVisionObserver.getRemote = function() {
  let remote = new cros.mojom.KioskVisionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.KioskVisionObserver',
    'context');
  return remote.$;
};

cros.mojom.KioskVisionObserverReceiver = class {
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
             decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnError_ParamsSpec);
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
          const params = decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnFrameProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameProcessed');
          const result = this.impl.onFrameProcessed(params.detection);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnTrackCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTrackCompleted');
          const result = this.impl.onTrackCompleted(params.track);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.KioskVisionObserver_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.KioskVisionObserverReceiver = cros.mojom.KioskVisionObserverReceiver;

cros.mojom.KioskVisionObserverPtr = cros.mojom.KioskVisionObserverRemote;
cros.mojom.KioskVisionObserverRequest = cros.mojom.KioskVisionObserverPendingReceiver;


// Interface: CameraHalDispatcher
mojo.internal.Struct(
    cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraHalClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('auth_token', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec, 'cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraHalDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraHalDispatcherRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraHalDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraHalDispatcherPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraHalDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerClientWithToken(client, type, auth_token) {
    return this.$.registerClientWithToken(client, type, auth_token);
  }
};

cros.mojom.CameraHalDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraHalDispatcher', [
      { explicit: 5 },
    ]);
  }

  registerClientWithToken(client, type, auth_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec,
      cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec,
      [client, type, auth_token],
      false);
  }

};

cros.mojom.CameraHalDispatcher.getRemote = function() {
  let remote = new cros.mojom.CameraHalDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraHalDispatcher',
    'context');
  return remote.$;
};

cros.mojom.CameraHalDispatcherReceiver = class {
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
             decoder.decodeStructInline(cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec);
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
          const params = decoder.decodeStructInline(cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerClientWithToken');
          const result = this.impl.registerClientWithToken(params.client, params.type, params.auth_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraHalDispatcher_RegisterClientWithToken_ResponseParamsSpec, header, rawHeader);
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

cros.mojom.CameraHalDispatcherReceiver = cros.mojom.CameraHalDispatcherReceiver;

cros.mojom.CameraHalDispatcherPtr = cros.mojom.CameraHalDispatcherRemote;
cros.mojom.CameraHalDispatcherRequest = cros.mojom.CameraHalDispatcherPendingReceiver;


// Interface: CrosCameraServiceObserver
mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('opened', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('camera_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_CameraEffectChange_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec, 'cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CrosCameraServiceObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraServiceObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServiceObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cameraDeviceActivityChange(camera_id, opened, type) {
    return this.$.cameraDeviceActivityChange(camera_id, opened, type);
  }
  cameraPrivacySwitchStateChange(state, camera_id) {
    return this.$.cameraPrivacySwitchStateChange(state, camera_id);
  }
  cameraSWPrivacySwitchStateChange(state) {
    return this.$.cameraSWPrivacySwitchStateChange(state);
  }
  cameraEffectChange(config) {
    return this.$.cameraEffectChange(config);
  }
  autoFramingStateChange(state) {
    return this.$.autoFramingStateChange(state);
  }
};

cros.mojom.CrosCameraServiceObserverRemoteCallHandler = class {
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

  cameraDeviceActivityChange(camera_id, opened, type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec,
      null,
      [camera_id, opened, type],
      false);
  }

  cameraPrivacySwitchStateChange(state, camera_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec,
      null,
      [state, camera_id],
      false);
  }

  cameraSWPrivacySwitchStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

  cameraEffectChange(config) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec,
      null,
      [config],
      false);
  }

  autoFramingStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

};

cros.mojom.CrosCameraServiceObserver.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraServiceObserver',
    'context');
  return remote.$;
};

cros.mojom.CrosCameraServiceObserverReceiver = class {
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
             decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec);
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
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraDeviceActivityChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraDeviceActivityChange');
          const result = this.impl.cameraDeviceActivityChange(params.camera_id, params.opened, params.type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraPrivacySwitchStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraPrivacySwitchStateChange');
          const result = this.impl.cameraPrivacySwitchStateChange(params.state, params.camera_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraSWPrivacySwitchStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraSWPrivacySwitchStateChange');
          const result = this.impl.cameraSWPrivacySwitchStateChange(params.state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_CameraEffectChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cameraEffectChange');
          const result = this.impl.cameraEffectChange(params.config);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraServiceObserver_AutoFramingStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autoFramingStateChange');
          const result = this.impl.autoFramingStateChange(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CrosCameraServiceObserverReceiver = cros.mojom.CrosCameraServiceObserverReceiver;

cros.mojom.CrosCameraServiceObserverPtr = cros.mojom.CrosCameraServiceObserverRemote;
cros.mojom.CrosCameraServiceObserverRequest = cros.mojom.CrosCameraServiceObserverPendingReceiver;


// Interface: CrosCameraService
mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.CameraClientTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraModule_ResponseParams', [
      mojo.internal.StructField('camera_module_receiver', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraModuleRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec, 'cros.mojom.CrosCameraService_SetTracingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec, 'cros.mojom.CrosCameraService_SetAutoFramingState_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraAutoFramingStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_Params', [
      mojo.internal.StructField('state', 0, 0, cros.mojom.CameraPrivacySwitchStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec, 'cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_Params', [
      mojo.internal.StructField('config', 0, 0, cros.mojom.EffectsConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec, 'cros.mojom.CrosCameraService_SetCameraEffect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, cros.mojom.SetEffectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec, 'cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CrosCameraServiceObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec, 'cros.mojom.CrosCameraService_StartKioskVisionDetection_Params', [
      mojo.internal.StructField('dlc_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.KioskVisionObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

cros.mojom.CrosCameraServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosCameraServiceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosCameraService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosCameraServicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosCameraServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCameraModule(type) {
    return this.$.getCameraModule(type);
  }
  setTracingEnabled(enabled) {
    return this.$.setTracingEnabled(enabled);
  }
  setAutoFramingState(state) {
    return this.$.setAutoFramingState(state);
  }
  getCameraSWPrivacySwitchState() {
    return this.$.getCameraSWPrivacySwitchState();
  }
  setCameraSWPrivacySwitchState(state) {
    return this.$.setCameraSWPrivacySwitchState(state);
  }
  getAutoFramingSupported() {
    return this.$.getAutoFramingSupported();
  }
  setCameraEffect(config) {
    return this.$.setCameraEffect(config);
  }
  addCrosCameraServiceObserver(observer) {
    return this.$.addCrosCameraServiceObserver(observer);
  }
  startKioskVisionDetection(dlc_path, observer) {
    return this.$.startKioskVisionDetection(dlc_path, observer);
  }
};

cros.mojom.CrosCameraServiceRemoteCallHandler = class {
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

  getCameraModule(type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec,
      cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec,
      [type],
      false);
  }

  setTracingEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAutoFramingState(state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec,
      null,
      [state],
      false);
  }

  getCameraSWPrivacySwitchState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec,
      cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec,
      [],
      false);
  }

  setCameraSWPrivacySwitchState(state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec,
      null,
      [state],
      false);
  }

  getAutoFramingSupported() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec,
      cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec,
      [],
      false);
  }

  setCameraEffect(config) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec,
      cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec,
      [config],
      false);
  }

  addCrosCameraServiceObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  startKioskVisionDetection(dlc_path, observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec,
      null,
      [dlc_path, observer],
      false);
  }

};

cros.mojom.CrosCameraService.getRemote = function() {
  let remote = new cros.mojom.CrosCameraServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosCameraService',
    'context');
  return remote.$;
};

cros.mojom.CrosCameraServiceReceiver = class {
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec);
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
             decoder.decodeStructInline(cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec);
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
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_GetCameraModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraModule');
          const result = this.impl.getCameraModule(params.type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetCameraModule_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraModule FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_SetTracingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTracingEnabled');
          const result = this.impl.setTracingEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_SetAutoFramingState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoFramingState');
          const result = this.impl.setAutoFramingState(params.state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraSWPrivacySwitchState');
          const result = this.impl.getCameraSWPrivacySwitchState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetCameraSWPrivacySwitchState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraSWPrivacySwitchState FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_SetCameraSWPrivacySwitchState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCameraSWPrivacySwitchState');
          const result = this.impl.setCameraSWPrivacySwitchState(params.state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_GetAutoFramingSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAutoFramingSupported');
          const result = this.impl.getAutoFramingSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_GetAutoFramingSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAutoFramingSupported FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_SetCameraEffect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCameraEffect');
          const result = this.impl.setCameraEffect(params.config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CrosCameraService_SetCameraEffect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCameraEffect FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_AddCrosCameraServiceObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCrosCameraServiceObserver');
          const result = this.impl.addCrosCameraServiceObserver(params.observer);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CrosCameraService_StartKioskVisionDetection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startKioskVisionDetection');
          const result = this.impl.startKioskVisionDetection(params.dlc_path, params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CrosCameraServiceReceiver = cros.mojom.CrosCameraServiceReceiver;

cros.mojom.CrosCameraServicePtr = cros.mojom.CrosCameraServiceRemote;
cros.mojom.CrosCameraServiceRequest = cros.mojom.CrosCameraServicePendingReceiver;

