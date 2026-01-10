// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_key/storage_key.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Struct: StorageKey
blink.mojom.mojom.StorageKeySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageKey',
      packedSize: 48,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'top_level_site', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'ancestor_chain_bit', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AncestorChainBitSpec, nullable: false, minVersion: 0 },
        { name: 'top_level_site_if_third_party_enabled', packedOffset: 24, packedBitOffset: 0, type: network.mojom.SchemefulSiteSpec, nullable: false, minVersion: 0 },
        { name: 'ancestor_chain_bit_if_third_party_enabled', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.AncestorChainBitSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
