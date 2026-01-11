// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/camera_app.mojom
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
var media = media || {};
var gfx = gfx || {};

cros.mojom.EffectSpec = { $: mojo.internal.Enum() };
cros.mojom.StreamTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.GetCameraAppDeviceStatusSpec = { $: mojo.internal.Enum() };
cros.mojom.CaptureIntentSpec = { $: mojo.internal.Enum() };
cros.mojom.CameraAppDeviceProvider = {};
cros.mojom.CameraAppDeviceProvider.$interfaceName = 'cros.mojom.CameraAppDeviceProvider';
cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge = {};
cros.mojom.CameraAppDeviceBridge.$interfaceName = 'cros.mojom.CameraAppDeviceBridge';
cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec = { $: {} };
cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice = {};
cros.mojom.CameraAppDevice.$interfaceName = 'cros.mojom.CameraAppDevice';
cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec = { $: {} };
cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec = { $: {} };
cros.mojom.ResultMetadataObserver = {};
cros.mojom.ResultMetadataObserver.$interfaceName = 'cros.mojom.ResultMetadataObserver';
cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec = { $: {} };
cros.mojom.CameraEventObserver = {};
cros.mojom.CameraEventObserver.$interfaceName = 'cros.mojom.CameraEventObserver';
cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec = { $: {} };
cros.mojom.DocumentCornersObserver = {};
cros.mojom.DocumentCornersObserver.$interfaceName = 'cros.mojom.DocumentCornersObserver';
cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec = { $: {} };
cros.mojom.CameraInfoObserver = {};
cros.mojom.CameraInfoObserver.$interfaceName = 'cros.mojom.CameraInfoObserver';
cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec = { $: {} };
cros.mojom.StillCaptureResultObserver = {};
cros.mojom.StillCaptureResultObserver.$interfaceName = 'cros.mojom.StillCaptureResultObserver';
cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec = { $: {} };

// Enum: Effect
cros.mojom.Effect = {
  kNoEffect: 0,
  kPortraitMode: 1,
};

// Enum: StreamType
cros.mojom.StreamType = {
  kPreviewOutput: 0,
  kJpegOutput: 1,
  kJpegPortraitOutput: 2,
  kRecordingOutput: 3,
  kUnknown: 4,
};

// Enum: GetCameraAppDeviceStatus
cros.mojom.GetCameraAppDeviceStatus = {
  kSuccess: 0,
  kErrorInvalidId: 1,
};

// Enum: CaptureIntent
cros.mojom.CaptureIntent = {
  kDefault: 0,
  kVideoRecord: 1,
  kStillCapture: 2,
  kPortraitCapture: 3,
};

// Interface: CameraAppDeviceProvider
mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, cros.mojom.GetCameraAppDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParams', [
      mojo.internal.StructField('in_use', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraAppDeviceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceProviderRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceProviderPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCameraAppDevice(source_id) {
    return this.$.getCameraAppDevice(source_id);
  }
  isSupported() {
    return this.$.isSupported();
  }
  isDeviceInUse(source_id) {
    return this.$.isDeviceInUse(source_id);
  }
};

cros.mojom.CameraAppDeviceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraAppDeviceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getCameraAppDevice(source_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec,
      [source_id],
      false);
  }

  isSupported() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec,
      [],
      false);
  }

  isDeviceInUse(source_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec,
      cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec,
      [source_id],
      false);
  }

};

