// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/page.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var skia = skia || {};
var color = color || {};

blink.mojom.PagehideDispatchSpec = { $: mojo.internal.Enum() };
blink.mojom.PageLifecycleStateSpec = { $: {} };
blink.mojom.PageRestoreParamsSpec = { $: {} };
blink.mojom.ColorProviderColorMapsSpec = { $: {} };
blink.mojom.PrerenderPageActivationParamsSpec = { $: {} };
blink.mojom.PageBroadcast = {};
blink.mojom.PageBroadcast.$interfaceName = 'blink.mojom.PageBroadcast';
blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec = { $: {} };
blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec = { $: {} };
blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec = { $: {} };

// Enum: PagehideDispatch
blink.mojom.PagehideDispatch = {
  kNotDispatched: 0,
  kDispatchedNotPersisted: 1,
  kDispatchedPersisted: 2,
};

// Struct: PageLifecycleState
mojo.internal.Struct(
    blink.mojom.PageLifecycleStateSpec, 'blink.mojom.PageLifecycleState', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.PageVisibilityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pagehide_dispatch', 8, 0, blink.mojom.PagehideDispatchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_frozen', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_in_back_forward_cache', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('eviction_enabled', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PageRestoreParams
mojo.internal.Struct(
    blink.mojom.PageRestoreParamsSpec, 'blink.mojom.PageRestoreParams', [
      mojo.internal.StructField('navigation_start', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_transition_state', 8, 0, blink.mojom.ViewTransitionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pending_history_list_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('current_history_list_length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ColorProviderColorMaps
mojo.internal.Struct(
    blink.mojom.ColorProviderColorMapsSpec, 'blink.mojom.ColorProviderColorMaps', [
      mojo.internal.StructField('light_colors_map', 0, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('dark_colors_map', 8, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('forced_colors_map', 16, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrerenderPageActivationParams
mojo.internal.Struct(
    blink.mojom.PrerenderPageActivationParamsSpec, 'blink.mojom.PrerenderPageActivationParams', [
      mojo.internal.StructField('was_user_activated', 0, 0, blink.mojom.WasActivatedOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_start', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('view_transition_state', 16, 0, blink.mojom.ViewTransitionStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageBroadcast
mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageLifecycleState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PageLifecycleStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_restore_params', 8, 0, blink.mojom.PageRestoreParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec, 'blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec, 'blink.mojom.PageBroadcast_AudioStateChanged_Params', [
      mojo.internal.StructField('is_audio_playing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec, 'blink.mojom.PageBroadcast_ActivatePrerenderedPage_Params', [
      mojo.internal.StructField('prerender_page_activation_params', 0, 0, blink.mojom.PrerenderPageActivationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec, 'blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateWebPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateRendererPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec, 'blink.mojom.PageBroadcast_SetHistoryIndexAndLength_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_Params', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec, 'blink.mojom.PageBroadcast_CreateRemoteMainFrame_Params', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('replication_state', 16, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 40, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_main_frame_interfaces', 48, 0, blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec, 'blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_Params', [
      mojo.internal.StructField('browsing_context_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageAttributionSupport_Params', [
      mojo.internal.StructField('support', 0, 0, network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateColorProviders_Params', [
      mojo.internal.StructField('color_provider_colors', 0, 0, blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec, 'blink.mojom.PageBroadcast_SetSupportsDraggableRegions_Params', [
      mojo.internal.StructField('supports_draggable_regions', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PageBroadcastPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PageBroadcastRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PageBroadcast';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PageBroadcastPendingReceiver,
      handle);
    this.$ = new blink.mojom.PageBroadcastRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PageBroadcastRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageBroadcast', [
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

  setPageLifecycleState(state, page_restore_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec,
      blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec,
      [state, page_restore_params],
      false);
  }

  audioStateChanged(is_audio_playing) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec,
      null,
      [is_audio_playing],
      false);
  }

  activatePrerenderedPage(prerender_page_activation_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec,
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec,
      [prerender_page_activation_params],
      false);
  }

  updateWebPreferences(preferences) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec,
      null,
      [preferences],
      false);
  }

  updateRendererPreferences(preferences) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec,
      null,
      [preferences],
      false);
  }

  setHistoryIndexAndLength(index, length) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec,
      null,
      [index, length],
      false);
  }

  setPageBaseBackgroundColor(color) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec,
      null,
      [color],
      false);
  }

  createRemoteMainFrame(token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec,
      null,
      [token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces],
      false);
  }

  updatePageBrowsingContextGroup(browsing_context_group_token) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec,
      null,
      [browsing_context_group_token],
      false);
  }

  setPageAttributionSupport(support) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec,
      null,
      [support],
      false);
  }

  updateColorProviders(color_provider_colors) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec,
      null,
      [color_provider_colors],
      false);
  }

  setSupportsDraggableRegions(supports_draggable_regions) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec,
      null,
      [supports_draggable_regions],
      false);
  }

};

blink.mojom.PageBroadcast.getRemote = function() {
  let remote = new blink.mojom.PageBroadcastRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PageBroadcast',
    'context');
  return remote.$;
};

blink.mojom.PageBroadcastReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageBroadcast', [
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
        
        // Try Method 0: SetPageLifecycleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageLifecycleState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AudioStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ActivatePrerenderedPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivatePrerenderedPage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateWebPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWebPreferences (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateRendererPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRendererPreferences (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetHistoryIndexAndLength
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHistoryIndexAndLength (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetPageBaseBackgroundColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageBaseBackgroundColor (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateRemoteMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteMainFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdatePageBrowsingContextGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePageBrowsingContextGroup (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPageAttributionSupport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageAttributionSupport (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdateColorProviders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateColorProviders (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetSupportsDraggableRegions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSupportsDraggableRegions (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageLifecycleState');
          const result = this.impl.setPageLifecycleState(params.state, params.page_restore_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.audioStateChanged');
          const result = this.impl.audioStateChanged(params.is_audio_playing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activatePrerenderedPage');
          const result = this.impl.activatePrerenderedPage(params.prerender_page_activation_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateWebPreferences');
          const result = this.impl.updateWebPreferences(params.preferences);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRendererPreferences');
          const result = this.impl.updateRendererPreferences(params.preferences);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHistoryIndexAndLength');
          const result = this.impl.setHistoryIndexAndLength(params.index, params.length);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageBaseBackgroundColor');
          const result = this.impl.setPageBaseBackgroundColor(params.color);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteMainFrame');
          const result = this.impl.createRemoteMainFrame(params.token, params.opener_frame_token, params.replication_state, params.is_loading, params.devtools_frame_token, params.navigation_metrics_token, params.remote_frame_interfaces, params.remote_main_frame_interfaces);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePageBrowsingContextGroup');
          const result = this.impl.updatePageBrowsingContextGroup(params.browsing_context_group_token);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageAttributionSupport');
          const result = this.impl.setPageAttributionSupport(params.support);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateColorProviders');
          const result = this.impl.updateColorProviders(params.color_provider_colors);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSupportsDraggableRegions');
          const result = this.impl.setSupportsDraggableRegions(params.supports_draggable_regions);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PageBroadcastReceiver = blink.mojom.PageBroadcastReceiver;

blink.mojom.PageBroadcastPtr = blink.mojom.PageBroadcastRemote;
blink.mojom.PageBroadcastRequest = blink.mojom.PageBroadcastPendingReceiver;

