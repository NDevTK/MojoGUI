// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_key/storage_key.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.StorageKeySpec = { $: {} };

// Struct: StorageKey
mojo.internal.Struct(
    blink.mojom.StorageKeySpec, 'blink.mojom.StorageKey', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_level_site', 8, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 16, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ancestor_chain_bit', 24, 0, blink.mojom.AncestorChainBitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_level_site_if_third_party_enabled', 32, 0, network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ancestor_chain_bit_if_third_party_enabled', 40, 0, blink.mojom.AncestorChainBitSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);
