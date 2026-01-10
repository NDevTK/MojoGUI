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
network.mojom.LinkRelAttributeSpec = { $: mojo.internal.Enum() };

// Enum: LinkAsAttribute
network.mojom.LinkAsAttribute = {
  kUnspecified: 0,
  kFont: 1,
  kImage: 2,
  kScript: 3,
  kStyleSheet: 4,
  kFetch: 5,
};
network.mojom.LinkAsAttributeSpec = { $: mojo.internal.Enum() };

// Enum: CrossOriginAttribute
network.mojom.CrossOriginAttribute = {
  kUnspecified: 0,
  kAnonymous: 1,
  kUseCredentials: 2,
};
network.mojom.CrossOriginAttributeSpec = { $: mojo.internal.Enum() };

// Struct: LinkHeader
network.mojom.LinkHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LinkHeader',
      packedSize: 40,
      fields: [
        { name: 'href', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'rel', packedOffset: 8, packedBitOffset: 0, type: network.mojom.LinkRelAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'as', packedOffset: 12, packedBitOffset: 0, type: network.mojom.LinkAsAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'cross_origin', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CrossOriginAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_priority', packedOffset: 20, packedBitOffset: 0, type: network.mojom.FetchPriorityAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