cros.mojom.CameraAppDeviceProvider.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceProvider',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraAppDeviceProvider', [
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
        
        // Try Method 0: GetCameraAppDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraAppDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsDeviceInUse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDeviceInUse (2)');
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
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraAppDevice');
          const result = this.impl.getCameraAppDevice(params.source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_GetCameraAppDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraAppDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_IsSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isSupported');
          const result = this.impl.isSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_IsSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsSupported FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDeviceInUse');
          const result = this.impl.isDeviceInUse(params.source_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceProvider_IsDeviceInUse_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsDeviceInUse FAILED:', e));
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

cros.mojom.CameraAppDeviceProviderReceiver = cros.mojom.CameraAppDeviceProviderReceiver;

cros.mojom.CameraAppDeviceProviderPtr = cros.mojom.CameraAppDeviceProviderRemote;
cros.mojom.CameraAppDeviceProviderRequest = cros.mojom.CameraAppDeviceProviderPendingReceiver;


// Interface: CameraAppDeviceBridge
mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, cros.mojom.GetCameraAppDeviceStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraAppDeviceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParams', [
      mojo.internal.StructField('is_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec, 'cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParams', [
      mojo.internal.StructField('in_use', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraAppDeviceBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceBridgeRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDeviceBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDeviceBridgePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getCameraAppDevice(device_id) {
    return this.$.getCameraAppDevice(device_id);
  }
  isSupported() {
    return this.$.isSupported();
  }
  setVirtualDeviceEnabled(device_id, enabled) {
    return this.$.setVirtualDeviceEnabled(device_id, enabled);
  }
  isDeviceInUse(device_id) {
    return this.$.isDeviceInUse(device_id);
  }
};

cros.mojom.CameraAppDeviceBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraAppDeviceBridge', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getCameraAppDevice(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec,
      [device_id],
      false);
  }

  isSupported() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec,
      [],
      false);
  }

  setVirtualDeviceEnabled(device_id, enabled) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec,
      [device_id, enabled],
      false);
  }

  isDeviceInUse(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec,
      cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec,
      [device_id],
      false);
  }

};

cros.mojom.CameraAppDeviceBridge.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDeviceBridge',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceBridgeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraAppDeviceBridge', [
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
        
        // Try Method 0: GetCameraAppDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraAppDevice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsSupported (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetVirtualDeviceEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVirtualDeviceEnabled (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsDeviceInUse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsDeviceInUse (3)');
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
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraAppDevice');
          const result = this.impl.getCameraAppDevice(params.device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_GetCameraAppDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraAppDevice FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_IsSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isSupported');
          const result = this.impl.isSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_IsSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsSupported FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVirtualDeviceEnabled');
          const result = this.impl.setVirtualDeviceEnabled(params.device_id, params.enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_SetVirtualDeviceEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetVirtualDeviceEnabled FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDeviceInUse');
          const result = this.impl.isDeviceInUse(params.device_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDeviceBridge_IsDeviceInUse_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsDeviceInUse FAILED:', e));
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

cros.mojom.CameraAppDeviceBridgeReceiver = cros.mojom.CameraAppDeviceBridgeReceiver;

cros.mojom.CameraAppDeviceBridgePtr = cros.mojom.CameraAppDeviceBridgeRemote;
cros.mojom.CameraAppDeviceBridgeRequest = cros.mojom.CameraAppDeviceBridgePendingReceiver;


// Interface: CameraAppDevice
mojo.internal.Struct(
    cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec, 'cros.mojom.CameraAppDevice_TakePortraitModePhoto_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.StillCaptureResultObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec, 'cros.mojom.CameraAppDevice_SetFpsRange_Params', [
      mojo.internal.StructField('fps_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetFpsRange_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec, 'cros.mojom.CameraAppDevice_SetStillCaptureResolution_Params', [
      mojo.internal.StructField('resolution', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCaptureIntent_Params', [
      mojo.internal.StructField('intent', 0, 0, cros.mojom.CaptureIntentSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_AddResultMetadataObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.ResultMetadataObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_type', 8, 0, cros.mojom.StreamTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_AddCameraEventObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_Params', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParams', [
      mojo.internal.StructField('is_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec, 'cros.mojom.CameraAppDevice_GetCameraFrameRotation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParams', [
      mojo.internal.StructField('rotation', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.DocumentCornersObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec, 'cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec, 'cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CameraInfoObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec, 'cros.mojom.CameraAppDevice_SetCropRegion_Params', [
      mojo.internal.StructField('crop_region', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_SetCropRegion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec, 'cros.mojom.CameraAppDevice_ResetCropRegion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec, 'cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParams', [
    ],
    [[0, 8]]);

cros.mojom.CameraAppDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraAppDeviceRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraAppDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraAppDevicePendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraAppDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  takePortraitModePhoto(observer) {
    return this.$.takePortraitModePhoto(observer);
  }
  setFpsRange(fps_range) {
    return this.$.setFpsRange(fps_range);
  }
  setStillCaptureResolution(resolution) {
    return this.$.setStillCaptureResolution(resolution);
  }
  setCaptureIntent(intent) {
    return this.$.setCaptureIntent(intent);
  }
  addResultMetadataObserver(observer, stream_type) {
    return this.$.addResultMetadataObserver(observer, stream_type);
  }
  addCameraEventObserver(observer) {
    return this.$.addCameraEventObserver(observer);
  }
  setCameraFrameRotationEnabledAtSource(is_enabled) {
    return this.$.setCameraFrameRotationEnabledAtSource(is_enabled);
  }
  getCameraFrameRotation() {
    return this.$.getCameraFrameRotation();
  }
  registerDocumentCornersObserver(observer) {
    return this.$.registerDocumentCornersObserver(observer);
  }
  setMultipleStreamsEnabled(enabled) {
    return this.$.setMultipleStreamsEnabled(enabled);
  }
  registerCameraInfoObserver(observer) {
    return this.$.registerCameraInfoObserver(observer);
  }
  setCropRegion(crop_region) {
    return this.$.setCropRegion(crop_region);
  }
  resetCropRegion() {
    return this.$.resetCropRegion();
  }
};

cros.mojom.CameraAppDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraAppDevice', [
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

  takePortraitModePhoto(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec,
      cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec,
      [observer],
      false);
  }

  setFpsRange(fps_range) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec,
      cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec,
      [fps_range],
      false);
  }

  setStillCaptureResolution(resolution) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec,
      cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec,
      [resolution],
      false);
  }

  setCaptureIntent(intent) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec,
      [intent],
      false);
  }

  addResultMetadataObserver(observer, stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec,
      [observer, stream_type],
      false);
  }

  addCameraEventObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setCameraFrameRotationEnabledAtSource(is_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec,
      [is_enabled],
      false);
  }

  getCameraFrameRotation() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec,
      cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec,
      [],
      false);
  }

  registerDocumentCornersObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setMultipleStreamsEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec,
      cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec,
      [enabled],
      false);
  }

  registerCameraInfoObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec,
      cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  setCropRegion(crop_region) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec,
      cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec,
      [crop_region],
      false);
  }

  resetCropRegion() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec,
      cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec,
      [],
      false);
  }

};

