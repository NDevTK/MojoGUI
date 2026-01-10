// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/prefetched_signed_exchange_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Struct: SHA256HashValue
blink.mojom.mojom.SHA256HashValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SHA256HashValue',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PrefetchedSignedExchangeInfo
blink.mojom.mojom.PrefetchedSignedExchangeInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrefetchedSignedExchangeInfo',
      packedSize: 48,
      fields: [
        { name: 'outer_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'header_integrity', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.SHA256HashValueSpec, nullable: false, minVersion: 0 },
        { name: 'inner_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'inner_response', packedOffset: 24, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'loader_factory_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
