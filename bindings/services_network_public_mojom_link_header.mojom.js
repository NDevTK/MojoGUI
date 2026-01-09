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

// Struct: LinkHeader
network.mojom.LinkHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LinkHeader',
      packedSize: 56,
      fields: [
        { name: 'href', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'rel', packedOffset: 8, packedBitOffset: 0, type: network.mojom.LinkRelAttributeSpec, nullable: false },
        { name: 'as', packedOffset: 16, packedBitOffset: 0, type: network.mojom.LinkAsAttributeSpec, nullable: false },
        { name: 'cross_origin', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CrossOriginAttributeSpec, nullable: false },
        { name: 'fetch_priority', packedOffset: 32, packedBitOffset: 0, type: network.mojom.FetchPriorityAttributeSpec, nullable: false },
        { name: 'mime_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