cros.mojom.CameraAppDevice.getRemote = function() {
  let remote = new cros.mojom.CameraAppDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraAppDevice',
    'context');
  return remote.$;
};

cros.mojom.CameraAppDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraAppDevice', [
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
        
        // Try Method 0: TakePortraitModePhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakePortraitModePhoto (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetFpsRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFpsRange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetStillCaptureResolution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStillCaptureResolution (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCaptureIntent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCaptureIntent (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddResultMetadataObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddResultMetadataObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AddCameraEventObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCameraEventObserver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetCameraFrameRotationEnabledAtSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCameraFrameRotationEnabledAtSource (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetCameraFrameRotation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCameraFrameRotation (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RegisterDocumentCornersObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDocumentCornersObserver (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetMultipleStreamsEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMultipleStreamsEnabled (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RegisterCameraInfoObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterCameraInfoObserver (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetCropRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCropRegion (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: ResetCropRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetCropRegion (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_TakePortraitModePhoto_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takePortraitModePhoto');
          const result = this.impl.takePortraitModePhoto(params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_TakePortraitModePhoto_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TakePortraitModePhoto FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetFpsRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFpsRange');
          const result = this.impl.setFpsRange(params.fps_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetFpsRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetFpsRange FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetStillCaptureResolution_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setStillCaptureResolution');
          const result = this.impl.setStillCaptureResolution(params.resolution);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetStillCaptureResolution_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetStillCaptureResolution FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCaptureIntent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCaptureIntent');
          const result = this.impl.setCaptureIntent(params.intent);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCaptureIntent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCaptureIntent FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_AddResultMetadataObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addResultMetadataObserver');
          const result = this.impl.addResultMetadataObserver(params.observer, params.stream_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_AddResultMetadataObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddResultMetadataObserver FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_AddCameraEventObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCameraEventObserver');
          const result = this.impl.addCameraEventObserver(params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_AddCameraEventObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddCameraEventObserver FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCameraFrameRotationEnabledAtSource');
          const result = this.impl.setCameraFrameRotationEnabledAtSource(params.is_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCameraFrameRotationEnabledAtSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCameraFrameRotationEnabledAtSource FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_GetCameraFrameRotation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCameraFrameRotation');
          const result = this.impl.getCameraFrameRotation();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_GetCameraFrameRotation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCameraFrameRotation FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerDocumentCornersObserver');
          const result = this.impl.registerDocumentCornersObserver(params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_RegisterDocumentCornersObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterDocumentCornersObserver FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMultipleStreamsEnabled');
          const result = this.impl.setMultipleStreamsEnabled(params.enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetMultipleStreamsEnabled_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetMultipleStreamsEnabled FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerCameraInfoObserver');
          const result = this.impl.registerCameraInfoObserver(params.observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_RegisterCameraInfoObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterCameraInfoObserver FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_SetCropRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCropRegion');
          const result = this.impl.setCropRegion(params.crop_region);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_SetCropRegion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetCropRegion FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(cros.mojom.CameraAppDevice_ResetCropRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetCropRegion');
          const result = this.impl.resetCropRegion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cros.mojom.CameraAppDevice_ResetCropRegion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResetCropRegion FAILED:', e));
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

cros.mojom.CameraAppDeviceReceiver = cros.mojom.CameraAppDeviceReceiver;

cros.mojom.CameraAppDevicePtr = cros.mojom.CameraAppDeviceRemote;
cros.mojom.CameraAppDeviceRequest = cros.mojom.CameraAppDevicePendingReceiver;


// Interface: ResultMetadataObserver
mojo.internal.Struct(
    cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec, 'cros.mojom.ResultMetadataObserver_OnMetadataAvailable_Params', [
      mojo.internal.StructField('camera_metadata', 0, 0, cros.mojom.CameraMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.ResultMetadataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.ResultMetadataObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.ResultMetadataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.ResultMetadataObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.ResultMetadataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMetadataAvailable(camera_metadata) {
    return this.$.onMetadataAvailable(camera_metadata);
  }
};

cros.mojom.ResultMetadataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResultMetadataObserver', [
      { explicit: null },
    ]);
  }

  onMetadataAvailable(camera_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec,
      null,
      [camera_metadata],
      false);
  }

};

cros.mojom.ResultMetadataObserver.getRemote = function() {
  let remote = new cros.mojom.ResultMetadataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.ResultMetadataObserver',
    'context');
  return remote.$;
};

cros.mojom.ResultMetadataObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResultMetadataObserver', [
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
        
        // Try Method 0: OnMetadataAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMetadataAvailable (0)');
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
          const params = decoder.decodeStructInline(cros.mojom.ResultMetadataObserver_OnMetadataAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMetadataAvailable');
          const result = this.impl.onMetadataAvailable(params.camera_metadata);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.ResultMetadataObserverReceiver = cros.mojom.ResultMetadataObserverReceiver;

cros.mojom.ResultMetadataObserverPtr = cros.mojom.ResultMetadataObserverRemote;
cros.mojom.ResultMetadataObserverRequest = cros.mojom.ResultMetadataObserverPendingReceiver;


// Interface: CameraEventObserver
mojo.internal.Struct(
    cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec, 'cros.mojom.CameraEventObserver_OnShutterDone_Params', [
    ],
    [[0, 8]]);

cros.mojom.CameraEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraEventObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraEventObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onShutterDone() {
    return this.$.onShutterDone();
  }
};

cros.mojom.CameraEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraEventObserver', [
      { explicit: null },
    ]);
  }

  onShutterDone() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec,
      null,
      [],
      false);
  }

};

