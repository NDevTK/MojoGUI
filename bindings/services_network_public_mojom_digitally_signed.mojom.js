// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/digitally_signed.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: HashAlgorithm
network.mojom.HashAlgorithm = {
  HASH_ALGO_NONE: 0,
  HASH_ALGO_MD5: 1,
  HASH_ALGO_SHA1: 2,
  HASH_ALGO_SHA224: 3,
  HASH_ALGO_SHA256: 4,
  HASH_ALGO_SHA384: 5,
  HASH_ALGO_SHA512: 6,
};

// Enum: SignatureAlgorithm
network.mojom.SignatureAlgorithm = {
  SIG_ALGO_ANONYMOUS: 0,
  SIG_ALGO_RSA: 1,
  SIG_ALGO_DSA: 2,
  SIG_ALGO_ECDSA: 3,
};

// Struct: DigitallySigned
network.mojom.DigitallySignedSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DigitallySigned',
      packedSize: 16,
      fields: [
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
