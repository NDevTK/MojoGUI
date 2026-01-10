// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_capture.mojom
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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var media = media || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

crosapi.mojom.DeviceAccessResultCodeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.VideoRotationSpec = { $: mojo.internal.Enum() };
crosapi.mojom.GpuMemoryBufferPlatformHandleSpec = { $: {} };
crosapi.mojom.VideoBufferHandleSpec = { $: {} };
crosapi.mojom.NativePixmapHandleSpec = { $: {} };
crosapi.mojom.GpuMemoryBufferHandleSpec = { $: {} };
crosapi.mojom.VideoFrameInfoSpec = { $: {} };
crosapi.mojom.ReadyFrameInBufferSpec = { $: {} };
crosapi.mojom.ScopedAccessPermission = {};
crosapi.mojom.ScopedAccessPermission.$interfaceName = 'crosapi.mojom.ScopedAccessPermission';
crosapi.mojom.VideoFrameHandler = {};
crosapi.mojom.VideoFrameHandler.$interfaceName = 'crosapi.mojom.VideoFrameHandler';
crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = { $: {} };
crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice = {};
crosapi.mojom.VideoCaptureDevice.$interfaceName = 'crosapi.mojom.VideoCaptureDevice';
crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory = {};
crosapi.mojom.VideoCaptureDeviceFactory.$interfaceName = 'crosapi.mojom.VideoCaptureDeviceFactory';
crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec = { $: {} };
crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec = { $: {} };

// Enum: DeviceAccessResultCode
crosapi.mojom.DeviceAccessResultCode = {
  NOT_INITIALIZED: 0,
  SUCCESS: 1,
  ERROR_DEVICE_NOT_FOUND: 2,
};

// Enum: VideoRotation
crosapi.mojom.VideoRotation = {
  kVideoRotation0: 0,
  kVideoRotation90: 1,
  kVideoRotation180: 2,
  kVideoRotation270: 3,
};

// Union: GpuMemoryBufferPlatformHandle
mojo.internal.Union(
    crosapi.mojom.GpuMemoryBufferPlatformHandleSpec, 'crosapi.mojom.GpuMemoryBufferPlatformHandle', {
      'shared_memory_handle': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'native_pixmap_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.NativePixmapHandleSpec.$,
        'nullable': false,
      },
    });

// Union: VideoBufferHandle
mojo.internal.Union(
    crosapi.mojom.VideoBufferHandleSpec, 'crosapi.mojom.VideoBufferHandle', {
      'shared_buffer_handle': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
      'gpu_memory_buffer_handle': {
        'ordinal': 1,
        'type': crosapi.mojom.GpuMemoryBufferHandleSpec.$,
        'nullable': false,
      },
      'read_only_shmem_region': {
        'ordinal': 2,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$,
        'nullable': false,
      },
    });

