// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/mojom/video_capture.mojom
 // Module: media.mojom

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
 

 mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.media.mojom = mojo.internal.bindings.media.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.media.mojom.VideoCaptureStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.media.mojom.VideoCaptureResultSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver = {};
mojo.internal.bindings.media.mojom.VideoCaptureObserverSpec = { $ : {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver.$interfaceName = 'media.mojom.VideoCaptureObserver';
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost = {};
mojo.internal.bindings.media.mojom.VideoCaptureHostSpec = { $ : {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost.$interfaceName = 'media.mojom.VideoCaptureHost';
mojo.internal.bindings.media.mojom.VideoCaptureHost_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_Stop_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_Pause_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_Resume_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.media.mojom.VideoCaptureHost_OnLog_ParamsSpec = { $: {} };

// Enum: VideoCaptureState
mojo.internal.bindings.media.mojom.VideoCaptureState = {
  STARTED: 0,
  PAUSED: 1,
  RESUMED: 2,
  STOPPED: 3,
  ENDED: 4,
};

// Union: VideoCaptureResult
mojo.internal.Union(
    mojo.internal.bindings.media.mojom.VideoCaptureResultSpec, 'media.mojom.VideoCaptureResult', {
      'arg_state': {
        'ordinal': 0,
        'type': mojo.internal.bindings.media.mojom.VideoCaptureStateSpec.$,
        'nullable': false,
      },
      'arg_error_code': {
        'ordinal': 1,
        'type': mojo.internal.bindings.media.mojom.VideoCaptureErrorSpec.$,
        'nullable': false,
      },
    });

// Interface: VideoCaptureObserver
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnStateChanged_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.media.mojom.VideoCaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnNewBuffer_Params', [
      mojo.internal.StructField('arg_buffer_handle', 0, 0, mojo.internal.bindings.media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnBufferReady_Params', [
      mojo.internal.StructField('arg_buffer', 0, 0, mojo.internal.bindings.media.mojom.ReadyBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnBufferDestroyed_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnFrameDropped_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec, 'media.mojom.VideoCaptureObserver_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('arg_capture_version', 0, 0, mojo.internal.bindings.media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.media.mojom.VideoCaptureObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoCaptureObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoCaptureObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoCaptureObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStateChanged(arg_result) {
    return this.$.onStateChanged(arg_result);
  }
  onNewBuffer(arg_buffer_id, arg_buffer_handle) {
    return this.$.onNewBuffer(arg_buffer_id, arg_buffer_handle);
  }
  onBufferReady(arg_buffer) {
    return this.$.onBufferReady(arg_buffer);
  }
  onBufferDestroyed(arg_buffer_id) {
    return this.$.onBufferDestroyed(arg_buffer_id);
  }
  onFrameDropped(arg_reason) {
    return this.$.onFrameDropped(arg_reason);
  }
  onNewCaptureVersion(arg_capture_version) {
    return this.$.onNewCaptureVersion(arg_capture_version);
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media.mojom.VideoCaptureObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStateChanged(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec,
      null,
      [arg_result],
      false);
  }

  onNewBuffer(arg_buffer_id, arg_buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec,
      null,
      [arg_buffer_id, arg_buffer_handle],
      false);
  }

  onBufferReady(arg_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec,
      null,
      [arg_buffer],
      false);
  }

  onBufferDestroyed(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec,
      null,
      [arg_buffer_id],
      false);
  }

  onFrameDropped(arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec,
      null,
      [arg_reason],
      false);
  }

  onNewCaptureVersion(arg_capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec,
      null,
      [arg_capture_version],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoCaptureObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoCaptureObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoCaptureObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoCaptureObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media.mojom.VideoCaptureObserver', [
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
        
        // Try Method 0: OnStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNewBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnBufferReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferReady (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBufferDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferDestroyed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnFrameDropped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameDropped (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnNewCaptureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewCaptureVersion (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStateChanged');
          const result = this.impl.onStateChanged(params.arg_result);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.arg_buffer_id, params.arg_buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferReady');
          const result = this.impl.onBufferReady(params.arg_buffer);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnBufferDestroyed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferDestroyed');
          const result = this.impl.onBufferDestroyed(params.arg_buffer_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnFrameDropped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameDropped');
          const result = this.impl.onFrameDropped(params.arg_reason);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureObserver_OnNewCaptureVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.arg_capture_version);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureObserverReceiver = mojo.internal.bindings.media.mojom.VideoCaptureObserverReceiver;

mojo.internal.bindings.media.mojom.VideoCaptureObserverPtr = mojo.internal.bindings.media.mojom.VideoCaptureObserverRemote;
mojo.internal.bindings.media.mojom.VideoCaptureObserverRequest = mojo.internal.bindings.media.mojom.VideoCaptureObserverPendingReceiver;


// Interface: VideoCaptureHost
mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_Start_ParamsSpec, 'media.mojom.VideoCaptureHost_Start_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 16, 0, mojo.internal.bindings.media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.media.mojom.VideoCaptureObserverRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_Stop_ParamsSpec, 'media.mojom.VideoCaptureHost_Stop_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_Pause_ParamsSpec, 'media.mojom.VideoCaptureHost_Pause_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_Resume_ParamsSpec, 'media.mojom.VideoCaptureHost_Resume_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 16, 0, mojo.internal.bindings.media.mojom.VideoCaptureParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec, 'media.mojom.VideoCaptureHost_RequestRefreshFrame_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec, 'media.mojom.VideoCaptureHost_ReleaseBuffer_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_feedback', 8, 0, mojo.internal.bindings.media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParams', [
      mojo.internal.StructField('arg_formats_supported', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec, 'media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParams', [
      mojo.internal.StructField('arg_formats_in_use', 0, 0, mojo.internal.Array(mojo.internal.bindings.media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.media.mojom.VideoCaptureHost_OnLog_ParamsSpec, 'media.mojom.VideoCaptureHost_OnLog_Params', [
      mojo.internal.StructField('arg_device_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.media.mojom.VideoCaptureHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureHostRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoCaptureHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.media.mojom.VideoCaptureHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.media.mojom.VideoCaptureHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(arg_device_id, arg_session_id, arg_params, arg_observer) {
    return this.$.start(arg_device_id, arg_session_id, arg_params, arg_observer);
  }
  stop(arg_device_id) {
    return this.$.stop(arg_device_id);
  }
  pause(arg_device_id) {
    return this.$.pause(arg_device_id);
  }
  resume(arg_device_id, arg_session_id, arg_params) {
    return this.$.resume(arg_device_id, arg_session_id, arg_params);
  }
  requestRefreshFrame(arg_device_id) {
    return this.$.requestRefreshFrame(arg_device_id);
  }
  releaseBuffer(arg_device_id, arg_buffer_id, arg_feedback) {
    return this.$.releaseBuffer(arg_device_id, arg_buffer_id, arg_feedback);
  }
  getDeviceSupportedFormats(arg_device_id, arg_session_id) {
    return this.$.getDeviceSupportedFormats(arg_device_id, arg_session_id);
  }
  getDeviceFormatsInUse(arg_device_id, arg_session_id) {
    return this.$.getDeviceFormatsInUse(arg_device_id, arg_session_id);
  }
  onLog(arg_device_id, arg_message) {
    return this.$.onLog(arg_device_id, arg_message);
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('media.mojom.VideoCaptureHost', [
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

  start(arg_device_id, arg_session_id, arg_params, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_Start_ParamsSpec,
      null,
      [arg_device_id, arg_session_id, arg_params, arg_observer],
      false);
  }

  stop(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_Stop_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  pause(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_Pause_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  resume(arg_device_id, arg_session_id, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_Resume_ParamsSpec,
      null,
      [arg_device_id, arg_session_id, arg_params],
      false);
  }

  requestRefreshFrame(arg_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec,
      null,
      [arg_device_id],
      false);
  }

  releaseBuffer(arg_device_id, arg_buffer_id, arg_feedback) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec,
      null,
      [arg_device_id, arg_buffer_id, arg_feedback],
      false);
  }

  getDeviceSupportedFormats(arg_device_id, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec,
      [arg_device_id, arg_session_id],
      false);
  }

  getDeviceFormatsInUse(arg_device_id, arg_session_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec,
      mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec,
      [arg_device_id, arg_session_id],
      false);
  }

  onLog(arg_device_id, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.media.mojom.VideoCaptureHost_OnLog_ParamsSpec,
      null,
      [arg_device_id, arg_message],
      false);
  }

};

mojo.internal.bindings.media.mojom.VideoCaptureHost.getRemote = function() {
  let remote = new mojo.internal.bindings.media.mojom.VideoCaptureHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoCaptureHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.media.mojom.VideoCaptureHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('media.mojom.VideoCaptureHost', [
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Start_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Stop_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Pause_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Resume_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestRefreshFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestRefreshFrame (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReleaseBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseBuffer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetDeviceSupportedFormats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceSupportedFormats (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetDeviceFormatsInUse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDeviceFormatsInUse (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_OnLog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLog (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.arg_device_id, params.arg_session_id, params.arg_params, params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Stop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop(params.arg_device_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Pause_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause(params.arg_device_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_Resume_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume(params.arg_device_id, params.arg_session_id, params.arg_params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_RequestRefreshFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestRefreshFrame');
          const result = this.impl.requestRefreshFrame(params.arg_device_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_ReleaseBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseBuffer');
          const result = this.impl.releaseBuffer(params.arg_device_id, params.arg_buffer_id, params.arg_feedback);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceSupportedFormats');
          const result = this.impl.getDeviceSupportedFormats(params.arg_device_id, params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceSupportedFormats_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceSupportedFormats FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceFormatsInUse');
          const result = this.impl.getDeviceFormatsInUse(params.arg_device_id, params.arg_session_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.media.mojom.VideoCaptureHost_GetDeviceFormatsInUse_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDeviceFormatsInUse FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.media.mojom.VideoCaptureHost_OnLog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.arg_device_id, params.arg_message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.media.mojom.VideoCaptureHostReceiver = mojo.internal.bindings.media.mojom.VideoCaptureHostReceiver;

mojo.internal.bindings.media.mojom.VideoCaptureHostPtr = mojo.internal.bindings.media.mojom.VideoCaptureHostRemote;
mojo.internal.bindings.media.mojom.VideoCaptureHostRequest = mojo.internal.bindings.media.mojom.VideoCaptureHostPendingReceiver;

