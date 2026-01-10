// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var url = url || {};


// Enum: ResourceType
blink.mojom.mojom.ResourceType = {
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
  kNavigationPreloadMainFrame: 18,
  kNavigationPreloadSubFrame: 19,
  kJson: 20,
};
blink.mojom.mojom.ResourceTypeSpec = { $: mojo.internal.Enum() };

// Struct: CommonNetworkInfo
blink.mojom.mojom.CommonNetworkInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonNetworkInfo',
      packedSize: 24,
      fields: [
        { name: 'network_accessed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'always_access_network', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_endpoint', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPEndPointSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RedirectInfo
blink.mojom.mojom.RedirectInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RedirectInfo',
      packedSize: 24,
      fields: [
        { name: 'origin_of_new_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'network_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommonNetworkInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ResourceLoadInfo
blink.mojom.mojom.ResourceLoadInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfo',
      packedSize: 128,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'final_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'referrer', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'original_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request_destination', packedOffset: 96, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'request_priority', packedOffset: 100, packedBitOffset: 0, type: network.mojom.RequestPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'was_cached', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'network_info', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.CommonNetworkInfoSpec, nullable: false, minVersion: 0 },
        { name: 'net_error', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'proxy_chain', packedOffset: 56, packedBitOffset: 0, type: network.mojom.ProxyChainSpec, nullable: false, minVersion: 0 },
        { name: 'load_timing_info', packedOffset: 64, packedBitOffset: 0, type: network.mojom.LoadTimingInfoSpec, nullable: false, minVersion: 0 },
        { name: 'raw_body_bytes', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'total_received_bytes', packedOffset: 80, packedBitOffset: 0, type: mojo_base.mojom.ByteCountSpec, nullable: false, minVersion: 0 },
        { name: 'redirect_info_chain', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.RedirectInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'http_status_code', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'did_use_server_http_auth', packedOffset: 112, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 128}]
    }
  }
};
