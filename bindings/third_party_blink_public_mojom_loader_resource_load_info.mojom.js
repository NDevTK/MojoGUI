// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
  kNavigationPreloadMainFrame: 18,
  kNavigationPreloadSubFrame: 19,
  kJson: 20,
};

// Struct: CommonNetworkInfo
blink.mojom.CommonNetworkInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonNetworkInfo',
      packedSize: 16,
      fields: [
        { name: 'remote_endpoint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RedirectInfo
blink.mojom.RedirectInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RedirectInfo',
      packedSize: 16,
      fields: [
        { name: 'network_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ResourceLoadInfo
blink.mojom.ResourceLoadInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfo',
      packedSize: 16,
      fields: [
        { name: 'did_use_server_http_auth', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
