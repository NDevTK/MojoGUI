// Auto-generated MojoJS binding
 // Source: chromium_src/chromecast/common/mojom/gesture.mojom
 // Module: chromecast.mojom

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
 

 mojo.internal.bindings.chromecast = mojo.internal.bindings.chromecast || {};
mojo.internal.bindings.chromecast.mojom = mojo.internal.bindings.chromecast.mojom || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.chromecast.mojom.GestureHandler = {};
mojo.internal.bindings.chromecast.mojom.GestureHandler.$interfaceName = 'chromecast.mojom.GestureHandler';
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureSource = {};
mojo.internal.bindings.chromecast.mojom.GestureSource.$interfaceName = 'chromecast.mojom.GestureSource';
mojo.internal.bindings.chromecast.mojom.GestureSource_Subscribe_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec = { $: {} };
mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec = { $: {} };

// Interface: GestureHandler
mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGesture_ResponseParams', [
      mojo.internal.StructField('arg_was_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGestureProgress_Params', [
      mojo.internal.StructField('arg_touch_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTopDragGestureProgress_Params', [
      mojo.internal.StructField('arg_touch_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTopDragGestureDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec, 'chromecast.mojom.GestureHandler_OnRightDragGestureProgress_Params', [
      mojo.internal.StructField('arg_touch_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec, 'chromecast.mojom.GestureHandler_OnRightDragGestureDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec, 'chromecast.mojom.GestureHandler_OnBackGestureCancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTapGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec, 'chromecast.mojom.GestureHandler_OnTapDownGesture_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.chromecast.mojom.GestureHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromecast.mojom.GestureHandlerRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromecast.mojom.GestureHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromecast.mojom.GestureHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBackGesture() {
    return this.$.onBackGesture();
  }
  onBackGestureProgress(arg_touch_location) {
    return this.$.onBackGestureProgress(arg_touch_location);
  }
  onTopDragGestureProgress(arg_touch_location) {
    return this.$.onTopDragGestureProgress(arg_touch_location);
  }
  onTopDragGestureDone() {
    return this.$.onTopDragGestureDone();
  }
  onRightDragGestureProgress(arg_touch_location) {
    return this.$.onRightDragGestureProgress(arg_touch_location);
  }
  onRightDragGestureDone() {
    return this.$.onRightDragGestureDone();
  }
  onBackGestureCancel() {
    return this.$.onBackGestureCancel();
  }
  onTapGesture() {
    return this.$.onTapGesture();
  }
  onTapDownGesture() {
    return this.$.onTapDownGesture();
  }
};

mojo.internal.bindings.chromecast.mojom.GestureHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GestureHandler', [
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

  onBackGesture() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec,
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec,
      [],
      false);
  }

  onBackGestureProgress(arg_touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec,
      null,
      [arg_touch_location],
      false);
  }

  onTopDragGestureProgress(arg_touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec,
      null,
      [arg_touch_location],
      false);
  }

  onTopDragGestureDone() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onRightDragGestureProgress(arg_touch_location) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec,
      null,
      [arg_touch_location],
      false);
  }

  onRightDragGestureDone() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec,
      null,
      [],
      false);
  }

  onBackGestureCancel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec,
      null,
      [],
      false);
  }

  onTapGesture() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec,
      null,
      [],
      false);
  }

  onTapDownGesture() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.chromecast.mojom.GestureHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.chromecast.mojom.GestureHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromecast.mojom.GestureHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GestureHandler', [
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
        
        // Try Method 0: OnBackGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGesture (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBackGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGestureProgress (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnTopDragGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopDragGestureProgress (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnTopDragGestureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopDragGestureDone (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnRightDragGestureProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRightDragGestureProgress (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnRightDragGestureDone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRightDragGestureDone (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnBackGestureCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBackGestureCancel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnTapGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTapGesture (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnTapDownGesture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTapDownGesture (8)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackGesture');
          const result = this.impl.onBackGesture();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGesture_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnBackGesture FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackGestureProgress');
          const result = this.impl.onBackGestureProgress(params.arg_touch_location);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTopDragGestureProgress');
          const result = this.impl.onTopDragGestureProgress(params.arg_touch_location);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTopDragGestureDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTopDragGestureDone');
          const result = this.impl.onTopDragGestureDone();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRightDragGestureProgress');
          const result = this.impl.onRightDragGestureProgress(params.arg_touch_location);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnRightDragGestureDone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRightDragGestureDone');
          const result = this.impl.onRightDragGestureDone();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnBackGestureCancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBackGestureCancel');
          const result = this.impl.onBackGestureCancel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTapGesture');
          const result = this.impl.onTapGesture();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureHandler_OnTapDownGesture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTapDownGesture');
          const result = this.impl.onTapDownGesture();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromecast.mojom.GestureHandlerReceiver = mojo.internal.bindings.chromecast.mojom.GestureHandlerReceiver;

