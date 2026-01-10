// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/back_forward_cache_not_restored_reasons.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec = { $: {} };
blink.mojom.BFCacheBlockingDetailedReasonSpec = { $: {} };
blink.mojom.BackForwardCacheNotRestoredReasonsSpec = { $: {} };

// Struct: SameOriginBfcacheNotRestoredDetails
mojo.internal.Struct(
    blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec, 'blink.mojom.SameOriginBfcacheNotRestoredDetails', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('children', 8, 0, mojo.internal.Array(blink.mojom.BackForwardCacheNotRestoredReasonsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BFCacheBlockingDetailedReason
mojo.internal.Struct(
    blink.mojom.BFCacheBlockingDetailedReasonSpec, 'blink.mojom.BFCacheBlockingDetailedReason', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, blink.mojom.ScriptSourceLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BackForwardCacheNotRestoredReasons
mojo.internal.Struct(
    blink.mojom.BackForwardCacheNotRestoredReasonsSpec, 'blink.mojom.BackForwardCacheNotRestoredReasons', [
      mojo.internal.StructField('src', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('reasons', 24, 0, mojo.internal.Array(blink.mojom.BFCacheBlockingDetailedReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('same_origin_details', 32, 0, blink.mojom.SameOriginBfcacheNotRestoredDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);
