// Auto-generated MojoJS binding
 // Source: chromium_src/components/commerce/core/mojom/product_specifications.mojom
 // Module: commerce.product_specifications.mojom

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
 

 mojo.internal.bindings.commerce = mojo.internal.bindings.commerce || {};
mojo.internal.bindings.commerce.product_specifications = mojo.internal.bindings.commerce.product_specifications || {};
mojo.internal.bindings.commerce.product_specifications.mojom = mojo.internal.bindings.commerce.product_specifications.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.commerce.product_specifications.mojom.DisclosureVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.commerce.product_specifications.mojom.ShowSetDispositionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler = {};
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerSpec = { $ : {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler.$interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandler';
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.Page = {};
mojo.internal.bindings.commerce.product_specifications.mojom.PageSpec = { $ : {} };
mojo.internal.bindings.commerce.product_specifications.mojom.Page.$interfaceName = 'commerce.product_specifications.mojom.Page';
mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory = {};
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory.$interfaceName = 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory';
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec = { $: {} };

// Enum: DisclosureVersion
mojo.internal.bindings.commerce.product_specifications.mojom.DisclosureVersion = {
  kUnknown: 0,
  kV1: 1,
};

// Enum: ShowSetDisposition
mojo.internal.bindings.commerce.product_specifications.mojom.ShowSetDisposition = {
  kInNewTabs: 0,
  kInNewWindow: 1,
};

// Interface: ProductSpecificationsHandler
mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_Params', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.bindings.commerce.product_specifications.mojom.DisclosureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_set_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParams', [
      mojo.internal.StructField('arg_disclosure_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParams', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_in_new_tab', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_Params', [
      mojo.internal.StructField('arg_uuids', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 8, 0, mojo.internal.bindings.commerce.product_specifications.mojom.ShowSetDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_Params', [
      mojo.internal.StructField('arg_in_new_tab', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.ProductSpecificationsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setAcceptedDisclosureVersion(arg_version) {
    return this.$.setAcceptedDisclosureVersion(arg_version);
  }
  maybeShowDisclosure(arg_urls, arg_name, arg_set_id) {
    return this.$.maybeShowDisclosure(arg_urls, arg_name, arg_set_id);
  }
  declineDisclosure() {
    return this.$.declineDisclosure();
  }
  showSyncSetupFlow() {
    return this.$.showSyncSetupFlow();
  }
  getPageTitleFromHistory(arg_url) {
    return this.$.getPageTitleFromHistory(arg_url);
  }
  showProductSpecificationsSetForUuid(arg_uuid, arg_in_new_tab) {
    return this.$.showProductSpecificationsSetForUuid(arg_uuid, arg_in_new_tab);
  }
  showProductSpecificationsSetsForUuids(arg_uuids, arg_disposition) {
    return this.$.showProductSpecificationsSetsForUuids(arg_uuids, arg_disposition);
  }
  showComparePage(arg_in_new_tab) {
    return this.$.showComparePage(arg_in_new_tab);
  }
  getComparisonTableUrlForUuid(arg_uuid) {
    return this.$.getComparisonTableUrlForUuid(arg_uuid);
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.ProductSpecificationsHandler', [
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

  setAcceptedDisclosureVersion(arg_version) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec,
      null,
      [arg_version],
      false);
  }

  maybeShowDisclosure(arg_urls, arg_name, arg_set_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec,
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec,
      [arg_urls, arg_name, arg_set_id],
      false);
  }

  declineDisclosure() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec,
      null,
      [],
      false);
  }

  showSyncSetupFlow() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec,
      null,
      [],
      false);
  }

  getPageTitleFromHistory(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec,
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec,
      [arg_url],
      false);
  }

  showProductSpecificationsSetForUuid(arg_uuid, arg_in_new_tab) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec,
      null,
      [arg_uuid, arg_in_new_tab],
      false);
  }

  showProductSpecificationsSetsForUuids(arg_uuids, arg_disposition) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec,
      null,
      [arg_uuids, arg_disposition],
      false);
  }

  showComparePage(arg_in_new_tab) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec,
      null,
      [arg_in_new_tab],
      false);
  }

  getComparisonTableUrlForUuid(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec,
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec,
      [arg_uuid],
      false);
  }

};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.ProductSpecificationsHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.ProductSpecificationsHandler', [
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
        
        // Try Method 0: SetAcceptedDisclosureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAcceptedDisclosureVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MaybeShowDisclosure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowDisclosure (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DeclineDisclosure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeclineDisclosure (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowSyncSetupFlow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSyncSetupFlow (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetPageTitleFromHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPageTitleFromHistory (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ShowProductSpecificationsSetForUuid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowProductSpecificationsSetForUuid (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowProductSpecificationsSetsForUuids
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowProductSpecificationsSetsForUuids (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowComparePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowComparePage (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetComparisonTableUrlForUuid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetComparisonTableUrlForUuid (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_SetAcceptedDisclosureVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAcceptedDisclosureVersion');
          const result = this.impl.setAcceptedDisclosureVersion(params.arg_version);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeShowDisclosure');
          const result = this.impl.maybeShowDisclosure(params.arg_urls, params.arg_name, params.arg_set_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_MaybeShowDisclosure_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MaybeShowDisclosure FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_DeclineDisclosure_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.declineDisclosure');
          const result = this.impl.declineDisclosure();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowSyncSetupFlow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSyncSetupFlow');
          const result = this.impl.showSyncSetupFlow();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPageTitleFromHistory');
          const result = this.impl.getPageTitleFromHistory(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetPageTitleFromHistory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPageTitleFromHistory FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetForUuid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showProductSpecificationsSetForUuid');
          const result = this.impl.showProductSpecificationsSetForUuid(params.arg_uuid, params.arg_in_new_tab);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowProductSpecificationsSetsForUuids_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showProductSpecificationsSetsForUuids');
          const result = this.impl.showProductSpecificationsSetsForUuids(params.arg_uuids, params.arg_disposition);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_ShowComparePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showComparePage');
          const result = this.impl.showComparePage(params.arg_in_new_tab);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getComparisonTableUrlForUuid');
          const result = this.impl.getComparisonTableUrlForUuid(params.arg_uuid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandler_GetComparisonTableUrlForUuid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetComparisonTableUrlForUuid FAILED:', e));
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

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerReceiver;

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerPtr = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote;
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRequest = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_Params', [
      mojo.internal.StructField('arg_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_Params', [
      mojo.internal.StructField('arg_set', 0, 0, mojo.internal.bindings.commerce.shared.mojom.ProductSpecificationsSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_Params', [
      mojo.internal.StructField('arg_uuid', 0, 0, mojo.internal.bindings.mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec, 'commerce.product_specifications.mojom.Page_OnSyncStateChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.commerce.product_specifications.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.commerce.product_specifications.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.commerce.product_specifications.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onProductSpecificationsSetAdded(arg_set) {
    return this.$.onProductSpecificationsSetAdded(arg_set);
  }
  onProductSpecificationsSetUpdated(arg_set) {
    return this.$.onProductSpecificationsSetUpdated(arg_set);
  }
  onProductSpecificationsSetRemoved(arg_uuid) {
    return this.$.onProductSpecificationsSetRemoved(arg_uuid);
  }
  onSyncStateChanged() {
    return this.$.onSyncStateChanged();
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onProductSpecificationsSetAdded(arg_set) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec,
      null,
      [arg_set],
      false);
  }

  onProductSpecificationsSetUpdated(arg_set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec,
      null,
      [arg_set],
      false);
  }

  onProductSpecificationsSetRemoved(arg_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec,
      null,
      [arg_uuid],
      false);
  }

  onSyncStateChanged() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.commerce.product_specifications.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.commerce.product_specifications.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.commerce.product_specifications.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.Page', [
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
        
        // Try Method 0: OnProductSpecificationsSetAdded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetAdded (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnProductSpecificationsSetUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnProductSpecificationsSetRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnProductSpecificationsSetRemoved (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnSyncStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSyncStateChanged (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetAdded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetAdded');
          const result = this.impl.onProductSpecificationsSetAdded(params.arg_set);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetUpdated');
          const result = this.impl.onProductSpecificationsSetUpdated(params.arg_set);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnProductSpecificationsSetRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onProductSpecificationsSetRemoved');
          const result = this.impl.onProductSpecificationsSetRemoved(params.arg_uuid);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.Page_OnSyncStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSyncStateChanged');
          const result = this.impl.onSyncStateChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.PageReceiver = mojo.internal.bindings.commerce.product_specifications.mojom.PageReceiver;

mojo.internal.bindings.commerce.product_specifications.mojom.PagePtr = mojo.internal.bindings.commerce.product_specifications.mojom.PageRemote;
mojo.internal.bindings.commerce.product_specifications.mojom.PageRequest = mojo.internal.bindings.commerce.product_specifications.mojom.PagePendingReceiver;


// Interface: ProductSpecificationsHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec, 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.commerce.product_specifications.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createProductSpecificationsHandler(arg_page, arg_handler) {
    return this.$.createProductSpecificationsHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory', [
      { explicit: null },
    ]);
  }

  createProductSpecificationsHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory', [
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
        
        // Try Method 0: CreateProductSpecificationsHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProductSpecificationsHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory_CreateProductSpecificationsHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createProductSpecificationsHandler');
          const result = this.impl.createProductSpecificationsHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryReceiver;

mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPtr = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRemote;
mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryRequest = mojo.internal.bindings.commerce.product_specifications.mojom.ProductSpecificationsHandlerFactoryPendingReceiver;

