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
 

 mojo.internal.bindings.most_visited = mojo.internal.bindings.most_visited || {};
mojo.internal.bindings.most_visited.mojom = mojo.internal.bindings.most_visited.mojom || {};
mojo.internal.bindings.ntp_tiles = mojo.internal.bindings.ntp_tiles || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedInfoSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory = {};
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory.$interfaceName = 'most_visited.mojom.MostVisitedPageHandlerFactory';
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler = {};
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerSpec = { $ : {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler.$interfaceName = 'most_visited.mojom.MostVisitedPageHandler';
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPage = {};
mojo.internal.bindings.most_visited.mojom.MostVisitedPageSpec = { $ : {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPage.$interfaceName = 'most_visited.mojom.MostVisitedPage';
mojo.internal.bindings.most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec = { $: {} };

// Struct: MostVisitedTile
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec, 'most_visited.mojom.MostVisitedTile', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title_direction', 8, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.bindings.ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title_source', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_query_tile', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_user_edit', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_user_delete', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MostVisitedTheme
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedThemeSpec, 'most_visited.mojom.MostVisitedTheme', [
      mojo.internal.StructField('arg_background_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_use_white_tile_icon', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_dark', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MostVisitedInfo
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedInfoSpec, 'most_visited.mojom.MostVisitedInfo', [
      mojo.internal.StructField('arg_tiles', 0, 0, mojo.internal.Array(mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_custom_links_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enterprise_shortcuts_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_visible', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MostVisitedPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryReceiver = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryReceiver;

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryPtr = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRemote;
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryRequest = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerFactoryPendingReceiver;


// Interface: MostVisitedPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_pos', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ntp_tiles.mojom.TileSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_CancelPrerender_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParams', [
      mojo.internal.StructField('arg_is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_Params', [
      mojo.internal.StructField('arg_is_expanded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_Params', [
      mojo.internal.StructField('arg_tiles', 0, 0, mojo.internal.Array(mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec, 'most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_Params', [
      mojo.internal.StructField('arg_tile', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedTileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_alt_key', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ctrl_key', 13, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 13, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shift_key', 13, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addMostVisitedTile(arg_url, arg_title) {
    return this.$.addMostVisitedTile(arg_url, arg_title);
  }
  deleteMostVisitedTile(arg_tile) {
    return this.$.deleteMostVisitedTile(arg_tile);
  }
  reorderMostVisitedTile(arg_tile, arg_new_pos) {
    return this.$.reorderMostVisitedTile(arg_tile, arg_new_pos);
  }
  restoreMostVisitedDefaults(arg_source) {
    return this.$.restoreMostVisitedDefaults(arg_source);
  }
  undoMostVisitedAutoRemoval() {
    return this.$.undoMostVisitedAutoRemoval();
  }
  undoMostVisitedTileAction(arg_source) {
    return this.$.undoMostVisitedTileAction(arg_source);
  }
  updateMostVisitedInfo() {
    return this.$.updateMostVisitedInfo();
  }
  updateMostVisitedTile(arg_tile, arg_new_url, arg_new_title) {
    return this.$.updateMostVisitedTile(arg_tile, arg_new_url, arg_new_title);
  }
  prerenderMostVisitedTile(arg_tile) {
    return this.$.prerenderMostVisitedTile(arg_tile);
  }
  prefetchMostVisitedTile(arg_tile) {
    return this.$.prefetchMostVisitedTile(arg_tile);
  }
  preconnectMostVisitedTile(arg_tile) {
    return this.$.preconnectMostVisitedTile(arg_tile);
  }
  cancelPrerender() {
    return this.$.cancelPrerender();
  }
  getMostVisitedExpandedState() {
    return this.$.getMostVisitedExpandedState();
  }
  setMostVisitedExpandedState(arg_is_expanded) {
    return this.$.setMostVisitedExpandedState(arg_is_expanded);
  }
  onMostVisitedTilesRendered(arg_tiles, arg_time) {
    return this.$.onMostVisitedTilesRendered(arg_tiles, arg_time);
  }
  onMostVisitedTileNavigation(arg_tile, arg_index, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.$.onMostVisitedTileNavigation(arg_tile, arg_index, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key);
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPageHandler', [
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

  addMostVisitedTile(arg_url, arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec,
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec,
      [arg_url, arg_title],
      false);
  }

  deleteMostVisitedTile(arg_tile) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec,
      null,
      [arg_tile],
      false);
  }

  reorderMostVisitedTile(arg_tile, arg_new_pos) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec,
      null,
      [arg_tile, arg_new_pos],
      false);
  }

  restoreMostVisitedDefaults(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec,
      null,
      [arg_source],
      false);
  }

  undoMostVisitedAutoRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

  undoMostVisitedTileAction(arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec,
      null,
      [arg_source],
      false);
  }

  updateMostVisitedInfo() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateMostVisitedTile(arg_tile, arg_new_url, arg_new_title) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec,
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec,
      [arg_tile, arg_new_url, arg_new_title],
      false);
  }

  prerenderMostVisitedTile(arg_tile) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec,
      null,
      [arg_tile],
      false);
  }

  prefetchMostVisitedTile(arg_tile) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec,
      null,
      [arg_tile],
      false);
  }

  preconnectMostVisitedTile(arg_tile) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec,
      null,
      [arg_tile],
      false);
  }

  cancelPrerender() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec,
      null,
      [],
      false);
  }

  getMostVisitedExpandedState() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec,
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec,
      [],
      false);
  }

  setMostVisitedExpandedState(arg_is_expanded) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec,
      null,
      [arg_is_expanded],
      false);
  }

  onMostVisitedTilesRendered(arg_tiles, arg_time) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec,
      null,
      [arg_tiles, arg_time],
      false);
  }

  onMostVisitedTileNavigation(arg_tile, arg_index, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec,
      null,
      [arg_tile, arg_index, arg_mouse_button, arg_alt_key, arg_ctrl_key, arg_meta_key, arg_shift_key],
      false);
  }

};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPageHandler', [
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMostVisitedTile');
          const result = this.impl.addMostVisitedTile(params.arg_url, params.arg_title);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_AddMostVisitedTile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddMostVisitedTile FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_DeleteMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteMostVisitedTile');
          const result = this.impl.deleteMostVisitedTile(params.arg_tile);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_ReorderMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reorderMostVisitedTile');
          const result = this.impl.reorderMostVisitedTile(params.arg_tile, params.arg_new_pos);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_RestoreMostVisitedDefaults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreMostVisitedDefaults');
          const result = this.impl.restoreMostVisitedDefaults(params.arg_source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedAutoRemoval_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedAutoRemoval');
          const result = this.impl.undoMostVisitedAutoRemoval();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UndoMostVisitedTileAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedTileAction');
          const result = this.impl.undoMostVisitedTileAction(params.arg_source);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedInfo');
          const result = this.impl.updateMostVisitedInfo();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateMostVisitedTile');
          const result = this.impl.updateMostVisitedTile(params.arg_tile, params.arg_new_url, params.arg_new_title);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_UpdateMostVisitedTile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateMostVisitedTile FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrerenderMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prerenderMostVisitedTile');
          const result = this.impl.prerenderMostVisitedTile(params.arg_tile);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PrefetchMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prefetchMostVisitedTile');
          const result = this.impl.prefetchMostVisitedTile(params.arg_tile);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_PreconnectMostVisitedTile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preconnectMostVisitedTile');
          const result = this.impl.preconnectMostVisitedTile(params.arg_tile);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_CancelPrerender_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPrerender');
          const result = this.impl.cancelPrerender();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMostVisitedExpandedState');
          const result = this.impl.getMostVisitedExpandedState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_GetMostVisitedExpandedState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMostVisitedExpandedState FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_SetMostVisitedExpandedState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedExpandedState');
          const result = this.impl.setMostVisitedExpandedState(params.arg_is_expanded);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTilesRendered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMostVisitedTilesRendered');
          const result = this.impl.onMostVisitedTilesRendered(params.arg_tiles, params.arg_time);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandler_OnMostVisitedTileNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMostVisitedTileNavigation');
          const result = this.impl.onMostVisitedTileNavigation(params.arg_tile, params.arg_index, params.arg_mouse_button, params.arg_alt_key, params.arg_ctrl_key, params.arg_meta_key, params.arg_shift_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerReceiver = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerReceiver;

mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerPtr = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRemote;
mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerRequest = mojo.internal.bindings.most_visited.mojom.MostVisitedPageHandlerPendingReceiver;


// Interface: MostVisitedPage
mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec, 'most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.most_visited.mojom.MostVisitedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec, 'most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.most_visited.mojom.MostVisitedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemote = class {
  static get $interfaceName() {
    return 'most_visited.mojom.MostVisitedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.most_visited.mojom.MostVisitedPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMostVisitedInfo(arg_info) {
    return this.$.setMostVisitedInfo(arg_info);
  }
  onMostVisitedTilesAutoRemoval() {
    return this.$.onMostVisitedTilesAutoRemoval();
  }
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPage', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMostVisitedInfo(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec,
      null,
      [arg_info],
      false);
  }

  onMostVisitedTilesAutoRemoval() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.most_visited.mojom.MostVisitedPage.getRemote = function() {
  let remote = new mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'most_visited.mojom.MostVisitedPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.most_visited.mojom.MostVisitedPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('most_visited.mojom.MostVisitedPage', [
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec.$.structSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPage_SetMostVisitedInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMostVisitedInfo');
          const result = this.impl.setMostVisitedInfo(params.arg_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.most_visited.mojom.MostVisitedPage_OnMostVisitedTilesAutoRemoval_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.most_visited.mojom.MostVisitedPageReceiver = mojo.internal.bindings.most_visited.mojom.MostVisitedPageReceiver;

mojo.internal.bindings.most_visited.mojom.MostVisitedPagePtr = mojo.internal.bindings.most_visited.mojom.MostVisitedPageRemote;
mojo.internal.bindings.most_visited.mojom.MostVisitedPageRequest = mojo.internal.bindings.most_visited.mojom.MostVisitedPagePendingReceiver;

