// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/link_header.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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
