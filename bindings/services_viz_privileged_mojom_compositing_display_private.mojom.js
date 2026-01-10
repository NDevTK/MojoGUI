// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/display_private.mojom
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
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var display = display || {};
var gfx = gfx || {};
var ui = ui || {};

viz.mojom.DisplayPrivate = {};
viz.mojom.DisplayPrivate.$interfaceName = 'viz.mojom.DisplayPrivate';
viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_Resize_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec = { $: {} };
viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec = { $: {} };
viz.mojom.DisplayClient = {};
viz.mojom.DisplayClient.$interfaceName = 'viz.mojom.DisplayClient';
viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec = { $: {} };
viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec = { $: {} };

// Interface: DisplayPrivate
mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec, 'viz.mojom.DisplayPrivate_DisableSwapUntilResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec, 'viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_Resize_ParamsSpec, 'viz.mojom.DisplayPrivate_Resize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayColorMatrix_Params', [
      mojo.internal.StructField('color_matrix', 0, 0, gfx.mojom.TransformSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayColorSpaces_Params', [
      mojo.internal.StructField('display_color_spaces', 0, 0, gfx.mojom.DisplayColorSpacesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec, 'viz.mojom.DisplayPrivate_SetOutputIsSecure_Params', [
      mojo.internal.StructField('secure', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec, 'viz.mojom.DisplayPrivate_SetVSyncDisplayID_Params', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_Params', [
      mojo.internal.StructField('timebase', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec, 'viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec, 'viz.mojom.DisplayPrivate_UpdateRefreshRate_Params', [
      mojo.internal.StructField('refresh_rate', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec, 'viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_Params', [
      mojo.internal.StructField('suggested_high', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_support', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec, 'viz.mojom.DisplayPrivate_SetSupportedRefreshRates_Params', [
      mojo.internal.StructField('refresh_rates', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec, 'viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec, 'viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_Params', [
      mojo.internal.StructField('enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec, 'viz.mojom.DisplayPrivate_AddVSyncParameterObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.VSyncParameterObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec, 'viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(gfx.mojom.DelegatedInkPointRendererRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec, 'viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.BeginFrameObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec, 'viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_Params', [
      mojo.internal.StructField('max_vsync_interval', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vrr_state', 8, 0, display.mojom.VariableRefreshRateStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.DisplayPrivatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.DisplayPrivateRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayPrivate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.DisplayPrivatePendingReceiver,
      handle);
    this.$ = new viz.mojom.DisplayPrivateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.DisplayPrivateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayPrivate', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setDisplayVisible(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  disableSwapUntilResize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec,
      viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec,
      [],
      false);
  }

  resize(size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.DisplayPrivate_Resize_ParamsSpec,
      null,
      [size],
      false);
  }

  setDisplayColorMatrix(color_matrix) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec,
      null,
      [color_matrix],
      false);
  }

  setDisplayColorSpaces(display_color_spaces) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec,
      null,
      [display_color_spaces],
      false);
  }

  setOutputIsSecure(secure) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec,
      null,
      [secure],
      false);
  }

  setVSyncDisplayID(display_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec,
      null,
      [display_id],
      false);
  }

  setDisplayVSyncParameters(timebase, interval) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec,
      null,
      [timebase, interval],
      false);
  }

  forceImmediateDrawAndSwapIfPossible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec,
      null,
      [],
      false);
  }

  updateRefreshRate(refresh_rate) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec,
      null,
      [refresh_rate],
      false);
  }

  setAdaptiveRefreshRateInfo(has_support, suggested_high, device_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec,
      null,
      [has_support, suggested_high, device_scale_factor],
      false);
  }

  setSupportedRefreshRates(refresh_rates) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec,
      null,
      [refresh_rates],
      false);
  }

  preserveChildSurfaceControls() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec,
      null,
      [],
      false);
  }

  setSwapCompletionCallbackEnabled(enable) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec,
      null,
      [enable],
      false);
  }

  addVSyncParameterObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setDelegatedInkPointRenderer(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setStandaloneBeginFrameObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setMaxVSyncAndVrr(max_vsync_interval, vrr_state) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec,
      null,
      [max_vsync_interval, vrr_state],
      false);
  }

};

