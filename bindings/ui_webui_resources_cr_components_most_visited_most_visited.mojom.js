// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/most_visited/most_visited.mojom
// Module: most_visited.mojom

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
var most_visited = most_visited || {};
most_visited.mojom = most_visited.mojom || {};
var ntp_tiles = ntp_tiles || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var url = url || {};

most_visited.mojom.MostVisitedTileSpec = { $: {} };
most_visited.mojom.MostVisitedThemeSpec = { $: {} };
most_visited.mojom.MostVisitedInfoSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandlerFactory = {};
most_visited.mojom.MostVisitedPageHandlerFactory.$interfaceName = 'most_visited.mojom.MostVisitedPageHandlerFactory';
most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler = {};
most_visited.mojom.MostVisitedPageHandler.$interfaceName = 'most_visited.mojom.MostVisitedPageHandler';
most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPage = {};
most_visited.mojom.MostVisitedPage.$interfaceName = 'most_visited.mojom.MostVisitedPage';
most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec = { $: {} };
most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec = { $: {} };

// Struct: MostVisitedTile
mojo.internal.Struct(
    most_visited.mojom.MostVisitedTileSpec, 'most_visited.mojom.MostVisitedTile', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title_direction', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 24, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title_source', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_query_tile', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_user_edit', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_user_delete', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MostVisitedTheme
mojo.internal.Struct(
    most_visited.mojom.MostVisitedThemeSpec, 'most_visited.mojom.MostVisitedTheme', [
      mojo.internal.StructField('background_color', 0, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_white_tile_icon', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_dark', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MostVisitedInfo
mojo.internal.Struct(
    most_visited.mojom.MostVisitedInfoSpec, 'most_visited.mojom.MostVisitedInfo', [
      mojo.internal.StructField('tiles', 0, 0, mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('custom_links_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enterprise_shortcuts_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('visible', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MostVisitedPageHandlerFactory
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(most_visited.mojom.MostVisitedPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(most_visited.mojom.MostVisitedPageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MostVisitedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

most_visited.mojom.MostVisitedPageHandlerFactory.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandlerFactory',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MostVisitedPageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = most_visited.mojom.MostVisitedPageHandlerFactoryReceiver;

most_visited.mojom.MostVisitedPageHandlerFactoryPtr = most_visited.mojom.MostVisitedPageHandlerFactoryRemote;
most_visited.mojom.MostVisitedPageHandlerFactoryRequest = most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver;


// Interface: MostVisitedPageHandler
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_pos', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_Params', [
      mojo.internal.StructField('source', 0, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_Params', [
      mojo.internal.StructField('source', 0, 0, ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_CancelPrerender_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParams', [
      mojo.internal.StructField('is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_Params', [
      mojo.internal.StructField('is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_Params', [
      mojo.internal.StructField('tiles', 0, 0, mojo.internal.Array(most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_Params', [
      mojo.internal.StructField('tile', 0, 0, most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('alt_key', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ctrl_key', 13, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('meta_key', 13, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shift_key', 13, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

most_visited.mojom.MostVisitedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPageHandlerPendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addMostVisitedTile(url, title) {
    return this.$.addMostVisitedTile(url, title);
  }
  deleteMostVisitedTile(tile) {
    return this.$.deleteMostVisitedTile(tile);
  }
  reorderMostVisitedTile(tile, new_pos) {
    return this.$.reorderMostVisitedTile(tile, new_pos);
  }
  restoreMostVisitedDefaults(source) {
    return this.$.restoreMostVisitedDefaults(source);
  }
  undoMostVisitedAutoRemoval() {
    return this.$.undoMostVisitedAutoRemoval();
  }
  undoMostVisitedTileAction(source) {
    return this.$.undoMostVisitedTileAction(source);
  }
  updateMostVisitedInfo() {
    return this.$.updateMostVisitedInfo();
  }
  updateMostVisitedTile(tile, new_url, new_title) {
    return this.$.updateMostVisitedTile(tile, new_url, new_title);
  }
  prerenderMostVisitedTile(tile) {
    return this.$.prerenderMostVisitedTile(tile);
  }
  prefetchMostVisitedTile(tile) {
    return this.$.prefetchMostVisitedTile(tile);
  }
  preconnectMostVisitedTile(tile) {
    return this.$.preconnectMostVisitedTile(tile);
  }
  cancelPrerender() {
    return this.$.cancelPrerender();
  }
  getMostVisitedExpandedState() {
    return this.$.getMostVisitedExpandedState();
  }
  setMostVisitedExpandedState(is_expanded) {
    return this.$.setMostVisitedExpandedState(is_expanded);
  }
  onMostVisitedTilesRendered(tiles, time) {
    return this.$.onMostVisitedTilesRendered(tiles, time);
  }
  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    return this.$.onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key);
  }
};

most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MostVisitedPageHandler', [
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

  addMostVisitedTile(url, title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec,
      [url, title],
      false);
  }

  deleteMostVisitedTile(tile) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  reorderMostVisitedTile(tile, new_pos) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec,
      null,
      [tile, new_pos],
      false);
  }

  restoreMostVisitedDefaults(source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec,
      null,
      [source],
      false);
  }

  undoMostVisitedAutoRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

  undoMostVisitedTileAction(source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec,
      null,
      [source],
      false);
  }

  updateMostVisitedInfo() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateMostVisitedTile(tile, new_url, new_title) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec,
      [tile, new_url, new_title],
      false);
  }

  prerenderMostVisitedTile(tile) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  prefetchMostVisitedTile(tile) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  preconnectMostVisitedTile(tile) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec,
      null,
      [tile],
      false);
  }

  cancelPrerender() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec,
      null,
      [],
      false);
  }

  getMostVisitedExpandedState() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec,
      most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec,
      [],
      false);
  }

  setMostVisitedExpandedState(is_expanded) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec,
      null,
      [is_expanded],
      false);
  }

  onMostVisitedTilesRendered(tiles, time) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec,
      null,
      [tiles, time],
      false);
  }

  onMostVisitedTileNavigation(tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec,
      null,
      [tile, index, mouse_button, alt_key, ctrl_key, meta_key, shift_key],
      false);
  }

};

