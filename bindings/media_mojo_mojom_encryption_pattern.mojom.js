// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/encryption_pattern.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: EncryptionPattern
media.mojom.EncryptionPatternSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.EncryptionPattern',
      packedSize: 16,
      fields: [
        { name: 'crypt_byte_block', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'skip_byte_block', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
