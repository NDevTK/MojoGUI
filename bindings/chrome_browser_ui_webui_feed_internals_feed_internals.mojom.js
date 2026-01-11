// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/feed_internals/feed_internals.mojom
// Module: feed_internals.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var feed_internals = feed_internals || {};
feed_internals.mojom = feed_internals.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

feed_internals.mojom.FeedOrderSpec = { $: mojo.internal.Enum() };
feed_internals.mojom.PropertiesSpec = { $: {} };
feed_internals.mojom.LastFetchPropertiesSpec = { $: {} };
feed_internals.mojom.PageHandler = {};
feed_internals.mojom.PageHandler.$interfaceName = 'feed_internals.mojom.PageHandler';
feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec = { $: {} };
feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec = { $: {} };

// Enum: FeedOrder
feed_internals.mojom.FeedOrder = {
  kUnspecified: 0,
  kGrouped: 1,
  kReverseChron: 2,
};

// Struct: Properties
mojo.internal.Struct(
    feed_internals.mojom.PropertiesSpec, 'feed_internals.mojom.Properties', [
      mojo.internal.StructField('load_stream_status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('feed_fetch_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feed_actions_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('following_feed_order', 24, 0, feed_internals.mojom.FeedOrderSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_feed_enabled', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feed_visible', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feed_allowed', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_prefetching_enabled', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_web_feed_follow_intro_debug_enabled', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_feed_query_requests', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LastFetchProperties
mojo.internal.Struct(
    feed_internals.mojom.LastFetchPropertiesSpec, 'feed_internals.mojom.LastFetchProperties', [
      mojo.internal.StructField('last_fetch_trigger', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_fetch_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('refresh_suppress_time', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_bless_nonce', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_action_upload_time', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_fetch_status', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_action_upload_status', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PageHandler
mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, feed_internals.mojom.PropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, feed_internals.mojom.LastFetchPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshForYouFeed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshFollowingFeed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec, 'feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParams', [
      mojo.internal.StructField('dump', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedHistograms_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParams', [
      mojo.internal.StructField('log', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideFeedHost_Params', [
      mojo.internal.StructField('host', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_Params', [
      mojo.internal.StructField('endpoint_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideFeedStreamData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec, 'feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec, 'feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_Params', [
      mojo.internal.StructField('use_legacy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec, 'feed_internals.mojom.PageHandler_SetFollowingFeedOrder_Params', [
      mojo.internal.StructField('order', 0, 0, feed_internals.mojom.FeedOrderSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

feed_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

feed_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'feed_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      feed_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new feed_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getGeneralProperties() {
    return this.$.getGeneralProperties();
  }
  getLastFetchProperties() {
    return this.$.getLastFetchProperties();
  }
  refreshForYouFeed() {
    return this.$.refreshForYouFeed();
  }
  refreshFollowingFeed() {
    return this.$.refreshFollowingFeed();
  }
  refreshWebFeedSuggestions() {
    return this.$.refreshWebFeedSuggestions();
  }
  getFeedProcessScopeDump() {
    return this.$.getFeedProcessScopeDump();
  }
  getFeedHistograms() {
    return this.$.getFeedHistograms();
  }
  overrideFeedHost(host) {
    return this.$.overrideFeedHost(host);
  }
  overrideDiscoverApiEndpoint(endpoint_url) {
    return this.$.overrideDiscoverApiEndpoint(endpoint_url);
  }
  overrideFeedStreamData(data) {
    return this.$.overrideFeedStreamData(data);
  }
  setWebFeedFollowIntroDebugEnabled(enabled) {
    return this.$.setWebFeedFollowIntroDebugEnabled(enabled);
  }
  setUseFeedQueryRequests(use_legacy) {
    return this.$.setUseFeedQueryRequests(use_legacy);
  }
  setFollowingFeedOrder(order) {
    return this.$.setFollowingFeedOrder(order);
  }
};

feed_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  getGeneralProperties() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec,
      feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec,
      [],
      false);
  }

  getLastFetchProperties() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec,
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec,
      [],
      false);
  }

  refreshForYouFeed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshFollowingFeed() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshWebFeedSuggestions() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec,
      null,
      [],
      false);
  }

  getFeedProcessScopeDump() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec,
      [],
      false);
  }

  getFeedHistograms() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec,
      [],
      false);
  }

  overrideFeedHost(host) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec,
      null,
      [host],
      false);
  }

  overrideDiscoverApiEndpoint(endpoint_url) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec,
      null,
      [endpoint_url],
      false);
  }

  overrideFeedStreamData(data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec,
      null,
      [data],
      false);
  }

  setWebFeedFollowIntroDebugEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setUseFeedQueryRequests(use_legacy) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec,
      null,
      [use_legacy],
      false);
  }

  setFollowingFeedOrder(order) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec,
      null,
      [order],
      false);
  }

};

feed_internals.mojom.PageHandler.getRemote = function() {
  let remote = new feed_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'feed_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

feed_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec.$.structSpec);
          const result = this.impl.getGeneralProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec.$.structSpec);
          const result = this.impl.getLastFetchProperties();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec.$.structSpec);
          const result = this.impl.refreshForYouFeed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec.$.structSpec);
          const result = this.impl.refreshFollowingFeed();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec.$.structSpec);
          const result = this.impl.refreshWebFeedSuggestions();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec.$.structSpec);
          const result = this.impl.getFeedProcessScopeDump();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec.$.structSpec);
          const result = this.impl.getFeedHistograms();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec.$.structSpec);
          const result = this.impl.overrideFeedHost(params.host);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec.$.structSpec);
          const result = this.impl.overrideDiscoverApiEndpoint(params.endpoint_url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec.$.structSpec);
          const result = this.impl.overrideFeedStreamData(params.data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setWebFeedFollowIntroDebugEnabled(params.enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec.$.structSpec);
          const result = this.impl.setUseFeedQueryRequests(params.use_legacy);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec.$.structSpec);
          const result = this.impl.setFollowingFeedOrder(params.order);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

feed_internals.mojom.PageHandlerReceiver = feed_internals.mojom.PageHandlerReceiver;

feed_internals.mojom.PageHandlerPtr = feed_internals.mojom.PageHandlerRemote;
feed_internals.mojom.PageHandlerRequest = feed_internals.mojom.PageHandlerPendingReceiver;

