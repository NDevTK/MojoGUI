// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/string16.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: String16
mojo_base.mojom.String16Spec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.String16',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BigString16
mojo_base.mojom.BigString16Spec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.BigString16',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
