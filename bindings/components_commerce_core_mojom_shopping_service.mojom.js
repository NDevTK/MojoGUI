// Auto-generated MojoJS binding
 // Source: chromium_src/components/commerce/core/mojom/shopping_service.mojom
 // Module: shopping_service.mojom

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
 

 mojo.internal.bindings.shopping_service = mojo.internal.bindings.shopping_service || {};
mojo.internal.bindings.shopping_service.mojom = mojo.internal.bindings.shopping_service.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.commerce = mojo.internal.bindings.commerce || {};

mojo.internal.bindings.shopping_service.mojom.PriceBucketSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.shopping_service.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.shopping_service.mojom.PricePointSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.UrlInfoSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.PriceInsightsInfoSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionTextSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsOptionSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsValueSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsProductSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsFeatureStateSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory = {};
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory.$interfaceName = 'shopping_service.mojom.ShoppingServiceHandlerFactory';
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler = {};
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler.$interfaceName = 'shopping_service.mojom.ShoppingServiceHandler';
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec = { $: {} };
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec = { $: {} };

// Enum: PriceBucket
mojo.internal.bindings.shopping_service.mojom.PriceBucket = {
  kUnknown: 0,
  kLow: 1,
  kTypical: 2,
  kHigh: 3,
};

// Enum: UserFeedback
mojo.internal.bindings.shopping_service.mojom.UserFeedback = {
  kUnspecified: 0,
  kThumbsUp: 1,
  kThumbsDown: 2,
};

