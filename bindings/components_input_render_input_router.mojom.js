// Auto-generated MojoJS binding
 // Source: chromium_src/components/input/render_input_router.mojom
 // Module: input.mojom

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
 

 mojo.internal.bindings.input = mojo.internal.bindings.input || {};
mojo.internal.bindings.input.mojom = mojo.internal.bindings.input.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.input.mojom.RenderInputRouterConfigSpec = { $: {} };
mojo.internal.bindings.input.mojom.TouchTransferStateSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate = {};
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateSpec = { $ : {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate.$interfaceName = 'input.mojom.RenderInputRouterDelegate';
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient = {};
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientSpec = { $ : {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient.$interfaceName = 'input.mojom.RenderInputRouterDelegateClient';
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec = { $: {} };
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec = { $: {} };

// Struct: RenderInputRouterConfig
mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterConfigSpec, 'input.mojom.RenderInputRouterConfig', [
      mojo.internal.StructField('arg_rir_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_grouping_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_force_enable_zoom', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchTransferState
mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.TouchTransferStateSpec, 'input.mojom.TouchTransferState', [
      mojo.internal.StructField('arg_down_time_ms', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_widget_frame_sink_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_down_event', 16, 0, mojo.internal.bindings.ui.mojom.CachedMotionEventAndroidSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_web_contents_y_offset_pix', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dip_scale', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_browser_would_have_handled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: RenderInputRouterDelegate
mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.input.mojom.TouchTransferStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_force_enable_zoom', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_hidden', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec, 'input.mojom.RenderInputRouterDelegate_ResetGestureDetection_Params', [
      mojo.internal.StructField('arg_root_widget_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.input.mojom.RenderInputRouterDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegatePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  stateOnTouchTransfer(arg_state) {
    return this.$.stateOnTouchTransfer(arg_state);
  }
  forceEnableZoomStateChanged(arg_force_enable_zoom, arg_frame_sink_id) {
    return this.$.forceEnableZoomStateChanged(arg_force_enable_zoom, arg_frame_sink_id);
  }
  stopFlingingOnViz(arg_frame_sink_id) {
    return this.$.stopFlingingOnViz(arg_frame_sink_id);
  }
  restartInputEventAckTimeoutIfNecessary(arg_frame_sink_id) {
    return this.$.restartInputEventAckTimeoutIfNecessary(arg_frame_sink_id);
  }
  notifyVisibilityChanged(arg_frame_sink_id, arg_is_hidden) {
    return this.$.notifyVisibilityChanged(arg_frame_sink_id, arg_is_hidden);
  }
  resetGestureDetection(arg_root_widget_frame_sink_id) {
    return this.$.resetGestureDetection(arg_root_widget_frame_sink_id);
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('input.mojom.RenderInputRouterDelegate', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  stateOnTouchTransfer(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  forceEnableZoomStateChanged(arg_force_enable_zoom, arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec,
      null,
      [arg_force_enable_zoom, arg_frame_sink_id],
      false);
  }

  stopFlingingOnViz(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec,
      null,
      [arg_frame_sink_id],
      false);
  }

  restartInputEventAckTimeoutIfNecessary(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec,
      null,
      [arg_frame_sink_id],
      false);
  }

  notifyVisibilityChanged(arg_frame_sink_id, arg_is_hidden) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_is_hidden],
      false);
  }

  resetGestureDetection(arg_root_widget_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec,
      null,
      [arg_root_widget_frame_sink_id],
      false);
  }

};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegate.getRemote = function() {
  let remote = new mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegate',
    'context');
  return remote.$;
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('input.mojom.RenderInputRouterDelegate', [
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
        
        // Try Method 0: StateOnTouchTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StateOnTouchTransfer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ForceEnableZoomStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceEnableZoomStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopFlingingOnViz
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopFlingingOnViz (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RestartInputEventAckTimeoutIfNecessary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestartInputEventAckTimeoutIfNecessary (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyVisibilityChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ResetGestureDetection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetGestureDetection (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StateOnTouchTransfer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stateOnTouchTransfer');
          const result = this.impl.stateOnTouchTransfer(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ForceEnableZoomStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceEnableZoomStateChanged');
          const result = this.impl.forceEnableZoomStateChanged(params.arg_force_enable_zoom, params.arg_frame_sink_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_StopFlingingOnViz_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopFlingingOnViz');
          const result = this.impl.stopFlingingOnViz(params.arg_frame_sink_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_RestartInputEventAckTimeoutIfNecessary_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restartInputEventAckTimeoutIfNecessary');
          const result = this.impl.restartInputEventAckTimeoutIfNecessary(params.arg_frame_sink_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_NotifyVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyVisibilityChanged');
          const result = this.impl.notifyVisibilityChanged(params.arg_frame_sink_id, params.arg_is_hidden);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegate_ResetGestureDetection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetGestureDetection');
          const result = this.impl.resetGestureDetection(params.arg_root_widget_frame_sink_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateReceiver = mojo.internal.bindings.input.mojom.RenderInputRouterDelegateReceiver;

mojo.internal.bindings.input.mojom.RenderInputRouterDelegatePtr = mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRemote;
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateRequest = mojo.internal.bindings.input.mojom.RenderInputRouterDelegatePendingReceiver;


// Interface: RenderInputRouterDelegateClient
mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dispatched_to_renderer', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_Params', [
      mojo.internal.StructField('arg_ack_source', 0, 0, mojo.internal.bindings.blink.mojom.InputEventResultSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ack_result', 8, 0, mojo.internal.bindings.blink.mojom.InputEventResultStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event', 16, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_Params', [
      mojo.internal.StructField('arg_overscroll', 0, 0, mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec, 'input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_Params', [
      mojo.internal.StructField('arg_ack_timeout_ts', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_responsive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRemote = class {
  static get $interfaceName() {
    return 'input.mojom.RenderInputRouterDelegateClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyObserversOfInputEvent(arg_event, arg_dispatched_to_renderer) {
    return this.$.notifyObserversOfInputEvent(arg_event, arg_dispatched_to_renderer);
  }
  notifyObserversOfInputEventAcks(arg_ack_source, arg_ack_result, arg_event) {
    return this.$.notifyObserversOfInputEventAcks(arg_ack_source, arg_ack_result, arg_event);
  }
  onInvalidInputEventSource() {
    return this.$.onInvalidInputEventSource();
  }
  stateOnOverscrollTransfer(arg_overscroll) {
    return this.$.stateOnOverscrollTransfer(arg_overscroll);
  }
  rendererInputResponsivenessChanged(arg_is_responsive, arg_ack_timeout_ts) {
    return this.$.rendererInputResponsivenessChanged(arg_is_responsive, arg_ack_timeout_ts);
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('input.mojom.RenderInputRouterDelegateClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyObserversOfInputEvent(arg_event, arg_dispatched_to_renderer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec,
      null,
      [arg_event, arg_dispatched_to_renderer],
      false);
  }

  notifyObserversOfInputEventAcks(arg_ack_source, arg_ack_result, arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec,
      null,
      [arg_ack_source, arg_ack_result, arg_event],
      false);
  }

  onInvalidInputEventSource() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec,
      null,
      [],
      false);
  }

  stateOnOverscrollTransfer(arg_overscroll) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec,
      null,
      [arg_overscroll],
      false);
  }

  rendererInputResponsivenessChanged(arg_is_responsive, arg_ack_timeout_ts) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec,
      null,
      [arg_is_responsive, arg_ack_timeout_ts],
      false);
  }

};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient.getRemote = function() {
  let remote = new mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'input.mojom.RenderInputRouterDelegateClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('input.mojom.RenderInputRouterDelegateClient', [
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
        
        // Try Method 0: NotifyObserversOfInputEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyObserversOfInputEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyObserversOfInputEventAcks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyObserversOfInputEventAcks (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnInvalidInputEventSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnInvalidInputEventSource (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: StateOnOverscrollTransfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StateOnOverscrollTransfer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RendererInputResponsivenessChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RendererInputResponsivenessChanged (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEvent');
          const result = this.impl.notifyObserversOfInputEvent(params.arg_event, params.arg_dispatched_to_renderer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_NotifyObserversOfInputEventAcks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyObserversOfInputEventAcks');
          const result = this.impl.notifyObserversOfInputEventAcks(params.arg_ack_source, params.arg_ack_result, params.arg_event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_OnInvalidInputEventSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onInvalidInputEventSource');
          const result = this.impl.onInvalidInputEventSource();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_StateOnOverscrollTransfer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stateOnOverscrollTransfer');
          const result = this.impl.stateOnOverscrollTransfer(params.arg_overscroll);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClient_RendererInputResponsivenessChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rendererInputResponsivenessChanged');
          const result = this.impl.rendererInputResponsivenessChanged(params.arg_is_responsive, params.arg_ack_timeout_ts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientReceiver = mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientReceiver;

mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientPtr = mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRemote;
mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientRequest = mojo.internal.bindings.input.mojom.RenderInputRouterDelegateClientPendingReceiver;

