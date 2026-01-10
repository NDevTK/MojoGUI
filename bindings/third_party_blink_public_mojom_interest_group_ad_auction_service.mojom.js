// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_auction_service.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.AbortableAdAuctionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolvedPromiseParam(auction, field, json_value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec,
      null,
      [auction, field, json_value],
      false);
  }

  resolvedPerBuyerSignalsPromise(auction, per_buyer_signals) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec,
      null,
      [auction, per_buyer_signals],
      false);
  }

  resolvedBuyerTkvSignalsPromise(auction, buyer, json_value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec,
      null,
      [auction, buyer, json_value],
      false);
  }

  resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec,
      null,
      [auction, field, buyer_timeouts],
      false);
  }

  resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec,
      null,
      [auction, per_buyer_currencies],
      false);
  }

  resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals],
      false);
  }

  resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals_header_ad_slot],
      false);
  }

  resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec,
      null,
      [auction, deprecated_render_url_replacements],
      false);
  }

  resolvedAuctionAdResponsePromise(auction, result) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec,
      null,
      [auction, result],
      false);
  }

  resolvedAdditionalBids(auction) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec,
      null,
      [auction],
      false);
  }

  abort() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ResolvedPromiseParam
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedPromiseParam (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: ResolvedPerBuyerSignalsPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedPerBuyerSignalsPromise (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ResolvedBuyerTkvSignalsPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerTkvSignalsPromise (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: ResolvedBuyerTimeoutsPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerTimeoutsPromise (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: ResolvedBuyerCurrenciesPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedBuyerCurrenciesPromise (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: ResolvedDirectFromSellerSignalsPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDirectFromSellerSignalsPromise (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ResolvedDirectFromSellerSignalsHeaderAdSlotPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDirectFromSellerSignalsHeaderAdSlotPromise (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: ResolvedDeprecatedRenderURLReplacementsPromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedDeprecatedRenderURLReplacementsPromise (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: ResolvedAuctionAdResponsePromise
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedAuctionAdResponsePromise (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: ResolvedAdditionalBids
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolvedAdditionalBids (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: Abort
        try {
             decoder.decodeStruct(blink.mojom.AbortableAdAuction_Abort_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedPromiseParam');
          const result = this.impl.resolvedPromiseParam(params.auction, params.field, params.json_value);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedPerBuyerSignalsPromise');
          const result = this.impl.resolvedPerBuyerSignalsPromise(params.auction, params.per_buyer_signals);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerTkvSignalsPromise');
          const result = this.impl.resolvedBuyerTkvSignalsPromise(params.auction, params.buyer, params.json_value);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerTimeoutsPromise');
          const result = this.impl.resolvedBuyerTimeoutsPromise(params.auction, params.field, params.buyer_timeouts);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedBuyerCurrenciesPromise');
          const result = this.impl.resolvedBuyerCurrenciesPromise(params.auction, params.per_buyer_currencies);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedDirectFromSellerSignalsPromise');
          const result = this.impl.resolvedDirectFromSellerSignalsPromise(params.auction, params.direct_from_seller_signals);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedDirectFromSellerSignalsHeaderAdSlotPromise');
          const result = this.impl.resolvedDirectFromSellerSignalsHeaderAdSlotPromise(params.auction, params.direct_from_seller_signals_header_ad_slot);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedDeprecatedRenderURLReplacementsPromise');
          const result = this.impl.resolvedDeprecatedRenderURLReplacementsPromise(params.auction, params.deprecated_render_url_replacements);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedAuctionAdResponsePromise');
          const result = this.impl.resolvedAuctionAdResponsePromise(params.auction, params.result);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resolvedAdditionalBids');
          const result = this.impl.resolvedAdditionalBids(params.auction);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AbortableAdAuction_Abort_ParamsSpec.$, message.header.headerSize);
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
};

blink.mojom.AdAuctionServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAdRequest(config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec,
      blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec,
      [config],
      false);
  }

  finalizeAd(ads_guid, config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec,
      blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec,
      [ads_guid, config],
      false);
  }

  runAdAuction(config, abort_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec,
      blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec,
      [config, abort_receiver],
      false);
  }

  joinInterestGroup(group) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec,
      [group],
      false);
  }

  leaveInterestGroup(owner, name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec,
      [owner, name],
      false);
  }

  leaveInterestGroupForDocument() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec,
      null,
      [],
      false);
  }

  clearOriginJoinedInterestGroups(owner, interest_groups_to_keep) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec,
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec,
      [owner, interest_groups_to_keep],
      false);
  }

  updateAdInterestGroups() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec,
      null,
      [],
      false);
  }

  deprecatedGetURLFromURN(uuid_url, send_reports) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec,
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec,
      [uuid_url, send_reports],
      false);
  }

  deprecatedReplaceInURN(uuid_url, replacements) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec,
      blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec,
      [uuid_url, replacements],
      false);
  }

  getInterestGroupAdAuctionData(sellers, config) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateAdRequest
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAdRequest (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: FinalizeAd
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinalizeAd (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: RunAdAuction
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunAdAuction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: JoinInterestGroup
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> JoinInterestGroup (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: LeaveInterestGroup
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveInterestGroup (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: LeaveInterestGroupForDocument
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LeaveInterestGroupForDocument (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ClearOriginJoinedInterestGroups
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearOriginJoinedInterestGroups (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: UpdateAdInterestGroups
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAdInterestGroups (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: DeprecatedGetURLFromURN
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeprecatedGetURLFromURN (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: DeprecatedReplaceInURN
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeprecatedReplaceInURN (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: GetInterestGroupAdAuctionData
        try {
             decoder.decodeStruct(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterestGroupAdAuctionData (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createAdRequest');
          const result = this.impl.createAdRequest(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.finalizeAd');
          const result = this.impl.finalizeAd(params.ads_guid, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.runAdAuction');
          const result = this.impl.runAdAuction(params.config, params.abort_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.joinInterestGroup');
          const result = this.impl.joinInterestGroup(params.group);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.leaveInterestGroup');
          const result = this.impl.leaveInterestGroup(params.owner, params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.leaveInterestGroupForDocument');
          const result = this.impl.leaveInterestGroupForDocument();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearOriginJoinedInterestGroups');
          const result = this.impl.clearOriginJoinedInterestGroups(params.owner, params.interest_groups_to_keep);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateAdInterestGroups');
          const result = this.impl.updateAdInterestGroups();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deprecatedGetURLFromURN');
          const result = this.impl.deprecatedGetURLFromURN(params.uuid_url, params.send_reports);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deprecatedReplaceInURN');
          const result = this.impl.deprecatedReplaceInURN(params.uuid_url, params.replacements);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInterestGroupAdAuctionData');
          const result = this.impl.getInterestGroupAdAuctionData(params.sellers, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec);
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

blink.mojom.AdAuctionServiceReceiver = blink.mojom.AdAuctionServiceReceiver;

blink.mojom.AdAuctionServicePtr = blink.mojom.AdAuctionServiceRemote;
blink.mojom.AdAuctionServiceRequest = blink.mojom.AdAuctionServicePendingReceiver;