mojo.internal.bindings.chromecast.mojom.GestureHandlerPtr = mojo.internal.bindings.chromecast.mojom.GestureHandlerRemote;
mojo.internal.bindings.chromecast.mojom.GestureHandlerRequest = mojo.internal.bindings.chromecast.mojom.GestureHandlerPendingReceiver;


// Interface: GestureSource
mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureSource_Subscribe_ParamsSpec, 'chromecast.mojom.GestureSource_Subscribe_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chromecast.mojom.GestureHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanGoBack_Params', [
      mojo.internal.StructField('arg_can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanTopDrag_Params', [
      mojo.internal.StructField('arg_can_top_drag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec, 'chromecast.mojom.GestureSource_SetCanRightDrag_Params', [
      mojo.internal.StructField('arg_can_top_drag', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chromecast.mojom.GestureSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chromecast.mojom.GestureSourceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.GestureSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chromecast.mojom.GestureSourcePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chromecast.mojom.GestureSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribe(arg_handler) {
    return this.$.subscribe(arg_handler);
  }
  setCanGoBack(arg_can_go_back) {
    return this.$.setCanGoBack(arg_can_go_back);
  }
  setCanTopDrag(arg_can_top_drag) {
    return this.$.setCanTopDrag(arg_can_top_drag);
  }
  setCanRightDrag(arg_can_top_drag) {
    return this.$.setCanRightDrag(arg_can_top_drag);
  }
};

mojo.internal.bindings.chromecast.mojom.GestureSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GestureSource', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribe(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureSource_Subscribe_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

  setCanGoBack(arg_can_go_back) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec,
      null,
      [arg_can_go_back],
      false);
  }

  setCanTopDrag(arg_can_top_drag) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec,
      null,
      [arg_can_top_drag],
      false);
  }

  setCanRightDrag(arg_can_top_drag) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec,
      null,
      [arg_can_top_drag],
      false);
  }

};

mojo.internal.bindings.chromecast.mojom.GestureSource.getRemote = function() {
  let remote = new mojo.internal.bindings.chromecast.mojom.GestureSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.GestureSource',
    'context');
  return remote.$;
};

mojo.internal.bindings.chromecast.mojom.GestureSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GestureSource', [
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
        
        // Try Method 0: Subscribe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_Subscribe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Subscribe (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetCanGoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanGoBack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetCanTopDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanTopDrag (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetCanRightDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanRightDrag (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_Subscribe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribe');
          const result = this.impl.subscribe(params.arg_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanGoBack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanGoBack');
          const result = this.impl.setCanGoBack(params.arg_can_go_back);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanTopDrag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanTopDrag');
          const result = this.impl.setCanTopDrag(params.arg_can_top_drag);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chromecast.mojom.GestureSource_SetCanRightDrag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanRightDrag');
          const result = this.impl.setCanRightDrag(params.arg_can_top_drag);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chromecast.mojom.GestureSourceReceiver = mojo.internal.bindings.chromecast.mojom.GestureSourceReceiver;

mojo.internal.bindings.chromecast.mojom.GestureSourcePtr = mojo.internal.bindings.chromecast.mojom.GestureSourceRemote;
mojo.internal.bindings.chromecast.mojom.GestureSourceRequest = mojo.internal.bindings.chromecast.mojom.GestureSourcePendingReceiver;

