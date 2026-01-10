// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/extra_response_data.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};


// Struct: ExtraResponseData
extensions.mojom.ExtraResponseDataSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ExtraResponseData',
      packedSize: 16,
      fields: [
        { name: 'blobs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SerializedBlobSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
