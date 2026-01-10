// Auto-generated MojoJS binding
// Source: chromium_src/components/commerce/core/internals/mojom/commerce_internals.mojom
// Module: commerce.mojom

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
commerce.mojom = commerce.mojom || {};
var shopping_service = shopping_service || {};
var url = url || {};

commerce.mojom.EligibilityDetailSpec = { $: {} };
commerce.mojom.ShoppingEligibilityDetailsSpec = { $: {} };
commerce.mojom.SubscriptionSpec = { $: {} };
commerce.mojom.ProductSpecificationsSetSpec = { $: {} };
commerce.mojom.CommerceInternalsHandlerFactory = {};
commerce.mojom.CommerceInternalsHandlerFactory.$interfaceName = 'commerce.mojom.CommerceInternalsHandlerFactory';
commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler = {};
commerce.mojom.CommerceInternalsHandler.$interfaceName = 'commerce.mojom.CommerceInternalsHandler';
commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec = { $: {} };
commerce.mojom.CommerceInternalsPage = {};
commerce.mojom.CommerceInternalsPage.$interfaceName = 'commerce.mojom.CommerceInternalsPage';
commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec = { $: {} };

// Struct: EligibilityDetail
mojo.internal.Struct(
    commerce.mojom.EligibilityDetailSpec, 'commerce.mojom.EligibilityDetail', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('expected_value', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ShoppingEligibilityDetails
mojo.internal.Struct(
    commerce.mojom.ShoppingEligibilityDetailsSpec, 'commerce.mojom.ShoppingEligibilityDetails', [
      mojo.internal.StructField('country', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.Array(commerce.mojom.EligibilityDetailSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Subscription
mojo.internal.Struct(
    commerce.mojom.SubscriptionSpec, 'commerce.mojom.Subscription', [
      mojo.internal.StructField('cluster_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('product_infos', 8, 0, mojo.internal.Array(commerce.shared.mojom.BookmarkProductInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProductSpecificationsSet
mojo.internal.Struct(
    commerce.mojom.ProductSpecificationsSetSpec, 'commerce.mojom.ProductSpecificationsSet', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url_infos', 32, 0, mojo.internal.Array(shopping_service.mojom.UrlInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: CommerceInternalsHandlerFactory
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec, 'commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(commerce.mojom.CommerceInternalsPageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(commerce.mojom.CommerceInternalsHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createCommerceInternalsHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

commerce.mojom.CommerceInternalsHandlerFactory.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsHandlerFactory',
    'context');
  return remote.$;
};

commerce.mojom.CommerceInternalsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandlerFactory', [
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
        
        // Try Method 0: CreateCommerceInternalsHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCommerceInternalsHandler (0)');
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
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandlerFactory_CreateCommerceInternalsHandler_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createCommerceInternalsHandler');
          const result = this.impl.createCommerceInternalsHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.mojom.CommerceInternalsHandlerFactoryReceiver = commerce.mojom.CommerceInternalsHandlerFactoryReceiver;

commerce.mojom.CommerceInternalsHandlerFactoryPtr = commerce.mojom.CommerceInternalsHandlerFactoryRemote;
commerce.mojom.CommerceInternalsHandlerFactoryRequest = commerce.mojom.CommerceInternalsHandlerFactoryPendingReceiver;


// Interface: CommerceInternalsHandler
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParams', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, commerce.shared.mojom.ProductInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParams', [
      mojo.internal.StructField('subscriptions', 0, 0, mojo.internal.Array(commerce.mojom.SubscriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParams', [
      mojo.internal.StructField('product_specifications_set', 0, 0, mojo.internal.Array(commerce.mojom.ProductSpecificationsSetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec, 'commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParams', [
      mojo.internal.StructField('details', 0, 0, commerce.mojom.ShoppingEligibilityDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.mojom.CommerceInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsHandlerPendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getIsShoppingListEligible() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec,
      [],
      false);
  }

  resetPriceTrackingEmailPref() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec,
      null,
      [],
      false);
  }

  getProductInfoForUrl(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec,
      [url],
      false);
  }

  getSubscriptionDetails() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec,
      [],
      false);
  }

  getProductSpecificationsDetails() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec,
      [],
      false);
  }

  resetProductSpecifications() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec,
      null,
      [],
      false);
  }

  getShoppingEligibilityDetails() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec,
      commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec,
      [],
      false);
  }

};

commerce.mojom.CommerceInternalsHandler.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsHandler',
    'context');
  return remote.$;
};

