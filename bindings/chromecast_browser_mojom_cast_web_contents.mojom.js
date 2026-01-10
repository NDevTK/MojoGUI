// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_contents.mojom
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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var url_rewrite = url_rewrite || {};
var mojo_base = mojo_base || {};
var url = url || {};

chromecast.mojom.PageStateSpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastWebContentsObserver = {};
chromecast.mojom.CastWebContentsObserver.$interfaceName = 'chromecast.mojom.CastWebContentsObserver';
chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents = {};
chromecast.mojom.CastWebContents.$interfaceName = 'chromecast.mojom.CastWebContents';
chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_ClosePage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_AddObserver_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec = { $: {} };
chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec = { $: {} };

// Enum: PageState
chromecast.mojom.PageState = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  CLOSED: 3,
  DESTROYED: 4,
  ERROR: 5,
};

// Interface: CastWebContentsObserver
mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_PageStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, chromecast.mojom.PageStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_PageStopped_Params', [
      mojo.internal.StructField('state', 0, 0, chromecast.mojom.PageStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_Params', [
      mojo.internal.StructField('render_process_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('render_frame_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_UpdateTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_Params', [
      mojo.internal.StructField('media_playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec, 'chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_Params', [
      mojo.internal.StructField('web_contents', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.CastWebContentsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebContentsObserverRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebContentsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebContentsObserverPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebContentsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebContentsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastWebContentsObserver', [
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

  pageStateChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  pageStopped(state, error_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec,
      null,
      [state, error_code],
      false);
  }

  renderFrameCreated(render_process_id, render_frame_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec,
      null,
      [render_process_id, render_frame_id],
      false);
  }

  mainFrameFinishedNavigation() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec,
      null,
      [],
      false);
  }

  updateTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  updateFaviconURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec,
      null,
      [url],
      false);
  }

  didFirstVisuallyNonEmptyPaint() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      [],
      false);
  }

  resourceLoadFailed() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec,
      null,
      [],
      false);
  }

  onRenderProcessReady(pid) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec,
      null,
      [pid],
      false);
  }

  mediaPlaybackChanged(media_playing) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec,
      null,
      [media_playing],
      false);
  }

  innerContentsCreated(web_contents) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec,
      null,
      [web_contents],
      false);
  }

};

