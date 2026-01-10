// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/feed_internals/feed_internals.mojom
// Module: feed_internals.mojom

'use strict';

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
      [],
      false);
  }

  getLastFetchProperties() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec,
      feed_internals.mojom.PageHandler_GetLastFetchProperties_ResponseParamsSpec,
      [],
      false);
  }

  refreshForYouFeed() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshFollowingFeed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec,
      null,
      [],
      false);
  }

  refreshWebFeedSuggestions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec,
      null,
      [],
      false);
  }

  getFeedProcessScopeDump() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ResponseParamsSpec,
      [],
      false);
  }

  getFeedHistograms() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec,
      feed_internals.mojom.PageHandler_GetFeedHistograms_ResponseParamsSpec,
      [],
      false);
  }

  overrideFeedHost(host) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec,
      null,
      [host],
      false);
  }

  overrideDiscoverApiEndpoint(endpoint_url) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec,
      null,
      [endpoint_url],
      false);
  }

  overrideFeedStreamData(data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec,
      null,
      [data],
      false);
  }

  setWebFeedFollowIntroDebugEnabled(enabled) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setUseFeedQueryRequests(use_legacy) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec,
      null,
      [use_legacy],
      false);
  }

  setFollowingFeedOrder(order) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
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
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
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
        
        // Try Method 0: GetGeneralProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGeneralProperties (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetLastFetchProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLastFetchProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RefreshForYouFeed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshForYouFeed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RefreshFollowingFeed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshFollowingFeed (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RefreshWebFeedSuggestions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshWebFeedSuggestions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetFeedProcessScopeDump
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedProcessScopeDump (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetFeedHistograms
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeedHistograms (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OverrideFeedHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideFeedHost (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OverrideDiscoverApiEndpoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideDiscoverApiEndpoint (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OverrideFeedStreamData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OverrideFeedStreamData (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetWebFeedFollowIntroDebugEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebFeedFollowIntroDebugEnabled (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetUseFeedQueryRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUseFeedQueryRequests (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetFollowingFeedOrder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFollowingFeedOrder (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetGeneralProperties_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getGeneralProperties');
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
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetLastFetchProperties_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getLastFetchProperties');
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
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshForYouFeed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.refreshForYouFeed');
          const result = this.impl.refreshForYouFeed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshFollowingFeed_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.refreshFollowingFeed');
          const result = this.impl.refreshFollowingFeed();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_RefreshWebFeedSuggestions_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.refreshWebFeedSuggestions');
          const result = this.impl.refreshWebFeedSuggestions();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedProcessScopeDump_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getFeedProcessScopeDump');
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
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_GetFeedHistograms_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getFeedHistograms');
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
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedHost_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.overrideFeedHost');
          const result = this.impl.overrideFeedHost(params.host);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideDiscoverApiEndpoint_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.overrideDiscoverApiEndpoint');
          const result = this.impl.overrideDiscoverApiEndpoint(params.endpoint_url);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_OverrideFeedStreamData_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.overrideFeedStreamData');
          const result = this.impl.overrideFeedStreamData(params.data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetWebFeedFollowIntroDebugEnabled_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setWebFeedFollowIntroDebugEnabled');
          const result = this.impl.setWebFeedFollowIntroDebugEnabled(params.enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetUseFeedQueryRequests_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setUseFeedQueryRequests');
          const result = this.impl.setUseFeedQueryRequests(params.use_legacy);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(feed_internals.mojom.PageHandler_SetFollowingFeedOrder_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setFollowingFeedOrder');
          const result = this.impl.setFollowingFeedOrder(params.order);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

feed_internals.mojom.PageHandlerReceiver = feed_internals.mojom.PageHandlerReceiver;

feed_internals.mojom.PageHandlerPtr = feed_internals.mojom.PageHandlerRemote;
feed_internals.mojom.PageHandlerRequest = feed_internals.mojom.PageHandlerPendingReceiver;