cros.mojom.CameraEventObserver.getRemote = function() {
  let remote = new cros.mojom.CameraEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraEventObserver',
    'context');
  return remote.$;
};

cros.mojom.CameraEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraEventObserver', [
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
        
        // Try Method 0: OnShutterDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShutterDone (0)');
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
          const params = decoder.decodeStructInline(cros.mojom.CameraEventObserver_OnShutterDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShutterDone');
          const result = this.impl.onShutterDone();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraEventObserverReceiver = cros.mojom.CameraEventObserverReceiver;

cros.mojom.CameraEventObserverPtr = cros.mojom.CameraEventObserverRemote;
cros.mojom.CameraEventObserverRequest = cros.mojom.CameraEventObserverPendingReceiver;


// Interface: DocumentCornersObserver
mojo.internal.Struct(
    cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec, 'cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_Params', [
      mojo.internal.StructField('corners', 0, 0, mojo.internal.Array(gfx.mojom.PointFSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.DocumentCornersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.DocumentCornersObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.DocumentCornersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.DocumentCornersObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.DocumentCornersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDocumentCornersUpdated(corners) {
    return this.$.onDocumentCornersUpdated(corners);
  }
};

cros.mojom.DocumentCornersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentCornersObserver', [
      { explicit: null },
    ]);
  }

  onDocumentCornersUpdated(corners) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec,
      null,
      [corners],
      false);
  }

};

