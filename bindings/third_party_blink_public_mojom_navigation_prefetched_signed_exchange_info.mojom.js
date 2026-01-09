// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/navigation/prefetched_signed_exchange_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SHA256HashValue
blink.mojom.SHA256HashValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SHA256HashValue',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrefetchedSignedExchangeInfo
blink.mojom.PrefetchedSignedExchangeInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrefetchedSignedExchangeInfo',
      packedSize: 16,
      fields: [
        { name: 'loader_factory_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
