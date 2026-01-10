// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/digitally_signed.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.HashAlgorithmSpec = { $: mojo.internal.Enum() };
network.mojom.SignatureAlgorithmSpec = { $: mojo.internal.Enum() };
network.mojom.DigitallySignedSpec = { $: {} };

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
mojo.internal.Struct(
    network.mojom.DigitallySignedSpec, 'network.mojom.DigitallySigned', [
      mojo.internal.StructField('hash_algorithm', 0, 0, network.mojom.HashAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature_algorithm', 8, 0, network.mojom.SignatureAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
