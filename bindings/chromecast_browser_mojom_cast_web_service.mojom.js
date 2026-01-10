// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
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
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

chromecast.mojom.BackgroundColorSpec = { $: mojo.internal.Enum() };
chromecast.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };
chromecast.mojom.RendererPoolSpec = { $: mojo.internal.Enum() };
chromecast.mojom.GesturePrioritySpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastWebViewParamsSpec = { $: {} };
chromecast.mojom.CastWebService = {};
chromecast.mojom.CastWebService.$interfaceName = 'chromecast.mojom.CastWebService';
chromecast.mojom.CastWebService_CreateWebView_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec = { $: {} };

// Enum: BackgroundColor
chromecast.mojom.BackgroundColor = {
  NONE: 0,
  WHITE: 1,
  BLACK: 2,
  TRANSPARENT: 3,
};

// Enum: RendererType
chromecast.mojom.RendererType = {
  DEFAULT_RENDERER: 0,
  MOJO_RENDERER: 1,
  REMOTING_RENDERER: 2,
};

// Enum: RendererPool
chromecast.mojom.RendererPool = {
  NONE: 0,
  OVERLAY: 1,
};

// Enum: GesturePriority
chromecast.mojom.GesturePriority = {
  NONE: 0,
  ROOT_UI: 1,
  MAIN_ACTIVITY: 2,
  SETTINGS_UI: 3,
};

// Struct: CastWebViewParams
mojo.internal.Struct(
    chromecast.mojom.CastWebViewParamsSpec, 'chromecast.mojom.CastWebViewParams', [
      mojo.internal.StructField('activity_id', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('sdk_version', 16, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('log_prefix', 24, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('shutdown_delay', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_pool', 40, 0, chromecast.mojom.RendererPoolSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('prelaunch_url', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 56, 0, chromecast.mojom.RendererTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('background_color', 64, 0, chromecast.mojom.BackgroundColorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url_filters', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('gesture_priority', 80, 0, chromecast.mojom.GesturePrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('allow_media_access', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_720p_resolution', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed', 88, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('log_js_console_messages', 88, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled_for_dev', 88, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_root_window', 88, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('handle_inner_contents', 88, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_media_blocker', 88, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_websql', 89, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_mixer_audio', 89, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webrtc_allow_legacy_tls_protocols', 89, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_touch_input', 89, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_remote_control_mode', 89, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('turn_on_screen', 89, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('keep_screen_on', 89, 6, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_webui_bindings_permission', 89, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_url_rewrite_rules', 90, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: CastWebService
mojo.internal.Struct(
    chromecast.mojom.CastWebService_CreateWebView_ParamsSpec, 'chromecast.mojom.CastWebService_CreateWebView_Params', [
      mojo.internal.StructField('params', 0, 0, chromecast.mojom.CastWebViewParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_contents', 8, 0, mojo.internal.InterfaceRequest(chromecast.mojom.CastWebContentsRemote), null, false, 0, undefined),
      mojo.internal.StructField('window', 16, 0, mojo.internal.InterfaceRequest(chromecast.mojom.CastContentWindowRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec, 'chromecast.mojom.CastWebService_RegisterWebUiClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.WebUiClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('hosts', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec, 'chromecast.mojom.CastWebService_FlushDomLocalStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec, 'chromecast.mojom.CastWebService_ClearLocalStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec, 'chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParams', [
    ],
    [[0, 8]]);

chromecast.mojom.CastWebServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWebView(params, web_contents, window) {
    return this.$.createWebView(params, web_contents, window);
  }
  registerWebUiClient(client, hosts) {
    return this.$.registerWebUiClient(client, hosts);
  }
  flushDomLocalStorage() {
    return this.$.flushDomLocalStorage();
  }
  clearLocalStorage() {
    return this.$.clearLocalStorage();
  }
};

chromecast.mojom.CastWebServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastWebService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWebView(params, web_contents, window) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.CastWebService_CreateWebView_ParamsSpec,
      null,
      [params, web_contents, window],
      false);
  }

  registerWebUiClient(client, hosts) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec,
      null,
      [client, hosts],
      false);
  }

  flushDomLocalStorage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec,
      null,
      [],
      false);
  }

  clearLocalStorage() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec,
      chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.mojom.CastWebService.getRemote = function() {
  let remote = new chromecast.mojom.CastWebServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebService',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastWebService', [
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
        
        // Try Method 0: CreateWebView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebService_CreateWebView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWebView (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterWebUiClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterWebUiClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FlushDomLocalStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushDomLocalStorage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClearLocalStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearLocalStorage (3)');
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
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebService_CreateWebView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebView');
          const result = this.impl.createWebView(params.params, params.web_contents, params.window);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerWebUiClient');
          const result = this.impl.registerWebUiClient(params.client, params.hosts);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushDomLocalStorage');
          const result = this.impl.flushDomLocalStorage();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearLocalStorage');
          const result = this.impl.clearLocalStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec);
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

chromecast.mojom.CastWebServiceReceiver = chromecast.mojom.CastWebServiceReceiver;

chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

