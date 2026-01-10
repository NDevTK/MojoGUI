// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/mojom/price_tracking.mojom
// Module: commerce.price_tracking.mojom

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
var commerce = commerce || {};
commerce.price_tracking = commerce.price_tracking || {};
commerce.price_tracking.mojom = commerce.price_tracking.mojom || {};
var mojo_base = mojo_base || {};

commerce.price_tracking.mojom.PriceTrackingHandler = {};
commerce.price_tracking.mojom.PriceTrackingHandler.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandler';
commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page = {};
commerce.price_tracking.mojom.Page.$interfaceName = 'commerce.price_tracking.mojom.Page';
commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec = { $: {} };
commerce.price_tracking.mojom.PriceTrackingHandlerFactory = {};
commerce.price_tracking.mojom.PriceTrackingHandlerFactory.$interfaceName = 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec = { $: {} };

// Interface: PriceTrackingHandler
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_Params', [
      mojo.internal.StructField('bookmark_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_Params', [
      mojo.internal.StructField('track', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParams', [
      mojo.internal.StructField('productInfos', 0, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParams', [
      mojo.internal.StructField('collectionId', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_Params', [
    ],
    [[0, 8]]);

commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandler', [
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

  trackPriceForBookmark(bookmark_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  untrackPriceForBookmark(bookmark_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec,
      null,
      [bookmark_id],
      false);
  }

  setPriceTrackingStatusForCurrentUrl(track) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      null,
      [track],
      false);
  }

  getAllShoppingBookmarkProductInfo() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getAllPriceTrackedBookmarkProductInfo() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec,
      [],
      false);
  }

  getShoppingCollectionBookmarkFolderId() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec,
      [],
      false);
  }

  getParentBookmarkFolderNameForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec,
      commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  showBookmarkEditorForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec,
      null,
      [],
      false);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandler.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandler',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandler', [
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
        
        // Try Method 0: TrackPriceForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TrackPriceForBookmark (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UntrackPriceForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UntrackPriceForBookmark (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPriceTrackingStatusForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPriceTrackingStatusForCurrentUrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAllShoppingBookmarkProductInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllShoppingBookmarkProductInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetAllPriceTrackedBookmarkProductInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllPriceTrackedBookmarkProductInfo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetShoppingCollectionBookmarkFolderId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShoppingCollectionBookmarkFolderId (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetParentBookmarkFolderNameForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetParentBookmarkFolderNameForCurrentUrl (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowBookmarkEditorForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowBookmarkEditorForCurrentUrl (7)');
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_TrackPriceForBookmark_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.trackPriceForBookmark');
          const result = this.impl.trackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_UntrackPriceForBookmark_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.untrackPriceForBookmark');
          const result = this.impl.untrackPriceForBookmark(params.bookmark_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_SetPriceTrackingStatusForCurrentUrl_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setPriceTrackingStatusForCurrentUrl');
          const result = this.impl.setPriceTrackingStatusForCurrentUrl(params.track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllShoppingBookmarkProductInfo');
          const result = this.impl.getAllShoppingBookmarkProductInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetAllShoppingBookmarkProductInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllPriceTrackedBookmarkProductInfo');
          const result = this.impl.getAllPriceTrackedBookmarkProductInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetAllPriceTrackedBookmarkProductInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getShoppingCollectionBookmarkFolderId');
          const result = this.impl.getShoppingCollectionBookmarkFolderId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetShoppingCollectionBookmarkFolderId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getParentBookmarkFolderNameForCurrentUrl');
          const result = this.impl.getParentBookmarkFolderNameForCurrentUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.price_tracking.mojom.PriceTrackingHandler_GetParentBookmarkFolderNameForCurrentUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandler_ShowBookmarkEditorForCurrentUrl_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showBookmarkEditorForCurrentUrl');
          const result = this.impl.showBookmarkEditorForCurrentUrl();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerReceiver = commerce.price_tracking.mojom.PriceTrackingHandlerReceiver;

commerce.price_tracking.mojom.PriceTrackingHandlerPtr = commerce.price_tracking.mojom.PriceTrackingHandlerRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerRequest = commerce.price_tracking.mojom.PriceTrackingHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec, 'commerce.price_tracking.mojom.Page_OperationFailedForBookmark_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attempted_track', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec, 'commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_Params', [
      mojo.internal.StructField('bookmark_product', 0, 0, commerce.shared.mojom.BookmarkProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.price_tracking.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PagePendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  priceTrackedForBookmark(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  priceUntrackedForBookmark(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

  operationFailedForBookmark(bookmark_product, attempted_track) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec,
      null,
      [bookmark_product, attempted_track],
      false);
  }

  onProductBookmarkMoved(bookmark_product) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec,
      null,
      [bookmark_product],
      false);
  }

};

commerce.price_tracking.mojom.Page.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.Page',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: PriceTrackedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PriceTrackedForBookmark (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PriceUntrackedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PriceUntrackedForBookmark (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OperationFailedForBookmark
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OperationFailedForBookmark (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnProductBookmarkMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductBookmarkMoved (3)');
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceTrackedForBookmark_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.priceTrackedForBookmark');
          const result = this.impl.priceTrackedForBookmark(params.bookmark_product);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_PriceUntrackedForBookmark_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.priceUntrackedForBookmark');
          const result = this.impl.priceUntrackedForBookmark(params.bookmark_product);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OperationFailedForBookmark_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.operationFailedForBookmark');
          const result = this.impl.operationFailedForBookmark(params.bookmark_product, params.attempted_track);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.Page_OnProductBookmarkMoved_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onProductBookmarkMoved');
          const result = this.impl.onProductBookmarkMoved(params.bookmark_product);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PageReceiver = commerce.price_tracking.mojom.PageReceiver;

commerce.price_tracking.mojom.PagePtr = commerce.price_tracking.mojom.PageRemote;
commerce.price_tracking.mojom.PageRequest = commerce.price_tracking.mojom.PagePendingReceiver;


// Interface: PriceTrackingHandlerFactory
mojo.internal.Struct(
    commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec, 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.price_tracking.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.price_tracking.mojom.PriceTrackingHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.price_tracking.mojom.PriceTrackingHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPriceTrackingHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

commerce.price_tracking.mojom.PriceTrackingHandlerFactory.getRemote = function() {
  let remote = new commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.price_tracking.mojom.PriceTrackingHandlerFactory',
    'context');
  return remote.$;
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PriceTrackingHandlerFactory', [
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
        
        // Try Method 0: CreatePriceTrackingHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePriceTrackingHandler (0)');
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
          const params = decoder.decodeStructInline(commerce.price_tracking.mojom.PriceTrackingHandlerFactory_CreatePriceTrackingHandler_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createPriceTrackingHandler');
          const result = this.impl.createPriceTrackingHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryReceiver;

commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPtr = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRemote;
commerce.price_tracking.mojom.PriceTrackingHandlerFactoryRequest = commerce.price_tracking.mojom.PriceTrackingHandlerFactoryPendingReceiver;

