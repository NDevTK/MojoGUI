// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_auction_service.mojom
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
var url = url || {};

blink.mojom.AuctionAdConfigFieldSpec = { $: mojo.internal.Enum() };
blink.mojom.AuctionAdConfigBuyerTimeoutFieldSpec = { $: mojo.internal.Enum() };
blink.mojom.AuctionAdConfigAuctionIdSpec = { $: {} };
blink.mojom.AbortableAdAuction = {};
blink.mojom.AbortableAdAuction.$interfaceName = 'blink.mojom.AbortableAdAuction';
blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec = { $: {} };
blink.mojom.AbortableAdAuction_Abort_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService = {};
blink.mojom.AdAuctionService.$interfaceName = 'blink.mojom.AdAuctionService';
blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec = { $: {} };
blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec = { $: {} };
blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec = { $: {} };

// Enum: AuctionAdConfigField
blink.mojom.AuctionAdConfigField = {
  kAuctionSignals: 0,
  kSellerSignals: 1,
  kSellerTKVSignals: 2,
};

// Enum: AuctionAdConfigBuyerTimeoutField
blink.mojom.AuctionAdConfigBuyerTimeoutField = {
  kPerBuyerTimeouts: 0,
  kPerBuyerCumulativeTimeouts: 1,
};

// Union: AuctionAdConfigAuctionId
mojo.internal.Union(
    blink.mojom.AuctionAdConfigAuctionIdSpec, 'blink.mojom.AuctionAdConfigAuctionId', {
      'main_auction': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'component_auction': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
    });

// Interface: AbortableAdAuction
mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedPromiseParam_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field', 8, 0, blink.mojom.AuctionAdConfigFieldSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('json_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('per_buyer_signals', 8, 0, mojo.internal.Map(url.mojom.OriginSpec.$, mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buyer', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('json_value', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('field', 8, 0, blink.mojom.AuctionAdConfigBuyerTimeoutFieldSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buyer_timeouts', 16, 0, blink.mojom.AuctionAdConfigBuyerTimeoutsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('per_buyer_currencies', 8, 0, blink.mojom.AuctionAdConfigBuyerCurrenciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_from_seller_signals', 8, 0, blink.mojom.DirectFromSellerSignalsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_from_seller_signals_header_ad_slot', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deprecated_render_url_replacements', 8, 0, mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec, 'blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_Params', [
      mojo.internal.StructField('auction', 0, 0, blink.mojom.AuctionAdConfigAuctionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AbortableAdAuction_Abort_ParamsSpec, 'blink.mojom.AbortableAdAuction_Abort_Params', [
    ],
    [[0, 8]]);

blink.mojom.AbortableAdAuctionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AbortableAdAuctionRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AbortableAdAuction';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AbortableAdAuctionPendingReceiver,
      handle);
    this.$ = new blink.mojom.AbortableAdAuctionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resolvedPromiseParam(auction, field, json_value) {
    return this.$.resolvedPromiseParam(auction, field, json_value);
  }
  resolvedPerBuyerSignalsPromise(auction, per_buyer_signals) {
    return this.$.resolvedPerBuyerSignalsPromise(auction, per_buyer_signals);
  }
  resolvedBuyerTkvSignalsPromise(auction, buyer, json_value) {
    return this.$.resolvedBuyerTkvSignalsPromise(auction, buyer, json_value);
  }
  resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts) {
    return this.$.resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts);
  }
  resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies) {
    return this.$.resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies);
  }
  resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals) {
    return this.$.resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals);
  }
  resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot) {
    return this.$.resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot);
  }
  resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements) {
    return this.$.resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements);
  }
  resolvedAuctionAdResponsePromise(auction, result) {
    return this.$.resolvedAuctionAdResponsePromise(auction, result);
  }
  resolvedAdditionalBids(auction) {
    return this.$.resolvedAdditionalBids(auction);
  }
  abort() {
    return this.$.abort();
  }
};

