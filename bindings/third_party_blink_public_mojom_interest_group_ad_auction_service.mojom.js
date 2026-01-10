// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_auction_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


// Enum: AuctionAdConfigField
blink.mojom.AuctionAdConfigField = {
  kAuctionSignals: 0,
  kSellerSignals: 1,
  kSellerTKVSignals: 2,
};
blink.mojom.AuctionAdConfigFieldSpec = { $: mojo.internal.Enum() };

// Enum: AuctionAdConfigBuyerTimeoutField
blink.mojom.AuctionAdConfigBuyerTimeoutField = {
  kPerBuyerTimeouts: 0,
  kPerBuyerCumulativeTimeouts: 1,
};
blink.mojom.AuctionAdConfigBuyerTimeoutFieldSpec = { $: mojo.internal.Enum() };

// Union: AuctionAdConfigAuctionId
blink.mojom.AuctionAdConfigAuctionIdSpec = { $: mojo.internal.Union(
    'blink.mojom.AuctionAdConfigAuctionId', {
      'main_auction': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
      }},
      'component_auction': {
        'ordinal': 1,
        'type': mojo.internal.Uint32,
      }},
    })
};

// Interface: AbortableAdAuction
blink.mojom.AbortableAdAuction = {};

blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedPromiseParam_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'field', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigFieldSpec, nullable: false, minVersion: 0 },
        { name: 'json_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'per_buyer_signals', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'buyer', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'json_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'field', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerTimeoutFieldSpec, nullable: false, minVersion: 0 },
        { name: 'buyer_timeouts', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerTimeoutsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'per_buyer_currencies', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerCurrenciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_signals', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_signals_header_ad_slot', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'deprecated_render_url_replacements', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_Params',
      packedSize: 24,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AbortableAdAuction_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction_Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      [auction, field, json_value]);
  }

  resolvedPerBuyerSignalsPromise(auction, per_buyer_signals) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec,
      null,
      [auction, per_buyer_signals]);
  }

  resolvedBuyerTkvSignalsPromise(auction, buyer, json_value) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec,
      null,
      [auction, buyer, json_value]);
  }

  resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec,
      null,
      [auction, field, buyer_timeouts]);
  }

  resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec,
      null,
      [auction, per_buyer_currencies]);
  }

  resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals]);
  }

  resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec,
      null,
      [auction, direct_from_seller_signals_header_ad_slot]);
  }

  resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec,
      null,
      [auction, deprecated_render_url_replacements]);
  }

  resolvedAuctionAdResponsePromise(auction, result) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec,
      null,
      [auction, result]);
  }

  resolvedAdditionalBids(auction) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec,
      null,
      [auction]);
  }

  abort() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.AbortableAdAuction_Abort_ParamsSpec,
      null,
      []);
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

// ParamsSpec for ResolvedPromiseParam
blink.mojom.AbortableAdAuction_ResolvedPromiseParam_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedPromiseParam_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'field', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigFieldSpec, nullable: false, minVersion: 0 },
        { name: 'json_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ResolvedPerBuyerSignalsPromise
blink.mojom.AbortableAdAuction_ResolvedPerBuyerSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedPerBuyerSignalsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'per_buyer_signals', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, mojo.internal.String, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResolvedBuyerTkvSignalsPromise
blink.mojom.AbortableAdAuction_ResolvedBuyerTkvSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedBuyerTkvSignalsPromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'buyer', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'json_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ResolvedBuyerTimeoutsPromise
blink.mojom.AbortableAdAuction_ResolvedBuyerTimeoutsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedBuyerTimeoutsPromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'field', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerTimeoutFieldSpec, nullable: false, minVersion: 0 },
        { name: 'buyer_timeouts', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerTimeoutsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ResolvedBuyerCurrenciesPromise
blink.mojom.AbortableAdAuction_ResolvedBuyerCurrenciesPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedBuyerCurrenciesPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'per_buyer_currencies', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigBuyerCurrenciesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResolvedDirectFromSellerSignalsPromise
blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedDirectFromSellerSignalsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_signals', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.DirectFromSellerSignalsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResolvedDirectFromSellerSignalsHeaderAdSlotPromise
blink.mojom.AbortableAdAuction_ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedDirectFromSellerSignalsHeaderAdSlotPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'direct_from_seller_signals_header_ad_slot', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResolvedDeprecatedRenderURLReplacementsPromise
blink.mojom.AbortableAdAuction_ResolvedDeprecatedRenderURLReplacementsPromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedDeprecatedRenderURLReplacementsPromise_Params',
      packedSize: 32,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'deprecated_render_url_replacements', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ResolvedAuctionAdResponsePromise
blink.mojom.AbortableAdAuction_ResolvedAuctionAdResponsePromise_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedAuctionAdResponsePromise_Params',
      packedSize: 40,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ResolvedAdditionalBids
blink.mojom.AbortableAdAuction_ResolvedAdditionalBids_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.ResolvedAdditionalBids_Params',
      packedSize: 24,
      fields: [
        { name: 'auction', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigAuctionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Abort
blink.mojom.AbortableAdAuction_Abort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AbortableAdAuction.Abort_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.AbortableAdAuctionPtr = blink.mojom.AbortableAdAuctionRemote;
blink.mojom.AbortableAdAuctionRequest = blink.mojom.AbortableAdAuctionPendingReceiver;


// Interface: AdAuctionService
blink.mojom.AdAuctionService = {};

blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_CreateAdRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AdRequestConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_FinalizeAd_Params',
      packedSize: 24,
      fields: [
        { name: 'ads_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_RunAdAuction_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigSpec, nullable: false, minVersion: 0 },
        { name: 'abort_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.AbortableAdAuctionRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_JoinInterestGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InterestGroupSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_LeaveInterestGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_Params',
      packedSize: 24,
      fields: [
        { name: 'owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'interest_groups_to_keep', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_UpdateAdInterestGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'send_reports', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_DeprecatedReplaceInURN_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'replacements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_Params',
      packedSize: 24,
      fields: [
        { name: 'sellers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, url.mojom.OriginSpec, false), nullable: true, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionDataConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [config]);
  }

  finalizeAd(ads_guid, config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec,
      blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec,
      [ads_guid, config]);
  }

  runAdAuction(config, abort_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec,
      blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec,
      [config, abort_receiver]);
  }

  joinInterestGroup(group) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec,
      [group]);
  }

  leaveInterestGroup(owner, name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec,
      blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec,
      [owner, name]);
  }

  leaveInterestGroupForDocument() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec,
      null,
      []);
  }

  clearOriginJoinedInterestGroups(owner, interest_groups_to_keep) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec,
      blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec,
      [owner, interest_groups_to_keep]);
  }

  updateAdInterestGroups() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec,
      null,
      []);
  }

  deprecatedGetURLFromURN(uuid_url, send_reports) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec,
      blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec,
      [uuid_url, send_reports]);
  }

  deprecatedReplaceInURN(uuid_url, replacements) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec,
      null,
      [uuid_url, replacements]);
  }

  getInterestGroupAdAuctionData(sellers, config) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec,
      blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec,
      [sellers, config]);
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

