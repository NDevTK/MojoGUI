// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/version.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: Version
mojo_base.mojom.VersionSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Version',
      packedSize: 16,
      fields: [
        { name: 'components', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