// Struct: NativePixmapHandle
mojo.internal.Struct(
    crosapi.mojom.NativePixmapHandleSpec, 'crosapi.mojom.NativePixmapHandle', [
      mojo.internal.StructField('planes', 0, 0, mojo.internal.Array(gfx.mojom.NativePixmapPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('modifier', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GpuMemoryBufferHandle
mojo.internal.Struct(
    crosapi.mojom.GpuMemoryBufferHandleSpec, 'crosapi.mojom.GpuMemoryBufferHandle', [
      mojo.internal.StructField('platform_handle', 0, 0, gfx.mojom.GpuMemoryBufferPlatformHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('stride', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoFrameInfo
mojo.internal.Struct(
    crosapi.mojom.VideoFrameInfoSpec, 'crosapi.mojom.VideoFrameInfo', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, media.mojom.VideoCapturePixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rotation', 32, 0, crosapi.mojom.VideoRotationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reference_time', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ReadyFrameInBuffer
mojo.internal.Struct(
    crosapi.mojom.ReadyFrameInBufferSpec, 'crosapi.mojom.ReadyFrameInBuffer', [
      mojo.internal.StructField('access_permission', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.ScopedAccessPermissionSpec), null, false, 0, undefined),
      mojo.internal.StructField('frame_info', 8, 0, crosapi.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_feedback_id', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ScopedAccessPermission
crosapi.mojom.ScopedAccessPermissionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.ScopedAccessPermissionRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.ScopedAccessPermission';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.ScopedAccessPermissionPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.ScopedAccessPermissionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.ScopedAccessPermissionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScopedAccessPermission', [
    ]);
  }

};

crosapi.mojom.ScopedAccessPermission.getRemote = function() {
  let remote = new crosapi.mojom.ScopedAccessPermissionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.ScopedAccessPermission',
    'context');
  return remote.$;
};

crosapi.mojom.ScopedAccessPermissionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScopedAccessPermission', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.ScopedAccessPermissionReceiver = crosapi.mojom.ScopedAccessPermissionReceiver;

crosapi.mojom.ScopedAccessPermissionPtr = crosapi.mojom.ScopedAccessPermissionRemote;
crosapi.mojom.ScopedAccessPermissionRequest = crosapi.mojom.ScopedAccessPermissionPendingReceiver;


// Interface: VideoFrameHandler
mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, crosapi.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scaled_buffers', 8, 0, mojo.internal.Array(crosapi.mojom.ReadyFrameInBufferSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, crosapi.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.VideoCaptureErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_Params', [
      mojo.internal.StructField('crop_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_Params', [
      mojo.internal.StructField('sub_capture_target_version', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec, 'crosapi.mojom.VideoFrameHandler_OnStopped_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
      { explicit: 11 },
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 13 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 10 },
      { explicit: 12 },
      { explicit: 14 },
      { explicit: 9 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
    ]);
  }

  onCaptureConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  dEPRECATED_OnFrameReadyInBuffer(buffer, scaled_buffers) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer, scaled_buffers],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  dEPRECATED_OnNewCropVersion(crop_version) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec,
      null,
      [crop_version],
      false);
  }

  dEPRECATED_OnNewSubCaptureTargetVersion(sub_capture_target_version) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec,
      null,
      [sub_capture_target_version],
      false);
  }

  onNewCaptureVersion(capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new crosapi.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

crosapi.mojom.VideoFrameHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
      { explicit: 11 },
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 13 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 10 },
      { explicit: 12 },
      { explicit: 14 },
      { explicit: 9 },
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
        
        // Try Method 0: OnCaptureConfigurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCaptureConfigurationChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNewBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DEPRECATED_OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_OnFrameReadyInBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBufferRetired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFrameDropped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameDropped (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DEPRECATED_OnNewCropVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_OnNewCropVersion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DEPRECATED_OnNewSubCaptureTargetVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_OnNewSubCaptureTargetVersion (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnNewCaptureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewCaptureVersion (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnFrameWithEmptyRegionCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameWithEmptyRegionCapture (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLog (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OnStartedUsingGpuDecode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedUsingGpuDecode (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onCaptureConfigurationChanged');
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnFrameReadyInBuffer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_OnFrameReadyInBuffer');
          const result = this.impl.dEPRECATED_OnFrameReadyInBuffer(params.buffer, params.scaled_buffers);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnError_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameDropped');
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewCropVersion_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_OnNewCropVersion');
          const result = this.impl.dEPRECATED_OnNewCropVersion(params.crop_version);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_DEPRECATED_OnNewSubCaptureTargetVersion_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_OnNewSubCaptureTargetVersion');
          const result = this.impl.dEPRECATED_OnNewSubCaptureTargetVersion(params.sub_capture_target_version);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameWithEmptyRegionCapture');
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnLog_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.message);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStarted_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartedUsingGpuDecode');
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoFrameHandler_OnStopped_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.VideoFrameHandlerReceiver = crosapi.mojom.VideoFrameHandlerReceiver;

crosapi.mojom.VideoFrameHandlerPtr = crosapi.mojom.VideoFrameHandlerRemote;
crosapi.mojom.VideoFrameHandlerRequest = crosapi.mojom.VideoFrameHandlerPendingReceiver;


// Interface: VideoCaptureDevice
mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_Start_Params', [
      mojo.internal.StructField('requested_settings', 0, 0, media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceProxy(crosapi.mojom.VideoFrameHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_MaybeSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_GetPhotoState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, media.mojom.PhotoStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_Params', [
      mojo.internal.StructField('settings', 0, 0, media.mojom.PhotoSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_TakePhoto_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_ProcessFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec, 'crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.VideoCaptureDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDevicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDevice', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
    ]);
  }

  start(requested_settings, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec,
      null,
      [requested_settings, handler],
      false);
  }

  maybeSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  getPhotoState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec,
      [],
      false);
  }

  setPhotoOptions(settings) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec,
      [settings],
      false);
  }

  takePhoto() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec,
      crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec,
      [],
      false);
  }

  processFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  requestRefreshFrame() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.VideoCaptureDevice.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDevice',
    'context');
  return remote.$;
};

