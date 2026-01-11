// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.ResourceTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CommonNetworkInfoSpec = { $: {} };
blink.mojom.RedirectInfoSpec = { $: {} };
blink.mojom.ResourceLoadInfoSpec = { $: {} };

// Enum: ResourceType
blink.mojom.ResourceType = {
  kMainFrame: 0,
  kSubFrame: 1,
  kStylesheet: 2,
  kScript: 3,
  kImage: 4,
  kFontResource: 5,
  kSubResource: 6,
  kObject: 7,
  kMedia: 8,
  kWorker: 9,
  kSharedWorker: 10,
  kPrefetch: 11,
  kFavicon: 12,
  kXhr: 13,
  kPing: 14,
  kServiceWorker: 15,
  kCspReport: 16,
  kPluginResource: 17,
  kNavigationPreloadMainFrame: 19,
  kNavigationPreloadSubFrame: 20,
  kJson: 21,
};

// Struct: CommonNetworkInfo
mojo.internal.Struct(
    blink.mojom.CommonNetworkInfoSpec, 'blink.mojom.CommonNetworkInfo', [
      mojo.internal.StructField('remote_endpoint', 0, 0, network.mojom.IPEndPointSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('network_accessed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('always_access_network', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RedirectInfo
mojo.internal.Struct(
    blink.mojom.RedirectInfoSpec, 'blink.mojom.RedirectInfo', [
      mojo.internal.StructField('origin_of_new_url', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('network_info', 8, 0, blink.mojom.CommonNetworkInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ResourceLoadInfo
mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoSpec, 'blink.mojom.ResourceLoadInfo', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('final_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_destination', 40, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_priority', 48, 0, network.mojom.RequestPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_info', 64, 0, blink.mojom.CommonNetworkInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proxy_chain', 72, 0, network.mojom.ProxyChainSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('load_timing_info', 80, 0, network.mojom.LoadTimingInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('raw_body_bytes', 88, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('total_received_bytes', 96, 0, mojo_base.mojom.ByteCountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_info_chain', 104, 0, mojo.internal.Array(blink.mojom.RedirectInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('net_error', 112, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('http_status_code', 116, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('was_cached', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('did_use_server_http_auth', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);