blink.mojom.AbortableAdAuctionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AbortableAdAuction', [
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

  resolvedPromiseParam(auction, field, json_value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec,
      null,
      [auction, field, json_value],
      false);
  }

  resolvedPerBuyerSignalsPromise(auction, per_buyer_signals) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec,
      null,
      [auction, per_buyer_signals],
      false);
  }

  resolvedBuyerTkvSignalsPromise(auction, buyer, json_value) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec,
      null,
      [auction, buyer, json_value],
      false);
  }

  resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec,
      null,
      [auction, field, buyer_timeouts],
      false);
  }

  resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec,
      null,
      [auction, per_buyer_currencies],
      false);
  }

  resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals],
      false);
  }

  resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals_header_ad_slot],
      false);
  }

  resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec,
      null,
      [auction, deprecated_render_url_replacements],
      false);
  }

  resolvedAuctionAdResponsePromise(auction, result) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec,
      null,
      [auction, result],
      false);
  }

  resolvedAdditionalBids(auction) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec,
      null,
      [auction],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.AbortableAdAuction_Abort_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.AbortableAdAuction.getRemote = function() {
  let remote = new blink.mojom.AbortableAdAuctionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AbortableAdAuction',
    'context');
  return remote.$;
};

blink.mojom.AbortableAdAuctionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AbortableAdAuction', [
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
        
        // Try Method 0: ResolvedPromiseParam
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedPromiseParam (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResolvedPerBuyerSignalsPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedPerBuyerSignalsPromise (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ResolvedBuyerTkvSignalsPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerTkvSignalsPromise (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResolvedBuyerTimeoutsPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerTimeoutsPromise (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ResolvedBuyerCurrenciesPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerCurrenciesPromise (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ResolvedDirectFromSellerSignalsPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDirectFromSellerSignalsPromise (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ResolvedDirectFromSellerSignalsHeaderAdSlotPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDirectFromSellerSignalsHeaderAdSlotPromise (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResolvedDeprecatedRenderURLReplacementsPromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDeprecatedRenderURLReplacementsPromise (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ResolvedAuctionAdResponsePromise
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedAuctionAdResponsePromise (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ResolvedAdditionalBids
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedAdditionalBids (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (10)');
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
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedPromiseParam');
          const result = this.impl.resolvedPromiseParam(params.auction, params.field, params.json_value);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedPerBuyerSignalsPromise');
          const result = this.impl.resolvedPerBuyerSignalsPromise(params.auction, params.per_buyer_signals);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerTkvSignalsPromise');
          const result = this.impl.resolvedBuyerTkvSignalsPromise(params.auction, params.buyer, params.json_value);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerTimeoutsPromise');
          const result = this.impl.resolvedBuyerTimeoutsPromise(params.auction, params.field, params.buyer_timeouts);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerCurrenciesPromise');
          const result = this.impl.resolvedBuyerCurrenciesPromise(params.auction, params.per_buyer_currencies);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedDirectFromSellerSignalsPromise');
          const result = this.impl.resolvedDirectFromSellerSignalsPromise(params.auction, params.direct_from_seller_signals);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedDirectFromSellerSignalsHeaderAdSlotPromise');
          const result = this.impl.resolvedDirectFromSellerSignalsHeaderAdSlotPromise(params.auction, params.direct_from_seller_signals_header_ad_slot);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedDeprecatedRenderURLReplacementsPromise');
          const result = this.impl.resolvedDeprecatedRenderURLReplacementsPromise(params.auction, params.deprecated_render_url_replacements);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedAuctionAdResponsePromise');
          const result = this.impl.resolvedAuctionAdResponsePromise(params.auction, params.result);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolvedAdditionalBids');
          const result = this.impl.resolvedAdditionalBids(params.auction);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AbortableAdAuctionReceiver = blink.mojom.AbortableAdAuctionReceiver;

blink.mojom.AbortableAdAuctionPtr = blink.mojom.AbortableAdAuctionRemote;
blink.mojom.AbortableAdAuctionRequest = blink.mojom.AbortableAdAuctionPendingReceiver;


// Interface: AdAuctionService
mojo.internal.Struct(
    blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec, 'blink.mojom.AdAuctionService_CreateAdRequest_Params', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.AdRequestConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec, 'blink.mojom.AdAuctionService_CreateAdRequest_ResponseParams', [
      mojo.internal.StructField('ads_guid', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec, 'blink.mojom.AdAuctionService_FinalizeAd_Params', [
      mojo.internal.StructField('ads_guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, blink.mojom.AuctionAdConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec, 'blink.mojom.AdAuctionService_FinalizeAd_ResponseParams', [
      mojo.internal.StructField('ad_display_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec, 'blink.mojom.AdAuctionService_RunAdAuction_Params', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.AuctionAdConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('abort_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.AbortableAdAuctionSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec, 'blink.mojom.AdAuctionService_RunAdAuction_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.FencedFrameConfigSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('aborted_by_script', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec, 'blink.mojom.AdAuctionService_JoinInterestGroup_Params', [
      mojo.internal.StructField('group', 0, 0, blink.mojom.InterestGroupSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec, 'blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParams', [
      mojo.internal.StructField('failed_well_known_check', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec, 'blink.mojom.AdAuctionService_LeaveInterestGroup_Params', [
      mojo.internal.StructField('owner', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec, 'blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParams', [
      mojo.internal.StructField('failed_well_known_check', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec, 'blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec, 'blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_Params', [
      mojo.internal.StructField('owner', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interest_groups_to_keep', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec, 'blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParams', [
      mojo.internal.StructField('failed_well_known_check', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec, 'blink.mojom.AdAuctionService_UpdateAdInterestGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec, 'blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_Params', [
      mojo.internal.StructField('uuid_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('send_reports', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec, 'blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParams', [
      mojo.internal.StructField('decoded_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec, 'blink.mojom.AdAuctionService_DeprecatedReplaceInURN_Params', [
      mojo.internal.StructField('uuid_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replacements', 8, 0, mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec, 'blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec, 'blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_Params', [
      mojo.internal.StructField('sellers', 0, 0, mojo.internal.Map(url.mojom.OriginSpec.$, url.mojom.OriginSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('config', 8, 0, blink.mojom.AuctionDataConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec, 'blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParams', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(blink.mojom.AdAuctionPerSellerRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 8, 0, mojo_base.mojom.UuidSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.AdAuctionServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AdAuctionServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AdAuctionService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AdAuctionServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.AdAuctionServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createAdRequest(config) {
    return this.$.createAdRequest(config);
  }
  finalizeAd(ads_guid, config) {
    return this.$.finalizeAd(ads_guid, config);
  }
  runAdAuction(config, abort_receiver) {
    return this.$.runAdAuction(config, abort_receiver);
  }
  joinInterestGroup(group) {
    return this.$.joinInterestGroup(group);
  }
  leaveInterestGroup(owner, name) {
    return this.$.leaveInterestGroup(owner, name);
  }
  leaveInterestGroupForDocument() {
    return this.$.leaveInterestGroupForDocument();
  }
  clearOriginJoinedInterestGroups(owner, interest_groups_to_keep) {
    return this.$.clearOriginJoinedInterestGroups(owner, interest_groups_to_keep);
  }
  updateAdInterestGroups() {
    return this.$.updateAdInterestGroups();
  }
  deprecatedGetURLFromURN(uuid_url, send_reports) {
    return this.$.deprecatedGetURLFromURN(uuid_url, send_reports);
  }
  deprecatedReplaceInURN(uuid_url, replacements) {
    return this.$.deprecatedReplaceInURN(uuid_url, replacements);
  }
  getInterestGroupAdAuctionData(sellers, config) {
    return this.$.getInterestGroupAdAuctionData(sellers, config);
  }
};

blink.mojom.AdAuctionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AdAuctionService', [
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

  createAdRequest(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec,
      blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec,
      [config],
      false);
  }

  finalizeAd(ads_guid, config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec,
      blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec,
      [ads_guid, config],
      false);
  }

  runAdAuction(config, abort_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec,
      blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec,
      [config, abort_receiver],
      false);
  }

  joinInterestGroup(group) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec,
      [group],
      false);
  }

  leaveInterestGroup(owner, name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec,
      [owner, name],
      false);
  }

  leaveInterestGroupForDocument() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec,
      null,
      [],
      false);
  }

  clearOriginJoinedInterestGroups(owner, interest_groups_to_keep) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec,
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec,
      [owner, interest_groups_to_keep],
      false);
  }

  updateAdInterestGroups() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec,
      null,
      [],
      false);
  }

  deprecatedGetURLFromURN(uuid_url, send_reports) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec,
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec,
      [uuid_url, send_reports],
      false);
  }

  deprecatedReplaceInURN(uuid_url, replacements) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec,
      blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec,
      [uuid_url, replacements],
      false);
  }

  getInterestGroupAdAuctionData(sellers, config) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec,
      blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec,
      [sellers, config],
      false);
  }

};

blink.mojom.AdAuctionService.getRemote = function() {
  let remote = new blink.mojom.AdAuctionServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AdAuctionService',
    'context');
  return remote.$;
};

blink.mojom.AdAuctionServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AdAuctionService', [
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
        
        // Try Method 0: CreateAdRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAdRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FinalizeAd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinalizeAd (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RunAdAuction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAdAuction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: JoinInterestGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JoinInterestGroup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: LeaveInterestGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveInterestGroup (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LeaveInterestGroupForDocument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveInterestGroupForDocument (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ClearOriginJoinedInterestGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearOriginJoinedInterestGroups (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateAdInterestGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAdInterestGroups (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeprecatedGetURLFromURN
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeprecatedGetURLFromURN (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DeprecatedReplaceInURN
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeprecatedReplaceInURN (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetInterestGroupAdAuctionData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterestGroupAdAuctionData (10)');
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
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAdRequest');
          const result = this.impl.createAdRequest(params.config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateAdRequest FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finalizeAd');
          const result = this.impl.finalizeAd(params.ads_guid, params.config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FinalizeAd FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runAdAuction');
          const result = this.impl.runAdAuction(params.config, params.abort_receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunAdAuction FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.joinInterestGroup');
          const result = this.impl.joinInterestGroup(params.group);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] JoinInterestGroup FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.leaveInterestGroup');
          const result = this.impl.leaveInterestGroup(params.owner, params.name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LeaveInterestGroup FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.leaveInterestGroupForDocument');
          const result = this.impl.leaveInterestGroupForDocument();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearOriginJoinedInterestGroups');
          const result = this.impl.clearOriginJoinedInterestGroups(params.owner, params.interest_groups_to_keep);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ClearOriginJoinedInterestGroups FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAdInterestGroups');
          const result = this.impl.updateAdInterestGroups();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deprecatedGetURLFromURN');
          const result = this.impl.deprecatedGetURLFromURN(params.uuid_url, params.send_reports);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeprecatedGetURLFromURN FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deprecatedReplaceInURN');
          const result = this.impl.deprecatedReplaceInURN(params.uuid_url, params.replacements);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeprecatedReplaceInURN FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInterestGroupAdAuctionData');
          const result = this.impl.getInterestGroupAdAuctionData(params.sellers, params.config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetInterestGroupAdAuctionData FAILED:', e));
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

blink.mojom.AdAuctionServiceReceiver = blink.mojom.AdAuctionServiceReceiver;

blink.mojom.AdAuctionServicePtr = blink.mojom.AdAuctionServiceRemote;
blink.mojom.AdAuctionServiceRequest = blink.mojom.AdAuctionServicePendingReceiver;