// Struct: PricePoint
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.PricePointSpec, 'shopping_service.mojom.PricePoint', [
      mojo.internal.StructField('arg_date', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_formatted_price', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_price', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UrlInfo
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.UrlInfoSpec, 'shopping_service.mojom.UrlInfo', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thumbnail_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_previewText', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PriceInsightsInfo
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.PriceInsightsInfoSpec, 'shopping_service.mojom.PriceInsightsInfo', [
      mojo.internal.StructField('arg_kUnknown', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProductSpecificationsDescriptionText
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionTextSpec, 'shopping_service.mojom.ProductSpecificationsDescriptionText', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsOption
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsOptionSpec, 'shopping_service.mojom.ProductSpecificationsOption', [
      mojo.internal.StructField('arg_descriptions', 0, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProductSpecificationsDescription
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionSpec, 'shopping_service.mojom.ProductSpecificationsDescription', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_alt_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProductSpecificationsValue
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsValueSpec, 'shopping_service.mojom.ProductSpecificationsValue', [
      mojo.internal.StructField('arg_specification_descriptions', 0, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_summary', 8, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsProduct
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsProductSpec, 'shopping_service.mojom.ProductSpecificationsProduct', [
      mojo.internal.StructField('arg_product_cluster_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_dimension_values', 24, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsValueSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_summary', 32, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsDescriptionTextSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_buying_options_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProductSpecificationsFeatureState
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsFeatureStateSpec, 'shopping_service.mojom.ProductSpecificationsFeatureState', [
      mojo.internal.StructField('arg_is_syncing_tab_compare', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_load_full_page_ui', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_manage_sets', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_fetch_data', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_allowed_for_enterprise', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_quality_logging_allowed', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_signed_in', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProductSpecifications
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsSpec, 'shopping_service.mojom.ProductSpecifications', [
      mojo.internal.StructField('arg_product_dimension_map', 0, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_products', 8, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsProductSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ShoppingServiceHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createShoppingServiceHandler(arg_handler) {
    return this.$.createShoppingServiceHandler(arg_handler);
  }
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandlerFactory', [
      { explicit: null },
    ]);
  }

  createShoppingServiceHandler(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec,
      null,
      [arg_handler],
      false);
  }

};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandlerFactory', [
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
        
        // Try Method 0: CreateShoppingServiceHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateShoppingServiceHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactory_CreateShoppingServiceHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createShoppingServiceHandler');
          const result = this.impl.createShoppingServiceHandler(params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryReceiver;

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryPtr = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRemote;
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryRequest = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerFactoryPendingReceiver;


// Interface: ShoppingServiceHandler
mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('arg_productInfo', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_productInfo', 8, 0, mojo.internal.bindings.commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParams', [
      mojo.internal.StructField('arg_productInfos', 0, 0, mojo.internal.Array(mojo.internal.bindings.commerce.shared.mojom.ProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('arg_priceInsightsInfo', 0, 0, mojo.internal.bindings.shopping_service.mojom.PriceInsightsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_priceInsightsInfo', 8, 0, mojo.internal.bindings.shopping_service.mojom.PriceInsightsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParams', [
      mojo.internal.StructField('arg_productSpecs', 0, 0, mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParams', [
      mojo.internal.StructField('arg_url_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParams', [
      mojo.internal.StructField('arg_url_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParams', [
      mojo.internal.StructField('arg_eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParams', [
      mojo.internal.StructField('arg_tracked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParams', [
      mojo.internal.StructField('arg_sets', 0, 0, mojo.internal.Array(mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParams', [
      mojo.internal.StructField('arg_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('arg_created_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('arg_updated_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_urls', 8, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParams', [
      mojo.internal.StructField('arg_updated_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_Params', [
      mojo.internal.StructField('arg_feedback', 0, 0, mojo.internal.bindings.shopping_service.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec, 'shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.shopping_service.mojom.ProductSpecificationsFeatureStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRemote = class {
  static get $interfaceName() {
    return 'shopping_service.mojom.ShoppingServiceHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProductInfoForCurrentUrl() {
    return this.$.getProductInfoForCurrentUrl();
  }
  getProductInfoForUrl(arg_url) {
    return this.$.getProductInfoForUrl(arg_url);
  }
  getProductInfoForUrls(arg_urls) {
    return this.$.getProductInfoForUrls(arg_urls);
  }
  getPriceInsightsInfoForCurrentUrl() {
    return this.$.getPriceInsightsInfoForCurrentUrl();
  }
  getPriceInsightsInfoForUrl(arg_url) {
    return this.$.getPriceInsightsInfoForUrl(arg_url);
  }
  getProductSpecificationsForUrls(arg_urls) {
    return this.$.getProductSpecificationsForUrls(arg_urls);
  }
  getUrlInfosForProductTabs() {
    return this.$.getUrlInfosForProductTabs();
  }
  getUrlInfosForRecentlyViewedTabs() {
    return this.$.getUrlInfosForRecentlyViewedTabs();
  }
  isShoppingListEligible() {
    return this.$.isShoppingListEligible();
  }
  getPriceTrackingStatusForCurrentUrl() {
    return this.$.getPriceTrackingStatusForCurrentUrl();
  }
  openUrlInNewTab(arg_url) {
    return this.$.openUrlInNewTab(arg_url);
  }
  switchToOrOpenTab(arg_url) {
    return this.$.switchToOrOpenTab(arg_url);
  }
  getAllProductSpecificationsSets() {
    return this.$.getAllProductSpecificationsSets();
  }
  getProductSpecificationsSetByUuid(arg_uuid) {
    return this.$.getProductSpecificationsSetByUuid(arg_uuid);
  }
  addProductSpecificationsSet(arg_name, arg_urls) {
    return this.$.addProductSpecificationsSet(arg_name, arg_urls);
  }
  deleteProductSpecificationsSet(arg_uuid) {
    return this.$.deleteProductSpecificationsSet(arg_uuid);
  }
  setNameForProductSpecificationsSet(arg_uuid, arg_name) {
    return this.$.setNameForProductSpecificationsSet(arg_uuid, arg_name);
  }
  setUrlsForProductSpecificationsSet(arg_uuid, arg_urls) {
    return this.$.setUrlsForProductSpecificationsSet(arg_uuid, arg_urls);
  }
  setProductSpecificationsUserFeedback(arg_feedback) {
    return this.$.setProductSpecificationsUserFeedback(arg_feedback);
  }
  getProductSpecificationsFeatureState() {
    return this.$.getProductSpecificationsFeatureState();
  }
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandler', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProductInfoForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  getProductInfoForUrl(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getProductInfoForUrls(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec,
      [arg_urls],
      false);
  }

  getPriceInsightsInfoForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  getPriceInsightsInfoForUrl(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec,
      [arg_url],
      false);
  }

  getProductSpecificationsForUrls(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec,
      [arg_urls],
      false);
  }

  getUrlInfosForProductTabs() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec,
      [],
      false);
  }

  getUrlInfosForRecentlyViewedTabs() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec,
      [],
      false);
  }

  isShoppingListEligible() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec,
      [],
      false);
  }

  getPriceTrackingStatusForCurrentUrl() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec,
      [],
      false);
  }

  openUrlInNewTab(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  switchToOrOpenTab(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getAllProductSpecificationsSets() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec,
      [],
      false);
  }

  getProductSpecificationsSetByUuid(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec,
      [arg_uuid],
      false);
  }

  addProductSpecificationsSet(arg_name, arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec,
      [arg_name, arg_urls],
      false);
  }

  deleteProductSpecificationsSet(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec,
      null,
      [arg_uuid],
      false);
  }

  setNameForProductSpecificationsSet(arg_uuid, arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec,
      [arg_uuid, arg_name],
      false);
  }

  setUrlsForProductSpecificationsSet(arg_uuid, arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec,
      [arg_uuid, arg_urls],
      false);
  }

  setProductSpecificationsUserFeedback(arg_feedback) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec,
      null,
      [arg_feedback],
      false);
  }

  getProductSpecificationsFeatureState() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec,
      mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'shopping_service.mojom.ShoppingServiceHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ShoppingServiceHandler', [
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
        
        // Try Method 0: GetProductInfoForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductInfoForCurrentUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetProductInfoForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductInfoForUrl (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetProductInfoForUrls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductInfoForUrls (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetPriceInsightsInfoForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPriceInsightsInfoForCurrentUrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetPriceInsightsInfoForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPriceInsightsInfoForUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetProductSpecificationsForUrls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductSpecificationsForUrls (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetUrlInfosForProductTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUrlInfosForProductTabs (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetUrlInfosForRecentlyViewedTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUrlInfosForRecentlyViewedTabs (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: IsShoppingListEligible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsShoppingListEligible (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetPriceTrackingStatusForCurrentUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPriceTrackingStatusForCurrentUrl (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenUrlInNewTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrlInNewTab (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SwitchToOrOpenTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SwitchToOrOpenTab (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetAllProductSpecificationsSets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllProductSpecificationsSets (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetProductSpecificationsSetByUuid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductSpecificationsSetByUuid (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: AddProductSpecificationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddProductSpecificationsSet (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: DeleteProductSpecificationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteProductSpecificationsSet (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetNameForProductSpecificationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNameForProductSpecificationsSet (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetUrlsForProductSpecificationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUrlsForProductSpecificationsSet (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetProductSpecificationsUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProductSpecificationsUserFeedback (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetProductSpecificationsFeatureState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductSpecificationsFeatureState (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductInfoForCurrentUrl');
          const result = this.impl.getProductInfoForCurrentUrl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForCurrentUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductInfoForCurrentUrl FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductInfoForUrl');
          const result = this.impl.getProductInfoForUrl(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductInfoForUrl FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductInfoForUrls');
          const result = this.impl.getProductInfoForUrls(params.arg_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductInfoForUrls_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductInfoForUrls FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPriceInsightsInfoForCurrentUrl');
          const result = this.impl.getPriceInsightsInfoForCurrentUrl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForCurrentUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPriceInsightsInfoForCurrentUrl FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPriceInsightsInfoForUrl');
          const result = this.impl.getPriceInsightsInfoForUrl(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceInsightsInfoForUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPriceInsightsInfoForUrl FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductSpecificationsForUrls');
          const result = this.impl.getProductSpecificationsForUrls(params.arg_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsForUrls_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductSpecificationsForUrls FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUrlInfosForProductTabs');
          const result = this.impl.getUrlInfosForProductTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForProductTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUrlInfosForProductTabs FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUrlInfosForRecentlyViewedTabs');
          const result = this.impl.getUrlInfosForRecentlyViewedTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetUrlInfosForRecentlyViewedTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUrlInfosForRecentlyViewedTabs FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isShoppingListEligible');
          const result = this.impl.isShoppingListEligible();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_IsShoppingListEligible_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsShoppingListEligible FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPriceTrackingStatusForCurrentUrl');
          const result = this.impl.getPriceTrackingStatusForCurrentUrl();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetPriceTrackingStatusForCurrentUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPriceTrackingStatusForCurrentUrl FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_OpenUrlInNewTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openUrlInNewTab');
          const result = this.impl.openUrlInNewTab(params.arg_url);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SwitchToOrOpenTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchToOrOpenTab');
          const result = this.impl.switchToOrOpenTab(params.arg_url);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllProductSpecificationsSets');
          const result = this.impl.getAllProductSpecificationsSets();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetAllProductSpecificationsSets_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAllProductSpecificationsSets FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductSpecificationsSetByUuid');
          const result = this.impl.getProductSpecificationsSetByUuid(params.arg_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsSetByUuid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductSpecificationsSetByUuid FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addProductSpecificationsSet');
          const result = this.impl.addProductSpecificationsSet(params.arg_name, params.arg_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_AddProductSpecificationsSet_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddProductSpecificationsSet FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_DeleteProductSpecificationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteProductSpecificationsSet');
          const result = this.impl.deleteProductSpecificationsSet(params.arg_uuid);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNameForProductSpecificationsSet');
          const result = this.impl.setNameForProductSpecificationsSet(params.arg_uuid, params.arg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetNameForProductSpecificationsSet_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetNameForProductSpecificationsSet FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUrlsForProductSpecificationsSet');
          const result = this.impl.setUrlsForProductSpecificationsSet(params.arg_uuid, params.arg_urls);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetUrlsForProductSpecificationsSet_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUrlsForProductSpecificationsSet FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_SetProductSpecificationsUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProductSpecificationsUserFeedback');
          const result = this.impl.setProductSpecificationsUserFeedback(params.arg_feedback);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductSpecificationsFeatureState');
          const result = this.impl.getProductSpecificationsFeatureState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandler_GetProductSpecificationsFeatureState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetProductSpecificationsFeatureState FAILED:', e));
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

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerReceiver = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerReceiver;

mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerPtr = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRemote;
mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerRequest = mojo.internal.bindings.shopping_service.mojom.ShoppingServiceHandlerPendingReceiver;