most_visited.mojom.MostVisitedPageHandler.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandler',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MostVisitedPageHandler', [
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
        
        // Try Method 0: AddMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddMostVisitedTile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteMostVisitedTile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReorderMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReorderMostVisitedTile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RestoreMostVisitedDefaults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreMostVisitedDefaults (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UndoMostVisitedAutoRemoval
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoMostVisitedAutoRemoval (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UndoMostVisitedTileAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoMostVisitedTileAction (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateMostVisitedInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMostVisitedInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateMostVisitedTile (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: PrerenderMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrerenderMostVisitedTile (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PrefetchMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrefetchMostVisitedTile (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PreconnectMostVisitedTile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreconnectMostVisitedTile (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CancelPrerender
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPrerender (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetMostVisitedExpandedState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMostVisitedExpandedState (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetMostVisitedExpandedState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedExpandedState (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OnMostVisitedTilesRendered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMostVisitedTilesRendered (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: OnMostVisitedTileNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMostVisitedTileNavigation (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMostVisitedTile');
          const result = this.impl.addMostVisitedTile(params.url, params.title);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddMostVisitedTile FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteMostVisitedTile');
          const result = this.impl.deleteMostVisitedTile(params.tile);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reorderMostVisitedTile');
          const result = this.impl.reorderMostVisitedTile(params.tile, params.new_pos);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreMostVisitedDefaults');
          const result = this.impl.restoreMostVisitedDefaults(params.source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedAutoRemoval');
          const result = this.impl.undoMostVisitedAutoRemoval();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedTileAction');
          const result = this.impl.undoMostVisitedTileAction(params.source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedInfo');
          const result = this.impl.updateMostVisitedInfo();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedTile');
          const result = this.impl.updateMostVisitedTile(params.tile, params.new_url, params.new_title);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateMostVisitedTile FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prerenderMostVisitedTile');
          const result = this.impl.prerenderMostVisitedTile(params.tile);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prefetchMostVisitedTile');
          const result = this.impl.prefetchMostVisitedTile(params.tile);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preconnectMostVisitedTile');
          const result = this.impl.preconnectMostVisitedTile(params.tile);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPrerender');
          const result = this.impl.cancelPrerender();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisitedExpandedState');
          const result = this.impl.getMostVisitedExpandedState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMostVisitedExpandedState FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedExpandedState');
          const result = this.impl.setMostVisitedExpandedState(params.is_expanded);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMostVisitedTilesRendered');
          const result = this.impl.onMostVisitedTilesRendered(params.tiles, params.time);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMostVisitedTileNavigation');
          const result = this.impl.onMostVisitedTileNavigation(params.tile, params.index, params.mouse_button, params.alt_key, params.ctrl_key, params.meta_key, params.shift_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

most_visited.mojom.MostVisitedPageHandlerReceiver = most_visited.mojom.MostVisitedPageHandlerReceiver;

most_visited.mojom.MostVisitedPageHandlerPtr = most_visited.mojom.MostVisitedPageHandlerRemote;
most_visited.mojom.MostVisitedPageHandlerRequest = most_visited.mojom.MostVisitedPageHandlerPendingReceiver;


// Interface: MostVisitedPage
mojo.internal.Struct(
    most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_Params', [
      mojo.internal.StructField('info', 0, 0, most_visited.mojom.MostVisitedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_Params', [
    ],
    [[0, 8]]);

most_visited.mojom.MostVisitedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

most_visited.mojom.MostVisitedPageRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      most_visited.mojom.MostVisitedPagePendingReceiver,
      handle);
    this.$ = new most_visited.mojom.MostVisitedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMostVisitedInfo(info) {
    return this.$.setMostVisitedInfo(info);
  }
  onMostVisitedTilesAutoRemoval() {
    return this.$.onMostVisitedTilesAutoRemoval();
  }
};

most_visited.mojom.MostVisitedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MostVisitedPage', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMostVisitedInfo(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec,
      null,
      [info],
      false);
  }

  onMostVisitedTilesAutoRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

};

most_visited.mojom.MostVisitedPage.getRemote = function() {
  let remote = new most_visited.mojom.MostVisitedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPage',
    'context');
  return remote.$;
};

most_visited.mojom.MostVisitedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MostVisitedPage', [
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
        
        // Try Method 0: SetMostVisitedInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMostVisitedInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnMostVisitedTilesAutoRemoval
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMostVisitedTilesAutoRemoval (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedInfo');
          const result = this.impl.setMostVisitedInfo(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMostVisitedTilesAutoRemoval');
          const result = this.impl.onMostVisitedTilesAutoRemoval();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

most_visited.mojom.MostVisitedPageReceiver = most_visited.mojom.MostVisitedPageReceiver;

most_visited.mojom.MostVisitedPagePtr = most_visited.mojom.MostVisitedPageRemote;
most_visited.mojom.MostVisitedPageRequest = most_visited.mojom.MostVisitedPagePendingReceiver;

