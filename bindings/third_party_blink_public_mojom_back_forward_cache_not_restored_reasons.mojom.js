// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/back_forward_cache_not_restored_reasons.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SameOriginBfcacheNotRestoredDetails
blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SameOriginBfcacheNotRestoredDetails',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'children', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BFCacheBlockingDetailedReason
blink.mojom.BFCacheBlockingDetailedReasonSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BFCacheBlockingDetailedReason',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackForwardCacheNotRestoredReasons
blink.mojom.BackForwardCacheNotRestoredReasonsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackForwardCacheNotRestoredReasons',
      packedSize: 48,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reasons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'same_origin_details', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