chromecast.mojom.CastWebContentsObserver.getRemote = function() {
  let remote = new chromecast.mojom.CastWebContentsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebContentsObserver',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebContentsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastWebContentsObserver', [
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
        
        // Try Method 0: PageStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PageStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RenderFrameCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderFrameCreated (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MainFrameFinishedNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MainFrameFinishedNavigation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTitle (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateFaviconURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateFaviconURL (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DidFirstVisuallyNonEmptyPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFirstVisuallyNonEmptyPaint (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResourceLoadFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResourceLoadFailed (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnRenderProcessReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnRenderProcessReady (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: MediaPlaybackChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MediaPlaybackChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: InnerContentsCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InnerContentsCreated (10)');
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
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageStateChanged');
          const result = this.impl.pageStateChanged(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_PageStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageStopped');
          const result = this.impl.pageStopped(params.state, params.error_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_RenderFrameCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderFrameCreated');
          const result = this.impl.renderFrameCreated(params.render_process_id, params.render_frame_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MainFrameFinishedNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainFrameFinishedNavigation');
          const result = this.impl.mainFrameFinishedNavigation();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTitle');
          const result = this.impl.updateTitle(params.title);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_UpdateFaviconURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFaviconURL');
          const result = this.impl.updateFaviconURL(params.url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFirstVisuallyNonEmptyPaint');
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_ResourceLoadFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resourceLoadFailed');
          const result = this.impl.resourceLoadFailed();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_OnRenderProcessReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onRenderProcessReady');
          const result = this.impl.onRenderProcessReady(params.pid);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_MediaPlaybackChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaPlaybackChanged');
          const result = this.impl.mediaPlaybackChanged(params.media_playing);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContentsObserver_InnerContentsCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.innerContentsCreated');
          const result = this.impl.innerContentsCreated(params.web_contents);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.CastWebContentsObserverReceiver = chromecast.mojom.CastWebContentsObserverReceiver;

chromecast.mojom.CastWebContentsObserverPtr = chromecast.mojom.CastWebContentsObserverRemote;
chromecast.mojom.CastWebContentsObserverRequest = chromecast.mojom.CastWebContentsObserverPendingReceiver;


// Interface: CastWebContents
mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec, 'chromecast.mojom.CastWebContents_SetAppProperties_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_web_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature_permissions', 24, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('additional_feature_permission_origins', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('is_audio_app', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_feature_permissions', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec, 'chromecast.mojom.CastWebContents_SetGroupInfo_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_multizone_launch', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec, 'chromecast.mojom.CastWebContents_AddRendererFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec, 'chromecast.mojom.CastWebContents_SetInterfacesForRenderer_Params', [
      mojo.internal.StructField('remote_interfaces', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.RemoteInterfacesRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec, 'chromecast.mojom.CastWebContents_LoadUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_ClosePage_ParamsSpec, 'chromecast.mojom.CastWebContents_ClosePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec, 'chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec, 'chromecast.mojom.CastWebContents_BlockMediaLoading_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec, 'chromecast.mojom.CastWebContents_BlockMediaStarting_Params', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec, 'chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec, 'chromecast.mojom.CastWebContents_ConnectToBindingsService_Params', [
      mojo.internal.StructField('api_bindings_remote', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.ApiBindingsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_AddObserver_ParamsSpec, 'chromecast.mojom.CastWebContents_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.CastWebContentsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec, 'chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec, 'chromecast.mojom.CastWebContents_GetMainFramePid_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec, 'chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParams', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.CastWebContentsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebContentsRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebContents';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebContentsPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebContentsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebContentsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CastWebContents', [
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

  setAppProperties(app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec,
      null,
      [app_id, session_id, is_audio_app, app_web_url, enforce_feature_permissions, feature_permissions, additional_feature_permission_origins],
      false);
  }

  setGroupInfo(session_id, is_multizone_launch) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec,
      null,
      [session_id, is_multizone_launch],
      false);
  }

  addRendererFeatures(features) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec,
      null,
      [features],
      false);
  }

  setInterfacesForRenderer(remote_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec,
      null,
      [remote_interfaces],
      false);
  }

  loadUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec,
      null,
      [url],
      false);
  }

  closePage() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromecast.mojom.CastWebContents_ClosePage_ParamsSpec,
      null,
      [],
      false);
  }

  setWebVisibilityAndPaint(visible) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec,
      null,
      [visible],
      false);
  }

  blockMediaLoading(blocked) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec,
      null,
      [blocked],
      false);
  }

  blockMediaStarting(blocked) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec,
      null,
      [blocked],
      false);
  }

  enableBackgroundVideoPlayback(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec,
      null,
      [enabled],
      false);
  }

  connectToBindingsService(api_bindings_remote) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec,
      null,
      [api_bindings_remote],
      false);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chromecast.mojom.CastWebContents_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  setEnabledForRemoteDebugging(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getMainFramePid() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec,
      chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.mojom.CastWebContents.getRemote = function() {
  let remote = new chromecast.mojom.CastWebContentsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebContents',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebContentsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CastWebContents', [
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
        
        // Try Method 0: SetAppProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAppProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetGroupInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGroupInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddRendererFeatures
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddRendererFeatures (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetInterfacesForRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInterfacesForRenderer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LoadUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ClosePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_ClosePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePage (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetWebVisibilityAndPaint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebVisibilityAndPaint (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BlockMediaLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockMediaLoading (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: BlockMediaStarting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BlockMediaStarting (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EnableBackgroundVideoPlayback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableBackgroundVideoPlayback (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ConnectToBindingsService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToBindingsService (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetEnabledForRemoteDebugging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEnabledForRemoteDebugging (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetMainFramePid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMainFramePid (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetAppProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAppProperties');
          const result = this.impl.setAppProperties(params.app_id, params.session_id, params.is_audio_app, params.app_web_url, params.enforce_feature_permissions, params.feature_permissions, params.additional_feature_permission_origins);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetGroupInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGroupInfo');
          const result = this.impl.setGroupInfo(params.session_id, params.is_multizone_launch);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddRendererFeatures_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addRendererFeatures');
          const result = this.impl.addRendererFeatures(params.features);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetInterfacesForRenderer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInterfacesForRenderer');
          const result = this.impl.setInterfacesForRenderer(params.remote_interfaces);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_LoadUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadUrl');
          const result = this.impl.loadUrl(params.url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_ClosePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePage');
          const result = this.impl.closePage();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetWebVisibilityAndPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebVisibilityAndPaint');
          const result = this.impl.setWebVisibilityAndPaint(params.visible);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockMediaLoading');
          const result = this.impl.blockMediaLoading(params.blocked);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_BlockMediaStarting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.blockMediaStarting');
          const result = this.impl.blockMediaStarting(params.blocked);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_EnableBackgroundVideoPlayback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableBackgroundVideoPlayback');
          const result = this.impl.enableBackgroundVideoPlayback(params.enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_ConnectToBindingsService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToBindingsService');
          const result = this.impl.connectToBindingsService(params.api_bindings_remote);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_SetEnabledForRemoteDebugging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnabledForRemoteDebugging');
          const result = this.impl.setEnabledForRemoteDebugging(params.enabled);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.CastWebContents_GetMainFramePid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMainFramePid');
          const result = this.impl.getMainFramePid();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.CastWebContents_GetMainFramePid_ResponseParamsSpec);
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

chromecast.mojom.CastWebContentsReceiver = chromecast.mojom.CastWebContentsReceiver;

chromecast.mojom.CastWebContentsPtr = chromecast.mojom.CastWebContentsRemote;
chromecast.mojom.CastWebContentsRequest = chromecast.mojom.CastWebContentsPendingReceiver;