cros.mojom.DocumentCornersObserver.getRemote = function() {
  let remote = new cros.mojom.DocumentCornersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.DocumentCornersObserver',
    'context');
  return remote.$;
};

cros.mojom.DocumentCornersObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DocumentCornersObserver', [
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
        
        // Try Method 0: OnDocumentCornersUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDocumentCornersUpdated (0)');
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
          const params = decoder.decodeStructInline(cros.mojom.DocumentCornersObserver_OnDocumentCornersUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDocumentCornersUpdated');
          const result = this.impl.onDocumentCornersUpdated(params.corners);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.DocumentCornersObserverReceiver = cros.mojom.DocumentCornersObserverReceiver;

cros.mojom.DocumentCornersObserverPtr = cros.mojom.DocumentCornersObserverRemote;
cros.mojom.DocumentCornersObserverRequest = cros.mojom.DocumentCornersObserverPendingReceiver;


// Interface: CameraInfoObserver
mojo.internal.Struct(
    cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec, 'cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_Params', [
      mojo.internal.StructField('camera_info', 0, 0, cros.mojom.CameraInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

cros.mojom.CameraInfoObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CameraInfoObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CameraInfoObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CameraInfoObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CameraInfoObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCameraInfoUpdated(camera_info) {
    return this.$.onCameraInfoUpdated(camera_info);
  }
};

cros.mojom.CameraInfoObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CameraInfoObserver', [
      { explicit: null },
    ]);
  }

  onCameraInfoUpdated(camera_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec,
      null,
      [camera_info],
      false);
  }

};

cros.mojom.CameraInfoObserver.getRemote = function() {
  let remote = new cros.mojom.CameraInfoObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CameraInfoObserver',
    'context');
  return remote.$;
};

cros.mojom.CameraInfoObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CameraInfoObserver', [
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
        
        // Try Method 0: OnCameraInfoUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCameraInfoUpdated (0)');
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
          const params = decoder.decodeStructInline(cros.mojom.CameraInfoObserver_OnCameraInfoUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCameraInfoUpdated');
          const result = this.impl.onCameraInfoUpdated(params.camera_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.CameraInfoObserverReceiver = cros.mojom.CameraInfoObserverReceiver;

cros.mojom.CameraInfoObserverPtr = cros.mojom.CameraInfoObserverRemote;
cros.mojom.CameraInfoObserverRequest = cros.mojom.CameraInfoObserverPendingReceiver;


// Interface: StillCaptureResultObserver
mojo.internal.Struct(
    cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec, 'cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_Params', [
      mojo.internal.StructField('effect', 0, 0, cros.mojom.EffectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

cros.mojom.StillCaptureResultObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.StillCaptureResultObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.StillCaptureResultObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.StillCaptureResultObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.StillCaptureResultObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStillCaptureDone(effect, status, blob) {
    return this.$.onStillCaptureDone(effect, status, blob);
  }
};

cros.mojom.StillCaptureResultObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StillCaptureResultObserver', [
      { explicit: null },
    ]);
  }

  onStillCaptureDone(effect, status, blob) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec,
      null,
      [effect, status, blob],
      false);
  }

};

cros.mojom.StillCaptureResultObserver.getRemote = function() {
  let remote = new cros.mojom.StillCaptureResultObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.StillCaptureResultObserver',
    'context');
  return remote.$;
};

cros.mojom.StillCaptureResultObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StillCaptureResultObserver', [
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
        
        // Try Method 0: OnStillCaptureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStillCaptureDone (0)');
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
          const params = decoder.decodeStructInline(cros.mojom.StillCaptureResultObserver_OnStillCaptureDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStillCaptureDone');
          const result = this.impl.onStillCaptureDone(params.effect, params.status, params.blob);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

cros.mojom.StillCaptureResultObserverReceiver = cros.mojom.StillCaptureResultObserverReceiver;

cros.mojom.StillCaptureResultObserverPtr = cros.mojom.StillCaptureResultObserverRemote;
cros.mojom.StillCaptureResultObserverRequest = cros.mojom.StillCaptureResultObserverPendingReceiver;

