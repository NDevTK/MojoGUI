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

// Struct: Properties
feed_internals.mojom.Properties = class {
  constructor(values = {}) {
    this.use_feed_query_requests = values.use_feed_query_requests !== undefined ? values.use_feed_query_requests : 0;
    this.following_feed_order = values.following_feed_order !== undefined ? values.following_feed_order : "";
  }
};

// Struct: LastFetchProperties
feed_internals.mojom.LastFetchProperties = class {
  constructor(values = {}) {
    this.last_action_upload_time = values.last_action_upload_time !== undefined ? values.last_action_upload_time : 0;
  }
};

// Interface: PageHandler
feed_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'feed_internals.mojom.PageHandler';
  }

  getGeneralProperties() {
    // Method: GetGeneralProperties
    return new Promise((resolve) => {
      // Call: GetGeneralProperties()
      resolve({});
    });
  }

  getLastFetchProperties() {
    // Method: GetLastFetchProperties
    return new Promise((resolve) => {
      // Call: GetLastFetchProperties()
      resolve({});
    });
  }

  refreshForYouFeed() {
    // Method: RefreshForYouFeed
    // Call: RefreshForYouFeed()
  }

  refreshFollowingFeed() {
    // Method: RefreshFollowingFeed
    // Call: RefreshFollowingFeed()
  }

  refreshWebFeedSuggestions() {
    // Method: RefreshWebFeedSuggestions
    // Call: RefreshWebFeedSuggestions()
  }

  getFeedProcessScopeDump() {
    // Method: GetFeedProcessScopeDump
    return new Promise((resolve) => {
      // Call: GetFeedProcessScopeDump()
      resolve({});
    });
  }

  getFeedHistograms() {
    // Method: GetFeedHistograms
    return new Promise((resolve) => {
      // Call: GetFeedHistograms()
      resolve({});
    });
  }

  overrideFeedHost(host) {
    // Method: OverrideFeedHost
    // Call: OverrideFeedHost(host)
  }

  overrideDiscoverApiEndpoint(endpoint_url) {
    // Method: OverrideDiscoverApiEndpoint
    // Call: OverrideDiscoverApiEndpoint(endpoint_url)
  }

  overrideFeedStreamData(data) {
    // Method: OverrideFeedStreamData
    // Call: OverrideFeedStreamData(data)
  }

  setWebFeedFollowIntroDebugEnabled(enabled) {
    // Method: SetWebFeedFollowIntroDebugEnabled
    // Call: SetWebFeedFollowIntroDebugEnabled(enabled)
  }

  setUseFeedQueryRequests(use_legacy) {
    // Method: SetUseFeedQueryRequests
    // Call: SetUseFeedQueryRequests(use_legacy)
  }

  setFollowingFeedOrder(order) {
    // Method: SetFollowingFeedOrder
    // Call: SetFollowingFeedOrder(order)
  }

};

feed_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