commerce.mojom.CommerceInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsHandler', [
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
        
        // Try Method 0: GetIsShoppingListEligible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsShoppingListEligible (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResetPriceTrackingEmailPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetPriceTrackingEmailPref (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetProductInfoForUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductInfoForUrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetSubscriptionDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSubscriptionDetails (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetProductSpecificationsDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetProductSpecificationsDetails (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ResetProductSpecifications
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetProductSpecifications (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetShoppingEligibilityDetails
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShoppingEligibilityDetails (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsShoppingListEligible');
          const result = this.impl.getIsShoppingListEligible();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetIsShoppingListEligible_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetPriceTrackingEmailPref_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.resetPriceTrackingEmailPref');
          const result = this.impl.resetPriceTrackingEmailPref();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductInfoForUrl');
          const result = this.impl.getProductInfoForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetProductInfoForUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getSubscriptionDetails');
          const result = this.impl.getSubscriptionDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetSubscriptionDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getProductSpecificationsDetails');
          const result = this.impl.getProductSpecificationsDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetProductSpecificationsDetails_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_ResetProductSpecifications_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.resetProductSpecifications');
          const result = this.impl.resetProductSpecifications();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getShoppingEligibilityDetails');
          const result = this.impl.getShoppingEligibilityDetails();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, commerce.mojom.CommerceInternalsHandler_GetShoppingEligibilityDetails_ResponseParamsSpec);
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

commerce.mojom.CommerceInternalsHandlerReceiver = commerce.mojom.CommerceInternalsHandlerReceiver;

commerce.mojom.CommerceInternalsHandlerPtr = commerce.mojom.CommerceInternalsHandlerRemote;
commerce.mojom.CommerceInternalsHandlerRequest = commerce.mojom.CommerceInternalsHandlerPendingReceiver;


// Interface: CommerceInternalsPage
mojo.internal.Struct(
    commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec, 'commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_Params', [
      mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

commerce.mojom.CommerceInternalsPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

commerce.mojom.CommerceInternalsPageRemote = class {
  static get $interfaceName() {
    return 'commerce.mojom.CommerceInternalsPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      commerce.mojom.CommerceInternalsPagePendingReceiver,
      handle);
    this.$ = new commerce.mojom.CommerceInternalsPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

commerce.mojom.CommerceInternalsPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsPage', [
      { explicit: null },
    ]);
  }

  onShoppingListEligibilityChanged(eligible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec,
      null,
      [eligible],
      false);
  }

};

commerce.mojom.CommerceInternalsPage.getRemote = function() {
  let remote = new commerce.mojom.CommerceInternalsPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.mojom.CommerceInternalsPage',
    'context');
  return remote.$;
};

commerce.mojom.CommerceInternalsPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommerceInternalsPage', [
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
        
        // Try Method 0: OnShoppingListEligibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShoppingListEligibilityChanged (0)');
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
          const params = decoder.decodeStructInline(commerce.mojom.CommerceInternalsPage_OnShoppingListEligibilityChanged_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.onShoppingListEligibilityChanged');
          const result = this.impl.onShoppingListEligibilityChanged(params.eligible);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

commerce.mojom.CommerceInternalsPageReceiver = commerce.mojom.CommerceInternalsPageReceiver;

commerce.mojom.CommerceInternalsPagePtr = commerce.mojom.CommerceInternalsPageRemote;
commerce.mojom.CommerceInternalsPageRequest = commerce.mojom.CommerceInternalsPagePendingReceiver;

