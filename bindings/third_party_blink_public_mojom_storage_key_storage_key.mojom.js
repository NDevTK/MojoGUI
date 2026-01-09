// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/storage_key/storage_key.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: StorageKey
blink.mojom.StorageKeySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StorageKey',
      packedSize: 56,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'top_level_site', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'ancestor_chain_bit', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'top_level_site_if_third_party_enabled', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ancestor_chain_bit_if_third_party_enabled', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
