// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/safe_base_name.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: SafeBaseName
mojo_base.mojom.mojom.SafeBaseNameSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.SafeBaseName',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
