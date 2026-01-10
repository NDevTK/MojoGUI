// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/frame.mojom
// Module: android_webview.mojom

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
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

android_webview.mojom.HitTestDataTypeSpec = { $: mojo.internal.Enum() };
android_webview.mojom.HitTestDataSpec = { $: {} };
android_webview.mojom.LocalMainFrame = {};
android_webview.mojom.LocalMainFrame.$interfaceName = 'android_webview.mojom.LocalMainFrame';
android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost = {};
android_webview.mojom.FrameHost.$interfaceName = 'android_webview.mojom.FrameHost';
android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec = { $: {} };

// Enum: HitTestDataType
android_webview.mojom.HitTestDataType = {
  kUnknown: 0,
  kPhone: 2,
  kGeo: 3,
  kEmail: 4,
  kImage: 5,
  kSrcLink: 7,
  kSrcImageLink: 8,
  kEditText: 9,
};

// Struct: HitTestData
mojo.internal.Struct(
    android_webview.mojom.HitTestDataSpec, 'android_webview.mojom.HitTestData', [
      mojo.internal.StructField('type', 0, 0, android_webview.mojom.HitTestDataTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra_data_for_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('href', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_text', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('img_src', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: LocalMainFrame
mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetInitialPageScale_Params', [
      mojo.internal.StructField('page_scale_factor', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetTextZoomFactor_Params', [
      mojo.internal.StructField('zoom_factor', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParams', [
      mojo.internal.StructField('has_images', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec, 'android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SmoothScroll_Params', [
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

android_webview.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new android_webview.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalMainFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setInitialPageScale(page_scale_factor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec,
      null,
      [page_scale_factor],
      false);
  }

  setTextZoomFactor(zoom_factor) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec,
      null,
      [zoom_factor],
      false);
  }

  documentHasImage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec,
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec,
      [],
      false);
  }

  resetScrollAndScaleState() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec,
      null,
      [],
      false);
  }

  smoothScroll(target_x, target_y, duration) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec,
      null,
      [target_x, target_y, duration],
      false);
  }

};

android_webview.mojom.LocalMainFrame.getRemote = function() {
  let remote = new android_webview.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

android_webview.mojom.LocalMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalMainFrame', [
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
        
        // Try Method 0: SetInitialPageScale
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInitialPageScale (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTextZoomFactor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextZoomFactor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DocumentHasImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DocumentHasImage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResetScrollAndScaleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetScrollAndScaleState (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SmoothScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SmoothScroll (4)');
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
          const params = decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setInitialPageScale');
          const result = this.impl.setInitialPageScale(params.page_scale_factor);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextZoomFactor');
          const result = this.impl.setTextZoomFactor(params.zoom_factor);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.documentHasImage');
          const result = this.impl.documentHasImage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.resetScrollAndScaleState');
          const result = this.impl.resetScrollAndScaleState();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.smoothScroll');
          const result = this.impl.smoothScroll(params.target_x, params.target_y, params.duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

android_webview.mojom.LocalMainFrameReceiver = android_webview.mojom.LocalMainFrameReceiver;

android_webview.mojom.LocalMainFramePtr = android_webview.mojom.LocalMainFrameRemote;
android_webview.mojom.LocalMainFrameRequest = android_webview.mojom.LocalMainFramePendingReceiver;


// Interface: FrameHost
mojo.internal.Struct(
    android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec, 'android_webview.mojom.FrameHost_UpdateHitTestData_Params', [
      mojo.internal.StructField('data', 0, 0, android_webview.mojom.HitTestDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec, 'android_webview.mojom.FrameHost_ContentsSizeChanged_Params', [
      mojo.internal.StructField('contents_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_Params', [
      mojo.internal.StructField('url', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_redirect', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

android_webview.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateHitTestData(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec,
      null,
      [data],
      false);
  }

  contentsSizeChanged(contents_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec,
      null,
      [contents_size],
      false);
  }

  shouldOverrideUrlLoading(url, has_user_gesture, is_redirect, is_outermost_main_frame) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec,
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec,
      [url, has_user_gesture, is_redirect, is_outermost_main_frame],
      false);
  }

};

android_webview.mojom.FrameHost.getRemote = function() {
  let remote = new android_webview.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.FrameHost',
    'context');
  return remote.$;
};

android_webview.mojom.FrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameHost', [
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
        
        // Try Method 0: UpdateHitTestData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateHitTestData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ContentsSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContentsSizeChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShouldOverrideUrlLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldOverrideUrlLoading (2)');
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
          const params = decoder.decodeStructInline(android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.updateHitTestData');
          const result = this.impl.updateHitTestData(params.data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.contentsSizeChanged');
          const result = this.impl.contentsSizeChanged(params.contents_size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldOverrideUrlLoading');
          const result = this.impl.shouldOverrideUrlLoading(params.url, params.has_user_gesture, params.is_redirect, params.is_outermost_main_frame);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec);
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

android_webview.mojom.FrameHostReceiver = android_webview.mojom.FrameHostReceiver;

android_webview.mojom.FrameHostPtr = android_webview.mojom.FrameHostRemote;
android_webview.mojom.FrameHostRequest = android_webview.mojom.FrameHostPendingReceiver;

