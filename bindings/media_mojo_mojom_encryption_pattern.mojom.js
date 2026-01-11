// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/encryption_pattern.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.EncryptionPatternSpec = { $: {} };

// Struct: EncryptionPattern
mojo.internal.Struct(
    media.mojom.EncryptionPatternSpec, 'media.mojom.EncryptionPattern', [
      mojo.internal.StructField('crypt_byte_block', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('skip_byte_block', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
