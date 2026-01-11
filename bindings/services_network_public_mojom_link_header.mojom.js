// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/link_header.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.LinkRelAttributeSpec = { $: mojo.internal.Enum() };
network.mojom.LinkAsAttributeSpec = { $: mojo.internal.Enum() };
network.mojom.CrossOriginAttributeSpec = { $: mojo.internal.Enum() };
network.mojom.LinkHeaderSpec = { $: {} };

// Enum: LinkRelAttribute
network.mojom.LinkRelAttribute = {
  kDnsPrefetch: 0,
  kPreconnect: 1,
  kPreload: 2,
  kModulePreload: 3,
};

// Enum: LinkAsAttribute
network.mojom.LinkAsAttribute = {
  kUnspecified: 0,
  kFont: 1,
  kImage: 2,
  kScript: 3,
  kStyleSheet: 4,
  kFetch: 5,
};

// Enum: CrossOriginAttribute
network.mojom.CrossOriginAttribute = {
  kUnspecified: 0,
  kAnonymous: 1,
  kUseCredentials: 2,
};

// Struct: LinkHeader
mojo.internal.Struct(
    network.mojom.LinkHeaderSpec, 'network.mojom.LinkHeader', [
      mojo.internal.StructField('href', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rel', 8, 0, network.mojom.LinkRelAttributeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('as', 16, 0, network.mojom.LinkAsAttributeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('cross_origin', 24, 0, network.mojom.CrossOriginAttributeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('fetch_priority', 32, 0, network.mojom.FetchPriorityAttributeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('mime_type', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);