viz.mojom.DisplayPrivate.getRemote = function() {
  let remote = new viz.mojom.DisplayPrivateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayPrivate',
    'context');
  return remote.$;
};

viz.mojom.DisplayPrivateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplayPrivate', [
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
        
        // Try Method 0: SetDisplayVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayVisible (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DisableSwapUntilResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableSwapUntilResize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Resize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_Resize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resize (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetDisplayColorMatrix
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayColorMatrix (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetDisplayColorSpaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayColorSpaces (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetOutputIsSecure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOutputIsSecure (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetVSyncDisplayID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVSyncDisplayID (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetDisplayVSyncParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDisplayVSyncParameters (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ForceImmediateDrawAndSwapIfPossible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceImmediateDrawAndSwapIfPossible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UpdateRefreshRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRefreshRate (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetAdaptiveRefreshRateInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAdaptiveRefreshRateInfo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetSupportedRefreshRates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSupportedRefreshRates (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: PreserveChildSurfaceControls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreserveChildSurfaceControls (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetSwapCompletionCallbackEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSwapCompletionCallbackEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: AddVSyncParameterObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVSyncParameterObserver (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetDelegatedInkPointRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDelegatedInkPointRenderer (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetStandaloneBeginFrameObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetStandaloneBeginFrameObserver (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetMaxVSyncAndVrr
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMaxVSyncAndVrr (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
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
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVisible_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayVisible');
          const result = this.impl.setDisplayVisible(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_DisableSwapUntilResize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.disableSwapUntilResize');
          const result = this.impl.disableSwapUntilResize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.DisplayPrivate_DisableSwapUntilResize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_Resize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.resize');
          const result = this.impl.resize(params.size);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorMatrix_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayColorMatrix');
          const result = this.impl.setDisplayColorMatrix(params.color_matrix);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayColorSpaces_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayColorSpaces');
          const result = this.impl.setDisplayColorSpaces(params.display_color_spaces);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetOutputIsSecure_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setOutputIsSecure');
          const result = this.impl.setOutputIsSecure(params.secure);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetVSyncDisplayID_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setVSyncDisplayID');
          const result = this.impl.setVSyncDisplayID(params.display_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDisplayVSyncParameters_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDisplayVSyncParameters');
          const result = this.impl.setDisplayVSyncParameters(params.timebase, params.interval);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_ForceImmediateDrawAndSwapIfPossible_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.forceImmediateDrawAndSwapIfPossible');
          const result = this.impl.forceImmediateDrawAndSwapIfPossible();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_UpdateRefreshRate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRefreshRate');
          const result = this.impl.updateRefreshRate(params.refresh_rate);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetAdaptiveRefreshRateInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setAdaptiveRefreshRateInfo');
          const result = this.impl.setAdaptiveRefreshRateInfo(params.has_support, params.suggested_high, params.device_scale_factor);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSupportedRefreshRates_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSupportedRefreshRates');
          const result = this.impl.setSupportedRefreshRates(params.refresh_rates);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_PreserveChildSurfaceControls_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.preserveChildSurfaceControls');
          const result = this.impl.preserveChildSurfaceControls();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetSwapCompletionCallbackEnabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setSwapCompletionCallbackEnabled');
          const result = this.impl.setSwapCompletionCallbackEnabled(params.enable);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_AddVSyncParameterObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addVSyncParameterObserver');
          const result = this.impl.addVSyncParameterObserver(params.observer);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetDelegatedInkPointRenderer_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setDelegatedInkPointRenderer');
          const result = this.impl.setDelegatedInkPointRenderer(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetStandaloneBeginFrameObserver_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setStandaloneBeginFrameObserver');
          const result = this.impl.setStandaloneBeginFrameObserver(params.observer);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayPrivate_SetMaxVSyncAndVrr_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setMaxVSyncAndVrr');
          const result = this.impl.setMaxVSyncAndVrr(params.max_vsync_interval, params.vrr_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.DisplayPrivateReceiver = viz.mojom.DisplayPrivateReceiver;

viz.mojom.DisplayPrivatePtr = viz.mojom.DisplayPrivateRemote;
viz.mojom.DisplayPrivateRequest = viz.mojom.DisplayPrivatePendingReceiver;


// Interface: DisplayClient
mojo.internal.Struct(
    viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec, 'viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_Params', [
      mojo.internal.StructField('ca_layer_params', 0, 0, gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec, 'viz.mojom.DisplayClient_CreateLayeredWindowUpdater_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.LayeredWindowUpdaterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec, 'viz.mojom.DisplayClient_AddChildWindowToBrowser_Params', [
      mojo.internal.StructField('child_window', 0, 0, gpu.mojom.SurfaceHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec, 'viz.mojom.DisplayClient_DidCompleteSwapWithSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec, 'viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec, 'viz.mojom.DisplayClient_OnContextCreationResult_Params', [
      mojo.internal.StructField('result', 0, 0, gpu.mojom.ContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec, 'viz.mojom.DisplayClient_SetWideColorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec, 'viz.mojom.DisplayClient_SetPreferredRefreshRate_Params', [
      mojo.internal.StructField('refresh_rate', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.DisplayClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.DisplayClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.DisplayClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.DisplayClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.DisplayClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.DisplayClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DisplayClient', [
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

  onDisplayReceivedCALayerParams(ca_layer_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  createLayeredWindowUpdater(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec,
      null,
      [receiver],
      false);
  }

  addChildWindowToBrowser(child_window) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec,
      null,
      [child_window],
      false);
  }

  didCompleteSwapWithSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec,
      null,
      [size],
      false);
  }

  didCompleteSwapWithNewSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec,
      null,
      [size],
      false);
  }

  onContextCreationResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec,
      null,
      [result],
      false);
  }

  setWideColorEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setPreferredRefreshRate(refresh_rate) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec,
      null,
      [refresh_rate],
      false);
  }

};

viz.mojom.DisplayClient.getRemote = function() {
  let remote = new viz.mojom.DisplayClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.DisplayClient',
    'context');
  return remote.$;
};

viz.mojom.DisplayClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DisplayClient', [
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
        
        // Try Method 0: OnDisplayReceivedCALayerParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDisplayReceivedCALayerParams (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateLayeredWindowUpdater
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateLayeredWindowUpdater (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddChildWindowToBrowser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddChildWindowToBrowser (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidCompleteSwapWithSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCompleteSwapWithSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DidCompleteSwapWithNewSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCompleteSwapWithNewSize (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnContextCreationResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnContextCreationResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetWideColorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWideColorEnabled (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetPreferredRefreshRate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreferredRefreshRate (7)');
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
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_OnDisplayReceivedCALayerParams_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onDisplayReceivedCALayerParams');
          const result = this.impl.onDisplayReceivedCALayerParams(params.ca_layer_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_CreateLayeredWindowUpdater_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createLayeredWindowUpdater');
          const result = this.impl.createLayeredWindowUpdater(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_AddChildWindowToBrowser_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addChildWindowToBrowser');
          const result = this.impl.addChildWindowToBrowser(params.child_window);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithSize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didCompleteSwapWithSize');
          const result = this.impl.didCompleteSwapWithSize(params.size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_DidCompleteSwapWithNewSize_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.didCompleteSwapWithNewSize');
          const result = this.impl.didCompleteSwapWithNewSize(params.size);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_OnContextCreationResult_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextCreationResult');
          const result = this.impl.onContextCreationResult(params.result);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_SetWideColorEnabled_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setWideColorEnabled');
          const result = this.impl.setWideColorEnabled(params.enabled);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.DisplayClient_SetPreferredRefreshRate_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPreferredRefreshRate');
          const result = this.impl.setPreferredRefreshRate(params.refresh_rate);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.DisplayClientReceiver = viz.mojom.DisplayClientReceiver;

viz.mojom.DisplayClientPtr = viz.mojom.DisplayClientRemote;
viz.mojom.DisplayClientRequest = viz.mojom.DisplayClientPendingReceiver;

