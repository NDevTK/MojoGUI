// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/back_forward_cache_not_restored_reasons.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Struct: SameOriginBfcacheNotRestoredDetails
blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SameOriginBfcacheNotRestoredDetails',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'children', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.BackForwardCacheNotRestoredReasonsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ScriptSourceLocationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'reasons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.BFCacheBlockingDetailedReasonSpec, false), nullable: false, minVersion: 0 },
        { name: 'same_origin_details', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
