// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_auction_service.mojom
// Module: blink.mojom

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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AbortableAdAuction_Abort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedPromiseParam(params.auction, params.field, params.json_value);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedPerBuyerSignalsPromise(params.auction, params.per_buyer_signals);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedBuyerTkvSignalsPromise(params.auction, params.buyer, params.json_value);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedBuyerTimeoutsPromise(params.auction, params.field, params.buyer_timeouts);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedBuyerCurrenciesPromise(params.auction, params.per_buyer_currencies);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedDirectFromSellerSignalsPromise(params.auction, params.direct_from_seller_signals);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedDirectFromSellerSignalsHeaderAdSlotPromise(params.auction, params.direct_from_seller_signals_header_ad_slot);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedDeprecatedRenderURLReplacementsPromise(params.auction, params.deprecated_render_url_replacements);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedAuctionAdResponsePromise(params.auction, params.result);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec.$.structSpec);
          const result = this.impl.resolvedAdditionalBids(params.auction);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AbortableAdAuction_Abort_ParamsSpec.$.structSpec);
          const result = this.impl.abort();
          break;
        }
      }
      } catch (err) {}
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
      mojo.internal.StructField('abort_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.AbortableAdAuctionRemote), null, true, 0, undefined),
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec.$.structSpec);
          const result = this.impl.createAdRequest(params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec.$.structSpec);
          const result = this.impl.finalizeAd(params.ads_guid, params.config);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec.$.structSpec);
          const result = this.impl.runAdAuction(params.config, params.abort_receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec.$.structSpec);
          const result = this.impl.joinInterestGroup(params.group);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec.$.structSpec);
          const result = this.impl.leaveInterestGroup(params.owner, params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec.$.structSpec);
          const result = this.impl.leaveInterestGroupForDocument();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec.$.structSpec);
          const result = this.impl.clearOriginJoinedInterestGroups(params.owner, params.interest_groups_to_keep);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec.$.structSpec);
          const result = this.impl.updateAdInterestGroups();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec.$.structSpec);
          const result = this.impl.deprecatedGetURLFromURN(params.uuid_url, params.send_reports);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

blink.mojom.AdAuctionServiceReceiver = blink.mojom.AdAuctionServiceReceiver;

blink.mojom.AdAuctionServicePtr = blink.mojom.AdAuctionServiceRemote;
blink.mojom.AdAuctionServiceRequest = blink.mojom.AdAuctionServicePendingReceiver;

