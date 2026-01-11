// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle.mojom
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
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.viz.mojom.BundledFrameSubmissionDataSpec = { $: {} };
mojo.internal.bindings.viz.mojom.BundledFrameSubmissionSpec = { $: {} };
mojo.internal.bindings.viz.mojom.BundledCompositorFrameSpec = { $: {} };
mojo.internal.bindings.viz.mojom.BundledReturnedResourcesSpec = { $: {} };
mojo.internal.bindings.viz.mojom.BeginFrameInfoSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundle = {};
mojo.internal.bindings.viz.mojom.FrameSinkBundle.$interfaceName = 'viz.mojom.FrameSinkBundle';
mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundle_Submit_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundleClient = {};
mojo.internal.bindings.viz.mojom.FrameSinkBundleClient.$interfaceName = 'viz.mojom.FrameSinkBundleClient';
mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };

// Union: BundledFrameSubmissionData
mojo.internal.Union(
    mojo.internal.bindings.viz.mojom.BundledFrameSubmissionDataSpec, 'viz.mojom.BundledFrameSubmissionData', {
      'arg_frame': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BundledCompositorFrameSpec.$,
        'nullable': false,
      },
      'arg_did_not_produce_frame': {
        'ordinal': 1,
        'type': mojo.internal.bindings.viz.mojom.BeginFrameAckSpec.$,
        'nullable': false,
      },
    });

// Struct: BundledFrameSubmission
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.BundledFrameSubmissionSpec, 'viz.mojom.BundledFrameSubmission', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.viz.mojom.BundledFrameSubmissionDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundledCompositorFrame
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.BundledCompositorFrameSpec, 'viz.mojom.BundledCompositorFrame', [
      mojo.internal.StructField('arg_local_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame', 8, 0, mojo.internal.bindings.viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_region_list', 16, 0, mojo.internal.bindings.viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BundledReturnedResources
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.BundledReturnedResourcesSpec, 'viz.mojom.BundledReturnedResources', [
      mojo.internal.StructField('arg_resources', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginFrameInfo
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.BeginFrameInfoSpec, 'viz.mojom.BeginFrameInfo', [
      mojo.internal.StructField('arg_args', 0, 0, mojo.internal.bindings.viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_resources', 16, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FrameSinkBundle
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('arg_sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_needs_begin_frame', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundle_Submit_ParamsSpec, 'viz.mojom.FrameSinkBundle_Submit_Params', [
      mojo.internal.StructField('arg_submissions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BundledFrameSubmissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetThreads_Params', [
      mojo.internal.StructField('arg_threads', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.viz.mojom.FrameSinkBundlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkBundlePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkBundleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setNeedsBeginFrame(arg_sink_id, arg_needs_begin_frame) {
    return this.$.setNeedsBeginFrame(arg_sink_id, arg_needs_begin_frame);
  }
  submit(arg_submissions) {
    return this.$.submit(arg_submissions);
  }
  setThreads(arg_sink_id, arg_threads) {
    return this.$.setThreads(arg_sink_id, arg_threads);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundle', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNeedsBeginFrame(arg_sink_id, arg_needs_begin_frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec,
      null,
      [arg_sink_id, arg_needs_begin_frame],
      false);
  }

  submit(arg_submissions) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundle_Submit_ParamsSpec,
      null,
      [arg_submissions],
      false);
  }

  setThreads(arg_sink_id, arg_threads) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec,
      null,
      [arg_sink_id, arg_threads],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkBundle.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkBundleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundle',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundle', [
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
        
        // Try Method 0: SetNeedsBeginFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsBeginFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Submit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_Submit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Submit (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetThreads
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThreads (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsBeginFrame');
          const result = this.impl.setNeedsBeginFrame(params.arg_sink_id, params.arg_needs_begin_frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_Submit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submit');
          const result = this.impl.submit(params.arg_submissions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThreads');
          const result = this.impl.setThreads(params.arg_sink_id, params.arg_threads);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleReceiver = mojo.internal.bindings.viz.mojom.FrameSinkBundleReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkBundlePtr = mojo.internal.bindings.viz.mojom.FrameSinkBundleRemote;
mojo.internal.bindings.viz.mojom.FrameSinkBundleRequest = mojo.internal.bindings.viz.mojom.FrameSinkBundlePendingReceiver;


// Interface: FrameSinkBundleClient
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_FlushNotifications_Params', [
      mojo.internal.StructField('arg_acks', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_begin_frames', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BeginFrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_reclaimed_resources', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('arg_sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_paused', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('arg_sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sequence_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkBundleClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  flushNotifications(arg_acks, arg_begin_frames, arg_reclaimed_resources) {
    return this.$.flushNotifications(arg_acks, arg_begin_frames, arg_reclaimed_resources);
  }
  onBeginFramePausedChanged(arg_sink_id, arg_paused) {
    return this.$.onBeginFramePausedChanged(arg_sink_id, arg_paused);
  }
  onCompositorFrameTransitionDirectiveProcessed(arg_sink_id, arg_sequence_id) {
    return this.$.onCompositorFrameTransitionDirectiveProcessed(arg_sink_id, arg_sequence_id);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  flushNotifications(arg_acks, arg_begin_frames, arg_reclaimed_resources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec,
      null,
      [arg_acks, arg_begin_frames, arg_reclaimed_resources],
      false);
  }

  onBeginFramePausedChanged(arg_sink_id, arg_paused) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [arg_sink_id, arg_paused],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(arg_sink_id, arg_sequence_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [arg_sink_id, arg_sequence_id],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkBundleClient.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundleClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundleClient', [
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
        
        // Try Method 0: FlushNotifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushNotifications (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBeginFramePausedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBeginFramePausedChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCompositorFrameTransitionDirectiveProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCompositorFrameTransitionDirectiveProcessed (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushNotifications');
          const result = this.impl.flushNotifications(params.arg_acks, params.arg_begin_frames, params.arg_reclaimed_resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeginFramePausedChanged');
          const result = this.impl.onBeginFramePausedChanged(params.arg_sink_id, params.arg_paused);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCompositorFrameTransitionDirectiveProcessed');
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.arg_sink_id, params.arg_sequence_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientReceiver = mojo.internal.bindings.viz.mojom.FrameSinkBundleClientReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkBundleClientPtr = mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemote;
mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRequest = mojo.internal.bindings.viz.mojom.FrameSinkBundleClientPendingReceiver;

