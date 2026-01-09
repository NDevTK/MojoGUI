// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_auction_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: AbortableAdAuction
blink.mojom.AbortableAdAuctionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AbortableAdAuction';
  }

  resolvedPromiseParam(auction, field, json_value) {
    // Method: ResolvedPromiseParam
    // Call: ResolvedPromiseParam(auction, field, json_value)
  }

  resolvedPerBuyerSignalsPromise(auction, per_buyer_signals) {
    // Method: ResolvedPerBuyerSignalsPromise
    // Call: ResolvedPerBuyerSignalsPromise(auction, per_buyer_signals)
  }

  resolvedBuyerTkvSignalsPromise(auction, buyer, json_value) {
    // Method: ResolvedBuyerTkvSignalsPromise
    // Call: ResolvedBuyerTkvSignalsPromise(auction, buyer, json_value)
  }

  resolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts) {
    // Method: ResolvedBuyerTimeoutsPromise
    // Call: ResolvedBuyerTimeoutsPromise(auction, field, buyer_timeouts)
  }

  resolvedBuyerCurrenciesPromise(auction, per_buyer_currencies) {
    // Method: ResolvedBuyerCurrenciesPromise
    // Call: ResolvedBuyerCurrenciesPromise(auction, per_buyer_currencies)
  }

  resolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals) {
    // Method: ResolvedDirectFromSellerSignalsPromise
    // Call: ResolvedDirectFromSellerSignalsPromise(auction, direct_from_seller_signals)
  }

  resolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot) {
    // Method: ResolvedDirectFromSellerSignalsHeaderAdSlotPromise
    // Call: ResolvedDirectFromSellerSignalsHeaderAdSlotPromise(auction, direct_from_seller_signals_header_ad_slot)
  }

  resolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements) {
    // Method: ResolvedDeprecatedRenderURLReplacementsPromise
    // Call: ResolvedDeprecatedRenderURLReplacementsPromise(auction, deprecated_render_url_replacements)
  }

  resolvedAuctionAdResponsePromise(auction, result) {
    // Method: ResolvedAuctionAdResponsePromise
    // Call: ResolvedAuctionAdResponsePromise(auction, result)
  }

  resolvedAdditionalBids(auction) {
    // Method: ResolvedAdditionalBids
    // Call: ResolvedAdditionalBids(auction)
  }

  abort() {
    // Method: Abort
    // Call: Abort()
  }

};

blink.mojom.AbortableAdAuctionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AdAuctionService
blink.mojom.AdAuctionServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AdAuctionService';
  }

  createAdRequest(config) {
    // Method: CreateAdRequest
    return new Promise((resolve) => {
      // Call: CreateAdRequest(config)
      resolve({});
    });
  }

  finalizeAd(ads_guid, config) {
    // Method: FinalizeAd
    return new Promise((resolve) => {
      // Call: FinalizeAd(ads_guid, config)
      resolve({});
    });
  }

  runAdAuction(config, abort_receiver) {
    // Method: RunAdAuction
    return new Promise((resolve) => {
      // Call: RunAdAuction(config, abort_receiver)
      resolve({});
    });
  }

  joinInterestGroup(group) {
    // Method: JoinInterestGroup
    return new Promise((resolve) => {
      // Call: JoinInterestGroup(group)
      resolve({});
    });
  }

  leaveInterestGroup(owner, name) {
    // Method: LeaveInterestGroup
    return new Promise((resolve) => {
      // Call: LeaveInterestGroup(owner, name)
      resolve({});
    });
  }

  leaveInterestGroupForDocument() {
    // Method: LeaveInterestGroupForDocument
    // Call: LeaveInterestGroupForDocument()
  }

  clearOriginJoinedInterestGroups(owner, interest_groups_to_keep) {
    // Method: ClearOriginJoinedInterestGroups
    return new Promise((resolve) => {
      // Call: ClearOriginJoinedInterestGroups(owner, interest_groups_to_keep)
      resolve({});
    });
  }

  updateAdInterestGroups() {
    // Method: UpdateAdInterestGroups
    // Call: UpdateAdInterestGroups()
  }

  deprecatedGetURLFromURN(uuid_url, send_reports) {
    // Method: DeprecatedGetURLFromURN
    return new Promise((resolve) => {
      // Call: DeprecatedGetURLFromURN(uuid_url, send_reports)
      resolve({});
    });
  }

};

blink.mojom.AdAuctionServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
