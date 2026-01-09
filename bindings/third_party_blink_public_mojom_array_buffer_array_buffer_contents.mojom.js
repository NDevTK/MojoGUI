// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/array_buffer/array_buffer_contents.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SerializedArrayBufferContents
blink.mojom.SerializedArrayBufferContentsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerializedArrayBufferContents',
      packedSize: 32,
      fields: [
        { name: 'contents', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'max_byte_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'is_resizable_by_user_javascript', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
