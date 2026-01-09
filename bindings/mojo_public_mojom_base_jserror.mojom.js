// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/jserror.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: JsError
mojo_base.mojom.JsErrorSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.JsError',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cause', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