crosapi.mojom.VideoCaptureDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDevice', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MaybeSuspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeSuspend (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPhotoState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPhotoState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetPhotoOptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPhotoOptions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TakePhoto
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakePhoto (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ProcessFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessFeedback (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestRefreshFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRefreshFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_Start_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.requested_settings, params.handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_MaybeSuspend_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeSuspend');
          const result = this.impl.maybeSuspend();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_Resume_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_GetPhotoState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getPhotoState');
          const result = this.impl.getPhotoState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_GetPhotoState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPhotoOptions');
          const result = this.impl.setPhotoOptions(params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_SetPhotoOptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_TakePhoto_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.takePhoto');
          const result = this.impl.takePhoto();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDevice_TakePhoto_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_ProcessFeedback_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.processFeedback');
          const result = this.impl.processFeedback(params.feedback);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDevice_RequestRefreshFrame_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.requestRefreshFrame');
          const result = this.impl.requestRefreshFrame();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.VideoCaptureDeviceReceiver = crosapi.mojom.VideoCaptureDeviceReceiver;

crosapi.mojom.VideoCaptureDevicePtr = crosapi.mojom.VideoCaptureDeviceRemote;
crosapi.mojom.VideoCaptureDeviceRequest = crosapi.mojom.VideoCaptureDevicePendingReceiver;


// Interface: VideoCaptureDeviceFactory
mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParams', [
      mojo.internal.StructField('device_infos', 0, 0, mojo.internal.Array(media.mojom.VideoCaptureDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_receiver', 8, 0, mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec, 'crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, crosapi.mojom.DeviceAccessResultCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.VideoCaptureDeviceFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.VideoCaptureDeviceFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceFactory', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  getDeviceInfos() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec,
      crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec,
      [],
      false);
  }

  createDevice(device_id, device_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec,
      crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec,
      [device_id, device_receiver],
      false);
  }

};

crosapi.mojom.VideoCaptureDeviceFactory.getRemote = function() {
  let remote = new crosapi.mojom.VideoCaptureDeviceFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.VideoCaptureDeviceFactory',
    'context');
  return remote.$;
};

crosapi.mojom.VideoCaptureDeviceFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCaptureDeviceFactory', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: GetDeviceInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceInfos (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDevice (1)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceInfos');
          const result = this.impl.getDeviceInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDeviceFactory_GetDeviceInfos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createDevice');
          const result = this.impl.createDevice(params.device_id, params.device_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.VideoCaptureDeviceFactory_CreateDevice_ResponseParamsSpec);
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

crosapi.mojom.VideoCaptureDeviceFactoryReceiver = crosapi.mojom.VideoCaptureDeviceFactoryReceiver;

crosapi.mojom.VideoCaptureDeviceFactoryPtr = crosapi.mojom.VideoCaptureDeviceFactoryRemote;
crosapi.mojom.VideoCaptureDeviceFactoryRequest = crosapi.mojom.VideoCaptureDeviceFactoryPendingReceiver;

