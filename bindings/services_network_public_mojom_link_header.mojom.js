// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/link_header.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: LinkRelAttribute
network.mojom.mojom.LinkRelAttribute = {
  kDnsPrefetch: 0,
  kPreconnect: 1,
  kPreload: 2,
  kModulePreload: 3,
};
network.mojom.mojom.LinkRelAttributeSpec = { $: mojo.internal.Enum() };

// Enum: LinkAsAttribute
network.mojom.mojom.LinkAsAttribute = {
  kUnspecified: 0,
  kFont: 1,
  kImage: 2,
  kScript: 3,
  kStyleSheet: 4,
  kFetch: 5,
};
network.mojom.mojom.LinkAsAttributeSpec = { $: mojo.internal.Enum() };

// Enum: CrossOriginAttribute
network.mojom.mojom.CrossOriginAttribute = {
  kUnspecified: 0,
  kAnonymous: 1,
  kUseCredentials: 2,
};
network.mojom.mojom.CrossOriginAttributeSpec = { $: mojo.internal.Enum() };

// Struct: LinkHeader
network.mojom.mojom.LinkHeaderSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.LinkHeader',
      packedSize: 40,
      fields: [
        { name: 'href', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'rel', packedOffset: 16, packedBitOffset: 0, type: network.mojom.LinkRelAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'as', packedOffset: 20, packedBitOffset: 0, type: network.mojom.LinkAsAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'cross_origin', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CrossOriginAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'fetch_priority', packedOffset: 28, packedBitOffset: 0, type: network.mojom.FetchPriorityAttributeSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