// ParamsSpec for CreateAdRequest
blink.mojom.AdAuctionService_CreateAdRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.CreateAdRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AdRequestConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.AdAuctionService_CreateAdRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.CreateAdRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ads_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FinalizeAd
blink.mojom.AdAuctionService_FinalizeAd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.FinalizeAd_Params',
      packedSize: 24,
      fields: [
        { name: 'ads_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_FinalizeAd_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.FinalizeAd_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ad_display_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RunAdAuction
blink.mojom.AdAuctionService_RunAdAuction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.RunAdAuction_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuctionAdConfigSpec, nullable: false, minVersion: 0 },
        { name: 'abort_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.AbortableAdAuctionRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_RunAdAuction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.RunAdAuction_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'aborted_by_script', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FencedFrameConfigSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for JoinInterestGroup
blink.mojom.AdAuctionService_JoinInterestGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.JoinInterestGroup_Params',
      packedSize: 16,
      fields: [
        { name: 'group', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InterestGroupSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.AdAuctionService_JoinInterestGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.JoinInterestGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'failed_well_known_check', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LeaveInterestGroup
blink.mojom.AdAuctionService_LeaveInterestGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.LeaveInterestGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_LeaveInterestGroup_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.LeaveInterestGroup_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'failed_well_known_check', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LeaveInterestGroupForDocument
blink.mojom.AdAuctionService_LeaveInterestGroupForDocument_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.LeaveInterestGroupForDocument_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ClearOriginJoinedInterestGroups
blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.ClearOriginJoinedInterestGroups_Params',
      packedSize: 24,
      fields: [
        { name: 'owner', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'interest_groups_to_keep', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_ClearOriginJoinedInterestGroups_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.ClearOriginJoinedInterestGroups_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'failed_well_known_check', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateAdInterestGroups
blink.mojom.AdAuctionService_UpdateAdInterestGroups_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.UpdateAdInterestGroups_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DeprecatedGetURLFromURN
blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.DeprecatedGetURLFromURN_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'send_reports', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_DeprecatedGetURLFromURN_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.DeprecatedGetURLFromURN_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'decoded_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeprecatedReplaceInURN
blink.mojom.AdAuctionService_DeprecatedReplaceInURN_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.DeprecatedReplaceInURN_Params',
      packedSize: 24,
      fields: [
        { name: 'uuid_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'replacements', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdKeywordReplacementSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetInterestGroupAdAuctionData
blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.GetInterestGroupAdAuctionData_Params',
      packedSize: 24,
      fields: [
        { name: 'sellers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(url.mojom.OriginSpec, url.mojom.OriginSpec, false), nullable: true, minVersion: 0 },
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuctionDataConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.AdAuctionService_GetInterestGroupAdAuctionData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdAuctionService.GetInterestGroupAdAuctionData_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AdAuctionPerSellerRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.AdAuctionServicePtr = blink.mojom.AdAuctionServiceRemote;
blink.mojom.AdAuctionServiceRequest = blink.mojom.AdAuctionServicePendingReceiver;

