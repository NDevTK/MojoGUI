// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/proto_wrapper.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: ProtoWrapper
mojo_base.mojom.ProtoWrapperSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.ProtoWrapper',
      packedSize: 24,
      fields: [
        { name: 'proto_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'smuggled', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
