// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_video_capture.mojom
 // Module: viz.mojom

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
 

 mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.viz.mojom = mojo.internal.bindings.viz.mojom || {};
mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.viz.mojom.BufferFormatPreferenceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.viz.mojom.VideoCaptureSubTargetSpec = { $: {} };
mojo.internal.bindings.viz.mojom.VideoCaptureTargetSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks = {};
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks.$interfaceName = 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer = {};
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer.$interfaceName = 'viz.mojom.FrameSinkVideoConsumer';
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer = {};
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer.$interfaceName = 'viz.mojom.FrameSinkVideoCapturer';
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay = {};
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay.$interfaceName = 'viz.mojom.FrameSinkVideoCaptureOverlay';
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec = { $: {} };

// Enum: BufferFormatPreference
mojo.internal.bindings.viz.mojom.BufferFormatPreference = {
  kDefault: 0,
  kPreferGpuMemoryBuffer: 1,
  kPreferSharedImageWithNativeHandle: 2,
};

// Union: VideoCaptureSubTarget
mojo.internal.Union(
    mojo.internal.bindings.viz.mojom.VideoCaptureSubTargetSpec, 'viz.mojom.VideoCaptureSubTarget', {
      'arg_subtree_capture_id': {
        'ordinal': 0,
        'type': mojo.internal.bindings.viz.mojom.SubtreeCaptureIdSpec.$,
        'nullable': false,
      },
      'arg_region_capture_crop_id': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo_base.mojom.TokenSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoCaptureTarget
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.VideoCaptureTargetSpec, 'viz.mojom.VideoCaptureTarget', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sub_target', 8, 0, mojo.internal.bindings.viz.mojom.VideoCaptureSubTargetSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FrameSinkVideoConsumerFrameCallbacks
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_Params', [
      mojo.internal.StructField('arg_feedback', 0, 0, mojo.internal.bindings.media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  done() {
    return this.$.done();
  }
  provideFeedback(arg_feedback) {
    return this.$.provideFeedback(arg_feedback);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoConsumerFrameCallbacks', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  done() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec,
      null,
      [],
      false);
  }

  provideFeedback(arg_feedback) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec,
      null,
      [arg_feedback],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumerFrameCallbacks',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoConsumerFrameCallbacks', [
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
        
        // Try Method 0: Done
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Done (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ProvideFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProvideFeedback (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.done');
          const result = this.impl.done();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.provideFeedback');
          const result = this.impl.provideFeedback(params.arg_feedback);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksPtr = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote;
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksRequest = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver;


// Interface: FrameSinkVideoConsumer
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_info', 8, 0, mojo.internal.bindings.media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_callbacks', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerFrameCallbacksSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('arg_capture_version', 0, 0, mojo.internal.bindings.media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnLog_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFrameCaptured(arg_data, arg_info, arg_content_rect, arg_callbacks) {
    return this.$.onFrameCaptured(arg_data, arg_info, arg_content_rect, arg_callbacks);
  }
  onNewCaptureVersion(arg_capture_version) {
    return this.$.onNewCaptureVersion(arg_capture_version);
  }
  onFrameWithEmptyRegionCapture() {
    return this.$.onFrameWithEmptyRegionCapture();
  }
  onStopped() {
    return this.$.onStopped();
  }
  onLog(arg_message) {
    return this.$.onLog(arg_message);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoConsumer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFrameCaptured(arg_data, arg_info, arg_content_rect, arg_callbacks) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec,
      null,
      [arg_data, arg_info, arg_content_rect, arg_callbacks],
      false);
  }

  onNewCaptureVersion(arg_capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec,
      null,
      [arg_capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec,
      null,
      [arg_message],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumer',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoConsumer', [
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
        
        // Try Method 0: OnFrameCaptured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameCaptured (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNewCaptureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewCaptureVersion (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameWithEmptyRegionCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameWithEmptyRegionCapture (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLog (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameCaptured');
          const result = this.impl.onFrameCaptured(params.arg_data, params.arg_info, params.arg_content_rect, params.arg_callbacks);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.arg_capture_version);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameWithEmptyRegionCapture');
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.arg_message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerReceiver = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerPtr = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRemote;
mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerRequest = mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerPendingReceiver;


// Interface: FrameSinkVideoCapturer
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetFormat_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.media.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_Params', [
      mojo.internal.StructField('arg_min_period', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_Params', [
      mojo.internal.StructField('arg_min_period', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_Params', [
      mojo.internal.StructField('arg_min_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_fixed_aspect_ratio', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_Params', [
      mojo.internal.StructField('arg_majority_damaged_pixel_min_ratio', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_ChangeTarget_Params', [
      mojo.internal.StructField('arg_target', 0, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.VideoCaptureTargetSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sub_capture_version', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_Start_Params', [
      mojo.internal.StructField('arg_consumer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkVideoConsumerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_format_preference', 8, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BufferFormatPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_CreateOverlay_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlaySpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_stacking_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCapturer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFormat(arg_format) {
    return this.$.setFormat(arg_format);
  }
  setMinCapturePeriod(arg_min_period) {
    return this.$.setMinCapturePeriod(arg_min_period);
  }
  setMinSizeChangePeriod(arg_min_period) {
    return this.$.setMinSizeChangePeriod(arg_min_period);
  }
  setResolutionConstraints(arg_min_size, arg_max_size, arg_use_fixed_aspect_ratio) {
    return this.$.setResolutionConstraints(arg_min_size, arg_max_size, arg_use_fixed_aspect_ratio);
  }
  setAutoThrottlingEnabled(arg_enabled) {
    return this.$.setAutoThrottlingEnabled(arg_enabled);
  }
  setAnimationFpsLockIn(arg_enabled, arg_majority_damaged_pixel_min_ratio) {
    return this.$.setAnimationFpsLockIn(arg_enabled, arg_majority_damaged_pixel_min_ratio);
  }
  changeTarget(arg_target, arg_sub_capture_version) {
    return this.$.changeTarget(arg_target, arg_sub_capture_version);
  }
  start(arg_consumer, arg_buffer_format_preference) {
    return this.$.start(arg_consumer, arg_buffer_format_preference);
  }
  stop() {
    return this.$.stop();
  }
  requestRefreshFrame() {
    return this.$.requestRefreshFrame();
  }
  createOverlay(arg_stacking_index, arg_receiver) {
    return this.$.createOverlay(arg_stacking_index, arg_receiver);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoCapturer', [
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

  setFormat(arg_format) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec,
      null,
      [arg_format],
      false);
  }

  setMinCapturePeriod(arg_min_period) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec,
      null,
      [arg_min_period],
      false);
  }

  setMinSizeChangePeriod(arg_min_period) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec,
      null,
      [arg_min_period],
      false);
  }

  setResolutionConstraints(arg_min_size, arg_max_size, arg_use_fixed_aspect_ratio) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec,
      null,
      [arg_min_size, arg_max_size, arg_use_fixed_aspect_ratio],
      false);
  }

  setAutoThrottlingEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setAnimationFpsLockIn(arg_enabled, arg_majority_damaged_pixel_min_ratio) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec,
      null,
      [arg_enabled, arg_majority_damaged_pixel_min_ratio],
      false);
  }

  changeTarget(arg_target, arg_sub_capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec,
      null,
      [arg_target, arg_sub_capture_version],
      false);
  }

  start(arg_consumer, arg_buffer_format_preference) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec,
      null,
      [arg_consumer, arg_buffer_format_preference],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  requestRefreshFrame() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec,
      null,
      [],
      false);
  }

  createOverlay(arg_stacking_index, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec,
      null,
      [arg_stacking_index, arg_receiver],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCapturer',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoCapturer', [
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
        
        // Try Method 0: SetFormat
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFormat (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetMinCapturePeriod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMinCapturePeriod (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetMinSizeChangePeriod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMinSizeChangePeriod (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetResolutionConstraints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetResolutionConstraints (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetAutoThrottlingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoThrottlingEnabled (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetAnimationFpsLockIn
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAnimationFpsLockIn (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ChangeTarget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChangeTarget (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RequestRefreshFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRefreshFrame (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CreateOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateOverlay (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFormat');
          const result = this.impl.setFormat(params.arg_format);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMinCapturePeriod');
          const result = this.impl.setMinCapturePeriod(params.arg_min_period);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMinSizeChangePeriod');
          const result = this.impl.setMinSizeChangePeriod(params.arg_min_period);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setResolutionConstraints');
          const result = this.impl.setResolutionConstraints(params.arg_min_size, params.arg_max_size, params.arg_use_fixed_aspect_ratio);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoThrottlingEnabled');
          const result = this.impl.setAutoThrottlingEnabled(params.arg_enabled);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAnimationFpsLockIn');
          const result = this.impl.setAnimationFpsLockIn(params.arg_enabled, params.arg_majority_damaged_pixel_min_ratio);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.changeTarget');
          const result = this.impl.changeTarget(params.arg_target, params.arg_sub_capture_version);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.arg_consumer, params.arg_buffer_format_preference);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestRefreshFrame');
          const result = this.impl.requestRefreshFrame();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOverlay');
          const result = this.impl.createOverlay(params.arg_stacking_index, params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerReceiver = mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerPtr = mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote;
mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRequest = mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerPendingReceiver;


// Interface: FrameSinkVideoCaptureOverlay
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_Params', [
      mojo.internal.StructField('arg_image', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_Params', [
      mojo.internal.StructField('arg_coordinates', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCaptureOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setImageAndBounds(arg_image, arg_bounds) {
    return this.$.setImageAndBounds(arg_image, arg_bounds);
  }
  setBounds(arg_bounds) {
    return this.$.setBounds(arg_bounds);
  }
  onCapturedMouseEvent(arg_coordinates) {
    return this.$.onCapturedMouseEvent(arg_coordinates);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoCaptureOverlay', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setImageAndBounds(arg_image, arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec,
      null,
      [arg_image, arg_bounds],
      false);
  }

  setBounds(arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec,
      null,
      [arg_bounds],
      false);
  }

  onCapturedMouseEvent(arg_coordinates) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec,
      null,
      [arg_coordinates],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCaptureOverlay',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkVideoCaptureOverlay', [
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
        
        // Try Method 0: SetImageAndBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetImageAndBounds (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBounds (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCapturedMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCapturedMouseEvent (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setImageAndBounds');
          const result = this.impl.setImageAndBounds(params.arg_image, params.arg_bounds);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.arg_bounds);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCapturedMouseEvent');
          const result = this.impl.onCapturedMouseEvent(params.arg_coordinates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayReceiver = mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayPtr = mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRemote;
mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayRequest = mojo.internal.bindings.viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver;

