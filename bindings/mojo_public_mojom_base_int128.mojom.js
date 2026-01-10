// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/int128.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: Int128
mojo_base.mojom.mojom.Int128Spec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Int128',
      packedSize: 24,
      fields: [
        { name: 'high', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'low', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Uint128
mojo_base.mojom.mojom.Uint128Spec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Uint128',
      packedSize: 24,
      fields: [
        { name: 'high', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'low', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
