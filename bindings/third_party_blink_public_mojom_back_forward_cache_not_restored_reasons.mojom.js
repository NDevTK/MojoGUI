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
      packedSize: 16,
      fields: [
        { name: 'children', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'same_origin_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
