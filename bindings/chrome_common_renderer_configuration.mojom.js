// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/renderer_configuration.mojom
 // Module: chrome.mojom

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
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.chrome.mojom.ResumeBlockedRequestsTriggerSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.BoundSessionThrottlerParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.DynamicParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.StaticParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler = {};
mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler.$interfaceName = 'chrome.mojom.BoundSessionRequestThrottledHandler';
mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ChromeOSListener = {};
mojo.internal.bindings.chrome.mojom.ChromeOSListener.$interfaceName = 'chrome.mojom.ChromeOSListener';
mojo.internal.bindings.chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.RendererConfiguration = {};
mojo.internal.bindings.chrome.mojom.RendererConfiguration.$interfaceName = 'chrome.mojom.RendererConfiguration';
mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec = { $: {} };

// Enum: ResumeBlockedRequestsTrigger
mojo.internal.bindings.chrome.mojom.ResumeBlockedRequestsTrigger = {
  kObservedFreshCookies: 0,
  kCookieRefreshFetchSuccess: 1,
  kCookieRefreshFetchFailure: 2,
  kTimeout: 4,
  kShutdownOrSessionTermination: 5,
  kCookieAlreadyFresh: 6,
  kRendererDisconnected: 7,
  kThrottlingRequestsPaused: 8,
};

// Struct: BoundSessionThrottlerParams
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.BoundSessionThrottlerParamsSpec, 'chrome.mojom.BoundSessionThrottlerParams', [
      mojo.internal.StructField('arg_domain', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_expiry_date', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DynamicParams
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.DynamicParamsSpec, 'chrome.mojom.DynamicParams', [
      mojo.internal.StructField('arg_bound_session_throttler_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.BoundSessionThrottlerParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_domains_for_apps', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_youtube_restrict', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_force_safe_search', 20, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StaticParams
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.StaticParamsSpec, 'chrome.mojom.StaticParams', [
      mojo.internal.StructField('arg_is_instant_process', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BoundSessionRequestThrottledHandler
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec, 'chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_Params', [
      mojo.internal.StructField('arg_untrusted_request_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec, 'chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParams', [
      mojo.internal.StructField('arg_resume_trigger', 0, 0, mojo.internal.bindings.chrome.mojom.ResumeBlockedRequestsTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.BoundSessionRequestThrottledHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleRequestBlockedOnCookie(arg_untrusted_request_url) {
    return this.$.handleRequestBlockedOnCookie(arg_untrusted_request_url);
  }
};

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BoundSessionRequestThrottledHandler', [
      { explicit: null },
    ]);
  }

  handleRequestBlockedOnCookie(arg_untrusted_request_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec,
      [arg_untrusted_request_url],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.BoundSessionRequestThrottledHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BoundSessionRequestThrottledHandler', [
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
        
        // Try Method 0: HandleRequestBlockedOnCookie
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleRequestBlockedOnCookie (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleRequestBlockedOnCookie');
          const result = this.impl.handleRequestBlockedOnCookie(params.arg_untrusted_request_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleRequestBlockedOnCookie FAILED:', e));
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

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerReceiver = mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerReceiver;

mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerPtr = mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRemote;
mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerRequest = mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver;


// Interface: ChromeOSListener
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec, 'chrome.mojom.ChromeOSListener_MergeSessionComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.chrome.mojom.ChromeOSListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.ChromeOSListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ChromeOSListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.ChromeOSListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.ChromeOSListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mergeSessionComplete() {
    return this.$.mergeSessionComplete();
  }
};

mojo.internal.bindings.chrome.mojom.ChromeOSListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeOSListener', [
      { explicit: null },
    ]);
  }

  mergeSessionComplete() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.ChromeOSListener.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.ChromeOSListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ChromeOSListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.ChromeOSListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeOSListener', [
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
        
        // Try Method 0: MergeSessionComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MergeSessionComplete (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mergeSessionComplete');
          const result = this.impl.mergeSessionComplete();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.ChromeOSListenerReceiver = mojo.internal.bindings.chrome.mojom.ChromeOSListenerReceiver;

mojo.internal.bindings.chrome.mojom.ChromeOSListenerPtr = mojo.internal.bindings.chrome.mojom.ChromeOSListenerRemote;
mojo.internal.bindings.chrome.mojom.ChromeOSListenerRequest = mojo.internal.bindings.chrome.mojom.ChromeOSListenerPendingReceiver;


// Interface: RendererConfiguration
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetInitialConfiguration_Params', [
      mojo.internal.StructField('arg_chromeos_listener', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.chrome.mojom.ChromeOSListenerSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_content_settings_manager', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.content_settings.mojom.ContentSettingsManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_bound_session_request_throttled_handler', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.chrome.mojom.BoundSessionRequestThrottledHandlerSpec), null, true, 0, undefined),
      mojo.internal.StructField('arg_is_incognito_process', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetConfiguration_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.chrome.mojom.DynamicParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.chrome.mojom.StaticParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.RendererConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.RendererConfigurationRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RendererConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.RendererConfigurationPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.RendererConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setInitialConfiguration(arg_is_incognito_process, arg_chromeos_listener, arg_content_settings_manager, arg_bound_session_request_throttled_handler) {
    return this.$.setInitialConfiguration(arg_is_incognito_process, arg_chromeos_listener, arg_content_settings_manager, arg_bound_session_request_throttled_handler);
  }
  setConfiguration(arg_params) {
    return this.$.setConfiguration(arg_params);
  }
  setConfigurationOnProcessLockUpdate(arg_params) {
    return this.$.setConfigurationOnProcessLockUpdate(arg_params);
  }
};

mojo.internal.bindings.chrome.mojom.RendererConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererConfiguration', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setInitialConfiguration(arg_is_incognito_process, arg_chromeos_listener, arg_content_settings_manager, arg_bound_session_request_throttled_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec,
      null,
      [arg_is_incognito_process, arg_chromeos_listener, arg_content_settings_manager, arg_bound_session_request_throttled_handler],
      false);
  }

  setConfiguration(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  setConfigurationOnProcessLockUpdate(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec,
      null,
      [arg_params],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.RendererConfiguration.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.RendererConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RendererConfiguration',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.RendererConfigurationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererConfiguration', [
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
        
        // Try Method 0: SetInitialConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInitialConfiguration (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetConfiguration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetConfigurationOnProcessLockUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetConfigurationOnProcessLockUpdate (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInitialConfiguration');
          const result = this.impl.setInitialConfiguration(params.arg_is_incognito_process, params.arg_chromeos_listener, params.arg_content_settings_manager, params.arg_bound_session_request_throttled_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setConfiguration');
          const result = this.impl.setConfiguration(params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setConfigurationOnProcessLockUpdate');
          const result = this.impl.setConfigurationOnProcessLockUpdate(params.arg_params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.RendererConfigurationReceiver = mojo.internal.bindings.chrome.mojom.RendererConfigurationReceiver;

mojo.internal.bindings.chrome.mojom.RendererConfigurationPtr = mojo.internal.bindings.chrome.mojom.RendererConfigurationRemote;
mojo.internal.bindings.chrome.mojom.RendererConfigurationRequest = mojo.internal.bindings.chrome.mojom.RendererConfigurationPendingReceiver;

