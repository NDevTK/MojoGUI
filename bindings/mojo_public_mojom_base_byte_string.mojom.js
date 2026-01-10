// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/byte_string.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: ByteString
mojo_base.mojom.ByteStringSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ByteString',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
