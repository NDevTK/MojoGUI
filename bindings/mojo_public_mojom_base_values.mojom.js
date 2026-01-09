// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/values.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: DictionaryValue
mojo_base.mojom.DictionaryValueSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.DictionaryValue',
      packedSize: 16,
      fields: [
        { name: 'storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ListValue
mojo_base.mojom.ListValueSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ListValue',
      packedSize: 16,
      fields: [
        { name: 'storage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
