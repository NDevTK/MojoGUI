// Auto-generated MojoJS binding
// Source: chromium_src/components/os_crypt/async/common/encryptor.mojom
// Module: os_crypt_async.mojom

'use strict';

// Module namespace
var os_crypt_async = os_crypt_async || {};
os_crypt_async.mojom = os_crypt_async.mojom || {};


// Struct: Key
os_crypt_async.mojom.KeySpec = {
  $: {
    structSpec: {
      name: 'os_crypt_async.mojom.Key',
      packedSize: 24,
      fields: [
        { name: 'algorithm', packedOffset: 8, packedBitOffset: 0, type: os_crypt_async.mojom.AlgorithmSpec, nullable: false },
        { name: 'key', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Encryptor
os_crypt_async.mojom.EncryptorSpec = {
  $: {
    structSpec: {
      name: 'os_crypt_async.mojom.Encryptor',
      packedSize: 24,
      fields: [
        { name: 'provider_for_encryption', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'key_entries', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
