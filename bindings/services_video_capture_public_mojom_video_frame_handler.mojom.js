// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

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
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.ReadyFrameInBufferSpec = { $: {} };
video_capture.mojom.VideoFrameAccessHandler = {};
video_capture.mojom.VideoFrameAccessHandler.$interfaceName = 'video_capture.mojom.VideoFrameAccessHandler';
video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler = {};
video_capture.mojom.VideoFrameHandler.$interfaceName = 'video_capture.mojom.VideoFrameHandler';
video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec = { $: {} };

// Struct: ReadyFrameInBuffer
mojo.internal.Struct(
    video_capture.mojom.ReadyFrameInBufferSpec, 'video_capture.mojom.ReadyFrameInBuffer', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_feedback_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoFrameAccessHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.VideoFrameAccessHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameAccessHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameAccessHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameAccessHandler', [
      { explicit: null },
    ]);
  }

  onFinishedConsumingBuffer(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.VideoFrameAccessHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameAccessHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameAccessHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameAccessHandler', [
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
        
        // Try Method 0: OnFinishedConsumingBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFinishedConsumingBuffer (0)');
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
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFinishedConsumingBuffer');
          const result = this.impl.onFinishedConsumingBuffer(params.buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = video_capture.mojom.VideoFrameAccessHandlerReceiver;

video_capture.mojom.VideoFrameAccessHandlerPtr = video_capture.mojom.VideoFrameAccessHandlerRemote;
video_capture.mojom.VideoFrameAccessHandlerRequest = video_capture.mojom.VideoFrameAccessHandlerPendingReceiver;


// Interface: VideoFrameHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, video_capture.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.VideoCaptureErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStopped_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
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

  onCaptureConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
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
        
        // Try Method 0: OnCaptureConfigurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec);
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameAccessHandlerReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec);
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec);
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec);
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameDropped (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnNewCaptureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewCaptureVersion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnFrameWithEmptyRegionCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameWithEmptyRegionCapture (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLog (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnStartedUsingGpuDecode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedUsingGpuDecode (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (12)');
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
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCaptureConfigurationChanged');
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameDropped');
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameWithEmptyRegionCapture');
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartedUsingGpuDecode');
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$.structSpec);
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

video_capture.mojom.VideoFrameHandlerReceiver = video_capture.mojom.VideoFrameHandlerReceiver;

video_capture.mojom.VideoFrameHandlerPtr = video_capture.mojom.VideoFrameHandlerRemote;
video_capture.mojom.VideoFrameHandlerRequest = video_capture.mojom.VideoFrameHandlerPendingReceiver;

