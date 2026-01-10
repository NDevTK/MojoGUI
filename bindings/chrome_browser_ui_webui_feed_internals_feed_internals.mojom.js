// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/feed_internals/feed_internals.mojom
// Module: feed_internals.mojom

'use strict';

// Module namespace
var feed_internals = feed_internals || {};
feed_internals.mojom = feed_internals.mojom || {};


// Enum: FeedOrder
feed_internals.mojom.FeedOrder = {
  kUnspecified: 0,
  kGrouped: 1,
  kReverseChron: 2,
};
feed_internals.mojom.FeedOrderSpec = { $: mojo.internal.Enum() };

// Struct: Properties
feed_internals.mojom.PropertiesSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.Properties',
      packedSize: 40,
      fields: [
        { name: 'is_feed_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_feed_visible', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_feed_allowed', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_prefetching_enabled', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_web_feed_follow_intro_debug_enabled', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_feed_query_requests', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'load_stream_status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'feed_fetch_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'feed_actions_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'following_feed_order', packedOffset: 4, packedBitOffset: 0, type: feed_internals.mojom.FeedOrderSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: LastFetchProperties
feed_internals.mojom.LastFetchPropertiesSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.LastFetchProperties',
      packedSize: 56,
      fields: [
        { name: 'last_fetch_status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'last_fetch_trigger', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_fetch_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'refresh_suppress_time', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'last_bless_nonce', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_action_upload_status', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'last_action_upload_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: PageHandler
feed_internals.mojom.PageHandler = {};

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

// ParamsSpec for GetGeneralProperties
feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.GetGeneralProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

feed_internals.mojom.PageHandler_GetGeneralProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: feed_internals.mojom.PropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLastFetchProperties
feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.GetLastFetchProperties_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: feed_internals.mojom.LastFetchPropertiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RefreshForYouFeed
feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.RefreshForYouFeed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RefreshFollowingFeed
feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.RefreshFollowingFeed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RefreshWebFeedSuggestions
feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.RefreshWebFeedSuggestions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetFeedProcessScopeDump
feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.GetFeedProcessScopeDump_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'dump', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFeedHistograms
feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.GetFeedHistograms_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'log', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverrideFeedHost
feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.OverrideFeedHost_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverrideDiscoverApiEndpoint
feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.OverrideDiscoverApiEndpoint_Params',
      packedSize: 16,
      fields: [
        { name: 'endpoint_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OverrideFeedStreamData
feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.OverrideFeedStreamData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetWebFeedFollowIntroDebugEnabled
feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.SetWebFeedFollowIntroDebugEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUseFeedQueryRequests
feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.SetUseFeedQueryRequests_Params',
      packedSize: 16,
      fields: [
        { name: 'use_legacy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFollowingFeedOrder
feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'feed_internals.mojom.PageHandler.SetFollowingFeedOrder_Params',
      packedSize: 16,
      fields: [
        { name: 'order', packedOffset: 0, packedBitOffset: 0, type: feed_internals.mojom.FeedOrderSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
feed_internals.mojom.PageHandlerPtr = feed_internals.mojom.PageHandlerRemote;
feed_internals.mojom.PageHandlerRequest = feed_internals.mojom.PageHandlerPendingReceiver;

