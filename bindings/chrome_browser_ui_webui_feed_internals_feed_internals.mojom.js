// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/feed_internals/feed_internals.mojom
// Module: feed_internals.mojom

'use strict';

// Module namespace
var feed_internals = feed_internals || {};
feed_internals.mojom = feed_internals.mojom || {};
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
      mojo.internal.StructField('is_feed_enabled', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feed_visible', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feed_allowed', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_prefetching_enabled', 28, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_web_feed_follow_intro_debug_enabled', 28, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_feed_query_requests', 28, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('load_stream_status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('feed_fetch_url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('feed_actions_url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('following_feed_order', 24, 0, feed_internals.mojom.FeedOrderSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: LastFetchProperties
mojo.internal.Struct(
    feed_internals.mojom.LastFetchPropertiesSpec, 'feed_internals.mojom.LastFetchProperties', [
      mojo.internal.StructField('last_fetch_status', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_fetch_trigger', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_fetch_time', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('refresh_suppress_time', 16, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_bless_nonce', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_action_upload_status', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_action_upload_time', 32, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PageHandler
mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, feed_internals.mojom.PropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec, 'feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParams', [
      mojo.internal.StructField('properties', 0, 0, feed_internals.mojom.LastFetchPropertiesSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('host', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec, 'feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_Params', [
      mojo.internal.StructField('endpoint_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('order', 0, 0, feed_internals.mojom.FeedOrderSpec, null, false, 0, undefined),
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
};

feed_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getGeneralProperties() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec,
      feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec,
      []);
  }

  getLastFetchProperties() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec,
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec,
      []);
  }

  refreshForYouFeed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec,
      null,
      []);
  }

  refreshFollowingFeed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec,
      null,
      []);
  }

  refreshWebFeedSuggestions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec,
      null,
      []);
  }

  getFeedProcessScopeDump() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec,
      []);
  }

  getFeedHistograms() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec,
      []);
  }

  overrideFeedHost(host) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec,
      null,
      [host]);
  }

  overrideDiscoverApiEndpoint(endpoint_url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec,
      null,
      [endpoint_url]);
  }

  overrideFeedStreamData(data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec,
      null,
      [data]);
  }

  setWebFeedFollowIntroDebugEnabled(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setUseFeedQueryRequests(use_legacy) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec,
      null,
      [use_legacy]);
  }

  setFollowingFeedOrder(order) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec,
      null,
      [order]);
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

feed_internals.mojom.PageHandlerPtr = feed_internals.mojom.PageHandlerRemote;
feed_internals.mojom.PageHandlerRequest = feed_internals.mojom.PageHandlerPendingReceiver;

