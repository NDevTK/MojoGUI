// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/digitally_signed.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: HashAlgorithm
network.mojom.mojom.HashAlgorithm = {
  HASH_ALGO_NONE: 0,
  HASH_ALGO_MD5: 1,
  HASH_ALGO_SHA1: 2,
  HASH_ALGO_SHA224: 3,
  HASH_ALGO_SHA256: 4,
  HASH_ALGO_SHA384: 5,
  HASH_ALGO_SHA512: 6,
};
network.mojom.mojom.HashAlgorithmSpec = { $: mojo.internal.Enum() };

// Enum: SignatureAlgorithm
network.mojom.mojom.SignatureAlgorithm = {
  SIG_ALGO_ANONYMOUS: 0,
  SIG_ALGO_RSA: 1,
  SIG_ALGO_DSA: 2,
  SIG_ALGO_ECDSA: 3,
};
network.mojom.mojom.SignatureAlgorithmSpec = { $: mojo.internal.Enum() };

// Struct: DigitallySigned
network.mojom.mojom.DigitallySignedSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DigitallySigned',
      packedSize: 24,
      fields: [
        { name: 'hash_algorithm', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HashAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'signature_algorithm', packedOffset: 12, packedBitOffset: 0, type: network.mojom.SignatureAlgorithmSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
